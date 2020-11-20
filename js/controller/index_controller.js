var mzds = angular.module("mzds", ['ngRoute', 'ngCookies', 'ui.bootstrap','smart-table']);
// Controller indexing
mzds.controller("homeController", homeController);
mzds.controller("headerCtrl", headerCtrl);
mzds.controller("navController", navController);
mzds.controller("termsAndFaqsController", termsAndFaqsController);


mzds.config(function($routeProvider, $locationProvider) {
  var homepageHtmlURL = 'html/contents/dashboard.html';
  $routeProvider.when('/contact', {
    templateUrl : 'html/contact.html',
    controller : 'contactControl'
  }).when('/', {
    templateUrl : 'html/home.html',
    controller : 'homeController'
  }).when('/login', {
    templateUrl : 'html/login.html',
    controller : 'loginController'
  }).when('/updateRates', {
    templateUrl : 'html/updaterates.html',
    controller : 'ratesController'
  }).when('/feedbacks', {
    templateUrl : 'html/feedback.html',
    controller : 'feedbackController'
  }).when('/feedbackadmin', {
    templateUrl : 'html/feedbackadmin.html',
    controller : 'feedbackAdminController'
  }).when('/terms', {
    templateUrl : 'html/terms.html',
    controller : 'termsAndFaqsController'
  }).when('/faqs', {
    templateUrl : 'html/faqs.html',
    controller : 'termsAndFaqsController'
    
  }).when('/contactMessages', {
    templateUrl : 'html/contactmessages.html',
    controller : 'contactControl'
    
  }).otherwise({
    redirectTo : '/'
  });

});

function navController($scope,$window, $location){

 $scope.$watch(function () { return userLoggedIn($window);}, function (value) {
  $scope.loginUser = value;
});

$scope.$watch(function () { return adminLoggedIn($window);}, function (value) {
  $scope.adminLoggedIn = value;
});


 $scope.logoutClicked = function(){
  $window.sessionStorage.removeItem("user_email");
  $window.sessionStorage.removeItem("user_type");
  $location.path( "/" );
};

  /*if(userLoggedIn($window)){
    $scope.loginUser = true;
  }else{
    $scope.loginUser = false;
  }*/
}

function homeController($scope, dailyRatesFactory) {


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
}

function headerCtrl($rootScope, $scope, $location, $window) {

}

function termsAndFaqsController($rootScope, $scope, $location, $window){

}