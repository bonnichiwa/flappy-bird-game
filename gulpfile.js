var gulp = require('gulp');

var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src('site/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Minify index
gulp.task('html', function() {
  gulp.src('site/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return browserify('./site/js/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Image optimization task
gulp.task('images', function() {
  gulp.src('site/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('site/js/*.js', ['jshint', 'scripts']);
  gulp.watch('site/index.html', ['html']);
});

// Default task
gulp.task('default', ['jshint', 'watch', 'html', 'scripts', 'images']);

// Build task
gulp.task('build', ['jshint', 'html', 'scripts', 'images']);