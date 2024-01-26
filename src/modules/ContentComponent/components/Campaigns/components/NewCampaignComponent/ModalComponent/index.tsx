import React, { ChangeEventHandler, useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Stepper,Box, Typography, TextField, Grid, Paper,StepLabel,Step,IconButton, MenuItem, Select, SelectChangeEvent, InputLabel, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom"
import { GenericContext } from '../../../../../../../context/GenericContext';
import { Button } from '../../../../../../../components/Button';


const steps = ['Step 1 of 2', 'Step 2 of 2'];

export const ModalComponent = () => {
  const navigate = useNavigate()


    const { setSignUp, setUserSignUpData } = useContext(GenericContext)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const handleSubmit= () => {
    }
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
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };
    
 return (
  <div className={styles.bg} style={{marginTop:'48px'}} >  
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

          <Grid style={{ marginBottom:'16px'}} item xs={12} >
            <div style={{textAlign:'center', marginTop:'16px'}}><Typography variant="h5">Create a new Campaign</Typography></div>
          </Grid>
          {activeStep === 0 ? <>
        <Grid item xs={12} style={{ marginBottom: '12px', paddingLeft:'80px', paddingRight:'80px' }}>
            <Typography variant="subtitle1">Select your Data</Typography>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120, width:'100%' }}>
                <InputLabel id="demo-simple-select-filled-label">Data</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Contacts</MenuItem>
                    <MenuItem value={20}>MadridContacts</MenuItem>
                    <MenuItem value={30}>PerrosdeEspaña</MenuItem>
                </Select>
            </FormControl>
            <Typography variant="subtitle1">Type of Campaign</Typography>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120, width:'100%' }}>
                <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Retargeting</MenuItem>
                    <MenuItem value={20}>Look a Like</MenuItem>
                    <MenuItem value={30}>Leads</MenuItem>
                </Select>
            </FormControl>
        </Grid>
          </> : 
          <div className='container' style={{paddingLeft:'80px', paddingRight:'80px'}}>
           hola
          </div>}
          
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed
              </Typography>
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
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext }/>
              </Box>
            </React.Fragment>
            )}
        </Paper>
      </Grid> 
  </div>
  );
};
