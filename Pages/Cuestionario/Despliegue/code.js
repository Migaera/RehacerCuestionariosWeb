const respuestasDespliegue = new Array(8);
for(var i = 0; i < respuestasDespliegue.length; i++){
    respuestasDespliegue[i] = new Array(39)
    
}

const preguntasDespliegue = new Array(8)
for(var i = 0; i < preguntasDespliegue.length; i++){
    preguntasDespliegue[i] = new Array(9)
}

var intCorrectas = []
var intrespuestasDespliegue = []

const respuestasDespliegueCorrectas = new Array(8)
for(var i = 0; i < respuestasDespliegueCorrectas.length; i++){
    respuestasDespliegueCorrectas[i] = new Array(9)
}

//Tema 1
respuestasDespliegue[1][0]= "Un navegador web";
respuestasDespliegue[1][1]= "Una red de equipos interconectada";
respuestasDespliegue[1][2]= "Un tipo de servidor web";
respuestasDespliegue[1][3]= "Ninguna de las anteriores es correcta";
respuestasDespliegue[1][4]= "DNS";
respuestasDespliegue[1][5]= "FTP";
respuestasDespliegue[1][6]= "HTTP";
respuestasDespliegue[1][7]= "Ninguna de las anteriores es correcta";
respuestasDespliegue[1][8]= "80 TCP";
respuestasDespliegue[1][9]= "80 UDP";
respuestasDespliegue[1][10]= "8080 TCP";
respuestasDespliegue[1][11]= "Ninguna de las anteriores";
respuestasDespliegue[1][12]= "El servidor se reinicia";
respuestasDespliegue[1][13]= "Se cierra la conexión";
respuestasDespliegue[1][14]= "El navegador web se bloquea";
respuestasDespliegue[1][15]= "Ninguna de las anteriores";
respuestasDespliegue[1][16]= "Un servidor de aplicaciones web";
respuestasDespliegue[1][17]= "Un lenguaje de marcas de hipertexto basado en etiquetas utilizado para crear páginas web";
respuestasDespliegue[1][18]= "Un protocolo de red";
respuestasDespliegue[1][19]= "Ninguna de las anteriores";
respuestasDespliegue[1][20]= "Bill Gates";
respuestasDespliegue[1][21]= "Richard Stallman";
respuestasDespliegue[1][22]= "Tim Berners-Lee";
respuestasDespliegue[1][23]= "Ninguna de las anteriores";
respuestasDespliegue[1][24]= "No necesitan acceso a internet";
respuestasDespliegue[1][25]= "Compatibilidad con cualquier sistema operativo";
respuestasDespliegue[1][26]= "La instalación en el ordenador ocupa menos espacio";
respuestasDespliegue[1][27]= "Ninguna de las anteriores";
respuestasDespliegue[1][28]= "Es un modelo centralizado";
respuestasDespliegue[1][29]= "Falla si uno de los nodos se cae";
respuestasDespliegue[1][30]= "Es el más utilizado en la actualidad";
respuestasDespliegue[1][31]= "Funciona con una topología en malla y todos los nodos hacen de cliente y servidor";
respuestasDespliegue[1][32]= "Si el servidor se cae los recursos siguen estando disponibles";
respuestasDespliegue[1][33]= "Si hay un alto número de peticiones simultaneas se podría congestionar el servidor y dejar de estar operativo";
respuestasDespliegue[1][34]= "El mantenimiento es más complicado que en el modelo P2P";
respuestasDespliegue[1][35]= "Todas son correctas";
respuestasDespliegue[1][36]= "Los clientes se comunican directamente con la BBDD";
respuestasDespliegue[1][37]= "El servidor web se comunicará con la base de datos";
respuestasDespliegue[1][38]= "Es necesario tener tantos servidores web como bases de datos.";
respuestasDespliegue[1][39]= "Ninguna es correcta";

preguntasDespliegue[1][0] = "¿Qué es la World Wide Web?";
preguntasDespliegue[1][1] = "¿Qué nuevo protocolo permitió la expansión de los servicios web?:";
preguntasDespliegue[1][2] = "Una¿Qué puerto utiliza el protocolo HTTP?";
preguntasDespliegue[1][3] = "Cuando el servidor web ha terminado de enviar los datos al cliente…";
preguntasDespliegue[1][4] = "HTML es…";
preguntasDespliegue[1][5] = "El fundador del consorcio de la WWW (3WC) fue…";
preguntasDespliegue[1][6] = "¿Qué ventajas aportan las aplicaciones web respecto a las aplicaciones de escritorio?";
preguntasDespliegue[1][7] = "El modelo P2P…";
preguntasDespliegue[1][8] = "En el modelo cliente-servidor…";
preguntasDespliegue[1][9] = "El modelo de tres capas…";

