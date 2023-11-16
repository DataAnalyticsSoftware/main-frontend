import React, { useContext, useEffect, useState } from 'react'
import Papa from 'papaparse'
import { GenericContext } from '../../../../../../context/GenericContext';
import { Typography, Paper, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';

import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomId
} from '@mui/x-data-grid-generator';

export const CardInfo = ({ dataCollection }: any, { valueName }: any) => {
  const [csvData, setCsvData] = useState<any>([]);
  const [data, setData] = useState(false);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const [tableOpen, setTableOpen] = React.useState(true);

  useEffect(() => {
    if (dataCollection && dataCollection.data ) {
      var csv = Papa.unparse(dataCollection);
      const blob = new Blob([csv], { type: 'text/csv' });
      const reader = new FileReader();
      reader.onload = (event:any) => {
        const csvText = event.target.result as string;
        
        Papa.parse(csvText, {
          complete: (result) => {
            setCsvData(result.data);
            setData(true);
          },
          header: true,
          dynamicTyping: true,
        });
      };
      reader.readAsText(blob);
    }
    setData(false)
  }, [dataCollection]);


  const handleToggleTable = () => {
    setTableOpen(!tableOpen);
  };

  const columns: GridColDef[] = csvData.length > 0 ? Object.keys(csvData[0]).map((key) => ({ field: key })) : [];
  const rows = csvData.map((row: any, index: any) => ({ id: index, ...row }));
  const [newRows, setRows] = React.useState(rows);

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row:any) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row:any) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row:any) => row.id !== id));
    }
  };
  
  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row:any) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}
function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}
  // Añadir una única columna de acciones
columns.push({
  field: 'actions',
  headerName: 'Actions',
  width: 150,  // ajusta el ancho según tus necesidades
  renderCell: ({ id }) => {
    const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    if (isInEditMode) {
      return (
        <>
          <GridActionsCellItem
            icon={<SaveIcon />}
            label="Save"
            sx={{
              color: 'primary.main',
            }}
            onClick={handleSaveClick(id)}
          />
          <GridActionsCellItem
            icon={<CloseIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            color="inherit"
          />
        </>
      );
    }

    return (
      <>
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />
      </>
    );
  },
});

  return (
    <Box display="flex" flexDirection="column" alignItems="center" style={{ width: 'auto !important' }} mt={4}>
      <Typography mb={4} variant="h4">
        CSV Renderer
      </Typography>
      {tableOpen && csvData.length > 0 ? (
        <Paper style={{ height: 400, width: '100%' }}>
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
            editMode="row"
            onRowEditStop={handleRowEditStop}
            onRowModesModelChange={handleRowModesModelChange}
            rows={rows}
            columns={columns}
            checkboxSelection
            isCellEditable={(params) => true}
            processRowUpdate={processRowUpdate}
            slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
          />
        </Paper>
      ) : (
        <Typography variant="body1">No hay datos para mostrar.</Typography>
      )}
    </Box>
  );
};
