const express = require('express');
const router = express.Router();
const managerDetailController = require('../Controller/managerDetailController');

// Xây dựng Path với các methor (post, get, put, delete)
router.get('/getManagerDetail',managerDetailController.Select);
router.get('/postManagerDetail',managerDetailController.Insert);
// router.get('/deleteManagerDetail/:PhoneNumber',managerDetailController.Delete);
router.get('/putManagerDetail/:IdManagerDetail',managerDetailController.Update);
router.post('/postManagerDetail',managerDetailController.Insert);
// router.delete('/deleteManagerDetail/:PhoneNumber',managerDetailController.Delete);
router.put('/putManagerDetail/:IdManagerDetail',managerDetailController.Update);

module.exports = router;
