const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify-es").default,
  imagemin = require("gulp-imagemin"),
  concat = require("gulp-concat"),
  del = require("del"),
  browserSync = require("browser-sync");

gulp.task("clean", async function () {
  del.sync("./build");
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./build"
    },
    notify: false,
    online: false,
    tunnel: false,
    tunnel: "test" // Demonstration page: http://test.localtunnel.me
  });
});

gulp.task("html", function () {
  return gulp.src("./src/*.html")
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest("./build"));
});

gulp.task("style", function () {
  return gulp
    .src(["./node_modules/bootstrap/dist/css/bootstrap.css", "./src/scss/**/*.scss"])
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(
      autoprefixer({
        grid: "autoplace",
        overrideBrowserslist: ["last 10 version"],
        cascade: false
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function () {
  return gulp
    .src(["./src/js/**/*.js"])
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("img", function () {
  return gulp
    .src("./src/img/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 })
      ])
    )
    .pipe(gulp.dest("./build/img"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("./src/*.html", gulp.parallel("html"));
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("style"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("script"));
  gulp.watch("./src/img/**/*.*", gulp.parallel("img"));
});

gulp.task(
  "default",
  gulp.parallel("html", "style", "script", "img", "browser-sync", "watch")
);
