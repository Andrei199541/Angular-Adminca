var gulp = require('gulp'),
    sass         = require('gulp-sass'),
    cleanCSS     = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    bourbon      = require('node-bourbon'),
    gulpif       = require('gulp-if'),
    readConfig = require('read-config'),
    config    = readConfig('./config.json');


/*
* BUILD ALL CSS FILES FOR ALL THEMES
*/

gulp.task('build:sass', [
    'admin_1:sass',
    'admin_2:sass',
    'admin_3:sass',
    'admin_4:sass',
    'admin_5:sass',
    'admin_6:sass',
    'admin_7:sass',
    'admin_8:sass',
]);

/*
* BUILD ALL CSS FILES FOR ADMIN_1 THEME
*/

gulp.task('admin_1:sass', function(){
    /* 
    * MAIN CSS FILE FOR ADMIN_1 Theme: included
    *   bootstrap_4/main.scss        -- ui components
    *   layouts/admin_1/layout.scss  -- admin_1 theme layout
    *   vendors/vendors.scss         -- reset vendor plugins styles
    */
    gulp.src(config.build.admin_1.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_1.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.admin_1.sass.output.bundle));

    //== THEME SKIN FILES
    gulp.src(config.build.admin_1.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_1.sass.output.themes));

    //== PAGES STYLES
    gulp.src(config.build.admin_1.sass.src.pages)
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_1.sass.output.pages));
});


/*
* BUILD ALL CSS FILES FOR ADMIN_2 Bootstrap 4 variant THEME
*/

gulp.task('admin_2:sass', function(){
    /* 
    * MAIN CSS FILE FOR ADMIN 2 Bootstrap 4 variant: included
    *   bootstrap_4/main.scss        -- ui components
    *   layouts/admin_2/layout.scss  -- admin_2 theme layout
    *   vendors/vendors.scss         -- reset vendor plugins styles
    */
    gulp.src(config.build.admin_2.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_2.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.admin_2.sass.output.bundle));

    // THEME SKIN FILES
    gulp.src(config.build.admin_2.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_2.sass.output.themes));

    //== PAGES STYLES
    gulp.src(config.build.admin_2.sass.src.pages)
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_2.sass.output.pages));
});


/*
* BUILD ALL CSS FILES FOR ADMIN_3 Bootstrap 4 variant THEME
*/

gulp.task('admin_3:sass', function(){
    /* 
    * MAIN CSS FILE FOR ADMIN_3 Bootstrap 4 variant: included
    *   bootstrap_4/main.scss        -- ui components
    *   layouts/admin_3/layout.scss  -- admin_3 theme layout
    *   vendors/vendors.scss         -- reset vendor plugins styles
    */
    gulp.src(config.build.admin_3.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_3.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.admin_3.sass.output.bundle));

    // THEME SKIN FILES

    gulp.src(config.build.admin_3.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_3.sass.output.themes));

    //== PAGES STYLES
    gulp.src(config.build.admin_3.sass.src.pages)
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_3.sass.output.pages));
});


/*
* BUILD ALL CSS FILES FOR ADMIN_4 Bootstrap 4 variant THEME
*/

gulp.task('admin_4:sass', function(){
    /* 
    * MAIN CSS FILE FOR ADMIN_4 Bootstrap 4 variant: included
    *   bootstrap_4/main.scss        -- ui components
    *   layouts/admin_4/layout.scss  -- admin_4 theme layout
    *   vendors/vendors.scss         -- reset vendor plugins styles
    */
    gulp.src(config.build.admin_4.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_4.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.admin_4.sass.output.bundle));

    //== THEME SKIN FILES
    gulp.src(config.build.admin_4.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_4.sass.output.themes));

    //== PAGES STYLES
    gulp.src(config.build.admin_4.sass.src.pages)
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_4.sass.output.pages));
});


/*
* BUILD ALL CSS FILES FOR ADMIN_5 Bootstrap 4 variant THEME
*/

gulp.task('admin_5:sass', function(){
    /* 
    * MAIN CSS FILE FOR ADMIN_5 Bootstrap 4 variant: included
    *   bootstrap_4/main.scss        -- ui components
    *   layouts/admin_5/layout.scss  -- admin_5 theme layout
    *   vendors/vendors.scss         -- reset vendor plugins styles
    */
    gulp.src(config.build.admin_5.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_5.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.admin_5.sass.output.bundle));

    //== THEME SKIN FILES
    gulp.src(config.build.admin_5.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_5.sass.output.themes));

    //== PAGES STYLES
    gulp.src(config.build.admin_5.sass.src.pages)
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_5.sass.output.pages));
});

/*
* BUILD ALL CSS FILES FOR ADMIN_6 THEME
*/

gulp.task('admin_6:sass', function(){
    /* 
    * MAIN CSS FILE FOR ADMIN_6 theme: included
    *   bootstrap_4/main.scss        -- ui components
    *   layouts/admin_5/layout.scss  -- admin_5 theme layout
    *   vendors/vendors.scss         -- reset vendor plugins styles
    */
    gulp.src(config.build.admin_6.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_6.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.admin_6.sass.output.bundle));

    //== THEME SKIN FILES
    gulp.src(config.build.admin_6.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_6.sass.output.themes));

    //== PAGES STYLES
    gulp.src(config.build.admin_6.sass.src.pages)
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_6.sass.output.pages));
});

/*
* BUILD ALL CSS FILES FOR ADMIN_7 THEME
*/

gulp.task('admin_7:sass', function(){
    /* 
    * MAIN CSS FILE FOR ADMIN_7 theme: included
    *   bootstrap_4/main.scss        -- ui components
    *   layouts/admin_7/layout.scss  -- admin_7 theme layout
    *   vendors/vendors.scss         -- reset vendor plugins styles
    */
    gulp.src(config.build.admin_7.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_7.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.admin_7.sass.output.bundle));

    //== THEME SKIN FILES
    gulp.src(config.build.admin_7.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_7.sass.output.themes));

    //== PAGES STYLES
    gulp.src(config.build.admin_7.sass.src.pages)
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_7.sass.output.pages));
});

/*
* BUILD ALL CSS FILES FOR ADMIN_8 THEME
*/

gulp.task('admin_8:sass', function(){
    /* 
    * MAIN CSS FILE FOR ADMIN_8 theme: included
    *   bootstrap_4/main.scss        -- ui components
    *   layouts/admin_8/layout.scss  -- admin_8 theme layout
    *   vendors/vendors.scss         -- reset vendor plugins styles
    */
    gulp.src(config.build.admin_8.sass.src.bundle)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_8.sass.output.bundle))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build.admin_8.sass.output.bundle));

    //== THEME SKIN FILES
    gulp.src(config.build.admin_8.sass.src.themes)
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_8.sass.output.themes));

    //== PAGES STYLES
    gulp.src(config.build.admin_8.sass.src.pages)
    .pipe(gulpif(config.compile.cssMinify, cleanCSS({compatibility: 'ie8'})))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(config.build.admin_8.sass.output.pages));
});

