
function domLoaded() {
    var iframe = document.getElementById('raspberry_iframe');
    chrome.storage.sync.get("host", function(config) {
        iframe.src = config.host;
    });
}

document.addEventListener('DOMContentLoaded', domLoaded);
