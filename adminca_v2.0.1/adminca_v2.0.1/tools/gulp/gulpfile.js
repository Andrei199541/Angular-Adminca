var gulp = require('gulp');
    requireDir    = require('require-dir'),
    browserSync   = require('browser-sync'),
    imagemin  = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rename    = require('gulp-rename'),
    tasks         = requireDir('./gulp-tasks'),
    readConfig = require('read-config'),
    config    = readConfig('./config.json');



/*
* BUILD ALL THEMES
*/


gulp.task('build', [
    'build:admin_1',
    'build:admin_2', 
    'build:admin_3',
    'build:admin_4',
    'build:admin_5',
    'build:admin_6',
    'build:admin_7',
    'build:admin_8',
]);




/*
* BUILD ALL FILES FOR ADMIN_1 THEME
*/

gulp.task('build:admin_1', function(){
    gulp.start('admin_1:pug');   // BUILD ALL HTML FILES FOR ADMIN_1
    gulp.start('admin_1:sass');  // BUILD ALL CSS FILES FOR ADMIN_1
    gulp.start('admin_1:js');   // BUILD JS FILES FOR ADMIN_1
    build_img('/admin_1/html/assets/img');  // COMPRESS IMAGES AND SAVE TO ADMIN_1 ASSETS FOLDER
    build_vendors('/admin_1/html/assets/vendors');  // SAVE VENDOR PLUGINS TO ADMIN_1 ASSETS FOLDER
    build_demo_data('/admin_1/html/assets/demo');  // SAVE DEMO DATA TO ADMIN_1 ASSETS FOLDER
});

/*
* BUILD ALL FILES FOR ADMIN_2 THEME
*/

gulp.task('build:admin_2', function(){
    gulp.start('admin_2:pug');
    gulp.start('admin_2:sass');
    gulp.start('admin_2:js');
    build_img('/admin_2/html/assets/img');
    build_vendors('/admin_2/html/assets/vendors');
    build_demo_data('/admin_2/html/assets/demo');
});

/*
* BUILD ALL FILES FOR ADMIN_3 THEME
*/

gulp.task('build:admin_3', function(){
    gulp.start('admin_3:pug');
    gulp.start('admin_3:sass');
    gulp.start('admin_3:js');
    build_img('/admin_3/html/assets/img');
    build_vendors('/admin_3/html/assets/vendors');
    build_demo_data('/admin_3/html/assets/demo');
});

/*
* BUILD ALL FILES FOR ADMIN_4 THEME
*/

gulp.task('build:admin_4', function(){
    gulp.start('admin_4:pug');
    gulp.start('admin_4:sass');
    gulp.start('admin_4:js');
    build_img('/admin_4/html/assets/img');
    build_vendors('/admin_4/html/assets/vendors');
    build_demo_data('/admin_4/html/assets/demo');
});

/*
* BUILD ALL FILES FOR ADMIN_5 THEME
*/

gulp.task('build:admin_5', function(){
    gulp.start('admin_5:pug');
    gulp.start('admin_5:sass');
    gulp.start('admin_5:js');
    build_img('/admin_5/html/assets/img');
    build_vendors('/admin_5/html/assets/vendors');
    build_demo_data('/admin_5/html/assets/demo');
});

/*
* BUILD ALL FILES FOR ADMIN_6 THEME
*/

gulp.task('build:admin_6', function(){
    gulp.start('admin_6:pug');
    gulp.start('admin_6:sass');
    gulp.start('admin_6:js');
    build_img('/admin_6/html/assets/img');
    build_vendors('/admin_6/html/assets/vendors');
    build_demo_data('/admin_6/html/assets/demo');
});

/*
* BUILD ALL FILES FOR ADMIN_7 THEME
*/

gulp.task('build:admin_7', function(){
    gulp.start('admin_7:pug');
    gulp.start('admin_7:sass');
    gulp.start('admin_7:js');
    build_img('/admin_7/html/assets/img');
    build_vendors('/admin_7/html/assets/vendors');
    build_demo_data('/admin_7/html/assets/demo');
});

/*
* BUILD ALL FILES FOR ADMIN_8 THEME
*/

gulp.task('build:admin_8', function(){
    gulp.start('admin_8:pug');
    gulp.start('admin_8:sass');
    gulp.start('admin_8:js');
    build_img('/admin_8/html/assets/img');
    build_vendors('/admin_8/html/assets/vendors');
    build_demo_data('/admin_8/html/assets/demo');
});


function build_img(output) {
    return gulp.src(config.path.src+'/img/**/*.*')
        .pipe(imagemin({ // compress images
            progressive: true, // compress .jpg
            interlaced: true, // compress .gif
            svgoPlugins: [{removeViewBox: false}], // compress .svg
            use: [pngquant()],
            optimizationLevel: 3 // compression level 0-7
        }))
        .pipe(gulp.dest(config.path.output+output));
}

function build_vendors(output) {
    gulp.src(config.path.bower_components+'/**/*.*')
      .pipe(gulp.dest(config.path.output+output));
    gulp.src(config.path.vendors+'/**/*.*')
      .pipe(gulp.dest(config.path.output+output));
}

function build_demo_data(output) {
    gulp.src(config.path.src+'/demo/**/*.*')
      .pipe(gulp.dest(config.path.output+output));
}
