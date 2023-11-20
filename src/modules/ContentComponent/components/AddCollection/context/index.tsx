import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { IAddCollection } from './types';
import { initialValue } from './initialValues';
import { GenericContext } from '../../../../../context/GenericContext';

export const AddCollectionContext = createContext<IAddCollection>(initialValue);


export const AddCollectionProvider = ({children}: any) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | undefined>(undefined)
    const { webDataNetsRequest } = useContext(GenericContext)
    const [description, setDescription] = useState<string>('')
    const [success, setSuccess] = useState<string | undefined>(undefined)
    const [dataId, setDataId] = useState<any>([])

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if(!name || name.trim() === '') {
          setError('The name is mandatory field.')
          return
        }
          const dataToSend = {
            name: name,
            description: description,
          }
          
          webDataNetsRequest('api/collection', JSON.stringify(dataToSend), 'POST')
          .then((response: any) => {
            
            setName('')
            setDataId(response)
            console.log('response',dataId);
            setSuccess('Collection created succesfully!.')
          })

            console.log(dataId,'dataId');

           
         webDataNetsRequest('api/relational_collection', JSON.stringify(dataId), 'POST')
          .then((response: any) => {   
              setName('')
              setSuccess('Collection created succesfully!.')
          })
          

      }


    const contextValue: IAddCollection = {
        handleFormSubmit,
        error,
        setName,
        setDescription,
        success,
      }

      return (
        <AddCollectionContext.Provider value={contextValue}>
          {children}
        </AddCollectionContext.Provider>
      )
}