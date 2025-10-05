//your JS code here. If required.
let uTextName = document.getElementById("username");
let uTextPass = document.getElementById("password");
let btn = document.getElementById("submit");
let existingUser = document.getElementById("existing");
let rememberMe = document.getElementById("checkbox");

	if (!(localStorage.getItem("uName") && localStorage.getItem("uPass"))) {
	existingUser.style.display = "none";
	}






btn.addEventListener("click",()=>{
	let uName =document.getElementById("username").value;
	let uPassword = document.getElementById("password").value;
	
	alert(`Logged in as ${uName}`);
	
	if (rememberMe.checked) {
		localStorage.setItem("uName",uName);
		localStorage.setItem("uPass",uPassword);
		//console.log(localStorage.getItem("uName"));
		
	}
	if (!(rememberMe.checked)) {
		localStorage.removeItem("uName");
		localStorage.removeItem("uPass");
	}
	
});

existingUser.addEventListener("click",(e)=>{
	e.preventDefault();
	if (localStorage.getItem("uName") && localStorage.getItem("uPass")) {
	let existingName = localStorage.getItem("uName");
	let existingPassword = localStorage.getItem("uPass");
	uTextName.value = existingName;
	uTextPass.value = existingPassword;	
	rememberMe.checked = true;
	alert(`Logged in as ${existingName}`);
	}
	
})




