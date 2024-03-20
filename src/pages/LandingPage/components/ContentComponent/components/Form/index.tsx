import React, { useContext, useState } from 'react'
import { GenericContext } from '../../../../../../context/GenericContext'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Button, MobileStepper } from '@mui/material'
import styles from './styles.module.scss'
import { IQuestions, questions } from './questions'
import InfoIcon from '@mui/icons-material/Info'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

export const Form=()=> {

  const [email, setEmail] = useState<string | null>(null)
  const [comment, setComment] = useState<string | null>(null)
  const [responses, setResponses] = useState<any[]>(Array(questions.length).fill(null))
  const [formComplete, setFormComplete ] = useState<boolean>(Boolean(localStorage.getItem('submissionSuccessful')) || false)
  const [activeStep, setActiveStep] = useState<number>(0)
  const { t, webDataNetsRequest } = useContext(GenericContext)

  const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleSubmit = () =>{
    if(!email && responses.filter(x=>x).length === 0) return
    const data = {
      email: email || 'unknown',
      comment: comment,
      responses: responses
    }
    webDataNetsRequest('api/submit_form',JSON.stringify(data), 'POST').then(() =>{
      localStorage.setItem('submissionSuccessful','true')
      setFormComplete(true)
    })
  }

  const handleNext = () => {
    if(activeStep === 1 && responses[activeStep-1] !== '0'){
      let newResponses = [...responses]
      newResponses[1] = null
      setResponses(newResponses)
      setActiveStep((prevActiveStep) => prevActiveStep + 2);
    }else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if(activeStep === 3 && responses[0] !== '0')
      setActiveStep((prevActiveStep) => prevActiveStep - 2);
    else
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleResponse = (index: number, value: React.ChangeEvent<HTMLInputElement>) => {
    const newResponses = [...responses]
    newResponses[index] = value.target.value
    setResponses(newResponses)
  }

  const comprobateStep = (actualStep: number) => {
    if(!actualStep) return !!email && email.trim() !== '' && email.toLowerCase().match(regexEmail)
    return !!responses[actualStep-1]
  }

  return (
    <>
      <h1 style={{fontWeight:700, paddingTop:20, paddingBottom:20}} id='demo'>{t('get-demo.header')} <span style={{color:'#fe5b05'}}> {t('get-demo.subheader')}</span></h1>
      {formComplete ? <div style={{ backgroundColor: '#F3F3F3', padding: '60px 10px', textAlign: 'center'}}>
        {t("questions.final-message")}
      </div> :
      <div style={{ backgroundColor: '#F3F3F3', padding: '60px 40px', textAlign: 'left', borderRadius:10}}>
        <div className={styles.formDas} style={{alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center'}}>
        {activeStep === 0 && <div style={{display: 'flex', flexDirection: 'column'}}>
          <TextField
              label="Email"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '100%' }}
              defaultValue={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(event.target.value)}
          />
          <label style={{color: 'blue', fontSize: 15, textAlign:'center'}}><InfoIcon style={{fontSize: 15}} />{t('get-demo.title')}</label>
        </div>}
        {activeStep > 0 && <div>
            <label id={`question${activeStep-1}`}>{t(`questions.${activeStep-1}`)}</label>
            <RadioGroup
              sx={{justifyContent:'center'}}
              row
              aria-labelledby={`question${activeStep-1}`}
              name={`question${activeStep-1}`}
              value={responses[activeStep-1]}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleResponse(activeStep-1, event)}
            >
              {questions[activeStep-1].answers.map((answer: string, indexAnswer: number) =>
                <FormControlLabel key={indexAnswer} value={indexAnswer} control={<Radio sx={{'&.Mui-checked':{color: '#FF5A05'}}} />} label={t(`posible-answers.${activeStep}-${indexAnswer+1}`)} />
              )}
            </RadioGroup>
          </div>}
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '20px'}}>
        <MobileStepper
          variant="progress"
          steps={questions.length+1}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1, bgcolor: '#F3F3F3' }}
          nextButton={
           <> {activeStep !== questions.length ? <Button size="small" onClick={handleNext} disabled={!comprobateStep(activeStep)}>
              Next <KeyboardArrowRight />
            </Button> :
            <Button size="small" onClick={handleSubmit} disabled={!comprobateStep(activeStep)}>
              Finish
            </Button>
            }</>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    </div>}
    </>
  )
}