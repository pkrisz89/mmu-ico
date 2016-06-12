var app = angular.module("studentApp", []); 

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

