import React from 'react'

interface IProps {
    url: string,
    styles?: React.CSSProperties | undefined
}

export const PhotoDas = ({url, styles}: IProps) => {

    return (<img style={styles} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${url}`} />)
}