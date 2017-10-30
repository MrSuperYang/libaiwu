// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, password,phone) values (0, ?,?, ?)',
    login: 'select * from user where phone=? and password=?',
    search: 'select * from user where phone=?',
    move:'update user set password=? where phone=?'
  },
  //详情页
  del:{
    all:'select * from goods',
    index:'select * from goods where firstId=? limit 4',
    primary:'select * from goods where firstClass=?',
    del:'select * from goods where id=?',
    sel:'select * from goods where secondId=?'
  },

}

module.exports = sqlMap;
