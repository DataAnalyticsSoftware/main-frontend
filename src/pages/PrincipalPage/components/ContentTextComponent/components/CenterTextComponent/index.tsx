import React from 'react'
import { ITextProps } from "../../types";

export const CenterTextComponent = ({dataInformation, index}: ITextProps) => {
    return <div key={index} style={{ marginTop: '160px', marginBottom: '120px' }}>
            <h1>{dataInformation.title}</h1>
            {dataInformation.sectionDescription.map((title: string, indexTitle: number) => <p key={indexTitle}>{title}</p>) }
        </div>
}