respuestasDespliegueCorrectas[1][0]= "Una red de equipos interconectada";
respuestasDespliegueCorrectas[1][1]= "HTTP";
respuestasDespliegueCorrectas[1][2]= "80 TCP";
respuestasDespliegueCorrectas[1][3]= "Se cierra la conexión";
respuestasDespliegueCorrectas[1][4]= "Un lenguaje de marcas de hipertexto basado en etiquetas utilizado para crear páginas web";
respuestasDespliegueCorrectas[1][5]= "Tim Berners-Lee";
respuestasDespliegueCorrectas[1][6]= "Compatibilidad con cualquier sistema operativo";
respuestasDespliegueCorrectas[1][7]= "Funciona con una topología en malla y todos los nodos hacen de cliente y servidor";
respuestasDespliegueCorrectas[1][8]= "Si hay un alto número de peticiones simultaneas se podría congestionar el servidor y dejar de estar operativo";
respuestasDespliegueCorrectas[1][9]= "El servidor web se comunicará con la base de datos";

//Tema 2
respuestasDespliegue[2][0]="Un sistema gestor de base de datos";
respuestasDespliegue[2][1]="Un navegador web";
respuestasDespliegue[2][2]="Un tipo de servidor web";
respuestasDespliegue[2][3]="Ninguna de las anteriores es correcta";
respuestasDespliegue[2][4]="Solo permiten su instalación el Linux";
respuestasDespliegue[2][5]="Solo permiten su instalación en Windows";
respuestasDespliegue[2][6]="Se pueden instalar tanto en Windows como Linux";
respuestasDespliegue[2][7]="Ninguna de las anteriores es correcta";
respuestasDespliegue[2][8]="Un servidor web open soure";
respuestasDespliegue[2][9]="Es la versión comercial de Nginx";
respuestasDespliegue[2][10]="Una utilidad de Linux";
respuestasDespliegue[2][11]="Ninguna de las anteriores";
respuestasDespliegue[2][12]="Internet Information System";
respuestasDespliegue[2][13]="Internet Information Services";
respuestasDespliegue[2][14]="Internet Information Server";
respuestasDespliegue[2][15]="Ninguna de las anteriores";
respuestasDespliegue[2][16]="Del estado general del servidor";
respuestasDespliegue[2][17]="Información a tiempo real del número de peticiones";
respuestasDespliegue[2][18]="Información relativa a la versión de PHP y los plugins instalados";
respuestasDespliegue[2][19]="Ninguna de las anteriores";
respuestasDespliegue[2][20]="Apache";
respuestasDespliegue[2][21]="Microsoft IIS";
respuestasDespliegue[2][22]="Ngixn";
respuestasDespliegue[2][23]="Ninguna de las opciones anteriores es correcta";
respuestasDespliegue[2][24]=" /var/www/html ";
respuestasDespliegue[2][25]="C:\Windows\System32\websrv ";
respuestasDespliegue[2][26]="/var/www/inetpub ";
respuestasDespliegue[2][27]="Ninguna de las anteriores";
respuestasDespliegue[2][28]="Nginx --configtest";
respuestasDespliegue[2][29]="Nginx -c ";
respuestasDespliegue[2][30]="Nginx --configcheck";
respuestasDespliegue[2][31]="Nginx -t ";
respuestasDespliegue[2][32]="Un sistema de despliegue de aplicaciones web y servicios basado en contenedores. ";
respuestasDespliegue[2][33]="Un servidor web de última generación";
respuestasDespliegue[2][34]="Un complemento de Apache que actúa como firewall";
respuestasDespliegue[2][35]="Todas son correctas";
respuestasDespliegue[2][36]="En un servidor docker solo se puede tener un contenedor";
respuestasDespliegue[2][37]="Si, se pueden tener varios sitios web apuntando al mismo puerto";
respuestasDespliegue[2][38]="No, cada contenedor se debe redirigir un puerto único";
respuestasDespliegue[2][39]="Ninguna es correcta";

