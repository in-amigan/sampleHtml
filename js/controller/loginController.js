mzds.controller("loginController", loginController);

function loginController($scope, $http, userFactory, $location, $window) {
	$scope.loginShow = true;
	$scope.signupShow = false;
	$scope.errorMessage = "";
	$scope.signup = function(){
		$scope.loginShow = false;
		$scope.signupShow = true;
		clearSignUpFields($scope);
	};
	$scope.loginFormShow = function(){
		$scope.loginShow = true;
		$scope.signupShow = false;
	};
	$scope.saveUser = function(){
		saveUserData($scope, userFactory);
	};
	$scope.login = function(){
		loginUser($scope, userFactory, $location, $window);
	};
}


function saveUserData($scope, userFactory){
	//alert($scope.signFullName+"--"+$scope.signEmail+"--"+$scope.signPassword+"--"+$scope.signRepPassword+"--"+$scope.signPhone+"--");
	$scope.errorMessage = "";
	var valid = userFactory.validateUser($scope.signFullName,$scope.signEmail,$scope.signPassword,$scope.signRepPassword,$scope.signPhone);
	if(valid!=undefined && valid == "ok"){
		userFactory.saveUser("saveUser",$scope.signFullName, $scope.signEmail, $scope.signPassword, $scope.signPhone).then(function(data) {
			if (data != null && data.code == "success") {
				alert("user has been created. Now you can login with your credentials.");
				$scope.loginFormShow();
				$scope.loginEmail = $scope.signEmail;
			} else {
				alert(data.msg);
			}
		}, function(data) {
			console.log("error with create interest controller");
			console.log(data);
		});
	}else{
		$scope.errorMessage = valid;
	}
}

function loginUser($scope, userFactory, $location, $window){
	$scope.errorMessage = "";
	var valid = userFactory.validateUserLogin($scope.loginEmail,$scope.loginPassword);
	if(valid!=undefined && valid == "ok"){
		userFactory.loginUser("loginUser",$scope.loginEmail, $scope.loginPassword).then(function(data) {
			if (data != undefined && data.code == "success") {
				if(data.devmsg!=undefined && data.devmsg.user_type == 1){
					$window.sessionStorage.setItem("user_email",$scope.loginEmail);
					$window.sessionStorage.setItem("user_type",$scope.loginEmail);
				}else{
					$window.sessionStorage.setItem("user_type",$scope.loginEmail);
				}
				$location.path( "/" );
			} else {
				alert(data.msg);
			}
		}, function(data) {
			console.log("error with create interest controller");
			console.log(data);
		});
	}else{
		$scope.errorMessage = valid;
	}
}


function clearSignUpFields($scope){
	$scope.signFullName="";
	$scope.signEmail="";
	$scope.signPassword="";
	$scope.signRepPassword="";
	$scope.signPhone = "";
}