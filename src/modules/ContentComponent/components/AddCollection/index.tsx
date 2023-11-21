import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DashboardContext } from '../../../../pages/DashboardPage/context/DashboardContext';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormCollection from './FormAddCollection';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const AddCollection = () => {
    const { modalCreateCollection,setModalCreateCollection } = useContext(DashboardContext)
    const handleOpen = () => setModalCreateCollection(true);
    
    return (
        <div className='container text-left '>
            <Button variant="contained" endIcon={<AddCircleOutlineIcon />} onClick={handleOpen}>
                Add Collection
            </Button>
            <Modal
                open={modalCreateCollection}
                onClose={()=>setModalCreateCollection(false)}
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