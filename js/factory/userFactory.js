mzds.factory('userFactory', function($q, $http, $timeout) {

	var fac = {};

	fac.matchPassword = function(pass, repPass){
		var match = false;
		if(pass!=undefined && pass.length>0 && repPass!=undefined && repPass.length>0 && pass == repPass){
			match = true;
		}
		return match;
	};

	fac.validateUser = function(userName, email, pass, repPass, phone){
		if(userName==undefined || userName.trim()==""){
			return "Full Name cannot be empty";
		}else if(email==undefined || !ValidateEmail(email)){
			return "Invalid Email";
		}else if(pass==undefined || pass.trim()==""){
			return "Password cannot be empty";
		}else if(pass!=repPass){
			return "Password should match with Repeat Password";
		}else if(phone==undefined || phone.trim()==""){
			return "phone cannot be empty";
		}else{
			return "ok";
		}
	};

	fac.validateUserLogin = function(email, pass){
		if(email==undefined || !ValidateEmail(email)){
			return "Invalid Email";
		}else if(pass==undefined || pass.trim()==""){
			return "Password cannot be empty";
		}else{
			return "ok";
		}
	};


	fac.saveUser = function(action, userName, email, pass, phone) {
		var deferred = $q.defer(); 
		var req = {
			method: 'POST',
			url: 'php/user.php',
			headers: {
				'Content-Type': "application/json"
			},
			data: {"action":action,"userfullname":userName, "email":email, "pass":pass, "phone":phone}
		};

		$http(req).success(function(data, status, headers, config) {
			console.log(data.devmsg);
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	fac.loginUser = function(action,email, pass) {
		var deferred = $q.defer(); 
		var req = {
			method: 'POST',
			url: 'php/user.php',
			headers: {
				'Content-Type': "application/json"
			},
			data: {"action":action,"email":email, "pass":pass}
		};

		$http(req).success(function(data, status, headers, config) {
			console.log(data.devmsg);
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};



	return fac;

});


function ValidateEmail(inputText)  
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	return inputText.match(mailformat);
	
}  