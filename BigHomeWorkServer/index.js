var fs = require('fs');
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.listen(3001);    //监听3000端口，监听到请求了就链接

app.use(bodyParser.json());	//bodyParser实例

//get请求首页信息
app.get('/api/test/topic',function (req,res) {
    console.log(req.query);
	fs.readFile('topic.json', 'utf-8', function (err, data) {	//请求index.json的数据
	    if (err) {	//如果失败，返回的消息，下同
	        console.log(err);
	    } else {	//如果成功，返回的数据
            res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});	//以json形式传送，设置utf-8
	        res.end(data);
	    }
	});
});

app.get('/api/test/study',function (req,res) {
    console.log(req.query);
	fs.readFile('allTopic.json', 'utf-8', function (err, data) {	//请求index.json的数据
	    if (err) {	//如果失败，返回的消息，下同
	        console.log(err);
	    } else {	//如果成功，返回的数据
            res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});	//以json形式传送，设置utf-8
	        res.end(data);
	    }
	});
});

app.get('/api/test/rank',function (req,res) {
    console.log(req.query);
	fs.readFile('rank.json', 'utf-8', function (err, data) {	//请求index.json的数据
	    if (err) {	//如果失败，返回的消息，下同
	        console.log(err);
	    } else {	//如果成功，返回的数据
            res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});	//以json形式传送，设置utf-8
	        res.end(data);
	    }
	});
});