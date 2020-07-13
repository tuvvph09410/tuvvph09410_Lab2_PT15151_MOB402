var express = require('express');
var app = express();
var http=require('http');
var calculator = require('./Caculator');
var bodyParser = require('body-parser');
// app.get('/', function (req, res) {
//     res.redirect('/index.html')
//     res.send('welcome')
// })
// app.listen(9203)
var a=10,b=5;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.post('/index', function (req, res, next) {
//     var body = req.body;
//     var a = body.soa;
//     var b = body.sob;
//     console.log(a);
//     console.log(a);
// });

http.createServer(function ( req,res ) {
res.writeHead(200,{'Content-Type' : 'text/html'});
res.end('Calulator: '+ calculator.multiply(a,b)+',' +calculator.add(a,b)+ ','+ calculator.subtract(a,b)) ;
}).listen(3040);
