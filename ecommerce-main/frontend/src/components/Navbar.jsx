import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Avatar, IconButton, Box, TextField, Container } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
  return (
    <>
      {/* Full-Width Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "black", width: "100%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Brand Name */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            SHOPEE
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">Home</Button>
            </Link>

            <Link to="/log" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">Login</Button>
            </Link>

            <Link to="/reg" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">Sign Up</Button>
            </Link>

            <Link to="/cart">
              <IconButton color="primary">
                <AddShoppingCartIcon />
              </IconButton>
            </Link>
          </Box>

          {/* User Avatar */}
          <Avatar src="/broken-image.jpg" sx={{ bgcolor: "white" }} />
        </Toolbar>
      </AppBar>

      
    </>
  );
};

export default Navbar;
