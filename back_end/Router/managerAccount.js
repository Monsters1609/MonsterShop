const express = require('express');
const router = express.Router();
const managerAccountController = require('../Controller/managerAccountController');

// Xây dựng Path với các methor (post, get, put, delete)
router.get('/getManagerAccount',managerAccountController.Select);
router.get('/postManagerAccount',managerAccountController.Insert);
router.get('/deleteManagerAccount/:PhoneNumber',managerAccountController.Delete);
router.get('/putManagerAccount/:IdManager',managerAccountController.Update);
router.post('/postManagerAccount',managerAccountController.Insert);
router.delete('/deleteManagerAccount/:PhoneNumber',managerAccountController.Delete);
router.put('/putManagerAccount/:IdManager',managerAccountController.Update);

module.exports = router;
