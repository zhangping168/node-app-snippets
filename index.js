var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication : function (req, res, next){
		
		console.log('Need access!');
		next();
	},
	logger : function (req, res, next){
		console.log('Request: ' + req.method + ' ' + req.originalUrl);
		next();
	},
	accessDate : function (req, res, next){
		console.log('Request Date: ' + new Date().toString());
		next();
	}
};

app.use(middleware.logger);
app.use(middleware.accessDate);
app.get('/about',middleware.requireAuthentication, function(req,res){
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
	console.log('Express server is on ...');
	
});