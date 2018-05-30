const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')
const {sequelize} = require('./scripts/models')

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(express.json());

require('./scripts/routes')(app)

sequelize.sync()
      .then(() => {
            app.listen(port, hostname, function(){
                  console.log('listening now at port ' + port);
            });
      })
