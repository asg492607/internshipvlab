'use strict';
const $ = (s)=>document.querySelector(s);
const $$ = (s)=>Array.from(document.querySelectorAll(s));

const EXPERIMENTS = [
  {no:1, subject:'EEE', slug:'ohms-law', title:"Ohm's Law", module:'Basic Electrical', type:'ohm', aim:"To verify Ohm's Law and study the relation between voltage, current and resistance.", formula:'V = I × R, I = V/R'},
  {no:2, subject:'EEE', slug:'series-circuit', title:'Series Circuit', module:'Basic Electrical', type:'series', aim:'To study current and voltage distribution in a series resistive circuit.', formula:'RT = R1 + R2, I = V/RT'},
  {no:3, subject:'EEE', slug:'parallel-circuit', title:'Parallel Circuit', module:'Basic Electrical', type:'parallel', aim:'To verify current division and equivalent resistance in a parallel circuit.', formula:'1/RT = 1/R1 + 1/R2'},
  {no:4, subject:'EEE', slug:'kcl', title:"Kirchhoff's Current Law", module:'Circuit Analysis', type:'kcl', aim:'To verify that total current entering a node equals total current leaving the node.', formula:'ΣI entering = ΣI leaving'},
  {no:5, subject:'EEE', slug:'kvl', title:"Kirchhoff's Voltage Law", module:'Circuit Analysis', type:'kvl', aim:'To verify that algebraic sum of voltages around a closed loop is zero.', formula:'ΣV = 0'},
  {no:6, subject:'EEE', slug:'voltage-divider', title:'Voltage Divider Rule', module:'Circuit Analysis', type:'divider', aim:'To study output voltage across a resistor in series voltage divider network.', formula:'Vout = Vin × R2/(R1+R2)'},
  {no:7, subject:'EEE', slug:'thevenin', title:"Thevenin's Theorem", module:'Network Theorems', type:'thevenin', aim:'To obtain Thevenin equivalent voltage and resistance of a linear network.', formula:'IL = Vth/(Rth+RL)'},
  {no:8, subject:'EEE', slug:'norton', title:"Norton's Theorem", module:'Network Theorems', type:'norton', aim:'To obtain Norton equivalent current and resistance of a linear network.', formula:'IL = IN × RN/(RN+RL)'},
  {no:9, subject:'EEE', slug:'diode', title:'Diode V-I Characteristics', module:'Electronics', type:'diode', aim:'To study forward bias characteristics of a silicon diode.', formula:'ID ≈ (Vf - Vγ)/R'},
  {no:10, subject:'EEE', slug:'rectifier', title:'Half Wave Rectifier', module:'Electronics', type:'rectifier', aim:'To observe AC to pulsating DC conversion using a diode rectifier.', formula:'Vdc = Vm/π'},
  {no:11, subject:'EEE', slug:'transformer', title:'Transformer Turns Ratio', module:'Electrical Machines', type:'transformer', aim:'To study primary-secondary voltage relation in transformer.', formula:'Vs/Vp = Ns/Np'},
  {no:12, subject:'EEE', slug:'digital-instruments', title:'Digital Instruments', module:'Measurements', type:'instrument', aim:'To study digital voltmeter/ammeter style measurement and display.', formula:'Digital reading = measured input after scaling'},
  {no:13, subject:'DELD', slug:'logic-gates', title:'Logic Gates', module:'Combinational Logic', type:'logic', aim:'To verify truth tables of AND, OR, NOT, NAND, NOR, XOR and XNOR gates.', formula:'Y = f(A,B)'},
  {no:14, subject:'DELD', slug:'boolean-algebra', title:'Boolean Algebra', module:'Combinational Logic', type:'boolean', aim:'To verify Boolean expressions using logic inputs and simplification laws.', formula:'Y = AB + A\'C + BC'},
  {no:15, subject:'DELD', slug:'half-adder', title:'Half Adder', module:'Arithmetic Circuits', type:'halfadder', aim:'To design and verify a half adder using XOR and AND gates.', formula:'SUM = A⊕B, CARRY = AB'},
  {no:16, subject:'DELD', slug:'full-adder', title:'Full Adder', module:'Arithmetic Circuits', type:'fulladder', aim:'To design and verify full adder with three binary inputs.', formula:'SUM = A⊕B⊕Cin, Cout = AB + Cin(A⊕B)'},
  {no:17, subject:'DELD', slug:'half-subtractor', title:'Half Subtractor', module:'Arithmetic Circuits', type:'halfsub', aim:'To design and verify half subtractor operation.', formula:'DIFF = A⊕B, BORROW = A\'B'},
  {no:18, subject:'DELD', slug:'full-subtractor', title:'Full Subtractor', module:'Arithmetic Circuits', type:'fullsub', aim:'To design and verify full subtractor operation.', formula:'DIFF = A⊕B⊕Bin'},
  {no:19, subject:'DELD', slug:'multiplexer', title:'4:1 Multiplexer', module:'Data Selectors', type:'mux', aim:'To implement a 4:1 multiplexer and verify selected data output.', formula:'Y = Dn selected by S1S0'},
  {no:20, subject:'DELD', slug:'demultiplexer', title:'1:4 Demultiplexer', module:'Data Selectors', type:'demux', aim:'To route one input to one of four outputs using select lines.', formula:'Selected output = Din'},
  {no:21, subject:'DELD', slug:'encoder', title:'Encoder', module:'Code Converters', type:'encoder', aim:'To convert active input line into binary encoded output.', formula:'4 inputs → 2-bit code'},
  {no:22, subject:'DELD', slug:'decoder', title:'Decoder', module:'Code Converters', type:'decoder', aim:'To decode binary input into one active output line.', formula:'2-bit code → 4 outputs'},
  {no:23, subject:'DELD', slug:'flip-flop', title:'JK Flip-Flop', module:'Sequential Logic', type:'flipflop', aim:'To verify JK flip-flop operation using clock pulse.', formula:'J=K=1 toggles Q'},
  {no:24, subject:'DELD', slug:'counter', title:'Binary Counter', module:'Sequential Logic', type:'counter', aim:'To observe binary count sequence using clock pulses.', formula:'n flip-flops count 0 to 2ⁿ-1'}
];

const componentSets = {
  eee:[
    ['Regulated DC Power Supply','0–30 V, current limit','1','Input supply','Positive terminal to circuit input, negative terminal to common ground'],
    ['Digital Multimeter','V/A/Ω modes','1–2','Measurement instrument','Voltmeter in parallel, ammeter in series, ohmmeter only on isolated components'],
    ['Resistor Decade Box / Resistors','100 Ω to 10 kΩ','As required','Load and network element','Connected according to circuit diagram'],
    ['Breadboard / EEE Trainer Kit','Standard lab trainer','1','Circuit assembly platform','Use common ground and short patch leads'],
    ['Patch Cords / Connecting Leads','Banana / jumper wires','Set','Electrical connection','Use red for positive, black for ground where possible']
  ],
  deld:[
    ['Digital Logic Trainer Kit','+5 V TTL supply','1','Digital circuit platform','Vcc to IC pin 14/16, GND to pin 7/8 according to IC'],
    ['Toggle / DIP Switches','Logic 0 and Logic 1','As required','Binary input source','Switch output connected to gate or IC input pins'],
    ['Logic ICs','74LS / CMOS family','As required','Performs logic operation','Place IC on breadboard and wire as per pin diagram'],
    ['LED Indicators with Resistors','5 V LED outputs','As required','Visual output indication','LED anode to output through resistor, cathode to ground'],
    ['Patch Cords','Male-to-male leads','Set','Signal wiring','Connect switches, IC pins, LEDs and supply lines']
  ],
  ohm:[
    ['Regulated DC Power Supply','0–30 V DC','1','Variable input voltage','+V to ammeter input, supply negative to circuit ground'],
    ['Fixed Resistor / Rheostat','100 Ω to 1 kΩ, 1/2 W','1','Ohmic load under test','Connect in series with ammeter and supply'],
    ['DC Ammeter / DMM','0–200 mA or 0–2 A','1','Measures circuit current','Connect in series with resistor'],
    ['DC Voltmeter / DMM','0–30 V','1','Measures voltage across resistor','Connect in parallel across resistor terminals'],
    ['Switch and Connecting Leads','SPST + jumper wires','1 set','Safe ON/OFF and wiring','Switch in series with supply, leads as per circuit']
  ],
  series:[
    ['Regulated DC Power Supply','0–30 V DC','1','Applies supply voltage','Connect across complete series network'],
    ['Resistor R1','100 Ω, 1/2 W','1','First voltage drop element','Connect after ammeter in series path'],
    ['Resistor R2','220 Ω, 1/2 W','1','Second voltage drop element','Connect in series with R1'],
    ['Ammeter / DMM','mA or A range','1','Measures same current in circuit','Insert in series with R1 and R2'],
    ['Voltmeter / DMM','DC voltage range','1','Measures V1, V2 and Vs','Connect in parallel across required element']
  ],
  parallel:[
    ['Regulated DC Power Supply','0–30 V DC','1','Common branch voltage source','Connect across parallel network rails'],
    ['Resistor R1','100 Ω, 1/2 W','1','First parallel branch','Connect between positive and ground rails'],
    ['Resistor R2','220 Ω, 1/2 W','1','Second parallel branch','Connect between same two rails as R1'],
    ['Ammeters / DMM','mA or A range','2–3','Measures branch and total current','Insert one at supply line and one in branch if required'],
    ['Voltmeter / DMM','DC voltage range','1','Verifies common voltage','Connect across both branch rails']
  ],
  kcl:[
    ['DC Regulated Power Supply','0–30 V DC','1','Energizes current junction network','Connect source to node resistor network'],
    ['Three-Branch Resistor Network','R1, R2, R3 values','1 set','Creates node currents','Branch ends meet at common junction node'],
    ['Ammeter A1','mA range','1','Measures incoming current I1','Connect in series with first incoming branch'],
    ['Ammeter A2 / A3','mA range','2','Measures outgoing branch currents','Connect in series with outgoing branches'],
    ['Common Ground Link','Low resistance link','1','Reference node','Connect all return ends to ground bus']
  ],
  kvl:[
    ['DC Regulated Power Supply','0–30 V DC','1','Source voltage for closed loop','Connect across entire loop'],
    ['Series Resistor R1','100 Ω, 1/2 W','1','First voltage drop','Connect in the closed loop path'],
    ['Series Resistor R2','220 Ω, 1/2 W','1','Second voltage drop','Connect after R1 in same loop'],
    ['Voltmeter / DMM','DC voltage range','1','Measures source and drops','Connect across Vs, R1, R2 one by one'],
    ['Switch and Patch Leads','SPST + jumpers','1 set','Loop completion and safety','Switch in series with source line']
  ],
  divider:[
    ['DC Input Source Vin','0–30 V DC','1','Input voltage to divider','Connect across R1 + R2 series chain'],
    ['Upper Resistor R1','100 Ω to 10 kΩ','1','Controls voltage drop above output node','Connect from Vin positive to output node'],
    ['Lower Resistor R2','100 Ω to 10 kΩ','1','Output resistor','Connect from output node to ground'],
    ['Digital Voltmeter','0–30 V DC','1','Measures Vout','Connect positive probe to midpoint, negative to ground'],
    ['Breadboard / Leads','Standard','1 set','Builds divider circuit','Keep common ground and short leads']
  ],
  thevenin:[
    ['DC Supply','0–30 V DC','1','Excites original network','Connect to source terminals of network'],
    ['Linear Resistor Network','R1, R2, R3','1 set','Network to be converted','Wire exactly as given in theorem circuit'],
    ['Load Resistor RL','Variable / decade box','1','Load at output terminals','Connect across output terminals after finding Vth and Rth'],
    ['Voltmeter / DMM','DC voltage range','1','Measures open-circuit Vth','Connect across output terminals with load removed'],
    ['Ohmmeter / DMM','Resistance range','1','Measures Rth','Deactivate independent sources before measuring equivalent resistance']
  ],
  norton:[
    ['DC Supply','0–30 V DC','1','Excites original network','Connect to source side of resistor network'],
    ['Linear Resistor Network','R1, R2, R3','1 set','Network converted to Norton form','Wire as per original circuit'],
    ['Shorting Link','Low resistance wire','1','Used for short-circuit current test','Short output terminals only during IN measurement'],
    ['Ammeter / DMM','mA or A range','1','Measures Norton current IN','Connect in series with shorting path'],
    ['Load Resistor RL','Variable / decade box','1','Verifies load current','Connect across Norton equivalent terminals']
  ],
  diode:[
    ['DC Regulated Power Supply','0–5 V DC','1','Forward bias source','Positive to resistor, negative to diode cathode side ground'],
    ['Silicon Diode','1N4007 / 1N4148','1','PN junction under test','Anode to resistor, cathode to negative side for forward bias'],
    ['Current Limiting Resistor','220 Ω to 1 kΩ','1','Protects diode from excess current','Connect in series with diode'],
    ['Milliammeter / DMM','0–50 mA','1','Measures diode current','Insert in series with diode circuit'],
    ['Voltmeter / DMM','0–5 V DC','1','Measures diode voltage Vf','Connect directly across diode terminals']
  ],
  rectifier:[
    ['Step-down Transformer','230 V AC / 12 V AC','1','Provides safe AC input','Primary to mains, secondary to rectifier circuit'],
    ['Rectifier Diode','1N4007','1','Allows one half cycle','Connect in series with load for half-wave rectification'],
    ['Load Resistor RL','1 kΩ, 1 W','1','Output load','Connect at rectifier output terminals'],
    ['Filter Capacitor','470 µF / 25 V','1','Reduces ripple','Connect parallel to load with correct polarity'],
    ['CRO / Oscilloscope','Dual trace preferred','1','Displays AC input and DC output','Probe across input and load output']
  ],
  transformer:[
    ['Single Phase Transformer','230 V / 12 V or 230/24 V','1','Device under test','Primary to AC supply, secondary to load/voltmeter'],
    ['AC Supply / Variac','0–230 V AC','1','Controlled primary voltage','Feed transformer primary through fuse/switch'],
    ['AC Voltmeter Vp','0–250 V AC','1','Measures primary voltage','Connect across primary winding'],
    ['AC Voltmeter Vs','0–30 V AC','1','Measures secondary voltage','Connect across secondary winding'],
    ['Load Resistor / Lamp Load','Rated secondary load','1','Optional load test','Connect across secondary only within rating']
  ],
  instrument:[
    ['Digital Voltmeter Module','0–30 V DC','1','Displays voltage in numeric form','Connect across measured voltage terminals'],
    ['Digital Ammeter Module','0–10 A DC','1','Displays current in numeric form','Connect in series with load path'],
    ['Shunt / Multiplier Resistors','Calibrated values','1 set','Extends current/voltage range','Shunt in parallel with meter, multiplier in series'],
    ['ADC / Microcontroller Block','8-bit or 10-bit equivalent','1','Converts analog value into digital reading','Analog input from scaled sensor/meter signal'],
    ['Seven Segment / LCD Display','3½ digit style','1','Shows measured value','Connect display data lines to ADC/controller output']
  ],
  logic:[
    ['Digital Trainer Kit','+5 V TTL supply','1','Base platform for logic verification','Connect Vcc and GND to each IC before applying inputs'],
    ['Logic Gate IC Set','7408, 7432, 7404, 7400, 7486','1 each','Implements AND, OR, NOT, NAND, XOR gates','Wire input pins from switches and output pins to LEDs'],
    ['Toggle Switches','A and B inputs','2','Applies binary combinations','Switch HIGH = logic 1, LOW = logic 0'],
    ['LED Output Indicators','Active high','1–2','Displays gate output','Output pin to LED through resistor'],
    ['IC Pin Diagram Sheet','DIP package reference','1','Avoids wrong pin wiring','Use pin numbers during patching']
  ],
  boolean:[
    ['Digital Trainer Kit','+5 V TTL supply','1','Circuit platform','Power all ICs with correct Vcc and GND'],
    ['AND / OR / NOT ICs','7408 / 7432 / 7404','1 each','Implements Boolean expression','Wire according to expression gate-level diagram'],
    ['Toggle Switches','A, B, C variables','3','Provides input combinations','Connect to first-stage gate inputs'],
    ['LED Indicator','Y output','1','Shows expression output','Connect final gate output to LED'],
    ['Truth Table Sheet','8 input cases','1','Verification record','Compare practical output with simplified expression']
  ],
  halfadder:[
    ['XOR Gate IC','7486','1','Generates SUM output','Connect A and B to one XOR gate input pair'],
    ['AND Gate IC','7408','1','Generates CARRY output','Connect A and B to one AND gate input pair'],
    ['Toggle Switches','A, B','2','Binary inputs','Same A and B lines feed XOR and AND gates'],
    ['LED Indicators','SUM and CARRY','2','Displays outputs','Connect XOR output to SUM LED and AND output to CARRY LED'],
    ['Digital Trainer Kit','+5 V supply','1','Power and breadboard area','Provide Vcc/GND to ICs and common ground']
  ],
  fulladder:[
    ['XOR Gate IC','7486','1','Generates A⊕B and SUM','Cascade two XOR gates'],
    ['AND Gate IC','7408','1','Generates carry product terms','Connect AB and Cin(A⊕B) terms'],
    ['OR Gate IC','7432','1','Combines carry terms','OR output gives Cout'],
    ['Toggle Switches','A, B, Cin','3','Three binary inputs','Apply all eight input combinations'],
    ['LED Indicators','SUM and Cout','2','Output display','Connect final SUM and Cout outputs to LEDs']
  ],
  halfsub:[
    ['XOR Gate IC','7486','1','Generates DIFFERENCE','Inputs A and B to XOR gate'],
    ['NOT Gate IC','7404','1','Generates A complement','A input to inverter'],
    ['AND Gate IC','7408','1','Generates BORROW','Connect A̅ and B to AND gate'],
    ['Toggle Switches','A, B','2','Minuend and subtrahend','Apply all four binary cases'],
    ['LED Indicators','DIFF and BORROW','2','Output display','Connect outputs through current limiting resistors']
  ],
  fullsub:[
    ['XOR Gate IC','7486','1','Generates difference logic','Cascade XOR gates for A⊕B⊕Bin'],
    ['NOT Gate IC','7404','1','Creates complemented terms','Invert required inputs for borrow equation'],
    ['AND / OR Gate ICs','7408 / 7432','1 each','Generates borrow output','Combine borrow product terms'],
    ['Toggle Switches','A, B, Bin','3','Three binary inputs','Apply all eight input combinations'],
    ['LED Indicators','DIFF and Bout','2','Output display','Final outputs to LEDs']
  ],
  mux:[
    ['4:1 MUX IC','74153 / 74LS153','1','Selects one of four data inputs','Connect D0–D3 and select lines S1,S0'],
    ['Data Switches','D0, D1, D2, D3','4','Input data lines','Each switch connected to MUX data input'],
    ['Select Switches','S1, S0','2','Channel selection','Binary select code chooses active input'],
    ['Enable Control','Active-low/high pin','1','Enables IC operation','Tie to required logic level according to IC datasheet'],
    ['LED Indicator','Y output','1','Shows selected input','Connect MUX output to LED through resistor']
  ],
  demux:[
    ['1:4 DEMUX IC','74139 / equivalent','1','Routes one input to selected output','Connect input and select lines according to pin diagram'],
    ['Data Input Switch','Din','1','Input signal','Connect to demux input terminal'],
    ['Select Switches','S1, S0','2','Output line selection','Binary select chooses Y0–Y3'],
    ['LED Indicators','Y0, Y1, Y2, Y3','4','Shows active output','Connect each output to LED through resistor'],
    ['Digital Trainer Kit','+5 V TTL supply','1','Power and wiring platform','Common ground for all switches and LEDs']
  ],
  encoder:[
    ['4:2 Encoder Circuit / IC','Gate-based or 74LS148 style','1','Converts active input to binary code','Connect one active input line at a time'],
    ['Input Switches','D0–D3','4','Active input lines','Only one switch should be HIGH for normal encoder operation'],
    ['OR Gate IC','7432','1','Generates encoded bits','Wire OR combinations for A1 and A0'],
    ['LED Indicators','A1 and A0','2','Displays binary code','Connect encoder output bits to LEDs'],
    ['Digital Trainer Kit','+5 V supply','1','Power and patching platform','Supply all ICs and input switches']
  ],
  decoder:[
    ['2:4 Decoder IC / Gate Circuit','74139 or AND/NOT implementation','1','Activates one output line','Connect A1,A0 to decoder inputs'],
    ['Input Switches','A1 and A0','2','Binary input code','Apply 00,01,10,11 combinations'],
    ['NOT Gate IC','7404','1','Provides complemented inputs','Generate A̅1 and A̅0'],
    ['AND Gate IC','7408','1','Generates decoded outputs','Combine true/complemented input lines'],
    ['LED Indicators','Y0–Y3','4','Shows selected output','Connect all decoded outputs to LEDs']
  ],
  flipflop:[
    ['JK Flip-Flop IC','7476 / 74LS76','1','Sequential storage element','Connect J,K,CLK,PRE/CLR pins correctly'],
    ['Clock Pulse Switch','Manual clock / 1 Hz','1','Triggers state transition','Apply clean rising/falling edge as per IC'],
    ['Toggle Switches','J and K','2','Control inputs','Set J,K combinations for set/reset/hold/toggle'],
    ['LED Indicators','Q and Q̅','2','Displays present state','Connect flip-flop outputs to LEDs'],
    ['Debounce / Pull-up Network','10 kΩ resistors','As required','Prevents false triggering','Use with manual clock/input switches']
  ],
  counter:[
    ['JK/D Flip-Flop ICs','2 or 4 stages','2–4 FFs','Forms binary counter','Cascade Q output to next clock/input as required'],
    ['Clock Generator','Manual / 1 Hz pulse','1','Provides count pulses','Connect to first flip-flop clock input'],
    ['Reset Switch','Active reset','1','Initializes count to 0000','Connect to asynchronous clear inputs'],
    ['LED Indicators','Q0, Q1, Q2, Q3','4','Displays binary count','Connect each flip-flop output to LED'],
    ['Digital Trainer Kit','+5 V supply','1','Power and assembly platform','Common Vcc and ground for all ICs']
  ]
};

