import React from 'react'
import { TopBarComponent } from './components/TopBarComponent';
import { ContentComponent } from './components/ContentComponent';

export const PrincipalPage = (props:any) => {
    return (
        <div >
            <TopBarComponent />
            <ContentComponent />
        </div>
    )
}



