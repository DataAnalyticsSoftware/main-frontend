import React, { useContext } from 'react'
import { CSVContext } from '../../context/CSVContext'
import { InputValidation } from '../../../../../../../../components/InputValidation'
export const CSVForm = () => {
    const { handleDragOver,handleDrop, setName,setDescription,  success, setFileDropped,fileDropped, handleClickDrop } = useContext(CSVContext)
    
    return (
        <>
            <div style={{marginBottom: '50px'}}>
                <InputValidation onChange={setName} title={'Title'} text={'Please provide a Title.'} styles={"col-md-4 position-relative"} type={"text"} required={'yes'} tooltip={"invalid-tooltip"} isValid={"invalid-feedback"} submit={false} />
                <InputValidation onChange={setDescription} title={'Description'} text={''} styles={"col-md-6 position-relative mt-2"} type={"text"} required={'no'} tooltip={"valid-tooltip"} isValid={"valid-feedback"} submit={true}  />
            </div>
            <div className="form-group">
            <input type="file" onChange={handleClickDrop} id="selectedFile" style={{display: 'none'}} />
            {fileDropped?'':
            <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document?.getElementById('selectedFile')?.click()}
            style={{ width: '100%', height: '200px', border: '2px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center',  cursor: 'pointer' }}
          >
            <p>Arrastra y suelta un archivo CSV aquí o haz clic para seleccionar uno.</p>
        </div>}
         
        </div>
            {success && <span style={{color: 'green'}}>{success}</span>}
        </>
  )
}