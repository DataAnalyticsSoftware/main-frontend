import * as React from 'react';
import Button from '@mui/material/Button';
import { InputValidation } from '../../../../../components/InputValidation';
import { AddCollectionContext } from '../context';

export default function FormCollection() {
  const {setName,setDescription, handleFormSubmit } = React.useContext(AddCollectionContext)

  return (
    <div> 
        <form onSubmit={handleFormSubmit}>
          <h2>Collection Title</h2>
          <InputValidation onChange={setName} title={'Title'} text={'Please provide a Title.'} styles={"col-md-4 position-relative"} type={"text"} required={'yes'} tooltip={"invalid-tooltip"} isValid={"invalid-feedback"} submit={false} />
          <h3 className='mt-5'>Collection Description</h3>
          <InputValidation onChange={setDescription} title={'Description'} text={''} styles={"col-md-6 position-relative mt-2"} type={"text"} required={'no'} tooltip={"valid-tooltip"} isValid={"valid-feedback"} submit={true}  />
          <Button variant="contained" type='submit' className='container text-rigth mt-3' >Create</Button>
        </form>
    </div>
    
  )}