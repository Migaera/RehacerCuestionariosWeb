const respuestasServidor = new Array(8);
for(var i = 0; i < respuestasServidor.length; i++){
    respuestasServidor[i] = new Array(39)
    
}

const preguntasServidor = new Array(8)
for(var i = 0; i < preguntasServidor.length; i++){
    preguntasServidor[i] = new Array(9)
}

var intCorrectas = []
var intrespuestasServidor = []

const respuestasServidorCorrectas = new Array(8)
for(var i = 0; i < respuestasServidorCorrectas.length; i++){
    respuestasServidorCorrectas[i] = new Array(9)
}

    
respuestasServidor[1][0]= "Se modela la petición HTTP que se envía al ";
respuestasServidor[1][1]= "El  realiza una búsqueda del recurso solicitado";
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

preguntasServidor[1][0] = "¿Qué acción es la primera en llevarse a cabo independientemente de si estamos en una página web estática o dinámica?";
preguntasServidor[1][1] = "¿Qué tipo de páginas muestran un contenido distinto en función de los valores de la petición?";
preguntasServidor[1][2] = "¿En cuál de las siguientes capas se ubica la funcionalidad de la aplicación?";
preguntasServidor[1][3] = "Los lenguajes scripting…";
preguntasServidor[1][4] = "¿Qué verbos utiliza el método HTTP?";
preguntasServidor[1][5] = "La arquitecta Node.js ¿qué lenguaje permite utilizar para el desarrollo del lado ?";
preguntasServidor[1][6] = "¿Qué tecnología permite incorporar al desarrollo de JavaScript funcionalidades para la detección de errores antes de ser visualizado en el navegador?";
preguntasServidor[1][7] = "¿Cómo se puede instalar Typescript a través de línea de comandos?";
preguntasServidor[1][8] = "Selecciona la respuesta correcta sobre la implementación de una página básica utilizando php con XAMPP";
preguntasServidor[1][9] = "¿ Qué tecnología permite el desarrollo de aplicaciones en el lado del ?";

respuestasServidorCorrectas[1][0]= "Se introduce una url en el navegador, del servicio o página que se desea visitar";
respuestasServidorCorrectas[1][1]= "Dinámicas";
respuestasServidorCorrectas[1][2]= "Capa intermedia";
respuestasServidorCorrectas[1][3]= "Permiten ser embebidos con el código HTML";
respuestasServidorCorrectas[1][4]= "POST Y GET";
respuestasServidorCorrectas[1][5]= "JavaScript";
respuestasServidorCorrectas[1][6]= "TypeScript";
respuestasServidorCorrectas[1][7]= "Ninguna de las anteriores";
respuestasServidorCorrectas[1][8]= "Los ficheros .php se sitúan dentro de htdocs";
respuestasServidorCorrectas[1][9]= "Node.js";


//Tema 2
respuestasServidor[2][0]="HTTP";
respuestasServidor[2][1]="PHP";
respuestasServidor[2][2]="JSP";
respuestasServidor[2][3]="B y C son correctas ";
respuestasServidor[2][4]="Contenedores estáticos";
respuestasServidor[2][5]="Contenedores de elementos";
respuestasServidor[2][6]="Contenedores de servlets";
respuestasServidor[2][7]="Navegadores de servlets";
respuestasServidor[2][8]="Marcado de procedimiento";
respuestasServidor[2][9]="Marcado descriptivo";
respuestasServidor[2][10]="Marcado de presentación";
respuestasServidor[2][11]="Ninguna de las anteriores";
respuestasServidor[2][12]=" <?php ?>";
respuestasServidor[2][13]="<?php php>";
respuestasServidor[2][14]="<% %>";
respuestasServidor[2][15]="No se utiliza ningún tipo de marcas";
respuestasServidor[2][16]="phpinfo";
respuestasServidor[2][17]="php.ini";
respuestasServidor[2][18]="htdocs";
respuestasServidor[2][19]="Ninguna de las anteriores";
respuestasServidor[2][20]="$var='Hola Mundo'; ";
respuestasServidor[2][21]="$_var='Hola Mundo'; ";
respuestasServidor[2][22]="$var9='Hola Mundo'; ";
respuestasServidor[2][23]="$9var='Hola Mundo'; ";
respuestasServidor[2][24]="var=‘Hola Mundo’;";
respuestasServidor[2][25]="$999=‘Hola Mundo’; ";
respuestasServidor[2][26]="$var9=‘Hola Mundo’ ";
respuestasServidor[2][27]="$var=‘Hola Mundo’; ";
respuestasServidor[2][28]="Estáticas";
respuestasServidor[2][29]="Variables";
respuestasServidor[2][30]="Constantes";
respuestasServidor[2][31]="Ninguna de las anteriores";
respuestasServidor[2][32]="Float";
respuestasServidor[2][33]="Integer";
respuestasServidor[2][34]="Boolean";
respuestasServidor[2][35]="Todas son incorrectas";
respuestasServidor[2][36]="Esto es imposible";
respuestasServidor[2][37]="intval() ";
respuestasServidor[2][38]="floatval()";
respuestasServidor[2][39]="strval() ";

