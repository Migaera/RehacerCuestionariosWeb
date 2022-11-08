const respuestas = new Array(8);
for(var i = 0; i < respuestas.length; i++){
    respuestas[i] = new Array(39)
    
}

const preguntas = new Array(8)
for(var i = 0; i < preguntas.length; i++){
    preguntas[i] = new Array(9)
}



const respuestasCorrectas = new Array(8)
for(var i = 0; i < respuestasCorrectas.length; i++){
    respuestasCorrectas[i] = new Array(9)
}

//Tema 1
respuestas[1][0]= "Forma parte del nivel de red";
respuestas[1][1]= "Forma parte del nivel de aplicación";
respuestas[1][2]= "Es más seguro que SSL";
respuestas[1][3]= "Ninguna de las anteriores es correcta";
respuestas[1][4]= "Solo se puede utilizar una capa";
respuestas[1][5]= "La capa de datos debe estar ligada a la de procesamiento";
respuestas[1][6]= "Puede requerir máquinas con altas especificaciones hardware";
respuestas[1][7]= "Ninguna de las anteriores es correcta";
respuestas[1][8]= "Permite definir una dirección de una página web";
respuestas[1][9]= "Identifica a un recurso web inequívocamente";
respuestas[1][10]= "No se puede utilizar con HTTP";
respuestas[1][11]= "Solo está permitida en SSH";
respuestas[1][12]= "Permite que el servidor envíe peticiones al ";
respuestas[1][13]= "Se basa en la resolución de peticiones en el ";
respuestas[1][14]= "Se centra en el envío de peticiones del ";
respuestas[1][15]= "No se puede utilizar en contextos web";
respuestas[1][16]= "Se introduce una capa de seguridad adicional a HTTP";
respuestas[1][17]= "Se utiliza una pila de protocolos totalmente diferente a HTTP";
respuestas[1][18]= "Nos apoyamos en SSH";
respuestas[1][19]= "Ninguna de las anteriores es correcta";
respuestas[1][20]= "El front-end se refiere al servidor";
respuestas[1][21]= "El front-end se refiere al ";
respuestas[1][22]= "El back-end se refiere al ";
respuestas[1][23]= "El  realiza tareas pesadas";
respuestas[1][24]= "Es una URL resumida";
respuestas[1][25]= "Permite indicar una dirección web";
respuestas[1][26]= "Identifica a un recurso en la red sin ninguna duda";
respuestas[1][27]= "Se utiliza solamente en SSH";
respuestas[1][28]= "Nos referimos al protocolo FTP";
respuestas[1][29]= "Hablamos del protocolo SSH";
respuestas[1][30]= "Se refiere a la utilización de URIs";
respuestas[1][31]= "Ninguna de las anteriores es correcta";
respuestas[1][32]= "Se encarga de la comunicación entre el emisor y receptor";
respuestas[1][33]= "Se apoya en el nivel de transporte";
respuestas[1][34]= "Incluye el protocolo IP";
respuestas[1][35]= "Ninguna de las anteriores es correcta";
respuestas[1][36]= "Especialmente para el intercambio de archivos";
respuestas[1][37]= "Para conectar de forma segura a la web";
respuestas[1][38]= "Para gestionar una máquina remota";
respuestas[1][39]= "Para dar soporte a HTTPs";

preguntas[1][0] = "El protocolo HTTP…"
preguntas[1][1] = "En la arquitectura /servidor…"
preguntas[1][2] = "Una URL…"
preguntas[1][3] = "La arquitectura /servidor…"
preguntas[1][4] = "Al utilizar HTTPS…"
preguntas[1][5] = "En una arquitectura /servidor…"
preguntas[1][6] = "Una URI…"
preguntas[1][7] = "Al realizar una petición GET…"
preguntas[1][8] = "El nivel de red…"
preguntas[1][9] = "SSH se utiliza…"

