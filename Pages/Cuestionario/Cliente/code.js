const respuestasCliente = new Array(2);
for(var i = 0; i < respuestasCliente.length; i++){
    respuestasCliente[i] = new Array(2)
}
    respuestasCliente[1][0]= "Forma parte del nivel de red";
    respuestasCliente[1][1]= "Forma parte del nivel de aplicación";
    respuestasCliente[1][2]= "Es más seguro que SSL.";
    respuestasCliente[1][3]= "Ninguna de las anteriores es correcta";
    respuestasCliente[1][4]= "Solo se puede utilizar una capa";
    respuestasCliente[1][5]= "La capa de datos debe estar ligada a la de procesamiento";
    respuestasCliente[1][6]= "Puede requerir máquinas con altas especificaciones hardware";
    respuestasCliente[1][7]= "Ninguna de las anteriores es correcta";
    respuestasCliente[1][8]= "Permite definir una dirección de una página web";
    respuestasCliente[1][9]= "Identifica a un recurso web inequívocamente";
    respuestasCliente[1][10]= "No se puede utilizar con HTTP";
    respuestasCliente[1][11]= "Solo está permitida en SSH";
    respuestasCliente[1][12]= "Permite que el servidor envíe peticiones al cliente";
    respuestasCliente[1][13]= "Se basa en la resolución de peticiones en el cliente";
    respuestasCliente[1][14]= "Se centra en el envío de peticiones del cliente";
    respuestasCliente[1][15]= "No se puede utilizar en contextos web";
    respuestasCliente[1][16]= "Se introduce una capa de seguridad adicional a HTTP";
    respuestasCliente[1][17]= "Se utiliza una pila de protocolos totalmente diferente a HTTP";
    respuestasCliente[1][18]= "Nos apoyamos en SSH";
    respuestasCliente[1][19]= "Ninguna de las anteriores es correcta";
    respuestasCliente[1][20]= "El front-end se refiere al servidor";
    respuestasCliente[1][21]= "El front-end se refiere al cliente";
    respuestasCliente[1][22]= "El back-end se refiere al cliente";
    respuestasCliente[1][23]= "El cliente realiza tareas pesadas";
    respuestasCliente[1][24]= "Es una URL resumida";
    respuestasCliente[1][25]= "Permite indicar una dirección web";
    respuestasCliente[1][26]= "Identifica a un recurso en la red sin ninguna duda";
    respuestasCliente[1][27]= "Se utiliza solamente en SSH";
    respuestasCliente[1][28]= "Nos referimos al protocolo FTP";
    respuestasCliente[1][29]= "Hablamos del protocolo SSH";
    respuestasCliente[1][30]= "Se refiere a la utilización de URIs";
    respuestasCliente[1][31]= "Ninguna de las anteriores es correcta";
    respuestasCliente[1][32]= "Se encarga de la comunicación entre el emisor y receptor";
    respuestasCliente[1][33]= "Se apoya en el nivel de transporte";
    respuestasCliente[1][34]= "Incluye el protocolo IP";
    respuestasCliente[1][35]= "Ninguna de las anteriores es correcta";
    respuestasCliente[1][36]= "Especialmente para el intercambio de archivos";
    respuestasCliente[1][37]= "Para conectar de forma segura a la web";
    respuestasCliente[1][38]= "Para gestionar una máquina remota";
    respuestasCliente[1][39]= "Para dar soporte a HTTPs";

const preguntasCliente = new Array(2)
for(var i = 0; i < preguntasCliente.length; i++){
    preguntasCliente[i] = new Array(2)
}
    preguntasCliente[1][0] = "El protocolo HTTP…"
    preguntasCliente[1][1] = "En la arquitectura cliente/servidor…"
    preguntasCliente[1][2] = "Una URL…"
    preguntasCliente[1][3] = "La arquitectura cliente/servidor…"
    preguntasCliente[1][4] = "Al utilizar HTTPS…"
    preguntasCliente[1][5] = "En una arquitectura cliente/servidor…"
    preguntasCliente[1][6] = "Una URI…"
    preguntasCliente[1][7] = "Al realizar una petición GET…"
    preguntasCliente[1][8] = "El nivel de red…"
    preguntasCliente[1][9] = "SSH se utiliza…"


const respuestasCorrectasCliente = new Array(2)
var intCorrectas = []
var intRespuestas = []
for(var i = 0; i < respuestasCorrectasCliente.length; i++){
    respuestasCorrectasCliente[i] = new Array(2)
}
    respuestasCorrectasCliente[1][0]= "Forma parte del nivel de aplicación";
    respuestasCorrectasCliente[1][1]= "Puede requerir máquinas con altas especificaciones hardware";
    respuestasCorrectasCliente[1][2]= "Permite definir una dirección de una página web";
    respuestasCorrectasCliente[1][3]= "Se centra en el envío de peticiones del cliente";
    respuestasCorrectasCliente[1][4]= "Se introduce una capa de seguridad adicional a HTTP";
    respuestasCorrectasCliente[1][5]= "El front-end se refiere al cliente";
    respuestasCorrectasCliente[1][6]= "Identifica a un recurso en la red sin ninguna duda";
    respuestasCorrectasCliente[1][7]= "Ninguna de las anteriores es correcta";
    respuestasCorrectasCliente[1][8]= "Incluye el protocolo IP";
    respuestasCorrectasCliente[1][9]= "Para gestionar una máquina remota";

var tema = 1;

addEventListener("load",function Start(){
    for(var i = 0; i < 10; i++){
        document.getElementsByClassName("titlePregunta")[i].innerHTML = preguntasCliente[tema][i];
        
    }
    for(var i = 2; i < 42; i++){
        document.getElementsByTagName("label")[i].firstElementChild.innerHTML = respuestasCliente[tema][i-2];
        
    }
    
    var aux = 2;
    for(var i = 2; i < 12; i++){
        for(var j = aux; j < 4+aux; j++){
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasCorrectasCliente[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasCorrectasCliente[tema][i-2])

        }

        aux+=4
        
    }
    
})

function Select(a,b){
    intRespuestas[a] = b
    console.log(a + "-" + intRespuestas[a] + "," + intCorrectas[a])
}

function Finalizar(){
    document.getElementById('btnContainerFlotante').style.display = 'flex'
    var nota = 0;
    for(var i = 0; i < 10;i++){
        
        if(intRespuestas[i] == intCorrectas[i]){
            nota++;
        }
    }
    document.getElementById("nota").innerHTML = "<p>" + nota + "</p>"
    document.getElementById('btnBuscar').value = 'Mostrar';
}