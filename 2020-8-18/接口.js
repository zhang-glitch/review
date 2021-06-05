const http = require('http')

const server = new http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Disposition": 'attachment; filename="cool.html"'
  })
  res.end('xiazai')
}).listen(3000, () => {
  console.log('server is running at 3000')
})


