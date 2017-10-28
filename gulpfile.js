'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const watch = require('gulp-watch')

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
    watch('./src/sass/**/*.scss', gulp.start('sass'))
    watch('./src/tpl/**/*.js', gulp.start('templates'))
    watch('./src/js/**/*.js', gulp.start('js'))
});

gulp.task('default', ['sass', 'templates', 'js'])