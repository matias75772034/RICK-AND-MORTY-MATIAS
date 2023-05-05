const http = require('http');
const characters = require('./utils/data');
const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // rickandmorty character
    if(req.url.includes('/rickandmorty/character')){        
        const id = req.url.split('/').at(-1) // Obtenemos el ID

        let characterFilter = characters.find((character) => 
        character.id === Number(id))
        
        res.writeHead(200, {'Content-type':'application/json'})
        res.end(JSON.stringify(characterFilter))
    }
}).listen(PORT, console.log('port on 3001'))