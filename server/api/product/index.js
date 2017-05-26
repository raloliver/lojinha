'use strict';

var express = require('express');
var controller = require('./product.controller');
var multiparty = require('connect-multiparty');

var router = express.Router();
var uploadOptions = {
  autoFile: true,
  uploadDir: 'client/assets/uploads/'
}

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id/upload', multiparty(uploadOptions), controller.upload);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
