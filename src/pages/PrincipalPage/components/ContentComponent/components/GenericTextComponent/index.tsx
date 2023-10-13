import { IPrincipalPageData } from "../../../../context/type";
import React from 'react'
import { PhotoComponent } from "./components/PhotoComponent";
import { Button } from "../../../../../../components/Button/Button";
import { ITextProps } from "../../types";

export const GenericTextComponent = ({dataInformation, index}: ITextProps) => {
    return (
        <div key={index} className="row mb-5" style={{ marginTop: '120px', marginBottom: '120px' }}  > 
           {dataInformation.position === 'RGT' && <PhotoComponent/>}
           <div className={`col text-left`}>
               {dataInformation.title && <h3>{dataInformation.title}</h3>}
               {
                   dataInformation.sectionTitle.map((title: string, indexTitle: number) =>{
                       return (
                       <div key={indexTitle} className='mt-4' id={indexTitle.toString()}>
                           <h5 style={{ color: '#0179FE' }}>{title}</h5>
                           <p>{dataInformation?.sectionDescription[indexTitle]}</p>
                       </div>)}
                   )
               }
               <div className="text-left mt-4">
                   <Button label={'Learn More'} />
               </div>
           </div>
           {dataInformation.position === 'LFT' && <PhotoComponent/>}
       </div>
   )
}