preguntasServidor[2][0]="¿Cuáles de los siguientes lenguajes son claves para el desarrollo en entorno servidor?";
preguntasServidor[2][1]="¿Qué elemento permite tratar a los Servlet de forma dinámica, recibiendo peticiones de páginas web y redireccionándolas hacia el objeto Servlet encargado de su tratamiento?";
preguntasServidor[2][2]="¿En cuál de los siguientes tipos de lenguajes de marcado las etiquetas no son visibles para el usuario final del documento ni para el desarrollador del mismo?";
preguntasServidor[2][3]="¿Qué marcas se utilizan para la inclusión de lenguaje php en un fichero de desarrollo de sitio web?";
preguntasServidor[2][4]="¿En qué fichero se recogen las directivas de configuración de PHP?";
preguntasServidor[2][5]="¿Cuál de las siguientes sintaxis es incorrecta con respecto a la creación de variables en PHP?";
preguntasServidor[2][6]="¿Cuál de las siguientes sintaxis es correcta con respecto a la creación de variables en PHP?";
preguntasServidor[2][7]="¿Qué tipo de elemento se declara de la forma define (“PI”, 3.14)?";
preguntasServidor[2][8]="¿Qué tipo de datos permiten la creación de números decimales?";
preguntasServidor[2][9]="¿Cuál de las siguientes funciones permite convertir a cadena de texto cualquier variable que se le pasa por parámetro?";

respuestasServidorCorrectas[2][0]="B y C son correctas ";
respuestasServidorCorrectas[2][1]="Contenedores de servlets";
respuestasServidorCorrectas[2][2]="Marcado de presentación";
respuestasServidorCorrectas[2][3]=" <?php ?>";
respuestasServidorCorrectas[2][4]="php.ini";
respuestasServidorCorrectas[2][5]="$9var='Hola Mundo'; ";
respuestasServidorCorrectas[2][6]="$var=‘Hola Mundo’; ";
respuestasServidorCorrectas[2][7]="Constantes";
respuestasServidorCorrectas[2][8]="Float";
respuestasServidorCorrectas[2][9]="strval() ";

