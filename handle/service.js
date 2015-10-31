
var url=require('url');
var path=require('path');
var fs=require('fs');
var cp = require('child_process');
var mine=require('./mine').types;

function service(req, res){
	var pathuri = url.parse(req.url)
	var pathname = pathuri.pathname;
	var pathref = pathuri.href;
	if (pathname.charAt(pathname.length - 1) == "/") {
    pathname += "index.html";
  }

  if (pathref.split('?')[0] == "/config") {

    var arg = pathuri.query;
    var opt = {};
    var _arg = arg.split('&');
    for (var i = 0; i < _arg.length; i++) {
    	var __arg = _arg[i].split('=');
    	opt[__arg[0]] = __arg[1];
    };

    var sendBack = {};
    
    cp.fork(path.join(__dirname, "spider.js"), { silent: false })
    	.on('message', function(m){
    		sendBack.log = m;
// console.log(m)
    		res.writeHead(200, {
          'Content-Type': 'json'
        });
    		res.write(JSON.stringify(sendBack));
    		res.end();
    	})
    	.send(opt);
  } else {

  	var realPath = path.join(__dirname, "../ui/", pathname);
	  var ext = path.extname(realPath);
	  ext = ext ? ext.slice(1) : 'unknown';
	  
	  fs.exists(realPath, function (exists) {
	      if (!exists) {
	          res.writeHead(404, {
	              'Content-Type': 'text/plain'
	          });

	          res.write("This request URL " + pathname + " was not found on this server.");
	          res.end();
	      } else {
	          fs.readFile(realPath, "binary", function (err, file) {
	              if (err) {
	                  res.writeHead(500, {
	                      'Content-Type': 'text/plain'
	                  });
	                  res.end(err);
	              } else {
	                  var contentType = mine[ext] || "text/plain";
	                  res.writeHead(200, {
	                      'Content-Type': contentType
	                  });
	                  res.write(file, "binary");
	                  res.end();
	              }
	          });
	      }
	  });
  };  
}

module.exports = service;
