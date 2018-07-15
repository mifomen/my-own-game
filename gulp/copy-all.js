var gulp = require('gulp');

gulp.task("copy", function() {
  return gulp.src([
    "src/**/*.*"
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("copy-html", function() {
  return gulp.src([
    "src/**/*.html"
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("copy-css", function() {
  return gulp.src([
    "src/**/*.css"
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("copy-js", function() {
  return gulp.src([
    "src/**/*.js"
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});