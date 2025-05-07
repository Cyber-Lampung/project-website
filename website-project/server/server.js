const http = require('http')

// membuat server

const server = http.createServer((req, res) => {
    res.statusCode = 200; // status ok
    res.setHeader('Content-type','text/plain')
    res.end = "hello"
});

// tentukan port

const port = 5000;
server.listen(port, () => {
    console.log(`server berjalan di http://localhost:${port}`)
})