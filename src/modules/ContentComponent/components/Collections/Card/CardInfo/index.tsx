// Importa las librerías y componentes necesarios
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  DataGrid,
  GridColDef,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

// Componente principal
export const CardInfo = ({ dataCollection }: any) => {
  const [csvData, setCsvData] = useState<any>([]);
  const [data, setData] = useState(false);
  const [rows, setRows] = useState<any[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [tableOpen, setTableOpen] = useState(true);

  useEffect(() => {
    if (dataCollection && dataCollection.data) {
      var csv = Papa.unparse(dataCollection);
      const blob = new Blob([csv], { type: 'text/csv' });
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const csvText = event.target.result as string;
        Papa.parse(csvText, {
          complete: (result) => {
            setCsvData(result.data);
            const rows = result.data.map((row: any, index: any) => ({
              id: index,
              ...row,
            }));
            setRows(rows);
            setData(true);
          },
          header: true,
          dynamicTyping: true,
        });
      };
      reader.readAsText(blob);
    }
    setData(false);
  }, [dataCollection]);

  const handleToggleTable = () => {
    setTableOpen(!tableOpen);
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params: any, event: any) => {
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
    setRows((rows) => rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows((rows) => rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows((rows) => rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = csvData.length > 0 ? Object.keys(csvData[0]).map((key) => ({ field: key, editable: true })) : [];

  columns.push({
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 150,
    cellClassName: 'actions',
    getActions: ({ id }: any) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            key={`save_${id}`}
            icon={<SaveIcon />}
            label="Save"
            sx={{
              color: 'primary.main',
            }}
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            key={`cancel_${id}`}
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
        ];
      }

      return [
        <GridActionsCellItem
          key={`edit_${id}`}
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          key={`delete_${id}`}
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center" style={{ width: 'auto !important',flex: 1 }} mt={4} >
      <Typography mb={4} variant="h4">
        CSV Renderer
      </Typography>
      {tableOpen && csvData.length > 0 ? (
        <Paper style={{ height: 'auto'}}>
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
            rowModesModel={rowModesModel}
            columns={columns}
            checkboxSelection
            isCellEditable={() => true} // Todas las celdas son editables
            processRowUpdate={processRowUpdate}
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
