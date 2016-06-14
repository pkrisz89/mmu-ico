(function(){
    

var app = angular.module("studentApp", ['ngRoute']); 

app.controller('dataController', function($http, $location) {
    var vm = this;
    vm.activePage = 'Home';
    
    $http.get("students.json").then(function(response) {
        vm.yearOne = response.data.yearOne;
        vm.yearTwo = response.data.yearTwo;
        vm.yearTwoGroups = response.data.yearTwoGroups;
        vm.yearThree = response.data.yearThree;
        vm.graduates = response.data.graduates;
    });
    
        vm.setActivePage = function(name) {
            vm.activePage = name;
        };
    
    vm.pages = [
            {
                'name': 'Home',
                'url': '#/'
            },
            {
                'name': 'Year One',
                'url': '#/year-one'     
            },
            {
                'name': 'Year Two',
                'url': '#/year-two'
            },
            {
                'name': 'Year Three',
                'url': '#/year-three'
            },
            {
                'name': 'Graduates',
                'url': '#/graduates'
            }];

    
    });
    

    
app.config(function($routeProvider, $locationProvider) {
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
    
    //$locationProvider.html5Mode(true);
});
    
    
}());


