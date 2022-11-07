const respuestas = new Array(8);
for(var i = 0; i < respuestas.length; i++){
    respuestas[i] = new Array(39)
    
}

const preguntas = new Array(8)
for(var i = 0; i < preguntas.length; i++){
    preguntas[i] = new Array(9)
}

var intCorrectas = []
var intRespuestas = []

const respuestasCorrectas = new Array(8)
for(var i = 0; i < respuestasCorrectas.length; i++){
    respuestasCorrectas[i] = new Array(9)
}

    
respuestas[1][0]= "Se modela la petición HTTP que se envía al ";
respuestas[1][1]= "El  realiza una búsqueda del recurso solicitado";
respuestas[1][2]= "Se introduce una url en el navegador, del servicio o página que se desea visitar";
respuestas[1][3]= "Se accede al cmd";
respuestas[1][4]= "Estáticas";
respuestas[1][5]= "HTML";
respuestas[1][6]= "Dinámicas";
respuestas[1][7]= "Ninguna de las anteriores";
respuestas[1][8]= "En ningún tipo de capa";
respuestas[1][9]= "Capa o nivel de cliente ";
respuestas[1][10]= "Capa intermedia";
respuestas[1][11]= "Capa de acceso a datos";
respuestas[1][12]= "Permiten ser embebidos con el código HTML";
respuestas[1][13]= "No existen";
respuestas[1][14]= "Se utilizan para la programación orientada a objetos";
respuestas[1][15]= "Permiten el desarrollo de interfaces en dispositivo Android";
respuestas[1][16]= "GET y SET";
respuestas[1][17]= "POST Y GET";
respuestas[1][18]= "GET";
respuestas[1][19]= "POST";
respuestas[1][20]= "Java";
respuestas[1][21]= "JavaScript";
respuestas[1][22]= "PHP";
respuestas[1][23]= "Ninguna de las anteriores";
respuestas[1][24]= "Node.js ";
respuestas[1][25]= "TypeScript";
respuestas[1][26]= "XAMPP";
respuestas[1][27]= "Text Wrangler";
respuestas[1][28]= "-g typescript ";
respuestas[1][29]= "npm --install ";
respuestas[1][30]= "npm --install  -g typescript";
respuestas[1][31]= "RespNinguna de las anterioresuesta";
respuestas[1][32]= "Los ficheros .php se sitúan dentro de htdocs";
respuestas[1][33]= "Las etiquetas utilizadas para embeber el código php son <?php y php?>";
respuestas[1][34]= "PHP no es soportado como XAMPP";
respuestas[1][35]= "Todas son incorrectas";
respuestas[1][36]= "Esto es imposible";
respuestas[1][37]= "NodeXAMPP";
respuestas[1][38]= "Typescript";
respuestas[1][39]= "Node.js";

preguntas[1][0] = "¿Qué acción es la primera en llevarse a cabo independientemente de si estamos en una página web estática o dinámica?";
preguntas[1][1] = "¿Qué tipo de páginas muestran un contenido distinto en función de los valores de la petición?";
preguntas[1][2] = "¿En cuál de las siguientes capas se ubica la funcionalidad de la aplicación?";
preguntas[1][3] = "Los lenguajes scripting…";
preguntas[1][4] = "¿Qué verbos utiliza el método HTTP?";
preguntas[1][5] = "La arquitecta Node.js ¿qué lenguaje permite utilizar para el desarrollo del lado ?";
preguntas[1][6] = "¿Qué tecnología permite incorporar al desarrollo de JavaScript funcionalidades para la detección de errores antes de ser visualizado en el navegador?";
preguntas[1][7] = "¿Cómo se puede instalar Typescript a través de línea de comandos?";
preguntas[1][8] = "Selecciona la respuesta correcta sobre la implementación de una página básica utilizando php con XAMPP";
preguntas[1][9] = "¿ Qué tecnología permite el desarrollo de aplicaciones en el lado del ?";

respuestasCorrectas[1][0]= "Se introduce una url en el navegador, del servicio o página que se desea visitar";
respuestasCorrectas[1][1]= "Dinámicas";
respuestasCorrectas[1][2]= "Capa intermedia";
respuestasCorrectas[1][3]= "Permiten ser embebidos con el código HTML";
respuestasCorrectas[1][4]= "POST Y GET";
respuestasCorrectas[1][5]= "JavaScript";
respuestasCorrectas[1][6]= "TypeScript";
respuestasCorrectas[1][7]= "Ninguna de las anteriores";
respuestasCorrectas[1][8]= "Los ficheros .php se sitúan dentro de htdocs";
respuestasCorrectas[1][9]= "Node.js";


