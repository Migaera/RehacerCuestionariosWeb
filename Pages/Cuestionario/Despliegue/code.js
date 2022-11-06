const respuestas = new Array(7);
for(var i = 0; i < respuestas.length; i++){
    respuestas[i] = new Array(39)
    
}

const preguntas = new Array(7)
for(var i = 0; i < preguntas.length; i++){
    preguntas[i] = new Array(9)
}

var intCorrectas = []
var intRespuestas = []

const respuestasCorrectas = new Array(7)
for(var i = 0; i < respuestasCorrectas.length; i++){
    respuestasCorrectas[i] = new Array(9)
}

//Tema 1
respuestas[1][0]= "Un navegador web";
respuestas[1][1]= "Una red de equipos interconectada";
respuestas[1][2]= "Un tipo de servidor web";
respuestas[1][3]= "Ninguna de las anteriores es correcta";
respuestas[1][4]= "DNS";
respuestas[1][5]= "FTP";
respuestas[1][6]= "HTTP";
respuestas[1][7]= "Ninguna de las anteriores es correcta";
respuestas[1][8]= "80 TCP";
respuestas[1][9]= "80 UDP";
respuestas[1][10]= "8080 TCP";
respuestas[1][11]= "Ninguna de las anteriores";
respuestas[1][12]= "El servidor se reinicia";
respuestas[1][13]= "Se cierra la conexión";
respuestas[1][14]= "El navegador web se bloquea";
respuestas[1][15]= "Ninguna de las anteriores";
respuestas[1][16]= "Un servidor de aplicaciones web";
respuestas[1][17]= "Un lenguaje de marcas de hipertexto basado en etiquetas utilizado para crear páginas web";
respuestas[1][18]= "Un protocolo de red";
respuestas[1][19]= "Ninguna de las anteriores";
respuestas[1][20]= "Bill Gates";
respuestas[1][21]= "Richard Stallman";
respuestas[1][22]= "Tim Berners-Lee";
respuestas[1][23]= "Ninguna de las anteriores";
respuestas[1][24]= "No necesitan acceso a internet";
respuestas[1][25]= "Compatibilidad con cualquier sistema operativo";
respuestas[1][26]= "La instalación en el ordenador ocupa menos espacio";
respuestas[1][27]= "Ninguna de las anteriores";
respuestas[1][28]= "Es un modelo centralizado";
respuestas[1][29]= "Falla si uno de los nodos se cae";
respuestas[1][30]= "Es el más utilizado en la actualidad";
respuestas[1][31]= "Funciona con una topología en malla y todos los nodos hacen de cliente y servidor";
respuestas[1][32]= "Si el servidor se cae los recursos siguen estando disponibles";
respuestas[1][33]= "Si hay un alto número de peticiones simultaneas se podría congestionar el servidor y dejar de estar operativo";
respuestas[1][34]= "El mantenimiento es más complicado que en el modelo P2P";
respuestas[1][35]= "Todas son correctas";
respuestas[1][36]= "Los clientes se comunican directamente con la BBDD";
respuestas[1][37]= "El servidor web se comunicará con la base de datos";
respuestas[1][38]= "Es necesario tener tantos servidores web como bases de datos.";
respuestas[1][39]= "Ninguna es correcta";

preguntas[1][0] = "¿Qué es la World Wide Web?";
preguntas[1][1] = "¿Qué nuevo protocolo permitió la expansión de los servicios web?:";
preguntas[1][2] = "Una¿Qué puerto utiliza el protocolo HTTP?";
preguntas[1][3] = "Cuando el servidor web ha terminado de enviar los datos al cliente…";
preguntas[1][4] = "HTML es…";
preguntas[1][5] = "El fundador del consorcio de la WWW (3WC) fue…";
preguntas[1][6] = "¿Qué ventajas aportan las aplicaciones web respecto a las aplicaciones de escritorio?";
preguntas[1][7] = "El modelo P2P…";
preguntas[1][8] = "En el modelo cliente-servidor…";
preguntas[1][9] = "El modelo de tres capas…";

