const timer=document.querySelector("#timer");
const minutoSpan=document.querySelector("#minutos");
const segundoSpan=document.querySelector("#segundos");
const botonesTimers=document.querySelectorAll(".timers");
let segundos=segundoSpan.textContent;
let minutos=minutoSpan.textContent;
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
  
  setInterval(timerWork, 1000); 