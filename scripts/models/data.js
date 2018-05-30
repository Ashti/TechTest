module.exports = (sequelize, DataTypes) =>
      sequelize.define('Data',{
            id : {type: DataTypes.STRING, primaryKey: true, unique: true},
            data: DataTypes.STRING
})
