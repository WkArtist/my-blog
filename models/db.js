const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog', 'root', '159292', {
    host: '111.229.27.99',
    dialect: 'mysql'
})

module.exports = sequelize;