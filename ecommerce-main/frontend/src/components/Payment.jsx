import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
const Payment = () => {
  return (
    <div>
       <Box
           sx={{
             display: 'flex',
             flexDirection: 'column',
             maxWidth: 500,
             margin: '20px auto',
           }}
         >
            <TextField id="outlined-basic" label="Card No:" variant="outlined" />
            <TextField id="outlined-basic" label="Pin" variant="outlined" /> 
            <br />
            <Link to ="/cart" >
            <Button align='centre' variant="contained">Order</Button>
            </Link>
           
      </Box>
    </div>
  )
}

export default Payment