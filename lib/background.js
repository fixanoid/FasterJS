// Copyright (c) 2015 fixanoid.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

// Quickster?


// TODO: what about css from shit like bootstrap or jquery ui? Fonts?
// TODO: populate from http://trends.builtwith.com/javascript
// TODO: separate browser specific APIs out: chrome.tabs left

// TODO: carrying all stuff is unfeasible. Should fetch once and save for local usage. Do replace common matches tho
//  	1. For CDNs:
//			- check cache and serve from it if file has been retrieved before
//			- otherwise, get the file, and save in the dynamic db storage
//		2. For non-cdns
//			- match on name and try to replace with latest version from local

// TODO: separate db initialization
var db = [{
		matchType: 'end-match',
		matches: [ 'angular-1.2.23.min.js' ],
		file: 'angular-1.2.23.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'angular-1.3.10.min.js' ],
		file: 'angular-1.3.10.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'angular-animate-1.3.10.min.js' ],
		file: 'angular-animate-1.3.10.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'angular-resource-1.2.20.min.js' ],
		file: 'angular-resource-1.2.20.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'angular-route-1.2.20.min.js' ],
		file: 'angular-route-1.2.20.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'angular-sanitize-1.3.10.min.js' ],
		file: 'angular-sanitize-1.3.10.min.js'
	},

	

	{
		matchType: 'end-match',
		matches: [ 'backbone-1.0.0.min.js' ],
		file: 'backbone-1.0.0.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'backbone.min.js', 'backbone-1.1.2.min.js' ],
		file: 'backbone-1.1.2.min.js'
	},



	{
		matchType: 'end-match',
		matches: [ 'bootstrap.js', 'bootstrap.min.js' ],
		file: 'bootstrap-3.3.4.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'bootstrap.css', 'bootstrap.min.css' ],
		contentType: 'text/css',
		file: 'bootstrap-3.3.4.min.css'
	},


	
	{
		matchType: 'end-match',
		matches: [ 'highlight-8.4.min.js' ],
		file: 'highlight-8.4.min.js'
	}, 



	{
		matchType: 'end-match',
		matches: [ 'hogan.min.amd-3.0.0.min.js' ],
		file: 'hogan.min.amd-3.0.0.min.js'
	},



	{
		matchType: 'end-match',
		matches: [ 'jquery-1.2.6.js', 'jquery-1.2.6.min.js', 'jquery.js?ver=1.2.6', 'jquery.min.js?ver=1.2.6' ],
		file: 'jquery-1.2.6.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.3.2.js', 'jquery-1.3.2.min.js', 'jquery.js?ver=1.3.2', 'jquery.min.js?ver=1.3.2' ],
		file: 'jquery-1.3.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.4.2.js','jquery-1.4.2.min.js', 'jquery.js?ver=1.4.2', 'jquery.min.js?ver=1.4.2' ],
		file: 'jquery-1.4.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.4.3.js','jquery-1.4.3.min.js', 'jquery.js?ver=1.4.3', 'jquery.min.js?ver=1.4.3' ],
		file: 'jquery-1.4.3.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.5.2.js','jquery-1.5.2.min.js', 'jquery.js?ver=1.5.2', 'jquery.min.js?ver=1.5.2' ],
		file: 'jquery-1.5.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.6.2.js', 'jquery-1.6.2.min.js', 'jquery.js?ver=1.6.2', 'jquery.min.js?ver=1.6.2' ],
		file: 'jquery-1.6.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.6.1.js', 'jquery-1.6.1.min.js', 'jquery.js?ver=1.6.1', 'jquery.min.js?ver=1.6.1' ],
		file: 'jquery-1.6.1.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.7.js', 'jquery-1.7.min.js', 'jquery.js?ver=1.7', 'jquery.min.js?ver=1.7' ],
		file: 'jquery-1.7.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.7.1.js', 'jquery-1.7.1.min.js', 'jquery.js?ver=1.7.1', 'jquery.min.js?ver=1.7.1' ],
		file: 'jquery-1.7.1.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.7.2.js', 'jquery-1.7.2.min.js', 'jquery.js?ver=1.7.2', 'jquery.min.js?ver=1.7.2' ],
		file: 'jquery-1.7.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.8.3.js', 'jquery-1.8.3.min.js', 'jquery.js?ver=1.8.3', 'jquery.min.js?ver=1.8.3' ],
		file: 'jquery-1.8.3.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.9.1.js', 'jquery-1.9.1.min.js', 'jquery.js?ver=1.9.1', 'jquery.min.js?ver=1.9.1' ],
		file: 'jquery-1.9.1.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.10.2.js', 'jquery-1.10.2.min.js', 'jquery.js?ver=1.10.2', 'jquery.min.js?ver=1.10.2' ],
		file: 'jquery-1.10.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.11.0.js', 'jquery-1.11.0.min.js', 'jquery.js?ver=1.11.0', 'jquery.min.js?ver=1.11.0' ],
		file: 'jquery-1.11.0.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.11.1.js', 'jquery-1.11.1.min.js', 'jquery.js?ver=1.11.1', 'jquery.min.js?ver=1.11.1' ],
		file: 'jquery-1.11.1.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.11.2.js', 'jquery-1.11.2.min.js', 'jquery.js?ver=1.11.2', 'jquery.min.js?ver=1.11.2' ],
		file: 'jquery-1.11.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-2.0.3.js', 'jquery-2.0.3.min.js', 'jquery.js?ver=2.0.3', 'jquery.min.js?ver=2.0.3' ],
		file: 'jquery-2.0.3.min.js',
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-2.1.1.js', 'jquery-2.1.1.min.js', 'jquery.js?ver=2.1.1', 'jquery.min.js?ver=2.1.1' ],
		file: 'jquery-2.1.1.min.js',
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-2.1.3.js', 'jquery-2.1.3.min.js', 'jquery.js?ver=2.1.3', 'jquery.min.js?ver=2.1.3' ],
		file: 'jquery-2.1.3.min.js',
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-migrate.min.js?ver=1.2.1', 'jquery-migrate.min.js' ],
		file: 'jquery-migrate-1.2.1.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-ui-1.10.3.js', 'jquery-ui-1.10.3.min.js' ],
		file: 'jquery-ui-1.10.3.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-ui-1.11.4.js', 'jquery-ui-1.11.4.min.js' ],
		file: 'jquery-ui-1.11.4.min.js'
	},



	{
		matchType: 'end-match',
		matches: [ 'prototype-1.7.1.0.min.js' ],
		file: 'prototype-1.7.1.0.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'prototype-1.7.2.0.min.js' ],
		file: 'prototype-1.7.2.0.min.js'
	}, 



	{
		matchType: 'end-match',
		matches: [ 'require-2.1.11.min.js' ],
		file: 'require-2.1.11.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'require-2.1.14.min.js' ],
		file: 'require-2.1.14.min.js'
	}, 



	{
		matchType: 'end-match',
		matches: [ 'swfobject-2.1.min.js' ],
		file: 'swfobject-2.1.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'swfobject-2.2.min.js' ],
		file: 'swfobject-2.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'underscore-1.5.2.min.js' ],
		file: 'underscore-1.5.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'underscore-1.6.0.min.js' ],
		file: 'underscore-1.6.0.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'underscore.js', 'underscore.min.js', 'underscore-1.8.2.min.js' ],
		file: 'underscore-1.8.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'webfont-1.min.js' ],
		file: 'webfont-1.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'webfont-1.4.7.min.js' ],
		file: 'webfont-1.4.7.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'ZeroClipboard-1.3.2.min.js' ],
		file: 'ZeroClipboard-1.3.2.min.js'
	},



	{
		matchType: 'exact',
		matches: [ 'https://www.google-analytics.com/analytics.js', 'http://www.google-analytics.com/analytics.js' ],
		file: 'google-analytics.com.analytics.js'
	}, {
		matchType: 'exact',
		matches: [ 'https://ssl.google-analytics.com/ga.js', 'https://www.google-analytics.com/ga.js', 'http://www.google-analytics.com/ga.js' ],
		file: 'google-analytics.com.ga.js'
	}, 



	{
		matchType: 'exact',
		matches: [ 'https://s.ytimg.com/yts/jsbin/html5player-en_US-vflFAPa9H/html5player.js' ],
		file: 'ytimg.com.html5player.js'
	}, {
		matchType: 'exact',
		matches: [ 'https://s.ytimg.com/yts/jsbin/www-embed-player-vfl6Pxzzi/www-embed-player.js' ],
		file: 'ytimg.com.www-embed-player.js'
	}
];


