// When a user lands on the index page, a slideshow including four images will begin
// Each image should appear for approximately five seconds, then fade into the following image
// Below the images, a series of four dots will each illuminate (i.e. change color) in turn
// indicating where in the series the user is

// On the index page, when a user clicks one of the masonry images, a Modal Window should
// open with a larger version of the image

// On the Portfolio page, images will appear slightly small (250px wide) but when clicked
// should open a Modal Window onto a larger (800px) version

// On the Contact page, the form should not submit if all information is not included
// If a field is not filled out, a red border should appear around it


$('#portimage img').on('click', function () {
	var lightboxImageSrc = $(this).attr('src');

	$('.lightbox img').attr('src', lightboxImageSrc);

	$('.lightbox').css("display", "flex").hide().fadeIn(500);


});

$('.lightbox').on('click', function () {
$('.lightbox').fadeOut(500);
});

// 


$('.close-modal').on('click', function () {
	$('.modal').removeClass('show-modal');
});

// from Stack Overflow re: incomplete forms
$(document).ready(function() {
    $('form').submit(function() {
        var incomplete = $('form :input').filter(function() {
                             return $(this).val() == '';
                         });
        //if incomplete contains any elements, the form has not been filled 
        if(incomplete.length) {
            alert('Please complete all forms.');
            //to prevent submission of the form
            return false;
        }
     });
});


// image slider

var translateX = 0;

$('#next').on('click', function () {
    if (translateX === -75) {
        translateX = 0;
    } else {
        translateX -= 25;
    }

    $('.slides').css('transform', 'translateX(' + translateX + '%)');
});

setInterval(function() { 
        if (translateX === -75) {
            translateX = 0;
            console.log("Resetting back to", translateX)
        } else {
            translateX -= 25
            console.log(translateX)
            $('.slides').css('transform', 'translateX(' + translateX + '%)') 
        }
    }, 3000);


$('#previous').on('click', function () {
    if (translateX === 0) {
        translateX = -75;
    } else {
        translateX += 25;
    }

    $('.slides').css('transform', 'translateX(' + translateX + '%)');
});

$('.hamburger').on('click', function (event) {
    event.preventDefault();
    $('#dropdown').slideDown('show')

});