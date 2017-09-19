// Default JavaScript Functions and Initiations

// Load Custom Google Font
WebFont.load({
    google: {
        families: ['Ubuntu:300,400,500,700', 'Montserrat:400,700']
    }
});


// Swipe Controls for Carousel
$('.carousel').carousel({
    interval: 2000
});
$('.carousel').swiperight(function() {
    $(this).carousel('prev');
});
$('.carousel').swipeleft(function() {
    $(this).carousel('next');
});