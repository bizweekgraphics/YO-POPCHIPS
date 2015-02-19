'use strict';

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

  var featureContent = [
    ['bower.json', /bootstrap-sass-official/],
    ['gulp/tasks/sass.js', /bootstrap-sass-official/],
    ['src/styles/main.scss', /bootstrap/],
    ['bower.json', /font-awesome/],
    ['gulp/tasks/sass.js', /font-awesome/],
    ['src/styles/main.scss', /font-awesome/],
    ['src/index.html', /jquery/],
    ['package.json', /jquery/]
  ];

  describe('when using the default config', function() {
    //run generator in a temporary folder and create spies
    beforeEach(function(done) {
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
    afterEach(function() {
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

    it('calls npm install', function() {
      this.npmSpy.should.be.called;
    });

    it('calls bower install', function() {
      this.bowerSpy.should.be.called;
    });

    it('inserts default into templates', function() {

      var expectedContent = [
        ['package.json', /"name": "tmp"/],
        ['bower.json', /"name": "tmp"/]
      ]

      assert.fileContent(expectedContent);
    });

    it('does not include unchecked options', function() {
      assert.noFileContent(featureContent);
    })
  });

  describe('when including features', function() {

    before(function(done) {
      this.tempPath = path.join(__dirname + './tmp');

      this.runGen = helpers.run(__dirname + './../generators/app')
        .inDir(this.tempPath)
        .withPrompt({app: 'multiple word test thing', features: ['includeBootstrap', 'includeFontAwesome', 'includejQuery']})
        .on('ready', function(generator) {

          generator.npmInstall = function() {
            return true;
          };

          generator.bowerInstall = function() {
            return true;
          };
        })
        .on('end', function() {
          done();
        });  
    })

    after(function() {
      fs.remove(this.tempPath, function(err) {
        if(err) return console.error(err);
      });
    });

    it('includes bootstrap', function() {
      assert.fileContent(featureContent);
    });

    it('has the app name', function() {
      assert.fileContent([['package.json', /multiplewordtestthing/]])
    })
  })
});


      // fs.readFile('gulp/tasks/sass.js', 'utf8', function(err, data) {
      //   console.log(data) // => hello!
      // })


        // .withPrompt({app: 'multiple word test thing'})


      // fs.readFile('bower.json', 'utf8', function(err, data) {
      //   console.log(data) // => hello!
      // })
