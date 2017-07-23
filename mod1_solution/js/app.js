(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.msg = "";
	$scope.textInput = "";
	$scope.myColor = "";
	$scope.myBorder = "";
	$scope.contador = function ()
	{
		if(!$scope.textInput.length)
		{
			$scope.msg = "Please enter data first";
			$scope.myColor = "red";
			$scope.myBorder = "borderRed";
		}else
		{
			$scope.myColor = "green";
			$scope.myBorder = "borderGreen";
			

			if($scope.textInput.split(',').length <=3)
			{
				$scope.msg = "Enjoy!";
			}else
				$scope.msg = "Too much!";
		}	
		
	};

}

})();