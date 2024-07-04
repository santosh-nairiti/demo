const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');
const path = require('path');

// Paths
const paths = {
    css: './src/css/*.css',
    js: './src/js/*.js',
    dist: './dist'
};

// Minify CSS
gulp.task('minify-css', () => {
    return gulp.src(paths.css)
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.join(paths.dist, 'css')));
});

// Minify JS
gulp.task('minify-js', () => {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest(path.join(paths.dist, 'js')));
});

// Gzip CSS
gulp.task('gzip-css', () => {
    return gulp.src(path.join(paths.dist, 'css/*.css'))
        .pipe(gzip())
        .pipe(gulp.dest(path.join(paths.dist, 'css')));
});

// Gzip JS
gulp.task('gzip-js', () => {
    return gulp.src(path.join(paths.dist, 'js/*.js'))
        .pipe(gzip())
        .pipe(gulp.dest(path.join(paths.dist, 'js')));
});

// Default task
gulp.task('default', gulp.series('minify-css', 'minify-js', 'gzip-css', 'gzip-js'));





