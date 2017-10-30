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
router.post('/all', (req, res) => {
  var sql = $sql.del.all;
  var params = req.body;
  console.log(params);
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
router.post('/index', (req, res) => {
  var sql = $sql.del.index;
  var params = req.body;
  console.log(params);
  conn.query(sql,params.firstId, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
router.post('/primary', (req, res) => {
  var sql = $sql.del.primary;
  var params = req.body;
  console.log(params);
  conn.query(sql,params.firstClass, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
router.post('/del', (req, res) => {
  var sql = $sql.del.del;
  var params = req.body;
  console.log(params);
  conn.query(sql,params.id, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
router.post('/sel', (req, res) => {
  var sql = $sql.del.sel;
  var params = req.body;
  console.log(params);
  conn.query(sql,params.secondId, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
module.exports = router;
