mzds.factory('contactFactory', function($q, $http, $timeout) {

	var fac = {};

	fac.validateEmail = function ValidateEmail(inputText)  
	{  
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
		return inputText.match(mailformat);	
	}; 

	fac.saveMessage = function(name, email, phone, message) {
		var deferred = $q.defer(); 
		var req = {
			method: 'POST',
			url: 'php/contacts.php',
			headers: {
				'Content-Type': "application/json"
			},
			data: {"name":name, "email":email, "message":message, "phone":phone}
		};

		$http(req).success(function(data, status, headers, config) {
			console.log(data.devmsg);
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	fac.getData = function() {
		var deferred = $q.defer();
		var url = "php/contacts.php"
		$http.get(url).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};



	return fac;

});

