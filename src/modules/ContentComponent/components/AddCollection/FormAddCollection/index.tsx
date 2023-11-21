import * as React from 'react';
import Button from '@mui/material/Button';
import { InputValidation } from '../../../../../components/InputValidation';
import { AddCollectionContext } from '../context';
import { useContext } from 'react'
import { useEffect } from 'react';
import { GenericContext } from '../../../../../context/GenericContext';
import { useState } from 'react';

export default function FormCollection() {
  const {setName,setDescription, handleFormSubmit, dataSelected, setDataSelected } = useContext(AddCollectionContext)
  const { webDataNetsRequest } = useContext(GenericContext)
  const [dataList, setDataList] = useState<any[]>([])
  useEffect(() => {
    webDataNetsRequest('api/data_information')
      .then((response: any) => setDataList(response))
  }, [])

  const dataSelection = (id: number) => {
    if(dataSelected.includes(id))
      setDataSelected(dataSelected.filter((x: any)=> x !== id))
    else
      setDataSelected([...dataSelected, id])
  }

  return (
    <div> 
        <form onSubmit={handleFormSubmit}>
          <h2>Collection Title</h2>
          <InputValidation onChange={setName} title={'Title'} text={'Please provide a Title.'} styles={"col-md-4 position-relative"} type={"text"} required={'yes'} tooltip={"invalid-tooltip"} isValid={"invalid-feedback"} submit={false} />
          <h3 className='mt-5'>Collection Description</h3>
          <InputValidation onChange={setDescription} title={'Description'} text={''} styles={"col-md-6 position-relative mt-2"} type={"text"} required={'no'} tooltip={"valid-tooltip"} isValid={"valid-feedback"} submit={true}  />
          <div style={{marginTop: '10px'}}>
          LISTA DE DATA PARA RELACIONAR CON LA COLECCION:
          {
            dataList.map(value => 
              <div className="form-check">
                <input className="form-check-input" onChange={() => dataSelection(value.id)} type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" form="flexCheckDefault">
                    {value.name}
                </label>
              </div>
              )
          }
          </div>
          <Button variant="contained" type='submit' className='container text-rigth mt-3' >Create</Button>
        </form>
    </div>
    
  )}