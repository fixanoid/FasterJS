// Copyright (c) 2015 soft_reseller.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

// TODO: popup
var storage = chrome.storage.local;

// TODO: separate file
var db = [{
		matches: [ 'jquery-2.1.3.min.js' ],
		file: 'jquery-2.1.3.min.js'
	},
	{
		matches: [ 'jquery-1.11.2.min.js', 'jquery.js?ver=1.11.2' ],
		file: 'jquery-1.11.2.min.js'
	},
	{
		matches: [ 'jquery-1.11.1.js', 'jquery-1.11.1.min.js', 'jquery.js?ver=1.11.1' ],
		file: 'jquery-1.11.2.min.js'
	}
];

var matchUrls = [], lookup = {}, cache = {};

db.map(function(o) {
	o.matches.forEach(function(v) {
		matchUrls.push('http://*/*' + v);
		matchUrls.push('https://*/*' + v);

		lookup[v] = o.file;
	});
});

chrome.webRequest.onBeforeRequest.addListener(find, { urls: matchUrls }, ['blocking']);

function fetch(url) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send(null);
	
	return xhr.responseText;
}


function fromCache(key) {
	if (!cache[key]) {
		var local = chrome.extension.getURL('db/' + lookup[key]);
		cache[key] = fetch(local);
	}

	return cache[key];
}


function find(details) {
	var key = details.url.split('/');
	key = key[key.length - 1];

	console.log('matched ' + key + ' replacing with local copy');

	var data = 'data:application/javascript;base64,' + btoa(fromCache(key));

	return { redirectUrl: data };
}