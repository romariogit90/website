(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !e.target.closest('.header-inner')) setMenu(false);
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  var form = document.querySelector('.contact-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim();
    var email = f.email.value.trim();
    var company = f.company.value.trim();
    var message = f.message.value.trim();
    var errors = [];

    [['name', name, 'your name'], ['email', email, 'a valid email address'], ['message', message, 'a short message']]
      .forEach(function (item) {
        var bad = !item[1] || (item[0] === 'email' && !emailRe.test(item[1]));
        f[item[0]].setAttribute('aria-invalid', bad ? 'true' : 'false');
        if (bad) errors.push(item);
      });

    if (errors.length) {
      status.className = 'form-status is-error';
      status.textContent = 'Please enter ' + errors.map(function (i) { return i[2]; }).join(', ') + '.';
      f[errors[0][0]].focus();
      return;
    }

    var subject = 'Consultation enquiry from ' + name + (company ? ' (' + company + ')' : '');
    var body = message + '\n\n—\n' + name + '\n' + email + (company ? '\n' + company : '');
    window.location.href = 'mailto:contact@romarioconsultante.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    status.className = 'form-status is-ok';
    status.textContent = 'Your email application should now open with the message ready to send.';
  });
})();
