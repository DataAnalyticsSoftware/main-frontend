import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormCollection from './FormAddCollection';
import { CollectionContext } from '../../context/CollectionContext';
import { ButtonDas } from '../../../../../../components/ButtonDas';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height:671,
    borderRadius:12
  }

export const AddCollection = () => {
    const { openModal, setOpenModal } = useContext(CollectionContext)
    const { setIsEdit, setDataEdit } = useContext(CollectionContext)
    return (
        <div className='container text-left '>
            <ButtonDas  onClick={() => setOpenModal(true)} variant="contained" text={`Add Collection`}><AddCircleOutlineIcon /></ButtonDas>
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