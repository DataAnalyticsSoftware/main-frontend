import React from 'react'
import { Button } from '../../../../components/Button/Button'
import { menuSticky } from '../../../../utils/menuSticky'


export const TopBarDashboardPage = (props) => {
    return (
        <>

            <div class="container " style={{ backgroundColor: '##ededed !important' }}>
                <div class="row mt-4" >
                    <div class="col-sm">
                        <h1>Home</h1>
                    </div>
                    <div class="col-sm" style={{ marginTop: ' 8px' }}>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button type="button" class="btn btn-primary position-relative mr-4">
                                    <i class="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm" style={{ marginTop: ' 8px' }}>
                        <button type="button" class="btn btn-primary position-relative mr-4">
                            <i class="bi bi-bell-fill"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                            </span>
                        </button>
                        <button type="button" class="btn btn-primary position-relative">
                            <i class="bi bi-headset"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                +
                            </span>
                        </button>
                    </div>
                    <div class="col-sm" style={{ marginTop: ' 8px' }}>
                        <div class="dropdown">
                            <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                                <strong class='ml-2' style={{ color: 'black' }}>mdo</strong>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">My Profile</a>
                                <a class="dropdown-item" href="#">Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class='mt-4' />
            </div>



        </>
    )
}