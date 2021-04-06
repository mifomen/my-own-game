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


// Basic usage:
// gulp.task('injectBrowserSync', function(){
//   gulp.src('./index.html')
//   .pipe(browserSyncInject({port: 505})) // BrowserSync will output the proxy port
//   .pipe(gulp.dest('./build'));
// });

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
  .pipe(uglify())
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
      open: true,
      ui: false
    }),

gulp.watch("src/**/*.html",  gulp.parallel('html'));
gulp.watch("src/**/*.css",  gulp.parallel('css'));
gulp.watch("src/**/*.main-js",  gulp.parallel('js'));
gulp.watch("src/**/*.question.js",  gulp.parallel('js-questions'));


  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  // gulp.watch("src/**/*.{sass,scss}", ["sass"]).on('change', browserSync.reload);
});

// // gulp.watch("src/**/*.html",  gulp.parallel('html'));
// // gulp.watch("src/**/*.css",  gulp.parallel('css'));
// // gulp.watch("src/**/*.js",  gulp.parallel('js'));
//   // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
//   // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
//   // gulp.watch("src/**/*.{sass,scss}", ["sass"]).on('change', browserSync.reload);
// });