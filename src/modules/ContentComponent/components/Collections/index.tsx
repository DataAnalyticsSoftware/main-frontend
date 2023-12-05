import React from 'react'
import { CollectionList } from './components/CollectionList'
import { AddCollectionProvider } from './components/AddCollection/context'
import { AddCollection } from './components/AddCollection'
import { CollectionContextProvider } from './context/CollectionContext'

export const Collections = () => {
    return (
        <CollectionContextProvider>
            <AddCollectionProvider>
                <AddCollection/>
            </AddCollectionProvider>
            <CollectionList/>
        </CollectionContextProvider>
    )
}