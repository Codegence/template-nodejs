var express = require('express');
var http = require("http");
var app = express();

require('./app/services/main.js')(app);
require('./app/services/drone.js')(app);
require('./app/services/recycler.js')(app);

app.set('title', 'NodeJS client for CodeCraft');

// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});


app.listen( process.env.PORT || 8099 );

http.createServer(app).listen('3000',function(){
    console.log('Servidor de pruebas levantado en el puerto 3000');
});