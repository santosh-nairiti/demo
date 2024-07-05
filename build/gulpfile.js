const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');
const gzip = require('gulp-gzip');

gulp.task('minify-css', function() {
  return gulp.src('build/src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/dist/css'));
});

gulp.task('uglify-js', function(cb) {
  pump([
    gulp.src('build/src/js/*.js'),
    uglify(),
    gulp.dest('build/dist/js')
  ], cb);
});

gulp.task('gzip', function() {
  return gulp.src(['build/dist/css/*.css', 'build/dist/js/*.js'])
    .pipe(gzip())
    .pipe(gulp.dest('build/dist'));
});

gulp.task('default', gulp.series('minify-css', 'uglify-js', 'gzip'));
