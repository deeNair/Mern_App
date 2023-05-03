import React from 'react';
import { useState,useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate,useParams } from 'react-router-dom';

import { editJobs,getJobOfId} from '../service/api';

const initialValue = {
  company: '',
  position: '',
  jobstatus: '',
  recruiterEmail: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EditJob=()=>{
  const [jobs, setJobs] = useState(initialValue);
   //const { company, position, jobstatus, recruiterEmail } = jobs;
    //useparams is object so u can destructure id n extract it.
   const {id} = useParams();
   
    let navigate = useNavigate();
   

    useEffect(() => {
      loadJobDetails();
  }, []);
    

    const loadJobDetails = async() =>{
      let response = await getJobOfId(id);
      setJobs(response.data);
      console.log(response.data);
      console.log(jobs);
    }

    const onValueChange = (e) => {
      
       //console.log(e.target.name,e.target.value);
       setJobs({...jobs,[e.target.name]:e.target.value})
      //console.log(jobs);
    }

    //take all the details in form(stored in jobs variable and setjob add value entered in form to it) and send to api
    const editJobsDetails = async() => {
      //call the api  
      await editJobs(jobs,id);
        navigate('/all');
    }
  return(
    <Container>
      <Typography variant="h4">Edit jobs</Typography>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="company" value={jobs.company}/>
      </FormControl>
      <FormControl>
        <InputLabel>Position</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="position" value={jobs.position}/>
      </FormControl>
      <FormControl>
        <InputLabel>Jobstatus</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="jobstatus" value={jobs.jobstatus}/>
      </FormControl>
      <FormControl>
        <InputLabel>RecruiterEmail</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="recruiterEmail" value={jobs.recruiterEmail}/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>editJobsDetails()}>Edit jobs</Button>
      </FormControl>
    </Container>
  )
}
export default EditJob;


