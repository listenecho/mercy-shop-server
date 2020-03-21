
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3031;
const router = require('./router/index')
// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置头部请求 允许跨域
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/index', (req, res) => res.send('Hello World!'))
// 注册路由
router(app)
app.listen(port, () => {
  console.log("server is running on " + port);
})