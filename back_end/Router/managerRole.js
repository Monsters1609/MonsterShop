const express = require('express');
const router = express.Router();
const managerRoleController = require('../Controller/managerRoleController');

// Xây dựng Path với các methor (post, get, put, delete)
router.get('/getManagerRole',managerRoleController.Select);
router.get('/postManagerRole',managerRoleController.Insert);
router.get('/deleteManagerRole/:IdRole',managerRoleController.Delete);
router.get('/putManagerRole/:IdRole',managerRoleController.Update);
router.post('/postManagerRole',managerRoleController.Insert);
router.delete('/deleteManagerRole/:IdRole',managerRoleController.Delete);
router.put('/putManagerRole/:IdRole',managerRoleController.Update);

module.exports = router;
