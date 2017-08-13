(function () {
'use strict';	
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


  MenuDataService.$inject = ['$http', 'ApiBasePath', '$q'];
  function MenuDataService($http, ApiBasePath, $q)
  {
  		var menuData = this;
  		

  		menuData.getAllCategories = function getAllCategories()
  		{

	          var deferred = $q.defer();

			  $http.get(ApiBasePath + '/categories.json')
			  .success(function (data) {
			    deferred.resolve(data);
			  })
			  .error(function (data) {
			    deferred.reject(data);
			  });

			  return deferred.promise;
  		};

  		menuData.getItemsForCategory = function getItemsForCategory(categoryShortName)
  		{
  			
  			return $http(
	        {
	          method: "GET",
	          url: ApiBasePath + '/menu_items.json',
	          params : 
	          {
	          	category : categoryShortName
	          }
	        })
	        .then(function (result) {
	          return result;
	        });
  		};
  };

})();