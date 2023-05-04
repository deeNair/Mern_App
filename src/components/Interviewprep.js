import React from 'react';
import {Container,Typography,Grow,Grid}from '@material-ui/core';
import Posts from './Posts/Posts';
import Form from './Form/Form';

const Interviewprep = () => {
  return (

    <div>
   
    <Container maxidth="lg">
     
    <Typography variant="h2" align="center" al>MIND map</Typography>
<Grow in>
      <Container>
             <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                 <Grid item xs={12} sm={7}>
                  <Posts />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                  <Form/>
                  </Grid>
             </Grid>
        </Container> 
     </Grow>   
</Container>
</div>
  )
}

export default Interviewprep;