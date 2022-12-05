(function ($, Drupal) {

  /* User login menu dropdown (MyAccount) */
  $('.iq-account').hover(function () {
    const dropdownMenu = $(this).children('.iq-account > .nav');
    if (dropdownMenu.is(':visible')) {
      dropdownMenu.toggleClass('expanded');
    }
  });

})(jQuery, Drupal);
