const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function compileSass() {
  return (
    gulp
      .src('scss/*.scss')
      .pipe(sass({ outputStyle: 'compressed' }))

      .pipe(
        autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false,
        }),
      )

      .pipe(gulp.dest('css/'))
      .pipe(browserSync.stream())
  )
}
gulp.task('sass', compileSass)


function browser() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  })
}
gulp.task('browser-sync', browser)


function compileLibraries() {
  return (
    gulp
      .src(['js/plugins/*.js'])
      .pipe(concat('plugins.js'))

      // .pipe(
      //   babel({
      //     presets: ['@babel/env'],
      //   })
      // )

      // .pipe(uglify())
      .pipe(gulp.dest('js/'))
      .pipe(browserSync.stream())
  )
}
gulp.task('jslibraries', compileLibraries)


function compileScripts() {
  return (
    gulp
      .src(['js/scripts/*.js'])
      .pipe(concat('main.js'))

      .pipe(
        babel({
          presets: ['@babel/env'],
        })
      )

      .pipe(uglify())
      .pipe(gulp.dest('js/'))
      .pipe(browserSync.stream())
  )
}
gulp.task('jsscripts', compileScripts)


function watch() {
  gulp.watch('scss/**/*.scss', compileSass)
  gulp.watch('js/lib/*.js', compileLibraries)
  gulp.watch('js/scripts/*.js', compileScripts)
}
gulp.task('watch', watch)


gulp.task('default', gulp.parallel(
  'watch',
  'browser-sync',
  'sass',
  'jslibraries',
  'jsscripts'
))
