(function ($) {
  Drupal.behaviors.theming = {
    attach: function (context, settings) {

      // flex slideshow
      // $('.front .view-pocomas-slideshow').wrapAll('<div class="node-teaser-wrapper">');
      $('.front .view-pocomas-slideshow').flexslider({
        selector: ".view-content > .views-row",
        animation: 'slide',
        pauseOnHover: true,
        slideshowSpeed: 7000,
        minItems: 1,
        maxItems: 1,
        move: 1,
        animationLoop: true,
      });

      // sidebar slider smartphones
      var sidebar_slider = $('#content-sidebar .region-sidebar-left');
      $('<div class="sliderbutton_sidebar">Meer info...</div>').insertBefore(sidebar_slider);
      $('.sliderbutton_sidebar').click(function(){
        $(this).toggleClass('open');
        $(this).next().slideToggle('fast');
      });

      // mobile menu
      var menu_slider = $('#menubox-top #block-system-main-menu > .content');
      $('<div class="sliderbutton_menu">Menu</div>').insertBefore(menu_slider);
      $('.sliderbutton_menu').click(function(){
        $(this).toggleClass('open');
        $(this).next().slideToggle('fast');
      });

      // mobile submenu
      var submenu_slider = $('body #menubox-top #menubox-top-inner #block-system-main-menu .content > ul.menu > li > ul.menu');
      $('<div class="sliderbutton_submenu"></div>').insertBefore(submenu_slider);
      $('.sliderbutton_submenu').click(function(){
        $(this).toggleClass('open');
        $(this).next().slideToggle('fast');
      });

    }
  };
})(jQuery);