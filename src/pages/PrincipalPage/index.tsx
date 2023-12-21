import React from 'react'
import PrincipalPageContextProvider from './context/PrincipalPageContext';
import { RenderLanding } from './components/RenderLanding';
import { LoadingPageComponent } from './components/LoadingPageComponent';

export const PrincipalPage = () => {
    return (
        <PrincipalPageContextProvider>
            <div>
                <RenderLanding/>
                <LoadingPageComponent/>
            </div>
        </PrincipalPageContextProvider>
    )
}