// webpack.mix.js

let mix = require('laravel-mix');

mix
	.postCss("assets/src/styles.css", "dist", [
		require("tailwindcss"),
		])
	.js('assets/src/app.js', 'dist')
	.setPublicPath('assets')
	.disableSuccessNotifications();