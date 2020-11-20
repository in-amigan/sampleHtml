mzds.controller("ratesController", ratesController);

function ratesController($scope, dailyRatesFactory) {
	dailyRatesFactory.getData().then(function(data) {
		if (data != null) {
			$scope.rowCollection = data;
			$scope.rowCollections = $scope.rowCollection;
		} else {
			console.log("create interest controller else with data null check");
		}
	}, function(data) {
		console.log("error with create interest controller");
		console.log(data);
	});

	$scope.updateRates = function(row){
		dailyRatesFactory.saveData(row).then(function(data) {
			if (data != null && data.code == "success") {
				alert("rates are updated.");
			} else {
				alert(data.msg);
			}
		}, function(data) {
			console.log("error with save data");
			console.log(data);
		});
	};
}