respuestasCorrectas[1][0]= "Una red de equipos interconectada";
respuestasCorrectas[1][1]= "HTTP";
respuestasCorrectas[1][2]= "80 TCP";
respuestasCorrectas[1][3]= "Se cierra la conexión";
respuestasCorrectas[1][4]= "Un lenguaje de marcas de hipertexto basado en etiquetas utilizado para crear páginas web";
respuestasCorrectas[1][5]= "Tim Berners-Lee";
respuestasCorrectas[1][6]= "Compatibilidad con cualquier sistema operativo";
respuestasCorrectas[1][7]= "Funciona con una topología en malla y todos los nodos hacen de cliente y servidor";
respuestasCorrectas[1][8]= "Si hay un alto número de peticiones simultaneas se podría congestionar el servidor y dejar de estar operativo";
respuestasCorrectas[1][9]= "El servidor web se comunicará con la base de datos";

//Tema 2
respuestas[2][0]="Un sistema gestor de base de datos";
respuestas[2][1]="Un navegador web";
respuestas[2][2]="Un tipo de servidor web";
respuestas[2][3]="Ninguna de las anteriores es correcta";
respuestas[2][4]="Solo permiten su instalación el Linux";
respuestas[2][5]="Solo permiten su instalación en Windows";
respuestas[2][6]="Se pueden instalar tanto en Windows como Linux";
respuestas[2][7]="Ninguna de las anteriores es correcta";
respuestas[2][8]="Un servidor web open soure";
respuestas[2][9]="Es la versión comercial de Nginx";
respuestas[2][10]="Una utilidad de Linux";
respuestas[2][11]="Ninguna de las anteriores";
respuestas[2][12]="Internet Information System";
respuestas[2][13]="Internet Information Services";
respuestas[2][14]="Internet Information Server";
respuestas[2][15]="Ninguna de las anteriores";
respuestas[2][16]="Del estado general del servidor";
respuestas[2][17]="Información a tiempo real del número de peticiones";
respuestas[2][18]="Información relativa a la versión de PHP y los plugins instalados";
respuestas[2][19]="Ninguna de las anteriores";
respuestas[2][20]="Apache";
respuestas[2][21]="Microsoft IIS";
respuestas[2][22]="Ngixn";
respuestas[2][23]="Ninguna de las opciones anteriores es correcta";
respuestas[2][24]=" /var/www/html ";
respuestas[2][25]="C:\Windows\System32\websrv ";
respuestas[2][26]="/var/www/inetpub ";
respuestas[2][27]="Ninguna de las anteriores";
respuestas[2][28]="Nginx --configtest";
respuestas[2][29]="Nginx -c ";
respuestas[2][30]="Nginx --configcheck";
respuestas[2][31]="Nginx -t ";
respuestas[2][32]="Un sistema de despliegue de aplicaciones web y servicios basado en contenedores. ";
respuestas[2][33]="Un servidor web de última generación";
respuestas[2][34]="Un complemento de Apache que actúa como firewall";
respuestas[2][35]="Todas son correctas";
respuestas[2][36]="En un servidor docker solo se puede tener un contenedor";
respuestas[2][37]="Si, se pueden tener varios sitios web apuntando al mismo puerto";
respuestas[2][38]="No, cada contenedor se debe redirigir un puerto único";
respuestas[2][39]="Ninguna es correcta";

preguntas[2][0]="Mysql es…";
preguntas[2][1]="Los servidores web multiplataforma…";
preguntas[2][2]="Nginx Plus es…";
preguntas[2][3]="IIS son las siglas de…";
preguntas[2][4]="El archivo phpinfo.php nos da información acerca de";
preguntas[2][5]="De los siguientes servidores web, ¿Cuál apareció primero?";
preguntas[2][6]="¿En qué ruta se establece el directorio raiz de un servidor web en Linux?";
preguntas[2][7]="Para comprobar la configuración de Nginx utilizamos el comando…";
preguntas[2][8]="Docker es…";
preguntas[2][9]="Un servidor Docker puede tener varios contenedores en el mismo puerto…";

