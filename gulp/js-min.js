var gulp = require('gulp');
var uglify = require("gulp-uglify");
var plumber = require('gulp-plumber');

gulp.task("js-min", function() {
  gulp.src("src/**/main.js")
    // .pipe(uglify())
    .pipe(plumber())
    .pipe(gulp.dest("build/"));
});


