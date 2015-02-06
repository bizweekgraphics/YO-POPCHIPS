var path = require('path');
var fs = require('fs-extra');
var assert = require('assert');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var should = require('chai').should();
// var generator = require('./../generators/app')

describe('popchips:app', function() {

  describe('when using the default config', function() {

    before(function() {
      this.staticFiles = require('./../generators/app/files.json').staticFiles;
      this.tempPath = path.join(__dirname + './tmp');

      this.runGen = helpers.run(__dirname + './../generators/app')
        .inDir(this.tempPath)
        .on('ready', function(generator) {
          generator.npmInstall = function() {
            console.log('MOCKING NPM INSTALL');
          }

          generator.bowerInstall = function() {
            console.log('MOCKING BOWER INSTALL');
          }
        })  
    });

    after(function() {
      fs.remove(this.tempPath, function(err) {
        if(err) return console.error(err);
        console.log('CLEAN UP')
      })
    })

    it('contains static files', function(done) {
      this.runGen.on('end', function() {
        // assert.files(this.staticFiles)
        console.log('done');
        done();
      })

    })



  });
});