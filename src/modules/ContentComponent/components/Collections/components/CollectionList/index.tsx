import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../../../context/GenericContext'
import { IDataCollection } from './type'
import { CollectionContext } from '../../context/CollectionContext'
import { Grid } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
                        <div style={{margin:'10px'}}>
                            <div className="flex justify-between gap-x-6 py-5" style={{display:'flex',alignItems:'center', justifyContent: 'center', gap:'20px',borderRadius:'12px', backgroundColor:'#ECECEC', width:'266px', height:'61px'}} key={value.id}>
                                <Grid container className="flex min-w-0 gap-x-4" style={{display: 'flex', textAlign:'center'}}>
                                    <Grid item xs={3}>
                                        <div className='w-14 h-14 relative' style={{width: '43px',height: '43px', position:'relative', marginLeft:'22px'}}>
                                            <img className="w-14 h-14" style={{width: '43px',height: '43px'}} src="/folder.png" alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="min-w-0 flex-auto" style={{display: 'flex', flexDirection: 'column', height:'33px'}}>
                                            <span style={{fontSize:'14px', fontWeight:600}} >{value.name}</span>
                                            <span style={{fontSize:'10px'}} className="mt-1">Date</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3} style={{display:'flex', flexDirection:'column'}}>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end " style={{cursor: 'pointer'}} onClick={() => { setIsEdit(true); setDataEdit(value); setOpenModal(true)}}>
                                                <i className="bi bi-pencil-square"></i>
                                               
                                        </div>
                                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end " style={{cursor: 'pointer'}} onClick={() => {deleteCollection(value)}}>
                                            <i className="bi bi-trash-fill"></i>
                                        </div>
                                    </Grid>
                                       
                                   { /*<Grid item xs={1}>
                                    <button type="button" style={{boxShadow:'none'}} className="btn position-relative mr-4" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                        <div style={{backgroundColor:'red', width:'50px'}} className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end " style={{cursor: 'pointer', display:'flex'}} onClick={() => { setIsEdit(true); setDataEdit(value); setOpenModal(true)}}>
                                                <i className="bi bi-pencil-square"></i>
                                                <p style={{marginTop:'-4px', marginLeft:'4px'}}>Edit Collection</p>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end " style={{cursor: 'pointer'}} onClick={() => {deleteCollection(value)}}>
                                                <i className="bi bi-trash-fill">Delete Collection</i>
                                            </div>
                                        </div>
                                        </button>
                    </Grid>*/}
                                </Grid>

                            </div>                                        
                        </div>
                        )
                    })
                } 
        </div>)
}

