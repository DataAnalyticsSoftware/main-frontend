import React from 'react';
import {  Graphics } from './Bars';
import ParentSize from '@visx/responsive/lib/components/ParentSize';


export const Bars = () => {
    return (
    <ParentSize>
      {({ width, height }: any) => (        
            <Graphics width={width} height={height} />
        /*<VerticalBars width={width} height={height}/>*/       
            )}
    </ParentSize>

    );
};