//Tema 2
respuestas[2][0]="HTTP";
respuestas[2][1]="PHP";
respuestas[2][2]="JSP";
respuestas[2][3]="B y C son correctas ";
respuestas[2][4]="Contenedores estáticos";
respuestas[2][5]="Contenedores de elementos";
respuestas[2][6]="Contenedores de servlets";
respuestas[2][7]="Navegadores de servlets";
respuestas[2][8]="Marcado de procedimiento";
respuestas[2][9]="Marcado descriptivo";
respuestas[2][10]="Marcado de presentación";
respuestas[2][11]="Ninguna de las anteriores";
respuestas[2][12]=" <?php ?>";
respuestas[2][13]="<?php php>";
respuestas[2][14]="<% %>";
respuestas[2][15]="No se utiliza ningún tipo de marcas";
respuestas[2][16]="phpinfo";
respuestas[2][17]="php.ini";
respuestas[2][18]="htdocs";
respuestas[2][19]="Ninguna de las anteriores";
respuestas[2][20]="$var='Hola Mundo'; ";
respuestas[2][21]="$_var='Hola Mundo'; ";
respuestas[2][22]="$var9='Hola Mundo'; ";
respuestas[2][23]="$9var='Hola Mundo'; ";
respuestas[2][24]="var=‘Hola Mundo’;";
respuestas[2][25]="$999=‘Hola Mundo’; ";
respuestas[2][26]="$var9=‘Hola Mundo’ ";
respuestas[2][27]="$var=‘Hola Mundo’; ";
respuestas[2][28]="Estáticas";
respuestas[2][29]="Variables";
respuestas[2][30]="Constantes";
respuestas[2][31]="Ninguna de las anteriores";
respuestas[2][32]="Float";
respuestas[2][33]="Integer";
respuestas[2][34]="Boolean";
respuestas[2][35]="Todas son incorrectas";
respuestas[2][36]="Esto es imposible";
respuestas[2][37]="intval() ";
respuestas[2][38]="floatval()";
respuestas[2][39]="strval() ";

preguntas[2][0]="¿Cuáles de los siguientes lenguajes son claves para el desarrollo en entorno servidor?";
preguntas[2][1]="¿Qué elemento permite tratar a los Servlet de forma dinámica, recibiendo peticiones de páginas web y redireccionándolas hacia el objeto Servlet encargado de su tratamiento?";
preguntas[2][2]="¿En cuál de los siguientes tipos de lenguajes de marcado las etiquetas no son visibles para el usuario final del documento ni para el desarrollador del mismo?";
preguntas[2][3]="¿Qué marcas se utilizan para la inclusión de lenguaje php en un fichero de desarrollo de sitio web?";
preguntas[2][4]="¿En qué fichero se recogen las directivas de configuración de PHP?";
preguntas[2][5]="¿Cuál de las siguientes sintaxis es incorrecta con respecto a la creación de variables en PHP?";
preguntas[2][6]="¿Cuál de las siguientes sintaxis es correcta con respecto a la creación de variables en PHP?";
preguntas[2][7]="¿Qué tipo de elemento se declara de la forma define (“PI”, 3.14)?";
preguntas[2][8]="¿Qué tipo de datos permiten la creación de números decimales?";
preguntas[2][9]="¿Cuál de las siguientes funciones permite convertir a cadena de texto cualquier variable que se le pasa por parámetro?";

respuestasCorrectas[2][0]="B y C son correctas ";
respuestasCorrectas[2][1]="Contenedores de servlets";
respuestasCorrectas[2][2]="Marcado de presentación";
respuestasCorrectas[2][3]=" <?php ?>";
respuestasCorrectas[2][4]="php.ini";
respuestasCorrectas[2][5]="$9var='Hola Mundo'; ";
respuestasCorrectas[2][6]="$var=‘Hola Mundo’; ";
respuestasCorrectas[2][7]="Constantes";
respuestasCorrectas[2][8]="Float";
respuestasCorrectas[2][9]="strval() ";

