import React, { useContext, useState, useEffect } from 'react'
import '../SideMenuComponent/styles.module.scss'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext'
import { GenericContext } from '../../context/GenericContext'
import { IMenu } from './type'

export const SideMenuComponent = () => {

    const [menu, setMenu] = useState<IMenu[]>([])
    const { webDataNetsRequest, token } = useContext(GenericContext)
    const { setMenuSelected } = useContext(DashboardContext)

    useEffect(() => {
        console.log(token)
        webDataNetsRequest('api/menu')
            .then((response: IMenu[]) => setMenu(response))
    }, [])

    return (
            <div className="col-3 px-1 bg-white position-fixed " id="sticky-sidebar">
                <h1 className='mt-4 ml-2 mr-3 mb-5'>Logo Here</h1>
                <hr></hr>
                <div className='d-flex flex-column flex-shrink-0 p-3 d-flex align-items-center ' style={{ color: 'black' }}>
                    <ul className="nav nav-pills flex-column mb-auto">
                        {menu?.map((value: IMenu) =>
                            <li key={value.name} className="nav-item text-left p-1">
                                <a onClick={() => setMenuSelected(value)} className="nav-link" style={{ color: '#808080' }} aria-current="page">
                                    <i className={`bi bi-${value.icon}`} style={{ marginRight: '8px' }}></i>
                                    <span className='name'>{value.name}</span>
                                </a>
                            </li>)}
                    </ul>
                </div>
            </div>
    )
}