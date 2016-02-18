(function ($) {
  Drupal.behaviors.terpentijn = {
    load: function() {



    },
    attach: function (context, settings) {

      // header slideshow
      $('.view-slider').flexslider({
        selector: ".view-content > .views-row",
        animation: "slide",
        easing: "swing",
        direction: "horizontal",
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 8000,
        animationSpeed: 1000,
        initDelay: 0,
        randomize: false,
        pauseOnAction: true,
        pauseOnHover: false,
        touch: true,
        controlNav: false,
        directionNav: true,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>'
      });

      $('.view-slider .views-row').each(function(){
        var thisimgurl = $(this).find('.field-name-field-slide-pic img').attr('src');
        $(this).css('background','url('+thisimgurl+') no-repeat center / cover');
      });

      // project page isotope //////////////////////////////////////////////////////////////////////////////////
      // createFilterHtml
      var tagarray = [];
      $('<div class="button-group filter-button-group"><a class="active" data-filter="*">alles</a></div>').insertBefore('.page-projecten .view-projects');
      // setFilterClasses
      $('.page-projecten .view-projects .views-row').each(function(){
        var $this = $(this);
        $this.find('.field-name-field-project-tilesize .field-item').each(function(){
          var tilesize = $(this).text();
          $this.addClass(tilesize);
        });
        $this.find('.field-name-field-project-tax .field-item').each(function(){
          var thisclass = $(this).html().toLowerCase();
          $this.addClass(thisclass);
          if (tagarray.indexOf(thisclass) == -1) {
            tagarray.push(thisclass);
          }
        });
      });
      console.log(tagarray);
      for (var i=0;i<tagarray.length;i++) {
        $('<a class="filterbutton" data-filter=".'+ tagarray[i] +'">'+tagarray[i]+'</a>').appendTo('.page-projecten .filter-button-group');
      }
      // setIsotope
      $('.page-projecten .view-projects').isotope({
        itemSelector: '.views-row',
        animationEngine: 'css',
        masonry: {
          columnWidth: 300,
          gutter: 30,
          isFitWidth: true
        }
      });
      $('.page-projecten .filter-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $('.page-projecten .view-projects').isotope({ filter: filterValue });
        $(this).addClass('active').siblings().removeClass('active');
      });
      // project page isotope //////////////////////////////////////////////////////////////////////////////////


      // projectteaser copy img to bg
      $('.view-projects .views-row').each(function(){
        var imgurl = $(this).find('.field-name-field-project-pic img, .views-field-field-project-pic img').attr('src');
        $(this).css('background-image','url('+imgurl+')');
        // calc
        var thisrowhight = $(this).height();
        var thistitlehight = $(this).find('.field-name-title, .views-field-title').height();
        var thisintrohight = $(this).find('.field-name-field-project-intro, .views-field-field-project-intro').height();
        var paddingtop = (thisrowhight - (thisintrohight + thistitlehight)) / 2;
        $(this).find('.field-name-title, .views-field-title').css('margin-top',paddingtop+'px');
      });




      // project detail slideshow //////////////////////////////////////////////////////////////////////////////////
      $('.node-type-project .field-name-field-project-pic').flexslider({
        selector: ".field-items > .field-item",
        animation: "slide",
        easing: "swing",
        direction: "horizontal",
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 8000,
        animationSpeed: 1000,
        initDelay: 0,
        randomize: false,
        pauseOnAction: false,
        pauseOnHover: true,
        touch: true,
        controlNav: true,
        directionNav: true,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>'
      });
      // project detail slideshow //////////////////////////////////////////////////////////////////////////////////


      // reponsive menu
      if (!$('#block-system-main-menu > i.fa-bars').length) {
        $('<i class="fa fa-bars"></i>').prependTo('#block-system-main-menu');
      }
      $('#block-system-main-menu > i.fa-bars').click(function(){
        $(this).toggleClass('open');
        $('#block-system-main-menu').toggleClass('open');
      });



      // maps
      $('.node-type-webform .field-name-field-googlemaps-iframe').insertAfter('.header');

      // services icons
      $('.view-services .views-row').each(function(){
        var iconval = $(this).find('.field-name-field-service-icon .field-item').html();
        $('<div class="svgbox"><span><img class="field-name-field-service-icon-svg" src="'+ iconval +'"></span></div>').insertBefore($(this).find('.field-name-field-service-icon'));
      });

    }
  };
})(jQuery);
