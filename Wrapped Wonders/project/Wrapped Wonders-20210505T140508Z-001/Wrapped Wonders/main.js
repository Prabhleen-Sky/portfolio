// ----------------Using JQuery show and hide methods on review & Feedback ---------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$('document').ready(function(){
	$('#feedback').hide();
	$('#showFeed').click(function(){
		$('#feedback').show();
		$('.review').hide();
	});
	
	$('#showRev').click(function(){
		$('#feedback').hide();
		$('.review').show();
	});

	});

// -------------------------------------End of review & feedback Jquery-----------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// ----------------Using JQuery show and hide methods on about us & follow us ---------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$('document').ready(function(){
	$('#follow').hide();
	$('#showFoll').click(function(){
		$('#follow').show();
		$('#about').hide();
		$('#services').hide();
	});
	
	$('#showAbt').click(function(){
		$('#follow').hide();
		$('#about').show();
		$('#services').show();
	});

	$('.textWeb').css({'color' : 'white',
		   'text-align':'center',
	});
	$('.boxAbt p').css({'font-size' : '20px',
	});


});

// -------------------------------------End of about us & follow us Jquery-----------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>