var welcomeMsg = "Drop Wizard client for CodeCraft.";
var version = "1.1.0";

module.exports = function(app){

	app.get('/', function(req, res){
	  res.send( welcomeMsg );
	});

	app.get('/info', function(req, res){
	  res.send( {"version":version} );
	});
}