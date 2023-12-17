import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { DashboardContext } from '../../context/DashboardContext'
import { SelectData } from './components/SelectData'
import { IDataInformation } from '../../../Collections/components/CollectionList/type'
import { SelectHeaders } from './components/SelectHeaders'
import { GenericContext } from '../../../../../../context/GenericContext'
import { SelectChartType } from './components/SelectChartType'

export const AddDashboard = ():JSX.Element => {

    const { openModal, resetDashboardContext, sectionId, setSearchTrigger, step, setStep } = useContext(DashboardContext)
    const { webDataNetsRequest } = useContext(GenericContext)
    const [ dataSelected, setDataSelected ] = useState<IDataInformation | null>(null)
    const [ headersConfig, setHeadersConfig ] = useState<any>(null)
    const [chartType, setChartType ] = useState<string | null>(null)
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        maxHeight: 'calc( 100vh - 20%)',
        minHeight: 'calc( 100vh - 20%)',
        overflow: 'auto'
    }

    useEffect(() => {
        if(!headersConfig) return
        const sendData = {
            section_id: sectionId,
            header_x: headersConfig.header_x,
            header_y: headersConfig.header_y,
            header_filters: headersConfig?.header_filters || undefined,
            data_information_id: dataSelected?.id,
            chart_type: chartType
        }

        webDataNetsRequest('api/create_chart', JSON.stringify(sendData), 'POST').then(res => {setDataSelected(null); setHeadersConfig(null); resetDashboardContext(); setSearchTrigger(true)})

    },[headersConfig])

    useEffect(() => {
        setStep(dataSelected ? 1 : 0)
    }, [dataSelected])

    useEffect(() => {
        if(!chartType) return
        setStep(2)
    }, [chartType])

    const STEPS = {
        0: <SelectData handleChange={setDataSelected}/>,
        1: <SelectChartType onChange={setChartType}/>,
        2: <SelectHeaders dataInformation={dataSelected} chartType={chartType} handleChange={setHeadersConfig}/>
    }

    return (<>
        <Modal
            open={openModal}
            onClose={() =>{  setDataSelected(null); setHeadersConfig(null); setChartType(null); setStep(0); resetDashboardContext();}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <h3>Add a new dashboard</h3>
                {STEPS[step]}
            </Box>
        </Modal>
    </>)
}