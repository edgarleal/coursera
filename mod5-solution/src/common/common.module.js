(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://radiant-reaches-83579.herokuapp.com') 
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
