import React, { useContext, useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react'
import { getOptionsLineChart } from './utils'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import { GenericContext } from '../../../../../../../../context/GenericContext';
import { DashboardContext } from '../../../../context/DashboardContext';


export const Chart = ({optionData}: any): JSX.Element => {
    const { webDataNetsRequest } = useContext(GenericContext)
    const { setSearchTrigger } = useContext(DashboardContext)
    const [ optionChart, setOptionChart ] = useState<any>(null)
    const [ origin, setOrigin ] = useState<number>(0)
    const [ destination, setDestination ] = useState<number>(10)
    const [ selectValues, setSelectValues ] = useState<string[]>(optionData.xAxis.data)
    const [ originalData, setOriginalData ] = useState<any>(optionData)

    useEffect(() => {
        const newOptions = getOptionsLineChart(structuredClone(originalData), origin, destination)
        setOptionChart(newOptions)
    },[origin, destination])
    
    const deleteChart = () => {
        webDataNetsRequest(`api/chart_delete/${optionData.relation_id}`, undefined, 'DELETE').then(() => setSearchTrigger(true))
    }

    return <>
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Origin</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={origin}
                label="Origin"
                onChange={(event: SelectChangeEvent<number>) => {setOptionChart(null); setOrigin(Number(event.target.value))}}
                >
                {selectValues.map((value, index) => <MenuItem key={index} value={index}>{value}</MenuItem>)}
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Destination</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={destination}
                label="Destination"
                onChange={(event: SelectChangeEvent<number>) =>{setOptionChart(null); setDestination(Number(event.target.value))}}
                >
                    {selectValues.map((value, index) => <MenuItem  key={index} value={index}>{value}</MenuItem>)}
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
            <IconButton style={{float: 'right'}} aria-label="delete" onClick={() => deleteChart()}>
                <DeleteIcon />
            </IconButton>
        </div>
        <div style={{height: '300px'}}>
            {optionChart && <ReactECharts option={optionChart}/>}
        </div>
    </>
}