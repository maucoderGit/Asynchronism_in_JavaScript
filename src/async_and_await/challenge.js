const fetch_data = require("--/utils/fetch_data")
const API = "https://rickandmortyapi.com/api/character/"

const another_function = async (url_apu) => {
    try{
        const data = await fetch_data(url_api)
    } catch (error) {
        console.error(error)
    }
}