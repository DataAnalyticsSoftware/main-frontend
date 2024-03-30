import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { NotificationHistorial } from './NotificationsHistorial/index'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext'
import { GenericContext } from '../../context/GenericContext'
import { TextField } from '@mui/material'

export const TopBarDashboardPage = () => {

    const { menuSelected } = useContext(DashboardContext)
    const { setDeleteToken, openProfile,setOpenProfile } = useContext(GenericContext)
    const navigate = useNavigate()

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: '#ededed !important', boxSizing:'border-box',paddingLeft:'32px' }}>
                <div className="row mt-4" >
                    <div className="col-md-10" style={{ marginTop: ' 8px', alignSelf:'center', height:'50px' }}>
                        <div className="input-group mb-3" >
                            <TextField sx={{border: 'none',"& fieldset": { border: 'none' },}} id="outlined-basic" variant="outlined" style={{borderRadius:'25px',borderColor:'transparent',width:'30%', backgroundColor:'#f4f4f5', fontStyle:'none'}} placeholder=' Search' InputProps={{startAdornment:(<i className="bi bi-search mr-3"></i>), disableUnderline:true,style: { border: 'none', marginLeft:10 }}}></TextField>
                        </div>
                    </div>
                    {/*<div className="" style={{ marginTop: ' 8px', minWidth:'130px', alignSelf:'center'  }}>
                        <button style={{height:'50px', width:'50px'}} type="button" className="btn btn-primary position-relative mr-4 " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-bell-fill"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                            </span>
                            <NotificationHistorial />
                        </button>
                        <button style={{height:'50px', width:'50px'}} type="button" className="btn btn-primary position-relative">
                            <i className="bi bi-headset"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                +
                            </span>
                        </button> 
                    </div>*/}
                    <div className='col-md-2'>
                        <div className="dropdown">
                            <a style={{display:'flex', height:'50px', textAlign:'left'}} className="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div>
                                    <img src="https://github.com/mdo.png" alt="" width="50" height="50" className="rounded-circle me-2" />
                                </div>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <p style={{fontSize:'20px', lineHeight:'24px',fontWeight:600,color: 'black', marginBottom:'4px', marginTop:'4px'}} className='ml-2'>Web Data nets</p>
                                    <p style={{fontSize:'14px', lineHeight:'17px',fontWeight:400,color: 'rgba(115, 115, 115, 1)'}} className='ml-2' >webdatanets@gmail.com</p>
                                </div>

                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#" onClick={() =>{navigate('/myAccount', { replace: true }); setOpenProfile(true)} } >My Profile</a>
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