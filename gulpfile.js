var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var browserSync = require("browser-sync");

gulp.task('sass', function(){
  gulp.src('app/scss/main.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'browser'], function(){
  gulp.watch('app/scss/*.scss', ['sass'])
});

gulp.task('browser', function(){
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  })
});

gulp.task('default', ['watch']);