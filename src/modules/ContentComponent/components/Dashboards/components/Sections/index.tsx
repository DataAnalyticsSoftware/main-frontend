import React, { useContext, useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import { DashboardContext } from '../../context/DashboardContext';
import { GenericContext } from '../../../../../../context/GenericContext';
import { ChartLayer } from './components/ChartLayer';

export const Sections = (): JSX.Element => {

    const {setOpenModal, setSectionId, searchTrigger} = useContext(DashboardContext)
    const { webDataNetsRequest } = useContext(GenericContext)
    const [sections, setSections] = useState<any[]>([])

    useEffect(() => {
        if(sections.length > 0) return
        webDataNetsRequest('api/chart_section').then(setSections)
    },[sections])

    const openAddDashboard = (id: string) => {
        setSectionId(id)
        setOpenModal(true)
    }

    return <>
        {sections?.map((value, index) =>
                <Accordion key={index} expanded={true} >
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<AddIcon onClick={()=> openAddDashboard(value.id)}/>}
                    >
                    {value.name}
                    </AccordionSummary>
                    <AccordionDetails> 
                        <ChartLayer sectionId={value.id}/>
                    </AccordionDetails>
                </Accordion>
            )}
    </>
}