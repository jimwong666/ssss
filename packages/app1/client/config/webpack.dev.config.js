const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');
const { clientPathResolve, appConfig, getEntry } = require('./utils/tools');
const { rewrites, openPage } = require('./utils/devMultiPageTools');
const packageName = require('../../package.json').name;

const entryObj = getEntry(clientPathResolve('src/entry'));
const port = appConfig.dev_clientPort || 3000;
const publicPath = '/';
const devApiPath = appConfig.dev_apiPath || `http://localhost:${port}/`;

module.exports = merge(webpackBaseConfig, {
	output: {
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].js',
		publicPath,
		library: `${packageName}-[name]`,
		libraryTarget: 'umd',
		jsonpFunction: `webpackJsonp_${packageName}`,
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		port,
		compress: true,
		disableHostCheck: true,
		host: '0.0.0.0',
		hot: true,
		open: true,
		openPage,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		historyApiFallback: {
			rewrites,
		},
		contentBase: '/',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: [clientPathResolve('src')],
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2, // 使用import之前还要经过几次loader
							sourceMap: true,
							// modules: {
							//     localIdentName: '[local]--[hash:base64:5]'
							// }
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: path.resolve(__dirname, './postcss.config.js'), // 使用postcss单独的配置文件
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(less|css)$/,
				include: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true,
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				include: [clientPathResolve('src')],
				exclude: /node_modules/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
					},
				},
			},
		],
	},
	plugins: [
		new ReactRefreshPlugin(),
		new webpack.DefinePlugin({
			// 所有ajax请求的基础url
			BASE_URL: JSON.stringify(`${devApiPath}`),
		}),
	].concat(
		Object.keys(entryObj).map((chunkName) => {
			// 多页面兼容
			return new HtmlWebpackPlugin({
				title: `${chunkName}-博客`,
				filename: `${chunkName}.html`,
				chunks: [chunkName],
				template: clientPathResolve('public/index.html'),
				favicon: clientPathResolve('public/favicon.ico'),
			});
		}),
	),
});
