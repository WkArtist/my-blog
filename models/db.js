const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog', 'root', '159292', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

module.exports = sequelize;