respuestasCorrectas[1][0]= "Forma parte del nivel de aplicación";
respuestasCorrectas[1][1]= "Puede requerir máquinas con altas especificaciones hardware";
respuestasCorrectas[1][2]= "Permite definir una dirección de una página web";
respuestasCorrectas[1][3]= "Se centra en el envío de peticiones del ";
respuestasCorrectas[1][4]= "Se introduce una capa de seguridad adicional a HTTP";
respuestasCorrectas[1][5]= "El front-end se refiere al ";
respuestasCorrectas[1][6]= "Identifica a un recurso en la red sin ninguna duda";
respuestasCorrectas[1][7]= "Ninguna de las anteriores es correcta";
respuestasCorrectas[1][8]= "Incluye el protocolo IP";
respuestasCorrectas[1][9]= "Para gestionar una máquina remota";

//Tema 2
respuestas[2][0]=" Únicamente permite la utilización del lenguaje HTML";
respuestas[2][1]="Puede combinar HTML con otros lenguajes";
respuestas[2][2]="  Permite la utilización de cualquier conjunto de etiquetas";
respuestas[2][3]=" Ninguna de las anteriores es correcta";
respuestas[2][4]="No se puede visualizar en un navegador";
respuestas[2][5]="No es un lenguaje de marcado";
respuestas[2][6]="Tiene un conjunto de etiquetas cerrado";
respuestas[2][7]="Es totalmente estándar";
respuestas[2][8]="La URL";
respuestas[2][9]="HTTP";
respuestas[2][10]="Gestor de almacenamiento";
respuestas[2][11]="Ninguna de las anteriores es correcta";
respuestas[2][12]="No se puede usar editores de texto";
respuestas[2][13]="No es posible utilizar IDEs";
respuestas[2][14]="Requerimos siempre conexión con la red";
respuestas[2][15]="Ninguna de las anteriores correcta";
respuestas[2][16]="No se puede utilizar CSS";
respuestas[2][17]="Se puede utilizar Java";
respuestas[2][18]="Se puede utilizar HTML";
respuestas[2][19]="Todas las anteriores son correctas";
respuestas[2][20]="HTML se utiliza para intercambio de datos";
respuestas[2][21]="XML se utiliza para representación visual";
respuestas[2][22]="JSON se utiliza para intercambiar datos";
respuestas[2][23]="JavaScript se utiliza para la apariencia visual";
respuestas[2][24]="No se puede utilizar el ";
respuestas[2][25]="Facilita el desarrollo web en ";
respuestas[2][26]="Es incompatible con JavaScript";
respuestas[2][27]="Es incompatible con JSON";
respuestas[2][28]="Modificadas";
respuestas[2][29]="Ampliadas";
respuestas[2][30]="Borradas";
respuestas[2][31]="Ninguna de las anteriores es correcta";
respuestas[2][32]="Tiene cabecera y cuerpo";
respuestas[2][33]="Sólo tiene cuerpo";
respuestas[2][34]="Tiene cabecera y un cuerpo limitado tamaño";
respuestas[2][35]="Tiene un cuerpo en JSON";
respuestas[2][36]="No permite el intercambio de datos";
respuestas[2][37]="Es muy limitado";
respuestas[2][38]="Posee un conjunto de tecnologías a su alrededor";
respuestas[2][39]="Ninguna de las anteriores es correcta";

preguntas[2][0]="Un documento HTML…";
preguntas[2][1]="El lenguaje HTML…";
preguntas[2][2]="Un componente de los navegadores web es…";
preguntas[2][3]="En el desarrollo web en …";
preguntas[2][4]="En el desarrollo web …";
preguntas[2][5]="En el desarrollo web…";
preguntas[2][6]="Un framework…";
preguntas[2][7]="En HTML las etiquetas pueden ser…";
preguntas[2][8]="Un documento HTML…";
preguntas[2][9]="En el desarrollo web XML…";

