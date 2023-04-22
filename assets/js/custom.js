$( document ).ready(function() {
    $(function() {
        var header = $(".main-menu-wrapper");
      
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 20) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
    });

    $(".slick-list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
        autoplay: false
    });

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '1110', // Distance from top before showing element (px)
        topSpeed: 2000, // Speed back to top (ms)
        animation: 'slide', // Fade, slide, none
        animationInSpeed: 300, // Animation in speed (ms)
        animationOutSpeed: 300, // Animation out speed (ms)
        scrollText: '<span class="up-arrow"></span>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});