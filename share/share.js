var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  // res.send('Hello World')
  // var path = 'file/xue.zip';  // 文件存储的路径
  var path = 'file/1.pdf';  // 文件存储的路径
  res.download(path);
  // res.download(filepath, filename); 
  // console.log(path);
});
 
app.listen(3000);