'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var concatCss = require('gulp-concat-css');

gulp.task('styles', function() {
  return gulp.src('app/**/*.sass')
    .pipe($.sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('app'));
});

gulp.task('jshint', function() {
  return gulp.src('app/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('concat', function() {
  return gulp.src([
    'app/**/*module.js',
    'app/**/*.js',
    '!app/app.js',
    '!app/**/*.spec.js'
  ])
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('app'));
});

gulp.task('default', ['styles', 'concat'], function() {
  gulp.watch(['app/**/*.js'], ['jshint', 'concat']);
  gulp.watch(['app/**/*.sass'], ['styles']);
});
