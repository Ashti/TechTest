var express = require('express');
var path = require('path');
var app = express();

const hostname = '127.0.0.1';
const port = 3000;
__dirname = path.resolve();

app.get('/', function(req, resp){
  resp.sendFile('index.html', { root: path.join(__dirname, './scripts')});
});

app.listen(port, hostname, function(){
  console.log('listening now');
});
