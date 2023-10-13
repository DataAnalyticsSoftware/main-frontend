import React from 'react'
import { TopBarComponent } from './components/TopBarComponent';
import { ContentComponent } from './components/ContentComponent';
import PrincipalPageContextProvider from './context/PrincipalPageContext';

export const PrincipalPage = (props:any) => {
    return (
        <PrincipalPageContextProvider>
            <div >
                <TopBarComponent />
                <ContentComponent />
            </div>
        </PrincipalPageContextProvider>
    )
}



