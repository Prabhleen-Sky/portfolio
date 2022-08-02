(function($){
	"use strict";
	new WOW().init();

	//navbar-cart
	$(".cart_link > a").on("click", function(){
		$(".mini_cart").addClass("active");
	});
	$(".mini_cart_close > a").on("click", function(){
		$(".mini_cart").removeClass("active");
	});
	 
	//sticky navbar
	$(window).on("scroll",function(){
		var scroll =$(window).scrollTop();
		if(scroll < 100){
			$(".sticky-header").removeClass("sticky");
		}else{
			$(".sticky-header").addClass("sticky");
		}
	});

	//categories section
	$("#men_").click(function(){
		$("#men").show();
		$("#women").hide();
		$("#kids").hide();
		$("#unisex").hide();
	});
	$("#women_").click(function(){
		$("#men").hide();
		$("#women").show();
		$("#kids").hide();
		$("#unisex").hide();
	});
	$("#kids_").click(function(){
		$("#men").hide();
		$("#women").hide();
		$("#kids").show();
		$("#unisex").hide();
	});
	$("#unisex_").click(function(){
		$("#men").hide();
		$("#women").hide();
		$("#kids").hide();
		$("#unisex").show();
	});
    $(window).on('load',function(){
        $(".loader").fadeOut(2000);
        $("body").fadeIn(2000);
    });
})(jQuery);
const sliderContainer = document.querySelector('.slider-container')
        const slideRight = document.querySelector('.right-slide')
        const slideLeft = document.querySelector('.left-slide')
        const upButton = document.querySelector('.up-button')
        const downButton = document.querySelector('.down-button')

        const slidesLength = slideRight.querySelectorAll('div').length


        let activeSlideIndex = 0

        slideLeft.style.top = `-${(slidesLength - 1) * 70}vh`



        upButton.addEventListener('click', () => changeSlide('up'))
        downButton.addEventListener('click', () => changeSlide('down'))


        const changeSlide = (direction) => {
            const sliderHeight = sliderContainer.clientHeight
            if(direction === 'up') {
                activeSlideIndex++
                if(activeSlideIndex > slidesLength - 1) {
                    activeSlideIndex = 0
                }
            } else if(direction === 'down') {
                activeSlideIndex--
                if(activeSlideIndex < 0) {
                    activeSlideIndex = slidesLength - 1
                }
            }

            slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
            slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
        }
	// ----------------Using JQuery show and hide methods on review & Feedback ---------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var testimonials = document.getElementById('testimonials-rev');
        var control1 = document.getElementById('control1');
        var control2 = document.getElementById('control2');
        var control3 = document.getElementById('control3');
        
        
        control1.onclick=function(){
            testimonials.style.transform = "translateX(870px)";
            if( window.matchMedia("(max-width: 600px)")){
                testimonials.style.transform = "translateX(520px)";
             }else if( window.matchMedia("(min-width: 600px)")){
                testimonials.style.transform = "translateX(642px)";
             }else if( window.matchMedia("(min-width: 768pxpx)")){
                testimonials.style.transform = "translateX(780px)";
             }else if( window.matchMedia("(min-width: 992px)")){
                testimonials.style.transform = "translateX(800px)";
             }else if( window.matchMedia("(min-width: 1080px)")){
                testimonials.style.transform = "translateX(850px)";
             }else if( window.matchMedia("(min-width: 1200px)")){
                testimonials.style.transform = "translateX(870px)";
             }
            control1.classList.add("active");
            control2.classList.remove("active");
            control3.classList.remove("active");
        }
        
        control2.onclick=function(){
            testimonials.style.transform = "translateX(0px)";
            control1.classList.remove("active");
            control2.classList.add("active");
            control3.classList.remove("active");
        }
        
        control3.onclick=function(){
            if( window.matchMedia("(max-width: 600px)")){
                testimonials.style.transform = "translateX(-520px)";
             }else if( window.matchMedia("(min-width: 600px)")){
                testimonials.style.transform = "translateX(-650px)";
             }else if( window.matchMedia("(min-width: 768px)")){
                testimonials.style.transform = "translateX(-800px)";
             }else if( window.matchMedia("(min-width: 992px)")){
                testimonials.style.transform = "translateX(-800px)";
             }else if( window.matchMedia("(min-width: 1080px)")){
                testimonials.style.transform = "translateX(-900px)";
             }else if( window.matchMedia("(min-width: 1200px)")){
                testimonials.style.transform = "translateX(-870px)";
             }
            control1.classList.remove("active");
            control2.classList.remove("active");
            control3.classList.add("active");
        }
// -------------------------------------End of review & feedback Jquery-----------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ----------------------------------------Start of Script of Newsletter Section------------------------------------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ---------------------   Validation Part Of Email-------------------
    const emailSub = document.getElementById('email-subscribe');
    var outputSub = document.getElementById('outputSub');
    
    function checkEmail(){
        const emailSubValue = emailSub.value.trim();
        let verify=true;
        if(emailSubValue === '') {
            setErrorFor(emailSub, 'Email cannot be blank');
            outputSub.innerHTML=" ";
            verify=false;
        } else if (!isEmail(emailSubValue)) {
            setErrorFor(emailSub, 'Not a valid email');
            outputSub.innerHTML=" ";
            verify=false;
        } else {
            setSuccessFor(emailSub);
            outputSub.innerHTML=" ";
        }

        if(verify){
            outputSub.innerHTML = "Congratulations!!! Your Newsletter Subscription has been Activated</p> ";       
            emailSub.value = " ";
            b =  document.querySelectorAll(".form-controls-subscribe");
            b.forEach((container) => container.classList.remove("success"));
        }

     }
     function isEmail(emailSub) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailSub);
    }
    // Below is the setErrorFor function which we have used in validations for both login & sign Up form
    // it will get the type of input & message as input & then get the parent element of that input value
    // in html part, we have created a small tag below the input..it will select that small tag
    // then will change the class of parent element from form-controls to form-controls error
    //  form-controls error class will display the red cross icon & also the red border
    // and in small tag the error msg will got displayed

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-controls-subscribe error';
        small.innerText = message;
    }

    // Below is the setSuccessrFor function which we have used in validations for both login & sign Up form
    // it will get the type of input & message as input & then get the parent element of that input value
    // in html part, we have created a small tag below the input..it will select that small tag
    // then will change the class of parent element from form-controls to form-controls success
    //  form-controls success class will display the green check icon & also the green border
    // and in small tag the error msg will got displayed

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-controls-subscribe success';
    }
// ----------------------------------------End of Script of Newsletter Section------------------------------------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>