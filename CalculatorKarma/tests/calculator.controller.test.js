 describe('Calculator App', function () {

   beforeEach(module('calculatorApp'));

   var $controller;

   beforeEach(inject(function(_$controller_){
     $controller = _$controller_;
   }));

   describe('Add Operation', function () {
         it('1 + 2 should equal 3', function () {
             var $scope = {};
             var controller = $controller('CalculatorController', { $scope: $scope });
             $scope.firstNum = 1;
             $scope.secondNum = 2;
             $scope.add();
             expect($scope.result).toBe(3);
         }); 

     });
     
    describe('Subtract Operation', function () {
         it('1 - 2 should equal (-1)', function () {
             var $scope = {};
             var controller = $controller('CalculatorController', { $scope: $scope });
             $scope.firstNum = 1;
             $scope.secondNum = 2;
             $scope.subtract();
             expect($scope.result).toBe(-1);
         }); 

     });
     
     describe('Multiply Operation', function () {
         it('1 * 2 should equal 2', function () {
             var $scope = {};
             var controller = $controller('CalculatorController', { $scope: $scope });
             $scope.firstNum = 1;
             $scope.secondNum = 2;
             $scope.multiply();
             expect($scope.result).toBe(2);
         }); 

     });
     
     describe('Divide Operation', function () {
         it('1 / 2 should equal (.5)', function () {
             var $scope = {};
             var controller = $controller('CalculatorController', { $scope: $scope });
             $scope.firstNum = 1;
             $scope.secondNum = 2;
             $scope.divide();
             expect($scope.result).toBe(.5);
         }); 

     });
 });

//describe('products service tests', function () {
//
//  // Note that we can move the call to module in the beforeEach block,
//  // thus making it available for each test, keeping our tests DRY.
//  beforeEach(angular.mock.module('products'));
//
//  it('should append category names to products', function () {
//
//  // Note that this version of the CategoryService overrides the version we added to the products module.
//  angular.mock.module({
//    'CategoryService': { 
//      getCategories: function() { 
//        return { 1: 'Electronics', 2: 'DVDs' }; 
//      } 
//    }
//  });
//
//  var service;
//
//  angular.mock.inject(function GetDependencies(ProductsService) {
//    service = ProductsService;
//  });
//
//  var products = service.getProducts();
//  expect(products[0].categoryName).toBe('Electronics');
//  expect(products[1].categoryName).toBe('DVDs');
//});
//});
