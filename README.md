# About the template

## Webpack

In this template I use webpack, it contains plugins for optimize, split the code, and minify the
better than I could.
It also removes the data-test-id for react components (for a better production mode). Compress the javascript files that are result of the building in gzip algorithm. Make aliases from all paths using @/path/ from src directory, load javascript files as modules for unblocking the page loading. Minify SCSS and CSS, including css modules. For the code splitting, webpack tries to split all the code with a max size of 124000 Bytes, and for react, it minify, or less it tries, to split all the code as can be possible.

## Jest

Jest uses typescript and I test that is enough for futures implementations.

## Express

The last important theme about this template, is we use express for serve the files. But when we make a query of a dot js file, express sends a gzip module, for optimize the loading of them.
