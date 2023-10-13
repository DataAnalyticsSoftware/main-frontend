import React from 'react'
import { TopBarComponent } from './components/TopBarComponent';
import PrincipalPageContextProvider from './context/PrincipalPageContext';
import { ContentTextComponent } from './components/ContentTextComponent';

export const PrincipalPage = () => {
    return (
        <PrincipalPageContextProvider>
            <div>
                <TopBarComponent />
                <ContentTextComponent />
            </div>
        </PrincipalPageContextProvider>
    )
}