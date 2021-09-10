let gulp = require('gulp');
let plumber = require('gulp-plumber');
let rm = require( 'gulp-rm' );
let browserSync = require('browser-sync').create();
let csso = require('gulp-csso'); 
let uglify = require("gulp-uglify"); //min js
// Basic usage:
let rename = require("gulp-rename");
let postcss= require( 'gulp-postcss' ) // post css

let autoprefixer = require('gulp-autoprefixer');
let mqpacker = require('css-mquery-packer');
let eslint = require('gulp-eslint');

gulp.task('es-js', () => {
    return gulp.src('src/**/main.js')
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
          .pipe(plumber())
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
        .pipe(gulp.dest('./eslint'))
});

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
  return gulp.src('src/**/allquestions.json')
  .pipe(plumber())
  // .pipe(uglify())
  .pipe(rename('allquestions.json'))
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });

gulp.task('js-themes', function() {
  return gulp.src('src/**/themes.json')
  .pipe(plumber())
  // .pipe(uglify())
  .pipe(rename('themes.json'))
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

gulp.task('js-q-m', function() {
  return gulp.src('src/**/questions.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(rename('questions.js'))
  .pipe(gulp.dest('./build'))

 });

gulp.task('js-m', function() {
  return gulp.src('src/**/main.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('./build'))
 });




gulp.task('clear', function() {
  return gulp.src( 'build/**/*', { read: false })
  .pipe( rm({
   async: true 
  }) )
 })


  gulp.task('build', 
   gulp.series(
    'clear',
    'html',
    'css',
    'js-m',
    'js-q-m'
    ));


  gulp.task('test-build', 
   gulp.series(
    'clear',
    'html',
    'css',
    'js',
    'js-questions',
    'js-themes'
    ));

gulp.task('final', function(){
  return gulp.src('./build/*.*')
      .pipe(gulp.dest('../mifomen.github.io/my-own-game'));
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
gulp.watch("src/**/allquestions.json",  gulp.parallel('js-questions'));


gulp.watch("src/**/themes.json",  gulp.parallel('js-themes'));

 
});
