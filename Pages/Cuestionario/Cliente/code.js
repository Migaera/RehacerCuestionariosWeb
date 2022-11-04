const respuestasCliente = new Array(2);
for(var i = 0; i < respuestasCliente.length; i++){
    respuestasCliente[i] = new Array(2)
}

const preguntasCliente = new Array(2)
for(var i = 0; i < preguntasCliente.length; i++){
    preguntasCliente[i] = new Array(2)
}

const respuestasCorrectasCliente = new Array(2)
var intCorrectas = []
var intRespuestas = []
for(var i = 0; i < respuestasCorrectasCliente.length; i++){
    respuestasCorrectasCliente[i] = new Array(2)
}

//Tema 1
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

//Tema 2
respuestasCliente[2][0]=" Únicamente permite la utilización del lenguaje HTML ";
respuestasCliente[2][1]="Puede combinar HTML con otros lenguajes ";
respuestasCliente[2][2]="  Permite la utilización de cualquier conjunto de etiquetas ";
respuestasCliente[2][3]=" Ninguna de las anteriores es correcta ";
respuestasCliente[2][4]="No se puede visualizar en un navegador ";
respuestasCliente[2][5]="No es un lenguaje de marcado. ";
respuestasCliente[2][6]="Tiene un conjunto de etiquetas cerrado ";
respuestasCliente[2][7]="Es totalmente estándar ";
respuestasCliente[2][8]="La URL";
respuestasCliente[2][9]="HTTP";
respuestasCliente[2][10]="Gestor de almacenamiento";
respuestasCliente[2][11]="Ninguna de las anteriores es correcta";
respuestasCliente[2][12]="No se puede usar editores de texto";
respuestasCliente[2][13]="No es posible utilizar IDEs";
respuestasCliente[2][14]="Requerimos siempre conexión con la red";
respuestasCliente[2][15]="Ninguna de las anteriores correcta";
respuestasCliente[2][16]="No se puede utilizar CSS";
respuestasCliente[2][17]="Se puede utilizar Java";
respuestasCliente[2][18]="Se puede utilizar HTML";
respuestasCliente[2][19]="Todas las anteriores son correctas";
respuestasCliente[2][20]="HTML se utiliza para intercambio de datos";
respuestasCliente[2][21]="XML se utiliza para representación visual";
respuestasCliente[2][22]="JSON se utiliza para intercambiar datos";
respuestasCliente[2][23]="JavaScript se utiliza para la apariencia visual";
respuestasCliente[2][24]="No se puede utilizar el cliente";
respuestasCliente[2][25]="Facilita el desarrollo web en cliente";
respuestasCliente[2][26]="Es incompatible con JavaScript";
respuestasCliente[2][27]="Es incompatible con JSON";
respuestasCliente[2][28]="Modificadas";
respuestasCliente[2][29]="Ampliadas";
respuestasCliente[2][30]="Borradas";
respuestasCliente[2][31]="Ninguna de las anteriores es correcta";
respuestasCliente[2][32]="Tiene cabecera y cuerpo";
respuestasCliente[2][33]="Sólo tiene cuerpo";
respuestasCliente[2][34]="Tiene cabecera y un cuerpo limitado tamaño";
respuestasCliente[2][35]="Tiene un cuerpo en JSON";
respuestasCliente[2][36]="No permite el intercambio de datos";
respuestasCliente[2][37]="Es muy limitado";
respuestasCliente[2][38]="Posee un conjunto de tecnologías a su alrededor";
respuestasCliente[2][39]="Ninguna de las anteriores es correcta";

preguntasCliente[2][0]="Un documento HTML…";
preguntasCliente[2][1]="El lenguaje HTML…";
preguntasCliente[2][2]="Un componente de los navegadores web es…";
preguntasCliente[2][3]="En el desarrollo web en cliente…";
preguntasCliente[2][4]="En el desarrollo web cliente…";
preguntasCliente[2][5]="En el desarrollo web…";
preguntasCliente[2][6]="Un framework…";
preguntasCliente[2][7]="En HTML las etiquetas pueden ser…";
preguntasCliente[2][8]="Un documento HTML…";
preguntasCliente[2][9]="En el desarrollo web XML…";

