mzds.factory('userFactory', function($q, $http, $timeout) {

	var fac = {};

	fac.matchPassword = function(pass, repPass){
		var match = false;
		if(pass!=undefined && pass.length>0 && repPass!=undefined && repPass.length>0 && pass == repPass){
			match = true;
		}
		return match;
	};
	fac.getData = function() {
		var deferred = $q.defer();
		var url = "php/data.php"
		$http.get(url).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	 

	return fac;

});