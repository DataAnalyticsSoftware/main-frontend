import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { DashboardContext } from '../../context/DashboardContext'
import { SelectData } from './components/SelectData'
import { IDataInformation } from '../../../Collections/components/CollectionList/type'
import { SelectHeaders } from './components/SelectHeaders'
import { GenericContext } from '../../../../../../context/GenericContext'

export const AddDashboard = ():JSX.Element => {

    const { openModal, resetDashboardContext, sectionId, setOpenModal, setSearchTrigger } = useContext(DashboardContext)
    const { webDataNetsRequest } = useContext(GenericContext)
    const [ dataSelected, setDataSelected ] = useState<IDataInformation | null>(null)
    const [ headersConfig, setHeadersConfig ] = useState<any>(null)
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }

      useEffect(() => {
        if(!headersConfig) return
        const sendData = {
            section_id: sectionId,
            header_x: headersConfig.header_x,
            header_y: headersConfig.header_y,
            header_filters: headersConfig.header_filters,
            data_information_id: dataSelected?.id
        }

        webDataNetsRequest('api/create_chart', JSON.stringify(sendData), 'POST').then(res => {setDataSelected(null); setHeadersConfig(null); resetDashboardContext(); setSearchTrigger(true)})

      },[headersConfig])

    return (<>
        <Modal
            open={openModal}
            onClose={() =>{  setDataSelected(null); setHeadersConfig(null); resetDashboardContext();}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <h3>Add a new dashboard</h3>
                {!dataSelected && <SelectData handleChange={setDataSelected}/>}
                {dataSelected && <SelectHeaders dataInformation={dataSelected} handleChange={setHeadersConfig}/>}
            </Box>
        </Modal>
    </>)
}