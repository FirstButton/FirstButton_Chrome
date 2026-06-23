// © 2010-2014 Copyright Liquidity Lighthouse, LLC.  All Rights Reserved.
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.getAllInWindow(null, function (tabs) {
        var isTabPresent = false;
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].url.split("https://example.com").length == 2) {
                isTabPresent = true;
                chrome.tabs.update(tabs[i].id, {
                    selected: true
                }, function () {})
            }
        }
        if (!isTabPresent) chrome.tabs.create({
            'url': 'https://example.com',
            'selected': true
        }, function () {})
    })
});