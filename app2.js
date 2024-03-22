//1
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3000);
//2
//modul
exports.myDateTime = function () {
  return Date();
};
//app
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(3000);
//3
var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(3000);
//4
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);
//5
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
  console.log('I hear a scream!');
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');
//6 wszystko z lekcji
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.writeHead(200,{'content-type':'application/json'})
    if (req.url === '/'){
        //var html = fs.readFileSync('./plik.html','utf8');
        //var Header = 'Home page';
        //html = html.replace('{ Header }',Header);
        //res.end(html);

        res.writeHead(200);

    }else if(req.url === '/product'){/
        res.writeHead(200);
        res.end('Products');
    }else if(req.url === '/blog'){
        res.writeHead(200);
        res.end('Blog');
    }else{
        res.writeHead(404);
        res.end('404: Not found');
    }
    
    
    fs.createReadStream('./plik.html').pipe(res);
    res.writeHead(200);
    res.end(html);
    
}).listen(3000);
console.log("Server on")

//express
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Home');
})
app.get('/contact',function(req,res){
    res.send('contact')
})
app.get('/product/:id',function(req,res){
    res.send('id: ' + req.params.id)
})
app.get('/other',function(req,res){
    res.send('other')
})
app.listen(3000);







