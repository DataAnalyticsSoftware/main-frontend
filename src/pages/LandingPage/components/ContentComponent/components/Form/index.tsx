import React, { useContext, useState } from 'react'
import { GenericContext } from '../../../../../../context/GenericContext'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Button } from '@mui/material'
import styles from './styles.module.scss'
import { IQuestions, questions } from './questions'
import InfoIcon from '@mui/icons-material/Info';

export const Form=()=> {

  const [email, setEmail] = useState<string | null>(null)
  const [comment, setComment] = useState<string | null>(null)
  const [responses, setResponses] = useState<any[]>(Array(questions.length).fill(null))
  const [formComplete, setFormComplete ] = useState<boolean>(Boolean(localStorage.getItem('submissionSuccessful')) || false)
  const { t, webDataNetsRequest } = useContext(GenericContext)

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

  const handleResponse = (index: number, value: React.ChangeEvent<HTMLInputElement>) => {
    const newResponses = [...responses]
    newResponses[index] = value.target.value
    setResponses(newResponses)
  }

  return (
    <>
      <h1 style={{fontWeight:700, paddingTop:20}} id='demo'>GET <span style={{color:'#fe5b05'}}> THE DEMO</span></h1>
      {formComplete ? <div style={{ backgroundColor: '#F3F3F3', padding: '60px 10px', textAlign: 'center'}}>
        {t("questions.final-message")}
      </div> :
      <div style={{ backgroundColor: '#F3F3F3', padding: '60px 10px', textAlign: 'left'}}>
        <div className={styles.formDas} style={{alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <TextField
              label="Email"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '100%' }}
              defaultValue={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(event.target.value)}
          />
          <label style={{color: 'blue', fontSize: 15, textAlign:'center'}}><InfoIcon style={{fontSize: 15}} />{t('get-demo.title')}</label>
        </div>

        {questions.map((value: IQuestions, index: number)=>
          <div key={index}>
            <label id={`question${index}`}>{t(`questions.${index}`)}</label>
            <RadioGroup
              row
              aria-labelledby={`question${index}`}
              name={`question${index}`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleResponse(index, event)}
            >
              {value.answers.map((answer: string, indexAnswer: number) =>
                <FormControlLabel key={indexAnswer} value={indexAnswer} control={<Radio sx={{'&.Mui-checked':{color: '#FF5A05'}}} />} label={t(`posible-answers.${index+1}-${indexAnswer+1}`)} />
              )}
            </RadioGroup>
          </div>
        )}
      </div>
      <div style={{width: '100%', textAlign: 'center'}}><Button className={styles.buttonResponse} variant='contained' onClick={handleSubmit}>{t('questions.send-response')}</Button></div>
    </div>}
    </>
  )
}