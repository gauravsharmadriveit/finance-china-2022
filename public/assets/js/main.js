$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

//   $(document).ready(function () {
//     var url = window.location;
//     $('.wsmenu li a[href="'+ url +'"]').addClass('active');
//     $('.wsmenu li a').filter(function() {
//               return this.href == url;
//     }).addClass('active');
// });
$(document).ready(function () {
    $(".read-more-btn").click(function () {
        $(this).prev().slideToggle();
        if ($(this).text() == "Read More") {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }
    });
});


    
$(document).ready(function() {
    $("#home_slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,        
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
            1025: {
                items: 1
            }
        }
    });
  });

  $(document).ready(function() {
    $("#event-slide").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
            1025: {
                items: 1
            }
        }
    });
  });

  $(document).ready(function() {
    $(".sponsorspartners").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        dots:false,        
        // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
  });
   // PRELOADER
//    var counting = setInterval(function () {
//     var loader = document.getElementById("percentage");
//     var currval = parseInt(loader.innerHTML);
//     var Width = 99 - currval;
//     var loadscreen = document.getElementById("loader-progress");
//     loader.innerHTML = ++currval;
//     if (currval === 100) {
//       clearInterval(counting);
//       $("body").toggleClass('page-loaded');
//     }
//     loadscreen.style.transition = "0.1s";
//     loadscreen.style.width = Width + "%";
//   }, 10);

