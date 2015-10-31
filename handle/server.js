
var http = require('http');
var service = require('./service');

http.createServer(service).listen(8753);
console.log('[Success] 本地服务器启动成功，占用端口:8753')
