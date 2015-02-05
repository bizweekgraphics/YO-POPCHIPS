var path = require('path');
var assert = require('assert');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('popchips:app', function() {
  
  describe('when using the default config', function() {

    // before(function(done) {

    // })
    it('something', function() {
      assert.file(['Gruntfile.js', 'app/router.js', 'app/views/main.js']);

    })



  });
});