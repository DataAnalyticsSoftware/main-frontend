import React, { ChangeEventHandler, useContext, useEffect, useState } from 'react'
import { Button } from '../../../../components/Button'
import styles from './styles.module.scss'
import { GenericContext } from '../../../../context/GenericContext'
import { Stepper,Box, Typography, TextField, Grid, Paper,StepLabel,Step,IconButton } from '@mui/material';
import { MiniPricingComponent } from '../MiniPricingComponent';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom"


const steps = ['Step 1 of 2', 'Step 2 of 2'];

export const RegistrationComponent = () => {
  const navigate = useNavigate()


    const { setSignUp, setUserSignUpData } = useContext(GenericContext)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

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
    const isStepSkipped = (step: number) => {
      return skipped.has(step);
    };  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };  
    const handleSkip = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };  
    const handleReset = () => {
      setActiveStep(0);
    };
    console.log(activeStep);
    
 return (
  <div className={styles.bg} >  
    <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%'}}
        className='container'
      >
     
        <Paper style={{ padding: '10px',height:'600px', width: '600px', borderRadius:'25px' }}>
        <Box  className={styles.divRegistrationContainer} onSubmit={handleSubmit} >

          <Grid style={{justifyContent:'center'}} >
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => navigate('/', { replace: true })}
            >
              <CloseIcon />
            </IconButton>
            </Grid>
          <Grid item xs={12}>
          <Stepper activeStep={activeStep} style={{backgroundColor:'white', marginTop:'20px', marginLeft:'30px', marginRight:'30px'}}>
        {steps.map((label, index) => {
        const stepProps: { completed?: boolean } = {};
        const labelProps: {
          optional?: React.ReactNode;
        } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
      );
        })}
        </Stepper>  
          </Grid>
              
      </Box>
        <div><Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography></div>
          <Grid style={{ marginBottom:'16px'}} item xs={12} >
            <Typography variant="h5">CREATE ACCOUNT</Typography>
          </Grid>
          {activeStep === 0 ? <>
            <Grid item xs={12} style={{ marginBottom: '12px', paddingLeft:'80px', paddingRight:'80px' }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '12px',paddingLeft:'80px', paddingRight:'80px' }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '24px',paddingLeft:'80px', paddingRight:'80px' }}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '8px' }}>
            <Typography variant="h6">Or</Typography>
          </Grid>
          <Grid style={{marginBottom:'42px'}} item xs={12}>
            <Typography variant="h5">Sign Up with Google</Typography>
          </Grid>
          </> : 
          <div className='container' style={{paddingLeft:'80px', paddingRight:'80px'}}>
            <MiniPricingComponent price={'50'} title={'STANDARD'} description={'get this awesome pack'} link={'/PricingInfo'}/>
            <MiniPricingComponent price={'150'} title={'PRO'} description={'get this awesome pack'} link={'/PricingInfo'}/>
            <MiniPricingComponent price={'250'} title={'BUSINESS'} description={'get this awesome pack'} link={'/PricingInfo'}/>
            <MiniPricingComponent price={'Free'} title={'BUSINESS'} description={'get this awesome pack'} link={'/PricingInfo'}/>
          </div>}
          
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button label={'Reset'} onClick={handleReset}/>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>     
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, paddingLeft:'80px', paddingRight:'80px' }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={activeStep === 0 ?()=>{}:handleBack}
                  sx={{ mr: 1 }}
                  label={'Back'}/>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button label={activeStep === steps.length - 1 ? 'Finish' : 'Next'}  
                onClick={steps.length - 1 ? handleNext:handleSubmit }/>
              </Box>
            </React.Fragment>
            )}
        </Paper>
      </Grid> 
  </div>
  );
};

{/*
<Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%' }}
        className='container'
      >
        <Paper style={{ padding: '20px',height:'600px', width: '600px', borderRadius:'25px' }}>
        <div style={{marginTop:'24px', marginBottom:'16px'}}>hola</div>
          <Grid style={{ marginBottom:'42px'}} item xs={12} >
            <Typography variant="h5">CREATE ACCOUNT</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '20px', paddingLeft:'80px', paddingRight:'80px' }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '20px',paddingLeft:'80px', paddingRight:'80px' }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '48px',paddingLeft:'80px', paddingRight:'80px' }}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid  style={{ color:'white'}}  item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit} label={'Sign Up'}/>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '20px' }}>
            <Typography variant="h6">Or</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Sign Up with Google</Typography>
          </Grid>
        </Paper>
      </Grid> */}