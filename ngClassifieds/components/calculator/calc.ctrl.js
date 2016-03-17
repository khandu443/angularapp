 angular.module('ngClassifieds').controller('CalculatorController', function CalculatorController($scope) {
          
     $scope.add = function(){
         $scope.result = parseInt($scope.firstNum) + parseInt($scope.secondNum);
     }
 
     $scope.subtract = function(){
         $scope.result = parseInt($scope.firstNum) - parseInt($scope.secondNum);
     }
     
     $scope.multiply = function(){
         $scope.result = parseInt($scope.firstNum) * parseInt($scope.secondNum);
     }
     
     $scope.divide = function(){
         $scope.result = parseInt($scope.firstNum) / parseInt($scope.secondNum);
     }
 });