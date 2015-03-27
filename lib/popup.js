
function init() {
	chrome.runtime.sendMessage(chrome.runtime.id, {'action': 'get-profiles'}, null, function(response) {
		for (var p in response) {
			$('#identities').append( '<li><i class="fa fa-male"></i> <a href="#" id="p-' + response[p].name + '">' + response[p].name + '</a> <a class="link-icon" href="#" id="e-' + response[p].name + '"><i class="fa fa-edit"></i></a><a class="link-icon" href="#" id="r-' + response[p].name + '"><i class="fa fa-trash-o"></i></a> </li>' );

			$('#p-' + response[p].name).click(function(e) {
				chrome.runtime.sendMessage(chrome.runtime.id, {'action': 'load-profile', 'profileName': e.target.innerHTML});

				window.close();
			});

			$('#r-' + response[p].name).click(function(e) {
				chrome.runtime.sendMessage(chrome.runtime.id, {'action': 'remove-profile', 'profileName': e.currentTarget.id.substring(2)});

				window.close();
			});
		}
	});

	$('#add-new').click(function() {
		chrome.runtime.sendMessage(chrome.runtime.id, {'action': 'new-identity'});

		window.close();
	});

	$('#clear').click(function() {
		chrome.runtime.sendMessage(chrome.runtime.id, {'action': 'clear-identity'});

		window.close();
	});
}

$(document).ready(function() {
	init();
});