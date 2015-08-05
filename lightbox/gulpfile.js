// 获取 gulp
var gulp = require('gulp');

// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');

// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css');

//获取gulp-ruby-sass模块
var sass = require('gulp-ruby-sass')

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
});


// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
    // 2. 压缩文件
        .pipe(minifyCSS())
    // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
})

//编译sass
//在命令行输入gulp-sass启动此任务
gulp.task('sass',function(){
    return sass('sass/')
    .on('error',function(err){
        console.error('Error!',err.message);
    })
    .pipe(gulp.dest('css/'))
});


// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('js/*.js', ['script'])
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('css/*.css', ['css'])
    // 监听文件修改，当文件被修改则执行 sass 任务
    gulp.watch('sass/**/*.scss',['sass'])

});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 script 任务和 auto 任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', ['sass','css','script', 'auto'])