respuestasCorrectas[2][0]="Puede combinar HTML con otros lenguajes";
respuestasCorrectas[2][1]="Tiene un conjunto de etiquetas cerrado";
respuestasCorrectas[2][2]="Gestor de almacenamiento";
respuestasCorrectas[2][3]="Ninguna de las anteriores correcta";
respuestasCorrectas[2][4]="Se puede utilizar HTML";
respuestasCorrectas[2][5]="JSON se utiliza para intercambiar datos";
respuestasCorrectas[2][6]="Facilita el desarrollo web en ";
respuestasCorrectas[2][7]="Ninguna de las anteriores es correcta";
respuestasCorrectas[2][8]="Tiene cabecera y cuerpo";
respuestasCorrectas[2][9]="Posee un conjunto de tecnologías a su alrededor";


//Tema 3
respuestas[3][0]="Permite mejorar la apariencia de la web";
respuestas[2][1]="Se centra en temas de interacción";
respuestas[3][2]="Aumenta la seguridad de una web";
respuestas[3][3]="No se puede ejecutar fuera del contexto web";
respuestas[3][4]="Podemos hacerlo directamente en el HTML";
respuestas[3][5]="Se puede utilizar a nivel de etiqueta";
respuestas[3][6]="Se puede utilizar un archivo externo";
respuestas[3][7]="Todas las anteriores son correctas";
respuestas[3][8]="De programación";
respuestas[3][9]="De modelado";
respuestas[3][10]="De Scripting";
respuestas[3][11]="A y C son correctas";
respuestas[3][12]="Se realiza siempre el servidor";
respuestas[3][13]="Se realiza en el cliente";
respuestas[3][14]="No puede ser bloqueado";
respuestas[3][15]="Se requiere un programa externo al navegador web";
respuestas[3][16]="Siempre hay que indicar el tipo de las variables en su declaración";
respuestas[3][17]="La declaración de variables no requiere tipo";
respuestas[3][18]="Las variables no se declaran";
respuestas[3][19]="No existen las variables";
respuestas[3][20]="Modifica la parte derecha";
respuestas[3][21]="Modifica la parte izquierda";
respuestas[3][22]="Se comporta igual que la igualdad matemática";
respuestas[3][23]="No existe en JavaScript";
respuestas[3][24]="El siempre automática";
respuestas[3][25]="Puede requerir intervención del programador";
respuestas[3][26]="El siempre segura";
respuestas[3][27]="Ninguna de las anteriores correcta";
respuestas[3][28]="No están permitidos";
respuestas[3][29]="Sólo se permiten en línea";
respuestas[3][30]="Se permiten comentario de línea y de bloque";
respuestas[3][31]="Hay que borrarlos cuando finaliza el desarrollo";
respuestas[3][32]="Sólo se puede ejecutar entornos web";
respuestas[3][33]="En entornos web puede acceder al disco duro";
respuestas[3][34]="Puede utilizarse en contexto diferentes al web";
respuestas[3][35]="No puede cambiar el contenido HTML";
respuestas[3][36]="Se puede comenzar con un número";
respuestas[3][37]="Se puede comenzar con un _";
respuestas[3][38]="Sólo se puede comenzar con letras en mayúsculas";
respuestas[3][39]="Ninguna es correcta";

preguntas[3][0]="El lenguaje de programación JavaScript…";
preguntas[3][1]="Para incluir código JavaScript en una web…";
preguntas[3][2]="JavaScript es un lenguaje…";
preguntas[3][3]="Al ejecutar JavaScript…";
preguntas[3][4]="En el lenguaje JavaScript…";
preguntas[3][5]="El operador de asignación…";
preguntas[3][6]="La conversión del tipo de datos en JavaScript…";
preguntas[3][7]="Los comentarios en JavaScript…";
preguntas[3][8]="El lenguaje de programación JavaScript…";
preguntas[3][9]="En la declaración de la variable en JavaScript…";

