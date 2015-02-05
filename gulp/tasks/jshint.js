var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function() {
  gulp.task('jshint', function() {
    return gulp.src(['generators/**/*.js', 'test/**/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
  });
}