function getParam(n){return new URLSearchParams(location.search).get(n)}
function getExp(){return EXPERIMENTS.find(e=>e.slug===getParam('exp'))||EXPERIMENTS[0]}
function progress(){return JSON.parse(localStorage.getItem('eeeProgress')||'{}')}
function saveProgress(slug, patch){const p=progress(); p[slug]={...(p[slug]||{}),...patch,updatedAt:new Date().toLocaleDateString()}; localStorage.setItem('eeeProgress',JSON.stringify(p));}
function currentUser(){return JSON.parse(localStorage.getItem('eeeCurrentUser')||'null')}
function requireLogin(){ if(!currentUser()) localStorage.setItem('eeeCurrentUser', JSON.stringify({name:'Student Demo', email:'demo@student.com', enroll:'DEMO'})); }

function logoMarkup(){return `<span class="mark mit-mark"><img src="assets/mit-logo.png" alt="MIT ADT University"></span><span><b>EEE + DELD Virtual Lab</b><small>MIT ADT University</small></span>`}
function initShell(active){
  const nav=$('#navMount'); if(nav) nav.innerHTML=`<nav class="nav"><a class="brand" href="index.html">${logoMarkup()}</a><div class="nav-links"><a class="${active==='home'?'active':''}" href="index.html">Home</a><a class="${active==='experiments'?'active':''}" href="experiments.html">Subjects</a><a class="${active==='profile'?'active':''}" href="dashboard.html">Dashboard</a><a class="${active==='login'?'active':''}" href="login.html">Login</a></div></nav>`;
  const footer=$('#footerMount'); if(footer) footer.innerHTML=`<footer class="footer"><div class="container"><b>MIT ADT University</b> • EEE & DELD Virtual Laboratory • Interactive simulation, observation, quiz and certificate system.</div></footer>`;
}
function switchAuth(mode){$('#loginForm').style.display=mode==='login'?'block':'none';$('#regForm').style.display=mode==='register'?'block':'none';$('#loginTab').classList.toggle('active',mode==='login');$('#registerTab').classList.toggle('active',mode==='register')}
function togglePasswords(){ $$('[data-pass]').forEach(i=>i.type=i.type==='password'?'text':'password') }
function registerUser(){ const u={name:$('#regName').value||'Student',email:$('#regEmail').value,enroll:$('#regEnroll').value,password:$('#regPass').value}; if(!u.email||!u.password){$('#msg').textContent='Enter email and password.';return} if($('#regConfirm').value!==u.password){$('#msg').textContent='Password not matching.';return} localStorage.setItem('eeeRegisteredUser',JSON.stringify(u)); localStorage.setItem('eeeCurrentUser',JSON.stringify(u)); location.href='experiments.html'}
function loginUser(){ const email=$('#loginEmail').value.trim(), pass=$('#loginPass').value; const u=JSON.parse(localStorage.getItem('eeeRegisteredUser')||'null'); if(u&&u.email===email&&u.password===pass){localStorage.setItem('eeeCurrentUser',JSON.stringify(u));location.href='experiments.html'} else {$('#msg').textContent='Invalid login. Register once or use demo by opening Subjects.'} }
function logoutUser(){localStorage.removeItem('eeeCurrentUser'); location.href='index.html'}

function renderHome(){initShell('home'); const mount=$('#featuredRows'); if(!mount) return; mount.closest('section').innerHTML=`<div class="container"><div class="clean-section-head"><span class="module-label">Choose Subject</span><h2>Two separate virtual laboratory subjects</h2><p class="muted">Experiments are arranged subject-wise, not mixed on one side.</p></div><div class="subject-grid"><a class="subject-card eee-card" href="experiments.html?subject=EEE"><span class="badge">Subject 1</span><h2>EEE Virtual Lab</h2><p>Electrical circuits, network theorems, electronics, machines and digital instruments.</p><b>12 Experiments →</b></a><a class="subject-card deld-card" href="experiments.html?subject=DELD"><span class="badge">Subject 2</span><h2>DELD Virtual Lab</h2><p>Logic gates, adders, subtractors, MUX/DEMUX, encoders, decoders, flip-flops and counters.</p><b>12 Experiments →</b></a></div></div>`;}

function renderExperiments(){initShell('experiments'); drawExperiments(); $('#searchBox')?.addEventListener('input',drawExperiments); $('#moduleFilter')?.addEventListener('change',drawExperiments)}
function drawExperiments(){
 const subject=getParam('subject');
 const search=($('#searchBox')?.value||'').toLowerCase();
 const filter=$('#moduleFilter')?.value||'all';
 let base=EXPERIMENTS.filter(e=>(!subject||e.subject===subject) && (e.title.toLowerCase().includes(search)||e.module.toLowerCase().includes(search)||e.subject.toLowerCase().includes(search)||e.aim.toLowerCase().includes(search)));
 const modules=[...new Set(base.map(e=>e.module))];
 if($('#moduleFilter')) $('#moduleFilter').innerHTML='<option value="all">All Modules</option>'+modules.map(m=>`<option ${filter===m?'selected':''}>${m}</option>`).join('');
 let list=filter==='all'?base:base.filter(e=>e.module===filter);
 const prog=progress();
 const status=(e)=>prog[e.slug]?.completed?'Completed':'Pending';
 const score=(e)=>prog[e.slug]?.score!==undefined ? `${prog[e.slug].score}/${prog[e.slug].total}` : '-';
 const diff=(e)=> e.no%4===0?'Advanced':(e.no%3===0?'Intermediate':'Beginner');
 const subjectIntro={
   EEE:{icon:'⚡',title:'EEE Virtual Lab',text:'Electrical circuits, circuit analysis, electronics, machines and measurement experiments.'},
   DELD:{icon:'▣',title:'DELD Virtual Lab',text:'Digital logic, combinational circuits, arithmetic circuits and sequential logic experiments.'}
 };
 const table=(arr,title='Complete Experiment List')=>`<div class="catalog-list-card"><div class="catalog-list-head"><h2>${title}</h2><span>${arr.length} experiments</span></div><div class="table-scroll"><table class="catalog-table"><thead><tr><th>No</th><th>Experiment</th><th>Subject</th><th>Module</th><th>Difficulty</th><th>Score</th><th>Status</th><th>Action</th></tr></thead><tbody>${arr.map(e=>`<tr><td>${String(e.no).padStart(2,'0')}</td><td><b>${e.title}</b><small>${e.aim}</small></td><td><span class="badge ${e.subject==='DELD'?'done':''}">${e.subject}</span></td><td>${e.module}</td><td>${diff(e)}</td><td>${score(e)}</td><td><span class="badge ${prog[e.slug]?.completed?'done':'warn'}">${status(e)}</span></td><td><a class="btn ghost" href="experiment.html?exp=${e.slug}">Open</a></td></tr>`).join('')}</tbody></table></div></div>`;
 const cards=(arr)=>`<div class="experiment-card-grid pro-grid">${arr.map(e=>`<a class="exp-card pro-card ${e.subject.toLowerCase()}" href="experiment.html?exp=${e.slug}"><span class="exp-no">${String(e.no).padStart(2,'0')}</span><span class="badge ${prog[e.slug]?.completed?'done':''}">${prog[e.slug]?.completed?'Completed':'Start'}</span><h3>${e.title}</h3><p>${e.aim}</p><div class="card-meta"><span>${e.module}</span><span>${diff(e)}</span></div></a>`).join('')}</div>`;
 if(!subject){
   const eee=EXPERIMENTS.filter(e=>e.subject==='EEE');
   const deld=EXPERIMENTS.filter(e=>e.subject==='DELD');
   $('#catalogTitle') && ($('#catalogTitle').textContent='Choose Subject');
   $('#catalogSubtitle') && ($('#catalogSubtitle').textContent='');
   const tb=$('#catalogToolbar'); if(tb) tb.style.display='none';
   $('#experimentsMount').innerHTML=`<div class="subject-grid subject-overview only-subjects"><a class="subject-card eee-card clean-subject" href="experiments.html?subject=EEE"><span class="subject-large-icon">⚡</span><h2>EEE Virtual Lab</h2><b>${eee.length} Experiments →</b></a><a class="subject-card deld-card clean-subject" href="experiments.html?subject=DELD"><span class="subject-large-icon">▦</span><h2>DELD Virtual Lab</h2><b>${deld.length} Experiments →</b></a></div>`;
   return;
 }
 const tb=$('#catalogToolbar'); if(tb) tb.style.display='grid';
 const info=subjectIntro[subject]||{icon:'',title:subject+' Virtual Lab',text:''};
 $('#catalogTitle') && ($('#catalogTitle').textContent=info.title);
 $('#catalogSubtitle') && ($('#catalogSubtitle').textContent='Select an experiment to begin.');
 const grouped=[...new Set(list.map(e=>e.module))].map(module=>`<div class="module clean-module"><div class="module-title"><div><span class="module-label">${subject}</span><h2>${module}</h2></div><span class="pill">${list.filter(e=>e.module===module).length} experiments</span></div>${cards(list.filter(e=>e.module===module))}</div>`).join('');
 $('#experimentsMount').innerHTML=`<div class="subject-hero-card clean-subject-hero"><a class="btn ghost" href="experiments.html">← Back</a><div><span class="subject-hero-icon">${info.icon}</span><h1>${info.title}</h1></div><strong>${list.length} Experiments</strong></div>${grouped||'<div class="empty">No experiments found.</div>'}`;
}

