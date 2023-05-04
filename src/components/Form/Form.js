import React , { useState, useEffect } from 'react';
import {
	TextField,
	Button,
	Typography,
	Paper,
} from "@material-ui/core";

import useStyles from "./styles";



const handleSubmit=()=>{

}


const Form = () => {

    const [postData, setPostData] = useState({
		title: "",
		message: "",
		
	});

    const classes = useStyles(); 

  return (
    <Paper className={classes.paper}>
    <form autoComplete="off"
              noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
<Typography variant="h6">creating notes</Typography>
<TextField name="title" variant="outlined" label="title" 
fullWidth value={postData.title} onCnange={(e)=>setPostData({creator:e.target.value})}/>

<TextField name="message" variant="outlined" label="notes" 
fullWidth value={postData.notes} onCnange={(e)=>setPostData({creator:e.target.value})}/>

<Button
                  className={classes.buttonSubmit}
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  fullWidth
              >
                  Submit
              </Button>

      <Button
                  className={classes.buttonSubmit}
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  fullWidth
              >
              clear
              </Button>
              
    </form>
   </Paper>
  );
}

export default Form