const { Try } = require('@mui/icons-material');
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
   //find{} gets all data
     const jobs=await Jobs.find({});
     response.status(200).json(jobs);
 }
 catch(error){
      response.status(404).json({message:error.message});
 }
}

const getJobOfId=async(request,response)=>{
//console.log(request.params.id);

   try {
const jobs= await Jobs.findById(request.params.id);

      //const jobs = await Jobs.find({_id: request.params.id});
      response.status(200).json(jobs);

   } catch (error) {
      response.status(404).json({message:error.message});
   }

}

const editJobs=async(request,response)=>{
   const job=request.body;
   const editedJobs=new Jobs(job);

   try {
      await Jobs.updateOne({_id:request.params.id},editedJobs)
      response.status(201).json(editedJobs);
      
   } catch (error) {
      response.status(404).json({message:error.message});
   }


}

module.exports={addJobs,getJobs,getJobOfId,editJobs};