function renderExperimentPage(){requireLogin(); initShell('experiments'); const e=getExp(); document.body.classList.add('unified-experiment-page'); document.body.classList.toggle('deld-page', e.subject==='DELD'); document.body.classList.toggle('eee-page', e.subject==='EEE'); document.title=e.title+' | Virtual Lab'; $('#expTitle').textContent=e.title; $('#expMeta').textContent=`${e.subject} Virtual Lab • ${e.module} • Experiment ${String(e.no).padStart(2,'0')}`; const box=$('#statusBox'); if(box){box.innerHTML=`<div class="exp-subject-strip"><a href="experiments.html?subject=${e.subject}" class="btn ghost">← ${e.subject} Experiments</a><span class="subject-pill ${e.subject.toLowerCase()}">${e.subject} Virtual Lab</span><span class="mini-pill">${e.module}</span><span class="mini-pill">Unified experiment template</span></div>`;} $('#aimText').textContent=e.aim; $('#theoryText').innerHTML=theoryText(e); $('#expFormula').textContent=e.formula; $('#componentsBody').innerHTML=componentsFor(e).map(c=>`<tr><td class="comp-img">${iconSVG(c[0])}</td><td><b>${c[0]}</b></td><td><span class="value-chip">${c[1]}</span></td><td><b>${c[2]||'-'}</b></td><td>${c[3]||''}</td><td>${c[4]||''}</td></tr>`).join(''); $('#simArea').innerHTML=simulationHTML(e); qIndex=0; renderObs(); renderQuiz(); renderCert(); updateStatus(); updateProgressCard(); updateSim();}
function componentsFor(e){ if(componentSets[e.type]) return componentSets[e.type]; return e.subject==='DELD'?componentSets.deld:componentSets.eee; }
function theoryText(e){
 const intro = e.subject==='DELD' ? 'Digital Electronics and Logic Design uses binary signals 0 and 1 to build computing and control systems. The experiment demonstrates logical operation using live switches, output LEDs and truth-table based verification.' : 'Electrical and Electronics Engineering experiments connect circuit theory with practical measurement. The simulator changes input values, calculates expected output, displays a schematic and stores readings in the observation table.';
 return `<h3>Introduction</h3><p>${intro}</p><h3>Detailed Theory</h3><p>${e.title} is an important engineering experiment because it explains how theoretical laws are applied while analysing real circuits. In an actual laboratory, students connect apparatus, vary input values, measure output using instruments and compare practical readings with calculated results.</p><p>In this virtual lab, the same process is represented digitally. The input controls act like laboratory knobs or switches. The circuit diagram shows signal or current path, while the output meters/LEDs show the result instantly. This makes the experiment safe, repeatable and easy to understand.</p><p><b>Engineering importance:</b> This topic is useful in circuit design, troubleshooting, measurement systems, embedded systems and electronic product development. Correct observation and formula verification are more important than only remembering definitions.</p><h3>Applications</h3><ul><li>Used in academic laboratory verification and circuit analysis.</li><li>Used in design of electronic systems and control hardware.</li><li>Helps understand measurements, errors and output response.</li><li>Forms base for advanced electrical, electronics and digital system design.</li></ul><h3>Viva Questions</h3><ol><li>State the main working principle of ${e.title}.</li><li>Which formula is used in this experiment?</li><li>Which input parameters affect the output?</li><li>Why is observation table important in laboratory work?</li><li>Give one practical application of this experiment.</li></ol>`;
}
function tab(id){$$('.panel').forEach(p=>p.classList.remove('active')); $('#'+id)?.classList.add('active'); $$('.side button').forEach(b=>b.classList.toggle('active',b.dataset.tab===id)); if(id==='simulation') updateSim(); if(id==='observations') renderObs(); if(id==='certificate') renderCert();}

