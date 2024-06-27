const http = require('http')

http.createServer((req,res)=>{
res.writeHead(200,{'content-Text': 'text/html'})
res.write('<h1>Hello Deji</h1>')
res.end()
}).listen(3000)

// send the response body as "Hello world"

console.log('Server running at http://localhost:3000/');
