var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var config = {
  source: './src/',
  dist: './public/'
};
var paths = {
  assets: "/assets/",
  imgPng:"img/*.png",
  html: "**/*.html",
  js: "js/componentes/**.js",
  vendor: "js/vendor/**.js",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  mainJS: "js/app.js"
};
var sources = {
  assets: config.source + paths.assets,
  img: config.source + paths.assets + paths.imgPng,
  html: config.source + paths.html,
  sass: paths.assets + paths.sass,
  js: config.source + paths.assets + paths.js,
  vendor: config.source + paths.assets + paths.vendor,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS,
};
gulp.task("img",()=>{
    gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('sass', ()=>{
  console.log(sources.rootSass);
  gulp.src(sources.rootSass)
  .pipe(sass({
    outputStyle: "compressed"
  }).on("Error", sass.logError))
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('js', ()=>{
  gulp.src([sources.vendor,sources.js,sources.rootJS])
  .pipe(concat(sources.rootJS))
  .pipe(browserify())
  .pipe(rename("bundle.js"))
  .pipe(gulp.dest(config.dist + paths.assets + "js"));
});
gulp.task("img-watch",["img"], (done)=>{
  browserSync.reload();
  done();
});
gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: config.dist
      // baseDir: config.dist + paths.assets
    }
  });
  gulp.watch(sources.img, ["img-watch"]);
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.js, ["js-watch"]);
});
