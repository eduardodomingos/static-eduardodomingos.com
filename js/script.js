(function($) {
    $(document).ready(function(){
        var dom = {
            $window: $(window),
            $document: $(document),
            $body: $('body'),
            $header: $('.header'),
            $navbar: $('.navbar'),
            $hamburger: $('.hamburger')
        };

        (function init() {
            calcNavbarPosition();
            dom.$hamburger.click(function(){
                $(this).toggleClass('is-active');
                dom.$body.toggleClass('navbar-is-open');
                calcNavbarPosition();
            });
        })();

        function calcNavbarPosition() {
            var navbarOffsetTop = (dom.$header.offset().top - dom.$window.scrollTop()) + dom.$header.outerHeight();
            dom.$navbar.css({
                'top' : dom.$header.outerHeight(),
                'height' : window.innerHeight - navbarOffsetTop
            }); 
        }

    });
}(jQuery));