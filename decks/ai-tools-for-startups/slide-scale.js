// Auto-fit the 1920x1080 .slide into any viewport, preserving 16:9 aspect.
(function () {
  function fit() {
    const sx = window.innerWidth / 1920;
    const sy = window.innerHeight / 1080;
    const s = Math.min(sx, sy);
    const w = 1920 * s;
    const h = 1080 * s;
    const tx = (window.innerWidth - w) / 2;
    const ty = (window.innerHeight - h) / 2;
    const r = document.documentElement.style;
    r.setProperty('--slide-scale', s.toFixed(5));
    r.setProperty('--slide-tx', tx.toFixed(2) + 'px');
    r.setProperty('--slide-ty', ty.toFixed(2) + 'px');
  }
  fit();
  window.addEventListener('resize', fit);
})();
