const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('splitter', 'root', 'toor', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }
// const User = sequelize.define('User', {
// }, {
//     // Other model options go here
// });
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allwNull: false,
        autoIncrement: true,
        primaryKey: true 

    },
    UserName : {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserEmail:{
        type: DataTypes.STRING,
        allowNull: false
    },
    UserPhoneNo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    UserPassword: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'UserList',
    timestamps: false
});

let promise = new Promise(function (resolve, reject) {
    const users = User.findAll();
    resolve(users);
});


const checkIfItsDone = () => {
    promise
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
}

checkIfItsDone();


// promise.then( ok => {
//     console.log(ok);
// })

// const users = User.findAll();
// console.log(users);
// for(let i = 0; i< users.length; i++){
//     console.log(user[i]);
// }

// console.log(users.every(user => user instanceof User)); // true
// console.log("All users:", JSON.stringify(users, null, 2));