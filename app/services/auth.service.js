(function() {
    'use strict';

    angular
        .module('ProApp')
        .factory('User', User);

    User.$inject = [];

    / @ngInject /
    function User() {
          var UserInfo = {};

           return {
           	    getUserInfo : getUserInfo,
           	    setUserInfo : setUserInfo
           }

           function getUserInfo(){
           	   return UserInfo;
           }

           function setUserInfo(user){
          
           	  UserInfo = user;
           }
    }
})();
