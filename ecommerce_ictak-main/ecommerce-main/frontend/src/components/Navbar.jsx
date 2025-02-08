import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Avatar, IconButton, Box } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
  return (
    <>
      {/* Full-Width Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "black", width: "100%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Brand Name with Increased Font Size */}
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            saiBABA.com
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
          <Avatar
            src="https://cdn.dribbble.com/users/4843167/screenshots/14540242/media/a3147b494cb28f4a874ebebea0370844.jpg"
            sx={{ bgcolor: "white", width: 56, height: 56 }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;