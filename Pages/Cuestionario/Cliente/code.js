const respuestasCliente = new Array(8);
for(var i = 0; i < respuestasCliente.length; i++){
    respuestasCliente[i] = new Array(39)
    
}

const preguntasCliente = new Array(8)
for(var i = 0; i < preguntasCliente.length; i++){
    preguntasCliente[i] = new Array(9)
}

var intCorrectas = []
var intrespuestasCliente = []

const respuestasClienteCorrectas = new Array(8)
for(var i = 0; i < respuestasClienteCorrectas.length; i++){
    respuestasClienteCorrectas[i] = new Array(9)
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
respuestasCliente[1][12]= "Permite que el servidor envíe peticiones al ";
respuestasCliente[1][13]= "Se basa en la resolución de peticiones en el ";
respuestasCliente[1][14]= "Se centra en el envío de peticiones del ";
respuestasCliente[1][15]= "No se puede utilizar en contextos web";
respuestasCliente[1][16]= "Se introduce una capa de seguridad adicional a HTTP";
respuestasCliente[1][17]= "Se utiliza una pila de protocolos totalmente diferente a HTTP";
respuestasCliente[1][18]= "Nos apoyamos en SSH";
respuestasCliente[1][19]= "Ninguna de las anteriores es correcta";
respuestasCliente[1][20]= "El front-end se refiere al servidor";
respuestasCliente[1][21]= "El front-end se refiere al ";
respuestasCliente[1][22]= "El back-end se refiere al ";
respuestasCliente[1][23]= "El  realiza tareas pesadas";
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
preguntasCliente[1][1] = "En la arquitectura /servidor…"
preguntasCliente[1][2] = "Una URL…"
preguntasCliente[1][3] = "La arquitectura /servidor…"
preguntasCliente[1][4] = "Al utilizar HTTPS…"
preguntasCliente[1][5] = "En una arquitectura /servidor…"
preguntasCliente[1][6] = "Una URI…"
preguntasCliente[1][7] = "Al realizar una petición GET…"
preguntasCliente[1][8] = "El nivel de red…"
preguntasCliente[1][9] = "SSH se utiliza…"

respuestasClienteCorrectas[1][0]= "Forma parte del nivel de aplicación";
respuestasClienteCorrectas[1][1]= "Puede requerir máquinas con altas especificaciones hardware";
respuestasClienteCorrectas[1][2]= "Permite definir una dirección de una página web";
respuestasClienteCorrectas[1][3]= "Se centra en el envío de peticiones del ";
respuestasClienteCorrectas[1][4]= "Se introduce una capa de seguridad adicional a HTTP";
respuestasClienteCorrectas[1][5]= "El front-end se refiere al ";
respuestasClienteCorrectas[1][6]= "Identifica a un recurso en la red sin ninguna duda";
respuestasClienteCorrectas[1][7]= "Ninguna de las anteriores es correcta";
respuestasClienteCorrectas[1][8]= "Incluye el protocolo IP";
respuestasClienteCorrectas[1][9]= "Para gestionar una máquina remota";

//Tema 2
respuestasCliente[2][0]=" Únicamente permite la utilización del lenguaje HTML";
respuestasCliente[2][1]="Puede combinar HTML con otros lenguajes";
respuestasCliente[2][2]="  Permite la utilización de cualquier conjunto de etiquetas";
respuestasCliente[2][3]=" Ninguna de las anteriores es correcta";
respuestasCliente[2][4]="No se puede visualizar en un navegador";
respuestasCliente[2][5]="No es un lenguaje de marcado.";
respuestasCliente[2][6]="Tiene un conjunto de etiquetas cerrado";
respuestasCliente[2][7]="Es totalmente estándar";
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
respuestasCliente[2][24]="No se puede utilizar el ";
respuestasCliente[2][25]="Facilita el desarrollo web en ";
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
preguntasCliente[2][3]="En el desarrollo web en …";
preguntasCliente[2][4]="En el desarrollo web …";
preguntasCliente[2][5]="En el desarrollo web…";
preguntasCliente[2][6]="Un framework…";
preguntasCliente[2][7]="En HTML las etiquetas pueden ser…";
preguntasCliente[2][8]="Un documento HTML…";
preguntasCliente[2][9]="En el desarrollo web XML…";

respuestasClienteCorrectas[2][0]="Puede combinar HTML con otros lenguajes";
respuestasClienteCorrectas[2][1]="Tiene un conjunto de etiquetas cerrado";
respuestasClienteCorrectas[2][2]="Gestor de almacenamiento";
respuestasClienteCorrectas[2][3]="Ninguna de las anteriores correcta";
respuestasClienteCorrectas[2][4]="Se puede utilizar HTML";
respuestasClienteCorrectas[2][5]="JSON se utiliza para intercambiar datos";
respuestasClienteCorrectas[2][6]="Facilita el desarrollo web en ";
respuestasClienteCorrectas[2][7]="Ninguna de las anteriores es correcta";
respuestasClienteCorrectas[2][8]="Tiene cabecera y cuerpo";
respuestasClienteCorrectas[2][9]="Posee un conjunto de tecnologías a su alrededor";


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
respuestasCliente[3][13]="Se realiza a en el ";
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
respuestasCliente[3][32]="Sólo se puede ejecutar entornos web";
respuestasCliente[3][33]="En entornos web puede acceder al disco duro";
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

respuestasClienteCorrectas[3][0]="Se centra en temas de interacción";
respuestasClienteCorrectas[3][1]="Todas las anteriores son correctas";
respuestasClienteCorrectas[3][2]="A y C son correctas";
respuestasClienteCorrectas[3][3]="Se realiza a en el ";
respuestasClienteCorrectas[3][4]="La declaración de variables no requiere tipo";
respuestasClienteCorrectas[3][5]="Modifica la parte izquierda";
respuestasClienteCorrectas[3][6]="Puede requerir intervención del programador";
respuestasClienteCorrectas[3][7]="Se permiten comentario de línea y de bloque";
respuestasClienteCorrectas[3][8]="Puede utilizarse en contexto diferentes al web";
respuestasClienteCorrectas[3][9]="Se puede comenzar con un _";


//Tema 4
respuestasCliente[4][0]="Puede ser utilizadas como identificadores";
respuestasCliente[4][1]="Puede modificarse";
respuestasCliente[4][2]="Se escriben en mayúsculas";
respuestasCliente[4][3]="Ninguna de las anteriores es correcta";
respuestasCliente[4][4]="FUNCTION";
respuestasCliente[4][5]="For";
respuestasCliente[4][6]="_switch";
respuestasCliente[4][7]="If";
respuestasCliente[4][8]="Se separan utilizando :";
respuestasCliente[4][9]="Se separan utilizando ;";
respuestasCliente[4][10]="No requiere separador";
respuestasCliente[4][11]="Ninguna de las anteriores es correcta";
respuestasCliente[4][12]="Está formado por al menos una condición";
respuestasCliente[4][13]="Está formado por al menos un bucle";
respuestasCliente[4][14]="Sólo requiere un conjunto de sentencias";
respuestasCliente[4][15]="JavaScript no permite bloques de código";
respuestasCliente[4][16]="Siempre se definen con comillas dobles";
respuestasCliente[4][17]="Se definen con comillas dobles o simples al inicio y al final";
respuestasCliente[4][18]="No pueden tener caracteres especiales";
respuestasCliente[4][19]="Si siempre se definen con comillas simples";
respuestasCliente[4][20]="Siempre requieren el mismo tipo de datos";
respuestasCliente[4][21]="Tienen una forma abreviada";
respuestasCliente[4][22]="Sólo pueden trabajar con cadenas de caracteres";
respuestasCliente[4][23]="No están soportados en el lenguaje";
respuestasCliente[4][24]="Tienen una forma abreviada";
respuestasCliente[4][25]="No están soportada por el lenguaje";
respuestasCliente[4][26]="Permiten comparar el valor de tipo";
respuestasCliente[4][27]="RespNinguna de las anteriores es correctauesta";
respuestasCliente[4][28]="No se pueden utilizar en sentencias condicionales";
respuestasCliente[4][29]="Devuelven verdadero o falso";
respuestasCliente[4][30]="No se pueden utilizar en los bucles";
respuestasCliente[4][31]="Ninguna las anteriores es correcta";
respuestasCliente[4][32]="No están soportadas en JavaScript";
respuestasCliente[4][33]="No disponen del operador negación";
respuestasCliente[4][34]="Ofrecen un operador AND";
respuestasCliente[4][35]="Ninguna las anteriores es correcta";
respuestasCliente[4][36]="Es una sentencia de iteración";
respuestasCliente[4][37]="Va acompañada siempre de una parte else";
respuestasCliente[4][38]="No se puede anidar";
respuestasCliente[4][39]="Es una sentencia de condición";

preguntasCliente[4][0]="En JavaScript las palabras reservadas…";
preguntasCliente[4][1]="En JavaScript una palabra reservada es…";
preguntasCliente[4][2]="Las sentencias en JavaScript…";
preguntasCliente[4][3]="Un bloque de código…";
preguntasCliente[4][4]="Las cadenas de caracteres…";
preguntasCliente[4][5]="En JavaScript, los operadores aritméticos…";
preguntasCliente[4][6]="Los operadores de comparación en JavaScript…";
preguntasCliente[4][7]="Los operadores lógicos…";
preguntasCliente[4][8]="Las operaciones a nivel de bit…";
preguntasCliente[4][9]="La sentencia if…";

respuestasClienteCorrectas[4][0]="Ninguna de las anteriores es correcta";
respuestasClienteCorrectas[4][1]="if…else";
respuestasClienteCorrectas[4][2]="Se separan utilizando ;";
respuestasClienteCorrectas[4][3]="Sólo requiere un conjunto de sentencias";
respuestasClienteCorrectas[4][4]="Pueden tener caracteres especiales";
respuestasClienteCorrectas[4][5]="Tienen una forma abreviada";
respuestasClienteCorrectas[4][6]="Permiten comparar el valor de tipo";
respuestasClienteCorrectas[4][7]="Devuelven verdadero o falso";
respuestasClienteCorrectas[4][8]="Ofrecen un operador AND";
respuestasClienteCorrectas[4][9]="Es una sentencia de condición";

//Tema 5
respuestasCliente[5][0]="Se puede visualizar en todas las versiones de HTML";
respuestasCliente[5][1]="No está soportado en HTML5";
respuestasCliente[5][2]="Aumenta la seguridad de una web";
respuestasCliente[5][3]="Permite crear páginas adaptativas";
respuestasCliente[5][4]="No es estándar";
respuestasCliente[5][5]="Se puede utilizar desde JavaScript";
respuestasCliente[5][6]="No permite añadir elementos dinámicamente";
respuestasCliente[5][7]="Requiere recargar la página para añadir elementos";
respuestasCliente[5][8]="Requiere de una etiqueta <frameset>";
respuestasCliente[5][9]="Introduce una opción para no visualizar frames";
respuestasCliente[5][10]="No puede definir cuerpo de documento en la web principal";
respuestasCliente[5][11]="Todas las anteriores son correctas";
respuestasCliente[5][12]="No es un estándar de JavaScript";
respuestasCliente[5][13]="Suele requerir la detección de un contenedor";
respuestasCliente[5][14]="No es posible a través de JavaScript";
respuestasCliente[5][15]="Ninguna de las anteriores es correcta";
respuestasCliente[5][16]="Es más lento que el de XML";
respuestasCliente[5][17]="Representa la web como un árbol";
respuestasCliente[5][18]="No permite borrar elementos";
respuestasCliente[5][19]="Ninguna de las anteriores es correcta";
respuestasCliente[5][20]="Permite añadir elementos";
respuestasCliente[5][21]="Permite modificar elementos";
respuestasCliente[5][22]="Permite borrar elementos";
respuestasCliente[5][23]="Todas las anteriores son correctas";
respuestasCliente[5][24]="Se pueden ampliar";
respuestasCliente[5][25]="Son fijas y no pueden ser modificadas";
respuestasCliente[5][26]="Requieren de la definición de un objeto para poder utilizarse";
respuestasCliente[5][27]="Ninguna de las anteriores correcta";
respuestasCliente[5][28]="Existen objetos nativos";
respuestasCliente[5][29]="El usuario no puede definir nuevos objetos";
respuestasCliente[5][30]="Los objetos no pueden tener métodos";
respuestasCliente[5][31]="Ninguna de las anteriores es correcta";
respuestasCliente[5][32]="Es posible a través de HTML";
respuestasCliente[5][33]="No se puede realizar desde un frame";
respuestasCliente[5][34]="Se puede realizar a través de JavaScript";
respuestasCliente[5][35]="Ninguna de las anteriores es correcta";
respuestasCliente[5][36]="Permite la interacción con la pantalla del usuario";
respuestasCliente[5][37]="Permite el acceso al disco duro de la máquina";
respuestasCliente[5][38]="No permite manejar almacenamiento";
respuestasCliente[5][39]="Ninguna de las anteriores es correcta";

preguntasCliente[5][0]="La utilización de frames…";
preguntasCliente[5][1]="El DOM HTML…";
preguntasCliente[5][2]="La utilización de frames….";
preguntasCliente[5][3]="La generación de código HTML…";
preguntasCliente[5][4]="El DOM HTML…";
preguntasCliente[5][5]="La modificación de un documento HTML dinámicamente…";
preguntasCliente[5][6]="Las funciones nativas de JavaScript…";
preguntasCliente[5][7]="En JavaScript….";
preguntasCliente[5][8]="La interacción con el navegador…";
preguntasCliente[5][9]="El BOM HTML…";

respuestasClienteCorrectas[5][0]="No está soportado en HTML5";
respuestasClienteCorrectas[5][1]="Se puede utilizar desde JavaScript";
respuestasClienteCorrectas[5][2]="Todas las anteriores son correctas";
respuestasClienteCorrectas[5][3]="Suele requerir la detección de un contenedor";
respuestasClienteCorrectas[5][4]="Representa la web como un árbol";
respuestasClienteCorrectas[5][5]="Todas las anteriores son correctas";
respuestasClienteCorrectas[5][6]="Son fijas y no pueden ser modificadas";
respuestasClienteCorrectas[5][7]="Existen objetos nativos";
respuestasClienteCorrectas[5][8]="Se puede realizar a través de JavaScript";
respuestasClienteCorrectas[5][9]="Permite la interacción con la pantalla del usuario";

//Tema 6
respuestasCliente[6][0]="No permite crear objetos";
respuestasCliente[6][1]="No proporciona colecciones";
respuestasCliente[6][2]="Posee objetos nativos";
respuestasCliente[6][3]="Ninguna de las anteriores es correcta";
respuestasCliente[6][4]="Es más complicada que en otros lenguajes";
respuestasCliente[6][5]="Funciona mediante punteros";
respuestasCliente[6][6]="Funciona mediante clave-valor";
respuestasCliente[6][7]="No está soportada";
respuestasCliente[6][8]="No pueden tener propiedades";
respuestasCliente[6][9]="Permiten la invocación de métodos";
respuestasCliente[6][10]="Requieren siempre la utilización de la palabra reservada New";
respuestasCliente[6][11]="Son muy lentos";
respuestasCliente[6][12]="No pueden definir métodos";
respuestasCliente[6][13]="Pueden tener métodos y propiedades";
respuestasCliente[6][14]="No pueden tener propiedades";
respuestasCliente[6][15]="Ninguna de las anteriores es correcta";
respuestasCliente[6][16]="Podemos utilizar un objeto nativo";
respuestasCliente[6][17]="No está soportado en el lenguaje";
respuestasCliente[6][18]="Es necesario definirlo manualmente";
respuestasCliente[6][19]="Dispone de pocos métodos";
respuestasCliente[6][20]="Hay que implementar un método nuevo";
respuestasCliente[6][21]="No es posible consultar el tamaño";
respuestasCliente[6][22]="Se utiliza el atributo length";
respuestasCliente[6][23]="Ninguna de las anteriores es correcta";
respuestasCliente[6][24]="No tiene método de ordenación";
respuestasCliente[6][25]="Posee métodos de ordenación ascendente y descendente";
respuestasCliente[6][26]="No permite obtener fragmentos de la lista";
respuestasCliente[6][27]="Ninguna de las anteriores es correcta";
respuestasCliente[6][28]="Solo podemos consultar los datos";
respuestasCliente[6][29]="Podemos consultar y modificar los datos";
respuestasCliente[6][30]="Una vez creada la lista no podemos añadir nuevos elementos";
respuestasCliente[6][31]="Ninguna de las anteriores es correcta";
respuestasCliente[6][32]="Siempre hay que utilizar un bucle while";
respuestasCliente[6][33]="Siempre hay que utilizar un bucle for";
respuestasCliente[6][34]="Se ofrece mecanismos especiales para los arrays";
respuestasCliente[6][35]="Ninguna de las anteriores es correcta";
respuestasCliente[6][36]="Se utiliza el método splice";
respuestasCliente[6][37]="Se utiliza el método sort";
respuestasCliente[6][38]="Se utiliza el método pop";
respuestasCliente[6][39]="Ninguna de las anteriores es correcta";

preguntasCliente[6][0]="El lenguaje de programación JavaScript…";
preguntasCliente[6][1]="La orientación objetos en JavaScript...";
preguntasCliente[6][2]="Los objetos en JavaScript...";
preguntasCliente[6][3]="Los objetos en JavaScript...";
preguntasCliente[6][4]="Al utilizar un array en JavaScript...";
preguntasCliente[6][5]="Para consultar la longitud de un array en JavaScript...";
preguntasCliente[6][6]="El API de JavaScript para la utilización de listas...";
preguntasCliente[6][7]="Al utilizar una lista en JavaScript...";
preguntasCliente[6][8]="Para iterar sobre una lista en JavaScript...";
preguntasCliente[6][9]="Para obtener una porción de un array...";

respuestasClienteCorrectas[6][0]="Posee objetos nativos";
respuestasClienteCorrectas[6][1]="Funciona mediante clave-valor";
respuestasClienteCorrectas[6][2]="Permiten la invocación de métodos";
respuestasClienteCorrectas[6][3]="Pueden tener métodos y propiedades";
respuestasClienteCorrectas[6][4]="Podemos utilizar un objeto nativo";
respuestasClienteCorrectas[6][5]="Se utiliza el atributo length";
respuestasClienteCorrectas[6][6]="Posee métodos de ordenación ascendente y descendente";
respuestasClienteCorrectas[6][7]="Podemos consultar y modificar los datos";
respuestasClienteCorrectas[6][8]="Se ofrece mecanismos especiales para los arrays";
respuestasClienteCorrectas[6][9]="Se utiliza el método splice";

var tema = 1;
console.log(tema);

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
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasClienteCorrectas[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasClienteCorrectas[tema][i-2])

        }

        aux+=4
        
    }
    
})

