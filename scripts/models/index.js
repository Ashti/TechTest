"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var sequelize = new Sequelize('inputs', 'bob', 'pass', {
      dialect: 'sqlite',
      host: 'localhost',
      storage: './inputs.sqlite'
})

var db = {};

sequelize
      .authenticate()
      .then(() => {
      console.log('Connection has been established successfully.');
      })
      .catch(err => {
            console.error('Unable to connect to the database:', err);
      });

__dirname = path.join(path.resolve(), 'scripts', 'models');

fs
    .readdirSync(__dirname)
    .filter(function(file){
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
