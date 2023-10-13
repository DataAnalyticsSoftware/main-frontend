import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { NotificationHistorial } from './NotificationsHistorial/index'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext'
import { GenericContext } from '../../context/GenericContext'

export const TopBarDashboardPage = () => {

    const { menuSelected } = useContext(DashboardContext)
    const { setDeleteToken } = useContext(GenericContext)
    const navigate = useNavigate()

    return (
        <>
            <div className="container " style={{ backgroundColor: '##ededed !important' }}>
                <div className="row mt-4" >
                    <div className="col-sm">
                        <h1>{menuSelected.name}</h1>
                    </div>
                    <div className="col-sm" style={{ marginTop: ' 8px' }}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-primary position-relative mr-4">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm" style={{ marginTop: ' 8px' }}>
                        <button type="button" className="btn btn-primary position-relative mr-4 " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-bell-fill"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                            </span>
                            <NotificationHistorial />
                        </button>
                        <button type="button" className="btn btn-primary position-relative">
                            <i className="bi bi-headset"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                +
                            </span>
                        </button>
                    </div>
                    <div className="col-sm" style={{ marginTop: ' 8px' }}>
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong className='ml-2' style={{ color: 'black' }}>mdo</strong>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#" onClick={() => navigate('/myAccount', { replace: true })} >My Profile</a>
                                <a className="dropdown-item" onClick={() => setDeleteToken(true)} href="/">Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-4' />
            </div>



        </>
    )
}