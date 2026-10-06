/*
 * Showcase galleries (index.html, "Built at Volograms" and "Built hands-on").
 *
 * Markup: <div class="sc-media" data-gallery><div class="sc-stage"> slides </div></div>
 * Slides are any .sc-slide element: <img>, <video> or a <div> (cover/placeholder).
 *  - Images that fail to load are removed, so a slide can point at a file
 *    that doesn't exist yet.
 *  - Slides hidden by CSS (e.g. .todo outside ?draft) are skipped.
 *  - A .sc-cover slide is a fallback: it is dropped as soon as any real
 *    image or video slide is present.
 *  - The stage is a native scroll-snap strip, so swipe works on touch.
 *    Thumbnails + arrows are added when there is more than one slide.
 *  - Videos only play while they are the active slide and on screen.
 */
(function () {
  var galleries = document.querySelectorAll('[data-gallery]');
  if (!galleries.length) return;

  function isShown(el) {
    return el.isConnected && getComputedStyle(el).display !== 'none';
  }

  function thumbFor(slide) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sc-thumb';
    btn.setAttribute('aria-label', slide.dataset.caption || slide.getAttribute('alt') || 'Show slide');
    var src = slide.tagName === 'IMG' ? slide.currentSrc || slide.src
            : slide.tagName === 'VIDEO' ? slide.getAttribute('poster') : null;
    if (src) {
      var im = document.createElement('img');
      im.src = src;
      im.alt = '';
      btn.appendChild(im);
      if (slide.tagName === 'VIDEO') btn.classList.add('sc-thumb--video');
    } else {
      btn.classList.add('sc-thumb--blank');
      btn.textContent = slide.classList.contains('sc-cover') ? '◆' : '+';
    }
    return btn;
  }

  function setup(gallery) {
    var stage = gallery.querySelector('.sc-stage');
    if (!stage) return;

    // Wrap the stage once so arrows can sit on top of it
    var frame = stage.parentElement;
    if (!frame.classList.contains('sc-frame')) {
      frame = document.createElement('div');
      frame.className = 'sc-frame';
      stage.parentNode.insertBefore(frame, stage);
      frame.appendChild(stage);
    }

    // Old UI bits (on rebuild)
    gallery.querySelectorAll('.sc-thumbs, .sc-nav, .sc-caption').forEach(function (n) { n.remove(); });

    var all = Array.prototype.slice.call(stage.querySelectorAll(':scope > .sc-slide'));
    var hasReal = all.some(function (s) {
      return (s.tagName === 'IMG' || s.tagName === 'VIDEO') && !s.classList.contains('is-broken');
    });
    all.forEach(function (s) {
      if (s.classList.contains('sc-cover')) s.classList.toggle('is-hidden', hasReal);
    });
    var slides = all.filter(isShown);
    gallery.classList.toggle('is-multi', slides.length > 1);

    var caption = document.createElement('p');
    caption.className = 'sc-caption';
    frame.appendChild(caption);

    var thumbs = [];
    if (slides.length > 1) {
      var bar = document.createElement('div');
      bar.className = 'sc-thumbs';
      slides.forEach(function (slide, i) {
        var t = thumbFor(slide);
        t.addEventListener('click', function () { go(i); });
        bar.appendChild(t);
        thumbs.push(t);
      });
      gallery.appendChild(bar);

      ['prev', 'next'].forEach(function (dir) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'sc-nav sc-nav--' + dir;
        b.setAttribute('aria-label', dir === 'prev' ? 'Previous' : 'Next');
        b.innerHTML = dir === 'prev' ? '&#8592;' : '&#8594;';
        b.addEventListener('click', function () {
          go((current + (dir === 'prev' ? -1 : 1) + slides.length) % slides.length);
        });
        frame.appendChild(b);
      });
    }

    var current = 0;
    var onScreen = false;

    function go(i) {
      stage.scrollTo({ left: slides[i].offsetLeft - stage.offsetLeft, behavior: 'smooth' });
    }

    function activate(i) {
      current = i;
      thumbs.forEach(function (t, j) { t.classList.toggle('is-active', j === i); });
      caption.textContent = slides[i] ? (slides[i].dataset.caption || '') : '';
      slides.forEach(function (s, j) {
        if (s.tagName !== 'VIDEO') return;
        if (j === i && onScreen) { s.play().catch(function () {}); } else { s.pause(); }
      });
    }

    stage.addEventListener('scroll', function () {
      var w = stage.clientWidth || 1;
      var i = Math.round(stage.scrollLeft / w);
      if (i !== current && slides[i]) activate(i);
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      if (gallery._io) gallery._io.disconnect();
      gallery._io = new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
        activate(current);
      }, { threshold: 0.4 });
      gallery._io.observe(gallery);
    } else {
      onScreen = true;
    }

    stage.scrollLeft = 0;
    activate(0);
  }

  galleries.forEach(function (gallery) {
    var rebuild = (function () {
      var t;
      return function () { clearTimeout(t); t = setTimeout(function () { setup(gallery); }, 30); };
    })();

    gallery.querySelectorAll('img.sc-slide').forEach(function (img) {
      function broken() { img.classList.add('is-broken'); rebuild(); }
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) broken();
      else img.addEventListener('error', broken);
    });
    gallery.querySelectorAll('video.sc-slide').forEach(function (v) {
      v.addEventListener('error', function () { v.classList.add('is-broken'); rebuild(); }, true);
    });

    setup(gallery);
  });
})();
