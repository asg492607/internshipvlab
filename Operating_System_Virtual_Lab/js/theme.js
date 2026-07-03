const toggle = document.getElementById("themeToggle");

if(toggle){

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light-mode");

toggle.innerHTML="☀️ Light";

}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

localStorage.setItem("theme","light");

toggle.innerHTML="☀️ Light";

}
else{

localStorage.setItem("theme","dark");

toggle.innerHTML="🌙 Dark";

}

});

}