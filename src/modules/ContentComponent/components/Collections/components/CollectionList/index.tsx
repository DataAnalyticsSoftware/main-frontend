import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../../../context/GenericContext'
import { IDataCollection } from './type'
import { CollectionContext } from '../../context/CollectionContext'


export const CollectionList = (): JSX.Element  => {

    const { webDataNetsRequest } = useContext(GenericContext)
    const { setIsEdit, setDataEdit, setOpenModal, openModal, search, setSearch } = useContext(CollectionContext)

    const [collections, setCollections] = useState<IDataCollection[]>([])

    useEffect(() => {
        if(!openModal && search)
            webDataNetsRequest('api/collection')
                .then((response: any) => setCollections(response))
                .finally(() => setSearch(false))
    }, [openModal, search])    

    const deleteCollection = (value: IDataCollection) => {
        webDataNetsRequest(`api/collection/${value.id}`,undefined,'DELETE').then(()=>setSearch(true))
    }

    return (
        <div style={{ display: 'flex', width:'100%',justifyContent:'space-evenly',flexFlow:'wrap' }}>  
            {
                collections?.map((value: IDataCollection) => {                   
                    return (
                        <>
                            <div className="flex justify-between gap-x-6 py-5" style={{display:'flex', justifyContent: 'space-between', gap:'20px'}} key={value.id}>
                                <div className="flex min-w-0 gap-x-4" style={{display: 'flex'}}>
                                    <div className='w-14 h-14 relative' style={{width: '50px',height: '50px', position:'relative'}}>
                                        <img className="w-14 h-14" style={{width: '50px',height: '50px'}} src="/folder.png" alt=""/>
                                    </div>
                                    <div className="min-w-0 flex-auto" style={{display: 'flex', flexDirection: 'column'}}>
                                        <span className="text-sm font-semibold leading-6 text-gray-900">{value.name}</span>
                                        <span className="mt-1 truncate text-xs leading-5 text-gray-500">{value.description || ''}</span>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end " style={{cursor: 'pointer'}} onClick={() => { setIsEdit(true); setDataEdit(value); setOpenModal(true)}}>
                                    <i className="bi bi-pencil-square"></i>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end " style={{cursor: 'pointer'}} onClick={() => {deleteCollection(value)}}>
                                    <i className="bi bi-trash-fill"></i>
                                </div>
                            </div>                                        
                        </>
                        )
                    })
                } 
        </div>)
}
