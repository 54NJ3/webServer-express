const http = require('http')


http.createServer((req,res) => {

    res.writeHead(200, {'Content-Type': 'application/json'})
    let answer = {
        name: 'Santiago',
        age: 20,
        url: req.url
    }
    
    res.write(JSON.stringify(answer))
    res.end()
})
.listen(8080);

console.log('Listening through port 8080') 