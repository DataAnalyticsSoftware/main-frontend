import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../context/GenericContext'
import Modal  from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { CardInfo } from './components/CardInfo'
import TableDataContextProvider from './context/TableDataContext'

export const DataManagement = () => {
    const { webDataNetsRequest } = useContext(GenericContext)
    const [data, setData] = useState<any[]>([])
    const [open, setOpen] = useState<boolean>(false)
    const [dataId, setDataId] = useState<string>('')
    useEffect(() => {
        webDataNetsRequest('api/data_information').then(res => setData(res))
    }, [])


    const handleOpen = (data_id: string) => {
        setDataId(data_id)
        setOpen(true)
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Data Name', flex: 0.3, minWidth: 160 },
        { field: 'description', headerName: 'Description', flex: 1, minWidth: 160},
        { field: '', headerName: 'Actions', renderCell: (value) => <button onClick={() => handleOpen(value.id as string)} type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal-${value.id}`} >Edit</button>}
      ]


    return  (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                style={{backgroundColor:'white'}}>
                    <Box>
                        <TableDataContextProvider>
                            <CardInfo dataId={dataId}/>
                        </TableDataContextProvider>
                    </Box>
            </Modal>
        </>
    )
}