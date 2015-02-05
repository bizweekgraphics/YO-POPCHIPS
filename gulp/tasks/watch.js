var gulp = require('gulp');

module.exports = function() {
  gulp.watch(['./generators/**/*', 'test/**/*'], ['jshint', 'test'])  
}