const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog', 'root', '159292', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;