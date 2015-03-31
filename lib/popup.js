function pretty(bytes) {
	var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytes == 0) return '0 Byte';
	var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

	return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}


function init() {
	browser.onMessage(
		function(request, sender, sendResponse) {
			if (request.action == 'initial-popup') {
				$('#session').html(pretty(request.session));
				$('#lifetime').html(pretty(request.lifetime));

				if (request.ignored) {
					$('#ignore').html('Unignore site');
				}
			}
		});

	browser.sendMessage({'action': 'get-initial'});

	$('#ignore').click(function() {
		browser.sendMessage({'action': 'ignore'});

		if ($('#ignore').html() == 'Ignore site') {
			$('#ignore').html('Unignore site');
		} else {
			$('#ignore').html('Ignore site');
		}
	});

	$('#clear').click(function() {
		browser.sendMessage({'action': 'reset-savings'});

		$('#session').html(pretty(0));
		$('#lifetime').html(pretty(0));
	});
}

$(document).ready(function() {
	init();
});