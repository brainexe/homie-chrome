var el     = document.getElementById('homie.host');
var button = document.getElementById('host_save');

chrome.storage.sync.get("host", function(config) {
    el.value= config.host;
});

// todo use angularjs
function save() {
    var host = el.value;

    chrome.storage.sync.set({'host': host}, function() {
        alert('Saved: ' + host);
    });
}

button.onclick = save;
