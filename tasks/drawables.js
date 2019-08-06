
// 1920x1200 - sw800dp-hdpi
function hdpi_800() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width: 1920,
    height:1200,
    crop: true,
  }))
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images/drawable-sw800dp-hdpi'))
}

// 1440x900 - sw600dp-hdpi
function hdpi_600() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width: 1440,
    height:900,
    crop: true,
  }))
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images/drawable-sw600dp-hdpi'))
}

// 960x480 - sw480dp-mdpi
function mdpi() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width: 960,
    height:480,
    crop: true,
  }))
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images/drawable-sw480dp-mdpi'))
}

// // 480x480 - desk mdpi
function mdpi_desk() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width: 480,
    height:480,
    crop: true,
  }))
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images/drawable-desk-mdpi'))
}

// 1920x1080 - television-xhdpi
function xhdpi() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width: 1920,
    height:1080,
    crop: true,
  }))
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images/drawable-television-xhdpi'))
}
// // 3840x2160 - xxxhdpi
function xxxhdpi(){
  return gulp.src('src/images/**/*.{jpg,jpeg,png}')
  .pipe(imageResize({
    width: 3840,
    height:2160,
    crop: true,
  }))
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images/drawable-television-xxxhdpi'))
}

// Build
const build = gulp.parallel(hdpi_800,hdpi_600,mdpi,mdpi_desk,xhdpi,xxxhdpi)
