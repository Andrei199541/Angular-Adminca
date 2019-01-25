
$(window).on('load resize scroll', function () {
    if ($(this).width() < 992) $('body').removeClass('sidebar-mini').addClass('drawer-sidebar');
});

$(function(){
    
    // LAYOUT SETTINGS
    // ======================

    // SIDEBAR TOGGLE ACTION
    $('.js-sidebar-toggler').click(function() {
        if( $('body').hasClass('drawer-sidebar') ) {
            $('#sidebar').backdrop();
        } else {
            $('body').toggleClass('sidebar-mini');
        }
    });

    // fixed navbar
    $('#_fixedNavbar').change(function() {
        if($(this).is(':checked')) $('body').addClass('fixed-navbar');
        else $('body').removeClass('fixed-navbar');
    });
    
    // drawer sidebar
    $('#_drawerSidebar').change(function(){
        if( $(this).is(':checked') ) {
            $('body').addClass('drawer-sidebar');
        } else {
            $('body').removeClass('drawer-sidebar');
        }
        setTimeout(function(){
            $('body').removeClass('sidebar-mini');
        },200);
    });
    

    // THEMES COLOR CHANGE

    $('.color-skin-box input:radio').change(function() {
        var val = $(this).val();
        if(val != 'default') {
            if(! $('#theme-style').length ) {
                $('head').append( "<link href='assets/css/themes/"+val+".css' rel='stylesheet' id='theme-style' >" );
            } else $('#theme-style').attr('href', 'assets/css/themes/'+val+'.css');
        } else $('#theme-style').remove();
    });

});
