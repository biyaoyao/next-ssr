// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel

const { createServer } = require('http');
const { parse } = require('url');
const opn = require('opn');
const next = require('next');
const project = require('./build-config/project');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url, true);
		const { pathname, query } = parsedUrl;
		console.log('pathname', pathname);
		// handle(req, res, parsedUrl);
		if (pathname === '/') {
			app.render(req, res, '/projects/' + project.name + '/views', query);
		} else {
			app.render(req, res, '/projects/' + project.name + '/views' + pathname, query);
		}
	}).listen(project.port, (err) => {
		if (err) throw err;
		let uri = 'http://localhost:'+ project.port;
		opn(uri);
	});
});


