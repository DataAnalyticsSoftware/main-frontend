import React from 'react'

export const AboutUs=()=> {
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '20px', padding: '200px 0', flexWrap: 'wrap'}}>
      <div style={{textAlign: 'left', maxWidth: '550px'}}>
        <h4 style={{color:'#fe5b05', paddingBottom:2, fontWeight:400}}>About Us</h4>
        <h1 style={{fontWeight:600}}>Simple Solution to Complex<span style={{color:'#fe5b05', paddingBottom:2, paddingLeft:2}}>Connections</span></h1>
        <p>
          Is a Service that specializes in optimize helping, filtering and organization all your company's database.
        </p>
        <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
          <div>
          <i className="bi bi-check-circle" style={{paddingRight: '5px'}}></i> High Analysis
          </div>
          <div>
          <i className="bi bi-check-circle" style={{paddingRight: '5px'}}></i> Certified Platform
          </div>
        </div>
      </div>
      <div >
        <img style={{objectFit: 'cover', display: 'block', height: '100%', width: '100%'}} src={`${process.env.REACT_APP_BACKEND_ENPDOINT}${"/media-files/imagenes/landing-photo.png"}`}/>
      </div>
    </div>
  )
}