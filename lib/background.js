// Copyright (c) 2015 fixanoid.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

// TODO: popup
// TODO: whitelist and disabling

var storage = chrome.storage.local;

// TODO: separate file
// TODO: what about css from shit like bootstrap or jquery ui? Fonts?
// TODO: populate from http://trends.builtwith.com/javascript
var db = [{
		matches: [ 'jquery-2.1.3.min.js', 'jquery-2.1.3.js' ],
		file: 'jquery-2.1.3.min.js',
		size: ''
	}, {
		matches: [ 'jquery-1.11.2.min.js', 'jquery.js?ver=1.11.2' ],
		file: 'jquery-1.11.2.min.js'
	}, {
		matches: [ 'jquery-1.11.1.js', 'jquery-1.11.1.min.js', 'jquery.js?ver=1.11.1' ],
		file: 'jquery-1.11.2.min.js'
	}
];


chrome.browserAction.setBadgeBackgroundColor({ color: [99, 168, 20, 255] });

var matchUrls = [], lookup = {}, cache = {}, sessionSavings = 0;

db.map(function(o) {
	o.matches.forEach(function(v) {
		matchUrls.push('http://*/*' + v);
		matchUrls.push('https://*/*' + v);

		lookup[v] = o.file;
	});
});

chrome.webRequest.onBeforeRequest.addListener(find, { urls: matchUrls }, ['blocking']);
chrome.webNavigation.onCommitted.addListener(function(details) {
	var tab = details.tabId;

	if (tab && tab !== 0 ) {
		chrome.browserAction.setBadgeText({
			text: '0',
			tabId: tab
		});
	}
});

function fetch(url) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send(null);

	// TODO: for popup
	// size of the content
	sessionSavings += (encodeURI(xhr.responseText).split(/%..|./).length - 1);

	return xhr.responseText;
}


function fromCache(key) {
	if (!cache[key]) {
		var local = chrome.extension.getURL('db/' + lookup[key]);
		cache[key] = 'data:application/javascript;base64,' + btoa(fetch(local));
	}

	return cache[key];
}


function find(details) {
	// TODO: this depends on how the matches are entered into the db
	var key = details.url.split('/');
	key = key[key.length - 1];

	console.log('matched ' + key + ' replacing with local copy');


	chrome.browserAction.getBadgeText({ tabId: details.tabId }, function(result) {
		chrome.browserAction.setBadgeText({
			text: '' + (parseInt(result) + 1),
			tabId: details.tabId
		});
	});

	var data = fromCache(key);

	return { redirectUrl: data };
}