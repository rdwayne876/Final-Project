"use strict";

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850), zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);    
});

$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});