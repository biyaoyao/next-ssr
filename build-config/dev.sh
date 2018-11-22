echo "module.exports  = {name:'$1',port:${2:-3000}}" > './build-config/project.js'
node  server.js
