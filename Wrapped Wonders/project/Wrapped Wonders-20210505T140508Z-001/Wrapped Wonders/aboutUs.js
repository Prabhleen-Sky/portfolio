$('document').ready(function(){
	$('#follow').hide();
	$('#showFoll').click(function(){
		$('#follow').show();
		$('#about').hide();
		$('#services').hide();
		$('.payment').hide();

	});
	
	$('#showAbt').click(function(){
		$('#follow').hide();
		$('#about').show();
		$('#services').show();
		$('.payment').show();


	});

	$('.textWeb').css({'color' : 'white',
		   'text-align':'center',
	});
	$('.boxAbt p').css({'font-size' : '20px',
	});


});
