import React, { useContext } from 'react'
import { CSVContext } from '../../context/CSVContext'
export const CSVForm = () => {
    const { error, handleFileChange, setName, success } = useContext(CSVContext)
    return (
        <>
            <div style={{marginBottom: '50px'}}>
                <label htmlFor="">Name:</label><br />
                <input type="text" placeholder='Set a name to the file' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                <br />
                {error && <span style={{color:'red'}}>{error}</span>}
            </div>
            <div className="form-group">
                <input type="file" className="form-control-file" accept=".csv" onChange={handleFileChange} />
            </div>
            {success && <span style={{color: 'green'}}>{success}</span>}
        </>
  )
}