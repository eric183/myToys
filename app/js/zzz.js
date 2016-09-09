// var gulp = require('gulp'),
// ugly = require('gulp-uglify');

// var path = require('path');

// var _path = path.join(__dirname, '../imama_server/src/main/resources/templates/');



// sass = require('gulp-sass'),
// browserSync = require('browser-sync').create();

// console.log(_path);
// gulp.task('script', function() {
//     gulp.src('app/js/*.js')
//         .pipe(ugly())
//         .pipe(gulp.dest('dist'));
// });
// gulp.task('style', function() {
//     gulp.src('app/sass/*.scss')
//         .pipe(sass({
//             outputStyle: 'expanded'
//         }).on('error', sass.logError))
//         .pipe(gulp.dest('app/css'))
//         .pipe(browserSync.stream());
// });


// gulp.task('top', function() {
//     gulp.src(_path + 'answer/js/*.js')
//         .pipe(ugly())
//         .pipe(gulp.dest('dist'));
// });
// gulp.task('watch', ['style'], function() {
// browserSync.init({
// server: "./app"
// });

// gulp.watch('app/sass/*.scss', ['style']);
// gulp.watch("app/*.html").on('change', browserSync.reload);

// });

// gulp.task('default',['top']);





var gulp = require('gulp'),
ugly = require('gulp-uglify');

gulp.task('script', function() {
    // gulp.src(_path + 'answer/js/*.js')
    gulp.src('app/js/*.js')
        .pipe(ugly())
        .pipe(gulp.dest('dist'));
});

// gulp.task('script', function() {
// gulp.src('app/js/*.js')
// .pipe(ugly())
// .pipe(gulp.dest('dist'));
// });



gulp.task('default', ['script'])








//------------------------------------------------------
// var gulp = require('gulp'),
// ugly = require('gulp-uglify'),
// browserSync = require('browser-sync').create();;


// gulp.task('script', function() {
// gulp.src('app/js/*.js')
// .pipe(ugly())
// .pipe(gulp.dest('dist'));
// });
// gulp.task('style', function() {
// gulp.src('app/sass/*.scss')
// .pipe(sass({
// outputStyle: 'expanded'
// }).on('error', sass.logError))
// .pipe(gulp.dest('app/css'))
// .pipe(browserSync.stream());
// });

// gulp.task('watch', function() {
// browserSync.init({
// server: "./app"
// });

// gulp.watch('app/sass/*.scss', ['style']);
// gulp.watch("app/*.html").on('change', browserSync.reload);

// });


gulp.task('default', ['watch'])
