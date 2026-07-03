document.getElementById("compareBtn")
.addEventListener("click", compareAlgorithms);

function compareAlgorithms(){

    let frames =
    parseInt(
    document.getElementById("frames").value
    );

    let pages =
    document
    .getElementById("reference")
    .value
    .trim()
    .split(/\s+/)
    .map(Number);

    let fifo =
    runFIFOComparison(
    pages,
    frames
    );

    let lru =
    runLRUComparison(
    pages,
    frames
    );

    let optimal =
    runOptimalComparison(
    pages,
    frames
    );

    let table =
    document.querySelector(
    "#compareTable tbody"
    );

    table.innerHTML = "";

    addRow(
    "FIFO",
    fifo.faults,
    fifo.hits
    );

    addRow(
    "LRU",
    lru.faults,
    lru.hits
    );

    addRow(
    "Optimal",
    optimal.faults,
    optimal.hits
    );

    let best =
    Math.min(
    fifo.faults,
    lru.faults,
    optimal.faults
    );

    let winners = [];

    if(fifo.faults === best)
    winners.push("FIFO");

    if(lru.faults === best)
    winners.push("LRU");

    if(optimal.faults === best)
    winners.push("Optimal");

    document.getElementById(
    "bestAlgo"
    ).textContent =
    winners.join(" & ");

}

function addRow(
algorithm,
faults,
hits
){

    let table =
    document.querySelector(
    "#compareTable tbody"
    );

    let row =
    document.createElement("tr");

    row.innerHTML = `
    <td>${algorithm}</td>
    <td>${faults}</td>
    <td>${hits}</td>
    `;

    table.appendChild(row);

}

function runFIFOComparison(
pages,
frames
){

    let memory=[];
    let faults=0;
    let hits=0;

    pages.forEach(page=>{

        if(memory.includes(page))
        hits++;

        else{

            faults++;

            if(memory.length<frames)
            memory.push(page);

            else{

                memory.shift();
                memory.push(page);

            }
        }

    });

    return {faults,hits};

}

function runLRUComparison(
pages,
frames
){

    let memory=[];
    let faults=0;
    let hits=0;

    pages.forEach(page=>{

        if(memory.includes(page))
        {
            hits++;

            memory.splice(
            memory.indexOf(page),
            1
            );

            memory.push(page);
        }
        else
        {
            faults++;

            if(memory.length<frames)
            memory.push(page);

            else{

                memory.shift();
                memory.push(page);

            }
        }

    });

    return {faults,hits};

}

function runOptimalComparison(
pages,
frames
){

    let memory=[];
    let faults=0;
    let hits=0;

    pages.forEach((page,index)=>{

        if(memory.includes(page))
        {
            hits++;
        }
        else
        {
            faults++;

            if(memory.length<frames)
            {
                memory.push(page);
            }
            else
            {
                let farthest=-1;
                let replaceIndex=-1;

                for(
                let i=0;
                i<memory.length;
                i++
                ){

                    let nextUse =
                    pages.slice(index+1)
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

    });

    return {faults,hits};

}