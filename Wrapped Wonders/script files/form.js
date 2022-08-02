//---------------------------------------- Start of login Section------------------------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  Here a function toggle form is created which toggles the active class ,i.e., between login & sign up
// form classes. Due to which we are able to create a slide effect on click of the login & signup buttons.

function toggleForm(){
    var container = document.querySelector('.containerForm');
    container.classList.toggle('active')
}

// -----------------------------JS For Validations In Login & Sign Up Form--------------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ---------------------------------Start of Sign Up Form Validations---------------------------------------

// Here, we are getting the value of form, username, email, password & check password
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Here, we are adding an event to sign up form which will prevent the default action of submit button & 
// instead of it will call a function named checkInputs
form.addEventListener('submit', e =>{
	e.preventDefault();
	checkInputs();
});

// Below is the checkInputs function which will check if the entered data is correct or not
function checkInputs() {

    // Here, we are trimming the values of username, email, password & check password in order to remove 
    //the  whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

    // Here a variable verify with value true is created, means we r assuming that provided info is true
    var verify = true;

    //Below, we r getting the length of password & username
    var passLength=passwordValue.length;
    var userLength = usernameValue.length;

    //Here we r defining some regular expressions, using which we will check for validations
    var p1=/[A-Z]+/;
	var p2=/[a-z]+/;
	var p3=/[0-9]+/;
    var p4=/[!@#$%^&*]/;

    // Here is the main part where we r applying various validations on username, email, password & checkpassword
    //In this, we r mainly using 2 functions, setErrorFor & setSuccessFor, the deatil of these 2 is provided below

    //----------------------validations for username of sign up form--------------------------
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
        verify=false;
	}else if(!(p2.test(usernameValue))){
        setErrorFor(username, 'Only Alphabets are allowed');
        verify = false;
    }else if(userLength<3)
    {
        setErrorFor(username, 'Name is too short');
        verify=false;
    }
    else {
		setSuccessFor(username);
	}

    //----------------------validations for email of sign up form--------------------------
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        verify=false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        verify=false;
	} else {
		setSuccessFor(email);
	}
	
    //----------------------validations for password of sign up form--------------------------
    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
        verify=false;
	}else if(passLength<6)
    {
        setErrorFor(password, 'Password Length is Too Less');
        verify=false;

    }else if(!(p1.test(passwordValue) && p2.test(passwordValue) && p3.test(passwordValue) && p4.test(passwordValue) && 6<=passLength && passLength<=20))
    {
        setErrorFor(password, 'Password Should Have an Uppercase, a Lowercase, a Digit and a Special Character');
        verify=false;
    }
     else {
		setSuccessFor(password);
	}
	
    //----------------------validations for check password of sign up form--------------------------
	if(password2Value === '') {
		setErrorFor(password2, 'Check Password cannot be blank');
        verify=false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
        verify=false;
	} else{
		setSuccessFor(password2);
	}

    //Here is the condition that if all provided info is upto the validations then on submitting the form,
    // following actions will take place,
    // firstly a modal with id m2 will be seen , which we have created with the help of bootstrap
    //Next, the form will be resetted
    // then, success class will be removed from all the divs with form-controls class

    if(verify){
        $("#m2").modal('show');
        form.reset();
        b =  document.querySelectorAll(".form-controls");
        b.forEach((container) => container.classList.remove("success"));
    }
}
// ---------------------------------End Of Sign Up Form Validations---------------------------------------


// Below is the setErrorFor function which we have used in validations for both login & sign Up form
// it will get the type of input & message as input & then get the parent element of that input value
// in html part, we have created a small tag below the input..it will select that small tag
// then will change the class of parent element from form-controls to form-controls error
//  form-controls error class will display the red cross icon & also the red border
// and in small tag the error msg will got displayed

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-controls error';
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
	formControl.className = 'form-controls success';
}

// Here is the isEmail function used in validation for email which contain the regular expression 
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// ---------------------------------Start of Log In Form Validations---------------------------------------


// Here, we are getting the value of form, username,  password of log in form
const loginform = document.getElementById('inForm');
const usernameIn = document.getElementById('inName');
const passwordIn = document.getElementById('inPass');

// Here, we are adding an event to log in form which will prevent the default action of submit button & 
// instead of it will call a function named checkLogin
loginform.addEventListener('submit', e => {
	e.preventDefault();
	
	checkLogin();
});

// Below is the checkLogin function which will check if the entered data is correct or not
function checkLogin() {

	 // Here, we are trimming the values of username, password  in order to remove the  whitespaces
	const usernameValue1 = usernameIn.value.trim();
    const passwordValue1 = passwordIn.value.trim();
   
    // Here a variable verify with value true is created, means we r assuming that provided info is true
    var verify = true;

    //Below, we r getting the length of password & username
    var passLength=passwordValue1.length;
    var userLength = usernameValue1.length;

    //Here we r defining some regular expressions, using which we will check for validations
    var p1=/[A-Z]+/;
	var p2=/[a-z]+/;
	var p3=/[0-9]+/;
    var p4=/[!@#$%^&*]/;

    // Here is the main part where we r applying various validations on username, password 
    //In this, we r mainly using 2 functions, setErrorFor & setSuccessFor, the deatil of these 2 is provided above

    //----------------------validations for username of log in  form--------------------------
	if(usernameValue1 === '') {
		setErrorFor(usernameIn, 'Username cannot be blank');
        verify = false;
	}else if(!(p2.test(usernameValue1))){
        setErrorFor(usernameIn, 'Only Alphabets are allowed');
        verify = false;
    } else if(userLength<3)
    {
        setErrorFor(usernameIn, 'Name is too short');
        verify=false;
    }
     else {
		setSuccessFor(usernameIn);
	}
 
    //----------------------validations for password of sign up form--------------------------
    if(passwordValue1 === '') {
		setErrorFor(passwordIn, 'Password cannot be blank');
        verify = false
	}else if(passLength<6)
    {
        setErrorFor(passwordIn, 'Password Length is Too Less');
        verify=false;

    }else if(!(p1.test(passwordValue1) && p2.test(passwordValue1) && p3.test(passwordValue1) && p4.test(passwordValue1) && 6<=passLength && passLength<=20))
    {
        setErrorFor(passwordIn, 'Password Should Have an Uppercase, a Lowercase, a Digit and a Special Character');
        verify=false;
    } 
    else {
		setSuccessFor(passwordIn);
	}

    //Here is the condition that if all provided info is upto the validations then on submitting the form,
    // following actions will take place,
    // firstly a modal with id m1 will be seen , which we have created with the help of bootstrap
    //Next, the form will be resetted
    // then, success class will be removed from all the divs with form-controls class


    if(verify){
        $("#m1").modal('show');
        loginform.reset();
        b =  document.querySelectorAll(".form-controls");
        b.forEach((container) => container.classList.remove("success"));
    }
}
// ---------------------------------End Of Sign Up Form Validations---------------------------------------


//---------------------------------------- End of login Section------------------------------------------
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


