const sequelize = require("./db")
const { DataTypes } = require('sequelize');

const Article = sequelize.define("article", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    paranoid: true,
})

module.exports = Article;