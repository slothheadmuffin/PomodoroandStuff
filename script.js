const timer=document.querySelector("#timer");
const minutoSpan=document.querySelector("#minutos");
const segundoSpan=document.querySelector("#segundos");
const play=document.querySelector("#play");
const botonesTimers=document.querySelector("#botonesTimers");
const body=document.querySelector("body");
const contador=document.querySelector("#contador")
const acti=document.querySelector("#acti");
const contadorDiv=document.querySelector("#contadorDiv");
const alarma=document.querySelector("#alarma");

let segundos=segundoSpan.textContent;
let minutos=minutoSpan.textContent;
let finalTimer="00:00";
let nose;
let contar=contador.textContent;


body.style.background="rgba(183, 23, 23, 0.925)";
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
    cambioTimer();
    play.textContent='Play'; 
})

play.addEventListener("click",(e)=>{
    if (play.textContent==='Play'){
        timerWork(5,0);
        play.textContent='Pause'; 
    }
    else{
        pauseTimer();
        play.textContent='Play'; 
    }
})

contadorDiv.addEventListener("click",(e)=>{
    contar=1;
    contador.textContent=contar;
})

//Funciones
function timerWork() {
    if (segundos==0){
        if (minutos==0){
            alarma.play();
            setTimeout(3000);
            //Si esta en rojo cambia a azul
            if (body.style.background=="rgba(183, 23, 23, 0.925)"){
                if (contar%4===0){
                    longBreak();
                }
                else{shortBreak();}
            }
            else{
                contar++;
                work();
                contador.textContent=contar;
                
            }
            play.textContent='Play';
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
}

function work(){
    minutoSpan.textContent='00';
    segundoSpan.textContent='09';
    cambioTimer();
    body.style.background="rgba(183, 23, 23, 0.925)";
}

function shortBreak(){
    minutoSpan.textContent='00';
    segundoSpan.textContent='08';
    cambioTimer();
    body.style.background="#17A3D7";
}

function longBreak(){
    minutoSpan.textContent='00';
    segundoSpan.textContent='07';
    cambioTimer();
    body.style.background="#17A3D7";
}

function cambioTimer(){
    minutos=minutoSpan.textContent;
    segundos=segundoSpan.textContent;
    timer.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
   
}