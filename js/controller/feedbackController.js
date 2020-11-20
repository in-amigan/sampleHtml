mzds.controller("feedbackController", feedbackController);
mzds.controller("feedbackAdminController", feedbackAdminController);

function feedbackController($scope, feedFactory) {

	feedFactory.getFeeds(1).then(function(data) {
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

	$scope.sendFeedback = function(){sendFeedbackClick($scope, feedFactory)};
}

function sendFeedbackClick($scope, feedFactory){
	if($scope.namef!=undefined && $scope.messagef!=undefined){
		feedFactory.saveFeed("saveFeedback",$scope.namef, $scope.messagef).then(function(data) {
			if (data != null && data.code == "success") {
				alert("Feedback sent");
				$scope.namef = "";
				$scope.messagef = "";
			} else {
				alert(data.msg);
			}
		}, function(data) {
			console.log("error with create interest controller");
			console.log(data);
		});
	}
}


function feedbackAdminController($scope, feedFactory) {

	$scope.getFeedsData = function(){
		feedFactory.getFeeds(2).then(function(data) {
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
	};
	$scope.getFeedsData();

	$scope.deleteFeedback = function(row){
		deleteFeedbackClick($scope, feedFactory, row);
	};
	$scope.editFeedback = function(row){
		$scope.namef = row.feed_name;
		$scope.messagef = row.feedback;
		$scope.idf = row.feed_id;
	};

	$scope.sendFeedback = function(){
		sendFeedbackAdminClick($scope, feedFactory);
	};

}

function sendFeedbackAdminClick($scope, feedFactory){
	if($scope.namef!=undefined && $scope.messagef!=undefined && $scope.idf!=undefined){
		feedFactory.saveFeed("updatefeed",$scope.namef, $scope.messagef, $scope.idf).then(function(data) {
			if (data != null && data.code == "success") {
				alert("Feedback updated");
				$scope.namef = "";
				$scope.messagef = "";
				$scope.getFeedsData();
			} else {
				alert(data.msg);
			}
		}, function(data) {
			console.log("error with create interest controller");
			console.log(data);
		});
	}
}

function deleteFeedbackClick($scope, feedFactory, row){
	if(row!=undefined && row.feed_id!=undefined){
		feedFactory.saveFeed("deleteFeed","", "", row.feed_id).then(function(data) {
			if (data != null && data.code == "success") {
				alert("Feedback deleted");
				$scope.namef = "";
				$scope.messagef = "";
				$scope.getFeedsData();
			} else {
				alert(data.msg);
			}
		}, function(data) {
			console.log("error with create interest controller");
			console.log(data);
		});
	}
}

