
$(window).on('load resize scroll', function () {
    if ($(this).width() < 992 && !$('body').hasClass('sidebar-mini')) {
        $('body').addClass('drawer-sidebar');
        $('#sidebar-collapse').slimScroll({
            height: '100%',
            railOpacity: '0.9',
        });
    }
});

$(function(){

    // SIDEBAR ACTIVATE METISMENU
	$(".metismenu").metisMenu();
    
    // LAYOUT SETTINGS
    // ======================

    // SIDEBAR TOGGLE ACTION
    $('.js-sidebar-toggler').click(function() {
        if( $('body').hasClass('drawer-sidebar') ) {
            $('#sidebar').backdrop();
        } else {
            $('body').toggleClass('sidebar-mini');
            if(! $('body').hasClass('sidebar-mini') ) {
                $('#sidebar-collapse').hide();
                setTimeout(function () {
                    $('#sidebar-collapse').fadeIn(300);
                }, 200);
            }
        }
    });
    
    // fixed layout
    $('#_fixedlayout').change(function(){
    	if( $(this).is(':checked') ) {
           $('body').addClass('fixed-layout');
    	    $('#sidebar-collapse').slimScroll({
    		    height: '100%',
    		    railOpacity: '0.9',
    	    });
    	} else {
            $('#sidebar-collapse').slimScroll({destroy: true}).css({overflow: 'visible', height: 'auto'});
            $('body').removeClass('fixed-layout');
        }
    });

    // drawer sidebar
    $('#_drawerSidebar').change(function(){
    	$('body').removeClass('sidebar-mini');
        if( $(this).is(':checked') ) {
            $('body').addClass('drawer-sidebar');
            $('#sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: '0.9',
            });
        } else {
            $('#sidebar-collapse').slimScroll({destroy: true}).css({overflow: 'visible', height: 'auto'});
            $('body').removeClass('drawer-sidebar');
        }
    });

    // fixed navbar
    $('#_fixedNavbar').change(function() {
        if($(this).is(':checked')) $('body').addClass('fixed-navbar');
        else $('body').removeClass('fixed-navbar');
    });
    
    // Boxed layout
    $("[name='layout-style']").change(function(){
        if(+$(this).val()) $('body').addClass('boxed-layout');
        else $('body').removeClass('boxed-layout');
    });

});
