const Jobs=require('../models/jSchema')


const addJobs=async(request,response)=>{
    //console.log('hello');
    const job=request.body;
    //console.log(job);
    //create a schema object and put data from req body //VALIDATED ,if valid then save in db.
    const newJob= new Jobs(job);
     //async req returns a promise
     //save tht Schema in db
     try{
        await newJob.save();
        response.status(201).json(newJob);

     }catch(error){
        response.status(409).json({message:error.message});
     }
     
}

const getJobs=async(request,response)=>{
 try{
     const jobs=await Jobs.find({});
     response.status(200).json(jobs);
 }
 catch(error){
      response.status(404).json({message:error.message});
 }
}

module.exports={addJobs,getJobs};

