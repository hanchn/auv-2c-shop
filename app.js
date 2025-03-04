const express = require('express');
const path = require('path');
const app = express();
// 在 app.js 中引入路由模块
const routes = require('./routes');
console.log(routes)
const config = require('config');
const port = config.get('port');
const logger = require('./middlewares/logger');

// 设置静态文件夹
app.use(express.static(path.join(__dirname, 'public')));

// 设置视图引擎为 EJS
app.set('view engine', 'ejs');
// 设置视图文件夹
app.set('views', path.join(__dirname, 'views/pages'));
app.use('/', routes);
// 使用日志中间件
app.use(logger);

// 使用配置
app.listen(port, () => {
  console.log(`服务器运行在端口：${port}`);
});
