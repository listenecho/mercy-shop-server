const mysql = require('mysql');
const $conf = require('../config/mysql');

// 使用连接池,提升性能
const pool = mysql.createPool($conf.mysql)
//     pool.getConnection((err, connection) => {
//         connection.query('SELECT * FROM good',( err, res) => {
//             console.log(res)
//         })
//  })
/**
 * 
 * @param {*} sql sql为SQL查询语句,不能为空,String
 * @param {*} fn fn 回调函数
 * @param {*} type SQL描述,必传参数
 */
 const sqlOpt = async (sql, type) => {
     return  new Promise((reslove, reject) => {
          pool.getConnection((err, connection) => {
             if(err) reject('连接数据库失败')
             connection.query(sql,(err, res) => {
                 if(err) reject(null)
                 reslove(res)
             })
         })
     }).catch(err => console.log(err))
 }

/**
 * 
 * @param {*} res 路由请求res参数,响应给前台页面
 * @param {*} data 请求到的数据
 * @param {*} sucessDes 成功信息
 * @param {*} errorDes 错误信息
 */
 const commonRes = (res, data, sucessDes, errorDes) => {
     console.log(data)
     //校验数据后期视情况而定
    if(data) {
        res.json({
            code: 1,
            data: data,
            message: sucessDes
        })
        return
    }
    res.json({
        code: 0,
        data: [],
        message: errorDes
    })
}
 module.exports = {
    sqlOpt,
    commonRes
 }