document.getElementById("runBtn")
.addEventListener("click", runLOOK);

function runLOOK(){

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

let left = [];
let right = [];

requests.forEach(request => {

if(request < head)
left.push(request);
else
right.push(request);

});

left.sort((a,b)=>a-b);
right.sort((a,b)=>a-b);

let sequence = [head];

// Move right first

right.forEach(request=>{
sequence.push(request);
});

// Reverse direction immediately

left.reverse().forEach(request=>{
sequence.push(request);
});

// Build execution table

for(let i=0;i<sequence.length-1;i++)
{
let from = sequence[i];
let to = sequence[i+1];

let movement =
Math.abs(from - to);

totalMovement += movement;

let row =
document.createElement("tr");

row.innerHTML = `
<td>${i+1}</td>
<td>${from}</td>
<td>${to}</td>
<td>${movement}</td>
`;

tableBody.appendChild(row);
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
.addEventListener("click", resetLOOK);

function resetLOOK(){

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
ctx.font = "16px Segoe UI";

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(1150,50);
ctx.stroke();

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
    completeAlgorithm("LOOK");
});