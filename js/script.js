(function($) {
    $(document).ready(function(){
        var dom = {
            // $window: $(window),
            // $document: $(document),
            //$body: $('body'),
            // $header: $('#masthead'),
            $menu_toggle: $('#menu-toggle'),
            // $megamenu: $('#mega-menu'),
            // $site_content: $('#site-content')
        };

        dom.$menu_toggle.click(function(){
            dom.$menu_toggle.toggleClass('is-active');
        });
    });
}(jQuery));