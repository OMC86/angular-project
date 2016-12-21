angular.module('ProApp')

	.controller('DropDownCtrl', ['$scope', '$log', '$rootScope', function($scope, $log, $rootScope) {

		$scope.items = ['Newest', 'Oldest', 'Name'];

		$scope.status = {
			isopen: false
		};

		$scope.toggled = function(open) {
    	$log.log('Dropdown is now: ', open);
  };

  		$scope.toggleDropdown = function($event) {
		    $event.preventDefault();
		    $event.stopPropagation();
		    $scope.status.isopen = !$scope.status.isopen;
		  };

  		$scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));




  		$scope.newestPost = function(){
				
			$rootScope.$broadcast('newestPost');
  		};


  		$scope.oldestPost = function(){
				
			$rootScope.$broadcast('oldestPost');
  		};

  		$scope.name = function(){

  			$rootScope.$broadcast('namePost');
  		};


	}]);