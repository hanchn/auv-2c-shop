// /mock/server.js
const express = require('express');
const Mock = require('mockjs');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

// 读取用户模拟数据
app.get('/api/users', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'users.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('读取用户数据失败');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// 使用 Mock.js 生成动态数据
app.get('/api/mock/users', (req, res) => {
    const data = Mock.mock({
        'users|5-10': [{
            'id|+1': 1,
            'name': '@cname',
            'age|18-60': 1,
            'email': '@email'
        }]
    });
    res.json(data);
});

app.listen(port, () => {
    console.log(`Mock 服务器已启动，端口：${port}`);
});
