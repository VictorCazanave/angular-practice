var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require('tsify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var util = require("gulp-util");

var browsered = browserify({
		basedir: '.',
		debug: true,
		entries: ['src/main.ts'],
		cache: {},
		packageCache: {}
	})
	.plugin(tsify)
	.transform('babelify');

// Bundle JS files
function bundle(files) {
	return files
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(uglify()) // Do it only for production?
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist'));
}

gulp.task('clean', function() {
	return del('dist/**/*');
});

gulp.task('html', function() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
	bundle(browsered);
});

gulp.task('build', ['clean', 'html', 'js']);

gulp.task('watch', ['clean', 'html'], function() {
	// HTML files
	gulp.watch('src/**/*.html', ['html']);

	// JS files
	var watched = watchify(browsered);
	bundle(watched);
	watched.on("update", function() {
		bundle(watched);
	});
	watched.on("log", util.log);
});
