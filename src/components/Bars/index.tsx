import React from 'react';
import {  Graphics } from './Bars';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { VerticalBars } from './Bars/Vertical';


export const Bars = () => {
    return (
    <ParentSize>
      {({ width, height }: any) => (        
            <Graphics width={width} height={height} />
            )}
    </ParentSize>

    );
};
