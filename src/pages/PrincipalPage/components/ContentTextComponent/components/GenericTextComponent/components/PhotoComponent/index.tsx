import React from 'react'

interface IProps {
    url: string
}

export const PhotoComponent = ({url}: IProps) => {

    return (<div className='col'>
                <div className='text-left'>
                    <img src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${url}`} />
                </div>
            </div>)
}