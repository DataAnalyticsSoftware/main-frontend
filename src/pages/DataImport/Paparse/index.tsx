import React, { useContext, useState } from 'react';
import Papa, { ParseResult } from 'papaparse';
import { GenericContext } from '../../../context/GenericContext';

interface CSVData {
  [key: string]: string;
}

const CSVViewer: React.FC = () => {
  const [csvData, setCsvData] = useState<CSVData[]>([]);
  const [csvHeaders, setCsvHeaders ] = useState<string[] | undefined>([])
  const { token,setHasFetchedData }: any = useContext(GenericContext)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result: ParseResult<CSVData>) => {
          setCsvHeaders(result.meta.fields)
          setCsvData(result.data);
        },
        header: true,
        dynamicTyping: true,
      })
    }
  }

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const dataToSend = {
      name: 'Default',
      headers: csvHeaders,
      data: csvData

    }
    try {
      // Envía los datos CSV al servidor (aquí debes implementar la lógica para enviar los datos al backend)
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

  const handleCancelImport = () => {
    // Limpia los datos CSV y la tabla
    setCsvData([])
    setCsvHeaders([])
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input type="file" className="form-control-file" accept=".csv" onChange={handleFileChange} />
        </div>
        {csvData.length > 0 && (
          <div>
            <table className="table table-striped table-responsive" style={{ height: '500px' }}>
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
