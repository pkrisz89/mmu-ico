(function(){

var app = angular.module("studentApp", ['ngRoute']); 

app.controller('dataController', function($http) {
    var vm = this;
    $http.get("students.json").then(function(response) {
        vm.yearOne = response.data.yearOne;
        vm.yearTwo = response.data.yearTwo;
        vm.yearTwoGroups = response.data.yearTwoGroups;
        vm.yearThree = response.data.yearThree;
        vm.graduates = response.data.graduates;
    });
    });

    
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html"
    })
    .when("/year-one", {
        templateUrl : "templates/year-one.html"
    })
    .when("/year-two", {
        templateUrl : "templates/year-two.html"
    })
    .when("/year-three", {
        templateUrl : "templates/year-three.html"
    })
    .when("/graduates", {
        templateUrl : "templates/our-graduates.html"
    })
    .when("/404", {
        templateUrl : "templates/404.html"
    })
    .otherwise({ redirectTo: '/404' });
});
    
}());


