
var browserify = require('browserify');
var gulp = require('gulp');
var file = require('./handle/lib/file');
var source = require('vinyl-source-stream');
var notify = require('gulp-notify');
var watchify = require('watchify');

gulp.task('clean', function(cb){
	file.dele(['build/*'], {dot: true});
	file.create('build/');
	cb();
})

// gulp.task('copyStatic', ['clean'], function(cb){
// 	file.copy('ui/index.html', 'build/index.html');
// 	file.copy('ui/style.css', 'build/style.css');
// 	file.copy('handle/jquery.min.js', 'build/jquery.min.js');
// 	cb();
// })

gulp.task('build', ['clean'], function(){
	var process = browserify({
		entries: ['handle/server.js'],
		cache: {},
		packageCache: {},
		plugin: [watchify]
	})

	var handle = function(){
		return process
			.bundle()
			.on('error', function(){
				var args = Array.prototype.slice.call(arguments);

				notify.onError({
					title: "Compile Error",
					message: "<%= error.message %>"
				}).apply(this, args);

				this.emit('end');
			})
			.pipe(source('serverd.js'))
			.pipe(gulp.dest('build'))
	}
	
	process.on('update', handle);
	handle();
})