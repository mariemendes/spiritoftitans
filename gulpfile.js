const gulp = require ('gulp');
const gulpSass = require ('gulp-sass');

const nodeSass = require ("node-sass");
const sass = gulpSass(nodeSass);
const browserSync = require ('browser-sync').create();

function compilaSass() {
    return gulp.src ('./app/src/css/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./app/dist/'))
    .pipe(browserSync.stream());
}

gulp.task('sass', compilaSass);

function browser() {
    browserSync.init({
        server: {
            baseDir:'./'
        }
    })
}

gulp.task('browser-sync', browser);

function watch () {
    gulp.watch ('./app/src/css/scss/*.scss', compilaSass)
}
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync'));