$(document).ready(function () {
    $('#team-members').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })
    $('#clients-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 700,
    })
    $('#responsiveTabsDemo').responsiveTabs({
        animation: 'slide'
    })
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    })
});

window.addEventListener('load', function () {
    $('#preloader').fadeOut('slow')
})

$(function () {
    $('#progress-elements').waypoint(
        function () {
            $(".progress-bar").each(function () {
                $(this).animate({
                    width: $(this).attr('aria-valuenow') + "%"
                })
            })
            this.destroy()
        },
        {
            offset: 'bottom-in-view'

        }
    )
    $('#portfolio-wrapper').magnificPopup(
        {
            type: 'image',
            delegate: 'a',
            gallery: {
                enabled: true
            }
        }
    )
})
$(window).on('load', function () {
    var isotope_container = $('#isotope-container').isotope({

    })
    $('#isotope-filters').on('click', 'button', function () {
        var isotope_filter = $(this).attr('data-filter')
        isotope_container.isotope({
            filter: isotope_filter
        })
        $('#isotope-filters').find('.active').removeClass('active')
        $(this).addClass('active')
    })
})

let slideIndex = 1
slideDisplay(slideIndex)
function activeSlides(n) {
    slideDisplay(slideIndex = n)
}
function slideDisplay(n) {
    let totalSlides = $('.testimonial')
    let totalDots = $('.footerdot')
    for (let i = 0; i < totalSlides.length; i++) {
        $(totalSlides[i]).css('display', 'none')
    }
    for (let i = 0; i < totalDots.length; i++) {
        $(totalDots[i]).removeClass('activate')
    }
    $(totalSlides[slideIndex - 1]).fadeIn(1000)
    $(totalDots[slideIndex - 1]).addClass('activate')
}
$('#carouselButtons').on('click', 'span', function () {
    let carouselValue = $(this).attr("data-carousel")
    activeSlides(carouselValue)
})

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('white-nav-top')
            $('.navbar-brand img').attr('src', './img/logo/logo-dark.png')
        } else {
            $('nav').removeClass('white-nav-top')
            $('.navbar-brand img').attr('src', './img/logo/logo.png')
        }
    })
})
$(function () {
    $("a.smooth-scroll").click(function (e) {
        e.preventDefault()
        let sectionId = $(this).attr('href')
        $('html,body').animate({
            scrollTop: $(sectionId).offset().top
        }, 1250)
    })
})

$(function () {
    new WOW().init()
})
$(window).on('load', function () {
    $('#home-text p').addClass("animate__slideInDown")
    $('#home-heading-2,#home-heading-1').addClass("animate__slideInLeft")
})