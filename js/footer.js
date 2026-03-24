(function () {
  var placeholder = document.getElementById('site-footer');
  if (!placeholder) return;
  placeholder.outerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-inner">
      <ul class="list-inline footer-social">
        <li class="list-inline-item">
          <a href="https://twitter.com/rafamolone" target="_blank" title="Twitter/X">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://linkedin.com/in/rafapages/en" target="_blank" title="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://rafapages.medium.com" target="_blank" title="Medium">
            <i class="fa-brands fa-medium"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://github.com/rafapages" target="_blank" title="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://scholar.google.com/citations?user=V5G2vyIAAAAJ&hl=en&oi=ao" target="_blank" title="Google Scholar">
            <i class="fa-brands fa-google-scholar"></i>
          </a>
        </li>
      </ul>
      <span class="footer-copy">© Rafael Pagés</span>
    </div>
  </div>
</footer>`;
})();
