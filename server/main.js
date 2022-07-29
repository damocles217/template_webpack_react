/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, '..', 'dist');

app.get('*.js', (req, res, next) => {
	// only for test
	// console.log(`${req.url} -> ${req.url}.gz`);

	req.url = `${req.url}.gz`;
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'application/javascript');
	next();
});

app.use(express.static(publicpath));

app.get('*', (req, res) => {
	res.sendFile(path.join(publicpath, 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
	console.log('Server is running on port ' + (process.env.PORT || 5000));
});