preguntasDespliegue[2][0]="Mysql es…";
preguntasDespliegue[2][1]="Los servidores web multiplataforma…";
preguntasDespliegue[2][2]="Nginx Plus es…";
preguntasDespliegue[2][3]="IIS son las siglas de…";
preguntasDespliegue[2][4]="El archivo phpinfo.php nos da información acerca de";
preguntasDespliegue[2][5]="De los siguientes servidores web, ¿Cuál apareció primero?";
preguntasDespliegue[2][6]="¿En qué ruta se establece el directorio raiz de un servidor web en Linux?";
preguntasDespliegue[2][7]="Para comprobar la configuración de Nginx utilizamos el comando…";
preguntasDespliegue[2][8]="Docker es…";
preguntasDespliegue[2][9]="Un servidor Docker puede tener varios contenedores en el mismo puerto…";

respuestasDespliegueCorrectas[2][0]="Un sistema gestor de base de datos";
respuestasDespliegueCorrectas[2][1]="Se pueden instalar tanto en Windows como Linux";
respuestasDespliegueCorrectas[2][2]="Es la versión comercial de Nginx";
respuestasDespliegueCorrectas[2][3]="Internet Information Services";
respuestasDespliegueCorrectas[2][4]="Información relativa a la versión de PHP y los plugins instalados";
respuestasDespliegueCorrectas[2][5]="Apache";
respuestasDespliegueCorrectas[2][6]=" /var/www/html ";
respuestasDespliegueCorrectas[2][7]="Nginx -t ";
respuestasDespliegueCorrectas[2][8]="Un sistema de despliegue de aplicaciones web y servicios basado en contenedores. ";
respuestasDespliegueCorrectas[2][9]="No, cada contenedor se debe redirigir un puerto único";

//Tema 3
respuestasDespliegue[3][0]="/var/www ";
respuestasDespliegue[3][1]="/etc/";
respuestasDespliegue[3][2]="/usr/";
respuestasDespliegue[3][3]="/root/ ";
respuestasDespliegue[3][4]="my.cfg";
respuestasDespliegue[3][5]="php.cfg";
respuestasDespliegue[3][6]="php.ini";
respuestasDespliegue[3][7]="Ninguna de las anteriores es correcta";
respuestasDespliegue[3][8]="ApacheHosts";
respuestasDespliegue[3][9]="VirtualHost";
respuestasDespliegue[3][10]="vSites";
respuestasDespliegue[3][11]="Ninguna de las anteriores";
respuestasDespliegue[3][12]="La carpeta sites-availables";
respuestasDespliegue[3][13]="La carpeta conf-enabled";
respuestasDespliegue[3][14]="La carpeta sites-enabled";
respuestasDespliegue[3][15]="Ninguna de las anteriores";
respuestasDespliegue[3][16]="Error.log";
respuestasDespliegue[3][17]="Access.log";
respuestasDespliegue[3][18]="Connections.log";
respuestasDespliegue[3][19]="Ninguna de las anteriores";
respuestasDespliegue[3][20]="Debe estar firmado por una CA";
respuestasDespliegue[3][21]="Cualquier certificado autofirmado será válido";
respuestasDespliegue[3][22]="Es necesario crearlo con OpenSSL";
respuestasDespliegue[3][23]="Ninguna de las anteriores";
respuestasDespliegue[3][24]="Un protocolo de transferencia de imágenes";
respuestasDespliegue[3][25]="Un protocolo que asegura el envío de información entre emisor y receptor con un cifrado de clave abierta";
respuestasDespliegue[3][26]="El protocolo de transferencia de datos en la red";
respuestasDespliegue[3][27]="Un protocolo de seguridad de las páginas web";
respuestasDespliegue[3][28]="Utiliza el puerto TCP 433 para establecer conexiones seguras";
respuestasDespliegue[3][29]="Utiliza el puerto UDP 443 para establecer conexiones seguras";
respuestasDespliegue[3][30]="Utiliza el puerto TCP 443 para establecer conexiones seguras";
respuestasDespliegue[3][31]="Ninguna de las anteriores";
respuestasDespliegue[3][32]="Añaden funcionalidades extras al servidor";
respuestasDespliegue[3][33]="Permiten alojar más sitios web en un mismo servidor";
respuestasDespliegue[3][34]="Permiten limitar el acceso al servidor bloqueando direcciones IP ";
respuestasDespliegue[3][35]="Los criterios elevados de seguridad";
respuestasDespliegue[3][36]="Hacer pruebas de rendimiento en un servidor web";
respuestasDespliegue[3][37]="Compilar código PHP de manera sencilla";
respuestasDespliegue[3][38]="Verificar la configuración de Apache antes de aplicar cambios";
respuestasDespliegue[3][39]="Ninguna de las anteriores";

