let gulp = require('gulp');
let gulp_rigger = require('gulp-rigger');

gulp.task('html',function(resolve){
	gulp
		.src(['src/index.html'])
		.pipe(gulp_rigger())
		.pipe(gulp.dest('build/'));
	resolve();
})

gulp.task('images',function(done){
	gulp
		.src('src/images/*')
		.pipe(gulp.dest('build/images'));
	done();
})

gulp.task('css',function(done){
	gulp
		.src('src/css/style.css')
		.pipe(gulp.dest('build/css'));
	done();
})

gulp.task('js',function(done){
	gulp
		.src('src/js/*.js')
		.pipe(gulp.dest('build/js'));
	done();
})

gulp.task('json',function(done){
	gulp
		.src('src/json/*.json')
		.pipe(gulp.dest('build/json'));
	done();
})

gulp.task('all', gulp.series('html','images','css','js','json'));