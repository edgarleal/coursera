(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items','MenuDataService'];
function ItemsController(items,MenuDataService) {
  var itemDetails = this;
  itemDetails.items = items;
}

})();