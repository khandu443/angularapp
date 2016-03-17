(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .controller('classifiedsController', ['$scope', '$mdToast', '$mdSidenav', '$mdDialog', '$state', '$stateParams', 'classifiedsFactory','$http',  function($scope, $mdToast, $mdSidenav, $mdDialog, $state, $stateParams, classifiedsFactory,$http) {

      $scope.$parent.inToDo = false;
      $scope.$parent.inLoginPage = false;
      var vm = this;

      vm.openSidebar = openSidebar;
      vm.showSearchBar = false;
      vm.classifieds = classifiedsFactory.ref; 
      vm.classifieds.$loaded().then(function(){
           vm.categories = getCategories(vm.classifieds);
      }); 
        
      $scope.$on('newClassified', function(event, classified) {
        vm.classifieds.$add(classified);
          console.log('classified Added');
        showToast('Classified Saved');
      });

      $scope.$on('editSaved', function(event, message) {
        showToast(message);
      });

      vm.sidebarTitle;

      function openSidebar() {
        vm.sidebarTitle = 'Add a Classified';
        $state.go('classifieds.new');
      }
  

      function getCategories(classifieds) {

        var categories = [];

        angular.forEach(classifieds, function(ad) {
          angular.forEach(ad.categories, function(category) {
            categories.push(category);
          });
        });

        return _.uniq(categories);
      }
        
    }]);

})();