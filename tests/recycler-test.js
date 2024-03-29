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

var APIeasy = require('api-easy'),
      assert = require('assert');

  var suite = APIeasy.describe('/');

  suite.discuss('Testing recycler service')
       .use('localhost', 8099)
       .setHeader('Content-Type', 'application/json')
       .post('/sectors/1/recyclers/1', {})
         .expect(200, { command: "newDrone", amount: 0, alert: false })
       .put('/sectors/1/recyclers/1', {})
         .expect(200, { command: "newDrone", amount: 0, alert: false })
       .export(module);