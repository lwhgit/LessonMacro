chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.status == "loading") {
		
		if (tab.url.startsWith("https://mygarim.cafe24.com/sugang/student/consent.php")) {
			chrome.tabs.executeScript(null, {file: "reload.js"}, function() {
				var lastError = chrome.extension.lastError;
				
				if(lastError) {
					alert("WRANING : " + lastError.message);
				}
			});
		} else if (tab.url.startsWith("https://mygarim.cafe24.com/sugang/student/order.php?LB_no=")) {
			chrome.tabs.executeScript(null, {file: "request.js"}, function() {
				var lastError = chrome.extension.lastError;
				
				if(lastError) {
					alert("WRANING : " + lastError.message);
				}
			});
		}
	}
});