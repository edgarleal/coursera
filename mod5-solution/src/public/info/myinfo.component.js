(function () {
"use strict";

angular.module('public')
.component('info', {
  templateUrl: 'src/public/info/infocomponent.html',
  bindings: {
    inf: '<',
    menu: '<',
    url : '<'
  }
});

})();
