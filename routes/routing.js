const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../controllers/controller');

const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', controller.getAllDepartments);
router.get('/department/:departmentId', controller.getDepartment);
router.post('/departmentpage2/:departmentId', controller.postDepartment);
router.get('/departmentpage2', controller.getDepartmentPage2);
router.post('/save', controller.postSave);
router.get('/savedData', controller.getData);
router.get('/data', controller.getAllData);

module.exports= router;