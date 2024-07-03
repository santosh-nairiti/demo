const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const gzip = require('gulp-gzip');

// Task to minify JavaScript files
gulp.task('minify-js', function() {
    return gulp.src('src/**/*.js')  // Corrected path to 'src' directory
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); // Output directory for JavaScript files
});

// Task to minify CSS files
gulp.task('minify-css', function() {
    return gulp.src('src/**/*.css')  // Corrected path to 'src' directory
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css')); // Output directory for CSS files
});

// Task to gzip files (optional)
gulp.task('gzip', function() {
    return gulp.src(['dist/**/*.js', 'dist/**/*.css'])
        .pipe(gzip())
        .pipe(gulp.dest('dist')); // Output directory for gzipped files
});

// Default task to run all tasks
gulp.task('default', gulp.series('minify-js', 'minify-css', 'gzip'));