//Tema 3
respuestas[3][0]="Lineales";
respuestas[3][1]="Condicionales";
respuestas[3][2]="Bucles";
respuestas[3][3]="Todas son correctas";
respuestas[3][4]="Comparativa";
respuestas[3][5]="Creación de objeto";
respuestas[3][6]="Expresión de asignación";
respuestas[3][7]="Bucle";
respuestas[3][8]="Variables";
respuestas[3][9]="Estructuras de control";
respuestas[3][10]="Sentencias lineales";
respuestas[3][11]="Ninguna de las anteriores ";
respuestas[3][12]="Switch";
respuestas[3][13]="While";
respuestas[3][14]="Do-while";
respuestas[3][15]="Foreach";
respuestas[3][16]="Lineales";
respuestas[3][17]="Bucle";
respuestas[3][18]="Estructura de control";
respuestas[3][19]="Ninguna de las anteriores";
respuestas[3][20]=" If-else ";
respuestas[3][21]=" If";
respuestas[3][22]="Break";
respuestas[3][23]="Foreach";
respuestas[3][24]="continue;";
respuestas[3][25]="break; ";
respuestas[3][26]="sleep;";
respuestas[3][27]="stop;";
respuestas[3][28]="$arrayNumeros = array ( 1, 2, 3) ";
respuestas[3][29]=" $arrayNumeros = ( 1, 2, 3); ";
respuestas[3][30]="$arrayNumeros = array ( 1, 2, 3); ";
respuestas[3][31]="Ninguna de las anteriores";
respuestas[3][32]="$nombreArray[posicion]; ";
respuestas[3][33]="unset ($nombreArray); ";
respuestas[3][34]="unset ($nombreArray[posición]); ";
respuestas[3][35]="Todas son correctas";
respuestas[3][36]="/* */ ";
respuestas[3][37]="//";
respuestas[3][38]="#";
respuestas[3][39]="Todas con correctas";

preguntas[3][0]="¿Qué tipos de sentencias podemos diferenciar en el desarrollo con lenguajes de programación?";
preguntas[3][1]="¿Qué tipo de expresión sería la siguiente: $auxiliar1=$auxiliar2?";
preguntas[3][2]="¿Qué tipo de elementos permiten modificar el flujo de ejecución de las instrucciones de un programa?";
preguntas[3][3]="¿Qué tipo de estructura de control se ejecuta de forma lineal de arriba hacia abajo, y cuando encuentra una condición que se cumple ejecuta las acciones codificadas en ese bloque?";
preguntas[3][4]="¿Qué tipo de sentencias son: for, while o foreach?";
preguntas[3][5]="¿Cuál de las siguientes opciones permiten recorrer todas las posiciones de un array?";
preguntas[3][6]="¿Qué sentencia permite detener la ejecución del bucle o estructura de control dónde se encuentra implementado?";
preguntas[3][7]="¿Cuál de las siguientes sentencias para la creación de arrays es correcta?";
preguntas[3][8]="¿Cuál de las siguientes sentencias para el acceso a una posición de un array es correcta?";
preguntas[3][9]="¿Cuál de los siguientes delimitadores permiten incluir comentarios en PHP?";

respuestasCorrectas[3][0]="Todas son correctas";
respuestasCorrectas[3][1]="Expresión de asignación";
respuestasCorrectas[3][2]="Estructuras de control";
respuestasCorrectas[3][3]="Switch";
respuestasCorrectas[3][4]="Bucle";
respuestasCorrectas[3][5]="Foreach";
respuestasCorrectas[3][6]="break; ";
respuestasCorrectas[3][7]="$arrayNumeros = array ( 1, 2, 3); ";
respuestasCorrectas[3][8]="$nombreArray[posicion]; ";
respuestasCorrectas[3][9]="Todas son correctas";

