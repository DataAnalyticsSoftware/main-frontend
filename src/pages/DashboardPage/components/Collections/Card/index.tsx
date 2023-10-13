import React, { useContext } from 'react'
import { GenericContext } from '../../../../../context/GenericContext';
import { CardInfo } from './CardInfo';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'; 


export const Card = ()  => {
    const { data, setIdDataCollection, getIdCollection, token, setDataCollection } = useContext(GenericContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = (value: any) => {
        setOpen(true);
        callCollection(value)
    }
    const handleClose = () => setOpen(false);
    const callCollection = async (props: any) => {
        setIdDataCollection(props)
        setDataCollection([])
        try {
        const response = fetch(`http://79.143.94.15:8001/api/data/${props}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al realizar la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setDataCollection(data);
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
    } catch (error) {
        console.error('Error en la solicitud POST al backend:', error);
    }       
    }

    return (
        <div style={{ display: 'flex', width:'100%',justifyContent:'space-evenly',flexFlow:'wrap', maxHeight:'750px', overflow:'scroll' }}>           
            {
                data.map(value => {                   
                    return (
                        <>
                            <div className='mr-5 mb-4'
                                style={{ height: '300px', width: '250px', backgroundColor: 'red', borderRadius: '15px', textAlign: 'center', }} >
                                <h2 className='mt-2'>{value.id}</h2>
                                <img  />
                                <hr ></hr>
                                <button onClick={() => handleOpen(value.id)} type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal-${value.id}`} >Edit</button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="parent-modal-title"
                                            aria-describedby="parent-modal-description"
                                            style={{backgroundColor:'white'}}
                                                >
                                            <Box sx={{width: 400 }}>
                                            <CardInfo/>
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