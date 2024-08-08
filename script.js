const timer=document.querySelector("#timer");
const minutoSpan=document.querySelector("#minutos");
const segundoSpan=document.querySelector("#segundos");
const play=document.querySelector("#play");
const botonesTimers=document.querySelector("#botonesTimers");
let segundos=segundoSpan.textContent;
let minutos=minutoSpan.textContent;

botonesTimers.addEventListener("click",(e)=>{
    switch (e.target.id){
        case 'work':
            minutoSpan.textContent='25';
            break;
        case 'descansoCorto':
            minutoSpan.textContent='05';
            break;
        case 'descansoLargo':
            minutoSpan.textContent='15';
            break;
    }
})

play.addEventListener("click",(e)=>{
    setInterval(timerWork, 1000); 
})

function timerWork() {
    
    if (segundos==0){
        segundos=60;
        minutos--;
    }
   
    if (minutos=='00'){
        minutos=5;
    }
    segundos--;
    const segundosRestantes = segundos % 60;
    timer.textContent = `${minutos.toString().padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;
  }
 