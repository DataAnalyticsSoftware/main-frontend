import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { ES, GB } from 'country-flag-icons/react/3x2';
import { GenericContext } from '../../../../../context/GenericContext';

export const CountryToggle = () => {
    const [countryLanguage, setCountryLanguage] = useState<string>('es');
    const { i18n } = useContext(GenericContext);

    useEffect(() => {
        i18n?.changeLanguage(countryLanguage);
    }, [countryLanguage, i18n]);

    return (
        <ToggleButtonGroup
            value={countryLanguage}
            exclusive
            onChange={(event, value) => setCountryLanguage(value)}
            aria-label="text alignment"
            style={{ backgroundColor: 'white' }}
        >
            <ToggleButton value="en" aria-label="en" style={{ backgroundColor: countryLanguage === 'en' ? '' : 'rgb(0 0 0 / 29%)' }}>
                <GB title="English" style={{ width: '25px', height: '25px' }} />
            </ToggleButton>
            <ToggleButton value="es" aria-label="es" style={{ backgroundColor: countryLanguage === 'es' ? '' : 'rgb(0 0 0 / 29%)' }}>
                <ES title="Spanish" style={{ width: '25px', height: '25px' }} />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