respuestasCorrectas[2][0]="Un sistema gestor de base de datos";
respuestasCorrectas[2][1]="Se pueden instalar tanto en Windows como Linux";
respuestasCorrectas[2][2]="Es la versión comercial de Nginx";
respuestasCorrectas[2][3]="Internet Information Services";
respuestasCorrectas[2][4]="Información relativa a la versión de PHP y los plugins instalados";
respuestasCorrectas[2][5]="Apache";
respuestasCorrectas[2][6]=" /var/www/html ";
respuestasCorrectas[2][7]="Nginx -t ";
respuestasCorrectas[2][8]="Un sistema de despliegue de aplicaciones web y servicios basado en contenedores. ";
respuestasCorrectas[2][9]="No, cada contenedor se debe redirigir un puerto único";

//Tema 3
respuestas[3][0]="Respuesta";
respuestas[3][1]="Respuesta";
respuestas[3][2]="Respuesta";
respuestas[3][3]="Respuesta";
respuestas[3][4]="Respuesta";
respuestas[3][5]="Respuesta";
respuestas[3][6]="Respuesta";
respuestas[3][7]="Respuesta";
respuestas[3][8]="Respuesta";
respuestas[3][9]="Respuesta";
respuestas[3][10]="Respuesta";
respuestas[3][11]="Respuesta";
respuestas[3][12]="Respuesta";
respuestas[3][13]="Respuesta";
respuestas[3][14]="Respuesta";
respuestas[3][15]="Respuesta";
respuestas[3][16]="Respuesta";
respuestas[3][17]="Respuesta";
respuestas[3][18]="Respuesta";
respuestas[3][19]="Respuesta";
respuestas[3][20]="Respuesta";
respuestas[3][21]="Respuesta";
respuestas[3][22]="Respuesta";
respuestas[3][23]="Respuesta";
respuestas[3][24]="Respuesta";
respuestas[3][25]="Respuesta";
respuestas[3][26]="Respuesta";
respuestas[3][27]="Respuesta";
respuestas[3][28]="Respuesta";
respuestas[3][29]="Respuesta";
respuestas[3][30]="Respuesta";
respuestas[3][31]="Respuesta";
respuestas[3][32]="Respuesta";
respuestas[3][33]="Respuesta";
respuestas[3][34]="Respuesta";
respuestas[3][35]="Respuesta";
respuestas[3][36]="Respuesta";
respuestas[3][37]="Respuesta";
respuestas[3][38]="Respuesta";
respuestas[3][39]="Respuesta";

preguntas[3][0]="Pregunta";
preguntas[3][1]="Pregunta";
preguntas[3][2]="Pregunta";
preguntas[3][3]="Pregunta";
preguntas[3][4]="Pregunta";
preguntas[3][5]="Pregunta";
preguntas[3][6]="Pregunta";
preguntas[3][7]="Pregunta";
preguntas[3][8]="Pregunta";
preguntas[3][9]="Pregunta";

respuestasCorrectas[3][0]="Respuesta";
respuestasCorrectas[3][1]="Respuesta";
respuestasCorrectas[3][2]="Respuesta";
respuestasCorrectas[3][3]="Respuesta";
respuestasCorrectas[3][4]="Respuesta";
respuestasCorrectas[3][5]="Respuesta";
respuestasCorrectas[3][6]="Respuesta";
respuestasCorrectas[3][7]="Respuesta";
respuestasCorrectas[3][8]="Respuesta";
respuestasCorrectas[3][9]="Respuesta";

