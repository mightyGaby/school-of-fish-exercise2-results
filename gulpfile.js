'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    partialify = require('partialify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

gulp.task('default', ['browserify', 'sass', 'watch']);

gulp.task('sass', function() {
    gulp.src(['./src/scss/**/*.scss', './src/js/**/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('browserify', function() {
    browserify('./src/js/index.js', { transform: partialify, paths: ['./node_modules', './src/js'] })
        .bundle()
        .pipe(source('bundled.js'))
        .pipe(buffer())
        .pipe(uglify({ output: { ascii_only: true } }))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/js/**/*.js', ['browserify']);
    gulp.watch('./src/js/**/*.html', ['browserify']);
    gulp.watch('./src/js/**/*.json', ['browserify']);
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.scss', ['sass']);
});