 describe('ngClassifieds', function () {
    var $controller, $scope, controller;
    beforeEach(module('ngClassifieds'));
    
    beforeEach(inject(function(_$controller_, $rootScope){
        $controller = _$controller_;
        $scope =  $rootScope.$new();
        controller = $controller('classifiedsCtrl', { $scope: $scope }); 
      }));


    describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            var $scope = {};

        //var controller = $controller('classifiedsCtrl', { $scope: $scope });   

            expect(1+2).toBe(3);
        }); 
    });

});

