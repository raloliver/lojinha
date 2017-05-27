'use strict';

describe('Controller: MainController', function() {

  // load the controller's module
  beforeEach(module('reLojaApp'));
  beforeEach(module('stateMock'));
  beforeEach(module('socketMock'));

  var MainController;
  var scope;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/products')
      .respond(['Product 1', 'Product 2', 'Product 3', 'Product 4']);

    scope = $rootScope.$new();
    state = $state;
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function() {
    $httpBackend.flush();
    expect(scope.products.length).to.equal(4);
  });
});