respuestasCorrectasCliente[2][0]="Puede combinar HTML con otros lenguajes";
respuestasCorrectasCliente[2][1]="Tiene un conjunto de etiquetas cerrado";
respuestasCorrectasCliente[2][2]="Gestor de almacenamiento ";
respuestasCorrectasCliente[2][3]="Ninguna de las anteriores correcta";
respuestasCorrectasCliente[2][4]="Se puede utilizar HTML";
respuestasCorrectasCliente[2][5]="JSON se utiliza para intercambiar datos";
respuestasCorrectasCliente[2][6]="Facilita el desarrollo web en cliente";
respuestasCorrectasCliente[2][7]="Ninguna de las anteriores es correcta";
respuestasCorrectasCliente[2][8]="Tiene cabecera y cuerpo";
respuestasCorrectasCliente[2][9]="Posee un conjunto de tecnologías a su alrededor ";


//Tema 3
respuestasCliente[3][0]="Permite mejorar la apariencia de la web";
respuestasCliente[2][1]="Se centra en temas de interacción";
respuestasCliente[3][2]="Aumenta la seguridad de una web";
respuestasCliente[3][3]="No se puede ejecutar fuera del contexto web";
respuestasCliente[3][4]="Podemos hacerlo directamente en el HTML";
respuestasCliente[3][5]="Se puede utilizar a nivel de etiqueta";
respuestasCliente[3][6]="Se puede utilizar un archivo externo";
respuestasCliente[3][7]="Todas las anteriores son correctas";
respuestasCliente[3][8]="De programación";
respuestasCliente[3][9]="De modelado";
respuestasCliente[3][10]="De Scripting";
respuestasCliente[3][11]="A y C son correctas.";
respuestasCliente[3][12]="Se realiza siempre el servidor";
respuestasCliente[3][13]="Se realiza a en el cliente";
respuestasCliente[3][14]="No puede ser bloqueado";
respuestasCliente[3][15]="Se requiere un programa externo al navegador web";
respuestasCliente[3][16]="Siempre hay que indicar el tipo de las variables en su declaración";
respuestasCliente[3][17]="La declaración de variables no requiere tipo";
respuestasCliente[3][18]="Las variables no se declaran";
respuestasCliente[3][19]="No existen las variables";
respuestasCliente[3][20]="Modifica la parte derecha";
respuestasCliente[3][21]="Modifica la parte izquierda";
respuestasCliente[3][22]="Se comporta igual que la igualdad matemática";
respuestasCliente[3][23]="No existe en JavaScript";
respuestasCliente[3][24]="El siempre automática";
respuestasCliente[3][25]="Puede requerir intervención del programador";
respuestasCliente[3][26]="El siempre segura";
respuestasCliente[3][27]="Ninguna de las anteriores correcta";
respuestasCliente[3][28]="No están permitidos";
respuestasCliente[3][29]="Sólo se permiten en línea";
respuestasCliente[3][30]="Se permiten comentario de línea y de bloque";
respuestasCliente[3][31]="Hay que borrarlos cuando finaliza el desarrollo";
respuestasCliente[3][32]="Sólo se puede ejecutar entornos web ";
respuestasCliente[3][33]="En entornos web puede acceder al disco duro ";
respuestasCliente[3][34]="Puede utilizarse en contexto diferentes al web";
respuestasCliente[3][35]="No puede cambiar el contenido HTML";
respuestasCliente[3][36]="Se puede comenzar con un número";
respuestasCliente[3][37]="Se puede comenzar con un _";
respuestasCliente[3][38]="Sólo se puede comenzar con letras en mayúsculas";
respuestasCliente[3][39]="Ninguna es correcta";

