import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { HorizontalBars } from './Horizontal';
import {VerticalBars} from './Vertical';

export const Graphics = () => {
  return (
      <ParentSize>
            {({ width, height }:any) => (
        <HorizontalBars width={width} height={height} />
        /*<VerticalBars width={width} height={height}/>*/       
            )}
        </ParentSize>
  )
}
