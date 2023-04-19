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
});