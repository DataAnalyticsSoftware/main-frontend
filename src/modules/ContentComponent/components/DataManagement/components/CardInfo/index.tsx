// Importa las librerías y componentes necesarios
import React, { useContext, useEffect, useState } from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  DataGrid,
  GridRowEditStopReasons,
  GridRowModel,
  GridRowModesModel,
  GridEventListener,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { GenericContext } from '../../../../../../context/GenericContext';
import { getData } from '../../../../../../services/DataManagementService';
import { ButtonTable } from '../ButtonTable';
import { TableDataContext } from '../../context/TableDataContext';
import { CustomPaginationDas } from '../../../../../../components/PaginationDas';

// Componente principal
export const CardInfo = ({ dataId, closeModal }: any) => {

  const { webDataNetsRequest } = useContext(GenericContext)
  const { rowsEdited, setRowsEdited, rowIdToSave, setRowIdToSave } = useContext(TableDataContext)
  const [ dataCollection, setDataCollection ] = useState<any>(null)
  const [ rowModesModel, setRowModesModel ] = useState<GridRowModesModel>({})
  const [ tableOpen, setTableOpen ] = useState(true)
  const [ paginationModel, setPaginationModel]  = useState<GridPaginationModel>({ pageSize: 10, page: 0 })
  const [ IsLoading, setIsLoading ] = useState<boolean>(true)
  const [ rowCountState, setRowCountState ] = useState<number>(0)
  const [ columns, setColumns ] = useState<any[]>([])

  //TODO: WTF too much logic, pass all this code to a custom hook and do a simply refactor

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
      lastColumns(response?.headers?.map((key: string) => ({ field: key, editable: true, height: '94px'  })))
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
      height: '94px',
      cellClassName: 'actions',
      renderCell: (params: any) => <ButtonTable id={params.id}/> 
    }
    setColumns([...dataColumns, lastColumnsToAdd])
  }

  //TODO: Pasar el sx a constantes y styles a un scss

  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      {tableOpen && columns.length > 0 ? (
        <Paper sx={{borderRadius: '12px !important'}}>
          <DataGrid
            sx={{
                '& .css-1iyq7zh-MuiDataGrid-columnHeaders': {
                  backgroundColor: '#F5F5F5',
                  borderRadius: '12px 12px 0px 0px'
                },
                '& .css-t89xny-MuiDataGrid-columnHeaderTitle':{
                    fontWeight:600,
                    fontSize:16
                },
                maxHeight: 'calc( 100dvh - 40px )',
                maxWidth: 'calc( 100dvw - 400px )'
            }}
            rowHeight={70}
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
            slotProps={{ toolbar: { setDataCollection, setRowModesModel } }}
            rowCount={rowCountState}
            loading={IsLoading}
            paginationMode="server"
            pageSizeOptions={[5]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            slots={{ pagination: (props) => <CustomPaginationDas {...props} cancelButton closeModal={closeModal} /> }}
          />
        </Paper>
      ) : (
        <Typography variant="body1">No hay datos para mostrar.</Typography>
      )}
    </div>
  );
};
