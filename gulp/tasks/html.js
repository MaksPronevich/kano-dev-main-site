import fileInclude from 'gulp-file-include';
import htmlBeautify from 'gulp-html-beautify';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

const htmlBeautifyOptions = {
	indent_size: 4,
	indent_with_tabs: true,
	preserve_newlines: false,
};

const versionNumberOptions = {
	value: '%DT%',
	append: {
		key: '_v',
		cover: 0,
		to: ['css', 'js'],
	},
	output: {
		file: 'gulp/version,json',
	},
};

export const html = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'HTML',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
		.pipe(app.plugins.if(app.isBuild, versionNumber(versionNumberOptions)))
		.pipe(htmlBeautify(htmlBeautifyOptions))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream());
};
