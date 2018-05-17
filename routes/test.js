var express = require('express');
var router = express.Router();
require('shelljs/global');

router.get('/', function(req, res, next) {
  console.log('-------------start shell-------------');

  cd('/Users/warrenyang/Documents/mycode/common/webpack-es6-test');
  exec('npm run build', function(err,stdout,stderr){
    console.log('err',err)
    if(err){
      res.json({
        code: '-1',
        msg: stderr
      });
    }else{
      res.json({
        code: '200',
        msg: '操作成功'
      });
    }
  });
});

module.exports = router;