respuestasCorrectas[3][0]="Se centra en temas de interacción";
respuestasCorrectas[3][1]="Todas las anteriores son correctas";
respuestasCorrectas[3][2]="A y C son correctas";
respuestasCorrectas[3][3]="Se realiza a en el cliente";
respuestasCorrectas[3][4]="La declaración de variables no requiere tipo";
respuestasCorrectas[3][5]="Modifica la parte izquierda";
respuestasCorrectas[3][6]="Puede requerir intervención del programador";
respuestasCorrectas[3][7]="Se permiten comentario de línea y de bloque";
respuestasCorrectas[3][8]="Puede utilizarse en contexto diferentes al web";
respuestasCorrectas[3][9]="Se puede comenzar con un _";


//Tema 4
respuestas[4][0]="Puede ser utilizadas como identificadores";
respuestas[4][1]="Puede modificarse";
respuestas[4][2]="Se escriben en mayúsculas";
respuestas[4][3]="Ninguna de las anteriores es correcta";
respuestas[4][4]="FUNCTION";
respuestas[4][5]="For";
respuestas[4][6]="_switch";
respuestas[4][7]="If";
respuestas[4][8]="Se separan utilizando :";
respuestas[4][9]="Se separan utilizando ;";
respuestas[4][10]="No requiere separador";
respuestas[4][11]="Ninguna de las anteriores es correcta";
respuestas[4][12]="Está formado por al menos una condición";
respuestas[4][13]="Está formado por al menos un bucle";
respuestas[4][14]="Sólo requiere un conjunto de sentencias";
respuestas[4][15]="JavaScript no permite bloques de código";
respuestas[4][16]="Siempre se definen con comillas dobles";
respuestas[4][17]="Se definen con comillas dobles o simples al inicio y al final";
respuestas[4][18]="No pueden tener caracteres especiales";
respuestas[4][19]="Si siempre se definen con comillas simples";
respuestas[4][20]="Siempre requieren el mismo tipo de datos";
respuestas[4][21]="Tienen una forma abreviada";
respuestas[4][22]="Sólo pueden trabajar con cadenas de caracteres";
respuestas[4][23]="No están soportados en el lenguaje";
respuestas[4][24]="Tienen una forma abreviada";
respuestas[4][25]="No están soportada por el lenguaje";
respuestas[4][26]="Permiten comparar el valor de tipo";
respuestas[4][27]="Ninguna de las anteriores es correcta";
respuestas[4][28]="No se pueden utilizar en sentencias condicionales";
respuestas[4][29]="Devuelven verdadero o falso";
respuestas[4][30]="No se pueden utilizar en los bucles";
respuestas[4][31]="Ninguna las anteriores es correcta";
respuestas[4][32]="No están soportadas en JavaScript";
respuestas[4][33]="No disponen del operador negación";
respuestas[4][34]="Ofrecen un operador AND";
respuestas[4][35]="Ninguna las anteriores es correcta";
respuestas[4][36]="Es una sentencia de iteración";
respuestas[4][37]="Va acompañada siempre de una parte else";
respuestas[4][38]="No se puede anidar";
respuestas[4][39]="Es una sentencia de condición";

preguntas[4][0]="En JavaScript las palabras reservadas…";
preguntas[4][1]="En JavaScript una palabra reservada es…";
preguntas[4][2]="Las sentencias en JavaScript…";
preguntas[4][3]="Un bloque de código…";
preguntas[4][4]="Las cadenas de caracteres…";
preguntas[4][5]="En JavaScript, los operadores aritméticos…";
preguntas[4][6]="Los operadores de comparación en JavaScript…";
preguntas[4][7]="Los operadores lógicos…";
preguntas[4][8]="Las operaciones a nivel de bit…";
preguntas[4][9]="La sentencia if…";

respuestasCorrectas[4][0]="Ninguna de las anteriores es correcta";
respuestasCorrectas[4][1]="if…else";
respuestasCorrectas[4][2]="Se separan utilizando ;";
respuestasCorrectas[4][3]="Sólo requiere un conjunto de sentencias";
respuestasCorrectas[4][4]="Pueden tener caracteres especiales";
respuestasCorrectas[4][5]="Tienen una forma abreviada";
respuestasCorrectas[4][6]="Permiten comparar el valor de tipo";
respuestasCorrectas[4][7]="Devuelven verdadero o falso";
respuestasCorrectas[4][8]="Ofrecen un operador AND";
respuestasCorrectas[4][9]="Es una sentencia de condición";

