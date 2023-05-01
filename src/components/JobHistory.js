import { Table,TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect,useState } from 'react';
import {getJobs}  from '../service/api';



const JobHistory =()=> {
const [jobs,setJobs]=useState([]);
//mount when loaded on dom , when u click all jobs load this useeffect
useEffect(() =>{
   getAllJobs();
},[]);

const getAllJobs=async()=>{
    let response=await getJobs();
    setJobs(response.data);
    console.log(response.data);
}

  return (
   <Table>
    <TableHead>
        <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Company</TableCell>
        <TableCell>Position</TableCell>
        <TableCell>Jobstatus</TableCell>
        <TableCell>RecruiterEmail</TableCell>
       </TableRow>
    </TableHead>
    <TableBody>
      {
        jobs.map((jb)=>
          (
            <TableRow>
              <TableCell>{jb._id}</TableCell>
              <TableCell>{jb.company}</TableCell>
              <TableCell>{jb.position}</TableCell>
              <TableCell>{jb.jobstatus}</TableCell>
              <TableCell>{jb.recruiterEmail}</TableCell>
            </TableRow>
          )
        )
      }
    </TableBody>
   </Table>
  );
}

export default JobHistory;

