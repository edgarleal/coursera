(function () {
'use strict';	
  angular.module('MenuApp')
  .component('items', {
	  templateUrl: 'components/items.component.html',
	  bindings: {
	    items: '<'
	  }
   });
})();