import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
       
        axios.get("http://localhost:3001/get")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                {data.map((val) => {
                    return (
                        <Grid item xs={9} sm={5} md={4} key={val._id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.img_url}
                                    title={val.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        <h3>{val.category}</h3>
                                        {val.content}
                                        <h2>₹{val.price}</h2>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Update</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Home;
