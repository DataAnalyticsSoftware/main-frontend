import React from 'react'
import { Bars } from '../Bars'
import { OneDisplay } from './OneDisplay'
import { TwoDisplays } from './TwoDisplays';
import { ThreeDisplays } from './ThreeDisplays';
import { FourDisplays } from './FourDisplays';
import { FiveDisplays } from './FiveDisplays';
import { SixDisplays } from './SixDisplays';


export const DisplayLayout = ({props}:any) => {
console.log(props.displaySelected);

    return (
        <div className='container h-100'>
            {props.displaySelected === 'Display 1' ? <OneDisplay /> : ''}
            {props.displaySelected === 'Display 2' ? <TwoDisplays /> : ''}
            {props.displaySelected === 'Display 3' ? <ThreeDisplays /> : ''}
            {props.displaySelected === 'Display 4' ? <FourDisplays /> : ''}
            {props.displaySelected === 'Display 5' ? <FiveDisplays /> : ''}
            {props.displaySelected === 'Display 6' ? <SixDisplays /> : ''}
        </div>

    )
}