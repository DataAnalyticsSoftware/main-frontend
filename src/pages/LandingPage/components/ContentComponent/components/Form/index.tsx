import React, { useContext, useState } from 'react'
import { GenericContext } from '../../../../../../context/GenericContext'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Button } from '@mui/material'
import styles from './styles.module.scss'
import { IQuestions, questions } from './questions'

export const Form=()=> {

  const [email, setEmail] = useState<string | null>(null)
  const [comment, setComment] = useState<string | null>(null)
  const [responses, setResponses] = useState<any[]>(Array(questions.length).fill(null))

  const { webDataNetsRequest } = useContext(GenericContext)

  const handleSubmit = () =>{
    const data = {
      email: email || 'unknown',
      comment: comment,
      responses: responses
    }
    webDataNetsRequest('api/submit_form',JSON.stringify(data), 'POST')
  }

  const handleResponse = (index: number, value: React.ChangeEvent<HTMLInputElement>) => {
    const newResponses = [...responses]
    newResponses[index] = value.target.value
    setResponses(newResponses)
  }

  return (
    <>
      <h1 style={{fontWeight:700, paddingTop:20}} id='demo'>GET <span style={{color:'#fe5b05'}}> THE DEMO</span></h1>
      <div style={{ backgroundColor: '#F3F3F3', padding: '60px 10px', textAlign: 'left'}}>
        <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <div>
          <TextField
              label="Email"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              defaultValue={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(event.target.value)}
          />
        </div>

        {questions.map((value: IQuestions, index: number)=>
          <div key={index}>
            <label id={`question${index}`}>{value.question}</label>
            <RadioGroup
              row
              aria-labelledby={`question${index}`}
              name={`question${index}`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleResponse(index, event)}
            >
              {value.answers.map((answer: string, index: number) =>
                <FormControlLabel key={index} value={index} control={<Radio sx={{'&.Mui-checked':{color: '#FF5A05'}}} />} label={answer} />
              )}
            </RadioGroup>
          </div>
        )}
      </div>
        <Button className={styles.buttonResponse} variant='contained' onClick={handleSubmit}>Send Response</Button>
    </div>
    </>
    
  )
}