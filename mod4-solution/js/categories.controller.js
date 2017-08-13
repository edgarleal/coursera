(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items','MenuDataService'];
function CategoriesController(items,MenuDataService) {
  var categories = this;
  categories.items = items;
}

})();