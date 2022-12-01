(function ($, Drupal) {

  /* User login menu dropdown (MyAccount) */
  $('.nav-holder').hover(function () {
    const dropdownMenu = $(this).children('.nav-holder > .nav');
    if (dropdownMenu.is(':visible')) {
      dropdownMenu.toggleClass('expanded');
    }
  });

})(jQuery, Drupal);
