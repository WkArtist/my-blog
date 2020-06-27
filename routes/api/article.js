const express = require('express')
const router = express.Router()
const articleServ = require('../../services/articleServices')
const sendMsg = require('../getSendResult')
const fs = require('fs')
const path = require('path')

router.get('/', sendMsg.asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const tag = req.query.tag;
    return await articleServ.getArticleList(page, limit, tag);
}))

router.get('/detail/:id', sendMsg.asyncHandler(async (req, res) => {
    const id = req.params.id
    return await articleServ.getArtDetailById(id)
}))

router.post('/', sendMsg.asyncHandler(async (req, res) => {
    return await articleServ.addArticle(req.body)
}))

module.exports = router