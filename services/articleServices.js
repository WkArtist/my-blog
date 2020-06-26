const Article = require('../models/article')
const { Op } = require('sequelize')
const { pick } = require('../util/propertyHelper')

exports.getArticleList = async function (page = 1, limit = 5, tag) {
    const obj = {
        attributes: ["id", "title", "tag", "content", "createdAt", "updatedAt"],
        offset: (page - 1) * limit,
        limit: +limit
    }
    if (tag) {
        obj.where = {
            tag: tag
        }
    }
    const result = await Article.findAndCountAll(obj)
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}

exports.addArticle = async function (articleObj) {
    //只保留所需的数据
    articleObj = pick(articleObj, "title", "content", "tag")
    const ins = await Article.create(articleObj);
    return ins.toJSON();
}

