import { Configuration } from 'webpack';
import { resolve } from 'path';
import { merge } from 'webpack-merge';
import CommonConfig from './webpack.common';
import 'webpack-dev-server';

const config = merge<Configuration>(CommonConfig, {
	mode: 'development',
	devtool: 'inline-source-map', // it has a greater size but is for dev

	devServer: {
		host: '192.168.1.67',
		port: 5000,

		static: {
			directory: resolve(__dirname, '..', 'public'),
			publicPath: './dist',
		},

		historyApiFallback: true,
		open: true,
		compress: true,
		hot: true,

		client: {
			reconnect: 15,
			progress: true,
			overlay: {
				errors: true,
				warnings: false,
			},
		},
	},

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							outputPath: 'images',
							publicPath: 'images',
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				exclude: [/node_modules/],
				loader: 'ts-loader',
				options: {
					configFile: '../tsconfig.json',
				},
			},
		],
	},

	cache: {
		type: 'filesystem',
		version: '1.0.0',
		maxAge: 300000,
		// hashAlgorithm: 'md4',
		compression: 'gzip',
		cacheLocation: resolve(__dirname, 'cache'),
	},
});

export default config;
