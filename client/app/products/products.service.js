'use strict';

angular.module('reLojaApp')
  .factory('Product', function ($resource) {
    return $resource('/api/products/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  });