//Tema 5
respuestas[5][0]="Se puede visualizar en todas las versiones de HTML";
respuestas[5][1]="No está soportado en HTML5";
respuestas[5][2]="Aumenta la seguridad de una web";
respuestas[5][3]="Permite crear páginas adaptativas";
respuestas[5][4]="No es estándar";
respuestas[5][5]="Se puede utilizar desde JavaScript";
respuestas[5][6]="No permite añadir elementos dinámicamente";
respuestas[5][7]="Requiere recargar la página para añadir elementos";
respuestas[5][8]="Requiere de una etiqueta '<frameset>";
respuestas[5][9]="Introduce una opción para no visualizar frames";
respuestas[5][10]="No puede definir cuerpo de documento en la web principal";
respuestas[5][11]="Todas las anteriores son correctas";
respuestas[5][12]="No es un estándar de JavaScript";
respuestas[5][13]="Suele requerir la detección de un contenedor";
respuestas[5][14]="No es posible a través de JavaScript";
respuestas[5][15]="Ninguna de las anteriores es correcta";
respuestas[5][16]="Es más lento que el de XML";
respuestas[5][17]="Representa la web como un árbol";
respuestas[5][18]="No permite borrar elementos";
respuestas[5][19]="Ninguna de las anteriores es correcta";
respuestas[5][20]="Permite añadir elementos";
respuestas[5][21]="Permite modificar elementos";
respuestas[5][22]="Permite borrar elementos";
respuestas[5][23]="Todas las anteriores son correctas";
respuestas[5][24]="Se pueden ampliar";
respuestas[5][25]="Son fijas y no pueden ser modificadas";
respuestas[5][26]="Requieren de la definición de un objeto para poder utilizarse";
respuestas[5][27]="Ninguna de las anteriores correcta";
respuestas[5][28]="Existen objetos nativos";
respuestas[5][29]="El usuario no puede definir nuevos objetos";
respuestas[5][30]="Los objetos no pueden tener métodos";
respuestas[5][31]="Ninguna de las anteriores es correcta";
respuestas[5][32]="Es posible a través de HTML";
respuestas[5][33]="No se puede realizar desde un frame";
respuestas[5][34]="Se puede realizar a través de JavaScript";
respuestas[5][35]="Ninguna de las anteriores es correcta";
respuestas[5][36]="Permite la interacción con la pantalla del usuario";
respuestas[5][37]="Permite el acceso al disco duro de la máquina";
respuestas[5][38]="No permite manejar almacenamiento";
respuestas[5][39]="Ninguna de las anteriores es correcta";

preguntas[5][0]="La utilización de frames…";
preguntas[5][1]="El DOM HTML…";
preguntas[5][2]="La utilización de frames…";
preguntas[5][3]="La generación de código HTML…";
preguntas[5][4]="El DOM HTML…";
preguntas[5][5]="La modificación de un documento HTML dinámicamente…";
preguntas[5][6]="Las funciones nativas de JavaScript…";
preguntas[5][7]="En JavaScript…";
preguntas[5][8]="La interacción con el navegador…";
preguntas[5][9]="El BOM HTML…";

respuestasCorrectas[5][0]="No está soportado en HTML5";
respuestasCorrectas[5][1]="Se puede utilizar desde JavaScript";
respuestasCorrectas[5][2]="Todas las anteriores son correctas";
respuestasCorrectas[5][3]="Suele requerir la detección de un contenedor";
respuestasCorrectas[5][4]="Representa la web como un árbol";
respuestasCorrectas[5][5]="Todas las anteriores son correctas";
respuestasCorrectas[5][6]="Son fijas y no pueden ser modificadas";
respuestasCorrectas[5][7]="Existen objetos nativos";
respuestasCorrectas[5][8]="Se puede realizar a través de JavaScript";
respuestasCorrectas[5][9]="Permite la interacción con la pantalla del usuario";

