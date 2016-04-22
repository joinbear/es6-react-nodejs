const gulp = require('gulp');


//--------------------babel build es6 js file----------------------
const babel = require('gulp-babel');
 
gulp.task('es6-build', () => {
  return gulp.src('./es6/**/*.js')
    .pipe(babel({
      plugins: [
        "transform-strict-mode",
        "transform-es2015-modules-commonjs",
        "transform-es2015-spread",
        "transform-es2015-destructuring",
        "transform-es2015-parameters"
      ]
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('watch-es6', ['es6-build'], () => {
  gulp.watch('./es6/**/*.js', ['es6-build'])
});