import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

const sassOptions = {
	outputStyle: 'expanded',
};

const webpCssOptions = {
	webpClass: '.webp',
	noWebpClass: '.no-webp',
};

const autoPrefixerOptions = {
	grid: true,
	overrideBrowserslist: ['last 3 versions'],
	cascade: true,
};

const renameOptions = {
	extname: '.css',
};

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { soursemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass(sassOptions))
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		.pipe(app.plugins.if(app.isBuild, webpCss(webpCssOptions)))
		.pipe(app.plugins.if(app.isBuild, autoPrefixer(autoPrefixerOptions)))
		.pipe(app.plugins.if(app.isBuild, cleanCss()))
		.pipe(rename(renameOptions))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream());
};