function Select(a,b){
    intrespuestasCliente[a] = b
    console.log(a + "-" + intrespuestasCliente[a] + "," + intCorrectas[a])
}

function Finalizar(){
    document.getElementById('btnContainerFlotante').style.display = 'flex'
    var nota = 0;
    for(var i = 0; i < 10;i++){
        
        if(intrespuestasCliente[i] == intCorrectas[i]){
            nota++;
        }
    }
    document.getElementById("nota").innerHTML = "<p>" + nota + "</p>"
    document.getElementById('btnBuscar').value = 'Mostrar';
}


/*
//Tema x
respuesta[x][0]="RespuestaCorrecta";
respuesta[x][1]="Respuesta";
respuesta[x][2]="Respuesta";
respuesta[x][3]="Respuesta";
respuesta[x][4]="RespuestaCorrecta";
respuesta[x][5]="Respuesta";
respuesta[x][6]="Respuesta";
respuesta[x][7]="Respuesta";
respuesta[x][8]="RespuestaCorrecta";
respuesta[x][9]="Respuesta";
respuesta[x][10]="Respuesta";
respuesta[x][11]="Respuesta";
respuesta[x][12]="RespuestaCorrecta";
respuesta[x][13]="Respuesta";
respuesta[x][14]="Respuesta";
respuesta[x][15]="Respuesta";
respuesta[x][16]="RespuestaCorrecta";
respuesta[x][17]="Respuesta";
respuesta[x][18]="Respuesta";
respuesta[x][19]="Respuesta";
respuesta[x][20]="RespuestaCorrecta";
respuesta[x][21]="Respuesta";
respuesta[x][22]="Respuesta";
respuesta[x][23]="Respuesta";
respuesta[x][24]="RespuestaCorrecta";
respuesta[x][25]="Respuesta";
respuesta[x][26]="Respuesta";
respuesta[x][27]="Respuesta";
respuesta[x][28]="RespuestaCorrecta";
respuesta[x][29]="Respuesta";
respuesta[x][30]="Respuesta";
respuesta[x][31]="Respuesta";
respuesta[x][32]="RespuestaCorrecta";
respuesta[x][33]="Respuesta";
respuesta[x][34]="Respuesta";
respuesta[x][35]="Respuesta";
respuesta[x][36]="RespuestaCorrecta";
respuesta[x][37]="Respuesta";
respuesta[x][38]="Respuesta";
respuesta[x][39]="Respuesta";

pregunta[x][0]="Pregunta";
pregunta[x][1]="Pregunta";
pregunta[x][2]="Pregunta";
pregunta[x][3]="Pregunta";
pregunta[x][4]="Pregunta";
pregunta[x][5]="Pregunta";
pregunta[x][6]="Pregunta";
pregunta[x][7]="Pregunta";
pregunta[x][8]="Pregunta";
pregunta[x][9]="Pregunta";

respuestaCorrectas[x][0]="RespuestaCorrecta";
respuestaCorrectas[x][1]="RespuestaCorrecta";
respuestaCorrectas[x][2]="RespuestaCorrecta";
respuestaCorrectas[x][3]="RespuestaCorrecta";
respuestaCorrectas[x][4]="RespuestaCorrecta";
respuestaCorrectas[x][5]="RespuestaCorrecta";
respuestaCorrectas[x][6]="RespuestaCorrecta";
respuestaCorrectas[x][7]="RespuestaCorrecta";
respuestaCorrectas[x][8]="RespuestaCorrecta";
respuestaCorrectas[x][9]="RespuestaCorrecta";
    */