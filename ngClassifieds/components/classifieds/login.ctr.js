(function(){
    "use strict";
    
    angular.module('ngClassifieds').controller('loginController',['$scope', '$log', '$state','$mdToast',function($scope, $log, $state,$mdToast){
        $scope.$parent.inLoginPage = true;
        $scope.user = {};
           
        $scope.login = function(user){
            //$log.info(user);
            var authUser = JSON.parse(localStorage.getItem('authUser'));
           
            if(user.username === authUser.username && user.password === authUser.password){
                    localStorage.setItem('currentUser',$scope.user);
                    $state.go('classifieds');
                }
                else{
                    
                    $scope.user = {};
                    $state.go('login');
                }                
            }   
    }]);
})();