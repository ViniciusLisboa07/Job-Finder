const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./db/index.db'
});

module.exports = sequelize