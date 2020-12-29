var http = require('http'); 
        var fs = require('fs');
        // http 服务
        http.createServer(function (req, res) {
            console.log('访问路径', req.url);
            // HTML 主页
            if (req.url == "/" || req.url == "/favicon.ico") {
                fs.readFile('index.html', function (err, data) {
                    if (err) {
                        console.log("HTML 文件读取失败！");
                    }
                    res.end(data.toString());
                    return;
                });
            }
            // json 文件（用户表）
            if (req.url == "/data/user.json") {
                fs.readFile('/data/user.json', function (err, data) {
                    if (err) {
                        console.log("json 文件读取失败");
                    }
                    // 数据库数据
                    mysql_start();
                    res.end(data.toString())
                    return;
                })
            } 



        }).listen('3000', '127.0.0.1')

        console.log("可以使用", '127.0.0.1:3000', '访问');

var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'demo' 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM student';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  

       
       a = JSON.stringify(result); // 把查询到的数据，转换为json格式
       var fs = require('fs');
       fs.writeFile('data/user.json', a, function (error) {//json文件写入到data文件夹下
           if (error) console.log('json-文件写入失败');
       });
});
 
connection.end();