//Tema 6
respuestas[6][0]="No permite crear objetos";
respuestas[6][1]="No proporciona colecciones";
respuestas[6][2]="Posee objetos nativos";
respuestas[6][3]="Ninguna de las anteriores es correcta";
respuestas[6][4]="Es más complicada que en otros lenguajes";
respuestas[6][5]="Funciona mediante punteros";
respuestas[6][6]="Funciona mediante clave-valor";
respuestas[6][7]="No está soportada";
respuestas[6][8]="No pueden tener propiedades";
respuestas[6][9]="Permiten la invocación de métodos";
respuestas[6][10]="Requieren siempre la utilización de la palabra reservada New";
respuestas[6][11]="Son muy lentos";
respuestas[6][12]="No pueden definir métodos";
respuestas[6][13]="Pueden tener métodos y propiedades";
respuestas[6][14]="No pueden tener propiedades";
respuestas[6][15]="Ninguna de las anteriores es correcta";
respuestas[6][16]="Podemos utilizar un objeto nativo";
respuestas[6][17]="No está soportado en el lenguaje";
respuestas[6][18]="Es necesario definirlo manualmente";
respuestas[6][19]="Dispone de pocos métodos";
respuestas[6][20]="Hay que implementar un método nuevo";
respuestas[6][21]="No es posible consultar el tamaño";
respuestas[6][22]="Se utiliza el atributo length";
respuestas[6][23]="Ninguna de las anteriores es correcta";
respuestas[6][24]="No tiene método de ordenación";
respuestas[6][25]="Posee métodos de ordenación ascendente y descendente";
respuestas[6][26]="No permite obtener fragmentos de la lista";
respuestas[6][27]="Ninguna de las anteriores es correcta";
respuestas[6][28]="Solo podemos consultar los datos";
respuestas[6][29]="Podemos consultar y modificar los datos";
respuestas[6][30]="Una vez creada la lista no podemos añadir nuevos elementos";
respuestas[6][31]="Ninguna de las anteriores es correcta";
respuestas[6][32]="Siempre hay que utilizar un bucle while";
respuestas[6][33]="Siempre hay que utilizar un bucle for";
respuestas[6][34]="Se ofrece mecanismos especiales para los arrays";
respuestas[6][35]="Ninguna de las anteriores es correcta";
respuestas[6][36]="Se utiliza el método splice";
respuestas[6][37]="Se utiliza el método sort";
respuestas[6][38]="Se utiliza el método pop";
respuestas[6][39]="Ninguna de las anteriores es correcta";

preguntas[6][0]="El lenguaje de programación JavaScript…";
preguntas[6][1]="La orientación objetos en JavaScript..";
preguntas[6][2]="Los objetos en JavaScript..";
preguntas[6][3]="Los objetos en JavaScript..";
preguntas[6][4]="Al utilizar un array en JavaScript..";
preguntas[6][5]="Para consultar la longitud de un array en JavaScript..";
preguntas[6][6]="El API de JavaScript para la utilización de listas..";
preguntas[6][7]="Al utilizar una lista en JavaScript..";
preguntas[6][8]="Para iterar sobre una lista en JavaScript..";
preguntas[6][9]="Para obtener una porción de un array..";

respuestasCorrectas[6][0]="Posee objetos nativos";
respuestasCorrectas[6][1]="Funciona mediante clave-valor";
respuestasCorrectas[6][2]="Permiten la invocación de métodos";
respuestasCorrectas[6][3]="Pueden tener métodos y propiedades";
respuestasCorrectas[6][4]="Podemos utilizar un objeto nativo";
respuestasCorrectas[6][5]="Se utiliza el atributo length";
respuestasCorrectas[6][6]="Posee métodos de ordenación ascendente y descendente";
respuestasCorrectas[6][7]="Podemos consultar y modificar los datos";
respuestasCorrectas[6][8]="Se ofrece mecanismos especiales para los arrays";
respuestasCorrectas[6][9]="Se utiliza el método splice";

