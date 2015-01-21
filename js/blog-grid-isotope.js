/* -------------------------------------------- 
 Blog Grid Isotope 
-------------------------------------------- */
$('.grid-col-3').imagesLoaded( function() {
 $('.grid-col-3').isotope({
  layoutMode: 'masonry',
  itemSelector: '.grid-posts',
  transformsEnabled: false,
  resizesContainer: true   
 }); 
});

$(window).resize(function() { 
	$('.grid-col-3').imagesLoaded( function() {
 $('.grid-col-3').isotope({
  layoutMode: 'masonry',
  itemSelector: '.grid-posts',
  transformsEnabled: false,
  resizesContainer: true   
 }); 
});
});