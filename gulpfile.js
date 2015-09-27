var gulp   = require('gulp'),
    sass   = require('sass'),
    bower  = require('gulp-bower'),
    notify = require('gulp-notify');

var config = {
  sassPath: './public/assets/scss',
  bowerDir: './public/assets/lib'
}

gulp.task('bower', function(){
  return bower()
    .pipe( gulp.dest(config.bowerDir) );
});

gulp.task( 'default', ['bower'] );
