var http = require('http');
const fs = require('fs')
http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('readme.txt', (err, data) =>{
        res.write(data);
        return res.end();
    })
    // res.write(req.url);
}).listen(8080);