//Tema x
respuestas[7][0]="RespuestaCorrecta";
respuestas[7][1]="Respuesta";
respuestas[7][2]="Respuesta";
respuestas[7][3]="Respuesta";
respuestas[7][4]="RespuestaCorrecta";
respuestas[7][5]="Respuesta";
respuestas[7][6]="Respuesta";
respuestas[7][7]="Respuesta";
respuestas[7][8]="RespuestaCorrecta";
respuestas[7][9]="Respuesta";
respuestas[7][10]="Respuesta";
respuestas[7][11]="Respuesta";
respuestas[7][12]="RespuestaCorrecta";
respuestas[7][13]="Respuesta";
respuestas[7][14]="Respuesta";
respuestas[7][15]="Respuesta";
respuestas[7][16]="RespuestaCorrecta";
respuestas[7][17]="Respuesta";
respuestas[7][18]="Respuesta";
respuestas[7][19]="Respuesta";
respuestas[7][20]="RespuestaCorrecta";
respuestas[7][21]="Respuesta";
respuestas[7][22]="Respuesta";
respuestas[7][23]="Respuesta";
respuestas[7][24]="RespuestaCorrecta";
respuestas[7][25]="Respuesta";
respuestas[7][26]="Respuesta";
respuestas[7][27]="Respuesta";
respuestas[7][28]="RespuestaCorrecta";
respuestas[7][29]="Respuesta";
respuestas[7][30]="Respuesta";
respuestas[7][31]="Respuesta";
respuestas[7][32]="RespuestaCorrecta";
respuestas[7][33]="Respuesta";
respuestas[7][34]="Respuesta";
respuestas[7][35]="Respuesta";
respuestas[7][36]="RespuestaCorrecta";
respuestas[7][37]="Respuesta";
respuestas[7][38]="Respuesta";
respuestas[7][39]="Respuesta";

preguntas[7][0]="Pregunta";
preguntas[7][1]="Pregunta";
preguntas[7][2]="Pregunta";
preguntas[7][3]="Pregunta";
preguntas[7][4]="Pregunta";
preguntas[7][5]="Pregunta";
preguntas[7][6]="Pregunta";
preguntas[7][7]="Pregunta";
preguntas[7][8]="Pregunta";
preguntas[7][9]="Pregunta";

respuestasCorrectas[7][0]="RespuestaCorrecta";
respuestasCorrectas[7][2]="RespuestaCorrecta";
respuestasCorrectas[7][1]="RespuestaCorrecta";
respuestasCorrectas[7][3]="RespuestaCorrecta";
respuestasCorrectas[7][4]="RespuestaCorrecta";
respuestasCorrectas[7][5]="RespuestaCorrecta";
respuestasCorrectas[7][6]="RespuestaCorrecta";
respuestasCorrectas[7][7]="RespuestaCorrecta";
respuestasCorrectas[7][8]="RespuestaCorrecta";
respuestasCorrectas[7][9]="RespuestaCorrecta";

var tema = 1;
var newI = 0;
var newJ = 1;
var aux = 0;
var arrTemas = []

var intCorrectas = []
var intRespuestas = []

