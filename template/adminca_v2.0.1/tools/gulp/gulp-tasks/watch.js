var gulp = require('gulp'),
    readConfig = require('read-config'),
    config    = readConfig('./config.json');



/*
*  Watchers
*/


gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "../"
        },
        host: 'localhost',
        port: 3000,
    });
    gulp.watch(config.path.src+'/js/**/*.js', ['watch:js']);
    gulp.watch(config.path.src+'/sass/**/*.+(scss|sass)', ['watch:sass']);
    gulp.watch(config.path.src+'/pug/**/*.pug', ['watch:pug']);
});

gulp.task('watch:js', ['build:js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch:sass', ['build:sass'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch:pug', ['build:pug'], function (done) {
    browserSync.reload();
    done();
});
