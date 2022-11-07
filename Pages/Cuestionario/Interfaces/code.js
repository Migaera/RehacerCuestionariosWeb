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


respuestas[1][0]= "Cabecera";
respuestas[1][1]= "Sistema de navegación";
respuestas[1][2]= "Pie de página";
respuestas[1][3]= "Todos son convenientes, aunque no obligatorios, en función del diseño del sitio";
respuestas[1][4]= " Área común (cabecera, pie, etc) ";
respuestas[1][5]= "Parte de contenido";
respuestas[1][6]= "Solo el pie o footer";
respuestas[1][7]= "A y b son correctas ";
respuestas[1][8]= "El color rojo que participa en la combinación toma el valor 255 en decimal ";
respuestas[1][9]= "El color verde que participa en la combinación toma el valor 1111 0000 en binario";
respuestas[1][10]= " El color azul que participa en la combinación toma el valor 255 en decimal ";
respuestas[1][11]= "Ninguna es correcta ";
respuestas[1][12]= "Brillo";
respuestas[1][13]= "Saturación";
respuestas[1][14]= "Matiz";
respuestas[1][15]= "Color seguro";
respuestas[1][16]= "Colores que se representan de la misma forma en cualquier navegador o dispositivo";
respuestas[1][17]= "Los diferentes matices de cada uno de los colores primarios";
respuestas[1][18]= "Colores complementarios";
respuestas[1][19]= "Colores sintéticos";
respuestas[1][20]= "#66 33 FF ";
respuestas[1][21]= " #99 CC CC ";
respuestas[1][22]= "#CC C3 FF ";
respuestas[1][23]= " Todos son colores seguros ";
respuestas[1][24]= "Se trata de una acción trivial, sin importancia";
respuestas[1][25]= "Una selección adecuada es muy importante, puesto que puede condicionar la e7periencia de navegación del usuario, así como aportar una imagen propia e identificativa del sitio";
respuestas[1][26]= "Solo es importante en el diseño de la cabecera";
respuestas[1][27]= "Ninguna es correcta";
respuestas[1][28]= "RGB";
respuestas[1][29]= "True Color";
respuestas[1][30]= "Color Type";
respuestas[1][31]= "Colores seguros";
respuestas[1][32]= "Te7tura";
respuestas[1][33]= "Relación";
respuestas[1][34]= "Representación";
respuestas[1][35]= "Significado";
respuestas[1][36]= "Representación";
respuestas[1][37]= "Te7tura";
respuestas[1][38]= "Significado";
respuestas[1][39]= "Función";

preguntas[1][0] = "¿Cuál o cuáles de los siguientes elementos son convenientes añadir en cualquier diseño web?";
preguntas[1][1] = "¿Qué áreas principales se recogen en una interfaz gráfica?";
preguntas[1][2] = "Si un color se e7presa de la forma #ffff00:";
preguntas[1][3] = "¿Qué atributo define la intensidad de un color?";
preguntas[1][4] = "¿Qué son los web-safe colors?";
preguntas[1][5] = "¿Cuál de las siguientes codificaciones no es color seguro?";
preguntas[1][6] = "En cuanto a la selección de colores de un diseño web:";
preguntas[1][7] = "¿Cómo se denomina al conjunto de colores en diseño web, que el ojo humano es capaz de percibir?";
preguntas[1][8] = "Dirección, posición, espacio y gravedad, son elementos de:";
preguntas[1][9] = "¿Qué nombre recibe el elemento práctico que se utiliza para representar el propósito para el cual sirve el diseño (por ejemplo, una señal de prohibido)?";

respuestasCorrectas[1][0]= "Todos son convenientes, aunque no obligatorios, en función del diseño del sitio";
respuestasCorrectas[1][1]= "A y b son correctas ";
respuestasCorrectas[1][2]= " El color rojo que participa en la combinación toma el valor 255 en decimal ";
respuestasCorrectas[1][3]= "Saturación";
respuestasCorrectas[1][4]= "Colores que se representan de la misma forma en cualquier navegador o dispositivo";
respuestasCorrectas[1][5]= "#CC C3 FF ";
respuestasCorrectas[1][6]= "Una selección adecuada es muy importante, puesto que puede condicionar la e7periencia de navegación del usuario, así como aportar una imagen propia e identificativa del sitio";
respuestasCorrectas[1][7]= "RGB";
respuestasCorrectas[1][8]= "Relación";
respuestasCorrectas[1][9]= "Función";