preguntasDespliegue[3][0]="En Ubuntu, los ficheros de configuración se almacenan en la ruta:";
preguntasDespliegue[3][1]="El fichero de configuración de php se llama:";
preguntasDespliegue[3][2]="Apache organiza los sitios web en sistema llamado:";
preguntasDespliegue[3][3]="En Apache y Nginx los sitios web activados se guardan en…";
preguntasDespliegue[3][4]="En servidores Apache y Nginx, el archivo de logs que almacena las conexiones al servidor se llama …";
preguntasDespliegue[3][5]="Para que un certificado digital sea válido, …";
preguntasDespliegue[3][6]="SSL es…";
preguntasDespliegue[3][7]="HTTPS…";
preguntasDespliegue[3][8]="Los módulos de PHP…";
preguntasDespliegue[3][9]="El comando AB permite…";

respuestasDespliegueCorrectas[3][0]="/etc/";
respuestasDespliegueCorrectas[3][1]="php.ini";
respuestasDespliegueCorrectas[3][2]="VirtualHost";
respuestasDespliegueCorrectas[3][3]="La carpeta sites-enabled";
respuestasDespliegueCorrectas[3][4]="Access.log";
respuestasDespliegueCorrectas[3][5]="Debe estar firmado por una CA";
respuestasDespliegueCorrectas[3][6]="Un protocolo que asegura el envío de información entre emisor y receptor con un cifrado de clave abierta";
respuestasDespliegueCorrectas[3][7]="Utiliza el puerto TCP 443 para establecer conexiones seguras";
respuestasDespliegueCorrectas[3][8]="Añaden funcionalidades extras al servidor";
respuestasDespliegueCorrectas[3][9]="Hacer pruebas de rendimiento en un servidor web";

//Tema 4
respuestasDespliegue[4][0]="Mejorar el rendimiento de PHP";
respuestasDespliegue[4][1]="Alojar diferentes sitios webs en un mismo servidor";
respuestasDespliegue[4][2]="Gestionar bases de datos MySQL";
respuestasDespliegue[4][3]="Ninguna de las anteriores es correcta";
respuestasDespliegue[4][4]="Cuando vendemos servicios de microinformatica";
respuestasDespliegue[4][5]="Cuando realizamos balanceo de carga entre dos servidores";
respuestasDespliegue[4][6]="Cuando un mismo servidor web aloja múltiples sitios webs";
respuestasDespliegue[4][7]="Ninguna de las anteriores es correcta";
respuestasDespliegue[4][8]="Tantas direcciones IP como sitios queramos publicar";
respuestasDespliegue[4][9]="Ninguna IP pública";
respuestasDespliegue[4][10]="Una única IP pública";
respuestasDespliegue[4][11]="Ninguna de las anteriores";
respuestasDespliegue[4][12]="Un software para gestionar máquinas virtuales";
respuestasDespliegue[4][13]="Un software para gestionar servidores webs";
respuestasDespliegue[4][14]="Un software para gestionar dockers";
respuestasDespliegue[4][15]="Ninguna de las anteriores";
respuestasDespliegue[4][16]="El archivo de configuración maestro del servidor";
respuestasDespliegue[4][17]="La ruta donde se guardan las configuraciones";
respuestasDespliegue[4][18]="La ruta donde se almacena la carpeta pública del servidor web";
respuestasDespliegue[4][19]="Ninguna de las anteriores";
respuestasDespliegue[4][20]="URL completa y puerto en formato URL:PUERTO";
respuestasDespliegue[4][21]="FQDN y puerto en formato FQDN:PUERTO";
respuestasDespliegue[4][22]="DocumentRoot y puerto en formato DOCUMENTROOT:PUERTO";
respuestasDespliegue[4][23]="Ninguna de las anteriores";
respuestasDespliegue[4][24]="a2ensite";
respuestasDespliegue[4][25]="a2enmod";
respuestasDespliegue[4][26]="a2dismod";
respuestasDespliegue[4][27]="Ninguna de las anteriores";
respuestasDespliegue[4][28]="Correcto";
respuestasDespliegue[4][29]="Falso. Los virtualHost son propios de Apache. En Nginx se llaman Virtual blocks";
respuestasDespliegue[4][30]="Falso. Los virtualHost son propios de Apache y en nginx se llaman VirtualServers";
respuestasDespliegue[4][31]="Un protocolo de seguridad de las páginas web";
respuestasDespliegue[4][32]="Una redirección de tipo temporal";
respuestasDespliegue[4][33]="No existen las redirecciones 301";
respuestasDespliegue[4][34]="Una redirección de tipo permanente";
respuestasDespliegue[4][35]="Ninguna de las anteriores";
respuestasDespliegue[4][36]="Activar el módulo rewrite";
respuestasDespliegue[4][37]="Desactivar el módulo rewrite";
respuestasDespliegue[4][38]="Activar el módulo redirect";
respuestasDespliegue[4][39]="Los criterios elevados de seguridad";

