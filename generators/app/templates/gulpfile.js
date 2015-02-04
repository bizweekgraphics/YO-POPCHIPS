//For production, uncomment line 30 in gulp/tasks/browserify.js
//To include bower stylesheets add them to includePaths array in gulp/tasks/sass.js

var gulp = require('./gulp')([
  'browser-sync',
  'html',
  'watch',
  'browserify',
  'vendor',
  'sass',
  'jshint',
  'fonts',
  'images'
])

gulp.task('default', ['images', 'fonts', 'html', 'sass', 'jshint', 'vendor', 'browserify', 'browser-sync', 'watch']);