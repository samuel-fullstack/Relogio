
function puxaHora() {

    let currentDay = new  Date();
    let horas = currentDay.getHours();
    let minutos = currentDay.getMinutes();
    let segundos = currentDay.getSeconds();


    if(segundos < 10){

        segundos=`0${segundos}`

    }
    if(minutos < 10){

        minutos=`0${minutos}`

    }
    if(horas < 10){

        horas =`0${horas}`

    }
   
    document.getElementById('hora').innerHTML =`${horas} : ${minutos} : ${segundos}` 
    
}

let timerHoroa = setInterval(puxaHora, 1000);
