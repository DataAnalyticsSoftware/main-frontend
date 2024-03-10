import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import { Accordion, AccordionDetails, Typography } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { GenericContext } from '../../../../../../context/GenericContext';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import styles from './styles.module.scss'
import RemoveIcon from '@mui/icons-material/Remove';

interface IQuestions {
  title: string
  question: string
  answer: string
  type: number
  cardinality: 0
}

export const FAQ = () => {
  const [questions, setQuestions] = useState<IQuestions[]>([])
  const [expand, setExpand] = useState<boolean[]>([])
  const { webDataNetsRequest } = useContext(GenericContext)

  useEffect(() => {
    webDataNetsRequest('api/questions/1').then(res =>{
      setQuestions(res)
      setExpand(Array(res.length).fill(false))
      })
  }, [])

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(0)',
    }
  }));

  const handleExpand = (index: number) => {
    let newExpand = [...expand]
    newExpand[index] = !newExpand[index]
    setExpand(newExpand)
  }

  const iconExpanded = (index: number) => {
    return <div style={{backgroundColor: `${!expand[index] ? '#0000001A' : '#FF5A05' }`, width: '50px', height: '50px', borderTopRightRadius: '10px', borderBottomRightRadius: `${!expand[index]?'10px': '0'}`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {!expand[index] ? <AddIcon/> : <RemoveIcon style={{color: 'white'}}/>}
            </div>
  }


  return (
    <div style={{ borderRadius: '5px', overflow: 'hidden', paddingTop:36 }}>
      <h2 style={{fontWeight:700}}>FREQUENTLY ASK<span style={{color:'#fe5b05'}}> QUESTIONS</span></h2>
      {questions.map((questions:IQuestions, index: number) =>
        <Accordion
        key={index}
        expanded={expand[index]}
        onChange={() => handleExpand(index)}
        className={styles.customAccordion}
        sx={{ p: '0 !important', border: '1px solid black' }}
        >
          <AccordionSummary
            expandIcon={iconExpanded(index)}
            aria-controls={`panel${index+1}d-content`}
            id={`panel${index+1}d-header`}>
            <Typography>{questions.question}</Typography>
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
