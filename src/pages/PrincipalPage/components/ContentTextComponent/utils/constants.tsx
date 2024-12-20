import React from 'react'
import { IPrincipalPageData } from "../../../context/type";
import { CenterTextComponent } from "../components/CenterTextComponent";
import { GenericTextComponent } from "../components/GenericTextComponent";
import { LoginTextComponent } from "../components/LoginTextComponent";

export const COMPONENTS_INTERFACE = {
    LoginTextComponent: (dataInformation:IPrincipalPageData, index: number) => <LoginTextComponent dataInformation={dataInformation} key={index} index={index} />,
    CenterTextComponent: (dataInformation:IPrincipalPageData, index: number) => <CenterTextComponent dataInformation={dataInformation} key={index} index={index} />,
    GenericTextComponent: (dataInformation:IPrincipalPageData, index: number) => <GenericTextComponent dataInformation={dataInformation} key={index} index={index} />
}