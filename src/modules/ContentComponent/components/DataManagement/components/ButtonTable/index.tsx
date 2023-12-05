import { GridActionsCellItem } from '@mui/x-data-grid'
import React, { useState, useContext, useEffect } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { TableDataContext } from '../../context/TableDataContext';

export const ButtonTable = ({id}: any) => {
    const { rowsEdited, setRowsEdited, setRowIdToSave } = useContext(TableDataContext)
    const [save, setSave] = useState<boolean>(false)
    
    useEffect(() =>{
        setSave(rowsEdited.includes(Number(id)))
    }, [rowsEdited])

    

    return (
            <>
            {save && <>
             <GridActionsCellItem
                key={`save_${id}`}
                icon={<SaveIcon />}
                label="Save"
                sx={{
                    color: 'primary.main',
                }}
                onClick={() => {setSave(false);setRowsEdited(rowsEdited.filter(x=> x !== Number(id))); setRowIdToSave(id)}}
                />
                <GridActionsCellItem
                    key={`cancel_${id}`}
                    icon={<CancelIcon />}
                    label="Cancel"
                    className="textPrimary"
                    onClick={() =>  {setSave(false); setRowsEdited(rowsEdited.filter(x=> x !== Number(id)))}}
                    color="inherit"
                /> 
            </>}
            {!save && <>
                <GridActionsCellItem
                    key={`edit_${id}`}
                    icon={<EditIcon />}
                    label="Edit"
                    className="textPrimary"
                    onClick={() => {setSave(true); setRowsEdited([...rowsEdited, Number(id)])}}
                    color="inherit"
                />,
                <GridActionsCellItem
                    key={`delete_${id}`}
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => console.log('delete')}
                    color="inherit"
                />
            </>
            }
            </>)
}