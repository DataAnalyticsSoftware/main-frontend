import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { withParentSize } from '@visx/responsive';
import { HorizontalBars } from './Horizontal';
import {VerticalBars} from './Vertical';

export const Graphics = (props:any) => {
  return (
        <HorizontalBars width={props.width} height={props.height} />
        /*<VerticalBars width={width} height={height}/>*/       
  )
}
