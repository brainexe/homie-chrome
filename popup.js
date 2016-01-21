
function domLoaded() {
    var iframe = document.getElementById('homie_iframe');
    chrome.storage.sync.get("host", function(config) {
        chrome.storage.sync.get("token", function(token) {
            debugger;

            var url = config.host;
            if (token.token) {
                url += '/login/token/' + token.token;
            }
            iframe.src = url;
        });
    });
}

document.addEventListener('DOMContentLoaded', domLoaded);
