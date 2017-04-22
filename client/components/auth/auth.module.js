'use strict';

angular.module('reLojaApp.auth', [
  'reLojaApp.constants',
  'reLojaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
