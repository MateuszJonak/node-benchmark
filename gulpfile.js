var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');
var minimist = require('minimist');

// OPTIONS
var options = minimist(process.argv.slice(2));
options.framework = options.framework;

gulp.task('develop', function () {

    var nodemonConf = {
        script: './app.js',
        ext: 'js',
        stdout: false
    };

    if (options.framework) {
        nodemonConf.script = './frameworks/' + options.framework + '.js';
    }

    livereload.listen();
    nodemon(nodemonConf).on('readable', function () {
        this.stdout.on('data', function (chunk) {
            if(/^Express server listening on port/.test(chunk)){
                livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('default', [
    'develop'
]);
