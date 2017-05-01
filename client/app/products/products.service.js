'use strict';

angular.module('reLojaApp')
  .factory('Product', function () {
    let last_id = 5;
    let sampleProducts = [{
        _id: 1,
        title: 'Product 1',
        price: 123.45,
        quantity: 10,
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        _id: 2,
        title: 'Product 2',
        price: 123.45,
        quantity: 10,
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        _id: 3,
        title: 'Product 3',
        price: 123.45,
        quantity: 10,
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        _id: 4,
        title: 'Product 4',
        price: 123.45,
        quantity: 10,
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        _id: 5,
        title: 'Product 5',
        price: 123.45,
        quantity: 10,
        description: 'Lorem ipsum dolor sit amet'
      }
    ];

    return {
      query: function () {
        return sampleProducts;
      },

      get: function (params) {
        let result = {};
        angular.forEach(sampleProducts, function (product) {
          if (product._id == params.id) {
            return this.product = product;
          }
        }, result);
        return result.product;
      },

      delete: function (params) {
        angular.forEach(sampleProducts, function (product, index) {
          if (product._id == params._id) {
            console.warn(product, index);
            sampleProducts.splice(index, 1);
            return;
          }
        })
      },

      create: function (product) {
        product._id = ++last_id;
        sampleProducts.push(product);
      },

      update: function (product) {
        let item = this.get(product);
        if (!item) return false;

        item.title = product.title;
        item.price = product.price;
        item.quantity = product.quantity;
        item.description = product.description;
        return true;
      }
    }
  });
