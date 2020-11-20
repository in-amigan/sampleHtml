mzds.factory('feedFactory', function($q, $http, $timeout) {

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

	fac.saveFeed = function(action, name, message, idf) {
		var deferred = $q.defer(); 
		if(action!=undefined && action == "saveFeedback"){
			var req = {
				method: 'POST',
				url: 'php/feedback.php',
				headers: {
					'Content-Type': "application/json"
				},
				data: {"action":action, "name":name, "message":message}
			};

			$http(req).success(function(data, status, headers, config) {
				console.log(data.devmsg);
				deferred.resolve(data);
			}).error(function(data, status, headers, config) {
				deferred.reject(status);
			});
		}else if(action!=undefined && action == "updatefeed"){
			var req = {
				method: 'POST',
				url: 'php/feedback.php',
				headers: {
					'Content-Type': "application/json"
				},
				data: {"action":action, "name":name, "message":message, "idf":idf}
			};

			$http(req).success(function(data, status, headers, config) {
				console.log(data.devmsg);
				deferred.resolve(data);
			}).error(function(data, status, headers, config) {
				deferred.reject(status);
			});
		}else if(action!=undefined && action == "deleteFeed"){
			var req = {
				method: 'POST',
				url: 'php/feedback.php',
				headers: {
					'Content-Type': "application/json"
				},
				data: {"action":action, "idf":idf}
			};

			$http(req).success(function(data, status, headers, config) {
				console.log(data.devmsg);
				deferred.resolve(data);
			}).error(function(data, status, headers, config) {
				deferred.reject(status);
			});
		}else{
			deferred.reject("failed to save feed.");
		}
		return deferred.promise;
	};

	fac.getFeeds = function(action) {
		var deferred = $q.defer();
		var url = "php/feedback.php?q="+action
		$http.get(url).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};



	return fac;

});

