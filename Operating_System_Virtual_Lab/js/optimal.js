document.getElementById("runBtn")
.addEventListener("click", runOptimal);

function runOptimal(){


let frames = parseInt(
    document.getElementById("frames").value
);

let pages = document
    .getElementById("reference")
    .value
    .trim()
    .split(/\s+/)
    .map(Number);

let memory = [];

let faults = 0;
let hits = 0;

let tableBody =
document.querySelector(
"#fifoTable tbody"
);

tableBody.innerHTML = "";

pages.forEach((page,index)=>{

    let result="";

    if(memory.includes(page))
    {
        hits++;
        result="Hit";
    }
    else
    {
        faults++;
        result="Fault";

        if(memory.length < frames)
        {
            memory.push(page);
        }
        else
        {
            let farthest = -1;
            let replaceIndex = -1;

            for(let i=0;i<memory.length;i++)
            {
                let nextUse =
                pages.slice(index+1)
                .indexOf(memory[i]);

                if(nextUse === -1)
                {
                    replaceIndex = i;
                    break;
                }

                if(nextUse > farthest)
                {
                    farthest = nextUse;
                    replaceIndex = i;
                }
            }

            memory[replaceIndex] = page;
        }
    }

    let row =
    document.createElement("tr");

    row.innerHTML = `
    <td>${index+1}</td>
    <td>${page}</td>
    <td>${memory.join(", ")}</td>
    <td class="${result==="Hit"?"hit":"fault"}">
    ${result}
    </td>
    `;

    tableBody.appendChild(row);

});

document.getElementById("faults")
.textContent = faults;

document.getElementById("hits")
.textContent = hits;

displayFrames(memory);


}

function displayFrames(memory){


let container =
document.getElementById("frameContainer");

container.innerHTML = "";

memory.forEach(page=>{

    let frame =
    document.createElement("div");

    frame.className = "frame";

    frame.textContent = page;

    container.appendChild(frame);

});


}

document
.getElementById("resetBtn")
.addEventListener("click", resetOptimal);

function resetOptimal(){

document.getElementById("frames").value="";
document.getElementById("reference").value="";

document.getElementById("faults").textContent="0";
document.getElementById("hits").textContent="0";

document.querySelector(
"#fifoTable tbody"
).innerHTML="";

document.getElementById(
"frameContainer"
).innerHTML="";

}

document.getElementById("simulateBtn")
.addEventListener("click", function(){

document.getElementById(
"simulationModal"
).style.display = "flex";

generateSimulation();

});

document.getElementById("closeSimulation")
.addEventListener("click", function(){

document.getElementById(
"simulationModal"
).style.display = "none";

});

function generateSimulation(){

let grid =
document.getElementById(
"simulationGrid"
);

grid.innerHTML = "";

let frames = parseInt(
document.getElementById("frames").value
);

let pages =
document.getElementById("reference")
.value
.trim()
.split(/\s+/);

let frameCells = [];
let statusCells = [];

let title =
document.createElement("h3");

title.textContent =
"Reference String";

grid.appendChild(title);

let refRow =
document.createElement("div");

refRow.style.display="flex";
refRow.style.gap="10px";
refRow.style.marginBottom="20px";

pages.forEach(page=>{

let cell =
document.createElement("div");

cell.className="sim-cell";

cell.textContent=page;

refRow.appendChild(cell);

});

grid.appendChild(refRow);

for(let i=1;i<=frames;i++)
{

let frameRow =
document.createElement("div");

frameRow.style.display="flex";
frameRow.style.gap="10px";
frameRow.style.marginBottom="10px";

let label =
document.createElement("div");

label.className="sim-cell";

label.textContent="F"+i;

frameRow.appendChild(label);

let rowCells=[];

pages.forEach(()=>{

let cell =
document.createElement("div");

cell.className="sim-cell";

cell.textContent="-";

frameRow.appendChild(cell);

rowCells.push(cell);

});

frameCells.push(rowCells);

grid.appendChild(frameRow);

}

let statusRow =
document.createElement("div");

statusRow.style.display="flex";
statusRow.style.gap="10px";
statusRow.style.marginTop="20px";

let statusLabel =
document.createElement("div");

statusLabel.className="sim-cell";

statusLabel.textContent="Status";

statusRow.appendChild(statusLabel);

pages.forEach(()=>{

let cell =
document.createElement("div");

cell.className="sim-cell";

cell.textContent="-";

statusRow.appendChild(cell);

statusCells.push(cell);

});

grid.appendChild(statusRow);

animateOptimal(
pages,
frames,
frameCells,
statusCells
);

}

function animateOptimal(
pages,
frames,
frameCells,
statusCells
){

let memory=[];
let history=[];

pages.forEach((page,index)=>{

page = Number(page);

let hit =
memory.includes(page);

if(!hit)
{
if(memory.length < frames)
{
memory.push(page);
}
else
{
let farthest=-1;
let replaceIndex=0;

for(let i=0;i<memory.length;i++)
{
let nextUse =
pages
.slice(index+1)
.indexOf(memory[i]);

if(nextUse===-1)
{
replaceIndex=i;
break;
}

if(nextUse>farthest)
{
farthest=nextUse;
replaceIndex=i;
}
}

memory[replaceIndex]=page;
}
}

history.push({
memory:[...memory],
result:hit?"H":"F"
});

});

let step=0;

let interval=
setInterval(()=>{

if(step>=pages.length)
{
clearInterval(interval);
return;
}

for(let row=0;row<frames;row++)
{
for(let col=0;col<=step;col++)
{
frameCells[row][col].textContent =
history[col].memory[row] ?? "-";
}
}

statusCells[step].textContent =
history[step].result;

statusCells[step].style.background =
history[step].result==="H"
? "#22c55e"
: "#ef4444";

step++;

},500);

}
document.getElementById("completeBtn").addEventListener("click", function(){
    completeAlgorithm("Optimal");
});