//Tema 2
respuestas[2][0]="Un documento en HTML elaborado a través de tablas y marcos";
respuestas[2][1]="Una maqueta o modelo de un diseño o dispositivo que ofrece una idea previa del diseño final";
respuestas[2][2]="Un dossier elaborado con el cliente con los requisitos de diseño";
respuestas[2][3]="Ninguna es correcta";
respuestas[2][4]="Epidemic Sound";
respuestas[2][5]="Gamifica tu aula";
respuestas[2][6]="Mockflow";
respuestas[2][7]="Notepad++";
respuestas[2][8]="Elementos que permiten la normalización de estilos para un mismo proyecto";
respuestas[2][9]="Gestor de contenidos";
respuestas[2][10]="Catálogo de colores";
respuestas[2][11]="Todas son correctas";
respuestas[2][12]="El tamaño que facilita la lectura";
respuestas[2][13]="El color que facilita la lectura";
respuestas[2][14]="La terminación de los extremos que facilita la lectura";
respuestas[2][15]="Son iguales";
respuestas[2][16]="Checkbox";
respuestas[2][17]="Radio";
respuestas[2][18]="Verification";
respuestas[2][19]="Select";
respuestas[2][20]="Añade imágenes al diseño web";
respuestas[2][21]="Añade enlaces al diseño web";
respuestas[2][22]="No existe";
respuestas[2][23]="Las dos primeras opciones son correctas";
respuestas[2][24]="<img src=“ejemplo.png”>";
respuestas[2][25]="<img src=“ejemplo.png” alt=“Imagen de ejemplo” title=“Título de la imagen”>";
respuestas[2][26]="Ninguna es correcta, se utiliza la etiqueta a para la inserción de imágenes";
respuestas[2][27]="Las dos primeras opciones son correctas";
respuestas[2][28]="table";
respuestas[2][29]="tr";
respuestas[2][30]="td";
respuestas[2][31]="div";
respuestas[2][32]="La etiqueta input con atributo button y un enlace <a>";
respuestas[2][33]="La etiqueta <button> con un atributo <href> que enlaza al contenido destino";
respuestas[2][34]="Solo es necesario una etiqueta de enlace <a>";
respuestas[2][35]="Solo es necesario una etiqueta <href>";
respuestas[2][36]="border";
respuestas[2][37]="align";
respuestas[2][38]="width";
respuestas[2][39]="caption";

preguntas[2][0]="¿Qué es un prototipo?";
preguntas[2][1]="¿Cuál de las siguientes herramientas se utiliza para la creación de wireframe?";
preguntas[2][2]="Las guías de estilo son:";
preguntas[2][3]="¿Qué diferencia existe entre las letras con serifa y sin serifa?";
preguntas[2][4]="¿A través de qué etiqueta se modela una casilla de verificación en HTML?";
preguntas[2][5]="¿Para qué se utiliza la instrucción <a>?";
preguntas[2][6]="¿Cuál de las siguientes sintaxis es correcta?";
preguntas[2][7]="¿Qué etiqueta se utiliza la creación de filas en una tabla?";
preguntas[2][8]="¿Qué etiqueta en HTML se utiliza para que, al pulsar sobre un botón ubicado en el cuerpo del documento, se redireccione al usuario a otra página del sitio web?";
preguntas[2][9]="En la creación de tablas ¿a través de que atributo es posible definir la alineación de la tabla?";

respuestasCorrectas[2][0]="Una maqueta o modelo de un diseño o dispositivo que ofrece una idea previa del diseño final";
respuestasCorrectas[2][1]="Mockflow";
respuestasCorrectas[2][2]="Elementos que permiten la normalización de estilos para un mismo proyecto";
respuestasCorrectas[2][3]="La terminación de los extremos que facilita la lectura";
respuestasCorrectas[2][4]="Checkbox";
respuestasCorrectas[2][5]="Añade enlaces al diseño web";
respuestasCorrectas[2][6]="Las dos primeras opciones son correctas";
respuestasCorrectas[2][7]="tr";
respuestasCorrectas[2][8]="La etiqueta input con atributo button y un enlace <a>";
respuestasCorrectas[2][9]="align";

