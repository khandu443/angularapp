(function(){
   
   "use strict";
    angular.module('ngClassifieds').directive('classifiedCard',function(){
      return{
          templateUrl: 'components/classifieds/card/classified-card.tpl.html',
          scope: {
              classifieds:"=classifieds",
              classifiedsFilter:"=classifiedsFilter",
              category: "=category"
          },
          controller: classifiedCardController,
          controllerAs: "vm"
      }
      
      function classifiedCardController($scope,$mdDialog,$state,$mdToast){
        var vm = this;
          
        vm.editClassified = editClassified;
        vm.deleteClassified = deleteClassified;
          
        function editClassified(classified) {
           $state.go('classifieds.edit', { 
                id: classified.$id
            });
        }
       
          function deleteClassified(event, classified) {
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete ' + classified.title + '?')
                .targetEvent(event)
                .ok('Yes')
                .cancel('No');
            $mdDialog.show(confirm).then(function() {
              console.log(event);
                $scope.classifieds.$remove(classified);
              showToast('Classified Deleted');
            }, function() {
              vm.status = classified.title + ' is still here.';
            });
          }
       
          function showToast(message) {
                $mdToast.show(
                  $mdToast.simple()
                    .content(message)
                    .position('top, right')
                    .hideDelay(3000)
                );
              }
      }
  })
})();