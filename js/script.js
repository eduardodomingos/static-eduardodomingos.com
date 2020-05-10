(function($) {
    $(document).ready(function(){
        var dom = {
            $window: $(window),
            $document: $(document),
            $body: $('body'),
            $header: $('.header'),
            $offcanvas: $('.offcanvas'),
            $hamburger: $('.hamburger')
        };

        (function init() {
            // if(dom.$window.width() < 992) {
            //     calcNavbarPosition();
            // }
            dom.$hamburger.click(function(){
                $(this).toggleClass('is-active');
                dom.$body.toggleClass('offcanvas-is-open');
                calcNavbarPosition();
            });
        })();

        function calcNavbarPosition() {
            var navbarOffsetTop = (dom.$header.offset().top - dom.$window.scrollTop()) + dom.$header.outerHeight();
            dom.$offcanvas.css({
                'top' : navbarOffsetTop,
                'height' : window.innerHeight - navbarOffsetTop
            }); 
        }

    });
}(jQuery));