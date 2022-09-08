var $ = jQuery.noConflict();

jQuery(document).ready(function($){

$('.navbar-toggler, #nav-icon,.hamburger').click(function(){
  $('body').toggleClass('sidebar-open');
});


 $('.btn').click(function(){
   $(this).toggleClass('active');
 })
//   $('.hero-search-box').click(function(){
//    $('body').toggleClass('searh_open');
//  })
// $('.hideBtn').click(function(){
//    $('body').removeClass('searh_open');
//  })
/*==========================*/ 
/* sliders */ 
/*==========================*/
if($('.hero-img-slider').length > 0){
jQuery('.hero-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: '.hero-college-link-slide',
});
$('.hero-college-link-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: '.hero-img-slider'
    });
}

/*==========================*/  
/* blog-post Slider */  
/*==========================*/ 
if($('.blog-post-slider').length > 0){
jQuery('.blog-post-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false, 
  arrows: true,
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}
/*==========================*/  
/* verified-slider */  
/*==========================*/ 
if($('.verified-slider').length > 0){
jQuery('.verified-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false, 
  arrows: true,
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}
/*==========================*/  
/* verified-slider */  
/*==========================*/ 
if($('.testmonials-slider').length > 0){
jQuery('.testmonials-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false, 
  arrows: false,
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,  
        adaptiveHeight: false
      }
    }
  ]
});
}

/*==========================*/  
/* ms-slider */  
/*==========================*/ 
if($('.ms-slider').length > 0){
jQuery('.ms-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false, 
  arrows: true,
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}
/*==========================*/  
/* ticker Slider */  
/*==========================*/ 
if($('.ticker-slider').length > 0){
$('.ticker-slider').bxSlider({
  minSlides: 1,
  maxSlides: 5,
  slideMargin: 0,
  ticker: true,
  speed: 20000,
  tickerHover:true,
});
}

/*==========================*/  
/* blog-post Slider */  
/*==========================*/ 
if($('.populer-course-slder').length > 0){
jQuery('.populer-course-slder').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false, 
  arrows: true,
  infinite: true, 
  centerMode: false, 
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 580,
      settings: {
        arrows: true,
        slidesToShow: 1,
      }
    }
  ]
});
}

/*==========================*/  
/* blog-post Slider */  
/*==========================*/ 
if($('.school-info-slider').length > 0){
jQuery('.school-info-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false, 
  arrows: true,
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,  
        adaptiveHeight: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}

$('a[data-mdb-toggle="tab"]').on('init', function () {
  $('.school-info-slider').slick('setPosition');
  alert("Hello! I am an alert box!!");
}) 

// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//   $('.school-info-slider').slick('setPosition');
// })


/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.mobile-slider').length > 0){
jQuery('.mobile-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}

/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));

});