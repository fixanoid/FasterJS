
var database = (function() {
	var db = [{
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
			matches: [ 'prototype.js', 'prototype.min.js', 'prototype-1.7.2.0.min.js' ],
			file: 'prototype-1.7.2.0.min.js'
		},



		{
			matchType: 'end-match',
			matches: [ 'require.js', 'require.min.js', 'require-2.1.17.min.js' ],
			file: 'require-2.1.17.min.js'
		},



		{
			matchType: 'end-match',
			matches: [ 'swfobject.js', 'swfobject.min.js', 'swfobject-2.2.min.js' ],
			file: 'swfobject-2.2.min.js'
		},



		{
			matchType: 'end-match',
			matches: [ 'underscore.js', 'underscore.min.js', 'underscore-1.8.2.min.js' ],
			file: 'underscore-1.8.2.min.js'
		},



		{
			matchType: 'end-match',
			matches: [ 'webfont.js', 'webfont.min.js', 'webfont-1.5.10.min.js' ],
			file: 'webfont-1.5.10.min.js'
		},


		/* exact matches */


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

	var map = {}, cache = {}, additional = [], matchUrlsEndsWith = [], matchUrlsExact = [];

	// initialize defined database
	db.map(function(o) {
		o.matches.forEach(function(v) {
			if (o.matchType === 'end-match') {
				matchUrlsEndsWith.push('http://*/*' + v);
				matchUrlsEndsWith.push('https://*/*' + v);
			} else if (o.matchType === 'exact') {
				matchUrlsExact.push(v);
			}

			map[v] = {
				file: o.file,
				contentType: o.contentType || 'application/javascript'
			};
		});
	});

	// initialize additional database
	browser.storage.get('additional', function(o) {
		additional = o.additional;

		if (!additional) {
			additional = [];
		}
	});

	additional.map(function(o) {
		o.matches.forEach(function(v) {
			map[v] = {
				size: o.size,
				contentType: o.contentType
			};
		});
	});



	function fetch(url) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send(null);

		return { payload: xhr.responseText, size: (encodeURI(xhr.responseText).split(/%..|./).length - 1), contentType: xhr.getResponseHeader('content-type') };
	}


	function lookup(key) {
		return map[key] || false;
	}


	function add(parsedUrl) {
		var lib = fetch(parsedUrl.href), entry = {}, key;

		// update additionally fetched database entries
		entry.matchType = 'CDN';
		entry.matches = [ parsedUrl.pathname ];
		entry.size = lib.size;
		entry.contentType = lib.contentType;

		//additional.push(entry);

		// save additional database
		//browser.storage.set({'additional': additional});

		// save the payload separately
		// TODO: why do u not work?!?
		key = 'CDN-' + parsedUrl.pathname;
		browser.storage.set({ key: lib.payload }, function() { console.log('[add] saved payload for ' + key); });

		// add into map
		map[parsedUrl.pathname] = {
			size: entry.size,
			contentType: entry.contentType
		};
	}


	function fromCache(key) {
		var local;

		if (!cache[key]) {  // check if in cache

			if (map[key].file) {  // check if its a local file
				local = browser.getLocalFile('db/' + map[key].file);

				local = fetch(local);

				cache[key] = {};
				cache[key].payload = 'data:' + map[key].contentType + ';base64,' + btoa(local.payload);
				cache[key].size = local.size;

			} else {  // not a local file, get from storage
				browser.storage.get('CDN-' + key, function(o) {
					local = o['CDN-' + key];
				});

				cache[key] = {};
				cache[key].payload = 'data:' + map[key].contentType + ';base64,' + btoa(local);
				cache[key].size = map[key].size;
			}
		}

		// send savings update
		browser.sendMessage({ 'action': 'savings-update', 'size': cache[key].size });

		return cache[key].payload;
	}

	var API = {
		add: add,
		lookup: lookup,
		fromCache: fromCache,

		matchUrlsEndsWith: matchUrlsEndsWith,
		matchUrlsExact: matchUrlsExact
	};

	return API;
})();
