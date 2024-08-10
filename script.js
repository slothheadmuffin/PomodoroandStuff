const timer=document.querySelector("#timer");
const minutoSpan=document.querySelector("#minutos");
const segundoSpan=document.querySelector("#segundos");
const play=document.querySelector("#play");
const botonesTimers=document.querySelector("#botonesTimers");

let segundos=segundoSpan.textContent;
let minutos=minutoSpan.textContent;
let finalTimer="00:00";
let nose;

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
    if (play.textContent==='Play'){
        timerWork(5,0);
        play.textContent='Pause'; 
    }
    else{
        pauseTimer();
        play.textContent='Play'; 
    }
})

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
    //const segundosRestantes = segundos % 60;
    timer.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
    nose=setTimeout(function(){timerWork(minutos, segundos)}, 1000);
    /*setTimeout(function () {
        startTimer(m, s)
    }, 1000); */
  }
 
  function pauseTimer() {
    finalTimer = timer.textContent;
    clearTimeout(nose);
}

