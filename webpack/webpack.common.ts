import { Configuration } from 'webpack';
import { resolve } from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizer from 'css-minimizer-webpack-plugin';
import MiniCssExtract from 'mini-css-extract-plugin';
import HtmlPlugin from 'html-webpack-plugin';

const config: Configuration = {
	entry: '/src/index.tsx',
	output: {
		path: resolve(__dirname, '..', 'dist'),
		filename: '[name].[fullhash].js',
		clean: true,
		publicPath: '/',
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@src': resolve(__dirname, '..', 'src'),
		},
	},

	plugins: [
		new MiniCssExtract(),
		new HtmlPlugin({
			scriptLoading: 'module',
			template: '/global/index.html',
			minify: true,
		}),
	],

	module: {
		rules: [
			{
				test: /.s?css$/,
				use: [
					{ loader: MiniCssExtract.loader },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: false,
						},
					},
					{
						loader: 'sass-loader',
					},
				],
				exclude: [/node_modules/],
			},
		],
	},

	optimization: {
		chunkIds: 'named',
		moduleIds: 'named',
		mangleExports: 'size',
		minimize: true,
		minimizer: [
			new TerserPlugin({
				exclude: [/node_modules/],
				parallel: true,
				minify: TerserPlugin.uglifyJsMinify,
				terserOptions: {
					compress: true,
				},
			}),
			new CssMinimizer({
				exclude: [/node_modules/],
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true },
						},
					],
				},
				minify: CssMinimizer.cleanCssMinify,
			}),
		],

		splitChunks: {
			chunks: 'all',
			maxAsyncRequests: 30,
			minSize: 10000,
			maxSize: 124000,

			cacheGroups: {
				// Specific configuration for react optimization size
				reactVendor: {
					test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
					name: 'vendor-react',
					chunks: 'all',
					maxSize: 140000,
				},
			},
		},
	},
};
export default config;
