$(document).ready(function () {
    // Code for detecting the scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.about-us').offset().top / 1.5) {
            // Code for hiding and activating goes here

            // left fixed bar
            $('#goto-down').removeClass('active');
            $('#goto-top').addClass('active');

            // navToggle Btn 
            $('#nav-toggle-icon-btn').addClass('active');

           

        } else {
            // Left fixed bar
            $('#goto-top').removeClass('active');
            $('#goto-down').addClass('active');

            // Navtoggle btn
            $('#nav-toggle-icon-btn').removeClass('active');
            
            // Right nav
             $('#right-bar').removeClass('right-bar');
            
             //Toggle Icon
             $('#top-toggle-btn i').addClass('fa-bars');
             $('#top-toggle-btn i').removeClass('fa-times')
             
        }
    });
    

    // Onclick Right Toggle Button
    $('#nav-toggle-icon-btn').click(function(e){
        e.preventDefault();
            $('#right-bar').toggleClass('right-bar');
             $('#top-toggle-btn i').toggleClass('fa-bars');
             $('#top-toggle-btn i').toggleClass('fa-times')
            
        
    });

    






    $('#goto-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });


    $('#goto-down').click(function () {
        $('html').animate({
            scrollTop: $("footer").offset().top
        }, 1500)
    });

    // Click on search button
    $('.search-overlay-close-btn').click(function(){
        $('.search-overlay').removeClass('active');
    });


    // right Navbar button
    $('#nav-toggle-icon-btn').click(function(){
        $('#right-nav').addClass('right-nav');
    });
    // Init AOS
    AOS.init();

    // 

    $('#top-search-btn').click(function () {
        $('.search-overlay').addClass('active');
    });

});