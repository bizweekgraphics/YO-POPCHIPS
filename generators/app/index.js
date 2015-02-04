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
      }
    ]

    this.prompt(prompts, function(answers) {
      this.appName = answers.app.replace(/ /g, '');

      done();
    }.bind(this));
  },

  //NPM renames .gitignore to .npmignore
  fixGitIgnore: function() {
    
  }

  copySrc: function() {
    copy.staticFiles(this);
    copy.templates(this);
  },

  install: function() {
    this.npmInstall();
    this.bowerInstall();
  }
  
});