//Tema 4
respuestas[4][0]="Respuesta";
respuestas[4][1]="Respuesta";
respuestas[4][2]="Respuesta";
respuestas[4][3]="Respuesta";
respuestas[4][4]="Respuesta";
respuestas[4][5]="Respuesta";
respuestas[4][6]="Respuesta";
respuestas[4][7]="Respuesta";
respuestas[4][8]="Respuesta";
respuestas[4][9]="Respuesta";
respuestas[4][10]="Respuesta";
respuestas[4][11]="Respuesta";
respuestas[4][12]="Respuesta";
respuestas[4][13]="Respuesta";
respuestas[4][14]="Respuesta";
respuestas[4][15]="Respuesta";
respuestas[4][16]="Respuesta";
respuestas[4][17]="Respuesta";
respuestas[4][18]="Respuesta";
respuestas[4][19]="Respuesta";
respuestas[4][20]="Respuesta";
respuestas[4][21]="Respuesta";
respuestas[4][22]="Respuesta";
respuestas[4][23]="Respuesta";
respuestas[4][24]="Respuesta";
respuestas[4][25]="Respuesta";
respuestas[4][26]="Respuesta";
respuestas[4][27]="Respuesta";
respuestas[4][28]="Respuesta";
respuestas[4][29]="Respuesta";
respuestas[4][30]="Respuesta";
respuestas[4][31]="Respuesta";
respuestas[4][32]="Respuesta";
respuestas[4][33]="Respuesta";
respuestas[4][34]="Respuesta";
respuestas[4][35]="Respuesta";
respuestas[4][36]="Respuesta";
respuestas[4][37]="Respuesta";
respuestas[4][38]="Respuesta";
respuestas[4][39]="Respuesta";

preguntas[4][0]="Pregunta";
preguntas[4][1]="Pregunta";
preguntas[4][2]="Pregunta";
preguntas[4][3]="Pregunta";
preguntas[4][4]="Pregunta";
preguntas[4][5]="Pregunta";
preguntas[4][6]="Pregunta";
preguntas[4][7]="Pregunta";
preguntas[4][8]="Pregunta";
preguntas[4][9]="Pregunta";

respuestasCorrectas[4][0]="Respuesta";
respuestasCorrectas[4][1]="Respuesta";
respuestasCorrectas[4][2]="Respuesta";
respuestasCorrectas[4][3]="Respuesta";
respuestasCorrectas[4][4]="Respuesta";
respuestasCorrectas[4][5]="Respuesta";
respuestasCorrectas[4][6]="Respuesta";
respuestasCorrectas[4][7]="Respuesta";
respuestasCorrectas[4][8]="Respuesta";
respuestasCorrectas[4][9]="Respuesta";

//Tema 5
respuestas[5][0]="Respuesta";
respuestas[5][1]="Respuesta";
respuestas[5][2]="Respuesta";
respuestas[5][3]="Respuesta";
respuestas[5][4]="Respuesta";
respuestas[5][5]="Respuesta";
respuestas[5][6]="Respuesta";
respuestas[5][7]="Respuesta";
respuestas[5][8]="Respuesta";
respuestas[5][9]="Respuesta";
respuestas[5][10]="Respuesta";
respuestas[5][11]="Respuesta";
respuestas[5][12]="Respuesta";
respuestas[5][13]="Respuesta";
respuestas[5][14]="Respuesta";
respuestas[5][15]="Respuesta";
respuestas[5][16]="Respuesta";
respuestas[5][17]="Respuesta";
respuestas[5][18]="Respuesta";
respuestas[5][19]="Respuesta";
respuestas[5][20]="Respuesta";
respuestas[5][21]="Respuesta";
respuestas[5][22]="Respuesta";
respuestas[5][23]="Respuesta";
respuestas[5][24]="Respuesta";
respuestas[5][25]="Respuesta";
respuestas[5][26]="Respuesta";
respuestas[5][27]="Respuesta";
respuestas[5][28]="Respuesta";
respuestas[5][29]="Respuesta";
respuestas[5][30]="Respuesta";
respuestas[5][31]="Respuesta";
respuestas[5][32]="Respuesta";
respuestas[5][33]="Respuesta";
respuestas[5][34]="Respuesta";
respuestas[5][35]="Respuesta";
respuestas[5][36]="Respuesta";
respuestas[5][37]="Respuesta";
respuestas[5][38]="Respuesta";
respuestas[5][39]="Respuesta";

