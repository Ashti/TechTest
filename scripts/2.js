var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
var uuid = require('uuid/v4')

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(express.json());

app.get('/', function(req, res){
      res.sendFile('index.html', { root: path.join(__dirname, './scripts')});
});

app.post('/handle', function(request, response){
      var a = request.body;
      var uniqueId = uuid();
      response.send("post World!");
      console.log(a)
      console.log(uniqueId)
});

app.listen(port, hostname, function(){
      console.log('listening now at port ' + port);
});
