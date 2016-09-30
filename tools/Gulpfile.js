var gulp = require('gulp'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nano = require('cssnano'),
    flexbugs = require('postcss-flexbugs-fixes'),
    colorguard = require('colorguard'),
    images = require('postcss-responsive-images'),
    fonts = require('postcss-font-magician'),
    doiuse = require('doiuse'),
    watch = require('gulp-watch');

gulp.task('css', () => {
  let processors = [
    images(),
    fonts(),
    flexbugs(),
    colorguard(),
    autoprefixer({browsers: ['last 1 version']}),
    nano(),
    doiuse({
      browsers: [ 'last 1 version' ]
    })
  ];

  return gulp.src('../themes/blb/static/css/main.css')
    .pipe(postcss(processors))
    .pipe(rename((p) => {
      p.basename += '.min';
    }))
   .pipe(watch('../themes/blb/static/css/main.css'))
   .pipe(gulp.dest('../themes/blb/static/css/'));
});

gulp.task('default', ['css']);
