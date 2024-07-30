import React, { useContext, useEffect } from 'react'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { CollectionContext } from '../../context/CollectionContext';
import { ButtonDas } from '../../../../../../components/ButtonDas';
import styles from './styles.module.scss'
import { PlusIconDAS } from '../../../../../../components/SvgDas';
import FormCollectionofCollections from './FormAddCollectionOfCollections';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    height:671,
    width: 405,
    padding: '30px 24px',
    borderRadius: '20px'
  }

export const AddCollection = () => {
    const { openModal, setOpenModal, setIsEdit, setDataEdit, colOfCollections } = useContext(CollectionContext)

    useEffect(() => {
        if(!openModal){
            setDataEdit(null)
            setIsEdit(false)
        }
    }, [openModal])

    return (
        <div>
            {colOfCollections===0?
            <ButtonDas customClass={styles.button}  onClick={() => setOpenModal(true)} variant="contained" text={`Add Collection of Collections`} endIcon={<PlusIconDAS/>} />
            :<ButtonDas customClass={styles.button}  onClick={() => setOpenModal(true)} variant="contained" text={`Add Collection`} endIcon={<PlusIconDAS/>} />
            }
            <Modal
                open={openModal}
                onClose={()=>{setDataEdit(null); setIsEdit(false); setOpenModal(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <FormCollectionofCollections/>
                </Box>
            </Modal>
        </div>
    )
}