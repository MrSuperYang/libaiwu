var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加用户接口
router.post('/adduser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [ params.name,params.password,params.phone], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.post('/logoin', (req, res) => {
  var sql = $sql.user.login;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.phone,params.password,], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(result);
      jsonWrite(res, result);
    }
  })
});
router.post('/search', (req, res) => {
  var sql = $sql.user.search;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.phone], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
router.post('/move', (req, res) => {
  var sql = $sql.user.move;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.password,params.phone], function(err, result) {
    console.log(1);
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});

module.exports = router;
