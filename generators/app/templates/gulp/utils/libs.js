var dependencies = require('../../package.json').dependencies;

var libs = [];
for(var dependency in dependencies) {
  libs.push(dependency);
}

module.exports = libs;