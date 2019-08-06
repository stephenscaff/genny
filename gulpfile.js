const gulp    = require('gulp'),
      imagemin = require('gulp-imagemin'),
      imageResize = require('gulp-image-resize'),
      rename = require("gulp-rename");

// Loop of various image sizes.
// See tasks for other examples.
function handleImages(cb) {
  [100, 300, 800, 1000, 2000].forEach(function (size) {
    gulp.src('src/images/**/*.{jpg,jpeg,png}')
      .pipe(imageResize({ width: size }))
      .pipe(rename(function (path) { path.basename = `${path.basename}@${size}w`; }))
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
  });
  cb();
}

gulp.task(build)
gulp.task('default', build)
