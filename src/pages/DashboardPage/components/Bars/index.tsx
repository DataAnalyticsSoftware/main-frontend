import React from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { Azucar } from './XAxis';


export const Bars = () => {
    return (
        <ParentSize>
            {({ width, height }) => (
                <Azucar width={width} height={height} />
            )}
        </ParentSize>
    );
};
