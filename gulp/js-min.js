var gulp = require('gulp');
var uglify = require("gulp-uglify");
var plumber = require('gulp-plumber');

gulp.task("js", function() {
  gulp.src("src/**/main.js")
    .pipe(plumber())
    .pipe(gulp.dest("build/"));
});

gulp.task("js-q", function() {
  gulp.src("src/**/questions.js")
    .pipe(plumber())
    .pipe(gulp.dest("build/"));
});

gulp.task("js-min", function() {
  gulp.src("src/**/main.js")
    // .pipe(uglify())
    .pipe(plumber())
    .pipe(gulp.dest("build/"));
});

gulp.task("js-min-q", function() {
  gulp.src("src/**/questions.js")
    // .pipe(uglify())
    .pipe(plumber())
    .pipe(gulp.dest("build/"));
});