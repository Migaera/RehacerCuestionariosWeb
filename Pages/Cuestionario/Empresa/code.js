const respuestasEmpresa = new Array(2);
for(var i = 0; i < respuestasEmpresa.length; i++){
    respuestasEmpresa[i] = new Array(2)
}
    respuestasEmpresa[1][0]= "Idea de negocio";
    respuestasEmpresa[1][1]= "Cultura emprendedora";
    respuestasEmpresa[1][2]= "Innovación";
    respuestasEmpresa[1][3]= "Ninguna de las anteriores es correcta";
    respuestasEmpresa[1][4]= "Riqueza de un país";
    respuestasEmpresa[1][5]= "Fomento del desarrollo sostenible";
    respuestasEmpresa[1][6]= "Creación de empleo";
    respuestasEmpresa[1][7]= "Todas las anteriores son correctas";
    respuestasEmpresa[1][8]= "Innovación de producto";
    respuestasEmpresa[1][9]= "Innovación de marketing";
    respuestasEmpresa[1][10]= "Innovación de procesos";
    respuestasEmpresa[1][11]= "Innovación organizacional";
    respuestasEmpresa[1][12]= "Innovación de producto";
    respuestasEmpresa[1][13]= "Innovación de marketing";
    respuestasEmpresa[1][14]= "Innovación social";
    respuestasEmpresa[1][15]= "Innovación organizacional";
    respuestasEmpresa[1][16]= "Debe ser lo más abstracta posible y poco cercana a la realidad";
    respuestasEmpresa[1][17]= "Debe ser rentable";
    respuestasEmpresa[1][18]= "Debe de satisfacer necesidades de la población";
    respuestasEmpresa[1][19]= "Debe de tener algún valor añadido";
    respuestasEmpresa[1][20]= "Observación del entorno";
    respuestasEmpresa[1][21]= "Darle un uso nuevo a un producto";
    respuestasEmpresa[1][22]= "Identificar un segmento de mercado atractivo";
    respuestasEmpresa[1][23]= "Todas las anteriores son correctas";
    respuestasEmpresa[1][24]= "No tiene por qué plasmarse en ningún documento, lo importante es la idea";
    respuestasEmpresa[1][25]= "Es importante trasladarla a un documento tanto para nosotros como para posibles inversores";
    respuestasEmpresa[1][26]= "Es algo opcional cuando queremos emprender";
    respuestasEmpresa[1][27]= "Ninguna de las anteriores respuestas es correcta";
    respuestasEmpresa[1][28]= "Un lienzo de propuesta de valor";
    respuestasEmpresa[1][29]= "Un mapa conceptual";
    respuestasEmpresa[1][30]= "Una forma de hacer una lista de ventajas e inconvenientes";
    respuestasEmpresa[1][31]= "Una aplicación para hacer diseño gráfico";
    respuestasEmpresa[1][32]= "La investigación comercial no siempre es útil";
    respuestasEmpresa[1][33]= "Sólo vamos a poder encontrar información sobre lo que estamos investigando";
    respuestasEmpresa[1][34]= "Reduce los fracasos";
    respuestasEmpresa[1][35]= "Todas las anteriores son correctas";
    respuestasEmpresa[1][36]= "Reunión de grupo";
    respuestasEmpresa[1][37]= "Pseudocompra";
    respuestasEmpresa[1][38]= "Encuesta";
    respuestasEmpresa[1][39]= "Todas las anteriores son correctas";

const preguntasEmpresa = new Array(2)
for(var i = 0; i < preguntasEmpresa.length; i++){
    preguntasEmpresa[i] = new Array(2)
}
    preguntasEmpresa[1][0] = "El conjunto de valores y actitudes que tiene una persona para mejorar un proyecto profesional, personal o social se denomina:";
    preguntasEmpresa[1][1] = "Son aspectos que se ven beneficiados por la cultura emprendedora:";
    preguntasEmpresa[1][2] = "Introducir nuevas formas de promocionar un producto se denomina:";
    preguntasEmpresa[1][3] = "Es introducir mejoras para conseguir el bienestar de una sociedad";
    preguntasEmpresa[1][4] = "Es una afirmación incorrecta sobre la idea de negocio:";
    preguntasEmpresa[1][5] = "Es una técnica para crear una idea de negocio:";
    preguntasEmpresa[1][6] = "Una idea de negocio:";
    preguntasEmpresa[1][7] = "El modelo Canvas es:";
    preguntasEmpresa[1][8] = "Es una afirmación correcta en relación a la investigación comercial";
    preguntasEmpresa[1][9] = "Es un tipo de investigación comercial cuantitativo";


const respuestasCorrectasEmpresa = new Array(2)
var intCorrectas = []
var intRespuestas = []
for(var i = 0; i < respuestasCorrectasEmpresa.length; i++){
    respuestasCorrectasEmpresa[i] = new Array(2)
}
    respuestasCorrectasEmpresa[1][0]= "Cultura emprendedora";
    respuestasCorrectasEmpresa[1][1]= "Todas las anteriores son correctas";
    respuestasCorrectasEmpresa[1][2]= "Innovación de marketing";
    respuestasCorrectasEmpresa[1][3]= "Innovación social";
    respuestasCorrectasEmpresa[1][4]= "Debe ser lo más abstracta posible y poco cercana a la realidad";
    respuestasCorrectasEmpresa[1][5]= "Todas las anteriores son correctas";
    respuestasCorrectasEmpresa[1][6]= "Es importante trasladarla a un documento tanto para nosotros como para posibles inversores";
    respuestasCorrectasEmpresa[1][7]= "Un lienzo de propuesta de valor";
    respuestasCorrectasEmpresa[1][8]= "Reduce los fracasos";
    respuestasCorrectasEmpresa[1][9]= "Encuesta";

var tema = 1;

addEventListener("load",function Start(){
    for(var i = 0; i < 10; i++){
        document.getElementsByClassName("titlePregunta")[i].innerHTML = preguntasEmpresa[tema][i];
        
    }
    for(var i = 2; i < 42; i++){
        document.getElementsByTagName("label")[i].firstElementChild.innerHTML = respuestasEmpresa[tema][i-2];
        
    }
    
    var aux = 2;
    for(var i = 2; i < 12; i++){
        for(var j = aux; j < 4+aux; j++){
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasCorrectasEmpresa[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasCorrectasEmpresa[tema][i-2])

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