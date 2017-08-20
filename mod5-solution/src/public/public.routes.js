(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.register', {
      url: '/register',
      templateUrl: 'src/public/register/register.html',
      controller : 'RegisterController',
      controllerAs: 'regCtrl',
    }).state('public.info', {
      url: '/info',
      templateUrl: 'src/public/info/myinfo.html',
      controller : 'InfoController',
      controllerAs: 'infoCtrl',
      resolve: {
        inf: ['RegisterService', function (RegisterService) {
          return RegisterService.getInfo();
        }],
        menu: ['RegisterService', function (RegisterService) {
          return RegisterService.getMenu();
        }]
      }
    });
}
})();
