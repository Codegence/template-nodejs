var APIeasy = require('api-easy'),
      assert = require('assert');

  var suite = APIeasy.describe('/');

  suite.discuss('Testing info service')
       .use('localhost', 8099)
       .setHeader('Content-Type', 'application/json')
       .get('/info', {})
         .expect(200, { version: '1.0.0' })
       .export(module);