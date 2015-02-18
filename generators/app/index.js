'use strict';

var generators = require('yeoman-generator');
var copy = require('./src/copy.js');

module.exports = generators.Base.extend({
  promptName: function() {
    var done = this.async();

    var prompts = [
      {
        type: 'input',
        name: 'app',
        message: 'What is the app name?',
        default: this.appname
      },
      {
        type: 'checkbox',
        name: 'bootstrap',
        message: 'Include bootstrap?',
        checked: true
      }
    ];

    this.prompt(prompts, function(answers) {
      this.appName = answers.app.replace(/ /g, '');
      this.includeBootstrap = answers.bootstrap;

      done();
    }.bind(this));
  },
  
  copySrc: function() {
    copy.staticFiles(this);
    copy.templates(this);
  },

  install: function() {
    this.npmInstall();
    this.bowerInstall();
  }
  
});
