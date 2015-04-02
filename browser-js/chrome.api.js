// Copyright (c) 2015 fixanoid.
// Use of this source code is governed by a license that can be
// found in the LICENSE file.

// Chrome browser API shim

var browser = {
	initBadge: function(opts) {
		chrome.browserAction.setBadgeBackgroundColor({ color: [99, 168, 20, 255] });

		chrome.webNavigation.onBeforeNavigate.addListener(opts.resetTabCount);

	},

	updateBadge: function(num, tabId) {
		chrome.browserAction.setBadgeText({
			text: num,
			tabId: tabId
		});
	},

	onMessage: function(handler) {
		chrome.runtime.onMessage.addListener(handler);
	},

	sendMessage: function(message) {
		chrome.runtime.sendMessage(chrome.runtime.id, message);
	},

	webRequest: function(handler, urls) {
		chrome.webRequest.onBeforeRequest.addListener(handler, urls, ['blocking']);
	},

	getLocalFile: function(file) {
		return chrome.extension.getURL(file);
	},

	storage: chrome.storage.local,
	localStorage: window.localStorage
}
