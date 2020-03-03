const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../configs/db');
// console.log(db.user + db.password + db.host);

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {sequelize:sequelize, DataTypes:DataTypes};