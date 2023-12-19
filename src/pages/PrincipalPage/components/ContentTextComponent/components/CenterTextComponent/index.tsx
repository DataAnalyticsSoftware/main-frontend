import React from 'react'
import { ITextProps } from "../../types";
import style from './style.module.scss'

export const CenterTextComponent = ({dataInformation, index}: ITextProps) => {
    return <div key={index} style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
            <span className={style.title}>{dataInformation.title}</span>
            {dataInformation.sectionDescription.map((title: string, indexTitle: number) => <span className={style.text} key={indexTitle}>{title}</span>) }
        </div>
}