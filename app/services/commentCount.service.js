(function() {
    'use strict';

    angular
        .module('ProApp')
        .factory('ComCount', ComCount);

    ComCount.$inject = [];

    / @ngInject /
    function ComCount() {
          var commentCount = {};

           return {
           	    getCommentCount : getCommentCount,
           	    setCommentCount : setCommentCount
           }

           function  getCommentCount(){
           	   return starCount;
           }

           function setCommentCount(number){
          
           	  commentCount = number;
           }
    }
})();
