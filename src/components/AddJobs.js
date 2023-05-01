import React from 'react';
import { Table,TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect,useState } from 'react';

const AddJobs = () => {
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
    </Table>
  )
}

export default AddJobs;