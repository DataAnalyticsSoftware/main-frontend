import React from 'react'
import { ITextProps } from "../../types";
import { Button } from "../../../../../../components/Button";
import style from './style.module.scss'
import { ButtonDas } from "../../../../../../components/ButtonDas";
import { ArrowRightWithStick } from "../../../LoginComponent/utils/GetSVGComponent";
import { PhotoDas } from '../../../../../../components/PhotoDas';

export const GenericTextComponent = ({dataInformation, index}: ITextProps) => {
    return (
        <div key={index} className="row mb-5" style={{ paddingLeft: '100px', paddingRight: '100px', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row', gap: '100px' }}  > 
           {dataInformation.position === 'RGT' && <div style={{width: 'calc( 50vw - 100px )', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}><PhotoDas url={dataInformation.photo}/></div>}
           <div className={`col text-left`} style={{width: 'calc( 50vw - 100px )', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
               {dataInformation.title && <span className={style.title} style={{width: '100%'}}>{dataInformation.title}</span>}
               {
                   dataInformation.sectionTitle?.map((title: string, indexTitle: number) =>{
                       return (
                       <div key={indexTitle} className='mt-4' style={{textAlign: 'left'}} id={indexTitle.toString()}>
                           <p className={style.subtitle} style={{ color: '#4F46E5' }}>{title}</p>
                           <span className={style.text_contain}>{dataInformation?.sectionDescription[indexTitle]}</span>
                       </div>)}
                   )
               }
               <div className="text-left mt-4" style={{width: '100%', float: 'left'}}>
                   <ButtonDas text={'Learn More'} variant='contained'  endIcon={<ArrowRightWithStick/>} />
               </div>
           </div>
           {dataInformation.position === 'LFT' &&  <div style={{width: 'calc( 50vw - 100px )', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}><PhotoDas url={dataInformation.photo}/></div>}
       </div>
   )
}