function iconSVG(name='Component'){
 const n=String(name).toLowerCase();
 if(n.includes('resistor')||n.includes('shunt')||n.includes('multiplier')) return `<svg viewBox="0 0 120 72" class="comp-icon"><path d="M8 36h18l7-12 12 24 12-24 12 24 12-24 7 12h24" fill="none" stroke="#0b4f8a" stroke-width="5" stroke-linejoin="round"/></svg>`;
 if(n.includes('diode')) return `<svg viewBox="0 0 120 72" class="comp-icon"><path d="M12 36h32" stroke="#0b4f8a" stroke-width="5"/><path d="M44 16l34 20-34 20z" fill="#e7f0ff" stroke="#0b4f8a" stroke-width="4"/><path d="M80 16v40" stroke="#0b4f8a" stroke-width="5"/><path d="M80 36h28" stroke="#0b4f8a" stroke-width="5"/></svg>`;
 if(n.includes('supply')||n.includes('source')||n.includes('transformer')) return `<svg viewBox="0 0 120 72" class="comp-icon"><circle cx="36" cy="36" r="22" fill="#fff" stroke="#0b4f8a" stroke-width="4"/><path d="M20 36c8-18 24 18 32 0" fill="none" stroke="#1976d2" stroke-width="4"/><path d="M58 36h46" stroke="#0b4f8a" stroke-width="5"/></svg>`;
 if(n.includes('meter')||n.includes('voltmeter')||n.includes('ammeter')||n.includes('display')) return `<svg viewBox="0 0 120 72" class="comp-icon"><rect x="18" y="14" width="84" height="44" rx="8" fill="#fff" stroke="#0b4f8a" stroke-width="4"/><text x="60" y="43" text-anchor="middle" font-size="18" font-weight="800" fill="#1976d2">DMM</text></svg>`;
 if(n.includes('led')) return `<svg viewBox="0 0 120 72" class="comp-icon"><circle cx="55" cy="36" r="18" fill="#e7f0ff" stroke="#0b4f8a" stroke-width="4"/><path d="M73 36h35M12 36h25" stroke="#0b4f8a" stroke-width="5"/><path d="M78 14l12-8M88 24l16-6" stroke="#1976d2" stroke-width="4"/></svg>`;
 if(n.includes('switch')) return `<svg viewBox="0 0 120 72" class="comp-icon"><path d="M12 44h30" stroke="#0b4f8a" stroke-width="5"/><path d="M78 44h30" stroke="#0b4f8a" stroke-width="5"/><circle cx="42" cy="44" r="5" fill="#0b4f8a"/><circle cx="78" cy="44" r="5" fill="#0b4f8a"/><path d="M46 40l28-18" stroke="#1976d2" stroke-width="5" stroke-linecap="round"/></svg>`;
 if(n.includes('gate')||n.includes('ic')||n.includes('mux')||n.includes('decoder')||n.includes('encoder')||n.includes('flip')) return `<svg viewBox="0 0 120 72" class="comp-icon"><rect x="25" y="14" width="70" height="44" rx="6" fill="#fff" stroke="#0b4f8a" stroke-width="4"/><path d="M18 24h7M18 36h7M18 48h7M95 24h7M95 36h7M95 48h7" stroke="#1976d2" stroke-width="4"/><text x="60" y="42" text-anchor="middle" font-size="14" font-weight="800" fill="#0b4f8a">IC</text></svg>`;
 return `<svg viewBox="0 0 120 72" class="comp-icon"><rect x="22" y="16" width="76" height="40" rx="8" fill="#fff" stroke="#0b4f8a" stroke-width="4"/><path d="M36 36h48" stroke="#1976d2" stroke-width="4"/></svg>`
}
function simulationHTML(e){return e.subject==='DELD'?deldSimHTML(e):eeeSimHTML(e)}
function eeeInputs(type){
 const mk=(id,label,val,unit,min,max,step)=>({id,label,val,unit,min,max,step});
 if(type==='transformer') return [mk('v','Primary Voltage Vp',230,'V',10,250,1),mk('r1','Primary Turns Np',500,'turns',50,1000,10),mk('r2','Secondary Turns Ns',250,'turns',50,1000,10)];
 if(type==='kcl') return [mk('v','Incoming Current I1',6,'A',0,20,0.1),mk('r1','Incoming Current I2',4,'A',0,20,0.1),mk('r2','Outgoing Current I3',10,'A',0,25,0.1)];
 if(type==='kvl') return [mk('v','Source Voltage Vs',12,'V',0,50,0.1),mk('r1','Drop Across R1 (V1)',5,'V',0,50,0.1),mk('r2','Drop Across R2 (V2)',7,'V',0,50,0.1)];
 if(type==='diode') return [mk('v','Applied Forward Voltage Vf',2,'V',0,5,0.01),mk('r1','Series Resistance Rs',220,'Ω',10,1000,1),mk('r2','Silicon Knee Voltage Vγ',0.7,'V',0.2,1,0.01)];
 if(type==='rectifier') return [mk('v','AC Peak Voltage Vm',12,'V',1,50,0.1),mk('r1','Diode Drop Vd',0.7,'V',0.1,1.2,0.01),mk('r2','Load Resistance RL',1000,'Ω',100,5000,10)];
 if(type==='instrument') return [mk('v','Input Voltage Channel',12,'V',0,30,0.01),mk('r1','Input Current Channel',1.25,'A',0,10,0.01),mk('r2','ADC Resolution Step',0.01,'',0.001,0.1,0.001)];
 if(type==='ohm') return [mk('v','Applied Voltage V',12,'V',0,30,0.1),mk('r1','Load Resistance R',100,'Ω',10,1000,1)];
 if(type==='series') return [mk('v','Supply Voltage Vs',12,'V',0,30,0.1),mk('r1','Series Resistor R1',100,'Ω',10,1000,1),mk('r2','Series Resistor R2',220,'Ω',10,1000,1)];
 if(type==='parallel') return [mk('v','Supply Voltage Vs',12,'V',0,30,0.1),mk('r1','Branch Resistor R1',100,'Ω',10,1000,1),mk('r2','Branch Resistor R2',220,'Ω',10,1000,1)];
 if(type==='divider') return [mk('v','Input Voltage Vin',12,'V',0,30,0.1),mk('r1','Upper Resistor R1',1000,'Ω',10,10000,10),mk('r2','Lower Resistor R2',2000,'Ω',10,10000,10)];
 if(type==='thevenin') return [mk('v','Thevenin Voltage Vth',12,'V',0,50,0.1),mk('r1','Thevenin Resistance Rth',100,'Ω',1,2000,1),mk('r2','Load Resistance RL',200,'Ω',1,2000,1)];
 if(type==='norton') return [mk('v','Norton Current IN',1.2,'A',0,10,0.01),mk('r1','Norton Resistance RN',100,'Ω',1,2000,1),mk('r2','Load Resistance RL',200,'Ω',1,2000,1)];
 return [mk('v','Input Value',12,'V',0,100,0.1),mk('r1','Parameter 1',100,'Ω',1,1000,1),mk('r2','Parameter 2',200,'Ω',1,1000,1)];
}
function unitMap(e){
 if(e.type==='ohm') return {rt:'Ω',i1:'A',i2:'W',it:'A',rtL:'Resistance',i1L:'Current',i2L:'Power',itL:'Final Current'};
 if(e.type==='series') return {rt:'Ω',i1:'A',i2:'V',it:'A',rtL:'Equivalent Resistance',i1L:'Circuit Current',i2L:'Supply Voltage',itL:'Final Current'};
 if(e.type==='parallel') return {rt:'Ω',i1:'A',i2:'A',it:'A',rtL:'Equivalent Resistance',i1L:'Branch I1',i2L:'Branch I2',itL:'Total Current'};
 if(e.type==='divider') return {rt:'Ω',i1:'V',i2:'V',it:'V',rtL:'Total Resistance',i1L:'Output Vout',i2L:'Input Vin',itL:'Final Vout'};
 if(e.type==='kcl') return {rt:'',i1:'A',i2:'A',it:'',rtL:'Node Equation',i1L:'Entering Current',i2L:'Leaving Current',itL:'Verification'};
 if(e.type==='kvl') return {rt:'',i1:'V',i2:'V',it:'',rtL:'Loop Equation',i1L:'Total Drops',i2L:'Source Voltage',itL:'Verification'};
 if(e.type==='thevenin') return {rt:'Ω',i1:'V',i2:'Ω',it:'A',rtL:'Rth',i1L:'Vth',i2L:'RL',itL:'Load Current'};
 if(e.type==='norton') return {rt:'Ω',i1:'A',i2:'Ω',it:'A',rtL:'RN',i1L:'IN',i2L:'RL',itL:'Load Current'};
 if(e.type==='diode') return {rt:'',i1:'mA',i2:'V',it:'mA',rtL:'Operating Region',i1L:'Diode Current',i2L:'Knee Voltage',itL:'Final Current'};
 if(e.type==='rectifier') return {rt:'',i1:'V',i2:'V',it:'V',rtL:'Rectifier Type',i1L:'Peak Output',i2L:'Average DC',itL:'Vdc'};
 if(e.type==='transformer') return {rt:'',i1:'V',i2:'V',it:'V',rtL:'Turns Ratio',i1L:'Primary Voltage',i2L:'Secondary Voltage',itL:'Final Vs'};
 if(e.type==='instrument') return {rt:'',i1:'V',i2:'A',it:'',rtL:'Instrument Mode',i1L:'DVM Reading',i2L:'DAM Reading',itL:'Digital Display'};
 return {rt:'',i1:'',i2:'',it:'',rtL:'Formula',i1L:'Output 1',i2L:'Output 2',itL:'Result'};
}
function eeeSimHTML(e){
 const inputs=eeeInputs(e.type), u=unitMap(e);
 return `<div class="sim-shell pro-sim"><div class="eng-toolbar"><div><span class="badge">Engineering Mode</span><h3>${e.title} Simulation Bench</h3><p>Change practical lab parameters, observe calculated readings, then add the reading to the observation table.</p></div><div class="bench-tags"><span>${e.module}</span><span>${e.formula}</span></div></div><div class="sim-inputs pro-controls">${inputs.map(i=>`<div class="input-panel control-card"><label>${i.label}<span id="${i.id}Val">${i.val} ${i.unit}</span></label><input id="${i.id}" class="sim-number" type="range" min="${i.min}" max="${i.max}" step="${i.step}" value="${i.val}" oninput="updateSim()"><div class="range-scale"><small>${i.min}</small><small>${i.max} ${i.unit}</small></div></div>`).join('')}</div><div class="simulation-grid eng-grid"><div class="circuit-stage eng-stage"><div class="stage-head"><b>${e.title} Laboratory Circuit</b><span class="badge">Live Calculation</span></div><div id="circuitSvg">${eeeCircuitSVG(e)}</div><div class="calc-box"><button class="btn" onclick="calculateReading()">Run Calculation</button><button class="btn secondary" onclick="saveReading()">Add to Observation</button><button class="btn ghost" onclick="clearObservations()">Clear Table</button></div></div><aside class="meter-panel eng-meters"><div class="meter-card"><span id="rtLabel">${u.rtL}</span><b id="rtOut">-</b></div><div class="meter-card good"><span id="i1Label">${u.i1L}</span><b id="i1Out">-</b></div><div class="meter-card warn"><span id="i2Label">${u.i2L}</span><b id="i2Out">-</b></div><div class="meter-card"><span id="itLabel">${u.itL}</span><b id="itOut">-</b></div><div class="formula-card note" id="calcText">Use sliders to set lab values, then run calculation.</div></aside></div><div class="graph-panel eng-graph"><div class="graph-head"><b id="graphTitle">Characteristic / Response Plot</b><span class="badge">Engineering Graph</span></div><div id="graphMount"></div></div></div>`
}
function eeeCircuitSVG(e){
 const title=e.type==='kcl'?'KCL node current verification':e.type==='kvl'?'KVL closed-loop voltage verification':e.type==='divider'?'Series voltage divider network':e.type==='transformer'?'Ideal transformer model':e.type==='diode'?'Forward-biased diode test circuit':e.type==='rectifier'?'Half-wave rectifier waveform':e.type==='instrument'?'Digital measurement system':e.type==='parallel'?'Parallel resistive network':e.type==='series'?'Series resistive network':'DC resistive test circuit';
 const centerBlock=e.type==='transformer'?'Transformer':e.type==='instrument'?'ADC + Display':e.type==='diode'?'Diode':e.type==='rectifier'?'Rectifier':e.type==='divider'?'R1  R2':e.type==='kcl'?'Node':e.type==='kvl'?'Loop':e.type==='parallel'?'R1 ∥ R2':'Resistive Network';
 return `<svg class="circuit-svg eng-svg" viewBox="0 0 980 470"><defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#0ea5e9"/></marker><linearGradient id="panelG" x1="0" x2="1"><stop offset="0" stop-color="#f8fbff"/><stop offset="1" stop-color="#eef7ff"/></linearGradient></defs><rect x="25" y="25" width="930" height="405" rx="28" fill="url(#panelG)" stroke="#cbdff5"/><text x="50" y="70" class="label">${title}</text><text x="50" y="98" class="read">${e.formula}</text><path class="wire" d="M115 235 H245"/><path class="wire" d="M735 235 H855"/><path class="wire muted" d="M115 235 V140 H855 V235"/><circle cx="115" cy="235" r="42" fill="#fff" stroke="#0b4f8a" stroke-width="5"/><text x="88" y="243" class="label">SRC</text><rect x="245" y="150" width="490" height="170" rx="22" fill="#ffffff" stroke="#0b4f8a" stroke-width="4"/><text x="490" y="230" text-anchor="middle" class="label">${centerBlock}</text><text x="490" y="262" text-anchor="middle" class="read">Live mathematical model</text><circle id="simLed" cx="855" cy="235" r="44" fill="#e8eef5" stroke="#0b4f8a" stroke-width="5"/><text x="819" y="308" class="read">Output</text><path class="arrow pulse-flow" marker-end="url(#arr)" d="M160 205 H235"/><path class="arrow pulse-flow" marker-end="url(#arr)" d="M745 205 H820"/><path class="arrow pulse-flow delay" marker-end="url(#arr)" d="M390 140 H620"/><text x="70" y="382" class="read">Input: <tspan id="svgV">-</tspan></text><text x="270" y="382" class="read">Parameter 1: <tspan id="svgR1">-</tspan></text><text x="505" y="382" class="read">Parameter 2: <tspan id="svgR2">-</tspan></text><text x="740" y="382" class="read">Result: <tspan id="svgIT">-</tspan></text></svg>`
}
function val(id){return Number($('#'+id)?.value||0)}
function fmt(x){return typeof x==='string'?x:(Number.isFinite(x)?Math.round(x*1000)/1000:'-')}
function reading(){const e=getExp(); let v=val('v'), r1=val('r1'), r2=val('r2'), rt='-', i1=0, i2=0, it=0, status='Calculated';
 if(e.type==='ohm'){rt=r1; it=v/r1; i1=it; i2=v*it}
 else if(e.type==='series'){rt=r1+r2; it=v/rt; i1=it; i2=v}
 else if(e.type==='parallel'){rt=1/(1/r1+1/r2); i1=v/r1; i2=v/r2; it=i1+i2}
 else if(e.type==='divider'){rt=r1+r2; i1=v*r2/rt; i2=v; it=i1}
 else if(e.type==='kcl'){rt=`I1 + I2 = I3`; i1=v+r1; i2=r2; it=(Math.abs(i1-i2)<0.05)?'Verified':'Not Balanced'; status=it}
 else if(e.type==='kvl'){rt=`Vs = V1 + V2`; i1=r1+r2; i2=v; it=(Math.abs(i1-i2)<0.05)?'Verified':'Not Balanced'; status=it}
 else if(e.type==='thevenin'){rt=r1; i1=v; i2=r2; it=v/(r1+r2)}
 else if(e.type==='norton'){rt=r1; i1=v; i2=r2; it=v*(r1/(r1+r2))}
 else if(e.type==='diode'){rt=v>r2?'Forward Bias Region':'Below Cut-in'; it=v>r2?(v-r2)/r1*1000:0; i1=it; i2=r2}
 else if(e.type==='rectifier'){rt='Half Wave Rectification'; i1=Math.max(v-r1,0); i2=i1/Math.PI; it=i2}
 else if(e.type==='transformer'){rt=(r2/r1).toFixed(3); i1=v; i2=v*r2/r1; it=i2}
 else if(e.type==='instrument'){rt='ADC Quantized Display'; i1=Math.round(v/r2)*r2; i2=Math.round(r1/r2)*r2; it=`${fmt(i1)} V, ${fmt(i2)} A`}
 return {v:fmt(v),r1:fmt(r1),r2:fmt(r2),rt:fmt(rt),i1:fmt(i1),i2:fmt(i2),it:fmt(it),status};
}
function withUnit(value,unit){return value==='-'?'-':`${value}${unit?' '+unit:''}`}
function calculateReading(){updateSim(); const e=getExp(), r=reading(), u=unitMap(e); $('#calcText').innerHTML=`<b>Calculated Reading</b><br><span>${e.formula}</span><br><b>${u.itL}:</b> ${withUnit(r.it,u.it)}`; saveProgress(e.slug,{simulationRun:true}); updateProgressCard()}
function updateSim(){
 const e=getExp(); if(e.subject==='DELD'){updateDeld();return}
 const r=reading(), u=unitMap(e);
 eeeInputs(e.type).forEach(i=>{const el=$('#'+i.id+'Val'); if(el) el.textContent=val(i.id)+' '+i.unit});
 [['rt',u.rt],['i1',u.i1],['i2',u.i2],['it',u.it]].forEach(([k,unit])=>{const el=$('#'+k+'Out'); if(el) el.textContent=withUnit(r[k],unit)});
 ['V','R1','R2','IT'].forEach((id,i)=>{const el=$('#svg'+id); if(el) el.textContent=[r.v,r.r1,r.r2,r.it][i]});
 const led=$('#simLed'), numeric=parseFloat(r.it)||parseFloat(r.i1)||0; if(led) led.setAttribute('fill', numeric>0?'#38bdf8':'#e8eef5');
 const g=$('#graphTitle'); if(g) g.textContent = e.type==='diode'?'Approximate Diode V-I Curve': e.type==='rectifier'?'Input vs Rectified Output Waveform': e.type==='transformer'?'Turns Ratio Response': e.type==='divider'?'Voltage Divider Response':'Live Output Response';
 renderGraph();
}
function renderGraph(){
 const m=$('#graphMount'); if(!m) return; const e=getExp(), r=reading();
 if(e.type==='rectifier'){
  m.innerHTML=`<svg class="sim-graph" viewBox="0 0 760 210"><path class="graph-grid" d="M60 30 H720 M60 75 H720 M60 120 H720 M60 165 H720"/><path class="graph-axis" d="M60 25 V170 H725"/><path class="wave in" d="M60 100 C100 25 140 25 180 100 S260 175 300 100 S380 25 420 100 S500 175 540 100 S620 25 660 100 S740 175 760 100"/><path class="wave out" d="M60 100 C100 35 140 35 180 100 M300 100 C340 35 380 35 420 100 M540 100 C580 35 620 35 660 100"/><text x="70" y="195" class="graph-label">AC input and half-wave rectified output</text></svg>`; return;
 }
 const y=Math.min(Math.abs(parseFloat(r.it)||parseFloat(r.i1)||0),120); const bars=[.3,.55,.8,1.05,1.3].map((k,i)=>Math.max(10,Math.min(135,y*k+18)));
 const points=bars.map((b,i)=>`${85+i*125},${165-b}`).join(' ');
 m.innerHTML=`<svg class="sim-graph" viewBox="0 0 760 210"><path class="graph-grid" d="M60 35 H720 M60 70 H720 M60 105 H720 M60 140 H720"/><path class="graph-axis" d="M60 25 V170 H725"/><polyline class="graph-line" points="${points}"/><${''}g>${bars.map((b,i)=>`<circle class="graph-point" cx="${85+i*125}" cy="${165-b}" r="6"/><text x="${72+i*125}" y="190" class="graph-label">T${i+1}</text>`).join('')}</g><text x="64" y="20" class="graph-label">Computed response</text></svg>`;
}

let dA=0,dB=0,dC=0,dS0=0,dS1=0,dCount=0;
function deldSimHTML(e){return `<div class="simulation-grid"><div class="circuit-stage"><div class="stage-head"><b>${e.title} Live Digital Circuit</b><span class="badge">DELD Simulation</span></div><div class="digital-controls"><button id="swA" class="btn secondary" onclick="toggleD('A')">A=0</button><button id="swB" class="btn secondary" onclick="toggleD('B')">B=0</button><button id="swC" class="btn secondary" onclick="toggleD('C')">C/Cin=0</button><button id="swS0" class="btn ghost" onclick="toggleD('S0')">S0=0</button><button id="swS1" class="btn ghost" onclick="toggleD('S1')">S1=0</button><button class="btn" onclick="clockD()">Clock</button></div><div id="deldSvg">${deldSVG(e)}</div><div class="calc-box"><button class="btn" onclick="calculateReading()">Run Logic</button><button class="btn secondary" onclick="saveReading()">Add Reading</button><button class="btn ghost" onclick="clearObservations()">Clear Table</button></div></div><aside class="meter-panel"><div class="meter-card"><span>Input A</span><b id="logicA">0</b></div><div class="meter-card"><span>Input B</span><b id="logicB">0</b></div><div class="meter-card"><span>C / Select</span><b id="logicC">0</b></div><div class="meter-card good"><span>Output</span><b id="logicY">0</b></div><div class="formula-card note" id="calcText">Use switches to change binary inputs.</div></aside></div><div class="truth-box" id="truthBox"></div>`}
function deldSVG(e){return `<svg class="circuit-svg" viewBox="0 0 900 420"><rect x="40" y="45" width="820" height="320" rx="24" fill="#f8fbff" stroke="#d8e6f5"/><path class="wire active" d="M130 150 H330"/><path class="wire active" d="M130 260 H330"/><path class="component" d="M330 105 H505 Q625 105 650 205 Q625 315 505 315 H330 Z"/><path class="wire active" d="M650 210 H760"/><circle id="dLed" cx="800" cy="210" r="42" fill="#e8eef5" stroke="#0b4f8a" stroke-width="5"/><text x="150" y="135" class="label">A</text><text x="150" y="245" class="label">B</text><text id="gateName" x="410" y="215" class="label">${e.title}</text><text id="dOutText" x="720" y="290" class="read">Y=0</text></svg>`}
function toggleD(x){ if(x==='A') dA=1-dA; if(x==='B') dB=1-dB; if(x==='C') dC=1-dC; if(x==='S0') dS0=1-dS0; if(x==='S1') dS1=1-dS1; updateDeld();}
function clockD(){dCount=(dCount+1)%16; dA=dCount&1; dB=(dCount>>1)&1; dC=(dCount>>2)&1; dS0=dA; dS1=dB; updateDeld();}
function deldOutput(){const t=getExp().type; let y=0, label='Y'; if(t==='logic'){y=dA&&dB; label='AND Y'} else if(t==='boolean'){y=(dA&&dB)||(!dA&&dC)||(dB&&dC); label='Expression Y'} else if(t==='halfadder'){y=dA^dB; label=`SUM=${y}, CARRY=${dA&&dB?1:0}`} else if(t==='fulladder'){const s=dA^dB^dC, co=(dA&&dB)||(dC&&(dA^dB)); y=s; label=`SUM=${s}, Cout=${co?1:0}`} else if(t==='halfsub'){const diff=dA^dB, borrow=(!dA)&&dB; y=diff; label=`DIFF=${diff}, BORROW=${borrow?1:0}`} else if(t==='fullsub'){const diff=dA^dB^dC, borrow=(!dA&&dB)||(!(dA^dB)&&dC); y=diff; label=`DIFF=${diff}, BORROW=${borrow?1:0}`} else if(t==='mux'){const sel=dS1*2+dS0; const ds=[dA,dB,dC,dCount&1]; y=ds[sel]; label=`Selected D${sel} = ${y}`} else if(t==='demux'){const sel=dS1*2+dS0; y=dA; label=`Y${sel} = ${dA}`} else if(t==='encoder'){const idx=dS1*2+dS0; y=idx; label=`Binary Code = ${idx.toString(2).padStart(2,'0')}`} else if(t==='decoder'){const idx=dS1*2+dS0; y=1; label=`Y${idx} = 1`} else if(t==='flipflop'){if(dA&&dB) y=dCount&1; else if(dA) y=1; else if(dB) y=0; label=`Q = ${y}`} else if(t==='counter'){y=dCount; label=`Count = ${dCount.toString(2).padStart(4,'0')}`}; return {y,label};}
function updateDeld(){const o=deldOutput(); [['swA','A',dA],['swB','B',dB],['swC','C/Cin',dC],['swS0','S0',dS0],['swS1','S1',dS1]].forEach(x=>{const el=$('#'+x[0]); if(el) el.textContent=`${x[1]}=${x[2]}`}); if($('#logicA')) $('#logicA').textContent=dA; if($('#logicB')) $('#logicB').textContent=dB; if($('#logicC')) $('#logicC').textContent=`${dC} / S=${dS1}${dS0}`; if($('#logicY')) $('#logicY').textContent=o.label; if($('#dLed')) $('#dLed').setAttribute('fill', Number(o.y)?'#ffd43b':'#e8eef5'); if($('#dOutText')) $('#dOutText').textContent=o.label; if($('#calcText')) $('#calcText').innerHTML=`<b>Logic Output</b><br>${o.label}`; if($('#truthBox')) $('#truthBox').innerHTML=truthTable();}
function truthTable(){return `<h3>Truth Table / Current State</h3><table class="obs-table"><thead><tr><th>A</th><th>B</th><th>C/S</th><th>Output</th></tr></thead><tbody><tr><td>${dA}</td><td>${dB}</td><td>${dC} / ${dS1}${dS0}</td><td>${deldOutput().label}</td></tr></tbody></table>`}