addEventListener("load",function Start(){
    for(var i = 0; i < 30; i++){
        if (newI == 9){
            newI = 1
            
        }
        else newI++;
        tema = Math.floor(Math.random()*7)+1
        arrTemas.push(tema)
        document.getElementsByClassName("titlePregunta")[i].innerHTML = i+1 + ". " + preguntas[tema][newI];
        
        
        
        for(var j = 1; j < 5; j++){
            document.getElementsByTagName("label")[newJ].firstElementChild.innerHTML = respuestas[tema][(newI*4)+j-1];
            newJ++;
            
        }
        
    }
    newI = 2
    
    
    newJ = 1
    for(var i = 2; i < 32; i++){
        for(var k = aux; k < 4+aux; k++){
           //console.log(respuestasCorrectas[arrTemas[i-2]][newI-1]);
            if(document.getElementsByTagName("label")[newJ].firstElementChild.innerHTML == respuestasCorrectas[arrTemas[i-2]][newI-1]){
                document.getElementsByTagName("label")[newJ].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(newJ)
                    //console.log(newJ)
                }
                else {
                    intCorrectas.push(newJ - 4*(i-2))
                    //console.log(newJ - 4*(i-2))
                }
            }
            newJ++
            //console.log((k-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[k].firstElementChild.innerHTML + '-' + respuestasCorrectas[tema][i-2])
        }
        if (newI == 10){
            newI = 2
            
        }
        else newI++;
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
    for(var i = 0; i < 30;i++){
        
        if(intRespuestas[i] == intCorrectas[i] && intRespuestas[i] != null){
            nota+= 0.333;
            console.log("acierto")
            
        }else if(intRespuestas[i] != intCorrectas[i] && intRespuestas[i] != null) {
            nota -= 0.111
            console.log("fallo")
        }else{
            console.log("saltada")
        }
    }
    document.getElementById("nota").innerHTML = "<p>" + Math.floor(nota*100)/100 + "</p>"
    document.getElementById('btnBuscar').value = 'Mostrar';
}


/*
//Tema x
respuestas[x][0]="Respuesta";
respuestas[x][1]="Respuesta";
respuestas[x][2]="Respuesta";
respuestas[x][3]="Respuesta";
respuestas[x][4]="Respuesta";
respuestas[x][5]="Respuesta";
respuestas[x][6]="Respuesta";
respuestas[x][7]="Respuesta";
respuestas[x][8]="Respuesta";
respuestas[x][9]="Respuesta";
respuestas[x][10]="Respuesta";
respuestas[x][11]="Respuesta";
respuestas[x][12]="Respuesta";
respuestas[x][13]="Respuesta";
respuestas[x][14]="Respuesta";
respuestas[x][15]="Respuesta";
respuestas[x][16]="Respuesta";
respuestas[x][17]="Respuesta";
respuestas[x][18]="Respuesta";
respuestas[x][19]="Respuesta";
respuestas[x][20]="Respuesta";
respuestas[x][21]="Respuesta";
respuestas[x][22]="Respuesta";
respuestas[x][23]="Respuesta";
respuestas[x][24]="Respuesta";
respuestas[x][25]="Respuesta";
respuestas[x][26]="Respuesta";
respuestas[x][27]="Respuesta";
respuestas[x][28]="Respuesta";
respuestas[x][29]="Respuesta";
respuestas[x][30]="Respuesta";
respuestas[x][31]="Respuesta";
respuestas[x][32]="Respuesta";
respuestas[x][33]="Respuesta";
respuestas[x][34]="Respuesta";
respuestas[x][35]="Respuesta";
respuestas[x][36]="Respuesta";
respuestas[x][37]="Respuesta";
respuestas[x][38]="Respuesta";
respuestas[x][39]="Respuesta";

preguntas[x][0]="Pregunta";
preguntas[x][1]="Pregunta";
preguntas[x][2]="Pregunta";
preguntas[x][3]="Pregunta";
preguntas[x][4]="Pregunta";
preguntas[x][5]="Pregunta";
preguntas[x][6]="Pregunta";
preguntas[x][7]="Pregunta";
preguntas[x][8]="Pregunta";
preguntas[x][9]="Pregunta";

respuestasCorrectas[x][0]="Respuesta";
respuestasCorrectas[x][1]="Respuesta";
respuestasCorrectas[x][2]="Respuesta";
respuestasCorrectas[x][3]="Respuesta";
respuestasCorrectas[x][4]="Respuesta";
respuestasCorrectas[x][5]="Respuesta";
respuestasCorrectas[x][6]="Respuesta";
respuestasCorrectas[x][7]="Respuesta";
respuestasCorrectas[x][8]="Respuesta";
respuestasCorrectas[x][9]="Respuesta";
    */