//Tema 3
respuestasServidor[3][0]="Lineales";
respuestasServidor[3][1]="Condicionales";
respuestasServidor[3][2]="Bucles";
respuestasServidor[3][3]="Todas son correctas";
respuestasServidor[3][4]="Comparativa";
respuestasServidor[3][5]="Creación de objeto";
respuestasServidor[3][6]="Expresión de asignación";
respuestasServidor[3][7]="Bucle";
respuestasServidor[3][8]="Variables";
respuestasServidor[3][9]="Estructuras de control";
respuestasServidor[3][10]="Sentencias lineales";
respuestasServidor[3][11]="Ninguna de las anteriores ";
respuestasServidor[3][12]="Switch";
respuestasServidor[3][13]="While";
respuestasServidor[3][14]="Do-while";
respuestasServidor[3][15]="Foreach";
respuestasServidor[3][16]="Lineales";
respuestasServidor[3][17]="Bucle";
respuestasServidor[3][18]="Estructura de control";
respuestasServidor[3][19]="Ninguna de las anteriores";
respuestasServidor[3][20]=" If-else ";
respuestasServidor[3][21]=" If";
respuestasServidor[3][22]="Break";
respuestasServidor[3][23]="Foreach";
respuestasServidor[3][24]="continue;";
respuestasServidor[3][25]="break; ";
respuestasServidor[3][26]="sleep;";
respuestasServidor[3][27]="stop;";
respuestasServidor[3][28]="$arrayNumeros = array ( 1, 2, 3) ";
respuestasServidor[3][29]=" $arrayNumeros = ( 1, 2, 3); ";
respuestasServidor[3][30]="$arrayNumeros = array ( 1, 2, 3); ";
respuestasServidor[3][31]="Ninguna de las anteriores";
respuestasServidor[3][32]="$nombreArray[posicion]; ";
respuestasServidor[3][33]="unset ($nombreArray); ";
respuestasServidor[3][34]="unset ($nombreArray[posición]); ";
respuestasServidor[3][35]="Todas son correctas";
respuestasServidor[3][36]="/* */ ";
respuestasServidor[3][37]="//";
respuestasServidor[3][38]="#";
respuestasServidor[3][39]="Todas con correctas";

preguntasServidor[3][0]="¿Qué tipos de sentencias podemos diferenciar en el desarrollo con lenguajes de programación?";
preguntasServidor[3][1]="¿Qué tipo de expresión sería la siguiente: $auxiliar1=$auxiliar2?";
preguntasServidor[3][2]="¿Qué tipo de elementos permiten modificar el flujo de ejecución de las instrucciones de un programa?";
preguntasServidor[3][3]="¿Qué tipo de estructura de control se ejecuta de forma lineal de arriba hacia abajo, y cuando encuentra una condición que se cumple ejecuta las acciones codificadas en ese bloque?";
preguntasServidor[3][4]="¿Qué tipo de sentencias son: for, while o foreach?";
preguntasServidor[3][5]="¿Cuál de las siguientes opciones permiten recorrer todas las posiciones de un array?";
preguntasServidor[3][6]="¿Qué sentencia permite detener la ejecución del bucle o estructura de control dónde se encuentra implementado?";
preguntasServidor[3][7]="¿Cuál de las siguientes sentencias para la creación de arrays es correcta?";
preguntasServidor[3][8]="¿Cuál de las siguientes sentencias para el acceso a una posición de un array es correcta?";
preguntasServidor[3][9]="¿Cuál de los siguientes delimitadores permiten incluir comentarios en PHP?";

respuestasServidorCorrectas[3][0]="Todas son correctas";
respuestasServidorCorrectas[3][1]="Expresión de asignación";
respuestasServidorCorrectas[3][2]="Estructuras de control";
respuestasServidorCorrectas[3][3]="Switch";
respuestasServidorCorrectas[3][4]="Bucle";
respuestasServidorCorrectas[3][5]="Foreach";
respuestasServidorCorrectas[3][6]="break; ";
respuestasServidorCorrectas[3][7]="$arrayNumeros = array ( 1, 2, 3); ";
respuestasServidorCorrectas[3][8]="$nombreArray[posicion]; ";
respuestasServidorCorrectas[3][9]="Todas son correctas";