preguntasDespliegue[4][0]="Los host virtuales nos permiten…";
preguntasDespliegue[4][1]="Decimos que hacemos hosting cuando…";
preguntasDespliegue[4][2]="Para hacer multisite en un servidor web necesitaremos…";
preguntasDespliegue[4][3]="cPanel es:";
preguntasDespliegue[4][4]="El DocumentRoot de un servidor web es…";
preguntasDespliegue[4][5]="Para configurar un virtualHost indicamos…";
preguntasDespliegue[4][6]="El comando para activar un sitio disponible en Apache es…";
preguntasDespliegue[4][7]="Los virtualHost son propios de Nginx…";
preguntasDespliegue[4][8]="Una redirección HTTP 301 es …";
preguntasDespliegue[4][9]="En Apache, para utilizar redirecciones necesitaremos…";

respuestasDespliegueCorrectas[4][0]="Alojar diferentes sitios webs en un mismo servidor";
respuestasDespliegueCorrectas[4][1]="Cuando un mismo servidor web aloja múltiples sitios webs";
respuestasDespliegueCorrectas[4][2]="Una única IP pública";
respuestasDespliegueCorrectas[4][3]="Un software para gestionar servidores webs";
respuestasDespliegueCorrectas[4][4]="La ruta donde se almacena la carpeta pública del servidor web";
respuestasDespliegueCorrectas[4][5]="FQDN y puerto en formato FQDN:PUERTO";
respuestasDespliegueCorrectas[4][6]="a2ensite";
respuestasDespliegueCorrectas[4][7]="Falso. Los virtualHost son propios de Apache. En Nginx se llaman Virtual blocks";
respuestasDespliegueCorrectas[4][8]="Una redirección de tipo permanente";
respuestasDespliegueCorrectas[4][9]="Activar el módulo rewrite";

