// ===============================
// Teacher Dashboard JS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    let name = localStorage.getItem("username");

let user = document.getElementById("userName");

if(user){
    user.innerText = name || "Guest";
}

updateStatistics();

updateClock();

setInterval(updateClock, 1000);

});

// -------------------------------
// Dashboard Statistics
// -------------------------------

function updateStatistics(){

const totalStudents = 45;
const completedStudents = 18;
const totalAlgorithms = 10;
const totalReports = 18;

console.log("Teacher Dashboard Loaded");

}

// -------------------------------
// Live Clock
// -------------------------------

function updateClock(){

let now = new Date();

let time = now.toLocaleTimeString();

let clock = document.getElementById("clock");

if(clock){

clock.innerHTML = time;

}

}

// -------------------------------
// Generate Report
// -------------------------------

const reportBtn =
document.getElementById("generateReport");

if(reportBtn){

reportBtn.addEventListener("click", function(){

alert(
"Student Performance Report Generated Successfully!"
);

});

}

// -------------------------------
// Search Student
// -------------------------------

const search =
document.getElementById("searchStudent");

if(search){

search.addEventListener("keyup", function(){

let filter =
search.value.toLowerCase();

let rows =
document.querySelectorAll(
"#studentTable tbody tr"
);

rows.forEach(row=>{

let student =
row.cells[0].innerText.toLowerCase();

if(student.includes(filter))
{

row.style.display="";

}
else
{

row.style.display="none";

}

});

});

}

// -------------------------------
// Refresh Dashboard
// -------------------------------

function refreshDashboard(){

location.reload();

}

// -------------------------------
// Export Report
// -------------------------------

function exportReport(){

alert(
"PDF Export Feature Coming Soon!"
);

}

// -------------------------------
// Attendance
// -------------------------------

function viewAttendance(){

alert(
"Attendance Module Coming Soon!"
);

}

// -------------------------------
// Notification
// -------------------------------

setTimeout(function(){

console.log(
"Teacher Dashboard Ready"
);

},1000);

// -------------------------------
// Student Progress Animation
// -------------------------------

let rows =
document.querySelectorAll(
"#studentTable tbody tr"
);

rows.forEach((row,index)=>{

row.style.opacity="0";

setTimeout(()=>{

row.style.transition=".5s";

row.style.opacity="1";

},index*200);

});

// -------------------------------
// Theme Loaded
// -------------------------------

console.log("Teacher JS Loaded");