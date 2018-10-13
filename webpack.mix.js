let mix = require('laravel-mix');
let webpack = require('webpack');
let webpackShellPlugin = require('webpack-shell-plugin');

function resolve(dir) {
    return path.join(__dirname, '', dir);
}

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
*/

mix.webpackConfig({
    resolve: {
        alias: {
            '@': resolve('resources/assets/js/face'),
            '@admin': resolve('resources/assets/js/admin'),
            '@public': resolve('public'),
        }
    },
    plugins: [
        new webpackShellPlugin({
            onBuildStart: [], // 'php artisan laroute:generate'
            onBuildEnd: []
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery',
            UIkit: 'uikit',
            'window.UIkit': 'uikit'
        })
    ],
    module: {
        rules: [
            {
                test: require.resolve('uikit'),
                use: [{
                    loader: 'expose-loader',
                    options: 'UIkit'
                }]
            }
        ]
    }
});

 // копирование файлов
 // mix.copy('resources/assets/js/routes.js', 'publicjs').version();

 // копирование директорий
 mix.copy('resources/assets/fonts', 'public/fonts', false);
 mix.copy('resources/assets/img', 'public/img', false);

 //обработка стилей
 mix.less('resources/assets/style/ui.less', 'public/style').version();

 // face
 mix.js('resources/assets/js/entry/home.js', '/js').version();
 mix.js('resources/assets/js/entry/product.js', '/js').version();