//Tema 4
respuestasServidor[4][0]="rand() ";
respuestasServidor[4][1]="fecha()";
respuestasServidor[4][2]="array()";
respuestasServidor[4][3]="date()";
respuestasServidor[4][4]="Pueden recibir parámetros de entrada";
respuestasServidor[4][5]="Pueden no recibir parámetros de entrada";
respuestasServidor[4][6]="Siempre utilizan un return para retornar un valor";
respuestasServidor[4][7]="Pueden o no retornar un valor utilizando la palabra return";
respuestasServidor[4][8]="Las funciones que reciben parámetros de entrada siempre utilizan return para devolver un valor de salida";
respuestasServidor[4][9]="Suponen un fragmento de código reutilizable";
respuestasServidor[4][10]="Las funciones que reciben parámetros de entrada nunca utilizan return para devolver un valor de salida";
respuestasServidor[4][11]="Ninguna de las anteriores";
respuestasServidor[4][12]="nombreFuncion(“Hola”);";
respuestasServidor[4][13]="function nombreFuncion();";
respuestasServidor[4][14]="nombreFunción()";
respuestasServidor[4][15]="Todas son correctas";
respuestasServidor[4][16]="function";
respuestasServidor[4][17]="return";
respuestasServidor[4][18]="divide";
respuestasServidor[4][19]="exit";
respuestasServidor[4][20]="GET";
respuestasServidor[4][21]="POST";
respuestasServidor[4][22]="RETURN";
respuestasServidor[4][23]="HTTP";
respuestasServidor[4][24]="*";
respuestasServidor[4][25]="?";
respuestasServidor[4][26]="&";
respuestasServidor[4][27]=":";
respuestasServidor[4][28]="VAR";
respuestasServidor[4][29]="PHPINFO";
respuestasServidor[4][30]="STDIO";
respuestasServidor[4][31]="PHPINI";
respuestasServidor[4][32]="METHOD";
respuestasServidor[4][33]="ACTION";
respuestasServidor[4][34]="STDIO";
respuestasServidor[4][35]="FORM";
respuestasServidor[4][36]="$_POST’nombreDato’]; ";
respuestasServidor[4][37]="$_GET[‘nombreDato’] ";
respuestasServidor[4][38]="Las dos anteriores son correctas";
respuestasServidor[4][39]="Ninguna de las respuestasServidor anteriores es correcta";

preguntasServidor[4][0]="¿Qué función permite generar de forma automática la fecha o la hora actual?";
preguntasServidor[4][1]="¿Cuál de las siguientes opciones es incorrecta con respecto a la creación de una función?";
preguntasServidor[4][2]="¿Cuál de las siguientes opciones es correcta con respecto a la creación de una función?";
preguntasServidor[4][3]="¿Cuál de las siguientes instrucciones es correcta con respecto a la llamada a una función desde un punto cualquiera del programa en PHP?";
preguntasServidor[4][4]="¿Qué palabra permite devolver un valor como salida de una función?";
preguntasServidor[4][5]="¿Qué método envía una petición HTTP de forma invisible al usuario?";
preguntasServidor[4][6]="Cuando se utiliza el método GET para el envío de peticiones con el protocolo HTTP, ¿qué elemento se utiliza para separar el nombre del fichero del resto de datos?";
preguntasServidor[4][7]="¿A través de qué variable se realiza el envío de datos en el método POST?";
preguntasServidor[4][8]="¿Qué atributo de la creación de formularios en HTML define el tipo de método utilizado para el envío del mismo?";
preguntasServidor[4][9]="¿Qué sentencia en PHP extrae el valor de los datos enviados desde un formulario?";

respuestasServidorCorrectas[4][0]="date()";
respuestasServidorCorrectas[4][1]="Siempre utilizan un return para retornar un valor";
respuestasServidorCorrectas[4][2]="Suponen un fragmento de código reutilizable";
respuestasServidorCorrectas[4][3]="nombreFuncion(“Hola”);";
respuestasServidorCorrectas[4][4]="return";
respuestasServidorCorrectas[4][5]="POST";
respuestasServidorCorrectas[4][6]="?";
respuestasServidorCorrectas[4][7]="STDIO";
respuestasServidorCorrectas[4][8]="METHOD";
respuestasServidorCorrectas[4][9]="Ninguna de las respuestasServidor anteriores es correcta";

