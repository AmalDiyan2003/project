import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div> 
       <br />
       <br />
        
          <AppBar>
              <Toolbar>
                  
                  <h4>BLOGAPP</h4> &nbsp;
                  
                   <Link to='/'>
                      <Button variant="contained">Home</Button>
                  </Link>
                  &nbsp; &nbsp;
                  <Link to='/add'>
                      <Button variant="contained">BlogLInk</Button>
                  </Link>

                 </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar
