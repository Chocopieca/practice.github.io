var gulp = require('gulp');
var rename = require('rename');
var scss = require('scss');
var pipe = require('pipe')

function cov_css(done) {
    gulp.src('scss/style.scss')
        .pipe( gulp.dest('css/') );
	done();
}

function sayhello(done) {
    console.log("hello");
    done();
}

gulp.task(cov_css);
gulp.task('default', sayhello);