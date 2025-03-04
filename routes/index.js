// routes/index.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// 读取当前目录下的所有文件
fs.readdirSync(__dirname).forEach((file) => {
  // 跳过 index.js 自身
  if (file === 'index.js') return;
  // 获取文件名（不含扩展名）作为路由前缀
  const routeName = path.basename(file, path.extname(file));
  // 动态引入路由模块
  const routeModule = require(`./${file}`);
  // 将路由模块挂载到对应的路径
  router.use(`/${routeName}`, routeModule);
});

module.exports = router;
