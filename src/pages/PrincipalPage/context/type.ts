export interface IPrincipalPageContext{
    data: IPrincipalPageData[],
    loading: boolean
    loadingIcon: boolean
    setLoadingIcon: React.Dispatch<React.SetStateAction<boolean>>
}


export interface IPrincipalPageData {
    cardinality: number
    position: 'LFT' | 'RGT' | 'CTR'
    title: string
    sectionTitle: string[]
    sectionDescription: string[]
    component:'LoginTextComponent' | 'CenterTextComponent' | 'GenericTextComponent'
    photo: string
}