const express = require('express');
const router = express.Router();

const  {addJobs,getJobs,getJobOfId,editJobs}  = require('../controller/user-controller');

//const getJobs = require('../controller/user-controller')

//const router = require('express').Router();

/*router.post('/add',()=>{
    console.log('hello');
})*/

router.post('/add',addJobs);
router.get('/all',getJobs);
router.get('/:id',getJobOfId);
router.post('/:id',editJobs);

//export default router;
module.exports =router;