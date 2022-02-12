// let rec;
//     if(!("webkitSpeechRecognition" in window)) {
//         alert("No podes usar la api pa cambiate a movistar");
//     }else {
//         rec = new webkitSpeechRecognition();
//         rec.lang = "es-AR";
//         rec.continuous = true;
//         rec.interim = true;
//         rec.addEventListener("result",iniciar);
//     }
// function iniciar(event){
//     for (i = event.resultIndex;i < event.results.length; i++){
//         document.getElementById("texto").innerHTML = event.results[i][0].transcript;
//     }
// }
// rec.start();
document.querySelector(`.dark-toggler`).addEventListener(`click`,()=>{
    document.body.classList.toggle(`body-active`)
})