
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom'

const Home = () => {

    const [data, setdata] = useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res.data)
            setdata(res.data)
        })

      //   const submit = () => {
      //     if (location.state!== null) {
      //         axios.put("http://localhost:5000/up/" + location.state.val._id, input)
      //             .then((res) => {
      //                 alert(res.data.message)
      //                 // navigation("/view")
      //         })
  
      //     } else {
      //         axios.post("http://localhost:5000/add", input)
      //             .then((res) => {
      //                 alert(res.data.message)
      //                 // navigation("/view")
      //             })
      //     }
         
      // }

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
                              <Link to="/pay">
                                <Button size="small" ><h4>Buy</h4></Button>
                               </Link>
                            </CardActions>
                        </Card>
                    </Grid>)
                })}
            </Grid>
           
        </div>
  )
}

export default Home