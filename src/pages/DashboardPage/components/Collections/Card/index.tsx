import React, { useContext } from 'react'
import { GenericContext } from '../../../../../context/GenericContext';
import { CardInfo } from './CardInfo';

export const Card = ()  => {
    const { data, setIdDataCollection, getIdCollection, token,setDataCollection } = useContext(GenericContext)
    const callCollection = async (props: any) => {
        setIdDataCollection(props)
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
                                <button onClick={()=>callCollection(value.id)} type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal-${value.id}`} >Edit</button>                                
                                <div className="modal fade" id={`exampleModal-${value.id}`} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                                    
                                        </div>
                                            <div className="modal-body">
                                            <CardInfo/>
                                        </div>
                                                
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>                                        
                        </>
                    )
                }) 
            }    
        </div>
    )
}