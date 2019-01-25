
$(function(){
	hideLastTab();

    // LAYOUT STYLE
    $("[name='layout-style']").change(function(){
        if(+$(this).val()) $('body').addClass('boxed-layout');
        else $('body').removeClass('boxed-layout');
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

function hideLastTab() {
	var boxWidth = $('.navbar-tabs-wrapper').outerWidth(),
	    tabWidth = $('.top-navbar-tabs').outerWidth(),
	    tabsDropdown = $('.top-navbar-tabs').find('.tabs-dropdown');
    
    if(tabWidth > boxWidth) {
		tabsDropdown = $('.top-navbar-tabs').find('.tabs-dropdown');
		var lastChild = $('.top-navbar-tabs .nav-item:eq(-2)');
		$("<a/>", {
		    class: "dropdown-item",
		    href: lastChild.find('.nav-link').attr('href'),
		    'data-toggle': 'tab',
		    html: lastChild.find('.nav-link').html(),
	    }).prependTo(tabsDropdown.find('.dropdown-menu'));
	    lastChild.remove();
	    hideLastTab();
	}
}

