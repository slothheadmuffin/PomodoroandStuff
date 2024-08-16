//const de elementos
const body=document.querySelector("body");
const main=document.querySelector("main");
const inputGeneral=document.querySelectorAll("input");
//const de divs
const configure=document.querySelector("#configuration");
const contadorDiv=document.querySelector("#contadorDiv");
const timer=document.querySelector("#timer");
const botonesTimers=document.querySelector("#botonesTimers");
const cambiarTrabajo=document.querySelector("#cambiarTrabajo");
//const de botones
const skip=document.querySelector("#skip");
const btnConfigure=document.querySelector("#btnConfiguration");
const play=document.querySelector("#play");
const settingsSubmit=document.querySelector("#settingSubmit");
//const de texto
const contador=document.querySelector("#contador");
const acti=document.querySelector("#acti");
const minutoSpan=document.querySelector("#minutos");
const segundoSpan=document.querySelector("#segundos");
//const otros
const alarma=document.querySelector("#alarma");
const timerMenu=document.querySelector("#timerMenu");

let workMinutes=25;
let descansoCortoMinutes=5;
let descansoLargoMinutes=15;
let workSeconds=0;
let descansoCortoSeconds=0;
let descansoLargoSeconds=0;
let segundos=segundoSpan.textContent;
let minutos=minutoSpan.textContent;
let finalTimer="00:00";
let nose;
let contar=1;
let inputText='';
body.style.background="rgba(183, 23, 23, 0.925)";
alarma.volume=0.2;

//Event listeners
botonesTimers.addEventListener("click",(e)=>{
    pauseTimer();
    switch (e.target.id){
        case 'work':
                work();
            break;
        case 'descansoCorto':
                shortBreak();
            break;
        case 'descansoLargo':
                longBreak();
            break;
    }
    timeSet();
})

play.addEventListener("click",(e)=>{
    if (play.textContent==='Play'){
        timerWork(5,0);
        play.textContent='Pause'; 
    }
    else{
        pauseTimer();
    }
})

contador.addEventListener("click",(e)=>{
    contar=1;
    contador.textContent=contar;
})

skip.addEventListener("click",(e)=>{
    cambioTimer();
    pauseTimer();
})

btnConfigure.addEventListener("click",(e)=>{
    if (configure.style.display=="block"){
        configure.style.display="none";
    }
    else{
        configure.style.display="block";
    }
})

cambiarTrabajo.addEventListener("keyup",(e)=>{
    inputText=e.target.value;
   
    if (inputText>999){
        inputText=999;
        e.target.value=inputText;
    }
    if (timerMenu.value=="minutes"){
        if (e.target.id=='inputActividad'){workMinutes=inputText;}
        else if(e.target.id=='inputDescansoCorto'){descansoCortoMinutes=inputText;}
        else if(e.target.id=='inputDescansoLargo'){descansoLargoMinutes=inputText;}
    }
    else {
        if (e.target.id=='inputActividad'){workSeconds=inputText;}
        else if(e.target.id=='inputDescansoCorto'){descansoCortoSeconds=inputText;}
        else if(e.target.id=='inputDescansoLargo'){descansoLargoSeconds=inputText;}
    }    
})

settingsSubmit.addEventListener("click",(e)=>{
    if (body.style.background=="rgba(183, 23, 23, 0.925)"){//color rojo
        work();
    }
    else if (body.style.background=="rgb(23, 215, 198)"){
        shortBreak();
    }
    else{longBreak();}
   
})
//Funciones
function timerWork() {
    if (segundos==0){
        if (minutos==0){            
            alarma.play();
            //Si esta en rojo cambia a azul
            cambioTimer();
            return;
        }
        else if (minutos !=0){
            segundos=60;
            minutos--;
        }
    }
   
    segundos--;
    timer.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    nose=setTimeout(function(){timerWork(minutos, segundos)}, 1000);
}
 
function pauseTimer() {
    finalTimer = timer.textContent;
    clearTimeout(nose);
    play.textContent='Play'; 
}

function work(){
    minutoSpan.textContent=workMinutes;
    segundoSpan.textContent=workSeconds;
    timeSet();
    body.style.background="rgba(183, 23, 23, 0.925)";
}

function shortBreak(){
    minutoSpan.textContent=descansoCortoMinutes;
    segundoSpan.textContent=descansoCortoSeconds;
    timeSet();
    body.style.background="#17D7C6";
}

function longBreak(){
    minutoSpan.textContent=descansoLargoMinutes;
    segundoSpan.textContent=descansoLargoSeconds;
    timeSet();
    body.style.background="#17A3D7";
}

function timeSet(){
    minutos=minutoSpan.textContent;
    segundos=segundoSpan.textContent;
    timer.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
   
}

function cambioTimer(){
    if (body.style.background=="rgba(183, 23, 23, 0.925)"){//color rojo
        if (contar%4===0){
            longBreak();
        }
        else{shortBreak();}
    }
    else{
        contar++;
        contador.textContent=contar;
        work();
    }
    play.textContent='Play';
}