function obsKey(){return 'eeeObs_'+getExp().slug} function getObs(){return JSON.parse(localStorage.getItem(obsKey())||'[]')} function setObs(r){localStorage.setItem(obsKey(),JSON.stringify(r))}
function saveReading(){const e=getExp(); let r; if(e.subject==='DELD'){updateDeld(); r={v:'A='+dA,r1:'B='+dB,r2:'C/S='+dC+'/'+dS1+dS0,rt:e.formula,it:deldOutput().label}} else {updateSim(); r=reading()} const rows=getObs(); rows.push(r); setObs(rows); saveProgress(e.slug,{simulationRun:true,observationSaved:true}); renderObs(); updateProgressCard(); alert('Reading added to observation table.');}
function clearObservations(){if(confirm('Clear observations?')){setObs([]); renderObs()}}
function observationHeaders(e){if(e.subject==='DELD') return ['Trial','Input A','Input B','C / Select','Logic Formula','Output']; if(e.type==='kcl') return ['Trial','I1','I2','I3','Equation','Status']; if(e.type==='kvl') return ['Trial','Vs','V1','V2','Equation','Status']; if(e.type==='transformer') return ['Trial','Vp','Np','Ns','Ratio','Vs']; return ['Trial','Input / Voltage','Parameter 1','Parameter 2','Formula / Equivalent','Output'];}
function renderObs(){const body=$('#obsBody'); if(!body)return; const e=getExp(); const head=body.closest('table')?.querySelector('thead tr'); if(head) head.innerHTML=observationHeaders(e).map(h=>`<th>${h}</th>`).join(''); const rows=getObs(); if(!rows.length){body.innerHTML='<tr><td colspan="6">No readings saved yet. Go to Simulation → Calculate → Add Reading.</td></tr>'; const s=$('#obsStats'); if(s) s.remove(); return} body.innerHTML=rows.map((r,i)=>`<tr><td>${i+1}</td><td>${r.v}</td><td>${r.r1}</td><td>${r.r2}</td><td>${r.rt}</td><td>${r.it}</td></tr>`).join(''); let stats=$('#obsStats'); if(!stats){stats=document.createElement('div');stats.id='obsStats';stats.className='note';body.closest('table').after(stats)} stats.innerHTML=`<b>Total Readings:</b> ${rows.length} &nbsp; | &nbsp; <b>Latest Output:</b> ${rows[rows.length-1].it}`;}

