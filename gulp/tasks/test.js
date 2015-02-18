var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');


module.exports = function() {
  gulp.task('test', function() {
    return gulp.src(['./test/**/*.spec.js'], {
      read: false
    })
    .pipe(mocha({
    }))
   .on('error', gutil.log);
  })
}