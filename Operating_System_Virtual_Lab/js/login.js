function loginUser(){

let username =
document.getElementById("username").value.trim();

let password =
document.getElementById("password").value.trim();

let role =
document.getElementById("role").value;

if(username==="" || password==="")
{
alert("Please enter Email and Password.");
return;
}

// Save login details

localStorage.setItem(
"username",
username
);

localStorage.setItem(
"role",
role
);

// Redirect

switch(role)
{

case "student":

window.location.href =
"student-dashboard.html";

break;

case "teacher":

window.location.href =
"teacher-dashboard.html";

break;

case "admin":

window.location.href =
"admin-dashboard.html";

break;

default:

alert("Invalid Role");

}

}