import React, { useContext, useEffect, useState } from 'react'
import { GenericContext } from '../../../../../../../../context/GenericContext'
import { Chart } from '../Chart'
import Grid from '@mui/material/Unstable_Grid2'
import { DashboardContext } from '../../../../context/DashboardContext'

export const ChartLayer = ({ sectionId }: any ):JSX.Element => {

    const { webDataNetsRequest } = useContext(GenericContext)
    const {setOpenModal, setSectionId, searchTrigger, setSearchTrigger} = useContext(DashboardContext)

    const [ dataOptions, setDataOptions ] = useState<any>([])

    useEffect(() => {
        if(!searchTrigger) return
        webDataNetsRequest(`api/chart/${sectionId}`)
            .then(setDataOptions)
            .finally(()=>setSearchTrigger(false))
    }, [searchTrigger])

    return (
        <>
            {dataOptions?.map((value, index) => <Grid key={index} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={12}>
                    <Chart optionData={value} />
                </Grid>
            </Grid>)}
        </>)
}