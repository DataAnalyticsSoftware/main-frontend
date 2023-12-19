import React, { useContext, useEffect } from 'react'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormCollection from './FormAddCollection';
import { CollectionContext } from '../../context/CollectionContext';
import { ButtonDas } from '../../../../../../components/ButtonDas';
import styles from './styles.module.scss'
import { PlusIconDAS } from '../../../../../../components/SvgDas';

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
    const { openModal, setOpenModal } = useContext(CollectionContext)
    const { setIsEdit, setDataEdit } = useContext(CollectionContext)

    useEffect(() => {
        if(!openModal){
            setDataEdit(null)
            setIsEdit(false)
        }
    }, [openModal])

    return (
        <div>
            <ButtonDas customClass={styles.button}  onClick={() => setOpenModal(true)} variant="contained" text={`Add Collection`} endIcon={<PlusIconDAS/>} />
            <Modal
                open={openModal}
                onClose={()=>{setDataEdit(null); setIsEdit(false); setOpenModal(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <FormCollection/>
                </Box>
            </Modal>
        </div>
    )
}