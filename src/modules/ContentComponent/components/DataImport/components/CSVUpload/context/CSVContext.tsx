import React, { createContext, useContext, useEffect, useState } from 'react'
import { CSVData, ICSVContextProps } from './types';
import { GenericContext } from '../../../../../../../context/GenericContext';
import Papa, { ParseResult } from 'papaparse';
import { initialValue } from './initialValues';

export const CSVContext = createContext<ICSVContextProps>(initialValue);


export const CSVContextProvider = ({children}: any) => {
    const [csvData, setCsvData] = useState<CSVData[]>([]);
    const [csvHeaders, setCsvHeaders ] = useState<string[] | undefined>([])
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | undefined>(undefined)
    const [success, setSuccess] = useState<string | undefined>(undefined)
    const { webDataNetsRequest } = useContext(GenericContext)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSuccess(undefined)
        const file = event.target.files && event.target.files[0]
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
    
      useEffect(()=>{
        if(name && name.trim() !== '')
          setError(undefined)
      },[name])
    
      const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if(!name || name.trim() === '') {
          setError('The name is mandatory field.')
          return
        }
          const dataToSend = {
            name: name,
            headers: csvHeaders,
            data: csvData
          }
          
         webDataNetsRequest('api/data', JSON.stringify(dataToSend), 'POST')
            .then((response: any) => {
                setCsvData([])
                setCsvHeaders([])
                setName('')
                setSuccess('File created succesfully!.')
            })
      }
    
      const handleCancelImport = () => {
        setCsvData([])
        setCsvHeaders([])
      }

    const contextValue: ICSVContextProps = {
        handleCancelImport,
        handleFormSubmit,
        handleFileChange,
        error,
        csvData,
        setName,
        success
      }
    
      return (
        <CSVContext.Provider value={contextValue}>
          {children}
        </CSVContext.Provider>
      )
}