const QUIZ_BANK = {
  "ohms-law": [
    {
      "q": "Ohm's Law is valid for a conductor only when which physical condition remains constant?",
      "o": [
        "Temperature",
        "Frequency",
        "Length of wire only",
        "Supply type"
      ],
      "a": 0
    },
    {
      "q": "If voltage across a 20 Ω resistor is 10 V, the current is:",
      "o": [
        "0.5 A",
        "2 A",
        "10 A",
        "200 A"
      ],
      "a": 0
    },
    {
      "q": "The slope of a V-I graph for an ohmic resistor represents:",
      "o": [
        "Resistance",
        "Current",
        "Power",
        "Conductance only"
      ],
      "a": 0
    },
    {
      "q": "For constant resistance, doubling the applied voltage will:",
      "o": [
        "Double the current",
        "Halve the current",
        "Make current zero",
        "Keep current unchanged"
      ],
      "a": 0
    },
    {
      "q": "A non-linear V-I characteristic is generally shown by:",
      "o": [
        "Diode",
        "Metal film resistor",
        "Copper wire at constant temperature",
        "Carbon resistor"
      ],
      "a": 0
    },
    {
      "q": "Which instrument is connected in series to measure current?",
      "o": [
        "Ammeter",
        "Voltmeter",
        "Wattmeter voltage coil only",
        "Oscilloscope probe only"
      ],
      "a": 0
    },
    {
      "q": "Power dissipated in a resistor can be calculated using:",
      "o": [
        "P = I²R",
        "P = R/I",
        "P = V + I",
        "P = IR²"
      ],
      "a": 0
    },
    {
      "q": "If resistance increases while voltage remains constant, current:",
      "o": [
        "Decreases",
        "Increases",
        "Remains fixed",
        "Becomes infinite"
      ],
      "a": 0
    },
    {
      "q": "The SI unit of resistance is:",
      "o": [
        "Ohm",
        "Volt",
        "Ampere",
        "Watt"
      ],
      "a": 0
    },
    {
      "q": "A straight-line V-I graph passing through origin indicates:",
      "o": [
        "Ohmic behaviour",
        "Capacitive reactance only",
        "Magnetic saturation",
        "Digital switching"
      ],
      "a": 0
    }
  ],
  "series-circuit": [
    {
      "q": "In a series circuit, the current through all resistors is:",
      "o": [
        "Same",
        "Different in every resistor",
        "Zero after first resistor",
        "Equal to supply voltage"
      ],
      "a": 0
    },
    {
      "q": "Equivalent resistance of 10 Ω and 20 Ω in series is:",
      "o": [
        "30 Ω",
        "6.67 Ω",
        "10 Ω",
        "20 Ω"
      ],
      "a": 0
    },
    {
      "q": "Voltage division in series circuit depends on:",
      "o": [
        "Resistance value",
        "Wire colour",
        "Frequency only",
        "Switch position only"
      ],
      "a": 0
    },
    {
      "q": "If one component opens in a series circuit, the circuit current becomes:",
      "o": [
        "Zero",
        "Maximum",
        "Unchanged",
        "Negative"
      ],
      "a": 0
    },
    {
      "q": "Total voltage in a series circuit is equal to:",
      "o": [
        "Sum of individual voltage drops",
        "Product of currents",
        "Average resistance",
        "Difference of powers"
      ],
      "a": 0
    },
    {
      "q": "A series circuit is commonly used for:",
      "o": [
        "Voltage divider networks",
        "Current division only",
        "Increasing branches",
        "Parallel load sharing"
      ],
      "a": 0
    },
    {
      "q": "The resistor with higher resistance in series has:",
      "o": [
        "Higher voltage drop",
        "Lower current",
        "No voltage",
        "Same voltage always"
      ],
      "a": 0
    },
    {
      "q": "For two series resistors, total power equals:",
      "o": [
        "Sum of individual powers",
        "Difference of powers",
        "Only first resistor power",
        "Zero"
      ],
      "a": 0
    },
    {
      "q": "Kirchhoff's Voltage Law is directly applied in:",
      "o": [
        "Series loop analysis",
        "Only node current analysis",
        "Only magnetic circuits",
        "Only digital gates"
      ],
      "a": 0
    },
    {
      "q": "When resistors are added in series, total resistance:",
      "o": [
        "Increases",
        "Decreases",
        "Becomes zero",
        "Becomes negative"
      ],
      "a": 0
    }
  ],
  "parallel-circuit": [
    {
      "q": "In a parallel circuit, voltage across each branch is:",
      "o": [
        "Same",
        "Different always",
        "Zero",
        "Equal to resistance"
      ],
      "a": 0
    },
    {
      "q": "Equivalent resistance of two equal 10 Ω resistors in parallel is:",
      "o": [
        "5 Ω",
        "20 Ω",
        "10 Ω",
        "100 Ω"
      ],
      "a": 0
    },
    {
      "q": "Current division in parallel branches depends on:",
      "o": [
        "Branch resistance",
        "Supply colour",
        "Wire length only",
        "Meter brand"
      ],
      "a": 0
    },
    {
      "q": "A branch with lower resistance carries:",
      "o": [
        "More current",
        "Less current",
        "No current",
        "Same current always"
      ],
      "a": 0
    },
    {
      "q": "If one branch opens in a parallel circuit, other branches generally:",
      "o": [
        "Continue operating",
        "Stop completely",
        "Become shorted",
        "Lose voltage"
      ],
      "a": 0
    },
    {
      "q": "Total current in a parallel circuit is:",
      "o": [
        "Sum of branch currents",
        "Average voltage",
        "Product of resistances",
        "Only smallest branch current"
      ],
      "a": 0
    },
    {
      "q": "Adding more parallel resistors causes equivalent resistance to:",
      "o": [
        "Decrease",
        "Increase",
        "Become infinite",
        "Become negative"
      ],
      "a": 0
    },
    {
      "q": "Parallel connection is preferred for domestic loads because:",
      "o": [
        "Each load gets rated voltage independently",
        "Current is same in all loads",
        "All appliances must fail together",
        "It eliminates power consumption"
      ],
      "a": 0
    },
    {
      "q": "The reciprocal formula for parallel resistors is:",
      "o": [
        "1/RT = 1/R1 + 1/R2",
        "RT = R1 + R2",
        "RT = R1 - R2",
        "RT = V/I²"
      ],
      "a": 0
    },
    {
      "q": "Which law is used at junctions of parallel circuits?",
      "o": [
        "KCL",
        "Faraday's law only",
        "Coulomb's friction law",
        "Boolean law"
      ],
      "a": 0
    }
  ],
  "kcl": [
    {
      "q": "Kirchhoff's Current Law is based on conservation of:",
      "o": [
        "Charge",
        "Energy",
        "Momentum",
        "Magnetic flux"
      ],
      "a": 0
    },
    {
      "q": "At a node, algebraic sum of currents is:",
      "o": [
        "Zero",
        "Always one",
        "Equal to resistance",
        "Equal to voltage"
      ],
      "a": 0
    },
    {
      "q": "If 2 A and 3 A enter a node, total leaving current should be:",
      "o": [
        "5 A",
        "1 A",
        "6 A",
        "0 A"
      ],
      "a": 0
    },
    {
      "q": "KCL is most useful for:",
      "o": [
        "Node analysis",
        "Mesh voltage only",
        "Transformer ratio only",
        "Logic simplification"
      ],
      "a": 0
    },
    {
      "q": "Current entering a junction is usually taken as:",
      "o": [
        "Positive by chosen convention",
        "Always negative",
        "Always zero",
        "Invalid"
      ],
      "a": 0
    },
    {
      "q": "Ammeter used for branch current measurement should have:",
      "o": [
        "Very low internal resistance",
        "Very high resistance",
        "Infinite capacitance",
        "No terminals"
      ],
      "a": 0
    },
    {
      "q": "KCL remains valid in AC circuits when using:",
      "o": [
        "Phasor currents",
        "Only DC values",
        "Boolean variables",
        "Mechanical speed"
      ],
      "a": 0
    },
    {
      "q": "Violation of KCL in practical readings may be due to:",
      "o": [
        "Measurement or connection error",
        "Law failure",
        "No resistance",
        "Wrong certificate"
      ],
      "a": 0
    },
    {
      "q": "KCL equation for node with I1,I2 entering and I3 leaving is:",
      "o": [
        "I1 + I2 = I3",
        "I1 = I2 + I3 always",
        "I1I2 = I3",
        "V = IR"
      ],
      "a": 0
    },
    {
      "q": "The common point where branches meet is called:",
      "o": [
        "Node",
        "Loop only",
        "Winding",
        "Flip-flop"
      ],
      "a": 0
    }
  ],
  "kvl": [
    {
      "q": "Kirchhoff's Voltage Law is based on conservation of:",
      "o": [
        "Energy",
        "Charge only",
        "Mass",
        "Logic state"
      ],
      "a": 0
    },
    {
      "q": "Around a closed loop, algebraic sum of voltages is:",
      "o": [
        "Zero",
        "Equal to current",
        "Always positive",
        "Equal to resistance"
      ],
      "a": 0
    },
    {
      "q": "If source is 12 V and one drop is 5 V, remaining drop is:",
      "o": [
        "7 V",
        "17 V",
        "60 V",
        "2.4 V"
      ],
      "a": 0
    },
    {
      "q": "KVL is commonly used in:",
      "o": [
        "Mesh analysis",
        "Only node current equations",
        "Truth table design",
        "Clock generation only"
      ],
      "a": 0
    },
    {
      "q": "Voltage rise across a source and drops across resistors are taken with:",
      "o": [
        "Sign convention",
        "Random signs",
        "Only positive values",
        "No polarity"
      ],
      "a": 0
    },
    {
      "q": "In a series loop, sum of resistor voltage drops equals:",
      "o": [
        "Supply voltage",
        "Total current",
        "Equivalent conductance",
        "Frequency"
      ],
      "a": 0
    },
    {
      "q": "Voltmeter is connected:",
      "o": [
        "In parallel with the component",
        "In series only",
        "Across ammeter fuse",
        "Without probes"
      ],
      "a": 0
    },
    {
      "q": "KVL can be applied to DC and AC circuits using:",
      "o": [
        "Instantaneous values or phasors",
        "Only decimal logic",
        "Only mechanical circuits",
        "Only open circuits"
      ],
      "a": 0
    },
    {
      "q": "A closed conducting path is called:",
      "o": [
        "Loop",
        "Node",
        "Branch current",
        "Truth table"
      ],
      "a": 0
    },
    {
      "q": "Practical KVL error is reduced by:",
      "o": [
        "Correct polarity and calibrated meters",
        "Removing all meters",
        "Using random resistor values",
        "Skipping readings"
      ],
      "a": 0
    }
  ],
  "voltage-divider": [
    {
      "q": "Voltage divider output across R2 is:",
      "o": [
        "Vout = Vin × R2/(R1+R2)",
        "Vout = Vin × R1R2",
        "Vout = R1/R2",
        "Vout = Vin/R1"
      ],
      "a": 0
    },
    {
      "q": "If R2 increases while Vin and R1 are constant, Vout generally:",
      "o": [
        "Increases",
        "Decreases to zero always",
        "Stays fixed",
        "Becomes AC only"
      ],
      "a": 0
    },
    {
      "q": "Voltage divider is used to obtain:",
      "o": [
        "A fraction of input voltage",
        "Higher current gain",
        "Magnetic flux",
        "Binary counting only"
      ],
      "a": 0
    },
    {
      "q": "For Vin=10 V, R1=R2, Vout is:",
      "o": [
        "5 V",
        "10 V",
        "0 V",
        "20 V"
      ],
      "a": 0
    },
    {
      "q": "Loading effect occurs when:",
      "o": [
        "Load resistance affects divider output",
        "No resistor is present",
        "Battery is ideal only",
        "Switch is open"
      ],
      "a": 0
    },
    {
      "q": "For accurate divider output, load resistance should be:",
      "o": [
        "Much larger than R2",
        "Much smaller than R2",
        "Zero",
        "Equal to wire resistance only"
      ],
      "a": 0
    },
    {
      "q": "Total current in divider is:",
      "o": [
        "Vin/(R1+R2)",
        "Vin×R1",
        "R2/Vin",
        "Vin+R1+R2"
      ],
      "a": 0
    },
    {
      "q": "Voltage divider is an example of:",
      "o": [
        "Series resistive network",
        "Parallel-only network",
        "Sequential digital circuit",
        "Transformer winding"
      ],
      "a": 0
    },
    {
      "q": "Which component can create variable voltage divider?",
      "o": [
        "Potentiometer",
        "Diode only",
        "Ammeter",
        "Fuse"
      ],
      "a": 0
    },
    {
      "q": "Voltage divider rule is derived from:",
      "o": [
        "Ohm's Law and series current",
        "Boolean algebra",
        "Transformer EMF equation",
        "Counter state table"
      ],
      "a": 0
    }
  ],
  "thevenin": [
    {
      "q": "Thevenin's theorem replaces a linear network by:",
      "o": [
        "One voltage source in series with resistance",
        "One current source in parallel with resistance",
        "Only a capacitor",
        "Only a logic gate"
      ],
      "a": 0
    },
    {
      "q": "Thevenin voltage is measured across load terminals under:",
      "o": [
        "Open-circuit condition",
        "Short-circuit load condition",
        "Maximum load only",
        "Grounded supply only"
      ],
      "a": 0
    },
    {
      "q": "Thevenin resistance is found by deactivating independent voltage sources as:",
      "o": [
        "Short circuits",
        "Open circuits",
        "Amplifiers",
        "LEDs"
      ],
      "a": 0
    },
    {
      "q": "Load current using Thevenin equivalent is:",
      "o": [
        "IL = Vth/(Rth+RL)",
        "IL = Vth×Rth",
        "IL = RL/Vth",
        "IL = Rth-RL"
      ],
      "a": 0
    },
    {
      "q": "Thevenin theorem is useful for:",
      "o": [
        "Simplifying complex linear networks",
        "Designing fonts",
        "Replacing all non-linear devices exactly",
        "Only digital counters"
      ],
      "a": 0
    },
    {
      "q": "An ideal voltage source has internal resistance:",
      "o": [
        "Zero",
        "Infinite",
        "Equal to load only",
        "Negative always"
      ],
      "a": 0
    },
    {
      "q": "Dependent sources during Rth calculation should be:",
      "o": [
        "Kept active with test source if needed",
        "Always removed",
        "Always shorted",
        "Replaced by LED"
      ],
      "a": 0
    },
    {
      "q": "Thevenin equivalent is observed from:",
      "o": [
        "Load terminals",
        "Power switch only",
        "Any random node",
        "Certificate page"
      ],
      "a": 0
    },
    {
      "q": "Maximum power transfer occurs when:",
      "o": [
        "RL = Rth",
        "RL = 0 always",
        "RL is infinite",
        "Vth = 0 only"
      ],
      "a": 0
    },
    {
      "q": "The theorem applies directly to:",
      "o": [
        "Linear bilateral networks",
        "Only mechanical gears",
        "Only HTML pages",
        "Only binary gates"
      ],
      "a": 0
    }
  ],
  "norton": [
    {
      "q": "Norton's theorem replaces a network by:",
      "o": [
        "Current source in parallel with resistance",
        "Voltage source in series with resistance",
        "Only diode",
        "Only capacitor"
      ],
      "a": 0
    },
    {
      "q": "Norton current is the current through load terminals when they are:",
      "o": [
        "Short-circuited",
        "Open-circuited",
        "Floating only",
        "Connected to voltmeter only"
      ],
      "a": 0
    },
    {
      "q": "Norton resistance is equal to:",
      "o": [
        "Thevenin resistance",
        "Load voltage",
        "Source current only",
        "Zero always"
      ],
      "a": 0
    },
    {
      "q": "Relation between Thevenin and Norton source is:",
      "o": [
        "Vth = IN × RN",
        "IN = Vth × RN",
        "RN = Vth + IN",
        "Vth = IN/RN always"
      ],
      "a": 0
    },
    {
      "q": "Load current in Norton equivalent depends on:",
      "o": [
        "Current division between RN and RL",
        "Voltage division only",
        "Clock edge",
        "Binary input"
      ],
      "a": 0
    },
    {
      "q": "An ideal current source has internal resistance:",
      "o": [
        "Infinite",
        "Zero",
        "Equal to wire",
        "Negative"
      ],
      "a": 0
    },
    {
      "q": "Norton theorem helps in:",
      "o": [
        "Analyzing load changes quickly",
        "Measuring temperature only",
        "Generating certificates",
        "Drawing tables only"
      ],
      "a": 0
    },
    {
      "q": "Norton equivalent is taken at:",
      "o": [
        "Output/load terminals",
        "Only supply terminal",
        "Only ground node",
        "Only browser storage"
      ],
      "a": 0
    },
    {
      "q": "For maximum power transfer in Norton form:",
      "o": [
        "RL = RN",
        "RL = 0",
        "RN = infinite only",
        "IN = 0"
      ],
      "a": 0
    },
    {
      "q": "Norton theorem is applicable to:",
      "o": [
        "Linear electrical networks",
        "Only sequential circuits",
        "Only optics",
        "Only CSS layouts"
      ],
      "a": 0
    }
  ],
  "diode": [
    {
      "q": "A silicon diode typically starts conducting near:",
      "o": [
        "0.7 V",
        "0.1 V",
        "5 V",
        "12 V"
      ],
      "a": 0
    },
    {
      "q": "In forward bias, P-side is connected to:",
      "o": [
        "Positive terminal",
        "Negative terminal",
        "Ground only",
        "No terminal"
      ],
      "a": 0
    },
    {
      "q": "Diode V-I characteristic is:",
      "o": [
        "Non-linear",
        "Perfectly linear",
        "Constant resistance only",
        "Independent of voltage"
      ],
      "a": 0
    },
    {
      "q": "Reverse saturation current is generally:",
      "o": [
        "Very small",
        "Very large always",
        "Equal to forward current",
        "Zero for all temperatures"
      ],
      "a": 0
    },
    {
      "q": "A diode mainly allows current:",
      "o": [
        "In one direction",
        "In both directions equally",
        "Only in AC circuits",
        "Only through open circuit"
      ],
      "a": 0
    },
    {
      "q": "Series resistor in diode experiment is used to:",
      "o": [
        "Limit current",
        "Increase breakdown intentionally",
        "Remove voltage",
        "Measure frequency"
      ],
      "a": 0
    },
    {
      "q": "Zener breakdown occurs under:",
      "o": [
        "Reverse bias at specified voltage",
        "Forward bias at 0 V",
        "Open circuit only",
        "Logic high input"
      ],
      "a": 0
    },
    {
      "q": "Dynamic resistance of diode is related to:",
      "o": [
        "Slope of V-I curve",
        "Wire length only",
        "Supply brand",
        "Truth table"
      ],
      "a": 0
    },
    {
      "q": "Diode is used in:",
      "o": [
        "Rectification",
        "Voltage measurement only",
        "Mechanical coupling",
        "Binary storage only"
      ],
      "a": 0
    },
    {
      "q": "Forward current increases rapidly after:",
      "o": [
        "Cut-in voltage",
        "Zero resistance point",
        "Clock pulse",
        "Transformer ratio"
      ],
      "a": 0
    }
  ],
  "rectifier": [
    {
      "q": "A half-wave rectifier uses diode conduction during:",
      "o": [
        "One half cycle",
        "Both half cycles equally",
        "No cycle",
        "Only negative resistance"
      ],
      "a": 0
    },
    {
      "q": "Average DC output of ideal half-wave rectifier is:",
      "o": [
        "Vm/π",
        "2Vm/π",
        "Vm/2π only",
        "πVm"
      ],
      "a": 0
    },
    {
      "q": "Ripple in rectifier output means:",
      "o": [
        "AC component present in DC output",
        "Pure DC only",
        "No output",
        "Digital count"
      ],
      "a": 0
    },
    {
      "q": "A filter capacitor is connected to:",
      "o": [
        "Reduce ripple",
        "Increase ripple",
        "Block DC entirely",
        "Count pulses"
      ],
      "a": 0
    },
    {
      "q": "PIV of diode means:",
      "o": [
        "Peak Inverse Voltage",
        "Primary Input Voltage",
        "Power Inverter Value",
        "Pulse Interval Vector"
      ],
      "a": 0
    },
    {
      "q": "Rectifier converts:",
      "o": [
        "AC to DC",
        "DC to AC only",
        "Binary to decimal",
        "Resistance to capacitance"
      ],
      "a": 0
    },
    {
      "q": "The output frequency of half-wave rectifier ripple equals:",
      "o": [
        "Input frequency",
        "Twice input frequency",
        "Zero",
        "Half of resistance"
      ],
      "a": 0
    },
    {
      "q": "Load resistor is used to:",
      "o": [
        "Develop output voltage",
        "Stop conduction",
        "Create logic table",
        "Measure flux"
      ],
      "a": 0
    },
    {
      "q": "Full-wave rectifier has ripple frequency:",
      "o": [
        "Twice supply frequency",
        "Same as supply for all types",
        "Zero",
        "One-fourth supply"
      ],
      "a": 0
    },
    {
      "q": "Diode in reverse half cycle is:",
      "o": [
        "Reverse biased",
        "Forward biased",
        "Shorted intentionally",
        "Acting as source"
      ],
      "a": 0
    }
  ],
  "transformer": [
    {
      "q": "Transformer works on the principle of:",
      "o": [
        "Mutual induction",
        "Electrolysis",
        "Photoelectric effect",
        "Boolean algebra"
      ],
      "a": 0
    },
    {
      "q": "Transformer can operate only with:",
      "o": [
        "Changing/AC flux",
        "Pure DC steady current",
        "Open circuit only",
        "Static charge"
      ],
      "a": 0
    },
    {
      "q": "Voltage ratio of ideal transformer is:",
      "o": [
        "Vs/Vp = Ns/Np",
        "Vs/Vp = Np/Ns",
        "Vs = Vp + Ns",
        "Vp = Is/R"
      ],
      "a": 0
    },
    {
      "q": "A step-up transformer has:",
      "o": [
        "Ns greater than Np",
        "Ns less than Np",
        "No secondary",
        "Zero turns"
      ],
      "a": 0
    },
    {
      "q": "In ideal transformer, power input and output are:",
      "o": [
        "Approximately equal",
        "Always zero",
        "Output much higher without limit",
        "Unrelated"
      ],
      "a": 0
    },
    {
      "q": "Laminated core reduces:",
      "o": [
        "Eddy current loss",
        "Copper resistance to zero",
        "Frequency",
        "Voltage ratio"
      ],
      "a": 0
    },
    {
      "q": "Current ratio is inversely proportional to:",
      "o": [
        "Turns ratio",
        "Core area only",
        "Insulation colour",
        "Load name"
      ],
      "a": 0
    },
    {
      "q": "Transformer losses include:",
      "o": [
        "Copper and iron losses",
        "Only friction loss",
        "Only logic loss",
        "No loss in practical case"
      ],
      "a": 0
    },
    {
      "q": "Open circuit test mainly determines:",
      "o": [
        "Core loss",
        "Full-load copper loss",
        "Short circuit current only",
        "Binary state"
      ],
      "a": 0
    },
    {
      "q": "Transformer frequency is decided by:",
      "o": [
        "Supply frequency",
        "Turns ratio only",
        "Load resistance only",
        "Certificate ID"
      ],
      "a": 0
    }
  ],
  "digital-instruments": [
    {
      "q": "A digital voltmeter displays measured value in:",
      "o": [
        "Numeric digital form",
        "Only analog pointer form",
        "Only binary LED without scaling",
        "Mechanical dial only"
      ],
      "a": 0
    },
    {
      "q": "ADC in digital instruments converts:",
      "o": [
        "Analog signal to digital code",
        "Digital to mechanical motion",
        "Current to magnetic flux only",
        "Resistance to wire length"
      ],
      "a": 0
    },
    {
      "q": "Resolution of a digital meter depends mainly on:",
      "o": [
        "Number of bits/counts",
        "Probe colour",
        "Case size",
        "Fuse rating only"
      ],
      "a": 0
    },
    {
      "q": "Loading effect of a voltmeter is reduced by:",
      "o": [
        "High input impedance",
        "Low input impedance",
        "Shorting input",
        "Using no probes"
      ],
      "a": 0
    },
    {
      "q": "Digital ammeter usually measures current using:",
      "o": [
        "Shunt resistor and voltage measurement",
        "Open circuit voltage",
        "Transformer only",
        "Logic XOR only"
      ],
      "a": 0
    },
    {
      "q": "Accuracy describes:",
      "o": [
        "Closeness to true value",
        "Number of buttons",
        "Display colour",
        "Storage size"
      ],
      "a": 0
    },
    {
      "q": "Precision describes:",
      "o": [
        "Repeatability of readings",
        "Correctness only once",
        "Maximum voltage only",
        "Input frequency only"
      ],
      "a": 0
    },
    {
      "q": "Range selection prevents:",
      "o": [
        "Overload and improves readability",
        "All errors completely",
        "Need of calibration",
        "Power consumption"
      ],
      "a": 0
    },
    {
      "q": "Sampling rate is important because it decides:",
      "o": [
        "How often signal is measured",
        "Resistance of leads only",
        "Certificate score",
        "LED brightness only"
      ],
      "a": 0
    },
    {
      "q": "A digital instrument needs calibration to:",
      "o": [
        "Maintain measurement reliability",
        "Make display blank",
        "Remove ADC",
        "Change subject"
      ],
      "a": 0
    }
  ],
  "logic-gates": [
    {
      "q": "Which gates are called universal gates?",
      "o": [
        "NAND and NOR",
        "AND and OR",
        "XOR and XNOR",
        "NOT and buffer"
      ],
      "a": 0
    },
    {
      "q": "XOR gate output is 1 when inputs are:",
      "o": [
        "Different",
        "Same",
        "Both 0 only",
        "Both 1 only"
      ],
      "a": 0
    },
    {
      "q": "NOT gate performs:",
      "o": [
        "Inversion",
        "Addition",
        "Multiplication",
        "Storage"
      ],
      "a": 0
    },
    {
      "q": "AND gate output is 1 only when:",
      "o": [
        "All inputs are 1",
        "Any input is 1",
        "All inputs are 0",
        "Inputs are different"
      ],
      "a": 0
    },
    {
      "q": "OR gate output is 0 only when:",
      "o": [
        "All inputs are 0",
        "Any input is 1",
        "Inputs are different",
        "Both inputs are 1"
      ],
      "a": 0
    },
    {
      "q": "XNOR gate output is 1 when inputs are:",
      "o": [
        "Same",
        "Different",
        "A=1 only",
        "B=0 only"
      ],
      "a": 0
    },
    {
      "q": "Logic gates are implemented using:",
      "o": [
        "Transistor switching circuits",
        "Only transformers",
        "Only resistive heaters",
        "Only motors"
      ],
      "a": 0
    },
    {
      "q": "Boolean variable can take:",
      "o": [
        "0 or 1",
        "Any continuous value",
        "Only negative values",
        "Only decimal 9"
      ],
      "a": 0
    },
    {
      "q": "Truth table lists:",
      "o": [
        "All input-output combinations",
        "Only circuit cost",
        "Only instrument range",
        "Only certificate ID"
      ],
      "a": 0
    },
    {
      "q": "NAND gate is equivalent to:",
      "o": [
        "AND followed by NOT",
        "OR followed by NOT",
        "XOR followed by NOT",
        "NOT followed by NOT"
      ],
      "a": 0
    }
  ],
  "boolean-algebra": [
    {
      "q": "Boolean algebra is used to:",
      "o": [
        "Simplify logic expressions",
        "Measure voltage only",
        "Calculate transformer turns only",
        "Draw sine waves"
      ],
      "a": 0
    },
    {
      "q": "A + AB simplifies to:",
      "o": [
        "A",
        "B",
        "AB",
        "A+B"
      ],
      "a": 0
    },
    {
      "q": "De Morgan's theorem states (AB)' equals:",
      "o": [
        "A' + B'",
        "A'B'",
        "A + B",
        "AB"
      ],
      "a": 0
    },
    {
      "q": "A + A' equals:",
      "o": [
        "1",
        "0",
        "A",
        "A'"
      ],
      "a": 0
    },
    {
      "q": "A · A' equals:",
      "o": [
        "0",
        "1",
        "A",
        "A'"
      ],
      "a": 0
    },
    {
      "q": "K-map is used for:",
      "o": [
        "Minimization of Boolean functions",
        "Voltage amplification",
        "Mechanical design",
        "Frequency conversion"
      ],
      "a": 0
    },
    {
      "q": "The dual of AND operation is:",
      "o": [
        "OR",
        "NOT",
        "XOR",
        "XNOR"
      ],
      "a": 0
    },
    {
      "q": "Canonical SOP uses:",
      "o": [
        "Minterms",
        "Maxterms only",
        "Decimals only",
        "Phasors"
      ],
      "a": 0
    },
    {
      "q": "Simplification reduces:",
      "o": [
        "Number of gates and cost",
        "Voltage rating always",
        "Truth table rows",
        "Input variables"
      ],
      "a": 0
    },
    {
      "q": "Identity A + 0 equals:",
      "o": [
        "A",
        "0",
        "1",
        "A'"
      ],
      "a": 0
    }
  ],
  "half-adder": [
    {
      "q": "Half adder has how many inputs?",
      "o": [
        "2",
        "3",
        "1",
        "4"
      ],
      "a": 0
    },
    {
      "q": "Half adder outputs are:",
      "o": [
        "SUM and CARRY",
        "Difference and Borrow",
        "Clock and Reset",
        "Q and Qbar"
      ],
      "a": 0
    },
    {
      "q": "SUM expression of half adder is:",
      "o": [
        "A ⊕ B",
        "AB",
        "A + B only",
        "A'B'"
      ],
      "a": 0
    },
    {
      "q": "CARRY expression of half adder is:",
      "o": [
        "AB",
        "A⊕B",
        "A+B",
        "A'B"
      ],
      "a": 0
    },
    {
      "q": "For A=1, B=1, SUM and CARRY are:",
      "o": [
        "0, 1",
        "1, 0",
        "1, 1",
        "0, 0"
      ],
      "a": 0
    },
    {
      "q": "Half adder cannot add:",
      "o": [
        "Carry input",
        "Two bits",
        "Binary digits",
        "Logic levels"
      ],
      "a": 0
    },
    {
      "q": "XOR gate is used to generate:",
      "o": [
        "SUM",
        "CARRY",
        "Clock",
        "Reset"
      ],
      "a": 0
    },
    {
      "q": "AND gate is used to generate:",
      "o": [
        "CARRY",
        "SUM",
        "Difference",
        "Borrow"
      ],
      "a": 0
    },
    {
      "q": "Half adder is a:",
      "o": [
        "Combinational circuit",
        "Sequential circuit",
        "Memory element",
        "Counter"
      ],
      "a": 0
    },
    {
      "q": "Half adder is used inside:",
      "o": [
        "Arithmetic logic circuits",
        "Voltage dividers",
        "Transformers",
        "Rectifiers"
      ],
      "a": 0
    }
  ],
  "full-adder": [
    {
      "q": "Full adder has inputs:",
      "o": [
        "A, B and Cin",
        "A and B only",
        "J and K",
        "S0 and S1 only"
      ],
      "a": 0
    },
    {
      "q": "Full adder outputs are:",
      "o": [
        "SUM and Cout",
        "Difference and Borrow",
        "Q and Qbar",
        "Y0 and Y1"
      ],
      "a": 0
    },
    {
      "q": "SUM expression is:",
      "o": [
        "A ⊕ B ⊕ Cin",
        "AB",
        "A+B+Cin only",
        "A'B"
      ],
      "a": 0
    },
    {
      "q": "Cout is 1 when:",
      "o": [
        "At least two inputs are 1",
        "All inputs are 0",
        "Only A is 1 always",
        "Inputs are all different only"
      ],
      "a": 0
    },
    {
      "q": "For A=1,B=1,Cin=1 output is:",
      "o": [
        "SUM=1, Cout=1",
        "SUM=0,Cout=0",
        "SUM=1,Cout=0",
        "SUM=0,Cout=1"
      ],
      "a": 0
    },
    {
      "q": "A full adder can be built using:",
      "o": [
        "Two half adders and OR gate",
        "Only one NOT gate",
        "Only one resistor",
        "Only a transformer"
      ],
      "a": 0
    },
    {
      "q": "Full adders are cascaded to make:",
      "o": [
        "Binary adders",
        "Voltage regulators",
        "AC rectifiers",
        "Analog meters"
      ],
      "a": 0
    },
    {
      "q": "Full adder is:",
      "o": [
        "Combinational",
        "Sequential",
        "Astable",
        "Magnetic"
      ],
      "a": 0
    },
    {
      "q": "Carry propagation affects:",
      "o": [
        "Addition speed",
        "Voltage measurement",
        "LED colour only",
        "Resistance value"
      ],
      "a": 0
    },
    {
      "q": "Cin represents:",
      "o": [
        "Carry from previous lower bit",
        "Clock input",
        "Reset input",
        "Select line only"
      ],
      "a": 0
    }
  ],
  "half-subtractor": [
    {
      "q": "Half subtractor performs:",
      "o": [
        "Subtraction of two bits",
        "Addition of three bits",
        "Counting pulses",
        "Voltage division"
      ],
      "a": 0
    },
    {
      "q": "Half subtractor outputs are:",
      "o": [
        "DIFFERENCE and BORROW",
        "SUM and CARRY",
        "Q and Qbar",
        "Y and Enable"
      ],
      "a": 0
    },
    {
      "q": "Difference expression is:",
      "o": [
        "A ⊕ B",
        "AB",
        "A+B",
        "A'B"
      ],
      "a": 0
    },
    {
      "q": "Borrow expression is:",
      "o": [
        "A'B",
        "AB",
        "A⊕B",
        "A+B"
      ],
      "a": 0
    },
    {
      "q": "For A=0 and B=1, Difference and Borrow are:",
      "o": [
        "1, 1",
        "0, 0",
        "1, 0",
        "0, 1"
      ],
      "a": 0
    },
    {
      "q": "Borrow occurs when:",
      "o": [
        "Subtrahend is greater than minuend",
        "A is greater than B",
        "Both inputs are 1 only",
        "Both inputs are 0 only"
      ],
      "a": 0
    },
    {
      "q": "Half subtractor is a:",
      "o": [
        "Combinational circuit",
        "Sequential memory",
        "Counter",
        "Latch only"
      ],
      "a": 0
    },
    {
      "q": "XOR gate gives:",
      "o": [
        "Difference",
        "Borrow",
        "Clock",
        "Enable"
      ],
      "a": 0
    },
    {
      "q": "NOT and AND combination is used for:",
      "o": [
        "Borrow",
        "Difference only",
        "Carry in",
        "Reset"
      ],
      "a": 0
    },
    {
      "q": "Half subtractor lacks:",
      "o": [
        "Borrow input",
        "Two binary inputs",
        "Difference output",
        "Borrow output"
      ],
      "a": 0
    }
  ],
  "full-subtractor": [
    {
      "q": "Full subtractor has inputs:",
      "o": [
        "A, B and Bin",
        "A and B only",
        "J and K",
        "S0 and S1"
      ],
      "a": 0
    },
    {
      "q": "Full subtractor outputs are:",
      "o": [
        "Difference and Bout",
        "SUM and CARRY",
        "Q and Qbar",
        "Y0 and Y1"
      ],
      "a": 0
    },
    {
      "q": "Difference expression is:",
      "o": [
        "A ⊕ B ⊕ Bin",
        "AB",
        "A+B",
        "A'B only"
      ],
      "a": 0
    },
    {
      "q": "Borrow out is generated when:",
      "o": [
        "A is insufficient after considering B and Bin",
        "All inputs are 1 only",
        "A is always 1",
        "Clock edge occurs"
      ],
      "a": 0
    },
    {
      "q": "For A=0,B=0,Bin=1 output is:",
      "o": [
        "D=1, Bout=1",
        "D=0,Bout=0",
        "D=1,Bout=0",
        "D=0,Bout=1"
      ],
      "a": 0
    },
    {
      "q": "Full subtractor can be built using:",
      "o": [
        "Two half subtractors and OR gate",
        "Only one AND gate",
        "Only transformer",
        "Only diode"
      ],
      "a": 0
    },
    {
      "q": "Full subtractors are used in:",
      "o": [
        "Binary arithmetic circuits",
        "AC power measurement only",
        "Rectifier filtering",
        "Magnetic cores"
      ],
      "a": 0
    },
    {
      "q": "It is classified as:",
      "o": [
        "Combinational circuit",
        "Sequential circuit",
        "Memory only",
        "Oscillator"
      ],
      "a": 0
    },
    {
      "q": "Bin stands for:",
      "o": [
        "Borrow input",
        "Binary inversion",
        "Bit index",
        "Base input"
      ],
      "a": 0
    },
    {
      "q": "Cascading full subtractors creates:",
      "o": [
        "Multi-bit subtractor",
        "Multiplexer",
        "Counter only",
        "ADC"
      ],
      "a": 0
    }
  ],
  "multiplexer": [
    {
      "q": "A multiplexer is also called:",
      "o": [
        "Data selector",
        "Data distributor",
        "Binary counter",
        "Memory latch"
      ],
      "a": 0
    },
    {
      "q": "A 4:1 MUX has select lines:",
      "o": [
        "2",
        "1",
        "3",
        "4"
      ],
      "a": 0
    },
    {
      "q": "For S1S0=10 in 4:1 MUX, selected input is:",
      "o": [
        "D2",
        "D0",
        "D1",
        "D3 only always"
      ],
      "a": 0
    },
    {
      "q": "MUX output equals:",
      "o": [
        "Selected data input",
        "All inputs added",
        "Complement of select",
        "Clock frequency"
      ],
      "a": 0
    },
    {
      "q": "MUX is a:",
      "o": [
        "Combinational circuit",
        "Sequential circuit",
        "Flip-flop",
        "Counter"
      ],
      "a": 0
    },
    {
      "q": "Enable input is used to:",
      "o": [
        "Activate or disable MUX",
        "Store previous data",
        "Generate clock",
        "Measure voltage"
      ],
      "a": 0
    },
    {
      "q": "Number of inputs for n select lines is:",
      "o": [
        "2^n",
        "n²",
        "2n only",
        "n/2"
      ],
      "a": 0
    },
    {
      "q": "MUX can implement:",
      "o": [
        "Boolean functions",
        "Transformer action",
        "Rectification",
        "Resistance measurement only"
      ],
      "a": 0
    },
    {
      "q": "In communication, MUX is used for:",
      "o": [
        "Channel selection/data routing",
        "Voltage stepping only",
        "Current limiting",
        "Magnetic coupling"
      ],
      "a": 0
    },
    {
      "q": "If selected input is 0, output is:",
      "o": [
        "0",
        "1 always",
        "Undefined always",
        "Previous state"
      ],
      "a": 0
    }
  ],
  "demultiplexer": [
    {
      "q": "A demultiplexer is also called:",
      "o": [
        "Data distributor",
        "Data selector",
        "Adder",
        "Counter"
      ],
      "a": 0
    },
    {
      "q": "A 1:4 DEMUX has select lines:",
      "o": [
        "2",
        "1",
        "3",
        "4"
      ],
      "a": 0
    },
    {
      "q": "DEMUX routes one input to:",
      "o": [
        "One selected output",
        "All outputs always",
        "No output",
        "Clock input"
      ],
      "a": 0
    },
    {
      "q": "For S1S0=11, selected output is:",
      "o": [
        "Y3",
        "Y0",
        "Y1",
        "Y2"
      ],
      "a": 0
    },
    {
      "q": "DEMUX is a:",
      "o": [
        "Combinational circuit",
        "Sequential circuit",
        "Flip-flop",
        "Oscillator"
      ],
      "a": 0
    },
    {
      "q": "If input Din=1 and selected line is Y2, Y2 becomes:",
      "o": [
        "1",
        "0",
        "Toggle",
        "High impedance always"
      ],
      "a": 0
    },
    {
      "q": "Unselected outputs are generally:",
      "o": [
        "0",
        "1",
        "Random",
        "Clocked"
      ],
      "a": 0
    },
    {
      "q": "DEMUX is used in:",
      "o": [
        "Data routing and decoding",
        "Voltage amplification only",
        "AC rectification",
        "Motor starting"
      ],
      "a": 0
    },
    {
      "q": "A decoder with enable can act as:",
      "o": [
        "Demultiplexer",
        "Adder",
        "Register",
        "Transformer"
      ],
      "a": 0
    },
    {
      "q": "Number of outputs for n select lines is:",
      "o": [
        "2^n",
        "n",
        "2n+1",
        "n/2"
      ],
      "a": 0
    }
  ],
  "encoder": [
    {
      "q": "An encoder converts:",
      "o": [
        "Active input line to binary code",
        "Binary code to active output",
        "AC to DC",
        "Voltage to current"
      ],
      "a": 0
    },
    {
      "q": "A 4:2 encoder has:",
      "o": [
        "4 inputs and 2 outputs",
        "2 inputs and 4 outputs",
        "4 outputs and 4 inputs",
        "1 input and 4 outputs"
      ],
      "a": 0
    },
    {
      "q": "Priority encoder is used when:",
      "o": [
        "More than one input may be active",
        "No input is active ever",
        "Only analog input exists",
        "Clock is absent"
      ],
      "a": 0
    },
    {
      "q": "Encoder is a:",
      "o": [
        "Combinational circuit",
        "Sequential circuit",
        "Flip-flop",
        "Counter"
      ],
      "a": 0
    },
    {
      "q": "For input line D2 active in 4:2 encoder, output is:",
      "o": [
        "10",
        "00",
        "01",
        "11 always"
      ],
      "a": 0
    },
    {
      "q": "Encoders reduce:",
      "o": [
        "Number of signal lines",
        "Voltage rating only",
        "Power factor",
        "Resistance"
      ],
      "a": 0
    },
    {
      "q": "Keyboard scanning commonly uses:",
      "o": [
        "Encoding concept",
        "Transformer concept only",
        "Rectifier concept",
        "KVL only"
      ],
      "a": 0
    },
    {
      "q": "Invalid condition in simple encoder occurs when:",
      "o": [
        "Multiple inputs active together",
        "One input active",
        "All outputs coded",
        "Supply is 5 V"
      ],
      "a": 0
    },
    {
      "q": "Output of encoder is:",
      "o": [
        "Binary representation",
        "Analog sine wave",
        "Pulsating DC",
        "Resistance value"
      ],
      "a": 0
    },
    {
      "q": "Enable pin is used to:",
      "o": [
        "Control operation",
        "Store output",
        "Invert input only",
        "Measure current"
      ],
      "a": 0
    }
  ],
  "decoder": [
    {
      "q": "A decoder converts:",
      "o": [
        "Binary code to active output line",
        "Active line to binary code",
        "AC to DC",
        "Current to voltage"
      ],
      "a": 0
    },
    {
      "q": "A 2:4 decoder has:",
      "o": [
        "2 inputs and 4 outputs",
        "4 inputs and 2 outputs",
        "1 input and 2 outputs",
        "4 select lines"
      ],
      "a": 0
    },
    {
      "q": "For input AB=10, active output is:",
      "o": [
        "Y2",
        "Y0",
        "Y1",
        "Y3 only always"
      ],
      "a": 0
    },
    {
      "q": "Decoder is used in:",
      "o": [
        "Memory address decoding",
        "Transformer stepping",
        "Rectification",
        "Analog filtering only"
      ],
      "a": 0
    },
    {
      "q": "Decoder is a:",
      "o": [
        "Combinational circuit",
        "Sequential circuit",
        "Counter",
        "Register only"
      ],
      "a": 0
    },
    {
      "q": "Enable input in decoder:",
      "o": [
        "Allows or blocks decoding",
        "Stores previous state",
        "Counts clock pulses",
        "Changes supply voltage"
      ],
      "a": 0
    },
    {
      "q": "A BCD to seven-segment decoder drives:",
      "o": [
        "Display segments",
        "Transformer coils",
        "Ammeter pointer",
        "Motor shaft"
      ],
      "a": 0
    },
    {
      "q": "Number of outputs for n input decoder is:",
      "o": [
        "2^n",
        "n",
        "2n only",
        "n²+1"
      ],
      "a": 0
    },
    {
      "q": "Only one output of basic decoder is active for:",
      "o": [
        "Each input combination",
        "Every clock edge",
        "Every analog voltage",
        "No condition"
      ],
      "a": 0
    },
    {
      "q": "Decoder and demux are related because:",
      "o": [
        "Decoder with enable can work as demux",
        "Both store memory",
        "Both are transformers",
        "Both need AC only"
      ],
      "a": 0
    }
  ],
  "flip-flop": [
    {
      "q": "A flip-flop is a:",
      "o": [
        "Bistable memory element",
        "Pure combinational gate",
        "Transformer",
        "Rectifier"
      ],
      "a": 0
    },
    {
      "q": "JK flip-flop toggles when:",
      "o": [
        "J=1 and K=1",
        "J=0 and K=0",
        "J=1 and K=0 only",
        "J=0 and K=1 only"
      ],
      "a": 0
    },
    {
      "q": "J=1, K=0 condition causes:",
      "o": [
        "Set",
        "Reset",
        "Toggle",
        "No change"
      ],
      "a": 0
    },
    {
      "q": "J=0, K=1 condition causes:",
      "o": [
        "Reset",
        "Set",
        "Toggle",
        "Invalid always"
      ],
      "a": 0
    },
    {
      "q": "Clock input controls:",
      "o": [
        "State transition timing",
        "Voltage division",
        "Resistance value",
        "Diode threshold"
      ],
      "a": 0
    },
    {
      "q": "Flip-flops are used in:",
      "o": [
        "Registers and counters",
        "Voltage rectifiers only",
        "Current meters only",
        "Analog filters only"
      ],
      "a": 0
    },
    {
      "q": "Qbar is:",
      "o": [
        "Complement of Q",
        "Same as Q always",
        "Clock input",
        "Enable pin"
      ],
      "a": 0
    },
    {
      "q": "Race-around condition is associated with:",
      "o": [
        "Level-triggered JK flip-flop",
        "Half adder",
        "Voltage divider",
        "Transformer"
      ],
      "a": 0
    },
    {
      "q": "Edge triggering helps:",
      "o": [
        "Avoid unwanted multiple transitions",
        "Increase resistance",
        "Rectify AC",
        "Measure temperature"
      ],
      "a": 0
    },
    {
      "q": "Sequential circuits depend on:",
      "o": [
        "Present input and previous state",
        "Present input only",
        "Resistance only",
        "Supply label"
      ],
      "a": 0
    }
  ],
  "counter": [
    {
      "q": "A binary counter counts:",
      "o": [
        "Clock pulses",
        "Voltage drops",
        "Resistance bands",
        "Analog levels only"
      ],
      "a": 0
    },
    {
      "q": "An n-bit binary counter has states:",
      "o": [
        "2^n",
        "n",
        "2n",
        "n²"
      ],
      "a": 0
    },
    {
      "q": "A 3-bit counter counts from:",
      "o": [
        "0 to 7",
        "0 to 3",
        "1 to 3",
        "0 to 15"
      ],
      "a": 0
    },
    {
      "q": "Counter is built using:",
      "o": [
        "Flip-flops",
        "Transformers",
        "Diodes only",
        "Resistors only"
      ],
      "a": 0
    },
    {
      "q": "Asynchronous counter is also called:",
      "o": [
        "Ripple counter",
        "Parallel adder",
        "Voltage divider",
        "Data selector"
      ],
      "a": 0
    },
    {
      "q": "Synchronous counter flip-flops are driven by:",
      "o": [
        "Common clock",
        "Separate rippled clocks only",
        "DC voltage only",
        "No clock"
      ],
      "a": 0
    },
    {
      "q": "Mod-10 counter has:",
      "o": [
        "10 states",
        "2 states",
        "4 states",
        "16 states only"
      ],
      "a": 0
    },
    {
      "q": "Counters are used in:",
      "o": [
        "Timers, frequency dividers and digital clocks",
        "Rectification only",
        "Power factor correction only",
        "Voltage sensing only"
      ],
      "a": 0
    },
    {
      "q": "Frequency division by a flip-flop toggle output is:",
      "o": [
        "Divide by 2",
        "Multiply by 2",
        "No change",
        "Divide by 10 always"
      ],
      "a": 0
    },
    {
      "q": "Reset input is used to:",
      "o": [
        "Bring counter to known initial state",
        "Increase count randomly",
        "Measure current",
        "Select data input"
      ],
      "a": 0
    }
  ]
};
function quizFor(e){ return QUIZ_BANK[e.slug] || []; }
let qIndex=0, answers=[];
function renderQuiz(){answers=JSON.parse(localStorage.getItem('eeeAnswers_'+getExp().slug)||'[]'); showQ()}
function showQ(){const qz=quizFor(getExp()); const q=qz[qIndex]||qz[0]; if(!q){$('#qText').textContent='Quiz unavailable';return} $('#qCount').textContent=`Question ${qIndex+1} of ${qz.length}`; $('#qText').textContent=q.q; $('#qOptions').innerHTML=q.o.map((o,i)=>`<button class="option ${answers[qIndex]===i?'selected':''}" onclick="selectOption(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join(''); $('#quizProgress').style.width=((qIndex+1)/qz.length*100)+'%'; $('#prevBtn').disabled=qIndex===0; $('#nextBtn').textContent=qIndex===qz.length-1?'Submit Quiz':'Next'}
function selectOption(i){answers[qIndex]=i; localStorage.setItem('eeeAnswers_'+getExp().slug,JSON.stringify(answers)); showQ()}
function prevQ(){if(qIndex>0){qIndex--;showQ()}} function nextQ(){const qz=quizFor(getExp()); if(qIndex<qz.length-1){qIndex++;showQ()} else submitQuiz()}
function submitQuiz(){const qz=quizFor(getExp()); if(answers.length<qz.length||answers.some(a=>a===undefined)){alert('Please answer all questions.');return} const score=answers.reduce((s,a,i)=>s+(a===qz[i].a?1:0),0); const e=getExp(); saveProgress(e.slug,{quizSubmitted:true,score,total:qz.length,completed:true,certificate:true}); $('#quizResult').innerHTML=`<div class="note"><b>Quiz completed.</b> Score: ${score}/${qz.length}. Certificate unlocked.</div>`; updateStatus(); updateProgressCard(); renderCert()}
function updateStatus(){const e=getExp(),p=progress()[e.slug]||{}; $('#statusBox').innerHTML=`<span class="badge ${p.completed?'done':'warn'}">${p.completed?'Completed':'In Progress'}</span>${p.score!==undefined?' <span class="badge">Score '+p.score+'/'+p.total+'</span>':''}`}
function updateProgressCard(){const e=getExp(),p=progress()[e.slug]||{}; const checks=[['Theory',true],['Simulation',!!p.simulationRun],['Observation',!!p.observationSaved],['Quiz',!!p.quizSubmitted]]; const c=checks.filter(x=>x[1]).length; $('#progressCard').innerHTML=`<div class="side-title">Experiment Progress</div><div class="progress-bar"><div class="progress-fill" style="width:${c/checks.length*100}%"></div></div><p><b>${Math.round(c/checks.length*100)}%</b> completed</p>${checks.map(x=>`<p style="margin:6px 0"><span class="badge ${x[1]?'done':''}">${x[1]?'Done':'Pending'}</span> ${x[0]}</p>`).join('')}`}
function renderCert(){const e=getExp(),p=progress()[e.slug]||{},c=$('#certBox'); if(!c)return; c.innerHTML=p.completed?`<div class="certificate"><h2>MIT ADT UNIVERSITY</h2><h3>Certificate of Completion</h3><p>This certifies that <b>${currentUser()?.name||'Student'}</b> has successfully completed</p><h1>${e.title}</h1><p><b>Subject:</b> ${e.subject} Virtual Lab</p><p><b>Score:</b> ${p.score}/${p.total}</p><p><b>Date:</b> ${new Date().toLocaleDateString()}</p><p><b>Certificate ID:</b> ${e.subject}-${e.no}-${Date.now().toString().slice(-6)}</p><button class="btn" onclick="window.print()">Download / Print Certificate</button></div>`:`<div class="note">Certificate unlocks after quiz submission.</div>`}
function renderDashboard(){
  requireLogin();
  const u=currentUser()||{name:'Student',email:'-',enroll:'-'};
  const p=progress();
  const done=EXPERIMENTS.filter(e=>p[e.slug]?.completed);
  const eeeDone=EXPERIMENTS.filter(e=>e.subject==='EEE'&&p[e.slug]?.completed).length;
  const deldDone=EXPERIMENTS.filter(e=>e.subject==='DELD'&&p[e.slug]?.completed).length;
  const avg=done.length?Math.round(done.reduce((s,e)=>s+(p[e.slug].score/p[e.slug].total*100),0)/done.length):0;
  const total=EXPERIMENTS.length;
  const percent=Math.round(done.length/total*100);
  const first=(u.name||'Student').split(' ')[0]||'Student';
  const set=(id,val)=>{const el=document.getElementById(id); if(el) el.textContent=val};
  set('studentName',u.name||'student'); set('welcomeName',first); set('studentEmail',u.email||'-'); set('studentEnroll',u.enroll||'-');
  set('completedCount',`${done.length}/${total}`); set('doneTotal',done.length); set('avgScore',avg+'%'); set('certCount',done.length); set('progressPercent',percent+'%'); set('completedSmall',percent+'% completed');
  set('eeeProgressText',`${eeeDone} / 12 Completed`); set('deldProgressText',`${deldDone} / 12 Completed`); set('eeePercent',Math.round(eeeDone/12*100)+'%'); set('deldPercent',Math.round(deldDone/12*100)+'%');
  const av=document.getElementById('avatar'); if(av) av.textContent=(u.name||'R').trim()[0].toUpperCase();
  const bar=document.getElementById('progressBar'); if(bar) bar.style.width=percent+'%';
  const time=document.getElementById('timeNow'); if(time) time.textContent=new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  const rows=document.getElementById('scoreRows');
  if(rows){
    const recent=EXPERIMENTS.filter(e=>p[e.slug]?.completed).slice(0,6);
    const list=recent.length?recent:EXPERIMENTS.slice(0,6);
    rows.innerHTML=list.map(e=>`<tr><td>${String(e.no).padStart(2,'0')} ${e.title}</td><td><span class="badge ${e.subject==='DELD'?'done':''}">${e.subject}</span></td><td>${p[e.slug]?.score!==undefined?p[e.slug].score+'/'+p[e.slug].total:'-'}</td><td><span class="badge ${p[e.slug]?.completed?'done':''}">${p[e.slug]?.completed?'Completed':'Pending'}</span></td><td><a class="btn ghost" href="experiment.html?exp=${e.slug}">Open</a></td></tr>`).join('');
  }
}
