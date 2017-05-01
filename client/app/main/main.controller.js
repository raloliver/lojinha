'use strict';

angular.module('reLojaApp')
  .controller('MainController', function ($scope, $state, $stateParams, $http, socket, Product) {
    $scope.products = Product.query().slice(2);
    $scope.product = Product.get({
      id: $stateParams.id
    });
    $scope.deleteProduct = function () {
      Product.delete($scope.product);   
    };
  });