preguntas[5][0]="Pregunta";
preguntas[5][1]="Pregunta";
preguntas[5][2]="Pregunta";
preguntas[5][3]="Pregunta";
preguntas[5][4]="Pregunta";
preguntas[5][5]="Pregunta";
preguntas[5][6]="Pregunta";
preguntas[5][7]="Pregunta";
preguntas[5][8]="Pregunta";
preguntas[5][9]="Pregunta";

respuestasCorrectas[5][0]="Respuesta";
respuestasCorrectas[5][1]="Respuesta";
respuestasCorrectas[5][2]="Respuesta";
respuestasCorrectas[5][3]="Respuesta";
respuestasCorrectas[5][4]="Respuesta";
respuestasCorrectas[5][5]="Respuesta";
respuestasCorrectas[5][6]="Respuesta";
respuestasCorrectas[5][7]="Respuesta";
respuestasCorrectas[5][8]="Respuesta";
respuestasCorrectas[5][9]="Respuesta";

//Tema 6
respuestas[6][0]="Respuesta";
respuestas[6][1]="Respuesta";
respuestas[6][2]="Respuesta";
respuestas[6][3]="Respuesta";
respuestas[6][4]="Respuesta";
respuestas[6][5]="Respuesta";
respuestas[6][6]="Respuesta";
respuestas[6][7]="Respuesta";
respuestas[6][8]="Respuesta";
respuestas[6][9]="Respuesta";
respuestas[6][10]="Respuesta";
respuestas[6][11]="Respuesta";
respuestas[6][12]="Respuesta";
respuestas[6][13]="Respuesta";
respuestas[6][14]="Respuesta";
respuestas[6][15]="Respuesta";
respuestas[6][16]="Respuesta";
respuestas[6][17]="Respuesta";
respuestas[6][18]="Respuesta";
respuestas[6][19]="Respuesta";
respuestas[6][20]="Respuesta";
respuestas[6][21]="Respuesta";
respuestas[6][22]="Respuesta";
respuestas[6][23]="Respuesta";
respuestas[6][24]="Respuesta";
respuestas[6][25]="Respuesta";
respuestas[6][26]="Respuesta";
respuestas[6][27]="Respuesta";
respuestas[6][28]="Respuesta";
respuestas[6][29]="Respuesta";
respuestas[6][30]="Respuesta";
respuestas[6][31]="Respuesta";
respuestas[6][32]="Respuesta";
respuestas[6][33]="Respuesta";
respuestas[6][34]="Respuesta";
respuestas[6][35]="Respuesta";
respuestas[6][36]="Respuesta";
respuestas[6][37]="Respuesta";
respuestas[6][38]="Respuesta";
respuestas[6][39]="Respuesta";

preguntas[6][0]="Pregunta";
preguntas[6][1]="Pregunta";
preguntas[6][2]="Pregunta";
preguntas[6][3]="Pregunta";
preguntas[6][4]="Pregunta";
preguntas[6][5]="Pregunta";
preguntas[6][6]="Pregunta";
preguntas[6][7]="Pregunta";
preguntas[6][8]="Pregunta";
preguntas[6][9]="Pregunta";

respuestasCorrectas[6][0]="Respuesta";
respuestasCorrectas[6][1]="Respuesta";
respuestasCorrectas[6][2]="Respuesta";
respuestasCorrectas[6][3]="Respuesta";
respuestasCorrectas[6][4]="Respuesta";
respuestasCorrectas[6][5]="Respuesta";
respuestasCorrectas[6][6]="Respuesta";
respuestasCorrectas[6][7]="Respuesta";
respuestasCorrectas[6][8]="Respuesta";
respuestasCorrectas[6][9]="Respuesta";


   
var tema = 1;

addEventListener("load",function Start(){
    for(var i = 0; i < 10; i++){
        document.getElementsByClassName("titlePregunta")[i].innerHTML = preguntas[tema][i];
        
    }
    for(var i = 2; i < 42; i++){
        document.getElementsByTagName("label")[i].firstElementChild.innerHTML = respuestas[tema][i-2];
        
    }
    
    var aux = 2;
    for(var i = 2; i < 12; i++){
        for(var j = aux; j < 4+aux; j++){
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasCorrectas[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasCorrectas[tema][i-2])

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