//Tema 3
respuestas[3][0]="Un documento en HTML";
respuestas[3][1]="Una hoja de estilo CSS";
respuestas[3][2]="Un fichero style";
respuestas[3][3]="Un entorno de desarrollo";
respuestas[3][4]="link";
respuestas[3][5]="head";
respuestas[3][6]="style";
respuestas[3][7]="doc";
respuestas[3][8]="El tipo de recurso enlazado";
respuestas[3][9]="El tipo de relación entre el recurso enlazado y el fichero HTML";
respuestas[3][10]="La ruta del archivo CSS";
respuestas[3][11]="El tipo de medio en el que se van a aplicar los estilos CSS";
respuestas[3][12]="Los selectores identificadores";
respuestas[3][13]="Los selectores de clase";
respuestas[3][14]="Los selectores básicos";
respuestas[3][15]="Los selectores univerales";
respuestas[3][16]="Pseudoclases";
respuestas[3][17]="CSS";
respuestas[3][18]="Pseudoelementos";
respuestas[3][19]="Framework";
respuestas[3][20]="Guías de estilo";
respuestas[3][21]="Medios";
respuestas[3][22]="Hojas de estilo";
respuestas[3][23]="Ficheros HTML";
respuestas[3][24]="Etiquetas";
respuestas[3][25]="Clase";
respuestas[3][26]="Identificadores";
respuestas[3][27]="Ninguna es correcta";
respuestas[3][28]="div {color:blue;} ";
respuestas[3][29]="div {color=black}";
respuestas[3][30]="{div:color=green}";
respuestas[3][31]="#{div:color=green}";
respuestas[3][32]=":first-line";
respuestas[3][33]=":one-line";
respuestas[3][34]=" #first-line";
respuestas[3][35]="Ninguna es correcta";
respuestas[3][36]="Absolutos";
respuestas[3][37]="Relativos";
respuestas[3][38]="Porcentajes";
respuestas[3][39]="Responsives";

preguntas[3][0]="¿Qué es lo que permite definir el conjunto de reglas y estilo de un sitio web?";
preguntas[3][1]="¿Cuál de las siguientes etiquetas permite definir estilo CSS en el documento HTML sin enlazar con un fichero con extensión CSS?";
preguntas[3][2]="¿Qué determina el tributo type de la etiqueta de enlace link?";
preguntas[3][3]="¿Qué tipo de selectores identifican un bloque de contenido HTML bajo la palabra class?";
preguntas[3][4]="¿Qué nombre recibe los elementos que pueden presentar varios estados en su funcionamiento y por lo tanto, cada uno de los estados podrá tener un estilo diferente como por ejemplo, los enlaces <a>?";
preguntas[3][5]="¿Qué nombre reciben los canales a través de los cuales se muestra la información del sitio web: auditivos, visuales, impresos, etc?";
preguntas[3][6]="Los selectores basados en … seleccionan un atributo al que dar formato buscando en el contenido de los atributos ‘id’ del documento estructurado en HTML.";
preguntas[3][7]="Indica cuál de las siguientes sintaxis es la correcta en el lenguaje de hojas de estilo CSS";
preguntas[3][8]="¿Qué pseudoelemento permite seleccionar la primera línea de texto de un elemento?";
preguntas[3][9]="En las páginas con una estructura fija, las dimensiones se expresan utilizando valores …";

respuestasCorrectas[3][0]="Una hoja de estilo CSS";
respuestasCorrectas[3][1]="style";
respuestasCorrectas[3][2]="El tipo de recurso enlazado";
respuestasCorrectas[3][3]="Los selectores de clase";
respuestasCorrectas[3][4]="Pseudoclases";
respuestasCorrectas[3][5]="Medios";
respuestasCorrectas[3][6]="Identificadores";
respuestasCorrectas[3][7]="div {color:blue;} ";
respuestasCorrectas[3][8]=":first-line";
respuestasCorrectas[3][9]="Absolutos";

