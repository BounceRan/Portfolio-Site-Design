
$('.Myname').mouseenter(function(){

    $('.hiddentext').css({
        
    color:'white',
         
    
    });

}).mouseleave(function(){

$('.hiddentext').css({
 
    color: 'rgba(0,0,0,.01)',
    
});


});



  $(window).load(function(){
        $(".preLoad").delay(300).fadeOut(500,"swing");
    });
    


$('.Myname').click(function(){

$('.hiddentext').css({
color:'white',
});



});





$(".blur.pic").mouseenter(function(){
$("#ptext").text("first");

});





//bootstrap & jquery 辅助页标

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});







//$( '.swipebox' ).swipebox();






$( '#gallery' ).click( function( e ) {
	e.preventDefault();
	$.swipebox( [
		{ href:'imgs/portfolio/p1.jpg', title:'My Caption' }, 
		{ href:'imgs/portfolio/p2.jpg', title:'My Second Caption' }
	] );
} );






	$( '.swipebox' ).swipebox( {
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars on desktop
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: false // true will return to the first image after the last image is reached
	} );






