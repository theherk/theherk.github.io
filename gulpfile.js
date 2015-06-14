// Include gulp
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    order = require('gulp-order'),
    uglifycss = require('gulp-uglifycss');

var src = 'bower_components/';
var dest = 'assets/';

gulp.task('js', function() {
  gulp.src([
    src + 'jquery/dist/*.min.js',
    src + 'bootstrap/js/*.min.js',
    src + 'bootstrap-material-design/dist/js/*.min.js'
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dest + 'js'));
});

gulp.task('css', function() {
  gulp.src([
    src + 'normalize.css/normalize.css',
    src + 'bootstrap/dist/css/bootstrap.min.css',
    src + 'bootstrap-material-design/dist/css/material.min.css',
    src + 'bootstrap-material-design/dist/css/ripples.min.css',
    src + 'bootstrap-material-design/dist/css/roboto.min.css'
  ])
    .pipe(order([
      'normalize.css',
      '*'
    ]))
    .pipe(concat('main.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest(dest + 'css'));
});

gulp.task('fonts', function() {
  gulp.src(src + 'bootstrap-material-design/dist/fonts/*')
    .pipe(gulp.dest(dest + 'fonts'));
});

gulp.task('default', ['js', 'css', 'fonts']);

