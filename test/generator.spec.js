var path = require('path');
var fs = require('fs-extra');
var assert = require('assert');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('popchips:app', function() {

  describe('when using the default config', function() {
    var generatorObject;

    //run generator in a temporary folder and create spies
    before(function(done) {
      var self = this;
      this.staticFiles = require('./../generators/app/files.json').staticFiles;
      this.tempPath = path.join(__dirname + './tmp');

      this.runGen = helpers.run(__dirname + './../generators/app')
        .inDir(this.tempPath)
        .on('ready', function(generator) {
          generator.npmInstall = function() {
            return true;
          };

          generator.bowerInstall = function() {
            return true;
          };

          self.npmSpy = sinon.spy(generator, 'npmInstall');
          self.bowerSpy = sinon.spy(generator, 'bowerInstall');

        })
        .on('end', function() {
          done();
        });  
    });

    //delete temporary folder
    after(function() {
      fs.remove(this.tempPath, function(err) {
        if(err) return console.error(err);
      });
    });

    it('copies over the static files', function() {
      var staticFiles = require('./../generators/app/files.json').staticFiles;
      assert.file(staticFiles);
    });

    it('copies over the template files', function() {
      var templateFiles = require('./../generators/app/files.json').templates;
      assert.file(templateFiles);
    });

    it('should call npm install', function() {
      this.npmSpy.should.be.called;
    });

    it('should call bower install', function() {
      this.bowerSpy.should.be.called;
    });



  });
});