var gulp 	= require ('gulp'),
	sass 	= require ('gulp-sass'),
	auto 	= require ('gulp-autoprefixer'),
	browser = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('app/sass/main.scss')
	.pipe(sass())
	.pipe(auto(['last 15 versions', '>1%']))
	.pipe(gulp.dest('app/css'))
	.pipe(browser.reload({stream:true}))
});
gulp.task('browser-sync', function(){
	browser({
			server:{
				baseDir:'app'
			},
			notify:false
	})
});
gulp.task('watch',['browser-sync','sass'],function(){
	gulp.watch('app/sass/**/*.scss',['sass']);
	gulp.watch('app/*.html',browser.reload);
	gulp.watch('app/scripts/**/*.js', browser.reload);
});