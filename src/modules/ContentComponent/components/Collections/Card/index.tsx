import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../../context/GenericContext';
import { CardInfo } from './CardInfo';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'; 


export const Card = ()  => {
   // const { data, setIdDataCollection, getIdCollection, token, setDataCollection, webDataNetsRequest } = useContext(GenericContext)
    const { webDataNetsRequest } = useContext(GenericContext)
    const [dataCollection, setDataCollection] = useState<any>(null)
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        webDataNetsRequest('api/data_information')
            .then((response: any) => setData(response))
    }, [])
    const callCollection = (id: string) => {
        setDataCollection([])
        webDataNetsRequest(`api/data/${id}`)
            .then((response: any) => setDataCollection(response))        
    }
    const handleOpen = (value: any) => {
        setOpen(true);
        callCollection(value)
    }
    const handleClose = () => setOpen(false);
    return (
        <div key={Math.random()}  style={{ display: 'flex', width:'100%',justifyContent:'space-evenly',flexFlow:'wrap', maxHeight:'750px', overflow:'scroll' }}>           
            {
                data?.map(value => { 
                    return (
                        <>
                            <div key={value.id} className='mr-5 mb-4'
                                style={{ height: '300px', width: '250px', backgroundColor: 'red', borderRadius: '15px', textAlign: 'center', }} >
                                <h2 className='mt-2'>{value.name}</h2>
                                <img  />
                                <hr ></hr>
                                <button onClick={() => handleOpen(value.id)} type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal-${value.id}`} >Edit</button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="parent-modal-title"
                                            aria-describedby="parent-modal-description"
                                            style={{ backgroundColor: 'white' }}
                                            sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' } }}
                                                >
                                            <Box sx={{width: 'auto', height:'auto', backgroundColor:'white' }}>
                                                <CardInfo dataCollection={dataCollection} valueName={value.name} />
                                            </Box>
                                        </Modal>
                            </div>                                        
                        </>
                    )
                    }) 
            }    
        </div>
    )
}