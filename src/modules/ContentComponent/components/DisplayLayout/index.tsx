import React, { useContext } from 'react'
import { OneDisplay } from './OneDisplay'
import { TwoDisplays } from './TwoDisplays';
import { ThreeDisplays } from './ThreeDisplays';
import { FourDisplays } from './FourDisplays';
import { FiveDisplays } from './FiveDisplays';
import { SixDisplays } from './SixDisplays';
import { DashboardContext } from '../../../../pages/DashboardPage/context/DashboardContext';
import { ChooseDisplay } from '../ButtonDisplays';


export const DisplayLayout = () => {
    const { menuSelected, displaySelected } = useContext(DashboardContext)
    return (
        <>
            <div key={menuSelected.name} className='col-md-2' style={{ display: 'grid', alignContent: 'center' }}>
                                <ChooseDisplay />
                            </div>
            <div className='container h-100 w-100'>
                {displaySelected === 'Display 1' ? <OneDisplay /> : ''}
                {displaySelected === 'Display 2' ? <TwoDisplays /> : ''}
                {displaySelected === 'Display 3' ? <ThreeDisplays /> : ''}
                {displaySelected === 'Display 4' ? <FourDisplays /> : ''}
                {displaySelected === 'Display 5' ? <FiveDisplays /> : ''}
                {displaySelected === 'Display 6' ? <SixDisplays /> : ''}
            </div>
        </>
    )
}