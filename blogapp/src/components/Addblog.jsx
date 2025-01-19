import React from 'react'
import { Button, TextField, Typography, Box } from '@mui/material'

const Addblog = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 500,
        margin: '20px auto', }} >   
      <Typography variant="h5" textAlign="center">
        Add New Blog
      </Typography>
      <TextField label="Blog Name" variant="outlined"/>
      <TextField label="Description" variant="outlined"/>
      <TextField label="Author Name" variant="outlined"/>
      <Button variant="contained" >Submit </Button>
    </Box>
  )
}

export default Addblog
