import React, { ChangeEventHandler, useContext, useState } from 'react'
import { Button } from '../../../../components/Button'
import style from './styles.module.scss'
import { GenericContext } from '../../../../context/GenericContext'
import { Modal, Typography, TextField, Grid, Paper } from '@mui/material';


export const RegistrationModal = ({ open, handleClose }) => {

    const { setSignUp, setUserSignUpData } = useContext(GenericContext)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit= () => {
        setSignUp(true)
        setUserSignUpData({name:name,password:password, email: email})
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
 return (
    <Modal onSubmit={handleSubmit} open={open} onClose={handleClose}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%' }}
      >
        <Paper style={{ padding: '20px', width: '300px' }}>
          <Grid item xs={12}>
            <Typography variant="h5">Log In</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '20px' }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '20px' }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '20px' }}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Log In
            </Button>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '20px' }}>
            <Typography variant="h6">Or</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Sign Up with Google</Typography>
          </Grid>
        </Paper>
      </Grid>
    </Modal>
  );
};