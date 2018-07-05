
function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	}else{
		document.addEventListener('DOMContentLoaded', fn);
	}
}




function listener() {
	let button = document.getElementById('login_button').addEventListener("click", logIn);
}


function chackEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function logIn(){
	let email = document.getElementById("loginEmail").value;
	let password = document.getElementById("loginPassword").value;
	if(chackEmail(email) && password.length > 8){
		let logInMap = {};
		logInMap["Username"] = email.toLowerCase();
		logInMap["password"] = password;
		console.log(logInMap);
	}else{
		console.log('Invalid Input');
	}
}

function signUp(){
	let first = document.getElementById("signUpFirstName").value;
	let last = document.getElementById("signUpLastName").value;
	let email = document.getElementById("signUpEmail").value;
	let password = document.getElementById("signUpEmail").value;

	if(chackEmail(email) && password.length > 8 && first.length > 2 && last.length > 2){
		let lsignUpMap = {};
		lsignUpMap["Firstname"] = first;
		lsignUpMap["Lastname"] = last;
		lsignUpMap["Username"] = email.toLowerCase();
		lsignUpMap["Password"] = password;
		console.log(lsignUpMap);
	}else{
		console.log('Invalid Input');
	}
}

ready(listener);
