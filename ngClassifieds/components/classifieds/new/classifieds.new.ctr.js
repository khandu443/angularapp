(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .controller('newClassifiedsController',['$state', '$scope', '$mdSidenav', '$mdDialog', '$timeout', 'classifiedsFactory', function($state, $scope, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {

      var vm = this;

      vm.closeSidebar = closeSidebar;
      vm.saveClassified = saveClassified;

      vm.sidebarTitle = 'Add a Classifed';
    
      $scope.$watch('sidenavOpen', function(sidenavOpen) {
        if(sidenavOpen === false) {
          $mdSidenav('left')
            .close()
            .then(function() {
              $state.go('classifieds');
          });
        }
      });

      $timeout(function() {
        $mdSidenav('left').open();     
      });
     
      function closeSidebar() {
        vm.classified = {};
        $scope.sidenavOpen = false;        
      }

      function saveClassified(classified) {
        if(classified) {

          classified.contact = {
            name: "Pankaj Hasija", 
            phone: "+91738502167",
            email: "pankajhasija07@gmail.com"
          }

          $scope.$emit('newClassified', classified)          
          $scope.sidenavOpen = false;
        }
      }
    }]);
})();