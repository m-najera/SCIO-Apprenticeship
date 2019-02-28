const http = require('http');
const url = require('url');
const calculadora = require('./calculadora');
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  var q = url.parse(req.url, true).query;
  var path = url.parse(req.url, true).pathname;
  var resultado;
  if (path == '/suma') {
    resultado = calculadora.suma(q.n1, q.n2);
    res.write("<h1>SUMA</h1><h2>" + resultado + "</h2>");
  } else if (path == '/resta') {
    resultado = calculadora.resta(q.n1, q.n2);
    res.write("<h1>RESTA</h1><h2>" + resultado + "</h2>");
  } else if (path == '/division') {
    resultado = calculadora.division(q.n1, q.n2);
    res.write("<h1>DIVISION</h1><h2>" + resultado + "</h2>");
  } else if (path == '/multiplicacion') {
    resultado = calculadora.multiplicacion(q.n1, q.n2);
    res.write("<h1>MULTIPLICACION</h1><h2>" + resultado + "</h2>");
  }
  res.end();
}).listen(8080)