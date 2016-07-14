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

module.exports = middleware;