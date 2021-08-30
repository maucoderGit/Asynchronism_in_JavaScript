
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetch_data =(url_api) => {    
    return new Promise ((resolve, reject) => {

        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', url_api, true);
    
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4)
            {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error(`Error ${url_api}`))
            }
        }
    
        xhttp.send();
    })
}

fetch_data(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetch_data(API + data1.results[0].id, function (error2, data2) {
        if(error2) return console.log(error2);
        fetch_data(data2.origin.url, function (error3, data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
}) 