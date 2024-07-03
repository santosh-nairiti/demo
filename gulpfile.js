const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const gzip = require('gulp-gzip');

// Task to minify JavaScript files
gulp.task('minify-js', function() {
    return gulp.src('src/**/*.js') // Adjust path if needed
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Task to minify CSS files
gulp.task('minify-css', function() {
    return gulp.src('src/**/*.css') // Adjust path if needed
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

// Task to gzip files (optional)
gulp.task('gzip', function() {
    return gulp.src(['dist/**/*.js', 'dist/**/*.css']) // Adjust path if needed
        .pipe(gzip())
        .pipe(gulp.dest('dist'));
});

// Default task to run all tasks
gulp.task('default', gulp.series('minify-js', 'minify-css', 'gzip'));



