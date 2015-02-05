var gulp = require('gulp');
var mocha = require('gulp-mocha');


module.exports = function() {
  gulp.task('test', function() {
    return gulp.src(['./test/**/*.spec.js'], {

    })
    .pipe(mocha())
  })
}