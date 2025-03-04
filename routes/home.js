// 主页

// routes/users.js
const express = require('express');
const router = express.Router();

// 定义用户列表路由
router.get('/', async (req, res, next) => {
  console.log("123123123")
  console.log('用户列表');
  res.send('首页');
  next();
});

// 人群列表
router.get('/:id', (req, res, next) => {
  res.send(`用户ID: ${req.params.id}`);
  next();
});

module.exports = router;
