// 主页

// routes/users.js
const express = require('express');
const router = express.Router();

// 定义用户列表路由
router.get('/', (req, res) => {
  console.log('用户列表');
  res.send('首页');
});

// 人群列表
router.get('/:id', (req, res) => {
  res.send(`用户ID: ${req.params.id}`);
});

module.exports = router;
