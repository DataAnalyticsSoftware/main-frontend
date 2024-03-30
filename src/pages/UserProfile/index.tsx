import React, { useContext, useState } from 'react'
import '../UserProfile/styles.module.scss'
import { useNavigate } from "react-router-dom"
import { ButtonDas } from '../../components/ButtonDas'
import styles from './styles.module.scss'
import { Modal } from '@mui/material'
import { GenericContext } from '../../context/GenericContext'

const itemsData = [{
    "profile": {
      "title": "My Profile",
      "buttons": [
        {
          "text": "Go Back",
          "color": "danger",
          "size": "lg",
          "onClick": "/dashboards"
        },
        {
          "text": "Update",
          "color": "primary",
          "size": "lg"
        }
      ]
    },
    "fileUpload": {
      "inputLabel": "Upload Image",
      "ProfileImageTxt": "Profile Image",
      "imgUploaded": "Change Image",
      "removeButton": "Remove",
      "note": "Min size 300px x 300px",
      "fileInputId": "customFile",
      "hidden": true
    },
    "firstColumn": {
      "width": "60%",
      "textAlign": "center",
      "marginRight": "12px",
      "bgColor": "bg-secondary-soft",
      "padding": "px-4 py-5 rounded"
    },
    "secondColumn": {
      "bgColor": "bg-secondary-soft",
      "padding": "px-4 py-5 rounded",
      "fields": [
        {
          "label": "Company Name",
          "type": "text",
          "placeholder": "",
          "ariaLabel": "Phone number",
          "value": "(333) 000 555"
        },
        {
          "label": "First Name *",
          "type": "text",
          "placeholder": "",
          "ariaLabel": "First name",
          "value": "Scaralet"
        },
        {
          "label": "Last Name *",
          "type": "text",
          "placeholder": "",
          "ariaLabel": "Last name",
          "value": "Doe"
        },
        {
          "label": "Phone number *",
          "type": "text",
          "placeholder": "",
          "ariaLabel": "Phone number",
          "value": "(333) 000 555"
        },
        {
          "label": "Mobile number *",
          "type": "text",
          "placeholder": "",
          "ariaLabel": "Phone number",
          "value": "+91 9852 8855 252"
        },
        {
          "label": "Email *",
          "type": "email",
          "placeholder": "",
          "ariaLabel": "Email",
          "value": "example@homerealty.com"
        }
      ]
    },
    "socialMedia": {
      "bgColor": "bg-secondary-soft",
      "padding": "px-4 py-5 rounded",
      "title": "Social media detail",
      "fields": [
        {
          "label": "Facebook",
          "type": "text",
          "placeholder": "",
          "ariaLabel": "Facebook",
          "value": "http://www.facebook.com",
          "icon": "fab fa-fw fa-facebook",
          "iconColor": "text-facebook"
        },
        {
          "label": "Twitter",
          "type": "text",
          "placeholder": "",
          "ariaLabel": "Twitter",
          "value": "http://www.twitter.com",
          "icon": "fab fa-fw fa-twitter",
          "iconColor": "text-twitter"
        },
        {
          "label": "Instagram",
          "type": "text",
          "placeholder": "",
          "ariaLabel": "Instragram",
          "value": "http://www.instragram.com",
          "icon": "fab fa-fw fa-instagram",
          "iconColor": "text-instagram"
        }
      ]
    },
    "changePassword": {
      "bgColor": "bg-secondary-soft",
      "padding": "px-4 py-5 rounded",
      "title": "Change Password"
    }}
]
export const UserProfile = (props:any) => {
  const [imgWasUploaded, setImgWasUploaded] = useState(true)
    const navigate = useNavigate()
    const handleSubmit=()=>{
    }
    const { openProfile, setOpenProfile } = useContext(GenericContext)

    return (
      <Modal
      open={openProfile}
      onClose={()=>setOpenProfile(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
    <div className="container-fluid" style={{backgroundColor:'rgb(246, 246, 246)',paddingLeft:'0 !Important', paddingRight:'0px !important'}}>
          <div>
            Perfil de usuario
          </div>
            <div className="col-12" style={{backgroundColor:'rgb(246, 246, 246)',paddingLeft:'0 !Important', paddingRight:'0px !important'}}>
                <div className="container-fluid" style={{backgroundColor:'rgb(246, 246, 246)',paddingLeft:'0 !Important', paddingRight:'0px !important'}}>
                {itemsData.map((item, index) => (

                <div  key={index} className="container">

                  <div style={{ display:'flex'}}>

                    <div className={`bg-secondary-soft py-5 rounded`} style={{ marginRight: '12px', width:'20%' }}>
                      <div>
                        {imgWasUploaded ? <img style={{height:'200px', width:'200px', marginBottom:'16px', borderRadius:'25px'}}></img> :''}
                      </div>
                    </div>

                      <div style={{alignSelf:'center',width:'10%'}}>
                      <input type="file" id="customFile" name="file" hidden />
                      <label className={`btn btn-success-soft btn-block ${styles.title}`} htmlFor="customFile">{item.fileUpload.ProfileImageTxt} </label>
                      {<ButtonDas variant='outlined' text={imgWasUploaded ?item.fileUpload.imgUploaded:item.fileUpload.inputLabel}/>}</div> 
                  </div>

                  <hr style={{border:'0.5px solid black', width:'100%'}}></hr>
                  <div className={`bg-secondary-soft px-3 rounded row ${item.secondColumn.bgColor}`}>
                                {item.secondColumn.fields.map((field, fieldIndex) => (
                                <div key={fieldIndex} className="col-md-6 py-2">
                                    <label className={`form-label ${styles.title}`} >{field.label}</label>
                                    <input type={field.type} className={`form-control ${styles.input}`} placeholder={field.placeholder} aria-label={field.ariaLabel} value={field.value} />
                                </div>
                                ))}
                            </div>
                    <div className="row">
                    </div>
                    <div style={{ justifyContent: 'center' }}>
                        <div className={`col-xxl-6 mb-5 mb-xxl-0 ${item.socialMedia.bgColor} ${item.socialMedia.padding}`}>
                            <div className="row g-3">
                                {item.socialMedia.fields.map((socialField, socialIndex) => (
                                <div key={socialIndex} className="col-md-4">
                                    <label className={`form-label ${styles.title}`}><i className={`${socialField.icon} me-2 ${socialField.iconColor}`}></i>{socialField.label}</label>
                                    <input type={socialField.type} className={`form-control ${styles.input}`} placeholder={socialField.placeholder} aria-label={socialField.ariaLabel} value={socialField.value}/>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>))}
                    <div className="col">
                        <div className="bg-secondary-soft rounded">
                            <h4 className="my-4">Change Password send email</h4>
                        </div>
                    </div>
                    {itemsData.map((item, index) => (
                    <div key={index} className="container ">
                        <div className="row">
                            <div className="col-12" style={{fontSize:'24px', marginBottom:20}}>
                                <div className="mt-5">
                                    {item.profile.buttons.map((button, buttonIndex) => (
                                    <ButtonDas style={{height:'70px', width:'150px', borderRadius:'12 !important', fontSize:'18px', marginRight:'12px'}} variant={button.text!=='Go Back' ? "contained":"outlined"} key={buttonIndex} text={button.text} onClick={() => button.onClick && button.text!=='Upgrade' ? navigate(button.onClick, { replace: true }) : handleSubmit()}/>))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

      </Modal>
     
    )
}
