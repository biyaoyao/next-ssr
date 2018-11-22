const withLess = require('@zeit/next-less')
 const withCSS = require('@zeit/next-css')
const project = require('./build-config/project');
const path = require('path');
const loadersConfig = require('./build-config/loaders/index');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

let  less = withLess({
	cssModules: true,
	distDir: 'build/'+project.name,
	webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
		
		let rules = config.module.rules;
		rules = rules.concat(loadersConfig)
		config.module.rules = rules;
		config.resolve.extensions.push('.json');
		return config
	  },
	
})
less.cssModules = false;
module.exports = withCSS(less);