//Tema 4
respuestas[4][0]="rand() ";
respuestas[4][1]="fecha()";
respuestas[4][2]="array()";
respuestas[4][3]="date()";
respuestas[4][4]="Pueden recibir parámetros de entrada";
respuestas[4][5]="Pueden no recibir parámetros de entrada";
respuestas[4][6]="Siempre utilizan un return para retornar un valor";
respuestas[4][7]="Pueden o no retornar un valor utilizando la palabra return";
respuestas[4][8]="Las funciones que reciben parámetros de entrada siempre utilizan return para devolver un valor de salida";
respuestas[4][9]="Suponen un fragmento de código reutilizable";
respuestas[4][10]="Las funciones que reciben parámetros de entrada nunca utilizan return para devolver un valor de salida";
respuestas[4][11]="Ninguna de las anteriores";
respuestas[4][12]="nombreFuncion(“Hola”);";
respuestas[4][13]="function nombreFuncion();";
respuestas[4][14]="nombreFunción()";
respuestas[4][15]="Todas son correctas";
respuestas[4][16]="function";
respuestas[4][17]="return";
respuestas[4][18]="divide";
respuestas[4][19]="exit";
respuestas[4][20]="GET";
respuestas[4][21]="POST";
respuestas[4][22]="RETURN";
respuestas[4][23]="HTTP";
respuestas[4][24]="*";
respuestas[4][25]="?";
respuestas[4][26]="&";
respuestas[4][27]=":";
respuestas[4][28]="VAR";
respuestas[4][29]="PHPINFO";
respuestas[4][30]="STDIO";
respuestas[4][31]="PHPINI";
respuestas[4][32]="METHOD";
respuestas[4][33]="ACTION";
respuestas[4][34]="STDIO";
respuestas[4][35]="FORM";
respuestas[4][36]="$_POST’nombreDato’]; ";
respuestas[4][37]="$_GET[‘nombreDato’] ";
respuestas[4][38]="Las dos anteriores son correctas";
respuestas[4][39]="Ninguna de las respuestas anteriores es correcta";

preguntas[4][0]="¿Qué función permite generar de forma automática la fecha o la hora actual?";
preguntas[4][1]="¿Cuál de las siguientes opciones es incorrecta con respecto a la creación de una función?";
preguntas[4][2]="¿Cuál de las siguientes opciones es correcta con respecto a la creación de una función?";
preguntas[4][3]="¿Cuál de las siguientes instrucciones es correcta con respecto a la llamada a una función desde un punto cualquiera del programa en PHP?";
preguntas[4][4]="¿Qué palabra permite devolver un valor como salida de una función?";
preguntas[4][5]="¿Qué método envía una petición HTTP de forma invisible al usuario?";
preguntas[4][6]="Cuando se utiliza el método GET para el envío de peticiones con el protocolo HTTP, ¿qué elemento se utiliza para separar el nombre del fichero del resto de datos?";
preguntas[4][7]="¿A través de qué variable se realiza el envío de datos en el método POST?";
preguntas[4][8]="¿Qué atributo de la creación de formularios en HTML define el tipo de método utilizado para el envío del mismo?";
preguntas[4][9]="¿Qué sentencia en PHP extrae el valor de los datos enviados desde un formulario?";

respuestasCorrectas[4][0]="date()";
respuestasCorrectas[4][1]="Siempre utilizan un return para retornar un valor";
respuestasCorrectas[4][2]="Suponen un fragmento de código reutilizable";
respuestasCorrectas[4][3]="nombreFuncion(“Hola”);";
respuestasCorrectas[4][4]="return";
respuestasCorrectas[4][5]="POST";
respuestasCorrectas[4][6]="?";
respuestasCorrectas[4][7]="STDIO";
respuestasCorrectas[4][8]="METHOD";
respuestasCorrectas[4][9]="Ninguna de las respuestas anteriores es correcta";

