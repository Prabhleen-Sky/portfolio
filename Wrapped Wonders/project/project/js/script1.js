$('document').ready(function(){
	$('#feedback').hide();
	$('#showFeed').click(function(){
		$('#feedback').show();
		$('#reviewSec').hide();
	});
	
	$('#showRev').click(function(){
		$('#feedback').hide();
		$('#reviewSec').show();
	});
});

