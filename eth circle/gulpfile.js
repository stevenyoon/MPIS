var gulp = require('gulp'),
browserSync = require('browser-sync'),
reload = browserSync.reload;

gulp.task('browserSync', function() {
    browserSync({
        notify: false,
        open: false,
        server: {
            baseDir: "./"
        }
    });
});

function onError(err){
	console.log(err);
}

gulp.task('default', ['watch', 'browserSync']);

gulp.task('watch', function(){
	gulp.watch('*.html', reload);
});
