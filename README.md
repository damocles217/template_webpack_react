# About the template

## Content

- [About the template](#about-the-template)
	- [Content](#content)
	- [Webpack](#webpack)
	- [Jest](#jest)
	- [Express](#express)
	- [Git hooks](#git-hooks)

## Webpack

In this template I use webpack, it contains plugins for optimize, split the code, and minify the
better than I could.
It also removes the data-test-id for react components (for a better production mode). Compress the javascript files that are result of the building in gzip algorithm. Make aliases from all paths using @/path/ from src directory, load javascript files as modules for unblocking the page loading. Minify SCSS and CSS, including css modules. For the code splitting, webpack tries to split all the code with a max size of 124000 Bytes, and for react, it minify, or less it tries, to split all the code as can be possible.

Explanation:

1. Entry (entry file of the project)
2. output (the output path)
	1. path: resolve(...) (Allow us set the output directory)
	2. filename: [name].[fullhash].js (Transpile all the files specified in resolve and module.rules)
	3. clean: true (Delete the dist repository before to re-build)
	4. publicPath: '/' (Set the public path as the root of the project)
3. Resolve (Configuration for the files who will be checked)
   1. extensions: ['.ts', '.tsx', '.js']
   2. alias : {...} (Set aliases, they can be used in the code as the example below)
      1. import Main from "@src/component"
4. Plugins
   1. MiniCssExtract (Extract the css from the js files)
	 2. HtmlPlugin (set the html template to use)
		1. scriptLoading: module (set the type="" in script tag 'module' is used for performance)
		2. template: '/../index.html' (set where is the template and the name)
		3. minify: true (minify html)
   3. Compression (gzip all the files builded that match the test)
      1. test: *js (All js files compressed)
      2. filename: [name].js.gz (All files have this name structure)
			3. algorithm: gzip (Compresssion algorithm to use)
5. module.rules (parse the files to be loaded from webpack)
   1. SCSS.modules: true (it allow us use the *.module.scss syntax in jsx)
   2. TS-loader.configFile (set the tsconfig file)
	 4. TS-loader.removeDataTestId (Remove the data-testid from the react components (for prod mode))
6. Optimization
   1. chunksIds: named (the algorithm webpack use to choose to call the chunks)
   2. moduleIds: named (Which algorithm will be used by webpack for choose module ids)
	 3. mangleExports: size (Module names (1 character))
	 4. portableRecords: true (Relative paths for be able to move this project)
	 5. minimize: true (minimze all the bundles)
	 6. minimizer: these plugins minize the bundles
	 7. splitChunks (Split all the code that can be possible)
          1. chunks: all (Select all chunks will be optimized);
          2. maxAsyncRequests: 30 (Maximum parallel request)
          3. minSize: 10000 (Min chunk size, in bytes)
          4. maxSize: 124000 (Try to split the modules greatter than 124000 bytes)
          5. cacheGroups
          6. reactVendor (Cache group)
              1. test: .. (controll what modules are in this cache group)
              2. name: 'vendor-react' (name for chunk files)
              3. maxSize: 140000 (maxSize of the chunk files)
7. performance
   1. hints: 'warning' (Show a warning when the files configured here are bigger than the configuration)

## Jest

Jest uses typescript and I test that is enough for futures implementations. It uses ts-jest for parsing the
tsx files to js files for testing. It need to use jsdom by default because we are using a browser implementation.
It also uses alias, `@src/(.*): ...` implements aliases for jest. (using also the tsconfig file). And css|scss mapper is for *.module.s?css files.
And select the babelConfig to false for not usign babel.

## Express

The last important theme about this template, is we use express for serve the files. But when we make a query of a dot js file, express sends a gzip module, for optimize the loading of them.

## Git hooks

If you want to implement my git hooks, please put this command:

```bash
git config core.hooksPath .githooks
```
