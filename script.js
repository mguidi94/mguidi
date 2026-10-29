(function () {
  var topnav = document.getElementById('topnav');
  var toggle = document.getElementById('navToggle');

  // Transparent nav over the home hero until scroll
  if (topnav && topnav.classList.contains('home')) {
    var onScroll = function () {
      topnav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.3);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu
  if (toggle && topnav) {
    toggle.addEventListener('click', function () {
      var open = topnav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        topnav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll (content stays visible when JS is off)
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
  items.forEach(function (el) { observer.observe(el); });
})();
