const express = require('express');
const router = express.Router();

const  {addJobs,getJobs,getJobOfId,editJobs,deleteJob}  = require('../controller/user-controller');


//const getJobs = require('../controller/user-controller')

//const router = require('express').Router();

/*router.post('/add',()=>{
    console.log('hello');
})*/

router.post('/add',addJobs);
router.get('/all',getJobs);
router.get('/:id',getJobOfId);
router.post('/:id',editJobs);
router.delete('/:id',deleteJob);

//export default router;
module.exports =router;