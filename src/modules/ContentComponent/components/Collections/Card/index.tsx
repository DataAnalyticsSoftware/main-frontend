import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../../context/GenericContext'


export const Card = ()  => {

    const { webDataNetsRequest } = useContext(GenericContext)

    const [collections, setCollections] = useState<any[]>([])

    useEffect(() => {
        webDataNetsRequest('api/collection')
            .then((response: any) => setCollections(response))
    }, [])    

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
