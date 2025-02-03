import React, { useState, useEffect } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "#f4f4f4", // Light gray background
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {data.map((val) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={val.id}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia sx={{ height: 180 }} image={val.image} title={val.title} />
              <CardContent>
                <Typography gutterBottom variant="h6" noWrap>
                  {val.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {val.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ height: 50, overflow: "hidden", textOverflow: "ellipsis" }}>
                  {val.description}
                </Typography>
                <Typography variant="h6">₹{val.price}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Link to="/cart" state={{ product: val }} style={{ textDecoration: "none" }}>
                  <Button variant="contained">Buy</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
