import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormCollection from './FormAddCollection';
import { CollectionContext } from '../../context/CollectionContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

export const AddCollection = () => {
    const { openModal, setOpenModal } = useContext(CollectionContext)
    const { setIsEdit, setDataEdit } = useContext(CollectionContext)
    return (
        <div className='container text-left '>
            <Button variant="contained" endIcon={<AddCircleOutlineIcon />} onClick={() => setOpenModal(true)}>
                Add Collection
            </Button>
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