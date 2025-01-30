import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const Cart = () => {
  const [data, setdata] = useState([])
  axios.get("https://fakestoreapi.com/products")
      .then((res) => {
          console.log(res.data)
          setdata(res.data)
      })
  return (
    <div>    
   <Grid container sapcing={2}>
    {data.map((val) => {
        return (
            <Grid item xs={9} sm={5} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={val.image}
                    title={val.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {val.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <h3>{val.category}</h3>
                            {val.description}
                            <h2>₹{val.price}</h2>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><h4>Buy</h4></Button>
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </Grid>)
    })}
</Grid>
 </div>
  )
}

export default Cart