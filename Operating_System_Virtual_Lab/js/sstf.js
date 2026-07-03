document.getElementById("runBtn")
.addEventListener("click", runSSTF);

function runSSTF(){

let head = parseInt(
document.getElementById("head").value
);

let requests = document
.getElementById("requests")
.value
.trim()
.split(/\s+/)
.map(Number);

let tableBody =
document.querySelector(
"#diskTable tbody"
);

tableBody.innerHTML = "";

let totalMovement = 0;

let sequence = [head];

let pending = [...requests];

let step = 1;

while(pending.length > 0)
{
let closestIndex = 0;

let minDistance =
Math.abs(head - pending[0]);

for(let i=1;i<pending.length;i++)
{
let distance =
Math.abs(head - pending[i]);

if(distance < minDistance)
{
minDistance = distance;
closestIndex = i;
}
}

let request =
pending[closestIndex];

totalMovement += minDistance;

let row =
document.createElement("tr");

row.innerHTML = `
<td>${step}</td>
<td>${head}</td>
<td>${request}</td>
<td>${minDistance}</td>
`;

tableBody.appendChild(row);

head = request;

sequence.push(request);

pending.splice(
closestIndex,
1
);

step++;
}

document.getElementById("movement")
.textContent = totalMovement;

document.getElementById("sequence")
.textContent =
sequence.join(" → ");

drawDiskGraph(sequence);

}

document
.getElementById("resetBtn")
.addEventListener("click", resetSSTF);

function resetSSTF(){

document.getElementById("head").value="";
document.getElementById("requests").value="";

document.getElementById("movement")
.textContent="0";

document.getElementById("sequence")
.textContent="-";

document.querySelector(
"#diskTable tbody"
).innerHTML="";

const canvas =
document.getElementById("diskCanvas");

const ctx =
canvas.getContext("2d");

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

}

function drawDiskGraph(sequence){

const canvas =
document.getElementById("diskCanvas");

const ctx =
canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "#38bdf8";
ctx.font = "bold 16px Segoe UI";

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

// AXIS

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(1150,50);
ctx.stroke();

// TRACK LABELS

for(let i=0;i<=200;i+=20)
{
let x =
50 + (i * 5);

ctx.fillText(
i,
x,
30
);

ctx.beginPath();
ctx.moveTo(x,45);
ctx.lineTo(x,60);
ctx.stroke();
}

// SSTF PATH

ctx.beginPath();

ctx.strokeStyle = "#38bdf8";
ctx.lineWidth = 2;

sequence.forEach((track,index)=>{

let x =
50 + (track * 5);

let y =
100 + (index * 50);

if(index===0)
{
ctx.moveTo(x,y);
}
else
{
ctx.lineTo(x,y);
}

ctx.fillText(
track,
x + 5,
y
);

});

ctx.stroke();

}
document.getElementById("completeBtn").addEventListener("click", function(){
    completeAlgorithm("SSTF");
});