//Tema 5
respuestasServidor[5][0]="Control de sesiones";
respuestasServidor[5][1]="Cookies";
respuestasServidor[5][2]="OAuth";
respuestasServidor[5][3]="Esta función no existe";
respuestasServidor[5][4]="$SESSION(“variable”); ";
respuestasServidor[5][5]=" $_SESION(“variable”); ";
respuestasServidor[5][6]="$_SESSION(“variable”);";
respuestasServidor[5][7]="Ninguna de las anteriores";
respuestasServidor[5][8]="En el lado del cliente";
respuestasServidor[5][9]="En el lado del servidor";
respuestasServidor[5][10]="En la nube";
respuestasServidor[5][11]="Ninguna de las anteriores";
respuestasServidor[5][12]="En el lado del servidor";
respuestasServidor[5][13]="En el lado del cliente ";
respuestasServidor[5][14]="En la nube ";
respuestasServidor[5][15]="Ninguna de las anteriores";
respuestasServidor[5][16]="session_unset();";
respuestasServidor[5][17]="session_destroy();";
respuestasServidor[5][18]="destroy();";
respuestasServidor[5][19]="unset(); ";
respuestasServidor[5][20]="$sessionTTL;";
respuestasServidor[5][21]="header(); ";
respuestasServidor[5][22]="session_header();";
respuestasServidor[5][23]="Ninguna de las anteriores";
respuestasServidor[5][24]="session";
respuestasServidor[5][25]="name y domain";
respuestasServidor[5][26]="name y session";
respuestasServidor[5][27]="expires y SID";
respuestasServidor[5][28]="setcookie();";
respuestasServidor[5][29]="getcookie();";
respuestasServidor[5][30]="cookie(); ";
respuestasServidor[5][31]="php_setcookie();";
respuestasServidor[5][32]="Creación de una única cuenta para acceder y manejar diversos serviciosSTDIO";
respuestasServidor[5][33]="Reducción de logins y password que pueden dar lugar a errores y pérdidas";
respuestasServidor[5][34]="Se reduce la cantidad de información que se proporciona a todos los sitios web en los que hay que crear una cuenta de acceso";
respuestasServidor[5][35]="Todas las anteriores son correctas";
respuestasServidor[5][36]="La autenticación se utiliza para el modelado de peticiones entre usuario y servidor a través del protocolo HTTP";
respuestasServidor[5][37]="La autenticación se define como el proceso mediante el que un usuario se identifica en una aplicación";
respuestasServidor[5][38]="La autenticación permite definir los recursos que están disponibles para cada usuario o grupo de estos";
respuestasServidor[5][39]="Ninguna es correcta";

preguntasServidor[5][0]="¿Qué mecanismo de control y mantenimiento utiliza las funciones session_go()?";
preguntasServidor[5][1]="¿Cómo se accede al contenido almacenado sobre sesiones en el servidor?";
preguntasServidor[5][2]="¿Dónde se almacenan los datos de control de sesiones?";
preguntasServidor[5][3]="¿Dónde se almacenan los datos de control en el uso de cookies?";
preguntasServidor[5][4]="¿Qué función se utiliza para eliminar una sesión?";
preguntasServidor[5][5]="¿Qué función permite en PHP crear las cabeceras necesarias para HTTP?";
preguntasServidor[5][6]="¿Cuáles de los siguientes datos son propios en el envío de cookies?";
preguntasServidor[5][7]="¿Qué función propia de PHP se utiliza para la creación de cookies?";
preguntasServidor[5][8]="¿Cuál de las siguientes es una ventaja aportada por los mecanismos de autenticación de usuarios?";
preguntasServidor[5][9]="¿En qué consiste el proceso de autenticación de un usuario?";

respuestasServidorCorrectas[5][0]="Esta función no existe";
respuestasServidorCorrectas[5][1]="$_SESSION(“variable”);";
respuestasServidorCorrectas[5][2]="En el lado del servidor";
respuestasServidorCorrectas[5][3]="En el lado del cliente ";
respuestasServidorCorrectas[5][4]="session_destroy();";
respuestasServidorCorrectas[5][5]="header(); ";
respuestasServidorCorrectas[5][6]="name y domain";
respuestasServidorCorrectas[5][7]="setcookie();";
respuestasServidorCorrectas[5][8]="Todas las anteriores son correctas";
respuestasServidorCorrectas[5][9]="La autenticación se define como el proceso mediante el que un usuario se identifica en una aplicación";

