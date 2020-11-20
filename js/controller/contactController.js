mzds.controller("contactControl", contactController);

function contactController($scope, contactFactory) {

	contactFactory.getData().then(function(data) {
		if (data != null) {
			$scope.rowCollection = data;
			$scope.rowCollections = $scope.rowCollection;
		} else {
			console.log("Error in retrieving records");
		}
	}, function(data) {
		console.log("Error in retrieving records");
		console.log(data);
	});

	$scope.contactus = function(){
		contactUsClick($scope, contactFactory);
	};
}

function contactUsClick($scope, contactFactory){
	if($scope.namef!=undefined && $scope.phonef!=undefined && $scope.messagef!=undefined && $scope.emailf!=undefined && contactFactory.validateEmail($scope.emailf)){
		//alert($scope.namef+"--"+$scope.emailf+"--"+$scope.phonef+"--"+$scope.messagef);
		contactFactory.saveMessage($scope.namef, $scope.emailf, $scope.phonef, $scope.messagef).then(function(data) {
			if (data != null && data.code == "success") {
				alert("Message has been sent.");
				$scope.namef = "";
				$scope.phonef = "";
				$scope.messagef = "";
				$scope.emailf = "";
			} else {
				alert(data.msg);
			}
		}, function(data) {
			console.log("error with create interest controller");
			console.log(data);
		});
	}
}