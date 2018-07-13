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

    // gulp.watch("src/fonts/**", ["retype-fonts"]).on("change", browserSync.reload);
   // gulp.watch("src/img/*.{jpg,png,svg}", ["retype-images"]).on("change", browserSync.reload);
     // gulp.watch("src/**/*.js", ["retype-js"]).on("change", browserSync.reload);
  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
    gulp.watch("src/*.*", ["copy"]).on("change", browserSync.reload);
  // gulp.watch("src/**/*.{scss,sass}", ["sass"]).on('change', browserSync.reload);
});
