import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../../context/GenericContext';
import { CardInfo } from './CardInfo';

export const Card = ()  => {
   // const { data, setIdDataCollection, getIdCollection, token, setDataCollection, webDataNetsRequest } = useContext(GenericContext)
    const { webDataNetsRequest } = useContext(GenericContext)
    const [dataCollection, setDataCollection] = useState<any>(null)
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        webDataNetsRequest('api/data_information')
            .then((response: any) => setData(response))
    }, [])

    const callCollection = (id: string) => {
        setDataCollection([])
        webDataNetsRequest(`api/data/${id}`)
            .then((response: any) => setDataCollection(response) )
    }

    return (
        <div style={{ display: 'flex', width:'100%',justifyContent:'space-evenly',flexFlow:'wrap', maxHeight:'750px', overflow:'scroll' }}>           
            {
                data?.map(value => {                   
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
                                            <CardInfo dataCollection={dataCollection}/>
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