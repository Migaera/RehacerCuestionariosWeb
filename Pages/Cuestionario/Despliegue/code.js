const respuestasDespliegue = new Array(2);
for(var i = 0; i < respuestasDespliegue.length; i++){
    respuestasDespliegue[i] = new Array(2)
}
    respuestasDespliegue[1][0]= "Un navegador web";
    respuestasDespliegue[1][1]= "Una red de equipos interconectada";
    respuestasDespliegue[1][2]= "Un tipo de servidor web";
    respuestasDespliegue[1][3]= "Ninguna de las anteriores es correcta";
    respuestasDespliegue[1][4]= "DNS";
    respuestasDespliegue[1][5]= "FTP";
    respuestasDespliegue[1][6]= "HTTP";
    respuestasDespliegue[1][7]= "Ninguna de las anteriores es correcta";
    respuestasDespliegue[1][8]= "80 TCP";
    respuestasDespliegue[1][9]= "80 UDP";
    respuestasDespliegue[1][10]= "8080 TCP";
    respuestasDespliegue[1][11]= "Ninguna de las anteriores";
    respuestasDespliegue[1][12]= "El servidor se reinicia";
    respuestasDespliegue[1][13]= "Se cierra la conexión";
    respuestasDespliegue[1][14]= "El navegador web se bloquea";
    respuestasDespliegue[1][15]= "Ninguna de las anteriores";
    respuestasDespliegue[1][16]= "Un servidor de aplicaciones web";
    respuestasDespliegue[1][17]= "Un lenguaje de marcas de hipertexto basado en etiquetas utilizado para crear páginas web";
    respuestasDespliegue[1][18]= "Un protocolo de red";
    respuestasDespliegue[1][19]= "Ninguna de las anteriores";
    respuestasDespliegue[1][20]= "Bill Gates";
    respuestasDespliegue[1][21]= "Richard Stallman";
    respuestasDespliegue[1][22]= "Tim Berners-Lee";
    respuestasDespliegue[1][23]= "Ninguna de las anteriores";
    respuestasDespliegue[1][24]= "No necesitan acceso a internet";
    respuestasDespliegue[1][25]= "Compatibilidad con cualquier sistema operativo";
    respuestasDespliegue[1][26]= "La instalación en el ordenador ocupa menos espacio";
    respuestasDespliegue[1][27]= "Ninguna de las anteriores";
    respuestasDespliegue[1][28]= "Es un modelo centralizado";
    respuestasDespliegue[1][29]= "Falla si uno de los nodos se cae";
    respuestasDespliegue[1][30]= "Es el más utilizado en la actualidad";
    respuestasDespliegue[1][31]= "Funciona con una topología en malla y todos los nodos hacen de cliente y servidor";
    respuestasDespliegue[1][32]= "Si el servidor se cae los recursos siguen estando disponibles";
    respuestasDespliegue[1][33]= "Si hay un alto número de peticiones simultaneas se podría congestionar el servidor y dejar de estar operativo";
    respuestasDespliegue[1][34]= "El mantenimiento es más complicado que en el modelo P2P";
    respuestasDespliegue[1][35]= "Todas son correctas";
    respuestasDespliegue[1][36]= "Los clientes se comunican directamente con la BBDD";
    respuestasDespliegue[1][37]= "El servidor web se comunicará con la base de datos";
    respuestasDespliegue[1][38]= "Es necesario tener tantos servidores web como bases de datos.";
    respuestasDespliegue[1][39]= "Ninguna es correcta";

const preguntasDespliegue = new Array(2)
for(var i = 0; i < preguntasDespliegue.length; i++){
    preguntasDespliegue[i] = new Array(2)
}
    preguntasDespliegue[1][0] = "¿Qué es la World Wide Web?";
    preguntasDespliegue[1][1] = "¿Qué nuevo protocolo permitió la expansión de los servicios web?:";
    preguntasDespliegue[1][2] = "Una¿Qué puerto utiliza el protocolo HTTP?";
    preguntasDespliegue[1][3] = "Cuando el servidor web ha terminado de enviar los datos al cliente…";
    preguntasDespliegue[1][4] = "HTML es…";
    preguntasDespliegue[1][5] = "El fundador del consorcio de la WWW (3WC) fue…";
    preguntasDespliegue[1][6] = "¿Qué ventajas aportan las aplicaciones web respecto a las aplicaciones de escritorio?";
    preguntasDespliegue[1][7] = "El modelo P2P…";
    preguntasDespliegue[1][8] = "En el modelo cliente-servidor…";
    preguntasDespliegue[1][9] = "El modelo de tres capas…";


const respuestasCorrectasDespliegue = new Array(2)
var intCorrectas = []
var intRespuestas = []
for(var i = 0; i < respuestasCorrectasDespliegue.length; i++){
    respuestasCorrectasDespliegue[i] = new Array(2)
}
    respuestasCorrectasDespliegue[1][0]= "Una red de equipos interconectada";
    respuestasCorrectasDespliegue[1][1]= "HTTP";
    respuestasCorrectasDespliegue[1][2]= "80 TCP";
    respuestasCorrectasDespliegue[1][3]= "Se cierra la conexión";
    respuestasCorrectasDespliegue[1][4]= "Un lenguaje de marcas de hipertexto basado en etiquetas utilizado para crear páginas web";
    respuestasCorrectasDespliegue[1][5]= "Tim Berners-Lee";
    respuestasCorrectasDespliegue[1][6]= "Compatibilidad con cualquier sistema operativo";
    respuestasCorrectasDespliegue[1][7]= "Funciona con una topología en malla y todos los nodos hacen de cliente y servidor";
    respuestasCorrectasDespliegue[1][8]= "Si hay un alto número de peticiones simultaneas se podría congestionar el servidor y dejar de estar operativo";
    respuestasCorrectasDespliegue[1][9]= "El servidor web se comunicará con la base de datos";

var tema = 1;

addEventListener("load",function Start(){
    for(var i = 0; i < 10; i++){
        document.getElementsByClassName("titlePregunta")[i].innerHTML = preguntasDespliegue[tema][i];
        
    }
    for(var i = 2; i < 42; i++){
        document.getElementsByTagName("label")[i].firstElementChild.innerHTML = respuestasDespliegue[tema][i-2];
        
    }
    
    var aux = 2;
    for(var i = 2; i < 12; i++){
        for(var j = aux; j < 4+aux; j++){
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasCorrectasDespliegue[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasCorrectasDespliegue[tema][i-2])

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