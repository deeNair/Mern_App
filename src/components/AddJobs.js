import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';

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
const onValueChange = (e) => {
      
    console.log(e.target.name,e.target.value);
    //setJobs({...jobs,[e.target.name]:e.target.value})
   //console.log(jobs);
 }
 //take all the details in form(stored in jobs variable and setjob add value entered in form to it) and send to api
 const addJobsDetails = async() => {
    //call the api  
    //await addJobs(jobs);
      //navigate('/all');
  }

const AddJobs = () => {
const [jobs, setJobs] = useState(initialValue);
  return (
    <Container>
      <Typography variant="h4">Add jobs</Typography>
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
  )
}

export default AddJobs;