//Tema 5
respuestas[5][0]="Control de sesiones";
respuestas[5][1]="Cookies";
respuestas[5][2]="OAuth";
respuestas[5][3]="Esta función no existe";
respuestas[5][4]="$SESSION(“variable”); ";
respuestas[5][5]=" $_SESION(“variable”); ";
respuestas[5][6]="$_SESSION(“variable”);";
respuestas[5][7]="Ninguna de las anteriores";
respuestas[5][8]="En el lado del cliente";
respuestas[5][9]="En el lado del servidor";
respuestas[5][10]="En la nube";
respuestas[5][11]="Ninguna de las anteriores";
respuestas[5][12]="En el lado del servidor";
respuestas[5][13]="En el lado del cliente ";
respuestas[5][14]="En la nube ";
respuestas[5][15]="Ninguna de las anteriores";
respuestas[5][16]="session_unset();";
respuestas[5][17]="session_destroy();";
respuestas[5][18]="destroy();";
respuestas[5][19]="unset(); ";
respuestas[5][20]="$sessionTTL;";
respuestas[5][21]="header(); ";
respuestas[5][22]="session_header();";
respuestas[5][23]="Ninguna de las anteriores";
respuestas[5][24]="session";
respuestas[5][25]="name y domain";
respuestas[5][26]="name y session";
respuestas[5][27]="expires y SID";
respuestas[5][28]="setcookie();";
respuestas[5][29]="getcookie();";
respuestas[5][30]="cookie(); ";
respuestas[5][31]="php_setcookie();";
respuestas[5][32]="Creación de una única cuenta para acceder y manejar diversos serviciosSTDIO";
respuestas[5][33]="Reducción de logins y password que pueden dar lugar a errores y pérdidas";
respuestas[5][34]="Se reduce la cantidad de información que se proporciona a todos los sitios web en los que hay que crear una cuenta de acceso";
respuestas[5][35]="Todas las anteriores son correctas";
respuestas[5][36]="La autenticación se utiliza para el modelado de peticiones entre usuario y servidor a través del protocolo HTTP";
respuestas[5][37]="La autenticación se define como el proceso mediante el que un usuario se identifica en una aplicación";
respuestas[5][38]="La autenticación permite definir los recursos que están disponibles para cada usuario o grupo de estos";
respuestas[5][39]="Ninguna es correcta";

preguntas[5][0]="¿Qué mecanismo de control y mantenimiento utiliza las funciones session_go()?";
preguntas[5][1]="¿Cómo se accede al contenido almacenado sobre sesiones en el servidor?";
preguntas[5][2]="¿Dónde se almacenan los datos de control de sesiones?";
preguntas[5][3]="¿Dónde se almacenan los datos de control en el uso de cookies?";
preguntas[5][4]="¿Qué función se utiliza para eliminar una sesión?";
preguntas[5][5]="¿Qué función permite en PHP crear las cabeceras necesarias para HTTP?";
preguntas[5][6]="¿Cuáles de los siguientes datos son propios en el envío de cookies?";
preguntas[5][7]="¿Qué función propia de PHP se utiliza para la creación de cookies?";
preguntas[5][8]="¿Cuál de las siguientes es una ventaja aportada por los mecanismos de autenticación de usuarios?";
preguntas[5][9]="¿En qué consiste el proceso de autenticación de un usuario?";

respuestasCorrectas[5][0]="Esta función no existe";
respuestasCorrectas[5][1]="$_SESSION(“variable”);";
respuestasCorrectas[5][2]="En el lado del servidor";
respuestasCorrectas[5][3]="En el lado del cliente ";
respuestasCorrectas[5][4]="session_destroy();";
respuestasCorrectas[5][5]="header(); ";
respuestasCorrectas[5][6]="name y domain";
respuestasCorrectas[5][7]="setcookie();";
respuestasCorrectas[5][8]="Todas las anteriores son correctas";
respuestasCorrectas[5][9]="La autenticación se define como el proceso mediante el que un usuario se identifica en una aplicación";

//Tema 6
respuestas[6][0]="Árboles";
respuestas[6][1]="Entradas";
respuestas[6][2]="Atributos";
respuestas[6][3]="Campos";
respuestas[6][4]="Modelo nombre";
respuestas[6][5]="Modelo funcional";
respuestas[6][6]="Modelo de información";
respuestas[6][7]="Modelo de seguridad";
respuestas[6][8]="Modelo nombre";
respuestas[6][9]="Modelo funcional";
respuestas[6][10]="Modelo de información";
respuestas[6][11]="Modelo de seguridad";
respuestas[6][12]="ldap_connect()";
respuestas[6][13]="ldap_validator()";
respuestas[6][14]="ldap_bind()";
respuestas[6][15]="ldap_binder()";
respuestas[6][16]="Pruebas de caja blanca";
respuestas[6][17]="Pruebas de caja negra";
respuestas[6][18]="No existen pruebas específicas";
respuestas[6][19]="Pruebas modulares";
respuestas[6][20]="Pruebas unitarias";
respuestas[6][21]="Pruebas de integración";
respuestas[6][22]="Pruebas de regresión";
respuestas[6][23]="Pruebas de funcionamiento general";
respuestas[6][24]="Errores de compilación";
respuestas[6][25]="Errores de ejecución";
respuestas[6][26]="Errores modulares";
respuestas[6][27]="Las respuestas a y b son correctas";
respuestas[6][28]="Pruebas de ejecución";
respuestas[6][29]="Pruebas unitarias";
respuestas[6][30]="Pruebas de regresión";
respuestas[6][31]="Ninguna es correcta";
respuestas[6][32]="PHPUnit";
respuestas[6][33]="TestCase";
respuestas[6][34]="PruebaTest";
respuestas[6][35]="Ninguna de las anteriores";
respuestas[6][36]="Test";
respuestas[6][37]="Aserciones";
respuestas[6][38]="Comprobaciones";
respuestas[6][39]="Boolean";

