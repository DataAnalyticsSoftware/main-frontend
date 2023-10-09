import React, { useContext, useState } from 'react';
import Papa from 'papaparse';
import { GenericContext } from '../../../../../../context/GenericContext';

export const CardInfo = () => {
  const [csvData, setCsvData] = useState<any>([]);
  const [file, setFile] = useState<any>(null);
const { dataCollection } = useContext(GenericContext)

  const handleFileChange = (event:any) => {
    const selectedFile = dataCollection[0];
    setFile(selectedFile);

    Papa.parse(selectedFile, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
        complete: (result) => {
          console.log(result.data);
        // Transform the Papaparse result into your desired format
        const formattedData = result.data.map((row:any) => ({
          id: row.id, // Assuming the "id" column exists in the CSV
          headers: row.headers.split(','), // Split headers into an array
        }));
        setCsvData(formattedData);
      },
    });
  };

  return (
    <div>
      <h1>CSV Renderer</h1>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      {csvData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Headers</th>
            </tr>
          </thead>
          <tbody>
            {csvData.map((row:any, rowIndex:any) => (
              <tr key={rowIndex}>
                <td>{row.id}</td>
                <td>{row.headers.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
