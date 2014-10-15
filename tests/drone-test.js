var APIeasy = require('api-easy'),
      assert = require('assert');

  var suite = APIeasy.describe('/');

  suite.discuss('Testing drone service')
       .use('localhost', 8099)
       .setHeader('Content-Type', 'application/json')
       .post('/sectors/1/drones/1', {})
         .expect(200, { command: "advance", amount: 50, alert: false } )
       .put('/sectors/1/drones/1', {})
         .expect(200, { command: "rotate", amount: 90, alert: false } )
       .export(module);