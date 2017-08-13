(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'tmpl/home.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'tmpl/categories.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
       return  MenuDataService.getAllCategories();
      }]
    }
  })
  .state('item', {
    url: '/item/{itemName}',
    templateUrl: 'tmpl/items.html',
    controller: 'ItemsController as itemDetails',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemName)
                .then(function (items) {
                  console.log($stateParams.itemName);
                  console.log(items.data.menu_items);
                  return items.data.menu_items;
                });
            }]
    }
  });
}

})();