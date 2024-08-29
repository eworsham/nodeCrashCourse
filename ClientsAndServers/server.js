const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // Set header content type
    res.setHeader('Content-Type', 'text/html')

    res.write('<h1>Hello World</h1>')
    res.write('<p>hello, again</p>')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})