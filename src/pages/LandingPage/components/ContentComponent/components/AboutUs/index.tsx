import React, { useContext } from 'react'
import { GenericContext } from '../../../../../../context/GenericContext'

export const AboutUs=()=> {

  const { t } = useContext(GenericContext)

  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '20px', padding: '40px 0', flexWrap: 'wrap',justifyContent: 'space-evenly'}}>
      <div style={{textAlign: 'left', maxWidth: '550px'}}>
        <h4 style={{color:'#fe5b05', paddingBottom:2, fontWeight:400}}>{t('aboutUs.title')}</h4>
        <h1 style={{fontWeight:600}}>{t('aboutUs.title-description')}<span style={{color:'#fe5b05', paddingBottom:2, paddingLeft:2}}>{t('aboutUs.title-description-color')}</span></h1>
        <p>
          {t('aboutUs.description')}
        </p>
        <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
          <div>
          <i className="bi bi-check-circle" style={{paddingRight: '5px'}}></i> {t('aboutUs.icon-1')}
          </div>
          <div>
          <i className="bi bi-check-circle" style={{paddingRight: '5px'}}></i> {t('aboutUs.icon-2')}
          </div>
        </div>
      </div>
      <div >
        <img style={{objectFit: 'cover', display: 'block', height: '100%', width: '100%'}} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${"/media-files/imagenes/landing-photo.png"}`}/>
      </div>
    </div>
  )
}