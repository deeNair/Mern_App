import React from 'react';
import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
//import { grey} from '@mui/material/colors';
import { addJobs} from '../service/api';

import { useNavigate } from 'react-router-dom';

const initialValue = {
  company: '',
  position: '',
  jobstatus: '',
  recruiterEmail: ''
}

//const primary = grey[500];

const Container = styled(FormGroup)`
background:#F6F1F1;
opacity:0.8;
border-radius:10px;
    width: 50%;
    color:#615954;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
      }
`;

const AddJobs=()=>{
  const [jobs, setJobs] = useState(initialValue);
   // const { name, username, email, phone } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
      
       //console.log(e.target.name,e.target.value);
       setJobs({...jobs,[e.target.name]:e.target.value})
      //console.log(jobs);
    }

    //take all the details in form(stored in jobs variable and setjob add value entered in form to it) and send to api
    const addJobsDetails = async() => {
      //call the api  
      await addJobs(jobs);
        navigate('/all');
    }
  return(
    <div>
      <h1>Add Jobs</h1>
    <Container>
      <Typography variant="h4"></Typography>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="company"/>
      </FormControl>
      <FormControl>
        <InputLabel>Position</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="position"/>
      </FormControl>
      <FormControl>
        <InputLabel>Jobstatus</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="jobstatus"/>
      </FormControl>
      <FormControl>
        <InputLabel>RecruiterEmail</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="recruiterEmail"/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>addJobsDetails()}>Add jobs</Button>
      </FormControl>
    </Container>
    </div>
  )
}
export default AddJobs;


