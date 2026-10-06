/*
 * Work sections on index.html ("Built at Volograms", "Built hands-on").
 *
 * 1. Galleries  [data-gallery]
 *    Any .sc-slide inside .sc-stage: <img>, <video> or a <div>.
 *    - Images that fail to load are dropped, so a slide can point at a
 *      file that doesn't exist yet.
 *    - Slides hidden by CSS (.todo outside ?draft) are skipped.
 *    - A .sc-cover slide is a fallback, dropped once a real image/video exists.
 *    - Native scroll-snap strip (swipe on touch) + dots when 2+ slides.
 *    - Videos only play while visible.
 *
 * 2. Spotlight  [data-spotlight]
 *    Shows one <article class="spot"> at a time and builds a thumbnail
 *    rail from all of them (first slide + kicker + name).
 *    Deep link: #<article id> selects that project.
 */
(function () {
  function isShown(el) {
    return el.isConnected && getComputedStyle(el).display !== 'none';
  }

  function visibleSlides(gallery) {
    var stage = gallery.querySelector('.sc-stage');
    return stage ? Array.prototype.filter.call(stage.children, function (s) {
      return s.classList.contains('sc-slide') && isShown(s);
    }) : [];
  }

  /* ---------- Galleries ---------- */

  function setupGallery(gallery) {
    var stage = gallery.querySelector('.sc-stage');
    if (!stage) return;

    var frame = stage.parentElement;
    if (!frame.classList.contains('sc-frame')) {
      frame = document.createElement('div');
      frame.className = 'sc-frame';
      stage.parentNode.insertBefore(frame, stage);
      frame.appendChild(stage);
    }
    frame.querySelectorAll('.sc-dots, .sc-caption').forEach(function (n) { n.remove(); });

    var all = Array.prototype.slice.call(stage.children).filter(function (s) {
      return s.classList.contains('sc-slide');
    });
    var hasReal = all.some(function (s) {
      return (s.tagName === 'IMG' || s.tagName === 'VIDEO') && !s.classList.contains('is-broken');
    });
    all.forEach(function (s) {
      if (s.classList.contains('sc-cover')) s.classList.toggle('is-hidden', hasReal);
    });
    var slides = all.filter(isShown);

    var caption = document.createElement('p');
    caption.className = 'sc-caption';
    frame.appendChild(caption);

    var dots = [];
    if (slides.length > 1) {
      var bar = document.createElement('div');
      bar.className = 'sc-dots';
      slides.forEach(function (slide, i) {
        var d = document.createElement('button');
        d.type = 'button';
        d.className = 'sc-dot';
        d.setAttribute('aria-label', slide.dataset.caption || ('Image ' + (i + 1)));
        d.addEventListener('click', function () {
          stage.scrollTo({ left: slides[i].offsetLeft - stage.offsetLeft, behavior: 'smooth' });
        });
        bar.appendChild(d);
        dots.push(d);
      });
      frame.appendChild(bar);
    }

    var g = gallery._g = { current: 0, slides: slides };

    g.activate = function (i) {
      g.current = i;
      dots.forEach(function (d, j) { d.classList.toggle('is-active', j === i); });
      caption.textContent = slides[i] ? (slides[i].dataset.caption || '') : '';
      g.syncVideo();
    };

    g.syncVideo = function () {
      var visible = gallery._onScreen && !gallery.closest('.spot:not(.is-active)');
      slides.forEach(function (s, j) {
        if (s.tagName !== 'VIDEO') return;
        if (j === g.current && visible) { s.play().catch(function () {}); } else { s.pause(); }
      });
    };

    g.reset = function () {
      stage.scrollLeft = 0;
      g.activate(0);
    };

    if (!stage._bound) {
      stage._bound = true;
      stage.addEventListener('scroll', function () {
        var gg = gallery._g;
        var i = Math.round(stage.scrollLeft / (stage.clientWidth || 1));
        if (i !== gg.current && gg.slides[i]) gg.activate(i);
      }, { passive: true });
    }

    g.reset();
    gallery.dispatchEvent(new CustomEvent('gallery:built', { bubbles: true }));
  }

  var galleries = document.querySelectorAll('[data-gallery]');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        e.target._onScreen = e.isIntersecting;
        if (e.target._g) e.target._g.syncVideo();
      });
    }, { threshold: 0.4 });
    galleries.forEach(function (g) { io.observe(g); });
  } else {
    galleries.forEach(function (g) { g._onScreen = true; });
  }

  galleries.forEach(function (gallery) {
    var t;
    function rebuild() { clearTimeout(t); t = setTimeout(function () { setupGallery(gallery); }, 30); }

    gallery.querySelectorAll('img.sc-slide').forEach(function (img) {
      function broken() { img.classList.add('is-broken'); rebuild(); }
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) broken();
      else img.addEventListener('error', broken);
    });
    gallery.querySelectorAll('video.sc-slide').forEach(function (v) {
      v.addEventListener('error', function () { v.classList.add('is-broken'); rebuild(); }, true);
    });

    setupGallery(gallery);
  });

  /* ---------- Spotlight ---------- */

  function thumbMedia(spot) {
    var gallery = spot.querySelector('[data-gallery]');
    var first = gallery ? visibleSlides(gallery)[0] : null;
    if (!first) return null;
    if (first.tagName === 'IMG' || first.tagName === 'VIDEO') {
      var src = first.tagName === 'IMG' ? (first.currentSrc || first.src) : first.getAttribute('poster');
      if (!src) return null;
      var im = document.createElement('img');
      im.src = src;
      im.alt = '';
      im.loading = 'lazy';
      return im;
    }
    if (first.classList.contains('sc-cover')) {
      var c = first.cloneNode(true);
      c.classList.remove('sc-slide');
      c.removeAttribute('data-caption');
      return c;
    }
    return null;
  }

  document.querySelectorAll('[data-spotlight]').forEach(function (root) {
    var spots = Array.prototype.slice.call(root.querySelectorAll('.spot'));
    if (spots.length < 2) return;

    var rail = document.createElement('div');
    rail.className = 'spot-rail';
    rail.setAttribute('role', 'tablist');
    rail.setAttribute('aria-label', root.getAttribute('aria-label') || 'Projects');
    root.appendChild(rail);

    var current = -1;

    var thumbs = spots.map(function (spot, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'spot-thumb';
      b.setAttribute('role', 'tab');
      if (spot.id) b.setAttribute('aria-controls', spot.id);

      var kicker = spot.querySelector('.sc-kicker');
      var name = spot.querySelector('.sc-name');
      b.innerHTML = '<span class="spot-thumb-img"></span><span><span class="spot-thumb-kicker"></span><span class="spot-thumb-name"></span></span>';
      // The section title already says "Volograms" / "hands-on", so drop that prefix here
      b.querySelector('.spot-thumb-kicker').textContent = kicker ? kicker.textContent.replace(/^(Volograms|Solo)\s*·\s*/, '') : '';
      b.querySelector('.spot-thumb-name').textContent = name ? name.textContent.trim() : '';
      b.addEventListener('click', function () { show(i, true); });
      rail.appendChild(b);

      // Prev / next + counter inside each spot
      var step = document.createElement('div');
      step.className = 'spot-step';
      step.innerHTML = '<button type="button" aria-label="Previous project">&#8592;</button>' +
                       '<button type="button" aria-label="Next project">&#8594;</button>' +
                       '<span>' + (i + 1) + ' / ' + spots.length + '</span>';
      step.children[0].addEventListener('click', function () { show((i - 1 + spots.length) % spots.length); });
      step.children[1].addEventListener('click', function () { show((i + 1) % spots.length); });
      var body = spot.querySelector('.sc-body');
      if (body) body.appendChild(step);

      return b;
    });

    function refreshThumb(i) {
      var holder = thumbs[i].querySelector('.spot-thumb-img');
      holder.innerHTML = '';
      var m = thumbMedia(spots[i]);
      if (m) holder.appendChild(m);
    }

    function show(i, fromRail) {
      if (i === current) return;
      current = i;
      spots.forEach(function (s, j) {
        var on = j === i;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-hidden', on ? 'false' : 'true');
        if ('inert' in s) s.inert = !on;
        var g = s.querySelector('[data-gallery]');
        if (g && g._g) { if (on) g._g.reset(); else g._g.syncVideo(); }
      });
      thumbs.forEach(function (t, j) {
        t.classList.toggle('is-active', j === i);
        t.setAttribute('aria-selected', j === i ? 'true' : 'false');
      });
      if (fromRail && window.matchMedia('(max-width: 768px)').matches) {
        // On phones, bring the spotlight back into view after picking a thumbnail
        var top = root.getBoundingClientRect().top;
        if (top < 0) window.scrollBy({ top: top - 80, behavior: 'smooth' });
      }
      // Keep the active thumbnail visible in the swipe strip (phones)
      if (rail.scrollWidth > rail.clientWidth) {
        rail.scrollTo({ left: thumbs[i].offsetLeft - rail.offsetLeft - 16, behavior: 'smooth' });
      }
    }

    spots.forEach(function (s, i) {
      refreshThumb(i);
      s.addEventListener('gallery:built', function () { refreshThumb(i); });
    });

    var start = 0;
    if (location.hash) {
      var idx = spots.findIndex(function (s) { return '#' + s.id === location.hash; });
      if (idx > -1) start = idx;
    }
    root.classList.add('is-ready');
    show(start);
  });

  // Deep links after load (e.g. a #dashpad link elsewhere on the page)
  window.addEventListener('hashchange', function () {
    var el = document.getElementById(location.hash.slice(1));
    if (!el || !el.classList.contains('spot')) return;
    var root = el.closest('[data-spotlight]');
    var i = Array.prototype.indexOf.call(root.querySelectorAll('.spot'), el);
    var thumb = root.querySelectorAll('.spot-thumb')[i];
    if (thumb) thumb.click();
  });
})();
