(function () {


angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['MenuService', 'RegisterService'];

function RegisterController(MenuService, RegisterService) {
  var regCtrl = this;

  regCtrl.submit = function () {
  	
  	MenuService.getShortMenu(regCtrl.user.menunumber).then(function (data) {
      
      regCtrl.noFound = false;
      regCtrl.mensajeSuccess = "Success";

      RegisterService.setInfo(regCtrl.user);
      RegisterService.setMenu(data);


      console.log(RegisterService.getMenu());

  	}, function(reason) {
	  console.log(reason.data.error);
	  regCtrl.noFound = true;
	  regCtrl.mensajeSuccess = "";
	});
    
  };
}

})();
