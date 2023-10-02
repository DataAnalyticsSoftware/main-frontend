import React, { useContext } from 'react'
import { useState } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

export const SelectCollectionDisplay = (props: any) => {
    const { displayCollection, setDisplayCollection }:any = useContext(DashboardContext);
    
    const handleDisplayClick = (display: string) => {
        setDisplayCollection(display);
    };
    return (
    <div className='col-md-12'>
                    <button
                        type="button"
                        className="btn btn-primary mr-4 mb-2 float-right"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"        
                        >
                        <i className="">{displayCollection}</i>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a onClick={() => handleDisplayClick('Collection 1')} className="dropdown-item" href="#">
                            Collection 1
                        </a>
                        <a onClick={() => handleDisplayClick(' Collection 2')} className="dropdown-item" href="#">
                            Collection 2
                        </a>
                        <a onClick={() => handleDisplayClick('Collection 3')} className="dropdown-item" href="#">
                            Collection 3
                        </a>
                    </div>
        </div>
)
}