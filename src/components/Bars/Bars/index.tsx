import React, { useContext } from 'react';
import { HorizontalBars } from './Horizontal';
import {VerticalBars} from './Vertical';
import { DashboardContext } from '../../../pages/DashboardPage/context/DashboardContext';

export const Graphics = (props: any) => {
  const { displayGraphic } = useContext(DashboardContext);

  return (
        <div className='h-100 w-100'>
            {displayGraphic === 'Vertical Bars' ? <VerticalBars width={props.width} height={props.height}/> : ''}
            {displayGraphic === 'Horizontal Bars' ? <HorizontalBars width={props.width} height={props.height} />: ''}
            {displayGraphic === 'Lines' ? <></> : ''}
        </div>
  )
}
