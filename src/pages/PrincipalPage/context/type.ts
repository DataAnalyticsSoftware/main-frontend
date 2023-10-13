export interface IPrincipalPageContext{
    data: IPrincipalPageData[]
}


export interface IPrincipalPageData {
    cardinality: number
    position: 'LFT' | 'RGT' | 'CTR'
    title: string
    sectionTitle: string[]
    sectionDescription: string[]
    component:'LoginTextComponent' | 'CenterTextComponent' | 'GenericTextComponent'
}