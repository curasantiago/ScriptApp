const sellerResource = require('../requests/resources');
const fs = require('fs')


module.exports = {
    getItems: async (req, res) => {
        
        let itemsOfSeller = await sellerResource.getItems(req.params.id); //Obtengo todos los items del vendedor atraves del id ingresado en la url

        const getCategory = async (id) => {
            let result = await sellerResource.getCategoryOfItem(id);
            return result.data.name
        } //Creo una función asíncrona el cual, una vez ingresado el id del item, me devuelve el nombre del mismo.
    
     
        let arrOfItems = []; //Creo un array de objetos donde van a estar todos los items del vendedor
    
         await itemsOfSeller.data.results.forEach( item => {
            let response = {
                item_id: item.id,
                item_title: item.title,
                item_category_id: item.category_id
            } //Itero y genero un objeto con la información necesaria.
            arrOfItems.push(response) //agrego el objeto al array creado previamente.
        })
        

        //Debido a como está desarrollada la api de mercado libre, no puedo obtener el nombre de la categoria solo con los datos de los items vendidos. Por lo tanto, hago otra consulta en el cual ingreso el ID de la categoria de cada objeto que cree en el array anterior. 

        for (let i=0; i<arrOfItems.length; i++) {
            let categoryName = await sellerResource.getCategoryOfItem(arrOfItems[i].item_category_id);
            arrOfItems[i].item_category_name = categoryName.data.name;
        } 
        

        res.json(arrOfItems) //Devuelvo el array con toda la información requerida.
        
        //Chequeo la longitud del array para evitar que se hagan consultas el cual no arrojen ningun resultado.
        if (arrOfItems.length > 0) {
            fs.writeFileSync(`seller${req.params.id}.txt`, JSON.stringify(arrOfItems, null, 2), 'utf-8') //Creo un log del vendedorID con todos los items
        }
    }
 
}