browser.initBadge({ resetTabCount: function(details) {
		var tab = details.tabId;

		if (tab && tab !== 0 && (details.frameId <= 0) ) {
			tabCounts['tab-' + tab] = 0;

			browser.updateBadge('0', tab);
		}
	}
});


browser.onMessage(
	function(request, sender, sendResponse) {
		if (request.action == 'get-initial') {
			chrome.tabs.query({
				active: true,
				windowId: chrome.windows.WINDOW_ID_CURRENT
			}, function (tabs) {
				var tab = tabs[0],
				 parsed = new URL(tab.url),
				 host = parsed.host;

				browser.sendMessage({ 'action': 'initial-popup', 'session': sessionSavings, 'lifetime': lifetimeSavings, 'ignored': ignored(host) });
			});
			

		} else if (request.action == 'ignore') {
			chrome.tabs.query({
				active: true,
				windowId: chrome.windows.WINDOW_ID_CURRENT
			}, function (tabs) {
				var tab = tabs[0], 
				 parsed = new URL(tab.url),
				 host = parsed.host,
				 url = ignored(host);

				if (url) {
					ignoredSites.splice(ignoredSites.indexOf(url), 1);
				} else if (host) {
					ignoredSites.push(host);
				}

				browser.storage.set({'ignoredSites': ignoredSites});
			});
		} else if (request.action == 'reset-savings') {
			sessionSavings = 0;
			lifetimeSavings = 0;

			browser.storage.set({'lifetime': lifetimeSavings});
		}
	});


