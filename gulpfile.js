const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function styles() {
  return src('assets/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('assets/css'));
}

function watcher() {
  watch('assets/scss/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = series(styles, watcher);
exports.default = styles;
