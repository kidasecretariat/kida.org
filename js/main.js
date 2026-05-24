(function ($) {
    "use strict";

    // WOW Animation
    new WOW().init();

    // Smooth Scrolling
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
        }, 700, 'easeInOutExpo');
    });

})(jQuery);