let gulp = require('gulp');
let plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
let csso = require('gulp-csso'); 
var uglify = require("gulp-uglify"); //min js
// Basic usage:
var rename = require("gulp-rename");
var postcss= require( 'gulp-postcss' ) // post css

let autoprefixer = require('gulp-autoprefixer');
let mqpacker = require('css-mquery-packer');


// .pipe(plumber())

gulp.task('css', function() {
  return gulp.src('src/**/style.css')
  .pipe(plumber())
    .pipe(autoprefixer({
 
      cascade: true
    }))
 .pipe(postcss([
      mqpacker({ sort: true })
      ])
    )
  .pipe(csso())
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });




 gulp.task('html', function() {
  return gulp.src('src/**/index.html')
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });


gulp.task('js-questions', function() {
  return gulp.src('src/**/questions.js')
  .pipe(plumber())
  // .pipe(uglify())
  .pipe(rename('questions.js'))
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });

gulp.task('js', function() {
  return gulp.src('src/**/main.js')
  .pipe(plumber())
  // .pipe(uglify())
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });

gulp.task('serve', function () {
 browserSync.init({
      server: {
        baseDir: 'build'
      },
      notify: false,
      open: false,
      ui: false
    }),

gulp.watch("src/**/index.html",  gulp.parallel('html'));
gulp.watch("src/**/style.css",  gulp.parallel('css'));
gulp.watch("src/**/main.js",  gulp.parallel('js'));
gulp.watch("src/**/questions.js",  gulp.parallel('js-questions'));


 
});
