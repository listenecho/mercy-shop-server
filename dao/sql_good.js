const SQL = require('../lib/mysql')

/**
 * 查询商品信息所有数据
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const queryAllGoods = (req, res, next) => {
    let page = req.query.page || 1,
        pageSize = req.query.pageSize || 10,
        sql_queryAllGoods = `SELECT * FROM good order by good_id desc LIMIT ${(page - 1) * pageSize}, ${pageSize};`
        sql_queryAllCount =  `SELECT count(1) FROM good;`
    SQL.sqlOpt(`${sql_queryAllGoods} ${sql_queryAllCount}`,'查询所有商品信息')
        // .then(data => SQL.commonRes(res, data, "查询成功", "查询失败"))
        .then(data => {
            if(data.length > 0) {
                res.json({
                    code: 1,
                    data: {
                        list: data[0],
                        count:  data[1][0]['count(1)']
                    }
                })
            } else {
                res.json({
                    code: 0,
                    data: [],
                    message: "获取列表失败"
                })
            }
        })
}

/**
 * 添加商品
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const addGood = ((req, res, next) => {
    let { good_title = null, good_image = null, good_price = null, good_des = null, good_from = null } =  req.body;
    if(!good_title || !good_image || !good_price || !good_des || !good_from ) {
        SQL.commonRes(res, null, "","参数缺失")
        return false
    }
    let sql_addGood = `insert into good(good_id, good_title, good_image, good_price, good_des, good_from) 
                        value(0, "${good_title}", "${good_image}",  "${good_price}", "${good_des}", "${good_from}");`

    SQL.sqlOpt(sql_addGood, '查询所有商品信息')
        .then(data => SQL.commonRes(res, data, "添加成功", "添加失败"))
})

module.exports = {
    queryAllGoods,
    addGood
}