const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');
const gzip = require('gulp-gzip');

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('uglify-js', function(cb) {
  pump([
    gulp.src('src/js/*.js'),
    uglify(),
    gulp.dest('dist/js')
  ], cb);
});

gulp.task('gzip', function() {
  return gulp.src(['dist/css/*.css', 'dist/js/*.js'])
    .pipe(gzip())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('minify-css', 'uglify-js', 'gzip'));

