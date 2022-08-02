$('document').ready(function(){
	$('#feedback').hide();
	$('#showFeed').click(function(){
		$('#feedback').show();
		$('.slide-wrap').hide();
	});
	
	$('#showRev').click(function(){
		$('#feedback').hide();
		$('.slide-wrap').show();
	});

	/*$("#slideshow > div:gt(0)").hide();

		setInterval(function() { 
		$('#slideshow div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
		}, 5000);*/

	});

