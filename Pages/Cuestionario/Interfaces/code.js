const respuestasInterfaces = new Array(2);
for(var i = 0; i < respuestasInterfaces.length; i++){
    respuestasInterfaces[i] = new Array(2)
}
    respuestasInterfaces[1][0]= "Cabecera";
    respuestasInterfaces[1][1]= "Sistema de navegación";
    respuestasInterfaces[1][2]= "Pie de página";
    respuestasInterfaces[1][3]= "Todos son convenientes, aunque no obligatorios, en función del diseño del sitio";
    respuestasInterfaces[1][4]= " Área común (cabecera, pie, etc) ";
    respuestasInterfaces[1][5]= "Parte de contenido";
    respuestasInterfaces[1][6]= "Solo el pie o footer";
    respuestasInterfaces[1][7]= "A y b son correctas ";
    respuestasInterfaces[1][8]= "El color rojo que participa en la combinación toma el valor 255 en decimal ";
    respuestasInterfaces[1][9]= "El color verde que participa en la combinación toma el valor 1111 0000 en binario";
    respuestasInterfaces[1][10]= " El color azul que participa en la combinación toma el valor 255 en decimal ";
    respuestasInterfaces[1][11]= "Ninguna es correcta ";
    respuestasInterfaces[1][12]= "Brillo";
    respuestasInterfaces[1][13]= "Saturación";
    respuestasInterfaces[1][14]= "Matiz";
    respuestasInterfaces[1][15]= "Color seguro";
    respuestasInterfaces[1][16]= "Colores que se representan de la misma forma en cualquier navegador o dispositivo";
    respuestasInterfaces[1][17]= "Los diferentes matices de cada uno de los colores primarios";
    respuestasInterfaces[1][18]= "Colores complementarios";
    respuestasInterfaces[1][19]= "Colores sintéticos";
    respuestasInterfaces[1][20]= "#66 33 FF ";
    respuestasInterfaces[1][21]= " #99 CC CC ";
    respuestasInterfaces[1][22]= "#CC C3 FF ";
    respuestasInterfaces[1][23]= " Todos son colores seguros ";
    respuestasInterfaces[1][24]= "Se trata de una acción trivial, sin importancia";
    respuestasInterfaces[1][25]= "Una selección adecuada es muy importante, puesto que puede condicionar la experiencia de navegación del usuario, así como aportar una imagen propia e identificativa del sitio";
    respuestasInterfaces[1][26]= "Solo es importante en el diseño de la cabecera";
    respuestasInterfaces[1][27]= "Ninguna es correcta";
    respuestasInterfaces[1][28]= "RGB";
    respuestasInterfaces[1][29]= "True Color";
    respuestasInterfaces[1][30]= "Color Type";
    respuestasInterfaces[1][31]= "Colores seguros";
    respuestasInterfaces[1][32]= "Textura";
    respuestasInterfaces[1][33]= "Relación";
    respuestasInterfaces[1][34]= "Representación";
    respuestasInterfaces[1][35]= "Significado";
    respuestasInterfaces[1][36]= "Representación";
    respuestasInterfaces[1][37]= "Textura";
    respuestasInterfaces[1][38]= "Significado";
    respuestasInterfaces[1][39]= "Función";

const preguntasInterfaces = new Array(2)
for(var i = 0; i < preguntasInterfaces.length; i++){
    preguntasInterfaces[i] = new Array(2)
}
    preguntasInterfaces[1][0] = "¿Cuál o cuáles de los siguientes elementos son convenientes añadir en cualquier diseño web?";
    preguntasInterfaces[1][1] = "¿Qué áreas principales se recogen en una interfaz gráfica?";
    preguntasInterfaces[1][2] = "Si un color se expresa de la forma #ffff00:";
    preguntasInterfaces[1][3] = "¿Qué atributo define la intensidad de un color?";
    preguntasInterfaces[1][4] = "¿Qué son los web-safe colors?";
    preguntasInterfaces[1][5] = "¿Cuál de las siguientes codificaciones no es color seguro?";
    preguntasInterfaces[1][6] = "En cuanto a la selección de colores de un diseño web:";
    preguntasInterfaces[1][7] = "¿Cómo se denomina al conjunto de colores en diseño web, que el ojo humano es capaz de percibir?";
    preguntasInterfaces[1][8] = "Dirección, posición, espacio y gravedad, son elementos de:";
    preguntasInterfaces[1][9] = "¿Qué nombre recibe el elemento práctico que se utiliza para representar el propósito para el cual sirve el diseño (por ejemplo, una señal de prohibido)?";


const respuestasCorrectasInterfaces = new Array(2)
var intCorrectas = []
var intRespuestas = []
for(var i = 0; i < respuestasCorrectasInterfaces.length; i++){
    respuestasCorrectasInterfaces[i] = new Array(2)
}
    respuestasCorrectasInterfaces[1][0]= "Todos son convenientes, aunque no obligatorios, en función del diseño del sitio";
    respuestasCorrectasInterfaces[1][1]= "A y b son correctas ";
    respuestasCorrectasInterfaces[1][2]= " El color rojo que participa en la combinación toma el valor 255 en decimal ";
    respuestasCorrectasInterfaces[1][3]= "Saturación";
    respuestasCorrectasInterfaces[1][4]= "Colores que se representan de la misma forma en cualquier navegador o dispositivo";
    respuestasCorrectasInterfaces[1][5]= "#CC C3 FF ";
    respuestasCorrectasInterfaces[1][6]= "Una selección adecuada es muy importante, puesto que puede condicionar la experiencia de navegación del usuario, así como aportar una imagen propia e identificativa del sitio";
    respuestasCorrectasInterfaces[1][7]= "RGB";
    respuestasCorrectasInterfaces[1][8]= "Relación";
    respuestasCorrectasInterfaces[1][9]= "Función";

var tema = 1;

addEventListener("load",function Start(){
    for(var i = 0; i < 10; i++){
        document.getElementsByClassName("titlePregunta")[i].innerHTML = preguntasInterfaces[tema][i];
        
    }
    for(var i = 2; i < 42; i++){
        document.getElementsByTagName("label")[i].firstElementChild.innerHTML = respuestasInterfaces[tema][i-2];
        
    }
    
    var aux = 2;
    for(var i = 2; i < 12; i++){
        for(var j = aux; j < 4+aux; j++){
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasCorrectasInterfaces[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasCorrectasInterfaces[tema][i-2])

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