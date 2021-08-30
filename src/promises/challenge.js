const fetch_data = require('../utils/fetch_data')
const API = 'https://rickandmortyapi.com/api/character/'

fetch_data(API)
    .then (data => {
        console.log(data.info.count)
        return fetch_data(`${API}${data.result[0].id}`)
    })
    .then (data => {
        console.log(data.name)
        return fetch_data(data.origin.url)
    })
    .then (data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err))