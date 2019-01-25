
$(function(){

    // SIDEBAR ACTIVATE METISMENU
	$(".metismenu").metisMenu();
    

    // SIDEBAR TOGGLE ACTION
    $('.js-sidebar-toggler').click(function() {
        if( $('body').hasClass('drawer-sidebar') ) {
            $('.page-sidebar').backdrop();
        } else {
            $('.page-sidebar').toggleClass('opened');
        }
        $(this).toggleClass('active');
    });

    // LAYOUT STYLE
    $("[name='layout-style']").change(function(){
        if(+$(this).val()) $('body').addClass('boxed-layout');
        else $('body').removeClass('boxed-layout');
    });

    // drawer sidebar
    $('#_drawerSidebar').change(function(){
        $('.page-sidebar').removeClass('opened');
        if( $(this).is(':checked') ) {
            $('body').addClass('drawer-sidebar');
        } else {
            $('body').removeClass('drawer-sidebar');
        }
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
