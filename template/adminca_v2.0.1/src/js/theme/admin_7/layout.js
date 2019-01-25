
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


});
