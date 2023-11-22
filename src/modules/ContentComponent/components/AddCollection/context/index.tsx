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
     const [ dataSelected, setDataSelected ] = useState<any[]>([])

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
          
          //PRIMERO SE CREA LA COLECCION

          webDataNetsRequest('api/collection', JSON.stringify(dataToSend), 'POST')
          .then((response: any) => {
            setName('')
            setDataId(response)
            console.log('response',dataId);
            //UNA VEZ DENTRO SE LLAMA A LA OTRA LLAMADA, YA QUE SI NO SE REALIZAN DE FORMA SINCRONA Y NO ACTUALIZA LOS DATOS
            createDataRelation(response)
          })
      }

      const createDataRelation = (collectionID: string) => {
        
        //AQUI NO DEBERIA SER DE 0 PERO EL BACK TODAVIA NO ESTA PREPARADO PARA ESTA CALL :D
        let dataToSend = {
          multiple_data_information_id: dataSelected,
          collection_id: collectionID
        }

        webDataNetsRequest('api/relational_collection', JSON.stringify(dataToSend), 'POST')
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
        dataSelected, 
        setDataSelected
      }

      return (
        <AddCollectionContext.Provider value={contextValue}>
          {children}
        </AddCollectionContext.Provider>
      )
}