var matchUrlsEndsWith = [], matchUrlsExact = [], lookup = {}, cache = {}, sessionSavings = 0, lifetimeSavings = 0, ignoredSites = [], tabCounts = {};

db.map(function(o) {
	o.matches.forEach(function(v) {
		if (o.matchType === 'end-match') {
			matchUrlsEndsWith.push('http://*/*' + v);
			matchUrlsEndsWith.push('https://*/*' + v);
		} else if (o.matchType === 'exact') {
			matchUrlsExact.push(v);
		}

		lookup[v] = { 
			file: o.file,
			contentType: o.contentType || 'application/javascript'
		};
	});
});

browser.webRequest(findByEndsWith, { urls: matchUrlsEndsWith });
browser.webRequest(findByExact, { urls: matchUrlsExact });
browser.webRequest(findCDNs, { urls: ['*://ajax.aspnetcdn.com/*', '*://code.jquery.com/*', '*://cdnjs.cloudflare.com/*', '*://ajax.googleapis.com/*'] });


// load lifetime savings
browser.storage.get('lifetime', function(o) {
	lifetimeSavings = parseInt(o.lifetime) || 0;
});

// load ignoredSites savings
browser.storage.get('ignoredSites', function(o) {
	ignoredSites = o.ignoredSites || [];
});


function ignored(url) {
	var i, size = ignoredSites.length;

	for (i = 0; i < size; i++) {
		if (ignoredSites[i].startsWith(url)) {
			return true;
		}
	}

	return false;
}


function fetch(url) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send(null);

	return [xhr.responseText, (encodeURI(xhr.responseText).split(/%..|./).length - 1)];
}


function fromCache(key) {
	if (!cache[key]) {
		var local = browser.getLocalFile('db/' + lookup[key].file);

		local = fetch(local);
		cache[key] = {};
		cache[key].js = 'data:' + lookup[key].contentType + ';base64,' + btoa(local[0]);
		cache[key].size = local[1];
	}

	// savings calculation
	sessionSavings += cache[key].size;
	lifetimeSavings += cache[key].size;

	browser.storage.set({'lifetime': lifetimeSavings});

	return cache[key].js;
}


function updateBadge(tabId) {
	tabCounts['tab-' + tabId] = tabCounts['tab-' + tabId] + 1

	browser.updateBadge('' + tabCounts['tab-' + tabId], tabId);
}


function findByEndsWith(details) {
	var parsed = new URL(details.url);

	if (ignored(parsed.host)) {
		console.log('[find] ignored site');
		return {};
	}

	var key = details.url.split('/');
	key = key[key.length - 1];

	console.log('[find] matched ' + key + ' replacing with local copy');

	updateBadge(details.tabId);

	return { redirectUrl: fromCache(key) };
}


function findByExact(details) {
	var parsed = new URL(details.url);

	if (ignored(parsed.host)) {
		console.log('[find] ignored site');
		return {};
	}

	var key = details.url;

	console.log('[find] matched ' + key + ' replacing with local copy');

	updateBadge(details.tabId);

	return { redirectUrl: fromCache(key) };
}

function findCDNs(details) {
	var parsed = new URL(details.url);

	if (ignored(parsed.host)) {
		console.log('[find] ignored site');
		return {};
	}

	var key, lib = parsed.pathname.split('/');

	if ( lib[lib.length -1 ].endsWith('.min.js') ) {
		key = lib[lib.length - 1].replace('.min.js', '-' + lib[lib.length - 2] + '.min.js');
	} else if ( lib[lib.length -1 ].endsWith('.js') ) {
		key = lib[lib.length - 1].replace('.js', '-' + lib[lib.length - 2] + '.min.js');
	}

	if (lookup[key]) {
		console.log('[find] matched ' + key + ' replacing with local copy');
		updateBadge(details.tabId);

		return { redirectUrl: fromCache(key) };
	} else if (!lookup[key]) {
		console.log('[MISSING LIB] ' + details.url);
	}

	return {};
}