//Tema 5
respuestasDespliegue[5][0]="Certificados de seguridad";
respuestasDespliegue[5][1]="Certificados SSL";
respuestasDespliegue[5][2]="Certificados autofirmados";
respuestasDespliegue[5][3]="Ninguna de las anteriores es correcta";
respuestasDespliegue[5][4]="Permiten realizar un cifrado de los datos transmitidos utilizando la clave privada";
respuestasDespliegue[5][5]="Caducan a los pocos meses para garantizar la seguridad";
respuestasDespliegue[5][6]="Permiten verificar la identidad del servidor web";
respuestasDespliegue[5][7]="A y C son correctas ";
respuestasDespliegue[5][8]="Instalar los certificados SSL en los servidores";
respuestasDespliegue[5][9]="Verificar la identidad de los solicitantes de un certificado, así como de la emisión de los mismos y gestionar el estado de los certificados emitidos";
respuestasDespliegue[5][10]="Cifrar los datos en las transmisiones HTTPS";
respuestasDespliegue[5][11]="Ninguna de las anteriores";
respuestasDespliegue[5][12]="Utilizando el servicio de Verising";
respuestasDespliegue[5][13]="Utilizando el servicio de Comodo SSL";
respuestasDespliegue[5][14]="Utilizando el servicio de Let’s Encrypt";
respuestasDespliegue[5][15]="Ninguna de las anteriores";
respuestasDespliegue[5][16]="Le permite proteger el directorio de su espacio web con un cifrado con contraseña";
respuestasDespliegue[5][17]="  Tiene una alta seguridad puesto que el sistema tiene una llave para cifrar y otra para descifrar. ";
respuestasDespliegue[5][18]="  Define qué nodos activan el nombre de host en una red y su acceso. ";
respuestasDespliegue[5][19]="Ninguna de las anteriores";
respuestasDespliegue[5][20]="authbasic";
respuestasDespliegue[5][21]="Apache_mod_basic";
respuestasDespliegue[5][22]="Mod_rewrite";
respuestasDespliegue[5][23]="Ninguna de las anteriores";
respuestasDespliegue[5][24]="En un archivo PHP dentro de la carpeta que queremos proteger";
respuestasDespliegue[5][25]="En el virtualHost del sitio web que estamos configurando";
respuestasDespliegue[5][26]="En el fichero /etc/apache2/apache.conf";
respuestasDespliegue[5][27]="Un protocolo de seguridad de las páginas web";
respuestasDespliegue[5][28]="Desactiva el firewall de linux";
respuestasDespliegue[5][29]="Activa el firewall de Linux";
respuestasDespliegue[5][30]="Muestra un informe del estado del firewall y lista las reglas";
respuestasDespliegue[5][31]="Ninguna de las anteriores";
respuestasDespliegue[5][32]="Permitirá conexiones SSH desde la IP 192.168.31.5";
respuestasDespliegue[5][33]="Permitirá conexiones desde la IP 192.168.31.5 a cualquier puerto";
respuestasDespliegue[5][34]="Denegará conexiones desde la IP 192.168.31.5 al puerto 22";
respuestasDespliegue[5][35]="Los criterios elevados de seguridad";
respuestasDespliegue[5][36]="Permite banear una dirección IP si detecta inicios de sesión incorrectos";
respuestasDespliegue[5][37]="Se utiliza para mejorar el rendimiento del servidor";
respuestasDespliegue[5][38]="Permite la creación de reglas de filtrado de paquetes";
respuestasDespliegue[5][39]="Ninguna de las anteriores";

preguntasDespliegue[5][0]="A los certificados digitales también los llamados:";
preguntasDespliegue[5][1]="Los certificados digitales...";
preguntasDespliegue[5][2]="Las CA (Certification Authority) se encargan de…";
preguntasDespliegue[5][3]="Certbot es una herramienta que nos permite instalar certificados digitales…";
preguntasDespliegue[5][4]="El uso del fichero .htaccess…";
preguntasDespliegue[5][5]="En Apache, la autenticación basic utiliza el módulo…";
preguntasDespliegue[5][6]="Los mecanisimos de autenticación de Apache se configuran en…";
preguntasDespliegue[5][7]="El comando UFW Status numbered…";
preguntasDespliegue[5][8]="El comando UFW allow from 192.168.31.5 to any port 22…";
preguntasDespliegue[5][9]="Fail2Ban…";

respuestasDespliegueCorrectas[5][0]="Certificados SSL";
respuestasDespliegueCorrectas[5][1]="A y C son correctas ";
respuestasDespliegueCorrectas[5][2]="Verificar la identidad de los solicitantes de un certificado, así como de la emisión de los mismos y gestionar el estado de los certificados emitidos";
respuestasDespliegueCorrectas[5][3]="Utilizando el servicio de Let’s Encrypt";
respuestasDespliegueCorrectas[5][4]="Le permite proteger el directorio de su espacio web con un cifrado con contraseña";
respuestasDespliegueCorrectas[5][5]="authbasic";
respuestasDespliegueCorrectas[5][6]="En el virtualHost del sitio web que estamos configurando";
respuestasDespliegueCorrectas[5][7]="Muestra un informe del estado del firewall y lista las reglas";
respuestasDespliegueCorrectas[5][8]="Permitirá conexiones SSH desde la IP 192.168.31.5";
respuestasDespliegueCorrectas[5][9]="Permite banear una dirección IP si detecta inicios de sesión incorrectos";

