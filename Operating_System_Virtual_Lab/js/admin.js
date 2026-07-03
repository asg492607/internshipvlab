// ===============================
// Admin Dashboard JS
// ===============================

document.addEventListener("DOMContentLoaded", function(){

updateClock();

setInterval(updateClock,1000);

initializeDashboard();

});

// ===============================
// Live Clock
// ===============================

function updateClock(){

let now = new Date();

let time = now.toLocaleTimeString();

let clock =
document.getElementById("clock");

if(clock){

clock.innerHTML = time;

}

}

// ===============================
// Dashboard Loaded
// ===============================

function initializeDashboard(){

console.log("Admin Dashboard Loaded");

}

// ===============================
// Search User
// ===============================

const search =
document.getElementById("searchUser");

if(search){

search.addEventListener("keyup",function(){

let filter =
this.value.toLowerCase();

let studentRows =
document.querySelectorAll(
"#studentTable tbody tr"
);

studentRows.forEach(row=>{

let text =
row.innerText.toLowerCase();

row.style.display =
text.includes(filter)
?
""
:
"none";

});

let teacherRows =
document.querySelectorAll(
"#teacherTable tbody tr"
);

teacherRows.forEach(row=>{

let text =
row.innerText.toLowerCase();

row.style.display =
text.includes(filter)
?
""
:
"none";

});

});

}

// ===============================
// Generate Report
// ===============================

const reportBtn =
document.getElementById(
"generateReport"
);

if(reportBtn){

reportBtn.addEventListener("click",function(){

alert(
"System Report Generated Successfully!"
);

});

}

// ===============================
// Fade Animation
// ===============================

document.querySelectorAll("table tbody tr")
.forEach((row,index)=>{

row.style.opacity="0";

setTimeout(()=>{

row.style.transition=".5s";

row.style.opacity="1";

},index*150);

});

// ===============================
// Quick Action Buttons
// ===============================

document.querySelectorAll(".card button")
.forEach(button=>{

button.addEventListener("click",function(){

let action =
this.parentElement.querySelector("h2").innerText;

alert(action + " clicked!");

});

});

// ===============================
// Notification
// ===============================

setTimeout(()=>{

console.log(
"Admin Dashboard Ready"
);

},1000);