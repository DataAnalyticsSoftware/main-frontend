import React from 'react'

export const StickySideBarComponent = (props) => {
    return (
        <>
            <div class="col-3 px-1 bg-white position-fixed" id="sticky-sidebar">
                <h1 class='mt-4 ml-2 mr-3 mb-5'>Logo Here</h1>
                <hr></hr>
                <div class='d-flex flex-column flex-shrink-0 p-3' style={{ color: 'black' }}>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link active" aria-current="page">
                                <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-black">
                                <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-black">
                                <svg class="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-black">
                                <svg class="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-black">
                                <svg class="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                                Customers
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}