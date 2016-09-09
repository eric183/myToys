// var gulp = require('gulp'),
//     ugly = require('gulp-uglify'),
//     // order = require('gulp-order'),
//     rename = require('gulp-rename'),
//     filter = require('gulp-filter'),
//     concat = require('gulp-concat'),
//     ref = require('gulp-useref'),
//     path = require('path');

// var _path = path.join(__dirname, '../imama_server/src/main/resources/templates/');
// var answer = path.join(_path, 'answer/');
// var static_local = path.join(_path, 'static/cdn-local/');
// var _lib = path.join(_path, 'js/lib/');

// console.log('路径1' + _path);
// console.log('路径2' + answer);
// console.log('路径3' + static_local);
// console.log('路径4' + _lib);

// var timeTramp = new Date().getTime();

// console.log('当前时间是 ' + timeTramp);


// var topModules = filter([
//     answer + 'js/wx-diysdk.js',
//     static_local + 'underscore.js/1.8.3/underscore-min.js',
//     static_local + 'jquery/2.1.4/jquery.min.js',
//     static_local + 'Director/1.2.8/director.min.js',
//     static_local + 'vue/0.12.10/vue.min.js',
//     static_local + 'fastclick/1.0.6/fastclick.min.js',
//     _lib + 'jquery.transit.min.js',
//     _lib + 'jquery.event.drag-2.2.js',
//     _lib + 'touch-0.2.14.min.js',
//     _lib + 'sockjs-0.3.4.min.js',
//     _lib + 'countUp.js',
//     answer + 'js/lib/main.js',
//     answer + 'js/listen-history.js',
//     answer + 'js/qr-code.js',
//     answer + 'js/ask-history.js',
//     answer + 'js/answer-list.js',
//     answer + 'js/doc-list.js'
// ], { restore: true });



// var doctorModules = filter([
//     answer + 'js/home-doc.js',
//     answer + 'js/doc-follow.js',
//     answer + 'js/fan-list.js'
// ], { restore: true });

// var userModules = filter([
//     answer + 'js/home-user.js',
//     answer + 'js/follow-list.js',
// ], { restore: true });


// var footModules = filter([
//     answer + 'js/edit.js',
//     answer + 'js/doc-detail.js',
//     answer + 'js/asked-list.js',
//     answer + 'js/answer-detail.js',
//     answer + 'js/foot-util.js',
// ], { restore: true });


// gulp.task('html', function() {
//     return gulp.src(answer + 'index.html')
//         .pipe()
//         .pipe(gulp.dest(_path + 'dist'))
// })


// gulp.task('test', function() {
//     // gulp.src(_path + 'answer/js/*.js')
//     // gulp.src('app/js/*.js')
//     return gulp.src(_path + '**')
//         .pipe(concat('top.js'))
//         .pipe(rename({ suffix: '.min-' + timeTramp }))
//         .pipe(ugly())
//         .pipe(gulp.dest(_path + 'dist/js'))
// });

// gulp.task('top_script', function() {
//     // gulp.src(_path + 'answer/js/*.js')
//     // gulp.src('app/js/*.js')
//     return gulp.src(topModules)
//         .pipe(concat('top.js'))
//         .pipe(rename({ suffix: '.min-' + timeTramp }))
//         .pipe(ugly())
//         .pipe(gulp.dest(_path + 'dist/js'))
// });



// gulp.task('doc_script', function() {
//     // gulp.src(_path + 'answer/js/*.js')
//     // gulp.src('app/js/*.js')
//     return gulp.src(doctorModules)
//         .pipe(concat('doctor.js'))
//         .pipe(rename({ suffix: '.min-' + timeTramp }))
//         .pipe(ugly())
//         .pipe(gulp.dest(_path + 'dist/js'));
// });

// gulp.task('user_script', function() {
//     return gulp.src(userModules)
//         .pipe(concat('user.js'))
//         .pipe(rename({ suffix: '.min-' + timeTramp }))
//         .pipe(ugly())
//         .pipe(gulp.dest(_path + 'dist/js'));
// });


// gulp.task('foot_script', function() {
//     return gulp.src(footModules)
//         .pipe(concat('foot.js'))
//         .pipe(rename({ suffix: '.min-' + timeTramp }))
//         .pipe(ugly())
//         .pipe(gulp.dest(_path + 'dist/js'));
// });
// gulp.task('default', ['top_script', 'doc_script', 'user_script', 'foot_script'])

// gulp.task('script', function() {
// gulp.src('app/js/*.js')
// .pipe(ugly())
// .pipe(gulp.dest('dist'));
// });











//------------------------------------------------------
var gulp = require('gulp'),
ugly = require('gulp-uglify'),
browserSync = require('browser-sync').create();;


gulp.task('script', function() {
gulp.src('app/js/*.js')
.pipe(ugly())
.pipe(gulp.dest('dist'));
});
gulp.task('style', function() {
gulp.src('app/sass/*.scss')
.pipe(sass({
outputStyle: 'expanded'
}).on('error', sass.logError))
.pipe(gulp.dest('app/css'))
.pipe(browserSync.stream());
});

gulp.task('watch', function() {
browserSync.init({
server: "./"
});

gulp.watch('app/sass/*.scss', ['style']);
gulp.watch("./*.html").on('change', browserSync.reload);

});
gulp.task('default', ['watch'])