preguntasCliente[3][0]="El lenguaje de programación JavaScript…";
preguntasCliente[3][1]="Para incluir código JavaScript en una web…";
preguntasCliente[3][2]="JavaScript es un lenguaje….";
preguntasCliente[3][3]="Al ejecutar JavaScript…";
preguntasCliente[3][4]="En el lenguaje JavaScript…";
preguntasCliente[3][5]="El operador de asignación…";
preguntasCliente[3][6]="La conversión del tipo de datos en JavaScript…";
preguntasCliente[3][7]="Los comentarios en JavaScript….";
preguntasCliente[3][8]="El lenguaje de programación JavaScript…";
preguntasCliente[3][9]="En la declaración de la variable en JavaScript…";

respuestasCorrectasCliente[3][0]="Se centra en temas de interacción";
respuestasCorrectasCliente[3][1]="Todas las anteriores son correctas";
respuestasCorrectasCliente[3][2]="A y C son correctas";
respuestasCorrectasCliente[3][3]="Se realiza a en el cliente";
respuestasCorrectasCliente[3][4]="La declaración de variables no requiere tipo";
respuestasCorrectasCliente[3][5]="Modifica la parte izquierda";
respuestasCorrectasCliente[3][6]="Puede requerir intervención del programador";
respuestasCorrectasCliente[3][7]="Se permiten comentario de línea y de bloque";
respuestasCorrectasCliente[3][8]="Puede utilizarse en contexto diferentes al web";
respuestasCorrectasCliente[3][9]="Se puede comenzar con un _";


//Tema 4
respuestasCliente[4][0]="Respuesta";
respuestasCliente[4][1]="Respuesta";
respuestasCliente[4][2]="Respuesta";
respuestasCliente[4][3]="Respuesta";
respuestasCliente[4][4]="Respuesta";
respuestasCliente[4][5]="Respuesta";
respuestasCliente[4][6]="Respuesta";
respuestasCliente[4][7]="Respuesta";
respuestasCliente[4][8]="Respuesta";
respuestasCliente[4][9]="Respuesta";
respuestasCliente[4][10]="Respuesta";
respuestasCliente[4][11]="Respuesta";
respuestasCliente[4][12]="Respuesta";
respuestasCliente[4][13]="Respuesta";
respuestasCliente[4][14]="Respuesta";
respuestasCliente[4][15]="Respuesta";
respuestasCliente[4][16]="Respuesta";
respuestasCliente[4][17]="Respuesta";
respuestasCliente[4][18]="Respuesta";
respuestasCliente[4][19]="Respuesta";
respuestasCliente[4][20]="Respuesta";
respuestasCliente[4][21]="Respuesta";
respuestasCliente[4][22]="Respuesta";
respuestasCliente[4][23]="Respuesta";
respuestasCliente[4][24]="Respuesta";
respuestasCliente[4][25]="Respuesta";
respuestasCliente[4][26]="Respuesta";
respuestasCliente[4][27]="Respuesta";
respuestasCliente[4][28]="Respuesta";
respuestasCliente[4][29]="Respuesta";
respuestasCliente[4][30]="Respuesta";
respuestasCliente[4][31]="Respuesta";
respuestasCliente[4][32]="Respuesta";
respuestasCliente[4][33]="Respuesta";
respuestasCliente[4][34]="Respuesta";
respuestasCliente[4][35]="Respuesta";
respuestasCliente[4][36]="Respuesta";
respuestasCliente[4][37]="Respuesta";
respuestasCliente[4][38]="Respuesta";
respuestasCliente[4][39]="Respuesta";

preguntasCliente[4][0]="Pregunta";
preguntasCliente[4][1]="Pregunta";
preguntasCliente[4][2]="Pregunta";
preguntasCliente[4][3]="Pregunta";
preguntasCliente[4][4]="Pregunta";
preguntasCliente[4][5]="Pregunta";
preguntasCliente[4][6]="Pregunta";
preguntasCliente[4][7]="Pregunta";
preguntasCliente[4][8]="Pregunta";
preguntasCliente[4][9]="Pregunta";

