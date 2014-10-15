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