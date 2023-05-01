const express = require('express');
const router = express.Router();

const  {addJobs,getJobs}  = require('../controller/user-controller');

//const getJobs = require('../controller/user-controller')

//const router = require('express').Router();

/*router.post('/add',()=>{
    console.log('hello');
})*/

router.post('/add',addJobs);
router.get('/all',getJobs);


//export default router;
module.exports =router;