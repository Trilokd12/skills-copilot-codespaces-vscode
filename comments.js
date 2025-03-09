// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var comments = require('./comments');
var querystring = require('querystring');

// 2. Create server
http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);
    var query = querystring.parse(url_parts.query);
    var pathname = url_parts.pathname;
    console.log('pathname: ' + pathname);
    console.log('query: ' + query);
    switch (pathname) {
        case '/':
            display_form(res);
            break;
        case '/comments':
            add_comment(req, res);
            break;
        default:
            display_404(res);
    }
}).listen(8080);

console.log('Server running at http://