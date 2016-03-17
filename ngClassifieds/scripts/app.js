(function() {

  "use strict";

  angular
    .module('ngClassifieds', ['ngMaterial','ui.router','firebase'])
    .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

      $urlRouterProvider.otherwise('/classifieds');

      $stateProvider
         .state('login', {
          url: '/login',
          templateUrl: 'components/classifieds/login.tpl.html',
          controller: 'loginController'
        })
        .state('classifieds', {
          url: '/classifieds',
          templateUrl: 'components/classifieds/classifieds.tpl.html',
          controller: 'classifiedsController as vm'
        })
        .state('classifieds.new', {
          url: '/new',
          templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
          controller: 'newClassifiedsController as vm'
        })
        .state('classifieds.edit', {
          url: '/:id/edit',
          templateUrl: 'components/classifieds/edit/classifieds.edit.tpl.html',
          controller: 'editClassifiedsController as vm',
          params: {
            classified: null
          }
        })
       .state('toDoApp', {
          url: '/toDoApp',
          templateUrl: 'components/toDo/dashboard.tpl.html',
          controller: 'toDoController'
        })
       .state('Calculator', {
          url: '/Calculator',
          templateUrl: 'components/calculator/calc.tpl.html',
          controller: 'CalculatorController'
        })    
      ;
    });
    
})();

