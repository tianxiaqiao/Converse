const gulp = require("gulp");
const connect = require("gulp-connect");


const sass = require('gulp-sass');
sass.compiler = require('node-sass');

// 方便维护的代理表格;

const cleanCSS = require('gulp-clean-css');

// 路径列表;

const srclist = {
      "sass":{
            "src" : "./sass/*.scss",
            "dest" : "./css/"
      }
}

gulp.task('minify-css', () => {
      return gulp.src(srclist.sass.src)
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(gulp.dest(srclist.css.dest));
});




gulp.task('sass', function () {
      return gulp.src(srclist.sass.src)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(srclist.sass.dest))
            .pipe(connect.reload());
});

gulp.task("watch",()=>{
      gulp.watch("./sass/*.scss",["sass"])
})

// 调试环境;
gulp.task("default",["watch"]);
