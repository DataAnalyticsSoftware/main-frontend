import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../context/GenericContext'
import Modal  from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { CardInfo } from './components/CardInfo'
import TableDataContextProvider from './context/TableDataContext'
import { EditIconDas } from '../../../../components/SvgDas'
import { CustomPaginationDas } from '../../../../components/PaginationDas'

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
        { field: '', headerName: 'Actions', renderCell: (value) => <button  style={{backgroundColor:'rgba(79, 70, 229, 0.14)',borderRadius:'12px', color:'rgba(79, 70, 229, 1)'}} onClick={() => handleOpen(value.id as string)} type="button" className="btn" data-toggle="modal" data-target={`#exampleModal-${value.id}`} ><EditIconDas /></button>}
      ]
      
    //TODO: Pasar a constantes el sx
    return  (
        <>
            <div className='datagrid' style={{ width: '100%', backgroundColor:'white'  }}>
                <Box sx={{
                    '& .css-1iyq7zh-MuiDataGrid-columnHeaders': {
                        backgroundColor: '#EEEEEE',
                    },
                    '& .css-t89xny-MuiDataGrid-columnHeaderTitle':{
                        fontWeight:600,
                        fontSize:16,
                        lineHeight:24
                    }
                  }}>
                  <DataGrid 
                      rows={data} columns={columns} initialState={{
                      pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
                      slots={{ pagination: CustomPaginationDas }}
                      checkboxSelection />
                </Box>
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}>
                    <>
                        <TableDataContextProvider>
                            <CardInfo dataId={dataId} closeModal={() => setOpen(false)}/>
                        </TableDataContextProvider>
                    </>
            </Modal>
        </>
    )
}