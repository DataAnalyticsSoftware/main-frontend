import React, { useContext } from 'react'
import { PricingTableComponent } from '../PricingTableComponent';
import { BottomBarComponent } from '../BottomBarComponent';
import { PrincipalPageContext } from '../../context/PrincipalPageContext';
import { IPrincipalPageData } from '../../context/type';
import { COMPONENTS_INTERFACE } from './utils/constants';
export const ContentComponent = () => {
    const { data }:any = useContext(PrincipalPageContext)

    return (
        <>
            <div className="container-fluid" style={{ marginTop: '150px', marginBottom: '120px', paddingRight: '80px', paddingLeft: '80px' }}  >
                {data?.map((dataInformation: IPrincipalPageData, index: number) =>
                        COMPONENTS_INTERFACE[dataInformation.component](dataInformation, index)
                )}
                <PricingTableComponent />
            {/*FOOTER AQUI ABAJO---------->*/}
            </div >
            <div style={{ backgroundColor: '#0179FE', paddingRight: '80px', paddingLeft: '80px', color: 'white', paddingTop: '10px', paddingBottom: '40px' }}>
                <BottomBarComponent />
            </div>
        </>

    )
}