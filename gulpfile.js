'use strict'

let gulp = require('gulp')
let sass = require('gulp-sass')
let sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/[^_]*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./html/res/css'))
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
});

gulp.task('default', ['sass'])