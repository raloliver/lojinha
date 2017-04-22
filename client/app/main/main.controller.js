'use strict';

angular.module('reLojaApp')
  .controller('MainController', function($scope, $http, socket, Product) {
    $scope.products = Product.query().slice(3);
  });
