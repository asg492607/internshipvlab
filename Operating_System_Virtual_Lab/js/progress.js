// ===========================
// Progress & XP System
// ===========================

const TOTAL_ALGORITHMS = 10;

let xp = Number(localStorage.getItem("xp")) || 0;

let completed =
JSON.parse(localStorage.getItem("completed")) || {};

function updateDashboard(){

    let xpValue =
    document.getElementById("xpValue");

    if(xpValue){
        xpValue.innerText = xp;
    }

    let completedCount =
    Object.keys(completed).length;

    let progress =
    Math.round((completedCount / TOTAL_ALGORITHMS) * 100);
let experienceCard =
document.getElementById("experienceXP");

if(experienceCard){
    experienceCard.innerText = xp + " XP";
}

let progressCard =
document.getElementById("progressPercent");

if(progressCard){
    progressCard.innerText = progress + "%";
}
    let progressFill =
    document.getElementById("progressFill");

    if(progressFill){
        progressFill.style.width = progress + "%";
    }

    let progressText =
    document.getElementById("progressText");

    if(progressText){
        progressText.innerText = progress + "%";
    }

    Object.keys(completed).forEach(function(name){

    let card =
    document.getElementById(name);

    if(card){

      card.style.background =
"#22c55e";

card.style.color =
"white";

card.style.border =
"3px solid #16a34a";

card.style.transform =
"scale(1.03)";

card.style.boxShadow =
"0 0 20px rgba(34,197,94,0.5)";

    }

});
}

function completeAlgorithm(name){

    if(completed[name]){

        alert("You already completed this algorithm.");

        return;

    }

    completed[name] = true;

    xp += 50;

    localStorage.setItem("xp", xp);

    localStorage.setItem(
        "completed",
        JSON.stringify(completed)
    );

    updateDashboard();

    alert(
        "🎉 " + name +
        " completed!\n\n+50 XP Earned"
    );

}

window.onload = updateDashboard;