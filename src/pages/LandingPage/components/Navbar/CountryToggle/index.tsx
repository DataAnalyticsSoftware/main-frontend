import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ES, GB } from 'country-flag-icons/react/3x2'
import { GenericContext } from '../../../../../context/GenericContext'



export const CountryToggle = () => {

    const [countryLanguage, setCountryLanguage] = useState<string>('en')
    const { i18n } = useContext(GenericContext);

    const handleCountry = (event: React.MouseEvent<HTMLElement, MouseEvent>, value: string) => setCountryLanguage(value)

    useEffect(() => {
        i18n?.changeLanguage(countryLanguage)
    }, [countryLanguage])

    return (
        <ToggleButtonGroup
            value={countryLanguage}
            exclusive
            onChange={handleCountry}
            aria-label="text alignment"
            style={{backgroundColor: 'white'}}
        >
            <ToggleButton value="en" aria-label="en" style={{backgroundColor: countryLanguage === 'en' ? 'rgb(0 0 0 / 29%)' : ''}}>
                <GB title="English" style={{width: '25px', height: '25px'}}/>
            </ToggleButton>
            <ToggleButton value="es" aria-label="es" style={{backgroundColor: countryLanguage === 'es' ? 'rgb(0 0 0 / 29%)' : ''}}>
                <ES title="Spanish" style={{width: '25px', height: '25px'}}/>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}