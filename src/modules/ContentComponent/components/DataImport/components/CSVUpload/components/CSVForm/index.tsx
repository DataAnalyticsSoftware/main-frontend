import React, { useContext } from 'react'
import { CSVContext } from '../../context/CSVContext'
import { InputTextDas } from '../../../../../../../../components/InputTextDas'
import { CSVSvg, CSVSvgCheck } from '../CSVSvg'
export const CSVForm = () => {
    const { handleDragOver, handleDrop, setName, setDescription,  fileDropped, handleClickDrop, fileName, description, name } = useContext(CSVContext)


    return (
        <>
            <div style={{marginBottom: '50px', width: '780px', display:'flex', justifyContent:'left', flexDirection: 'row', paddingTop:'32px', gap:'20px'}}>
                <div style={{width: '100%'}}>
                    <InputTextDas value={name} handlerOnChange={setName} label={'Title'} type={"text"} required />
                </div>
                <div style={{width: '100%'}}>
                    <InputTextDas value={description} handlerOnChange={setDescription} label={'Description'} type={"text"} />
                </div>
            </div>
            <div className="form-group">
            <input type="file" onChange={handleClickDrop} id="selectedFile" style={{display: 'none'}} />
            <div onDrop={handleDrop} onDragOver={handleDragOver} onClick={() => document?.getElementById('selectedFile')?.click()} 
                style={{ width: '100%', height: '242px', border: '2px dashed #D7D7D7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',  cursor: 'pointer', flexDirection: 'column' }} >
                <p>{fileDropped ? <CSVSvgCheck/>: <CSVSvg/>}</p>
                {fileDropped && <p>{`${fileName } was upload succesfully.`}</p>}
            </div>
         
            </div>
        </>
  )
}