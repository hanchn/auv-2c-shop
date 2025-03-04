// 列表页

// routes/users.js
const express = require('express');
const router = express.Router();

// 定义用户列表路由
router.get('/components', async (req, res, next) => {
  console.log('' + req.params.id);
  res.render('components', { title: '关于我们', message: '了解更多关于我们的信息。' });
  next();
});

// 定义用户列表路由
router.get('/components/:id', async (req, res, next) => {
  console.log('' + req.params.id);
  res.render('components', { title: '关于我们', message: '了解更多关于我们的信息。' });
  next();
});

module.exports = router;
