var gulp = require('gulp'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    jshint    = require('gulp-jshint'),
    gulpif    = require('gulp-if'),
    readConfig = require('read-config'),
    config    = readConfig('./config.json'),
    args = require('yargs').argv;

/*
* BUILD ALL JS FILES FOR ALL THEMES
*/

gulp.task('build:js',[
    'admin_1:js',
    'admin_2:js',
    'admin_3:js',
    'admin_4:js',
    'admin_5:js',
    'admin_6:js',
    'admin_7:js',
    'admin_8:js',
]);

/*
* BUILD JS FILES FOR ADMIN_1 variant THEME
*/

gulp.task('admin_1:js', function() {
   gulp.src(config.build.admin_1.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.admin_1.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.admin_1.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/theme/admin_1/scripts/**/*.js')
    .pipe(gulp.dest(config.build.admin_1.js.output+'/scripts'));
});


/*
* BUILD JS FILES FOR ADMIN_2 variant THEME
*/

gulp.task('admin_2:js', function() {
   gulp.src(config.build.admin_2.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.admin_2.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.admin_2.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/theme/admin_2/scripts/**/*.js')
    .pipe(gulp.dest(config.build.admin_2.js.output+'/scripts'));
});


/*
* BUILD JS FILES FOR ADMIN_3 variant THEME
*/

gulp.task('admin_3:js', function() {
   gulp.src(config.build.admin_3.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.admin_3.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.admin_3.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/theme/admin_3/scripts/**/*.js')
    .pipe(gulp.dest(config.build.admin_3.js.output+'/scripts'));
});


/*
* BUILD JS FILES FOR ADMIN_4 variant THEME
*/

gulp.task('admin_4:js', function() {
   gulp.src(config.build.admin_4.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.admin_4.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.admin_4.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/theme/admin_4/scripts/**/*.js')
    .pipe(gulp.dest(config.build.admin_4.js.output+'/scripts'));
});


/*
* BUILD JS FILES FOR ADMIN_5 variant THEME
*/

gulp.task('admin_5:js', function() {
   gulp.src(config.build.admin_5.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.admin_5.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.admin_5.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/theme/admin_5/scripts/**/*.js')
    .pipe(gulp.dest(config.build.admin_5.js.output+'/scripts'));
});

/*
* BUILD JS FILES FOR ADMIN_6 variant THEME
*/

gulp.task('admin_6:js', function() {
   gulp.src(config.build.admin_6.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.admin_6.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.admin_6.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/theme/admin_6/scripts/**/*.js')
    .pipe(gulp.dest(config.build.admin_6.js.output+'/scripts'));
});

/*
* BUILD JS FILES FOR ADMIN_7 variant THEME
*/

gulp.task('admin_7:js', function() {
   gulp.src(config.build.admin_7.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.admin_7.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.admin_7.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/theme/admin_7/scripts/**/*.js')
    .pipe(gulp.dest(config.build.admin_7.js.output+'/scripts'));
});


/*
* BUILD JS FILES FOR ADMIN_8 variant THEME
*/

gulp.task('admin_8:js', function() {
   gulp.src(config.build.admin_8.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.build.admin_8.js.output))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.admin_8.js.output));

   //== Page level scripts
   gulp.src(config.path.src+'/js/theme/admin_8/scripts/**/*.js')
    .pipe(gulp.dest(config.build.admin_8.js.output+'/scripts'));
});
