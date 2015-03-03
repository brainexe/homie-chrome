var el     = document.getElementById('raspberry.host');
var button = document.getElementById('host_save');

chrome.storage.sync.get("host", function(config) {
    el.value= config.host;
});

function save() {
    var host = el.value;

    chrome.storage.sync.set({'host': host}, function() {
        alert('Saved: ' + host);
    });
}

button.onclick = save;
