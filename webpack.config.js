const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const babelPresets = ['es2015', 'react'];
babelPresets.push('react-hmre');

module.exports = {
    debug: true,
    devtool: 'inline-sourcemap',
    noInfo: false,
    entry: [
        `${pkg.paths.src}/js/app.js`,
        'webpack/hot/dev-server',
        `webpack-hot-middleware/client?reload=true&path=http://localhost:${pkg.port}/__webpack_hmr`
    ],
    target: 'web',
    devServer: {
        port: pkg.port,
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: `main.${pkg.version}.min.js`,
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({ template: `${pkg.paths.src}/index.html` }),
        new ExtractTextPlugin(`main.${pkg.version}.min.css`),
        new OpenBrowserPlugin({ url: `http://localhost:${pkg.port}/challenges` }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json'
            }
        ]
    }
};
