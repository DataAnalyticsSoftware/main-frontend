import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormCollection() {
  return (
    <div>
      <h2>Collection Title</h2>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <h3 className='mt-5'>Collection Description</h3>
      <TextField
          fullWidth 
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={6}
          defaultValue="Default Value"
          className='mt-3'
        />
        <Button variant="contained" className='container text-rigth mt-3' >Create</Button>
    </div>
    
  )}