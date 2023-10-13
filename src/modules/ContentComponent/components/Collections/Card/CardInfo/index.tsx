import React, { useContext, useEffect, useState } from 'react'
import Papa from 'papaparse'
import { GenericContext } from '../../../../../../context/GenericContext';

export const CardInfo = ({dataCollection}: any) => {
  const [csvData, setCsvData] = useState<any>([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    if (dataCollection && dataCollection.data ) {
      // Transforma los datos de dataCollection.data en un formato que Papaparse puede procesar.
      var csv = Papa.unparse(dataCollection);
      // Crea un objeto Blob a partir de la cadena CSV.
      const blob = new Blob([csv], { type: 'text/csv' });
      // Utiliza FileReader para leer el Blob y pasárselo a Papaparse.
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

  return (
    <div className="container mt-4" >
      <h1>CSV Renderer</h1>
      {data ? (
        csvData.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                {Object.keys(csvData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row: any, rowIndex: any) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value: any, colIndex: any) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
      ) : (
        'No hay datos para mostrar.'
      )}
    </div>
  );
};
