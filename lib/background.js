// Copyright (c) 2015 fixanoid.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

// Quickster?

var storage = chrome.storage.local;

// TODO: separate file
// TODO: what about css from shit like bootstrap or jquery ui? Fonts?
// TODO: populate from http://trends.builtwith.com/javascript
var db = [{
		matchType: 'end-match',
		matches: [ 'jquery-2.1.3.min.js', 'jquery-2.1.3.js' ],
		file: 'jquery-2.1.3.min.js',
		size: ''
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.11.2.min.js', 'jquery.js?ver=1.11.2' ],
		file: 'jquery-1.11.2.min.js'
	}, {
		matchType: 'end-match',
		matches: [ 'jquery-1.11.1.js', 'jquery-1.11.1.min.js', 'jquery.js?ver=1.11.1' ],
		file: 'jquery-1.11.2.min.js'
	}, {
		matchType: 'exact',
		matches: [ 'https://www.google-analytics.com/analytics.js', 'http://www.google-analytics.com/analytics.js' ],
		file: 'google-analytics.com.analytics.js'
	}
];


chrome.browserAction.setBadgeBackgroundColor({ color: [99, 168, 20, 255] });

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.action == 'get-initial') {
			chrome.tabs.query({
				active: true,
				windowId: chrome.windows.WINDOW_ID_CURRENT
			}, function (tabs) {
				var tab = tabs[0],
				 parsed = new URL(tab.url),
				 host = parsed.host;

				chrome.runtime.sendMessage(chrome.runtime.id, { 'action': 'initial-popup', 'session': sessionSavings, 'lifetime': lifetimeSavings, 'ignored': ignored(host) });
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

				storage.set({'ignoredSites': ignoredSites});
			});
		} else if (request.action == 'reset-savings') {
			sessionSavings = 0;
			lifetimeSavings = 0;

			storage.set({'lifetime': lifetimeSavings});
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

		lookup[v] = o.file;
	});
});

chrome.webRequest.onBeforeRequest.addListener(findByEndsWith, { urls: matchUrlsEndsWith }, ['blocking']);
chrome.webRequest.onBeforeRequest.addListener(findByExact, { urls: matchUrlsExact }, ['blocking']);

chrome.webNavigation.onCommitted.addListener(function(details) {
	var tab = details.tabId;

	if (tab && tab !== 0 ) {
		tabCounts['tab-' + tab] = 0;

		chrome.browserAction.setBadgeText({
			text: '0',
			tabId: tab
		});
	}
});


// load lifetime savings
storage.get('lifetime', function(o) {
	lifetimeSavings = parseInt(o.lifetime) || 0;
});

// load ignoredSites savings
storage.get('ignoredSites', function(o) {
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
		var local = chrome.extension.getURL('db/' + lookup[key]);
		local = fetch(local);
		cache[key] = {};
		cache[key].js = 'data:application/javascript;base64,' + btoa(local[0]);
		cache[key].size = local[1];
	}

	// savings calculation
	sessionSavings += cache[key].size;
	lifetimeSavings += cache[key].size;

	storage.set({'lifetime': lifetimeSavings});

	return cache[key].js;
}


function updateBadge(tabId) {
	chrome.browserAction.getBadgeText({ tabId: tabId }, function(result) {
		tabCounts['tab-' + tabId] = tabCounts['tab-' + tabId] + 1;

		chrome.browserAction.setBadgeText({
			text: '' + tabCounts['tab-' + tabId],
			tabId: tabId
		});
	});
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