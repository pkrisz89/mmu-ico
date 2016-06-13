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
    
    vm.pages = [
            {
                'name': 'Home',
                'active': false,
                'url': '#/'
            },
            {
                'name': 'Year One',
                'active': false,
                'url': '#/year-one'     
            },
            {
                'name': 'Year Two',
                'active': false,
                'url': '#/year-two'
            },
            {
                'name': 'Year Three',
                'active': false,
                'url': '#/year-three'
            },
            {
                'name': 'Graduates',
                'active': false,
                'url': '#/graduates'
            }];
    
    
    vm.setActive = function(page) {
        //for each vm.pages, set active false, then set current page active to true
        // OR
        // change this to set the current page to an object, check currentPage.name == page.name in view
        //this.page = {};
        page.active = true;
    }
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


