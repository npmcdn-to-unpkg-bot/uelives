angular.module("Uelives").controller("choiceTimeController", function($scope, errorServices, toastServices, localStorageService, config) {
    $scope.input = {};
    $scope.days = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
    $scope.input.day=$scope.days['0']
    $scope.select_gender = function(gender) {
        $scope.input.gender = gender;
    };
})