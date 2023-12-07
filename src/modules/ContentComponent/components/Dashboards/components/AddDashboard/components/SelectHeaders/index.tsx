import React, { Dispatch, useContext, useEffect, useState } from 'react'
import { IDataInformation } from '../../../../../Collections/components/CollectionList/type'
import Grid from '@mui/material/Unstable_Grid2'
import { GenericContext } from '../../../../../../../../context/GenericContext'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

interface IProps {
    dataInformation: IDataInformation
    handleChange: Dispatch<any>
}

export const SelectHeaders = ({dataInformation, handleChange} : IProps): JSX.Element => {

    const { webDataNetsRequest } = useContext(GenericContext)

    const [ headers, setHeaders ] = useState<string[]>([])
    const [ headerX, setHeaderX ] = useState<string>('')
    const [ headerY, setHeaderY ] = useState<string>('')
    const [ headerFilter, setHeaderFilter ] = useState<string>('')

    useEffect(() => {
        webDataNetsRequest(`api/data_headers/${dataInformation.id}`)
        .then(res => setHeaders(res?.headers))
    }, [])
    
    const submitForm = () => {
        handleChange({
            header_x: headerX,
            header_y: headerY,
            header_filters: headerFilter
        })
    }

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12}>
                <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-simple-select-helper-label">Header X</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={headerX}
                        label="Header X"
                        onChange={(event: SelectChangeEvent) => setHeaderX(event.target.value)}
                        >
                            {headers.map((value: string) => 
                                <MenuItem value={value}>{value}</MenuItem>
                            )}
                    </Select>
                    <FormHelperText>muestra las categorías que se están comparando</FormHelperText>
                </FormControl>
            </Grid>
            <Grid xs={12}>
                <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-simple-select-helper-label">Header Y</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={headerY}
                        label="Header Y"
                        onChange={(event: SelectChangeEvent) => setHeaderY(event.target.value)}
                        >
                            {headers.map((value: string) => 
                                <MenuItem value={value}>{value}</MenuItem>
                            )}
                    </Select>
                    <FormHelperText>representa los valores</FormHelperText>
                </FormControl>
            </Grid>
            <Grid xs={12}>
                <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-simple-select-helper-label">Header Filters</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={headerFilter}
                        label="Header Filters"
                        onChange={(event: SelectChangeEvent) => setHeaderFilter(event.target.value)}
                        >
                            {headers.map((value: string) => 
                                <MenuItem value={value}>{value}</MenuItem>
                            )}
                    </Select>
                    <FormHelperText>Division de los valores por este campo</FormHelperText>
                </FormControl>
            </Grid>
            <Grid xs={12}>
                <div style={{float: 'right'}}>
                    <Button variant="contained" onClick={submitForm}>Finish</Button>
                </div>
            </Grid>
        </Grid>)
}