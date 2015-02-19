var gulp = require('./gulp')([
  'watch',
  'jshint',
  'test'
])

// gulp.task('default', ['jshint', 'test', 'watch']);
gulp.task('default', ['test', 'watch']);

