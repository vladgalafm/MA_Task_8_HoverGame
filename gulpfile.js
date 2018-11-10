var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

gulp.task("sass", function(){
  gulp.src('app/scss/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("watch",["sass", "browser"], function(){
  gulp.watch("app/scss/*.scss", ['sass'])
});

gulp.task("browser", function(){
  browserSync({
    server: {baseDir:"app"},
    notify: false})
});

gulp.task('default', ['watch']);