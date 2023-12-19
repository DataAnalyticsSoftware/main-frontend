import React, { useContext } from 'react'
import { CSVContext } from '../../context/CSVContext'
import { ButtonDas } from '../../../../../../../../components/ButtonDas'


export const CSVTable = () : JSX.Element=> {
  const { csvData, name,  handleFormSubmit } = useContext(CSVContext)
   return (
        <div>
            <ButtonDas onClick={handleFormSubmit} disabled={!name || csvData.length === 0}  style={{width: '130px', height: '47px',borderRadius:'0px !Important', marginRight:'12px'}} text={'Continue'} />
        </div>
      )
}