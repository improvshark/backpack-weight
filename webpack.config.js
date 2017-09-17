var path = require('path')
var webpack = require('webpack')

let isProd = process.env.NODE_ENV === 'production';

module.exports = function() {

    let config = {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/',
            filename: '[name].js'
        },
        performance: {
            hints: false
        },
        devtool: isProd ? '#source-map' : '#eval-source-map'
    };

    config.resolve = {
        extensions: ['.vue', '.js', '.json'],
		alias: {
			'assets$': './src/asets/',
            'font-awesome$': 'font-awesome/css/font-awesome.css',
			'vue$': 'vue/dist/vue.esm.js'
		},
		modules: ['node_modules', 'src'],

    };

    config.devServer = {
        historyApiFallback: true,
        noInfo: true
    };

    /*
     *  LOADERS
     */
    vueLoader = {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {}
            // other vue-loader options go here
        }
    };

    let babelLoader = {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    };

    let fileLoader = {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]?[hash]'
        }
    };

    let fontLoader = {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
    };

    let cssLoader = {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    };

    config.module = {
        rules:[vueLoader, babelLoader, fileLoader, fontLoader, cssLoader]
    };

    /*
     *  PLUGINS
     */

    let HtmlWebpackPlugin = new(require('html-webpack-plugin'))({
 		title: 'My App',
 		template: path.resolve(__dirname, './index.html'),
 		inject: true,
 	});

    let define = new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    });

    let uglify = new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    });

    let loaderOptions = new webpack.LoaderOptionsPlugin({
        minimize: true
    });

     if(isProd) {
         config.plugins = [define, uglify, loaderOptions, HtmlWebpackPlugin];
     } else {
         config.plugins = [HtmlWebpackPlugin];
     }
     return config;
}
