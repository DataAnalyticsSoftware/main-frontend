import React from 'react'
import { CollectionList } from './components/CollectionList'
import { AddCollectionProvider } from './components/AddCollection/context'
import { AddCollection } from './components/AddCollection'
import { CollectionContextProvider } from './context/CollectionContext'
import styles from './styles.module.scss'

export const Collections = () => {
    return (
        <CollectionContextProvider>
            <AddCollectionProvider>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '24px', paddingTop:'26px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '12px', width: '100%'}}>
                        <span className={styles.title}> Saved Collection </span>
                        <span className={styles.sub_title}> You can contact with us at this hours.  </span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'right'}}>
                        <AddCollection/>
                    </div>
                </div>
            </AddCollectionProvider>
            <CollectionList/>
        </CollectionContextProvider>
    )
}