'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/[^_]*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./html/css'))
});

gulp.task('templates', function () {
    return gulp.src('./src/tpl/**/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./html/tpl'))
})

gulp.task('js', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./html/js'))
})

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
    gulp.watch('./src/tpl/**/*.js', ['templates'])
    gulp.watch('./src/js/**/*.js', ['js'])
});

gulp.task('default', ['sass', 'templates', 'js'])