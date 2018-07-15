var gulp = require('gulp');
var browserSync = require('browser-sync').create(); 
var run = require("run-sequence");

gulp.task("serve", function() {
  browserSync.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("src/*.html", ["html-min"]).on("change", browserSync.reload);
  gulp.watch("src/*.js", ["js-min"]).on("change", browserSync.reload);
  gulp.watch("src/*.css", ["css-min"]).on("change", browserSync.reload);
});
