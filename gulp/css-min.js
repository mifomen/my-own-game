var gulp = require('gulp');
var cfg = require('../package.json').config;
var plumber = require('gulp-plumber');
var csso = require('gulp-clean-css');
var mqpacker = require("css-mqpacker"); 
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer"); 
var browserSync = require('browser-sync').create(); 

gulp.task('css-min', function() {
  return gulp.src('./src/style.css')
  .pipe(plumber())
  .pipe(postcss([ 
    autoprefixer({ browsers: [
  'last 10 versions', 
  'ie 11',
  'ie 10',
  'Android >= 4.1', 
  'Safari >= 8',
  'iOS >= 8'
  ] }),     
  mqpacker({ sort: true })
]))
  .pipe(csso())
  .pipe(gulp.dest(cfg.build.css))
  .pipe(browserSync.stream())
});