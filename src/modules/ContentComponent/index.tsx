import React, { useContext } from 'react'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext';
import { renderPage } from './utils';

export const ContentComponent = () => {
    const { menuSelected } = useContext(DashboardContext)
    
    return (
        <div style={{width: '100%', padding: '0 1px', textAlign: 'left'}}>
                    {menuSelected.show_title && <div key={menuSelected.name} className='row'>
                        <div key={menuSelected.name}  style={{ paddingLeft: '32px', paddingTop:'26px' }}>
                            <h2 style={{ marginLeft: 'auto', fontWeight:800,fontSize:'28px', lineHeight:'24px' }}>{menuSelected.name}</h2>
                            <p style={{ marginLeft: '4px', fontWeight:400,fontSize:'16px', lineHeight:'18px', paddingTop:'8px' }}>{menuSelected.text}</p>
                        </div>
                    </div>}
            <div>
                {renderPage(menuSelected.route)}
            </div>
        </div>
    )
}