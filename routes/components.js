// 列表页

// routes/users.js
const express = require('express');
const router = express.Router();

// 定义用户列表路由
router.get('/', async (req, res, next) => {
  console.log('' + req.params.id);
  res.render('test', { title: '关于我们', message: '了解更多关于我们的信息。' });
  next();
});

// 定义用户列表路由
router.get('/:id', async (req, res, next) => {
  console.log('' + req.params.id);
  res.render('test', { title: '关于我们', message: '了解更多关于我们的信息。' });
  next();
});

module.exports = router;
