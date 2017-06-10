'use strict';

angular.module('reLojaApp')
  .factory('Catalog', function ($resource) {
    return $resource('/api/catalogs/:id');
  });
