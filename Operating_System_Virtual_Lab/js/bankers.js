document.getElementById("generateBtn")
.addEventListener("click", generateTables);

document.getElementById("runBtn")
.addEventListener("click", runBankers);

document.getElementById("resetBtn")
.addEventListener("click", resetBankers);

function generateTables(){

let p = parseInt(
document.getElementById("processes").value
);

let r = parseInt(
document.getElementById("resources").value
);

let container =
document.getElementById("matrixInputs");

container.innerHTML = "";

container.innerHTML +=
"<h3>Allocation Matrix</h3>";

for(let i=0;i<p;i++){

for(let j=0;j<r;j++){

container.innerHTML +=
`<input type="number"
id="alloc-${i}-${j}"
style="width:60px;">`;

}

container.innerHTML += "<br>";

}

container.innerHTML +=
"<h3>Maximum Matrix</h3>";

for(let i=0;i<p;i++){

for(let j=0;j<r;j++){

container.innerHTML +=
`<input type="number"
id="max-${i}-${j}"
style="width:60px;">`;

}

container.innerHTML += "<br>";

}

container.innerHTML +=
"<h3>Available Resources</h3>";

for(let j=0;j<r;j++){

container.innerHTML +=
`<input type="number"
id="avail-${j}"
style="width:60px;">`;

}

}

function runBankers(){

let p = parseInt(
document.getElementById("processes").value
);

let r = parseInt(
document.getElementById("resources").value
);

let allocation = [];
let maximum = [];
let available = [];

for(let i=0;i<p;i++){

allocation[i]=[];
maximum[i]=[];

for(let j=0;j<r;j++){

allocation[i][j] =
parseInt(
document.getElementById(
`alloc-${i}-${j}`
).value
) || 0;

maximum[i][j] =
parseInt(
document.getElementById(
`max-${i}-${j}`
).value
) || 0;

}

}

for(let j=0;j<r;j++){

available[j] =
parseInt(
document.getElementById(
`avail-${j}`
).value
) || 0;

}

let need = [];

for(let i=0;i<p;i++){

need[i]=[];

for(let j=0;j<r;j++){

need[i][j] =
maximum[i][j] -
allocation[i][j];

}

}

let finish =
new Array(p).fill(false);

let safeSequence = [];

let work =
[...available];

let found;

do{

found = false;

for(let i=0;i<p;i++){

if(!finish[i]){

let possible = true;

for(let j=0;j<r;j++){

if(need[i][j] > work[j])
{
possible = false;
break;
}

}

if(possible){

for(let j=0;j<r;j++)
{
work[j] += allocation[i][j];
}

safeSequence.push(
"P"+i
);

finish[i] = true;

found = true;

}

}

}

}
while(found);

let safe =
finish.every(
x => x === true
);

document.getElementById("state")
.textContent =
safe
? "SAFE STATE"
: "UNSAFE STATE";

document.getElementById("state")
.style.color =
safe
? "#22c55e"
: "#ef4444";

document.getElementById("sequence")
.textContent =
safeSequence.join(" → ");

displayNeedMatrix(
need,
p,
r
);

}

function displayNeedMatrix(
need,
p,
r
){

let html =
"<table><tbody>";

for(let i=0;i<p;i++){

html += "<tr>";

for(let j=0;j<r;j++){

html +=
`<td>${need[i][j]}</td>`;

}

html += "</tr>";

}

html += "</tbody></table>";

document.getElementById(
"needMatrix"
).innerHTML = html;

}

function resetBankers(){

document.getElementById(
"processes"
).value="";

document.getElementById(
"resources"
).value="";

document.getElementById(
"matrixInputs"
).innerHTML="";

document.getElementById(
"needMatrix"
).innerHTML="";

document.getElementById(
"state"
).textContent="-";

document.getElementById(
"sequence"
).textContent="-";

}
document.getElementById("completeBtn").addEventListener("click", function(){
    completeAlgorithm("Bankers");
});