import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

const Home = () => {
  const [Data, setData] = useState([])

  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setData(res.data))
      
  }, []);

  return (
    <div>
        <br /><br /><br />
        <h4>Blog Application</h4>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            
            {Data.map((post) => (
              <TableRow >
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
