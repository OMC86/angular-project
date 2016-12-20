(function() {
    'use strict';

    angular
        .module('ProApp')
        .factory('Star', Star);

    Star.$inject = [];

    / @ngInject /
    function Star() {
          var starCount = {};

           return {
           	    getStarCount : getStarCount,
           	    setStarCount : setStarCount
           }

           function  getStarCount(){

            
           	      return starCount;
           }

          


           function setStarCount(star){
          
           	  starCount = star;
           }
    }
})();
