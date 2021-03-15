# ScriptApp

Script App es un proyecto el cual sirve para ingresar un comando o una URL y obtener los datos de los items vendidos de un seller de Mercado Libre.

PASOS A SEGUIR PARA EJECUTAR EL PROYECTO:

1- Descargar en carpeta ZIP el proyecto en cuestión.

2- Extraerlo

3- Abrir una terminal en la carpeta raiz y ejecutar 'npm install'. Esto va a instalar todas las dependecias utilizadas en el proyecto.

Una vez instaladas todas las dependencias, hay dos formas de ejecutar el proyecto:

A) Mediante un script.
- Escribir en la terminal 'npm start [id del seller que se está buscando]' por ejemplo: 'npm start 179571326'.  Este comando va a generar un documento de texto
el cual se va a llamar 'seller[id ingresado]' y va a imprimir por consola el resultado.
Dentro del documento de texto van a encontrar los siguientes datos: ID del item, Titulo del item, ID de la categoría del item, Nombre de la categoría del item.

B) Levantando el servidor e ingresando a una URL específica.
- Escribir en la terminal 'npm start'. Una vez ingresado el comando, ingresar a 'http://localhost:3000/api/seller/[id del seller que se está buscando]'.
Por ejemplo: 'http://localhost:3000/api/seller/179571326' . El servidor va a responder en formato JSON a la URL ingresada. Igualmente va a generar un documento de texto
el cual va a seguir el mismo formato mencionado.

Cabe destacar que el ID es un parametro. Pueden ingresar otro ID y van a obtener otro vendedor.
Pueden hacerlo de la forma que ustedes deseen. 
Por ejemplo: 

- http://localhost:3000/api/seller/451257294
- npm start 451257294

---------------------------
Stack utilizado para desarrollar el proyecto:
El servidor se levanta en Node.js, utilizado express como framework.
En el archivo App.js van a encontrar toda la configuración del proyecto y donde se setean los middleware para utilizar la ruta.
Dentro del controlador está la lógica de los pedidos a la API de mercado libre. He utilizado AXIOS para hacer los requests.

Debido a la configuración de la API de mercado libre, tuve que utilizar dos consultas principales para obtener el resultado.
La primera de ellas, es a un ENDPOINT el cual hay que completarlo con el parametro. Lo van a encontrar dentro de './src/api/requests/default.js'. con el nombre de sellerURL.
Básicamente se hace un pedido asíncrono (hay que esperar el resultado para utilizarlo) al endpoint establecido, y utilizo la información que necesito.
El segundo pedido es a un ENDPOINT de categorias, el cual hay que completarlo utilizado el ID.

La lógica que utilice fue obtener todos los datos de los items y guardarlo en un array de objetos. Luego iterarlo, y completar el ID del endpoint de categorias, con cada ID
del array.

El documento de texto generado por el script es 'seller179571326.txt'.

Espero que lo disfruten!
