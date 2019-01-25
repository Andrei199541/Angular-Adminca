var gulp = require('gulp'),
    pug  = require('gulp-pug'),
    data = require('gulp-data'),
    htmlbeautify = require('gulp-html-beautify'),
    fs   = require('fs'),
    gulpif    = require('gulp-if'),
    readConfig = require('read-config'),
    config    = readConfig('./config.json');

/*
* BUILD ALL HTML FILES FOR ALL THEMES
*/

gulp.task('build:pug', [
    'admin_1:pug',
    'admin_2:pug',
    'admin_3:pug',
    'admin_4:pug',
    'admin_5:pug',
    'admin_6:pug',
    'admin_7:pug',
    'admin_8:pug',
]);

var options = {
    indentSize: 2,
    unformatted: [
        // https://www.w3.org/TR/html5/dom.html#phrasing-content
         'abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite',
        'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript',
        'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
         'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text',
        'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
    ]
};


/*
* BUILD ALL HTML FILES FOR ADMIN_1 THEME
*/

gulp.task('admin_1:pug', function() {
    return gulp.src(config.build.admin_1.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.admin_1.pug.output));
});


/*
* BUILD ALL HTML FILES FOR ADMIN_2 THEME
*/

gulp.task('admin_2:pug', function() {
    return gulp.src(config.build.admin_2.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.admin_2.pug.output));
});

/*
* BUILD ALL HTML FILES FOR ADMIN_3 THEME
*/

gulp.task('admin_3:pug', function() {
    return gulp.src(config.build.admin_3.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.admin_3.pug.output));
});

/*
* BUILD ALL HTML FILES FOR ADMIN_4 THEME
*/

gulp.task('admin_4:pug', function() {
    return gulp.src(config.build.admin_4.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.admin_4.pug.output));
});

/*
* BUILD ALL HTML FILES FOR ADMIN_5 THEME
*/

gulp.task('admin_5:pug', function() {
    return gulp.src(config.build.admin_5.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.admin_5.pug.output));
});

/*
* BUILD ALL HTML FILES FOR ADMIN_6 THEME
*/

gulp.task('admin_6:pug', function() {
    return gulp.src(config.build.admin_6.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.admin_6.pug.output));
});

/*
* BUILD ALL HTML FILES FOR ADMIN_7 THEME
*/

gulp.task('admin_7:pug', function() {
    return gulp.src(config.build.admin_7.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.admin_7.pug.output));
});

/*
* BUILD ALL HTML FILES FOR ADMIN_8 THEME
*/

gulp.task('admin_8:pug', function() {
    return gulp.src(config.build.admin_8.pug.src)
        .pipe(data(function(file){
            return JSON.parse(fs.readFileSync(config.path.src+'/pug/menu.json'))
        }))
        .pipe(pug())
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest(config.build.admin_8.pug.output));
});
