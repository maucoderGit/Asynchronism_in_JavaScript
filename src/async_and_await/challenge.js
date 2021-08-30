const fetch_data = require("--/utils/fetch_data")
const API = "https://rickandmortyapi.com/api/character/"

const another_function = async (url_api) => {
    try{
        const data = await fetch_data(url_api)
        const character = await fetch_data(`${API}${data.results[0].id}`)
        const origin = await fetch_data(characcter.origin.url)
    
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (error) {
        console.error(error)
    }
}

console.log("Before")
another_function(API)
console.log("After")