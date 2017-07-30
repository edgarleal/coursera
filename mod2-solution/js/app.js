(function () {
'use strict';
	
angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	
	var toBuy = this;
	var services = ShoppingListCheckOffService;
	toBuy.listCompra = ShoppingListCheckOffService.getDefaulItemsSho();
	
	toBuy.bought = function (index)
	{
		
		services.setItemsPurchase(toBuy.listCompra[index]);
		services.removeItemsSho(index);
	};
  
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  var services = ShoppingListCheckOffService;
  bought.listComprado = ShoppingListCheckOffService.getItemsPurchase();

}

function ShoppingListCheckOffService() {
  
  var service = this;

  service.itemsSho = [];
  service.itemsPurchase = [];
  service.itemsDefault = [];

  service.getDefaulItemsSho = function ()
  {
  	for (var i = 0; i < 5; i++) {
	  		var obj = 
	  		{
	  			name : "Item " + (i + 1),
	  			quantity : (i + 1)*10
	  		}

	  		service.setItemsSho(obj);
	  	}
  	 return service.itemsSho;
  };

  service.setItemsSho = function (object)
  {
  	service.itemsSho.push(object);
  };

  service.getItemsSho = function ()
  {
  	return service.itemsSho;
  };

  service.removeItemsSho = function (index)
  {
  	service.getItemsSho().splice(index, 1);

  };

  service.setItemsPurchase = function (object)
  {
  	var obj = 
	  		{
	  			name : object.name,
	  			quantity : object.quantity
	  		}
  	service.itemsPurchase.push(obj);
  };

  service.getItemsPurchase = function ()
  {
  	return service.itemsPurchase;
  };

  service.getItemsDefault = function ()
  {
  	return service.itemsDefault;
  };
}
})();