var assert = require('assert');
var hello = require('../src/').hello;
describe('Project Hello', function() {
  describe('#hello', function() {
    it('should return hello', function() {
      assert.equal("Hello World!", hello());
    });
  });
});
