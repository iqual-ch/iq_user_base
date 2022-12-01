

(function ($, Drupal) {

  /* Set active class on User Area Menu */
  $(document).ready(function () {
    let navLinks = {
      'orders': {
        'regex': /\/user\/\d+\/orders/gm,
        'selector': '.nav-link[data-drupal-link-system-path="user/orders"]',
      },
      'edit': {
        'regex': /\/user\/\d+\/edit/gm,
        'selector': '.nav-link[data-drupal-link-system-path="user/edit"]',
      },
      'user': {
        'regex': /\/user\/\d+/gm,
        'selector': '.nav-link[data-drupal-link-system-path="user"]',
      },
    }

    for (let i = 0; i < Object.keys(navLinks).length; i++) {
      let key = Object.keys(navLinks)[i];
      if (navLinks[key].regex.exec(window.location.href)) {
        $(navLinks[key].selector).addClass('active');
        return false;
      }
    }
  })

})(jQuery, Drupal);
