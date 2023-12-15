import React, { useContext } from 'react'
import { BottomBarComponent } from '../BottomBarComponent';
import { PrincipalPageContext } from '../../context/PrincipalPageContext';
import { IPrincipalPageData } from '../../context/type';
import { COMPONENTS_INTERFACE } from './utils/constants';
import { PricingTableComponent } from '../../../../modules/ContentComponent/components/PricingTable';
export const ContentTextComponent = () => {
    const { data }:any = useContext(PrincipalPageContext)

    return (
        <>
            <div>
                {data?.map((dataInformation: IPrincipalPageData, index: number) =>
                        COMPONENTS_INTERFACE[dataInformation.component](dataInformation, index)
                )}
                <PricingTableComponent />
            {/*FOOTER AQUI ABAJO---------->*/}
            </div >
            <div style={{color: 'white', }}>
                <BottomBarComponent />
            </div>
        </>

    )
}