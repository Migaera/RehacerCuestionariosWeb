var oscuro = false;

var colorOscuro = 373737;
var colorClaro = 'ECECEC';

function cambiarColor(){
    oscuro = !oscuro
    if(oscuro){
        document.getElementById("cambiarColor").style.backgroundColor = '#' + colorOscuro;
        document.getElementsByTagName("body")[0].style.backgroundColor = '#' + colorClaro;
    }else{
        document.getElementById("cambiarColor").style.backgroundColor = '#' + colorClaro;
        document.getElementsByTagName("body")[0].style.backgroundColor = '#' + colorOscuro;
    }

}