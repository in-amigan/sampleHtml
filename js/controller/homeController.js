mzds.controller("ratesController", ratesController);

function ratesController($scope) {
	$scope.rowCollection = [{curType:"webmoney",purchasePrice:"59",sellPrice:"39"}];
	$scope.rowCollections = $scope.rowCollection;
	
}