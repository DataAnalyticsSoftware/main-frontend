import React, { useContext } from 'react'
import { GenericContext } from '../../../../../context/GenericContext';
import { CardInfo } from './CardInfo';

export const Card = ()  => {
    const { data, setIdDataCollection, getIdCollection, token,setDataCollection } = useContext(GenericContext)
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
                                <button onClick={() => callCollection(value.id)} type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal-${value.id}`} >Edit</button>

                                <div className="modal fade" id={`exampleModal-${value.id}`} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <CardInfo/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
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