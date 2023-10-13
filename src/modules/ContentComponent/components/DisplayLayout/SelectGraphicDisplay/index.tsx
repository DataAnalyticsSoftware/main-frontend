import React, { useContext } from 'react'
import { DashboardContext } from '../../../../../pages/DashboardPage/context/DashboardContext';

export const SelectGraphicDisplay = (props: any) => {
    const { displayGraphic, setDisplayGraphic }:any = useContext(DashboardContext);
    
    const handleDisplayClick = (display: string) => {
        setDisplayGraphic(display);
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
                        <i className="">{displayGraphic}</i>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a onClick={() => handleDisplayClick('Vertical Bars')} className="dropdown-item" href="#">
                            Vertical Bars
                        </a>
                        <a onClick={() => handleDisplayClick('Horizontal Bars')} className="dropdown-item" href="#">
                            Horizontal Bars
                        </a>
                        <a onClick={() => handleDisplayClick('Lines')} className="dropdown-item" href="#">
                            Lines
                        </a>
                    </div>
        </div>
)
}