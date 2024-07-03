const gulp = require('gulp');
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');
const cleanCSS = require('gulp-clean-css');

function minifyCSS() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
}

function minifyJS() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

function gzipFiles() {
    return gulp.src('dist/**/*')
        .pipe(gzip())
        .pipe(gulp.dest('dist'));
}

exports.default = gulp.series(minifyCSS, minifyJS, gzipFiles);
