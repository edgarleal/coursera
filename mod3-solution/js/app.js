(function () {
'use strict';
	
angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItemsDirective);


  function foundItemsDirective() {
    var ddo = {
      templateUrl: 'loader/itemsloaderindicator.template.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: ShoppingListDirectiveController,
      controllerAs: 'narrow',
      bindToController: true,
      //link: ShoppingListDirectiveLink,
      transclude: true
    };

    return ddo;
  }

  function ShoppingListDirectiveController() {
    var narrow = this;
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    
    var menuService = this;

    menuService.getMatchedMenuItems = function (searchTerm)
    {
        return $http(
        {
          method: "GET",
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
        })
        .then(function (result) {
          var foundItems = [];
          var allItems = result.data.menu_items;
          
          angular.forEach(allItems, function(value, key) {
            if(value.description.indexOf(searchTerm) >= 0)
                this.push(value);
          }, foundItems);
          

          return foundItems;
        });
    };

  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) 
  {
  	
  	var narrow = this;
    narrow.found = [];
    narrow.search = function search()
    {

      if(narrow.searchTerm != null &&  narrow.searchTerm.trim() != "")
      {
        
        var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
        narrow.msj = "";
        promise.then(function (response) {
          if(response.length == 0)
            narrow.msj = "Nothing found";
          narrow.found = response;
        })
        .catch(function (error) {
          console.log(error);
        });
      }else
      {
        narrow.msj = "Nothing found";
      }
        
    }

    narrow.remove = function (index)
    {

      narrow.found.splice(index, 1);
      
    }
  }
})();