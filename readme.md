#Hi Genny

Genny is a simple image size generator and optimizer.


It leverages GraphicsMagick or ImageMagic, so make sure both are installed on your system:

```
brew install imagemagick
brew install graphicsmagick
```


###Useage

Add images sizes in the gulp file and run default

```
gulp
```

###Example

```
const gulp = require('gulp');
const imageResize = require('gulp-image-resize');

gulp.task('default', function () {
  gulp.src('test.png')
    .pipe(imageResize({
      width : 100,
      height : 100,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});
```
