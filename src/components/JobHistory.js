import { Table,TableBody, TableCell, TableHead, TableRow ,Button} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import { useEffect,useState } from 'react';
import {getJobs,deleteJob}  from '../service/api';
import { pink } from '@mui/material/colors';

import {Link} from 'react-router-dom';


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

const deleteJobs=async(id)=>{
  await deleteJob(id);
  getAllJobs();
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
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
       </TableRow>
    </TableHead>
    <TableBody>
      {
        jobs.map((jb)=>
          (
            <TableRow key={jb._id}>
              <TableCell>{jb._id}</TableCell>
              <TableCell>{jb.company}</TableCell>
              <TableCell>{jb.position}</TableCell>
              <TableCell>{jb.jobstatus}</TableCell>
              <TableCell>{jb.recruiterEmail}</TableCell>
              <TableCell>
    <Button variant="contained" component={Link} to={`/edit/${jb._id}`}>
                    <EditIcon sx={{ color: pink[500] }}/>
                </Button >
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={()=>deleteJobs(jb._id)}>
                  <DeleteIcon sx={{ color: pink[500]}} />
                </Button>
                </TableCell>
            </TableRow>
          ))
      }
    </TableBody>
   </Table>
  );
}

export default JobHistory;

