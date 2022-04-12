const {src, dest, watch} = require("gulp");
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

const minifyCss = () => 
  src('style/*.css')
  .pipe(cleanCSS())
  .pipe(rename({
    extname: '.min.css'
  }))
  .pipe(dest('dest_style/'));


const minifyJs = () => 
  src('js/*.js')
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(dest('dest_js/'));


const watchCssFile = () => watch('style/*.css', minifyCss());
const watchJsFile = () => watch('js/*.js', minifyJs());

exports.default = function(){
  watchCssFile();
  watchJsFile();
}
