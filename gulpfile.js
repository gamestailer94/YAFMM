'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const watch = require('gulp-watch')
const uglify = require('gulp-uglify-es').default
const rename = require('gulp-rename')

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/[^_]*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./html/css'))
});


gulp.task('js', function () {
    return gulp.src('./src/**/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        // .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./html'))
})

gulp.task('watch', function () {
    watch('src/sass/**/*.scss', () =>{gulp.start('sass')})
    watch('src/**/*.js', () => {gulp.start('js')})
});

gulp.task('default', ['sass', 'js'])