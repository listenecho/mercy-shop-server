const express = require('express')
const router = express.Router()
const sql_good = require('../dao/sql_good')


/**
 * 添加商品信息
 * 标题
 * 图片
 * 描述
 * 价格
 * 商家
 * 时间 默认
 */


/**查询所有商品 */
router.get('/queryAllGoods', (req, res, next) => {
    sql_good.queryAllGoods(req, res, next)
})

/**添加商品信息 */
router.post('/addGood', (req, res, next) => {
    sql_good.addGood(req, res, next)
})
module.exports = router;