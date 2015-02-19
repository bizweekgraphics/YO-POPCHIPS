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
        name: 'features',
        message: 'Include?',
        choices: [
          {
            name: 'Bootstrap',
            value: 'includeBootstrap',
            checked: false
          },
          {
            name: 'jQuery',
            value: 'includejQuery',
            checked: false
          },
          {
            name: 'FontAwesome',
            value: 'includeFontAwesome',
            checked: false
          }
        ]
      }
    ];


    this.prompt(prompts, function(answers) {
      var features = answers.features;

      function hasFeature(feat) {
        return features && features.indexOf(feat) !== -1;
      }

      this.appName = answers.app.replace(/ /g, '');
      this.includeBootstrap = hasFeature('includeBootstrap');
      this.includejQuery = hasFeature('includejQuery');
      this.includeFontAwesome = hasFeature('includeFontAwesome');

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