//Tema 6
respuestasServidor[6][0]="Árboles";
respuestasServidor[6][1]="Entradas";
respuestasServidor[6][2]="Atributos";
respuestasServidor[6][3]="Campos";
respuestasServidor[6][4]="Modelo nombre";
respuestasServidor[6][5]="Modelo funcional";
respuestasServidor[6][6]="Modelo de información";
respuestasServidor[6][7]="Modelo de seguridad";
respuestasServidor[6][8]="Modelo nombre";
respuestasServidor[6][9]="Modelo funcional";
respuestasServidor[6][10]="Modelo de información";
respuestasServidor[6][11]="Modelo de seguridad";
respuestasServidor[6][12]="ldap_connect()";
respuestasServidor[6][13]="ldap_validator()";
respuestasServidor[6][14]="ldap_bind()";
respuestasServidor[6][15]="ldap_binder()";
respuestasServidor[6][16]="Pruebas de caja blanca";
respuestasServidor[6][17]="Pruebas de caja negra";
respuestasServidor[6][18]="No existen pruebas específicas";
respuestasServidor[6][19]="Pruebas modulares";
respuestasServidor[6][20]="Pruebas unitarias";
respuestasServidor[6][21]="Pruebas de integración";
respuestasServidor[6][22]="Pruebas de regresión";
respuestasServidor[6][23]="Pruebas de funcionamiento general";
respuestasServidor[6][24]="Errores de compilación";
respuestasServidor[6][25]="Errores de ejecución";
respuestasServidor[6][26]="Errores modulares";
respuestasServidor[6][27]="Las respuestasServidor a y b son correctas";
respuestasServidor[6][28]="Pruebas de ejecución";
respuestasServidor[6][29]="Pruebas unitarias";
respuestasServidor[6][30]="Pruebas de regresión";
respuestasServidor[6][31]="Ninguna es correcta";
respuestasServidor[6][32]="PHPUnit";
respuestasServidor[6][33]="TestCase";
respuestasServidor[6][34]="PruebaTest";
respuestasServidor[6][35]="Ninguna de las anteriores";
respuestasServidor[6][36]="Test";
respuestasServidor[6][37]="Aserciones";
respuestasServidor[6][38]="Comprobaciones";
respuestasServidor[6][39]="Boolean";

preguntasServidor[6][0]="¿Cuál de los elementos claves de LDAP constituye el sistema de organización central del directorio?";
preguntasServidor[6][1]="¿Qué modelo permite describir cómo se identifica la información?";
preguntasServidor[6][2]="¿Qué modelo permite describir como está organizada la información?";
preguntasServidor[6][3]="¿Qué función LDAP se utiliza para habilitar la autenticación de un usuario en un servidor LDAP?";
preguntasServidor[6][4]="¿Cuáles son las pruebas habituales para la evaluación de las interfaces?";
preguntasServidor[6][5]="¿Qué nombre reciben aquellas pruebas que evalúan funcionalidades concretas?";
preguntasServidor[6][6]="¿Qué tipos de errores podemos encontrar atendiendo al desarrollo del código? Selecciona la respuesta más óptima";
preguntasServidor[6][7]="¿En qué tipo de pruebas está enfocado el framework PHPUnit?";
preguntasServidor[6][8]="¿De qué clase debe extender la creación las clases de prueba?";
preguntasServidor[6][9]="¿Qué elemento permite comprobar si los resultados obtenidos en la ejecución de las funciones de prueba son los esperados?";

respuestasServidorCorrectas[6][0]="Árboles";
respuestasServidorCorrectas[6][1]="Modelo nombre";
respuestasServidorCorrectas[6][2]="Modelo de información";
respuestasServidorCorrectas[6][3]="ldap_bind()";
respuestasServidorCorrectas[6][4]="Pruebas de caja negra";
respuestasServidorCorrectas[6][5]="Pruebas unitarias";
respuestasServidorCorrectas[6][6]="Las respuestasServidor a y b son correctas";
respuestasServidorCorrectas[6][7]="Pruebas unitarias";
respuestasServidorCorrectas[6][8]="TestCase";
respuestasServidorCorrectas[6][9]="Aserciones";

