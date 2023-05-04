import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import useStyles from './styles';

const Post = () => {
const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }}>
  <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JS-Map method
        </Typography>
        <Typography variant="body2" color="text.secondary">
        map() method allows you to iterate over an array and modify its elements using a callback function
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
  
  </Card>
  )
}

export default Post