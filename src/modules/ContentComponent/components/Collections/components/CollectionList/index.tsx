import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../../../context/GenericContext'
import { IDataCollection } from './type'
import { CollectionContext } from '../../context/CollectionContext'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { CardDas } from '../../../../../../components/CardDas'
import { CardInsideDas } from '../../../../../../components/CardInsideDas'
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { EmptyFolderIcon, FolderIconDAS } from '../../../../../../components/SvgDas'
import styles from './styles.module.scss'
import moment from 'moment';

export const CollectionList = (): JSX.Element  => {

    const { webDataNetsRequest, handleToast } = useContext(GenericContext)
    const { setIsEdit, setDataEdit, setOpenModal, openModal, search, setSearch } = useContext(CollectionContext)

    const [collections, setCollections] = useState<IDataCollection[]>([])
    const [ open, setOpen ] = useState<boolean>(false)
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)
    const [ dataSelected, setDataSelected ] = useState<IDataCollection | null>(null)

    useEffect(() => {
        if(!openModal && search)
            webDataNetsRequest('api/collection')
                .then((response: any) => setCollections(response))
                .finally(() => setSearch(false))
    }, [openModal, search])    

    const deleteCollection = () => {
        if(!dataSelected) return
        webDataNetsRequest(`api/collection/${dataSelected?.id}`,undefined,'DELETE').then(()=>{handleToast('Collection deleted succesfully.'); setSearch(true)})
    }
    const editCollection = () => {
        if(!dataSelected) return
        setIsEdit(true)
        setDataEdit(dataSelected)
        setOpenModal(true)
    }
    const openOptions = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(true)
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
        setAnchorEl(null)
    }


    const options = [{name: 'Edit', function: editCollection }, {name: 'Delete', function: deleteCollection}]

    return (
        <CardDas>
            <>
                <div style={{display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap'}}>
                    {collections?.map((value: IDataCollection, index: number) => {                   
                        return (
                            <CardInsideDas key={index}>
                                <div style={{display: 'flex', flexDirection: 'row', width: '266px'}}>
                                    <div style={{display: 'flex', flexDirection: 'row', gap: '10px', width:'100%', overflow:'hidden', textOverflow: 'ellipsis'}}>
                                        <div><FolderIconDAS/></div>
                                        <div style={{display: 'flex', flexDirection: 'column', gap: '4px', width: '181px'}}>
                                            <span className={styles.folder_title}>{value.name}</span>
                                            <span className={styles.folder_subtitle}>{value.description} / {moment(value.created).format('MMMM Do YYYY')}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <IconButton onClick={(event)  => {setDataSelected(value); openOptions(event)}} >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
                                            {options?.map((option) => (
                                                <MenuItem key={option.name} onClick={() =>{option.function(); handleClose()}}>
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </div>
                                </div>
                            </CardInsideDas>
                            )
                        })
                    }
                </div>
                {!collections.length && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <EmptyFolderIcon/>
                        <span>There is no collections created yet.</span>
                    </div>
                </div>}
            </>
        </CardDas>)
}