import React, { useContext } from 'react'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext';
import { renderPage } from './utils';
import { AddCollection } from './components/Collections/components/AddCollection';
import { AddCollectionProvider } from './components/Collections/components/AddCollection/context';

export const ContentComponent = () => {
    const { menuSelected } = useContext(DashboardContext)
    
    return (
        <div style={{paddingLeft:'36px'}} className='container-fluid text-left'>
                    <div key={menuSelected.name} className='row'>
                        <div key={menuSelected.name}  style={{ padding: '5px' }}>
                            <h2 style={{ marginLeft: 'auto', fontWeight:800,fontSize:'28px', lineHeight:'24px' }}>{menuSelected.name}</h2>
                            <p style={{ marginLeft: '4px', fontWeight:400,fontSize:'16px', lineHeight:'18px', paddingTop:'8px' }}>{menuSelected.text}</p>
                        </div>
                    </div>
            {renderPage(menuSelected.route)}
        </div>
    )
}