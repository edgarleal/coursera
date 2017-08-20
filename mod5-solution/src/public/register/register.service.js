(function () {
"use strict";

angular.module('common')
.service('RegisterService', RegisterService);


RegisterService.$inject = ['$http', 'ApiPath'];
function RegisterService($http, ApiPath) {
  var service = this;

  service.info = "";
  service.Menu = "";

  service.setInfo = function (info) {
    console.log(info);
    service.info = info
  };

  service.getInfo = function () {
    return service.info;
  };

  service.setMenu = function (menu) {
    service.Menu = menu;
  };

  service.getMenu = function (menu) {
      return service.Menu;
  };

}
})();
