import * as React from 'react';
import Button from '@mui/material/Button';
import { InputValidation } from '../../../../../../../components/InputValidation';
import { AddCollectionContext } from '../context';
import { useContext } from 'react'
import { useEffect } from 'react';
import { GenericContext } from '../../../../../../../context/GenericContext';
import { useState } from 'react';
import { CollectionContext } from '../../../context/CollectionContext';
import { ButtonDas } from '../../../../../../../components/ButtonDas';
import { Grid } from '@mui/material';

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
    <div > 
      <Grid>
      <p style={{fontWeight:600,fontSize:'20px',lineHeight:'24.2px'}}>Collection Title</p>
          <InputValidation onChange={setName} value={name} title={'Title'} text={'Please provide a Title.'} styles={ "position-relative"} type={"text"} required={'yes'} tooltip={"invalid-tooltip"} isValid={"invalid-feedback"} submit={false} />
          <InputValidation onChange={setDescription} value={description} title={'Description'} text={''} styles={" position-relative mt-5"} type={"text"} required={'no'} tooltip={"valid-tooltip"} isValid={"valid-feedback"} submit={true}  />
          
      </Grid>
      <Grid style={{marginTop: '10px'}}>
          <p style={{fontSize:'16px', fontWeight:700, lineHeight:'18px', marginTop:'42px'}}>List of data to relate to the collection</p>
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
          </Grid>
          <Grid style={{display:'flex', marginTop:'32px'}}>
            <ButtonDas style={{width:'50%', height:'47px', marginRight:'8px'}} variant="contained" text='Create' onClick={(value)=>{ handleFormSubmit(value); setName(''); setId(null); setOpenModal(false);} }>Create</ButtonDas>
            <ButtonDas style={{width:'50%', height:'47px'}} text='Cancel' variant="outlined" >Cancel</ButtonDas>
          </Grid>
    </div>
    
  )}