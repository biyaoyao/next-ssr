echo "module.exports  = {name:'$1',port:${2:-3000}}" > './build-config/project.js'
NODE_ENV=production node server.js
