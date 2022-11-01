const respuestasServidor = new Array(2);
for(var i = 0; i < respuestasServidor.length; i++){
    respuestasServidor[i] = new Array(2)
}
    respuestasServidor[1][0]= "Se modela la petición HTTP que se envía al servidor";
    respuestasServidor[1][1]= "El servidor realiza una búsqueda del recurso solicitado";
    respuestasServidor[1][2]= "Se introduce una url en el navegador, del servicio o página que se desea visitar";
    respuestasServidor[1][3]= "Se accede al cmd";
    respuestasServidor[1][4]= "Estáticas";
    respuestasServidor[1][5]= "HTML";
    respuestasServidor[1][6]= "Dinámicas";
    respuestasServidor[1][7]= "Ninguna de las anteriores";
    respuestasServidor[1][8]= "En ningún tipo de capa";
    respuestasServidor[1][9]= "Capa o nivel de cliente ";
    respuestasServidor[1][10]= "Capa intermedia";
    respuestasServidor[1][11]= "Capa de acceso a datos";
    respuestasServidor[1][12]= "Permiten ser embebidos con el código HTML";
    respuestasServidor[1][13]= "No existen";
    respuestasServidor[1][14]= "Se utilizan para la programación orientada a objetos";
    respuestasServidor[1][15]= "Permiten el desarrollo de interfaces en dispositivo Android";
    respuestasServidor[1][16]= "GET y SET";
    respuestasServidor[1][17]= "POST Y GET";
    respuestasServidor[1][18]= "GET";
    respuestasServidor[1][19]= "POST";
    respuestasServidor[1][20]= "Java";
    respuestasServidor[1][21]= "JavaScript";
    respuestasServidor[1][22]= "PHP";
    respuestasServidor[1][23]= "Ninguna de las anteriores";
    respuestasServidor[1][24]= "Node.js ";
    respuestasServidor[1][25]= "TypeScript";
    respuestasServidor[1][26]= "XAMPP";
    respuestasServidor[1][27]= "Text Wrangler";
    respuestasServidor[1][28]= "-g typescript ";
    respuestasServidor[1][29]= "npm --install ";
    respuestasServidor[1][30]= "npm --install  -g typescript";
    respuestasServidor[1][31]= "RespNinguna de las anterioresuesta";
    respuestasServidor[1][32]= "Los ficheros .php se sitúan dentro de htdocs";
    respuestasServidor[1][33]= "Las etiquetas utilizadas para embeber el código php son <?php y php?>";
    respuestasServidor[1][34]= "PHP no es soportado como XAMPP";
    respuestasServidor[1][35]= "Todas son incorrectas";
    respuestasServidor[1][36]= "Esto es imposible";
    respuestasServidor[1][37]= "NodeXAMPP";
    respuestasServidor[1][38]= "Typescript";
    respuestasServidor[1][39]= "Node.js";

const preguntasServidor = new Array(2)
for(var i = 0; i < preguntasServidor.length; i++){
    preguntasServidor[i] = new Array(2)
}
    preguntasServidor[1][0] = "¿Qué acción es la primera en llevarse a cabo independientemente de si estamos en una página web estática o dinámica?";
    preguntasServidor[1][1] = "¿Qué tipo de páginas muestran un contenido distinto en función de los valores de la petición?";
    preguntasServidor[1][2] = "¿En cuál de las siguientes capas se ubica la funcionalidad de la aplicación?";
    preguntasServidor[1][3] = "Los lenguajes scripting…";
    preguntasServidor[1][4] = "¿Qué verbos utiliza el método HTTP?";
    preguntasServidor[1][5] = "La arquitecta Node.js ¿qué lenguaje permite utilizar para el desarrollo del lado servidor?";
    preguntasServidor[1][6] = "¿Qué tecnología permite incorporar al desarrollo de JavaScript funcionalidades para la detección de errores antes de ser visualizado en el navegador?";
    preguntasServidor[1][7] = "¿Cómo se puede instalar Typescript a través de línea de comandos?";
    preguntasServidor[1][8] = "Selecciona la respuesta correcta sobre la implementación de una página básica utilizando php con XAMPP";
    preguntasServidor[1][9] = "¿ Qué tecnología permite el desarrollo de aplicaciones en el lado del servidor?";


const respuestasCorrectasServidor = new Array(2)
var intCorrectas = []
var intRespuestas = []
for(var i = 0; i < respuestasCorrectasServidor.length; i++){
    respuestasCorrectasServidor[i] = new Array(2)
}
    respuestasCorrectasServidor[1][0]= "Se introduce una url en el navegador, del servicio o página que se desea visitar";
    respuestasCorrectasServidor[1][1]= "Dinámicas";
    respuestasCorrectasServidor[1][2]= "Capa intermedia";
    respuestasCorrectasServidor[1][3]= "Permiten ser embebidos con el código HTML";
    respuestasCorrectasServidor[1][4]= "POST Y GET";
    respuestasCorrectasServidor[1][5]= "JavaScript";
    respuestasCorrectasServidor[1][6]= "TypeScript";
    respuestasCorrectasServidor[1][7]= "Ninguna de las anteriores";
    respuestasCorrectasServidor[1][8]= "Los ficheros .php se sitúan dentro de htdocs";
    respuestasCorrectasServidor[1][9]= "Node.js";

var tema = 1;

addEventListener("load",function Start(){
    for(var i = 0; i < 10; i++){
        document.getElementsByClassName("titlePregunta")[i].innerHTML = preguntasServidor[tema][i];
        
    }
    for(var i = 2; i < 42; i++){
        document.getElementsByTagName("label")[i].firstElementChild.innerHTML = respuestasServidor[tema][i-2];
        
    }
    
    var aux = 2;
    for(var i = 2; i < 12; i++){
        for(var j = aux; j < 4+aux; j++){
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasCorrectasServidor[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasCorrectasServidor[tema][i-2])

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