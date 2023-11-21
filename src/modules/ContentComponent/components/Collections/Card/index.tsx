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
    const [collections, setCollections] = useState<any[]>([])
    useEffect(() => {
        webDataNetsRequest('api/collection')
            .then((response: any) => setCollections(response))
    }, [])

    const handleOpen = (value: any) => {
        setOpen(true);
        callCollection(value)
    }
    const handleClose = () => setOpen(false)

    const callCollection = (id: string) => {
        setDataCollection([])
        webDataNetsRequest(`api/data/${id}`)
            .then((response: any) => {
                console.log(response,'response');   
                setDataCollection(response) 
            })
    }
/**
 * <button onClick={() => handleOpen(value.id)} type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal-${value.id}`} >Edit</button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="parent-modal-title"
                                            aria-describedby="parent-modal-description"
                                            style={{backgroundColor:'white'}}
                                                >
                                            <Box sx={{width: 400 }}>
                                                <CardInfo dataCollection={dataCollection}/>
                                            </Box>
                                        </Modal>
 */
    return (
        <div style={{ display: 'flex', width:'100%',justifyContent:'space-evenly',flexFlow:'wrap' }}>  
            {
                collections?.map(value => {                   
                    return (
                        <>
                            <div className="flex justify-between gap-x-6 py-5" style={{display:'flex', justifyContent: 'space-between', gap:'20px'}}>
                                <div className="flex min-w-0 gap-x-4" style={{display: 'flex'}}>
                                    <div className='w-14 h-14 relative' style={{width: '50px',height: '50px', position:'relative'}}>
                                        <img className="w-14 h-14" style={{width: '50px',height: '50px'}} src="/folder.png" alt=""/>
                                    </div>
                                    <div className="min-w-0 flex-auto" style={{display: 'flex', flexDirection: 'column'}}>
                                        <span className="text-sm font-semibold leading-6 text-gray-900">{value.name}</span>
                                        <span className="mt-1 truncate text-xs leading-5 text-gray-500">descripcion</span>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <i className="bi bi-pencil-square"></i>
                                </div>
                            </div>                                        
                        </>
                        )
                    })
                } 
        </div>)
}
