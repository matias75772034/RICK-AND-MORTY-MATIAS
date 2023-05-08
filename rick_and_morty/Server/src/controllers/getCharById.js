const axios = require('axios')

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)
    .then((data) => {
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        res.writeHead(200, {'Content-type':'application/json'})
        res.end(JSON.stringify(character))
    })
    .catch((error) => {
        res.writeHead(500, {'Content-type':'text/plain'})
        res.end(error.message)
    })  
}

module.exports = {
    getCharById
}