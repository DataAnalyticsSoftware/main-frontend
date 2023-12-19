import React from 'react'
import { PhotoDas } from '../../../../../../../../components/PhotoDas'
import { CardDas } from '../../../../../../../../components/CardDas/index';

export const SelectChartType = ({ onChange }) => {


    const CHART_TYPES = [
        {
            name: 'SIMPLE LINE CHART',
            description: 'Descriptions simple line chart.',
            image: 'media-files/charts/simple_lines.png',
            code: 'LN'
        },
        {
            name: 'MULTIPLE LINE CHART',
            description: 'Descriptions multiple line chart.',
            image: 'media-files/charts/multiple_lines.png',
            code: 'LNM'
        },
        {
            name: 'SIMPLE BAR CHART',
            description: 'Descriptions simple bar chart.',
            image: 'media-files/charts/simple_bars.png',
            code: 'BR'
        },
        {
            name: 'MULTIPLE BAR CHART',
            description: 'Descriptions multiple bar chart.',
            image: 'media-files/charts/multiple_bars.png',
            code: 'BRM'
        },
    ]


    return <div style={{width: '800px'}}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', rowGap: '16px'}}>
            {CHART_TYPES.map((value) => <div style={{flex: '50%', width: '50%', padding: '0 10px'}}>
                <CardDas style={{width: '100%', cursor: 'pointer'}} onClick={() => onChange(value.code)}>
                    <>
                        <PhotoDas styles={{width: '270px', height: '200px'}} url={value.image}/>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontWeight: '800'}}>{value.name}</span>
                            <span style={{color: '#737373'}}>{value.description}</span>
                        </div>
                    </>
                </CardDas>
            </div>)}
        </div>
    </div>
}