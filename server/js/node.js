var http = require('http'); 
var fs = require('fs');
// http 服务
http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By"," 3.2.1");
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    // 自己的逻辑代码
    console.log('访问路径', req.url);
    // HTML 主页
    if (req.url == "/" || req.url == "/favicon.ico") {
        fs.readFile('client/index.html', function (err, data) {
            if (err) {
                console.log("HTML 文件读取失败！");
            }
            res.end(data.toString());
            return;
        });
    }

    // css 样式
    if (req.url == "/css/index.css") {
        fs.readFile('client/css/index.css', function (err, data) {
            if (err) {
                console.log("CSS 文件读取失败");
            }
            res.writeHead(200, {"Content-Type" : "text/css"});
            res.end(data.toString())
            return;
        })
    }

    // jquery 文件
    if (req.url == "/js/jquery-3.4.1.js") {
        fs.readFile('client/js/jquery-3.4.1.js','utf8', function (err, data) {
            if (err) {
                console.log("jquery 文件读取失败");
            }
            res.end(data.toString())
            return;
        })
    }


    // json 文件（用户表）
    if (req.url == "/server/data/user.json") {
        fs.readFile('data/user.json', function (err, data) {
            console.log(err, data);
            if (err) {
                console.log("json 文件读取失败");
            }
            // 数据库数据
            mysql_start();
            res.end(data.toString())
            return;
        })
    } 



}).listen('3430', '127.0.0.1')

console.log("可以使用", '127.0.0.1:3430', '访问');

function mysql_start() {
    var a = '';
    // 连接数据库
    const mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost', // 主机名 localhost / 127.0.0.1
        user: 'root',   // MySQL登录名 root
        password: '123456',   // 密码
        database: 'qcdm'   // 数据库名
    });

    connection.connect(function (err) {
        if (err) {
            console.error('连接失败！' + err.stack);
            return;
        }
        connection.query('select * from qcdm_rfsi_checklist', (err, results) => {
            if (err) {
                console.log('查询错误',err);
            }
            a = JSON.stringify(results); // 把查询到的数据，转换为json格式
            var fs = require('fs');
            fs.writeFile('data/user.json', a, function (error) {//json文件写入到data文件夹下
                if (error) console.log('json-文件写入失败');
            });
        });
    });
}