const express = require('express');
const router = express.Router();
const accountManagerController = require('../Controller');

// Xây dựng Path với các methor (post, get, put, delete)
router.get('/getAccountManager',accountManagerController.Select);
router.get('/postAccountManager',accountManagerController.Insert);
router.get('/deleteAccountManager/:IdManager',accountManagerController.Delete);
router.get('/putAccountManager/:IdManager',accountManagerController.Update);
router.post('/postAccountManager',accountManagerController.Insert);
router.delete('/deleteAccountManager/:IdManager',accountManagerController.Delete);
router.put('/putAccountManager/:IdManager',accountManagerController.Update);
module.exports = router;
