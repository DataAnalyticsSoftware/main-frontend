import React, { useContext } from 'react'
import { LoginComponent } from '../LoginComponent'
import { Button } from '../../../../components/Button/Button'
import { PricingTableComponent } from '../PricingTableComponent';
import { BottomBarComponent } from '../BottomBarComponent';
import { PrincipalPageContext } from '../../context/PrincipalPageContext';
import { IPrincipalPageData } from '../../context/type';
export const ContentComponent = (props:any) => {

    const { data }:any = useContext(PrincipalPageContext)
    
    const COMPONENTS = {
        LoginTextComponent: (dataInformation:IPrincipalPageData) => renderFirstPart(dataInformation),
        CenterTextComponent: (dataInformation:IPrincipalPageData) => renderCenterPart(dataInformation),
        GenericTextComponent: (dataInformation:IPrincipalPageData) => renderNormalPart(dataInformation)
    }


    const renderFirstPart = (dataInformation: IPrincipalPageData) => {
        return (
        
            <div className="row mb-5" style={{ marginTop: '120px', marginBottom: '120px' }}  >
                <div className="row" >
                    <div className="col" >
                        <div className="text-left">
                            <h6>{data.title}</h6>
                            {dataInformation.sectionTitle.map((sectionTitle: string) => 
                            <>
                                <h1 style={{ fontSize: '86px' }}>Try Our Website's <span style={{ color: '#0179FE' }}>Services Now!</span></h1> 
                                <text>Are you looking to take your YouTube channel to the next level and reach a wider audience? Look no further! Our website offers a comprehensive YouTube Views service designed to boost your video's visibility and engagement.</text>
                            </>
                            )}
                        </div>
                        <div className="text-left mt-4">
                            <Button label={'Learn More'} />
                        </div>
                    </div>
                    <div className="col">
                        <LoginComponent />
                    </div> 
                </div>
            </div>)
    }

    const renderCenterPart = (dataInformation: IPrincipalPageData) => {
       return <div style={{ marginTop: '160px', marginBottom: '120px' }}>
            <h1>{dataInformation.title}</h1>
            {dataInformation.sectionDescription.map((title: string) => <text>{title}</text>) }
        </div>
    }

    const renderPhoto = () => {
        return (<div className='col'>
                <div className='text-left'>
                foto jeje
                </div>
            </div>)
    }

    const renderNormalPart = (dataInformation: IPrincipalPageData) => {
        return (
             <div className="row mb-5" style={{ marginTop: '120px', marginBottom: '120px' }}  > 
                {dataInformation.position === 'RGT' && renderPhoto()}
                <div className={`col text-left`}>
                    {dataInformation.title && <h3>{dataInformation.title}</h3>}
                    {
                        dataInformation.sectionTitle.map((title: string, index: number) =>{
                            return <div className='mt-4' id={index.toString()}>
                                <h5 style={{ color: '#0179FE' }}>{title}</h5>
                                <text>{dataInformation?.sectionDescription[index]}</text>
                            </div>}
                        )
                    }
                    <div className="text-left mt-4">
                        <Button label={'Learn More'} />
                    </div>
                </div>
                {dataInformation.position === 'LFT' && renderPhoto()}
            </div>
        )
    }

    return (
        <>
            <div className="container-fluid" style={{ marginTop: '150px', marginBottom: '120px', paddingRight: '80px', paddingLeft: '80px' }}  >
                    {data?.map((dataInformation: IPrincipalPageData, index: number) =>
                    <>
                        {COMPONENTS[dataInformation.component](dataInformation) }
                    </>
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