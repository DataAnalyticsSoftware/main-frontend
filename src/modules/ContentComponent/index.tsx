import React, { useContext } from 'react'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext';
import { renderPage } from './utils';
import { AddCollection } from './components/Collections/components/AddCollection';
import { AddCollectionProvider } from './components/Collections/components/AddCollection/context';

export const ContentComponent = () => {
    const { menuSelected } = useContext(DashboardContext)
    
    return (
        <div style={{width: '100%', padding: '0 25px', textAlign: 'left'}}>
                    <div key={menuSelected.name} className='row'>
                        <div key={menuSelected.name} className='col-md-10' style={{ padding: '5px', paddingLeft: '40px' }}>
                            <h2 style={{ marginLeft: 'auto' }}>{menuSelected.title}</h2>
                            <p style={{ marginLeft: 'auto' }}>{menuSelected.text}</p>
                        </div>
                    </div>
            {renderPage(menuSelected.route)}
        </div>
    )
}