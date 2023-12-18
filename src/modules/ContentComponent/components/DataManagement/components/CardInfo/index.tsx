// Importa las librerías y componentes necesarios
import React, { useContext, useEffect, useState } from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  DataGrid,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridEventListener,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { GenericContext } from '../../../../../../context/GenericContext';
import { getData } from '../../../../../../services/DataManagementService';
import { ButtonTable } from '../ButtonTable';
import { TableDataContext } from '../../context/TableDataContext';

// Componente principal
export const CardInfo = ({ dataId }: any) => {

  const { webDataNetsRequest } = useContext(GenericContext)
  const { rowsEdited, setRowsEdited, rowIdToSave, setRowIdToSave } = useContext(TableDataContext)
  const [dataCollection, setDataCollection] = useState<any>(null)
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
  const [tableOpen, setTableOpen] = useState(true)
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ pageSize: 10, page: 0 })
  const [ IsLoading, setIsLoading ] = useState<boolean>(true)
  const [ rowCountState, setRowCountState ] = useState<number>(0)
  const [ columns, setColumns ] = useState<any[]>([])

  useEffect(() => {
    setDataCollection([])
    setColumns([])
    setRowModesModel({})
    setRowsEdited([])
    setRowIdToSave(null)
    const dataToSend = {
      page: paginationModel.page,
      limit: paginationModel.pageSize
    }
    getData(webDataNetsRequest, dataId, dataToSend).then((response: any) => {
      setDataCollection(response?.data)
      setRowCountState(response?.total_pages || 0)
      lastColumns(response?.headers?.map((key: string) => ({ field: key, editable: true })))
    }).finally(() => setIsLoading(false))
  },[paginationModel])

  const handleToggleTable = () => {
    setTableOpen(!tableOpen)
  }

  useEffect(()=>{
    let newRowModesModel: any
    rowsEdited.forEach(value => {
      newRowModesModel = {...newRowModesModel, [`${value}`]: {mode: 'edit'} }
    })

    Object.keys(rowModesModel).map(value => Number(value)).filter(x => !rowsEdited.includes(x)).forEach(value => {
      newRowModesModel = {...newRowModesModel, [`${value}`]: {mode: 'view'} }
    })
    setRowModesModel(newRowModesModel || {})
  }, [rowsEdited])

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params: any, event: any) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  }

  
  const processRowUpdate = (newRow: GridRowModel) => {
    if(newRow.id === rowIdToSave){
      let dataToSend = {
          id_to_modify: newRow.id,
          data_to_modify: newRow
      }
      webDataNetsRequest(`api/data/${dataId}`, JSON.stringify(dataToSend), 'PUT')
        .then(res => console.log(res))
        .catch(res => console.log(res))
        .finally(() => { setRowIdToSave(null); setPaginationModel({...paginationModel})} )
    }

    const updatedRow = { ...newRow, isNew: false };
    setDataCollection((dataCollection: any) => dataCollection.map((dataCollection: any) => (dataCollection.id === newRow.id ? updatedRow : dataCollection)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel)
    setRowsEdited(Object.keys(newRowModesModel).map(value => Number(value)))
  }

  const lastColumns = (dataColumns: any[]) => {
    const lastColumnsToAdd = {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      cellClassName: 'actions',
      renderCell: (params: any) => <ButtonTable id={params.id}/> 
    }
    setColumns([...dataColumns, lastColumnsToAdd])
  }

  

  return (
    <Box display="flex" flexDirection="column" alignItems="center" style={{position:'absolute',top:'17%', left:'43%', textAlign:'center',justifyContent:'center', borderRadius:'22px'}}  >
      {tableOpen && columns.length > 0 ? (
        <Paper style={{ height: 'auto', borderRadius:'22px'}}>
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleToggleTable}
            style={{ position: 'absolute', right: '8px', top: '8px' }}
          >
            <CloseIcon />
          </IconButton>
          <DataGrid
            sx={{
              '& .css-1iyq7zh-MuiDataGrid-columnHeaders': {
                backgroundColor: '#EEEEEE',
            },
            '& .css-t89xny-MuiDataGrid-columnHeaderTitle':{
                fontWeight:600,
                fontSize:16,
                lineHeight:24
            }
            }}
            style={{border:'none'}}
            editMode="row"
            onRowEditStop={handleRowEditStop}
            onRowModesModelChange={handleRowModesModelChange}
            rows={dataCollection}
            rowModesModel={rowModesModel}
            columns={columns}
            checkboxSelection
            isCellEditable={() => true}
            processRowUpdate={processRowUpdate}
            slotProps={{
              toolbar: { setDataCollection, setRowModesModel },
            }}
            rowCount={rowCountState}
            loading={IsLoading}
            paginationMode="server"
            pageSizeOptions={[5]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Paper>
      ) : (
        <Typography variant="body1">No hay datos para mostrar.</Typography>
      )}
    </Box>
  );
};
