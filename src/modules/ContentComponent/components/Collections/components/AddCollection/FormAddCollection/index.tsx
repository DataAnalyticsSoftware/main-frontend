import * as React from 'react';
import Button from '@mui/material/Button';
import { InputValidation } from '../../../../../../../components/InputValidation';
import { AddCollectionContext } from '../context';
import { useContext } from 'react'
import { useEffect } from 'react';
import { GenericContext } from '../../../../../../../context/GenericContext';
import { useState } from 'react';
import { CollectionContext } from '../../../context/CollectionContext';

export default function FormCollection() {
  const { setName, setDescription, handleFormSubmit, dataSelected, setDataSelected, setId, name, description } = useContext(AddCollectionContext)
  const { isEdit, dataEdit , setOpenModal } = useContext(CollectionContext)
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

  useEffect(() => {
    setName(dataEdit?.name || '')
    setId(dataEdit?.id || '')
    setDataSelected(dataEdit?.data_information.map(x=> x.id) || [])
  }, [isEdit, dataEdit])

  
  return (
    <div> 
        <form onSubmit={(value)=>{ handleFormSubmit(value); setName(''); setId(null); setOpenModal(false);} }>
          <h2>Collection Title</h2>
          <InputValidation onChange={setName} value={name} title={'Title'} text={'Please provide a Title.'} styles={"col-md-4 position-relative"} type={"text"} required={'yes'} tooltip={"invalid-tooltip"} isValid={"invalid-feedback"} submit={false} />
          <h3 className='mt-5'>Collection Description</h3>
          <InputValidation onChange={setDescription} value={description} title={'Description'} text={''} styles={"col-md-6 position-relative mt-2"} type={"text"} required={'no'} tooltip={"valid-tooltip"} isValid={"valid-feedback"} submit={true}  />
          <div style={{marginTop: '10px'}}>
          LISTA DE DATA PARA RELACIONAR CON LA COLECCION:
          {
            dataList.map(value => 
              <div className="form-check">
                <input className="form-check-input" onChange={() => dataSelection(value.id)} type="checkbox" checked={dataSelected.includes(value.id)} id="flexCheckDefault"/>
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