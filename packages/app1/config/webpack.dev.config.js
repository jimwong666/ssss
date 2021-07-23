const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');
const { clientPathResolve, appConfig, getEntry } = require('./utils/tools');

const entryObj = getEntry(clientPathResolve('src/entry'));
const port = appConfig.dev_clientPort || 3000;
const publicPath = '/';
const devApiPath = appConfig.dev_apiPath || `http://localhost:${port}/`;

module.exports = merge(webpackBaseConfig, {
	output: {
		filename: '[name].js',
		publicPath,
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		port,
		compress: true,
		disableHostCheck: true,
		host: '0.0.0.0',
		hot: true,
		open: true,
		openPage: `http://localhost:${port}/`,
		historyApiFallback: {
			// 单页应用刷新页面重定向到对应的单页目录下，以便支持多个单页和多页共存
			rewrites: Object.keys(entryObj).map((chunkName) => {
				[chunkName] = chunkName.split('/');
				return {
					from: new RegExp(`^/${chunkName}/`, 'g'),
					to: `/${chunkName}/`,
				};
			}),
			// rewrites: [
			//     {
			//         from:  /^\/spa2\//g,
			//         to: '/spa2/'
			//     }
			// ]
		},
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
				title: 'paludina的博客',
				filename: `${chunkName}.html`,
				chunks: [chunkName],
				template: clientPathResolve('public/index.html'),
				favicon: clientPathResolve('public/favicon.ico'),
			});
		}),
	),
});
