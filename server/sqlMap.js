// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, password,phone) values (0, ?,?, ?)',
    login: 'select * from user where password=? and phone=?'
  },

}

module.exports = sqlMap;
