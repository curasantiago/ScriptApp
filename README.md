Script App es un proyecto en el cual se puede ver los items que ha vendido un seller de Mercado Libre.
Lo que hace es consultar a la api de mercado libre 'https://api.mercadolibre.com/' (en https://developers.mercadolibre.com.ar/ hay mas información) respecto a la información
de un vendedor en particular.

Pasos para ejecutar el proyecto:
1. Descargarlo en formato ZIP
2. Extraerlo
3. En la carpeta raíz del proyecto se pueden utilizar dos formas para obtener el resultado:

A) A través de un comando en la terminal. Ejecutar 'npm start [id del seller]'. Por ejemplo: 'npm start 179571326'.
Se va a crear un documento de texto con el titulo 'seller[id ingresado]' el cual va a contener información de cada item(ID, Titulo, ID de la categoría, Nombre de la categoría). Además, va a imprimir por consola el mismo resultado.

B) Ingresando a una URL específica. Ejecutar 'npm start' para levantar el servidor. Ingresar a 'http://localhost:3000/api/seller/[id del seller]'. 
Por ejemplo: 'http://localhost:3000/api/seller/179571326'.
Va a crear un documento de texto con las mismas caracterísitcas mencionadas previamente. Además, va a devolver un JSON a la url ingresada.

Stack:
Use Node.js para crear el servidor y utilice express como framework. En la carpeta 'controller' y 'script' van a encontrar la lógica que utilice
para obtener las respuestas.
Utilice axios para hacer la configuración a los endpoints y las consultas.
Manejo de Async/await para código asíncrono. Necesito esperar la respuesta que viene de la API.
Hago dos consultas a la API de mercado libre. La primera consulta es para obtener el ID, titulo, ID categoria de cada item. Creo un array donde cada objeto
corresponde a un item.
La segunda consulta es para obtener el nombre de la categoria. Una vez que tengo el array de objetos, utilizo el ID de cada uno para obtener el nombre de la categoría.

En Script App se utiliza el ID como parametro. Se puede utilizar otro ID para obtener la misma información sobre otro vendedor.
Por ejemplo:
'npm start 451257294'
'http://localhost:3000/api/seller/451257294'

En 'seller179571326.txt' se encuentra el LOG del ID requerido.

Espero que lo disfruten!
