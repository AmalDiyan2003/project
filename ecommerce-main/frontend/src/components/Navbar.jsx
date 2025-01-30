import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'; 
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Navbar = () => {
  return (
    <div>
      {/* <AppBar > */}
      <AppBar sx={{ backgroundColor: 'black' }}> 
        <Toolbar >
            <h1>SHOPEE</h1>
            &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
            <Link to ="/home">
            <Button variant="contained" color="primary">Home</Button>
            </Link>
            &nbsp; &nbsp; &nbsp; 
            <Link to ="/log">
            <Button variant="contained" color="primary">Login</Button>
            </Link>
            &nbsp; &nbsp; &nbsp; 
           
            <Link to ="/reg">
            <Button variant="contained" color="primary">Sign Up</Button>
            </Link>
            &nbsp; &nbsp; &nbsp; 
            <Link to ="/cart">
             <IconButton color="primary" aria-label="add to shopping cart">
             <AddShoppingCartIcon />
             </IconButton>
            </Link>
           
         <Avatar 
          src="/broken-image.jpg" 
          sx={{ marginLeft: 'auto' }} 
        /> 
      </Toolbar>
      </AppBar>
      </div>

  )
};

export default Navbar