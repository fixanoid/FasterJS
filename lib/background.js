// Copyright (c) 2015 fixanoid.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

// Quickster?


// TODO: populate from http://trends.builtwith.com/javascript
// TODO: separate browser specific APIs out: chrome.tabs left, verious returns that are chrome specific at this point


// TODO: dynamically permacache all fonts

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
		} else if (request.action == 'savings-update') {
			// savings calculation
			sessionSavings += request.size;
			lifetimeSavings += request.size;

			browser.storage.set({'lifetime': lifetimeSavings});
		}
	});


var sessionSavings = 0, lifetimeSavings = 0, ignoredSites = [], tabCounts = {};

// TODO: Content security policy prevent data urls

browser.webRequest(findByEndsWith, { urls: database.matchUrlsEndsWith });
browser.webRequest(findByExact, { urls: database.matchUrlsExact });
browser.webRequest(findCDNs, { urls: ['*://ajax.aspnetcdn.com/*', '*://code.jquery.com/*', '*://cdnjs.cloudflare.com/*', '*://ajax.googleapis.com/*'] });
browser.webRequest(findFonts, { urls: [ 'http://*/*.woff*', 'http://*/*.woff2*' ] });


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


function updateBadge(tabId) {
	tabCounts['tab-' + tabId] = tabCounts['tab-' + tabId] + 1

	browser.updateBadge('' + tabCounts['tab-' + tabId], tabId);
}


function doRedirect(from, key, tabId) {
	console.log('[' + from + '] matched ' + key + ' replacing with local copy');

	updateBadge(tabId);

	var cached = database.fromCache(key);

	if (cached) {
		return { redirectUrl: cached };
	} else {
		return {};
	}
}


function findByEndsWith(details) {
	var parsed = new URL(details.url);

	if (ignored(parsed.host)) {
		console.log('[findByEndsWith] ignored site');
		return {};
	}

	var key = details.url.split('/');
	key = key[key.length - 1];

	return doRedirect('findByEndsWith', key, details.tabId);
}


function findByExact(details) {
	var parsed = new URL(details.url);

	if (ignored(parsed.host)) {
		console.log('[findByExact] ignored site');
		return {};
	}

	var key = details.url;

	return doRedirect('findByExact', key, details.tabId);
}

function findCDNs(details) {
	var parsed = new URL(details.url);

	if (ignored(parsed.host)) {
		console.log('[findCDNs] ignored site');
		return {};
	}

	var key = parsed.pathname;

	if (!database.lookup(key)) {
		// missing content, lets add.
		database.add(parsed);
	}

	return doRedirect('findCDNs', key, details.tabId);
}

function findFonts(details) {
	var parsed = new URL(details.url);

	if (ignored(parsed.host)) {
		console.log('[findFonts] ignored site');
		return {};
	}

	var key = parsed.pathname;

	if (!database.lookup(key)) {
		// missing content, lets add.
		database.addFont(parsed);
	}

	return doRedirect('findFonts', key, details.tabId);
}
