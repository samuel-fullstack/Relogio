
function puxaHora() {

    let currentDay = new  Date();
    let horas = currentDay.getHours();
    let minutos = currentDay.getMinutes();
    let segundos = currentDay.getSeconds();

   
    document.getElementById('hora').innerHTML =`${horas} : ${minutos} : ${segundos}` 
    
}

let timerHoroa = setInterval(puxaHora, 1000);
