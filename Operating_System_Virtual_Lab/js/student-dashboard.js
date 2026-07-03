// =============================
// Student Dashboard
// =============================

let username =
localStorage.getItem("username") || "Guest";

let user =
document.getElementById("userName");

if(user){
    user.innerText = username;
}