//Tema 4
respuestas[4][0]="yui-g";
respuestas[4][1]="container-fluid";
respuestas[4][2]="article";
respuestas[4][3]="Ninguna es correcta";
respuestas[4][4]="Content y Border";
respuestas[4][5]="Content, Border y Margin";
respuestas[4][6]="Content, Padding, Container y Overflow";
respuestas[4][7]="Content, Padding, Margin y Border";
respuestas[4][8]="Define el elemento border con un grosor de 15px, estilo sólido y el color definido por el código hexadecimal #3EC483";
respuestas[4][9]="Es incorrecto, las propiedades solo se definen en atributos independientes";
respuestas[4][10]="Define el elemento border 15px del extremo izquierdo, estilo sólido y el color definido por el código hexadecimal #3EC483";
respuestas[4][11]="Ninguna es correcta";
respuestas[4][12]="<build>";
respuestas[4][13]=" <type>";
respuestas[4][14]=" <link>";
respuestas[4][15]="<fonts>";
respuestas[4][16]="delay";
respuestas[4][17]="Página (#doc, #doc2,…)";
respuestas[4][18]="Plantilla (.yui-b, .yui-t1,…)";
respuestas[4][19]="Rejilla (.yui.u, .yui-g,…)";
respuestas[4][20]="<p class=“text-center”>";
respuestas[4][21]="<p class=“text-lowercase”>";
respuestas[4][22]="<p class=“text-uppercase”>";
respuestas[4][23]=" No es posible realizar esta conversión ";
respuestas[4][24]=" <img src=“ejemplo.png”>";
respuestas[4][25]="<img src=“ejemplo.png” alt=“Imagen de ejemplo” title=“Título de la imagen”>";
respuestas[4][26]="Ninguna es correcta, se utiliza la etiqueta a para la inserción de imágenes";
respuestas[4][27]="Las dos primeras opciones son correctas";
respuestas[4][28]="col-6";
respuestas[4][29]="col-12";
respuestas[4][30]="col-11";
respuestas[4][31]="col-9";
respuestas[4][32]="Bootstrap 4 y YUI";
respuestas[4][33]="Modelo de cajas y Bootstrap 4";
respuestas[4][34]="YUI y HTML";
respuestas[4][35]="Ninguna de las anteriores";
respuestas[4][36]="Rectángulo";
respuestas[4][37]="Círculo";
respuestas[4][38]="Triángulo";
respuestas[4][39]="El elemento desaparece";

preguntas[4][0]="¿Cuál de los siguientes elementos corresponde con una clase de Bootstrap 4?";
preguntas[4][1]="Los elementos del modelo de cajas son:";
preguntas[4][2]="Indica la afirmación correcta sobre el código “border: 15px solid #3EC483;”:";
preguntas[4][3]="¿Qué etiqueta permite enlazar un fichero HTML con las hojas externas?";
preguntas[4][4]="¿Cuál de los siguientes elementos no es característico del framework YUI?";
preguntas[4][5]="¿Cuál de las siguientes sentencias realizará la conversión de todo el contenido de un párrafo a mayúsculas?";
preguntas[4][6]="¿Cuál de las siguientes sintaxis es correcta?";
preguntas[4][7]="El sistema de columnas en Bootstrap 4, grid, permite la creación de múltiples tipos de columnas, con multitud de distribuciones ¿sobre qué número inicial de columnas hay que hacer la división del espacio para crear las columnas deseadas?";
preguntas[4][8]="¿Cuáles de los siguientes nombres corresponden a librerías de diseño para CSS?";
preguntas[4][9]="Si aplicamos el siguiente código sobre un elemento con el mismo valor para el ancho y el alto ¿cuál es la forma resultante? border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%;";

respuestasCorrectas[4][0]="container-fluid";
respuestasCorrectas[4][1]="Content, Padding, Margin y Border";
respuestasCorrectas[4][2]="Define el elemento border con un grosor de 15px, estilo sólido y el color definido por el código hexadecimal #3EC483";
respuestasCorrectas[4][3]=" <link>";
respuestasCorrectas[4][4]="delay";
respuestasCorrectas[4][5]="<p class=“text-uppercase”>";
respuestasCorrectas[4][6]="Las dos primeras opciones son correctas";
respuestasCorrectas[4][7]="col-12";
respuestasCorrectas[4][8]="Bootstrap 4 y YUI";
respuestasCorrectas[4][9]="Círculo";

