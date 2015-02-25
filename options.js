var el = document.getElementById('raspberry.host');
var button = document.getElementById('host_save');

chrome.storage.sync.get("host", function(config) {
    console.log("store", config.host)
    el.value= config.host;
});

function save() {
    console.log(el);
    var host = el.value;
    alert(host);

    chrome.storage.sync.set({'host': host}, function() {
        alert('Settings saved ' + host);
    });
}

button.onclick = save;
