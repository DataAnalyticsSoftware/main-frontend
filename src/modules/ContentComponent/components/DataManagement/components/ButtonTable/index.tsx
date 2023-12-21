import { GridActionsCellItem } from '@mui/x-data-grid'
import React, { useState, useContext, useEffect } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { TableDataContext } from '../../context/TableDataContext';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Box } from '@mui/material';
import { DeleteIcoDas, EditIconDas } from '../../../../../../components/SvgDas';

export const ButtonTable = ({id}: any) => {
    const { rowsEdited, setRowsEdited, setRowIdToSave } = useContext(TableDataContext)
    const [save, setSave] = useState<boolean>(false)
    
    useEffect(() =>{
        setSave(rowsEdited.includes(Number(id)))
    }, [rowsEdited])

    

    return (
            <>
            {save && <>
            <Box style={{backgroundColor:'rgba(79, 70, 229, 0.14)', marginRight:'4px', borderRadius:'12px'}}>
             <GridActionsCellItem
                key={`save_${id}`}
                icon={<SaveIcon />}
                label="Save"
                style={{padding:'8px', color:'rgba(79, 70, 229, 1)'}}
                sx={{
                    color: 'primary.main',
                }}
                onClick={() => {setSave(false);setRowsEdited(rowsEdited.filter(x=> x !== Number(id))); setRowIdToSave(id)}}
                />
            </Box>
            <Box style={{backgroundColor:'rgba(236,98,66,0.14)', borderRadius:'12px'}}>
                <GridActionsCellItem
                    key={`cancel_${id}`}
                    icon={<CancelIcon />}
                    label="Cancel"
                    className="textPrimary"
                    style={{padding:'8px', color:'#EC6242'}}
                    onClick={() =>  {setSave(false); setRowsEdited(rowsEdited.filter(x=> x !== Number(id)))}}
                    color="inherit"
                /> 
            </Box>
            </>}
            {!save && <>
            <Box style={{backgroundColor:'rgba(79, 70, 229, 0.14)', marginRight:'4px', borderRadius:'12px'}}>
                <GridActionsCellItem
                        key={`edit_${id}`}
                        icon={<EditIconDas />}
                        label="Edit"
                        className="textPrimary"
                        style={{padding:'8px', color:'rgba(79, 70, 229, 1)'}}
                        onClick={() => {setSave(true); setRowsEdited([...rowsEdited, Number(id)])}}
                        color="inherit"
                    />
            </Box>
            <Box style={{backgroundColor:'rgba(236,98,66,0.14)', borderRadius:'12px'}}>
                <GridActionsCellItem
                    key={`delete_${id}`}
                    icon={<DeleteIcoDas />}
                    label="Delete"
                    style={{padding:'8px', color:'#EC6242'}}
                    onClick={() => console.log('delete')}
                    color="inherit"
                />
            </Box>

            </>
            }
            </>)
}