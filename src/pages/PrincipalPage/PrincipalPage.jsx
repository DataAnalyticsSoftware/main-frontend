import React from 'react'
import { TopBarComponent } from './components/TopBarComponent/TopBarComponent';
import { ContentComponent } from './components/ContentComponent/ContentComponent';

export const PrincipalPage = (props) => {
    return (
        <div >
            <TopBarComponent />
            <ContentComponent />
        </div>
    )
}



