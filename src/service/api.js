import axios from 'axios';
//const axios =require('axios');

const URL= 'http://localhost:3001';

//api function wants to add jobs to db,api fun makes post req(post api) to the url endpoint given , along with the data. it also gets the response back so in try catch block handle the response.

 export const addJobs = async(data)=>{
    try{
        //axios takes min two arg, url and req body
        //in post api u hav to send the data in req.body which is sec arg
        //,its async req so handle it.
        //it gives back a response, which cld be json etc, so retuen keyword retuens whatever response u get.

return await axios.post(`${URL}/add`,data );

    }catch(error){
        console.log('error while calling',error);
    }
}

 export const getJobs=async()=>{
   try{
return await axios.get(`${URL}/all`);
   }catch(error){
    console.log('error calling api',error);
   }
}

export const getJobOfId=async(id)=>{
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('error calling api',error);
    }
}

export const editJobs = async (jobs,id) => {
    try {
        return await axios.post(`${URL}/${id}`,jobs );
    } catch (error) {
        console.log('error calling api',error);
    }
}
