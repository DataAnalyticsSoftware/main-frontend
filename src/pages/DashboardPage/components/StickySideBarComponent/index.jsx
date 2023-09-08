import React from 'react'

export const StickySideBarComponent = (props) => {
    return (
        <>
            <div class="col-3 px-1 bg-white position-fixed " id="sticky-sidebar">
                <h1 class='mt-4 ml-2 mr-3 mb-5'>Logo Here</h1>
                <hr></hr>
                <div class='d-flex flex-column flex-shrink-0 p-3 d-flex align-items-center ' style={{ color: 'black' }}>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item text-left">
                            <a href="#" class="nav-link" aria-current="page">
                                <i class="bi bi-house-fill" style={{ marginRight: '8px' }}></i>
                                Home
                            </a>
                        </li>
                        <li class="nav-item text-left">
                            <a href="#" class="nav-link text-black">
                                <i class="bi bi-pie-chart-fill" style={{ marginRight: '8px' }}></i>
                                Dashboard
                            </a>
                        </li>
                        <li class="nav-item text-left">
                            <a href="#" class="nav-link text-black">
                                <i class="bi bi-file-earmark-bar-graph-fill" style={{ marginRight: '8px' }}></i>
                                Data Import
                            </a>
                        </li>
                        <li class="nav-item text-left">
                            <a href="#" class="nav-link text-black">
                                <i class="bi bi-rocket-fill" style={{ marginRight: '8px' }}></i>
                                Upgrade
                            </a>
                        </li>
                        <li class="nav-item text-left">
                            <a href="#" class="nav-link text-black">
                                <i class="bi bi-person-fill" style={{ marginRight: '8px' }}></i>
                                Support
                            </a>
                        </li>
                        <li class="nav-item text-left">
                            <a href="#" class="nav-link text-black">
                                <i class="bi bi-info-circle-fill" style={{ marginRight: '8px' }}></i>
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}