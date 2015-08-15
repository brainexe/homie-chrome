
angular.controller('OptionsController', function($scope) {
    chrome.storage.sync.get("host", function(config) {
        $scope.url = config.host;
        $scope.$apply();
    });

    $scope.save = function() {
        chrome.storage.sync.set({host: $scope.url}, function() {
            alert('Saved: ' + host);
        });
    }
});