//Tema 6
respuestasDespliegue[6][0]="núcleo";
respuestasDespliegue[6][1]="middleware";
respuestasDespliegue[6][2]="kernel";
respuestasDespliegue[6][3]="Ninguna de las anteriores es correcta";
respuestasDespliegue[6][4]="Aplicaciones web escritas en Java que son compiladas para ser ejecutadas por un servidor de aplicaciones web";
respuestasDespliegue[6][5]="Módulos php";
respuestasDespliegue[6][6]="Servidores web";
respuestasDespliegue[6][7]="Servicios que nos permiten desplegar aplicaciones webs";
respuestasDespliegue[6][8]="Un servidor web";
respuestasDespliegue[6][9]="Un servidor de aplicaciones";
respuestasDespliegue[6][10]="Un servidor de transferencia de archivos";
respuestasDespliegue[6][11]="Ninguna de las anteriores";
respuestasDespliegue[6][12]="PHP-7.0";
respuestasDespliegue[6][13]="Python";
respuestasDespliegue[6][14]="Java Runtine Environment";
respuestasDespliegue[6][15]="Ninguna de las anteriores";
respuestasDespliegue[6][16]=".war ";
respuestasDespliegue[6][17]=".jar";
respuestasDespliegue[6][18]=".zar ";
respuestasDespliegue[6][19]="Ninguna de las anteriores";
respuestasDespliegue[6][20]="IDE";
respuestasDespliegue[6][21]="EDI";
respuestasDespliegue[6][22]="CAD";
respuestasDespliegue[6][23]="Ninguna de las anteriores";
respuestasDespliegue[6][24]="web.java";
respuestasDespliegue[6][25]="Web.xml";
respuestasDespliegue[6][26]="Web.conf";
respuestasDespliegue[6][27]="Un protocolo de seguridad de las páginas web";
respuestasDespliegue[6][28]="Un servidor de aplicaciones javacript";
respuestasDespliegue[6][29]="Un servidor web";
respuestasDespliegue[6][30]="Un servidor DNS";
respuestasDespliegue[6][31]="Ninguna de las anteriores";
respuestasDespliegue[6][32]="Motor V8 de Oracle";
respuestasDespliegue[6][33]="Motor es5";
respuestasDespliegue[6][34]="Motor V8 de Google";
respuestasDespliegue[6][35]="Ninguna de las anteriores";
respuestasDespliegue[6][36]="Escalabilidad";
respuestasDespliegue[6][37]="independencia de software";
respuestasDespliegue[6][38]="facilidad de mantenimiento";
respuestasDespliegue[6][39]="Todas las anteriores son correctas";

preguntasDespliegue[6][0]="El software intermedio que permite la ejecución de código y se comunica con la base de datos se llama:";
preguntasDespliegue[6][1]="Los servlest son...";
preguntasDespliegue[6][2]="Apache Tomcat es…";
preguntasDespliegue[6][3]="Qué será necesario para poder ejecutar Tomcat…";
preguntasDespliegue[6][4]="Los archivos, contenido multimedia y librerías de una aplicación web se empaquetarán en un archivo con extensión…";
preguntasDespliegue[6][5]="Los programas que nos aportan un entorno de desarrollo integrado se llaman…";
preguntasDespliegue[6][6]="¿Qué nombre tendrá el descriptor de despliegue de una aplicación web?";
preguntasDespliegue[6][7]="Node.js es…";
preguntasDespliegue[6][8]="¿Qué motor de JavaScript utiliza node.js?";
preguntasDespliegue[6][9]="¿Qué ventajas aporta Docker en el despliegue de aplicaciones?";

respuestasDespliegueCorrectas[6][0]="middleware";
respuestasDespliegueCorrectas[6][1]="Aplicaciones web escritas en Java que son compiladas para ser ejecutadas por un servidor de aplicaciones web";
respuestasDespliegueCorrectas[6][2]="Un servidor de aplicaciones";
respuestasDespliegueCorrectas[6][3]="Java Runtine Environment";
respuestasDespliegueCorrectas[6][4]=".war ";
respuestasDespliegueCorrectas[6][5]="IDE";
respuestasDespliegueCorrectas[6][6]="Web.xml";
respuestasDespliegueCorrectas[6][7]="Un servidor de aplicaciones javacript";
respuestasDespliegueCorrectas[6][8]="Motor V8 de Google";
respuestasDespliegueCorrectas[6][9]="Todas las anteriores son correctas";

