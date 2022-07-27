import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { removeDataTestIdTransformer } from 'typescript-transformer-jsx-remove-data-test-id';
import CommonConfig from './webpack.common';
import CompressionPlugin from 'compression-webpack-plugin';

const config = merge<Configuration>(CommonConfig, {
	mode: 'production',

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[contenthash].[ext][query]',
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
					getCustomTransformers: () => ({
						// Delete the data-test-id for react components
						before: [removeDataTestIdTransformer()],
					}),
				},
			},
		],
	},

	plugins: [
		new CompressionPlugin({
			test: /\.js(\?.*)?$/i,
			filename: '[name].js.gz',
			algorithm: 'gzip',
			deleteOriginalAssets: false,
		}),
	],

	performance: {
		hints: 'warning',
		maxAssetSize: 110000,
		maxEntrypointSize: 145000,
	},
});

export default config;
