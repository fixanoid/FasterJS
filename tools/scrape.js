var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};


var db = {};
var lib = 'webfont-VERSION.min.js';
var base = 'https://ajax.googleapis.com/ajax/libs/webfont/VERSION/webfont.js';
var versions = '1.5.10, 1.5.6, 1.5.3, 1.5.2, 1.5.0, 1.4.10, 1.4.8, 1.4.7, 1.4.6, 1.4.2, 1.3.0, 1.1.2, 1.1.1, 1.1.0, 1.0.31, 1.0.30, 1.0.29, 1.0.28, 1.0.27, 1.0.26, 1.0.25, 1.0.24, 1.0.23, 1.0.22, 1.0.21, 1.0.19, 1.0.18, 1.0.17, 1.0.16, 1.0.15, 1.0.14, 1.0.13, 1.0.12, 1.0.11, 1.0.10, 1.0.9, 1.0.6, 1.0.5, 1.0.4, 1.0.3, 1.0.2, 1.0.1, 1.0.0'.split(', ');


versions.forEach(function(ver) {
	var uri = base.replace('VERSION', ver);
	var local = lib.replace('VERSION', ver);
	download(uri, local, function() {
		console.log('done');
	});
});