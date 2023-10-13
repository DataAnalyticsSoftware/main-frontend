import React, { useContext } from 'react'
import { CSVContext } from '../../context/CSVContext'


export const CSVTable = () : JSX.Element=> {
  const { csvData, handleCancelImport } = useContext(CSVContext)
  if(csvData.length === 0) return <></>
   return (
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
      )
}