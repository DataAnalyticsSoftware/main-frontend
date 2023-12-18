import React, { useContext } from 'react'
import { CSVContext } from '../../context/CSVContext'
import { ButtonDas } from '../../../../../../../../components/ButtonDas'


export const CSVTable = () : JSX.Element=> {
  const { csvData, handleCancelImport,handleFormSubmit } = useContext(CSVContext)
  if(csvData.length === 0) return <></>
   return (
        <div>
          
          {/**<table className="table table-striped table-responsive" style={{ height: '500px' }}>
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
                  </table>**/}
          <div className="d-flex justify-content-first mt-2">
          <ButtonDas onClick={handleFormSubmit} pricing={false}  style={{width: '130px', height: '47px',borderRadius:'0px !Important', marginRight:'12px'}} text={'Push CSV'} />
          <ButtonDas onClick={handleCancelImport} pricing={false} variant='outlined'  style={{width: '130px', height: '47px',borderRadius:'0px !Important'}} text={'Cancel Import'} />
          </div>
        </div>
      )
}