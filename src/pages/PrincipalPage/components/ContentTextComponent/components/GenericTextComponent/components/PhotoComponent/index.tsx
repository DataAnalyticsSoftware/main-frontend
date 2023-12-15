import React from 'react'

interface IProps {
    url: string
}

export const PhotoComponent = ({url}: IProps) => {

    return (<img src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${url}`} />)
}