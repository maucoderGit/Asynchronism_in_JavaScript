// Lo primero que debemos hacer es importar la libreria,
// vale mencionar que podemos llamar la variable como queramos.

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// creamos otra variable que en este caso, sera la contenedora de la
// dirección de nuestra API.

let API = 'https://rickandmortyapi.com/api/character/'

//creamos una función que obtenga la data y sea asincrona de esta forma:

// Primero debemos pedir la url de la API, y la función callback.
function fetch_data(url_api, callback){    

    // ahora debemos crear una instancia tipo objeto con el operador New.

    let xhttp = new XMLHttpRequest();

    // obtemos la data y le decimos a esa instancia 'open' 
    // que sea o no asincrona, 
    // en este caso debe serlo, además es una buena práctica.

    xhttp.open('GET', url_api, true);
    
    // creamos otra instancia y en este caso contendra una función que
    // por buena práctica contiene un evento que puede ser o no usado.

    xhttp.onreadystatechange = function (event){
        
        // Aseguramos que el estado de el REQUEST sea el que queremos
        // 4: request finished and response is ready

        if (xhttp.readyState === 4)
        {

            // si el estatus es 200, todo esta bien.

            if(xhttp.status === 200)
            {

                // pasamos la data a responseText 
                // para que JSON pueda entenderlo

                callback(null, JSON.parse(xhttp.responseText));
            }
            else {

                // en caso de que algo saliera mal, creamos un else que 
                // indique el error con la Api
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }

    // enviamos la data que fue solicitada
    xhttp.send();
}

// Ya con la función generada, solo debemos llamarla y darle el url.

fetch_data(API, function (error1, data1) {

    // ahora verificamos si hay un error, en ese caso, se detendra nuestro
    // código. 

    // Sí no, continuara mientras guarda la info que le pedimos en data1,
    // data2 , etc...
    if (error1) return console.error(error1);

        // menciono aqui que el id 0 no es obligatorio, solo fue una
        // desición del profesor
    fetch_data(API + data1.results[0].id, function (error2, data2) {
        if(error2) return console.log(error2);
        fetch_data(data2.origin.url, function (error3, data3){
            if (error3) return console.error(error3);
            
            // Ya que no hubo un error, podemos mostrar nuestra info en
            // consola.
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
}) 

