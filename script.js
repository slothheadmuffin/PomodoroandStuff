const timer=document.querySelector("#timer");
const minutoSpan=document.querySelector("#minutos");
const segundoSpan=document.querySelector("#segundos");
const play=document.querySelector("#play");
const botonesTimers=document.querySelector("#botonesTimers");
const body=document.querySelector("body");

let segundos=segundoSpan.textContent;
let minutos=minutoSpan.textContent;
let finalTimer="00:00";
let nose;


//Event listeners
botonesTimers.addEventListener("click",(e)=>{
    pauseTimer();
    switch (e.target.id){
        case 'work':
            minutoSpan.textContent='25';
            segundoSpan.textContent='00';
            body.style.background="#b71717ec";
            break;
        case 'descansoCorto':
            minutoSpan.textContent='05';
            segundoSpan.textContent='00';
            body.style.background="#3DD3F1";
            break;
        case 'descansoLargo':
            minutoSpan.textContent='15';
            segundoSpan.textContent='00';
            body.style.background="#3DD3F1";
            
            break;
    }
    minutos=minutoSpan.textContent;
    segundos=segundoSpan.textContent;
    timer.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    play.textContent='Play'; 
})

play.addEventListener("click",(e)=>{
    if (play.textContent==='Play'){
        //timer.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
        timerWork(5,0);
        play.textContent='Pause'; 
    }
    else{
        pauseTimer();
        play.textContent='Play'; 
    }
})


//Funciones
function timerWork() {
    if (segundos==0){
        if (minutos==0){
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

