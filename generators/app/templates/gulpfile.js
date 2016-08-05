/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

"use strict";
var gulp       = require("gulp");
var nodemon    = require('gulp-nodemon');
var bsync      = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var config = require('./server/config/environment');

var openOpts = {
  uri: 'http://localhost:' + config.port,
  already: false
};

/**
 * Copy all resources that are not TypeScript files into dist directory.
 */
gulp.task("resources", ["server", "app", "assets"], function () {
    console.log("Building resources...");
});
/* copy the app core files to the dist folder */
gulp.task("app", ['index'], function(){
    return gulp.src(["client/**", "!client/**/*.ts", "!client/**/*.scss"])
        .pipe(gulp.dest("dist/client"));
});
/* get the index file to the root of the dist */
gulp.task("index", function(){
    return gulp.src(["index.html"])
        .pipe(gulp.dest("dist"));
});
/* copy node server to dist folder */
gulp.task("server", function() {
    return gulp.src(["server/**"])
        .pipe(gulp.dest("dist/server"));
})
/* styles and other assets */
gulp.task("assets", function(){
    return gulp.src(["package.json", "systemjs.config.js"])
        .pipe(gulp.dest("dist"));
});

/**
 * Build the project.
 */
gulp.task("default", ['resources'], function () {
    console.log("Building the project ...");
});

/////////////////////////////////////////////////////////

gulp.task('nodemon', function() {
    return nodemon({
        script: 'server/index.js',
        ext: 'js',
        ignore: ['client', 'dist', 'typings', 'node_modules', 'gulpfile.js']
      })
      .on('start', function () {
        if (!openOpts.already) {
          openOpts.already = true;
          ripe.wait(cb);
        } else {
          ripe.wait(function () {
            bsync.reload({ stream: false });
          });
        }
      });
});

gulp.task('serve', ['nodemon'], function() {
    bsync.init({
        proxy: 'localhost:9000',
        browser: process.env.BROWSER || 'google chrome',
        online: false,
        notify: false,
        watchOptions: {
            interval: 500
        }
    });
});
