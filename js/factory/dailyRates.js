mzds.factory('dailyRatesFactory', function($q, $http, $timeout) {

	var fac = {};

	fac.getData = function() {
		var deferred = $q.defer();
		var url = "php/rates.php"
		$http.get(url).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	fac.saveData = function(row) {
		var deferred = $q.defer();
		var req = {
			method: 'POST',
			url: 'php/rates.php',
			headers: {
				'Content-Type': "application/json"
			},
			data: {"rate_id":row.rate_id, "sell_price":row.sell_price, "purchase_price":row.purchase_price}
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