//Tema 7
respuestasServidor[7][0]="Respuesta";
respuestasServidor[7][1]="Respuesta";
respuestasServidor[7][2]="Respuesta";
respuestasServidor[7][3]="Respuesta";
respuestasServidor[7][4]="Respuesta";
respuestasServidor[7][5]="Respuesta";
respuestasServidor[7][6]="Respuesta";
respuestasServidor[7][7]="Respuesta";
respuestasServidor[7][8]="Respuesta";
respuestasServidor[7][9]="Respuesta";
respuestasServidor[7][10]="Respuesta";
respuestasServidor[7][11]="Respuesta";
respuestasServidor[7][12]="Respuesta";
respuestasServidor[7][13]="Respuesta";
respuestasServidor[7][14]="Respuesta";
respuestasServidor[7][15]="Respuesta";
respuestasServidor[7][16]="Respuesta";
respuestasServidor[7][17]="Respuesta";
respuestasServidor[7][18]="Respuesta";
respuestasServidor[7][19]="Respuesta";
respuestasServidor[7][20]="Respuesta";
respuestasServidor[7][21]="Respuesta";
respuestasServidor[7][22]="Respuesta";
respuestasServidor[7][23]="Respuesta";
respuestasServidor[7][24]="Respuesta";
respuestasServidor[7][25]="Respuesta";
respuestasServidor[7][26]="Respuesta";
respuestasServidor[7][27]="Respuesta";
respuestasServidor[7][28]="Respuesta";
respuestasServidor[7][29]="Respuesta";
respuestasServidor[7][30]="Respuesta";
respuestasServidor[7][31]="Respuesta";
respuestasServidor[7][32]="Respuesta";
respuestasServidor[7][33]="Respuesta";
respuestasServidor[7][34]="Respuesta";
respuestasServidor[7][35]="Respuesta";
respuestasServidor[7][36]="Respuesta";
respuestasServidor[7][37]="Respuesta";
respuestasServidor[7][38]="Respuesta";
respuestasServidor[7][39]="Respuesta";

preguntasServidor[7][0]="Pregunta";
preguntasServidor[7][1]="Pregunta";
preguntasServidor[7][2]="Pregunta";
preguntasServidor[7][3]="Pregunta";
preguntasServidor[7][4]="Pregunta";
preguntasServidor[7][5]="Pregunta";
preguntasServidor[7][6]="Pregunta";
preguntasServidor[7][7]="Pregunta";
preguntasServidor[7][8]="Pregunta";
preguntasServidor[7][9]="Pregunta";

respuestasServidorCorrectas[7][0]="Respuesta";
respuestasServidorCorrectas[7][1]="Respuesta";
respuestasServidorCorrectas[7][2]="Respuesta";
respuestasServidorCorrectas[7][3]="Respuesta";
respuestasServidorCorrectas[7][4]="Respuesta";
respuestasServidorCorrectas[7][5]="Respuesta";
respuestasServidorCorrectas[7][6]="Respuesta";
respuestasServidorCorrectas[7][7]="Respuesta";
respuestasServidorCorrectas[7][8]="Respuesta";
respuestasServidorCorrectas[7][9]="Respuesta";

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
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasServidorCorrectas[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasServidorCorrectas[tema][i-2])

        }

        aux+=4
        
    }
    
})

function Select(a,b){
    intrespuestasServidor[a] = b
    console.log(a + "-" + intrespuestasServidor[a] + "," + intCorrectas[a])
}

function Finalizar(){
    document.getElementById('btnContainerFlotante').style.display = 'flex'
    var nota = 0;
    for(var i = 0; i < 10;i++){
        
        if(intrespuestasServidor[i] == intCorrectas[i]){
            nota++;
        }
    }
    document.getElementById("nota").innerHTML = "<p>" + nota + "</p>"
    document.getElementById('btnBuscar').value = 'Mostrar';
}