'use strict';

var files = require('../files.json');
var path = require('path');

var basename;
var src;

var copy = {

  staticFiles: function(self) {
    files.staticFiles.forEach(function(filePath) {
      self.copy(filePath, filePath);
    });
  },

  templates: function(self) {
    files.templates.forEach(function(filePath) {
      self.template(filePath, filePath);
    })
  }

}

module.exports = copy