preguntas[6][0]="¿Cuál de los elementos claves de LDAP constituye el sistema de organización central del directorio?";
preguntas[6][1]="¿Qué modelo permite describir cómo se identifica la información?";
preguntas[6][2]="¿Qué modelo permite describir como está organizada la información?";
preguntas[6][3]="¿Qué función LDAP se utiliza para habilitar la autenticación de un usuario en un servidor LDAP?";
preguntas[6][4]="¿Cuáles son las pruebas habituales para la evaluación de las interfaces?";
preguntas[6][5]="¿Qué nombre reciben aquellas pruebas que evalúan funcionalidades concretas?";
preguntas[6][6]="¿Qué tipos de errores podemos encontrar atendiendo al desarrollo del código? Selecciona la respuesta más óptima";
preguntas[6][7]="¿En qué tipo de pruebas está enfocado el framework PHPUnit?";
preguntas[6][8]="¿De qué clase debe extender la creación las clases de prueba?";
preguntas[6][9]="¿Qué elemento permite comprobar si los resultados obtenidos en la ejecución de las funciones de prueba son los esperados?";

respuestasCorrectas[6][0]="Árboles";
respuestasCorrectas[6][1]="Modelo nombre";
respuestasCorrectas[6][2]="Modelo de información";
respuestasCorrectas[6][3]="ldap_bind()";
respuestasCorrectas[6][4]="Pruebas de caja negra";
respuestasCorrectas[6][5]="Pruebas unitarias";
respuestasCorrectas[6][6]="Las respuestas a y b son correctas";
respuestasCorrectas[6][7]="Pruebas unitarias";
respuestasCorrectas[6][8]="TestCase";
respuestasCorrectas[6][9]="Aserciones";

//Tema 7
respuestas[7][0]="Respuesta";
respuestas[7][1]="Respuesta";
respuestas[7][2]="Respuesta";
respuestas[7][3]="Respuesta";
respuestas[7][4]="Respuesta";
respuestas[7][5]="Respuesta";
respuestas[7][6]="Respuesta";
respuestas[7][7]="Respuesta";
respuestas[7][8]="Respuesta";
respuestas[7][9]="Respuesta";
respuestas[7][10]="Respuesta";
respuestas[7][11]="Respuesta";
respuestas[7][12]="Respuesta";
respuestas[7][13]="Respuesta";
respuestas[7][14]="Respuesta";
respuestas[7][15]="Respuesta";
respuestas[7][16]="Respuesta";
respuestas[7][17]="Respuesta";
respuestas[7][18]="Respuesta";
respuestas[7][19]="Respuesta";
respuestas[7][20]="Respuesta";
respuestas[7][21]="Respuesta";
respuestas[7][22]="Respuesta";
respuestas[7][23]="Respuesta";
respuestas[7][24]="Respuesta";
respuestas[7][25]="Respuesta";
respuestas[7][26]="Respuesta";
respuestas[7][27]="Respuesta";
respuestas[7][28]="Respuesta";
respuestas[7][29]="Respuesta";
respuestas[7][30]="Respuesta";
respuestas[7][31]="Respuesta";
respuestas[7][32]="Respuesta";
respuestas[7][33]="Respuesta";
respuestas[7][34]="Respuesta";
respuestas[7][35]="Respuesta";
respuestas[7][36]="Respuesta";
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

respuestasCorrectas[7][0]="Respuesta";
respuestasCorrectas[7][1]="Respuesta";
respuestasCorrectas[7][2]="Respuesta";
respuestasCorrectas[7][3]="Respuesta";
respuestasCorrectas[7][4]="Respuesta";
respuestasCorrectas[7][5]="Respuesta";
respuestasCorrectas[7][6]="Respuesta";
respuestasCorrectas[7][7]="Respuesta";
respuestasCorrectas[7][8]="Respuesta";
respuestasCorrectas[7][9]="Respuesta";

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