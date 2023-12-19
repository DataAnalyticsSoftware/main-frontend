import React, { createContext, useContext, useState } from 'react'
import { IAddCollection } from './types';
import { initialValue } from './initialValues';
import { GenericContext } from '../../../../../../../context/GenericContext';
import { CollectionContext } from '../../../context/CollectionContext';

export const AddCollectionContext = createContext<IAddCollection>(initialValue);


export const AddCollectionProvider = ({ children }: any) => {
    const [ name, setName ] = useState<string>('')
    const [ id, setId ] = useState<string | null>(null)
    const [ error, setError ] = useState<string | undefined>(undefined)
    const { webDataNetsRequest, handleToast } = useContext(GenericContext)
    const [ description, setDescription ] = useState<string>('')
    const [ success, setSuccess ] = useState<string | undefined>(undefined)
    const [ dataSelected, setDataSelected ] = useState<any[]>([])
    const { setSearch } = useContext(CollectionContext)
    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        
        if(!name || name.trim() === '') {
          setError('The name is mandatory field.')
          return
        }
          const dataToSend = {
            id: !!id ? id : undefined,
            name: name,
            description: description
          }
          const mehthod = !!id ? 'PUT' : 'POST'
          webDataNetsRequest('api/collection', JSON.stringify(dataToSend), mehthod)
          .then((response: any) => {
            setName('')
            setDescription('')
            createDataRelation(response)
            handleToast('Collection created succesfully.')
          }).then(() => setSearch(true))
      }

      const createDataRelation = (collectionID: string) => {
        if(dataSelected.length === 0 && !id) return
        let dataToSend = {
          multiple_data_information_id: dataSelected || [],
          collection_id: collectionID
        }

        webDataNetsRequest('api/relational_collection', JSON.stringify(dataToSend), 'POST')
        .then(() => {   
            setName('')
            setSuccess('Collection created succesfully!.')
            setSearch(true)
        })
      }


    const contextValue: IAddCollection = {
        handleFormSubmit,
        error,
        setName,
        name,
        setDescription,
        description,
        success,
        dataSelected, 
        setDataSelected,
        id,
        setId
      }

      return (
        <AddCollectionContext.Provider value={contextValue}>
          {children}
        </AddCollectionContext.Provider>
      )
}