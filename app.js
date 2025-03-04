const express = require('express');
const path = require('path');
const app = express();
// 在 app.js 中引入路由模块
const indexRouter = require('./routes/index.js');

app.use('/', indexRouter);
// 设置视图引擎为 EJS
app.set('view engine', 'ejs');
// 设置静态文件夹
app.use(express.static(path.join(__dirname, 'public')));
// 设置视图文件夹
app.set('views', path.join(__dirname, 'views'));
