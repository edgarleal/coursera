(function () {


angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['RegisterService', 'inf', 'menu', 'ApiPath'];

function InfoController(RegisterService, inf, menu, ApiPath) {
  var infoCtrl = this;

  infoCtrl.inf = inf;
  console.log(ApiPath);
  infoCtrl.ApiPath = ApiPath;
  infoCtrl.menu = menu;

  /*infoCtrl.info = RegisterService.getInfo();
  
  infoCtrl.menu = RegisterService.getMenu();*/

  if(infoCtrl.inf !="" && infoCtrl.inf !=null)
      infoCtrl.cond = true;
  
}

})();
