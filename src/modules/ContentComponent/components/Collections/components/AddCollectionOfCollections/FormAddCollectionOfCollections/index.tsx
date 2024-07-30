import * as React from 'react';
import Button from '@mui/material/Button';
import { AddCollectionContext } from '../context';
import { useContext } from 'react'
import { useEffect } from 'react';
import { GenericContext } from '../../../../../../../context/GenericContext';
import { useState } from 'react';
import { CollectionContext } from '../../../context/CollectionContext';
import { ButtonDas } from '../../../../../../../components/ButtonDas';
import { Checkbox, Grid } from '@mui/material';
import { InputTextDas } from '../../../../../../../components/InputTextDas';
import styles from './styles.module.scss'

export default function FormCollectionofCollections() {
  const { setName, setDescription, handleFormSubmit, dataSelected, setDataSelected, setId, name, description } = useContext(AddCollectionContext)
  const { isEdit, dataEdit , setOpenModal } = useContext(CollectionContext)
  const { webDataNetsRequest, handleToast } = useContext(GenericContext)
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
    setDescription(dataEdit?.description || '')
    setId(dataEdit?.id || '')
    setDataSelected(dataEdit?.data_information.map(x=> x.id) || [])
  }, [isEdit, dataEdit])

  
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', gap: '54px'}}>
        <span className={styles.modal_title}>Collection of Collections Title</span>
          <div style={{display: 'flex', flexDirection: 'column', gap: '50px', width: '100%'}}>
            <InputTextDas style={{width: '100%'}} handlerOnChange={setName} value={name} label={'Title'} type={"text"} required/>
            <InputTextDas style={{width: '100%'}} handlerOnChange={setDescription} value={description} label={'Description'}  />
            <div style={{width: '100%'}}>
              <span className={styles.modal_subtitle}>List of data to relate to the collection</span>
              <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '20px', marginTop: '24px', height: '207px', overflow: 'auto'}}>
                {
                  dataList.map((value: any, index: number) => 
                    <div key={index} style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '12px'}}>
                      <Checkbox sx={{padding: 0}} checked={dataSelected.includes(value.id)} onChange={() => dataSelection(value.id)} size="small"/>
                      <span style={{width: '100%'}}>{value.name}</span>
                    </div>)
                }
              </div>
            </div>
          </div>
      </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '13px', width: '100%'}}>
            <ButtonDas style={{ height:'47px', width: '100%'}} variant="contained" text='Create' disabled={!name || name.trim() === ''} onClick={(value)=>{ handleFormSubmit(value); setName(''); setId(null); setOpenModal(false);} }/>
            <ButtonDas style={{height:'47px', width: '100%'}} text='Cancel' variant="outlined" onClick={() => { setOpenModal(false) }} />
        </div>
    </div>
  )}