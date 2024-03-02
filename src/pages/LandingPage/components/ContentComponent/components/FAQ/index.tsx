import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { GenericContext } from '../../../../../../context/GenericContext';

interface IQuestions {
  title: string
  question: string
  answer: string
  type: number
  cardinality: 0
}

export const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1')
  const [questions, setQuestions] = useState<IQuestions[]>([])
  const { webDataNetsRequest } = useContext(GenericContext)

  useEffect(() => {
    webDataNetsRequest('api/questions/1').then(res => setQuestions(res))
  }, [])

  const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ borderRadius: '5px', border: '1px solid rgba(0, 0, 0, 0.125)', overflow: 'hidden' }}>
      <Typography variant='h5'>FREQUENTLY ASK<Typography sx={{color:'#fe5b05', pb:4}} variant="h4"> QUESTIONS</Typography></Typography>
      {questions.map((questions:IQuestions, index: number) =>
        <Accordion
        key={index}
        expanded={expanded === `panel${index+1}`}
        onChange={handleChange(`panel${index+1}`)}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.125)' }}
        >
          <AccordionSummary aria-controls={`panel${index+1}d-content`} id={`panel${index+1}d-header`}>
            <Typography>{questions.question}</Typography>
            <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {questions.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};