//Tema 5
respuestas[5][0]="&variable";
respuestas[5][1]="$variable ";
respuestas[5][2]="*variable";
respuestas[5][3]="@variable";
respuestas[5][4]="@mixin";
respuestas[5][5]="%mixin ";
respuestas[5][6]="$mixin ";
respuestas[5][7]="&mixin";
respuestas[5][8]="col-qty";
respuestas[5][9]="fall-tter";
respuestas[5][10]="glutter";
respuestas[5][11]="width";
respuestas[5][12]=" $bg-color: # FFA07A ¢size: 12em body margin: $size * 3 background-color: $bg-color";
respuestas[5][13]="$bg-color: # FFA07A ¢size: 12em body{ background-color: $bg-color margin: $size * 3 }";
respuestas[5][14]=" $bg-color: # FFA07A ¢size: 12em .body background-color: $bg-color margin: $size * 3";
respuestas[5][15]="$bg-color: # FFA07A ¢size: 12em @body background-color: $bg-color margin: $size * 3";
respuestas[5][16]="&variable";
respuestas[5][17]="$variable ";
respuestas[5][18]=" *variable ";
respuestas[5][19]="@variable ";
respuestas[5][20]="#p font-siexe:8px; #a color:blue";
respuestas[5][21]=".p font-siexe:8px; .a color:blue";
respuestas[5][22]="p {font-siexe:8px; a {color:blue}}";
respuestas[5][23]="@p font-siexe:8px; @a color:blue";
respuestas[5][24]="La confección de ficheros .css en Sass no es automática";
respuestas[5][25]="La confección de ficheros .css en Less requiere la compilación a través de la línea de comandos. ";
respuestas[5][26]="La confección de ficheros .css en Less utiliza la instrucción lessc. ";
respuestas[5][27]="La confección de ficheros .css en Sass es automática a través del escuchador sass --watch.";
respuestas[5][28]=" @mixin ";
respuestas[5][29]="  %mixin ";
respuestas[5][30]=".mixin ";
respuestas[5][31]=" &mixin";
respuestas[5][32]="Posibilidad de utilizar operadores";
respuestas[5][33]="Creación de variables ";
respuestas[5][34]="Uso de bloques de código reutilizables";
respuestas[5][35]="Todas las anteriores son correctas ";
respuestas[5][36]="Less trabaja bajo Ruby ";
respuestas[5][37]="Sass trabaja bajo Ruby ";
respuestas[5][38]="Sass trabaja bajo JavaScript ";
respuestas[5][39]=" Less trabaja bajo C# ";

preguntas[5][0]="Para la creación de una variable en Sass se utiliza:";
preguntas[5][1]="Para implementar un bloque de código reutilizable tipo mixin en Sass se debe indicar como:";
preguntas[5][2]="¿Cuál de los siguientes atributos no pertenece al sistema de creación de columnas en Sass?";
preguntas[5][3]="¿Cuál de los siguientes códigos CCS sería equivalente a la identación realizada con Sass?";
preguntas[5][4]="Para la creación de una variable en Less se utiliza:";
preguntas[5][5]="El tipo de anidamiento de selectores en Less correcto es:";
preguntas[5][6]="Indica cuál de las siguientes afirmaciones no es correcta:";
preguntas[5][7]="Para implementar un bloque de código reutilizable tipo mixin en Less se debe indicar como:";
preguntas[5][8]="Las funcionalidades comunes que presentan Less y Sass son:";
preguntas[5][9]="¿Cuál de las siguientes afirmaciones es correcta?";

respuestasCorrectas[5][0]="$variable ";
respuestasCorrectas[5][1]="@mixin";
respuestasCorrectas[5][2]="fall-tter";
respuestasCorrectas[5][3]="$bg-color: # FFA07A ¢size: 12em body{ background-color: $bg-color margin: $size * 3 }";
respuestasCorrectas[5][4]="@variable ";
respuestasCorrectas[5][5]="p {font-siexe:8px; a {color:blue}}";
respuestasCorrectas[5][6]="La confección de ficheros .css en Sass no es automática";
respuestasCorrectas[5][7]=".mixin ";
respuestasCorrectas[5][8]="Todas las anteriores son correctas ";
respuestasCorrectas[5][9]="Sass trabaja bajo Ruby ";

