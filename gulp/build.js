var gulp = require('gulp');
var cfg = require('../package.json').config;
var run = require("run-sequence");

gulp.task("build", function(evt) {
  run(
    "full-clean",
    "html-min",
    "css-min",
    "js-min",
    "js-min-q",
    evt
  );
});

gulp.task("tests", function(evt) {
  run(
    "full-clean",
    "html-min",
    "css-min",
    "js",
    "js-q",
    evt
  );
});


