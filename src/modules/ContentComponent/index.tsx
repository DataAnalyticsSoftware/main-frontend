import React, { useContext } from 'react'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext';
import { renderPage } from './utils';
import { AddCollection } from './components/AddCollection';
import { AddCollectionProvider } from './components/AddCollection/context';

export const ContentComponent = () => {
    const { menuSelected } = useContext(DashboardContext)
    
    return (
        <div className='container text-left '>
                    <div key={menuSelected.name} className='row'>
                        <div key={menuSelected.name} className='col-md-10' style={{ padding: '5px', paddingLeft: '40px' }}>
                            <h2 style={{ marginLeft: 'auto' }}>{menuSelected.title}</h2>
                            <p style={{ marginLeft: 'auto' }}>{menuSelected.text}</p>
                        </div>
                       { menuSelected.name== 'Collections' ? <AddCollectionProvider><AddCollection/></AddCollectionProvider>  :'' }   
                    </div>
            {renderPage(menuSelected.route)}
        </div>
    )
}