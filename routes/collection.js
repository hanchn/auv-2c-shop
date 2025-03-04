// 列表页

// routes/users.js
const express = require('express');
const router = express.Router();

// 定义用户列表路由
router.get('/', (req, res, next) => {
  res.send('用户列表');
  next();
});

// 定义获取特定用户信息的路由
router.get('/:id', (req, res, next) => {
  res.send(`用户ID: ${req.params.id}`);
  next()
});

module.exports = router;