respuestasCorrectasCliente[4][0]="Respuesta";
respuestasCorrectasCliente[4][1]="Respuesta";
respuestasCorrectasCliente[4][2]="Respuesta";
respuestasCorrectasCliente[4][3]="Respuesta";
respuestasCorrectasCliente[4][4]="Respuesta";
respuestasCorrectasCliente[4][5]="Respuesta";
respuestasCorrectasCliente[4][6]="Respuesta";
respuestasCorrectasCliente[4][7]="Respuesta";
respuestasCorrectasCliente[4][8]="Respuesta";
respuestasCorrectasCliente[4][9]="Respuesta";

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


/*
respuestasCliente[2][0]="Respuesta";
respuestasCliente[2][1]="Respuesta";
respuestasCliente[2][2]="Respuesta";
respuestasCliente[2][3]="Respuesta";
respuestasCliente[2][4]="Respuesta";
respuestasCliente[2][5]="Respuesta";
respuestasCliente[2][6]="Respuesta";
respuestasCliente[2][7]="Respuesta";
respuestasCliente[2][8]="Respuesta";
respuestasCliente[2][9]="Respuesta";
respuestasCliente[2][10]="Respuesta";
respuestasCliente[2][11]="Respuesta";
respuestasCliente[2][12]="Respuesta";
respuestasCliente[2][13]="Respuesta";
respuestasCliente[2][14]="Respuesta";
respuestasCliente[2][15]="Respuesta";
respuestasCliente[2][16]="Respuesta";
respuestasCliente[2][17]="Respuesta";
respuestasCliente[2][18]="Respuesta";
respuestasCliente[2][19]="Respuesta";
respuestasCliente[2][20]="Respuesta";
respuestasCliente[2][21]="Respuesta";
respuestasCliente[2][22]="Respuesta";
respuestasCliente[2][23]="Respuesta";
respuestasCliente[2][24]="Respuesta";
respuestasCliente[2][25]="Respuesta";
respuestasCliente[2][26]="Respuesta";
respuestasCliente[2][27]="Respuesta";
respuestasCliente[2][28]="Respuesta";
respuestasCliente[2][29]="Respuesta";
respuestasCliente[2][30]="Respuesta";
respuestasCliente[2][31]="Respuesta";
respuestasCliente[2][32]="Respuesta";
respuestasCliente[2][33]="Respuesta";
respuestasCliente[2][34]="Respuesta";
respuestasCliente[2][35]="Respuesta";
respuestasCliente[2][36]="Respuesta";
respuestasCliente[2][37]="Respuesta";
respuestasCliente[2][38]="Respuesta";
respuestasCliente[2][39]="Respuesta";

preguntasCliente[2][0]="Pregunta";
preguntasCliente[2][1]="Pregunta";
preguntasCliente[2][2]="Pregunta";
preguntasCliente[2][3]="Pregunta";
preguntasCliente[2][4]="Pregunta";
preguntasCliente[2][5]="Pregunta";
preguntasCliente[2][6]="Pregunta";
preguntasCliente[2][7]="Pregunta";
preguntasCliente[2][8]="Pregunta";
preguntasCliente[2][9]="Pregunta";

respuestasCorrectasCliente[2][0]="Respuesta";
respuestasCorrectasCliente[2][1]="Respuesta";
respuestasCorrectasCliente[2][2]="Respuesta";
respuestasCorrectasCliente[2][3]="Respuesta";
respuestasCorrectasCliente[2][4]="Respuesta";
respuestasCorrectasCliente[2][5]="Respuesta";
respuestasCorrectasCliente[2][6]="Respuesta";
respuestasCorrectasCliente[2][7]="Respuesta";
respuestasCorrectasCliente[2][8]="Respuesta";
respuestasCorrectasCliente[2][9]="Respuesta";
    */