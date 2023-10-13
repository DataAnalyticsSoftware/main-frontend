import React, { useContext, useEffect, useState,useCallback  } from 'react';
import Papa, { ParseResult } from 'papaparse';
import { GenericContext } from '../../../context/GenericContext';
import { InputValidation } from '../../../components/InputValidation';

interface CSVData {
  [key: string]: string;
}
interface FileDropZoneProps {
  onFileDrop: (file: File) => void;
}
const CSVViewer: React.FC<FileDropZoneProps> = ({ onFileDrop }) => {
  const [csvData, setCsvData] = useState<CSVData[]>([]);
  const [csvHeaders, setCsvHeaders ] = useState<string[] | undefined>([])
  const { token, setHasFetchedData }: any = useContext(GenericContext)  
  const [formSubmit, setFormSubmit] = useState(false);
  const [title, setTitle] = useState<any>('Default');
  const [description, setDescription] = useState<any>('');

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (file) {
        Papa.parse(file, {
        complete: (result: ParseResult<CSVData>) => {
          setCsvHeaders(result.meta.fields)
          setCsvData(result.data);
        },
        header: true,
        dynamicTyping: true,
      })
        onFileDrop(file);
      }
    },
    [onFileDrop]
  );
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormSubmit(true);   
    const dataToSend = {
      name: title,
      headers: csvHeaders,
      data: csvData,
      description:description
    }
    try {
      const response = await fetch('http://79.143.94.15:8001/api/data', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + token
        },
        body: JSON.stringify(dataToSend),
      })

      if (response.ok) {
        // El CSV se ha enviado correctamente al backend
        console.log('CSV enviado al backend con éxito');
      } else {
        // Maneja el caso de error
        console.error('Error al enviar el CSV al backend');
      }
    } catch (error) {
      console.error('Error en la solicitud POST al backend:', error);
    }
    setHasFetchedData(false)
  }
  const handleTitleChange= (newTitle: string) => {
    setTitle(newTitle);  
  };
  const handleDescriptionChange= (newDescription: string) => {
    setDescription(newDescription);
  };
  const handleCancelImport = () => {
    setCsvData([])
    setCsvHeaders([])
  };
    const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-4 needs-validation">
      <form onSubmit={handleFormSubmit}>
        {csvData.length > 0 ?null:<div className="form-group">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
            width: '100%',
            height: '200px',
            border: '2px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            
          }}
          >
            <p>Arrastra y suelta un archivo CSV aquí o haz clic para seleccionar uno.</p>
        </div>
        </div>}
        {csvData.length > 0 && (                  
          <div>
            <InputValidation onChange={handleTitleChange} title={'Title'} text={'Please provide a Title.'} styles={"col-md-4 position-relative"} type={"text"} required={'yes'} tooltip={"invalid-tooltip"} isValid={"invalid-feedback"} submit={formSubmit?false:null} />
            <InputValidation onChange={handleDescriptionChange} title={'Description'} text={''} styles={"col-md-6 position-relative mt-2"} type={"text"} required={'no'} tooltip={"valid-tooltip"} isValid={"valid-feedback"} submit={formSubmit?true:null}  />
            <table className="table table-striped table-responsive" style={{ height: '380px' }}>
              <thead>
                <tr>
                  {Object.keys(csvData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-end float-right mt-2">
              <button type="submit" className="btn btn-primary">
                Enviar CSV al servidor
              </button>
              <button type="button" className="btn btn-secondary ml-2" onClick={handleCancelImport}>
                Cancelar Importación
              </button>
              </div>
          
          </div>
        )}
      </form>
    </div>
  );
};

export default CSVViewer;