//Tema 6
respuestas[6][0]="  Debido a su calidad suele ser mejor opción que la imagen vectorizada. ";
respuestas[6][1]="Puede re-escalarse sin problema de pixelado. ";
respuestas[6][2]="Representa a través fórmulas matemáticas figuras geométricas. ";
respuestas[6][3]="Está formada por una matriz de píxeles. ";
respuestas[6][4]=" La resolución de la imagen, la longitud, el ancho y la profundidad de color. ";
respuestas[6][5]=" La resolución de la imagen, la longitud y el ancho. ";
respuestas[6][6]=" La resolución de la imagen, la longitud, el ancho y el tipo de codificación del color.";
respuestas[6][7]=" La resolución de la imagen, el número de píxeles y la profundidad de color. ";
respuestas[6][8]=" Es sin pérdidas, no disminuye la calidad. ";
respuestas[6][9]="No reduce el peso de una imagen. ";
respuestas[6][10]=" Es útil de aplicar en imágenes de tipo vectorial. ";
respuestas[6][11]=" Es con pérdidas, disminuye el tamaño pero también la calidad de la imagen. ";
respuestas[6][12]="6";
respuestas[6][13]="3";
respuestas[6][14]="8";
respuestas[6][15]="24";
respuestas[6][16]="JPEG";
respuestas[6][17]="GIF";
respuestas[6][18]="PNG";
respuestas[6][19]="BMP";
respuestas[6][20]="Logo";
respuestas[6][21]="Icono";
respuestas[6][22]="Banner";
respuestas[6][23]="Sello";
respuestas[6][24]="Edición de imágenes";
respuestas[6][25]="Gestión de licencias";
respuestas[6][26]="Creación de archivos de audio";
respuestas[6][27]="Ninguna de las anteriores";
respuestas[6][28]="Giro";
respuestas[6][29]="Volteo";
respuestas[6][30]="Filtro";
respuestas[6][31]="Efecto";
respuestas[6][32]="JPEG";
respuestas[6][33]="PNG";
respuestas[6][34]="MOV";
respuestas[6][35]="AVI";
respuestas[6][36]="Licencia";
respuestas[6][37]="Propiedad intelectual";
respuestas[6][38]="Registro";
respuestas[6][39]="Creative Commons";

preguntas[6][0]="La imagen de mapa de bits:";
preguntas[6][1]="El tamaño de una imagen se encuentra determinado por:";
preguntas[6][2]="El formato JPEG:";
preguntas[6][3]="Si el número de bits para describir el color en una imagen es 3. ¿Cuál será el número de posibles colores a utilizar en la imagen?";
preguntas[6][4]="¿Cuál de los siguientes formatos de imágenes admite animación?";
preguntas[6][5]="Una imagen que caracteriza a una empresa o marca es un:";
preguntas[6][6]="Gimp es una herramienta de:";
preguntas[6][7]="La transformación de una imagen digital mediante la aplicación de operadores matemáticos es un:";
preguntas[6][8]="¿Cuál es el formato de imagen más indicado para el diseño de logotipos?";
preguntas[6][9]="¿Qué nombre recibe el conjunto de derechos sobre un contenido original que tienen sus autores?";

respuestasCorrectas[6][0]="Está formada por una matriz de píxeles. ";
respuestasCorrectas[6][1]=" La resolución de la imagen, la longitud, el ancho y la profundidad de color. ";
respuestasCorrectas[6][2]=" Es con pérdidas, disminuye el tamaño pero también la calidad de la imagen. ";
respuestasCorrectas[6][3]="8";
respuestasCorrectas[6][4]="GIF";
respuestasCorrectas[6][5]="Logo";
respuestasCorrectas[6][6]="Edición de imágenes";
respuestasCorrectas[6][7]="Filtro";
respuestasCorrectas[6][8]="PNG";
respuestasCorrectas[6][9]="Propiedad intelectual";

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
    
    var au7 = 2;
    for(var i = 2; i < 12; i++){
        for(var j = au7; j < 4+au7; j++){
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasCorrectas[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(au7 < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasCorrectas[tema][i-2])

        }

        au7+=4
        
    }
    
})

function Select(a,b){
    intRespuestas[a] = b
    console.log(a + "-" + intRespuestas[a] + "," + intCorrectas[a])
}

function Finalizar(){
    document.getElementById('btnContainerFlotante').style.display = 'fle7'
    var nota = 0;
    for(var i = 0; i < 10;i++){
        
        if(intRespuestas[i] == intCorrectas[i]){
            nota++;
        }
    }
    document.getElementById("nota").innerHTML = "<p>" + nota + "</p>"
    document.getElementById('btnBuscar').value = 'Mostrar';
}