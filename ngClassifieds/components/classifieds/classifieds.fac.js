(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .factory('classifiedsFactory',['$http', '$firebaseArray', function($http, $firebaseArray) {

   var ref = new Firebase('https://ngclassifieds7.firebaseio.com/');
     
    var user = {
         username: "admin",
         password: "admin"
     }
    
    localStorage.setItem('authUser',JSON.stringify(user));
    return {
        ref: $firebaseArray(ref)
      }
      
    }]);
})();