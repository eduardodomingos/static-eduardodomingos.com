(function($) {
    $(document).ready(function(){
        var dom = {
            $window: $(window),
            // $document: $(document),
            $body: $('body'),
            $header: $('#masthead'),
            $menuToggle: $('#menu-toggle'),
            $announcementBar: $('#announcement-bar'),
            $offcanvas: $('#offcanvas')
            // $megamenu: $('#mega-menu'),
            // $site_content: $('#site-content')
        };

        var announcementBarHeight;
        var viewportHeight;

        /*
         * Menu Toggling
         */
        dom.$menuToggle.click(function(){
            dom.$menuToggle.toggleClass('is-active');
            dom.$body.toggleClass('offcanvas-is-open');
            if(dom.$body.hasClass('offcanvas-is-open')) {
                offcanvasPosition();
                dom.$body.css( 'overflow', 'hidden' );
            }
            else {
                dom.$body.css( 'overflow', '' );
            }
        });

        function offcanvasPosition() {
            var offcanvasOffsetTop = (dom.$header.offset().top - dom.$window.scrollTop()) + dom.$header.outerHeight();
            dom.$offcanvas.css({
                'top' : offcanvasOffsetTop,
                'height' : window.innerHeight - offcanvasOffsetTop
            });
        }

        /*
         * Collapsed Header
         */
        function getBodyScrollTop () { 
            var el = document.scrollingElement || document.documentElement;
            return el.scrollTop; 
        }

        function headerManager(bodyScrollTop) {
            if (bodyScrollTop > announcementBarHeight) {
                dom.$body.addClass('masthead-is-fixed');
            } else {
                dom.$body.removeClass('masthead-is-fixed');
            }
            if (bodyScrollTop > (viewportHeight / 2)) {
                dom.$body.addClass('masthead-is-collapsed');
            } else {
                dom.$body.removeClass('masthead-is-collapsed');
            }
        }
    
        dom.$window.scroll(function() {
            headerManager(getBodyScrollTop());
        });

        /*
         * Init
         */
        (function init() {
            announcementBarHeight = dom.$announcementBar.outerHeight();
            viewportHeight =  window.innerHeight;
            headerManager(getBodyScrollTop());
        })();

        /*
         * Resize Event
         */
        $(window).resize(function() {
            viewportHeight =  window.innerHeight;
            if(dom.$body.hasClass('offcanvas-is-open')) {
                offcanvasPosition();
                dom.$body.css( 'overflow', 'hidden' );
            }
            if(parseInt(dom.$header.find('>.container').css('width'), 10) >= 990 && dom.$body.hasClass('offcanvas-is-open')) {
                dom.$body.removeClass('offcanvas-is-open');
                dom.$menuToggle.removeClass('is-active');
                dom.$body.css( 'overflow', '' );
            }
        });
    });
}(jQuery));