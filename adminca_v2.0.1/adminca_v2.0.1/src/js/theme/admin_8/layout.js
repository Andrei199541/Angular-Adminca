// LAYOUT SETTINGS
// ======================

$(window).on('load resize', function () {
    if ($(this).width() < 992) $('body').addClass('drawer-sidebar');
    else $('body').removeClass('drawer-sidebar');
});


$(function () {
        
    // SIDEBAR TOGGLE ACTION
    $('.js-sidebar-toggler').click(function() {
        if( $('body').hasClass('drawer-sidebar') ) {
            $('.top-navbar').backdrop();
        } else {
            $('body').toggleClass('hidden-menu');
        }
    });
    
    // drawer sidebar
    $('#_drawerSidebar').change(function(){
    	$('body').removeClass('sidebar-mini');
        if( $(this).is(':checked') ) {
            $('body').addClass('drawer-sidebar');
            $('#navbar-wrapper').slimScroll({
                height: '100%',
                railOpacity: '0.9',
            });
        } else {
            $('#navbar-wrapper').slimScroll({destroy: true}).css({overflow: 'visible', height: 'auto'});
            $('body').removeClass('drawer-sidebar');
        }
    });
    
    // LAYOUT STYLE
    $("[name='layout-style']").change(function(){
        if(+$(this).val()) $('body').addClass('boxed-layout');
        else $('body').removeClass('boxed-layout');
    });

    // THEMES COLOR CHANGE
    // ======================

    $('.color-skin-box input:radio').change(function() {
        var val = $(this).val();
        if(val != 'default') {
            if(! $('#theme-style').length ) {
                $('head').append( "<link href='assets/css/themes/"+val+".css' rel='stylesheet' id='theme-style' >" );
            } else $('#theme-style').attr('href', 'assets/css/themes/'+val+'.css');
        } else $('#theme-style').remove();
    });
    

    // Navbar dropdowns
    $('.top-navbar .dropdown-menu .has-submenu > a').click(function(){
        $(this).parent().toggleClass('open').siblings('li.open').removeClass('open');
        return false;
    });

});
