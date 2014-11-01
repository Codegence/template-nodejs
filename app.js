/*
    Copyright (C) 2014  Gabriel Flores
    This file is part of Codegence.

    Codegence is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Codegence is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Codegence. If not, see <http://www.gnu.org/licenses/>.
*/

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