//Tema 7
respuestasDespliegue[7][0]="RespuestaCorrecta";
respuestasDespliegue[7][1]="Respuesta";
respuestasDespliegue[7][2]="Respuesta";
respuestasDespliegue[7][3]="Respuesta";
respuestasDespliegue[7][4]="RespuestaCorrecta";
respuestasDespliegue[7][5]="Respuesta";
respuestasDespliegue[7][6]="Respuesta";
respuestasDespliegue[7][7]="Respuesta";
respuestasDespliegue[7][8]="RespuestaCorrecta";
respuestasDespliegue[7][9]="Respuesta";
respuestasDespliegue[7][10]="Respuesta";
respuestasDespliegue[7][11]="Respuesta";
respuestasDespliegue[7][12]="RespuestaCorrecta";
respuestasDespliegue[7][13]="Respuesta";
respuestasDespliegue[7][14]="Respuesta";
respuestasDespliegue[7][15]="Respuesta";
respuestasDespliegue[7][16]="RespuestaCorrecta";
respuestasDespliegue[7][17]="Respuesta";
respuestasDespliegue[7][18]="Respuesta";
respuestasDespliegue[7][19]="Respuesta";
respuestasDespliegue[7][20]="RespuestaCorrecta";
respuestasDespliegue[7][21]="Respuesta";
respuestasDespliegue[7][22]="Respuesta";
respuestasDespliegue[7][23]="Respuesta";
respuestasDespliegue[7][24]="RespuestaCorrecta";
respuestasDespliegue[7][25]="Respuesta";
respuestasDespliegue[7][26]="Respuesta";
respuestasDespliegue[7][27]="Respuesta";
respuestasDespliegue[7][28]="RespuestaCorrecta";
respuestasDespliegue[7][29]="Respuesta";
respuestasDespliegue[7][30]="Respuesta";
respuestasDespliegue[7][31]="Respuesta";
respuestasDespliegue[7][32]="RespuestaCorrecta";
respuestasDespliegue[7][33]="Respuesta";
respuestasDespliegue[7][34]="Respuesta";
respuestasDespliegue[7][35]="Respuesta";
respuestasDespliegue[7][36]="RespuestaCorrecta";
respuestasDespliegue[7][37]="Respuesta";
respuestasDespliegue[7][38]="Respuesta";
respuestasDespliegue[7][39]="Respuesta";

preguntasDespliegue[7][0]="Pregunta";
preguntasDespliegue[7][1]="Pregunta";
preguntasDespliegue[7][2]="Pregunta";
preguntasDespliegue[7][3]="Pregunta";
preguntasDespliegue[7][4]="Pregunta";
preguntasDespliegue[7][5]="Pregunta";
preguntasDespliegue[7][6]="Pregunta";
preguntasDespliegue[7][7]="Pregunta";
preguntasDespliegue[7][8]="Pregunta";
preguntasDespliegue[7][9]="Pregunta";

respuestasDespliegueCorrectas[7][0]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][1]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][2]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][3]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][4]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][5]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][6]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][7]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][8]="RespuestaCorrecta";
respuestasDespliegueCorrectas[7][9]="RespuestaCorrecta";


   
var tema = 1;

addEventListener("load",function Start(){
    for(var i = 0; i < 10; i++){
        document.getElementsByClassName("titlePregunta")[i].innerHTML = preguntasDespliegue[tema][i];
        
    }
    for(var i = 2; i < 42; i++){
        document.getElementsByTagName("label")[i].firstElementChild.innerHTML = respuestasDespliegue[tema][i-2];
        
    }
    
    var aux = 2;
    for(var i = 2; i < 12; i++){
        for(var j = aux; j < 4+aux; j++){
            if(document.getElementsByTagName("label")[j].firstElementChild.innerHTML == respuestasDespliegueCorrectas[tema][i-2]){
                document.getElementsByTagName("label")[j].childNodes[2].value = "Correcta"
                if(aux < 3) {
                    intCorrectas.push(j-1)
                }
                else intCorrectas.push(j-4*(i-2)-1)
                
                

            }
            //console.log((j-2) + "-" + (i-2) + ":" + document.getElementsByTagName("label")[j].firstElementChild.innerHTML + '-' + respuestasDespliegueCorrectas[tema][i-2])

        }

        aux+=4
        
    }
    
})

function Select(a,b){
    intrespuestasDespliegue[a] = b
    console.log(a + "-" + intrespuestasDespliegue[a] + "," + intCorrectas[a])
}

function Finalizar(){
    document.getElementById('btnContainerFlotante').style.display = 'flex'
    var nota = 0;
    for(var i = 0; i < 10;i++){
        
        if(intrespuestasDespliegue[i] == intCorrectas[i]){
            nota++;
        }
    }
    document.getElementById("nota").innerHTML = "<p>" + nota + "</p>"
    document.getElementById('btnBuscar').value = 'Mostrar';
}

