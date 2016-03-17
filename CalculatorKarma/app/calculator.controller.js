 angular.module('calculatorApp', []).controller('CalculatorController', function CalculatorController($scope) {
     //console.log('hi');
   $scope.z = 0;
   $scope.sum = function() {
     $scope.z = $scope.x + $scope.y;
   };
    $scope.operation = "Select Operation";
     $scope.add = function(){
         $scope.operation = "Addition";
         $scope.result = parseInt($scope.firstNum) + parseInt($scope.secondNum);
     }
 
     $scope.subtract = function(){
         $scope.operation = "Subtraction";
         $scope.result = parseInt($scope.firstNum) - parseInt($scope.secondNum);
     }
     
     $scope.multiply = function(){
         $scope.operation = "Multiplication";
         $scope.result = parseInt($scope.firstNum) * parseInt($scope.secondNum);
     }
     
     $scope.divide = function(){
         $scope.operation = "Division";
         $scope.result = parseInt($scope.firstNum) / parseInt($scope.secondNum);
     }     
     
 });


//// create a new module
//angular.module('products', []);
//
//// register the service
//angular.module('products').service('CategoryService', function CategoryService() {
//  return {
//    getCategories: function() {
//      return { 1: 'Beverages', 2: 'Condiments' };
//    }
//  }; 
//});
//
//// register a service. **This has a dependency on the CategoryService**
//angular.module('products').service('ProductsService', function ProductService (CategoryService) {
//  return {
//    getProducts: function () {
//      var product1 = { name: 'Chai', categoryId: 1 };
//      var product2 = { name: 'Aniseed Syrup', categoryId: 2 };
//      var products = [product1, product2];
//
//      var categories = CategoryService.getCategories();
//
//      products.forEach(function (p) {
//        // append the category name for the category service to each product.
//        p.categoryName = categories[p.categoryId];
//      });
//
//      return products;
//    }
//  };
//});