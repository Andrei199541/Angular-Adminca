
$(function(){

    $('.side-menu > a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // SIDEBAR TOGGLE ACTION

    $('.sidebar-toggler').click(function() {
        $('.sidebar-tabs').toggleClass('opened');
        $(this).toggleClass('opened');
    });
    
});
