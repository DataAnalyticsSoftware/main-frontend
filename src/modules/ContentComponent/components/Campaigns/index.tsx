import React, { useContext } from 'react'
import { NavBarComponent } from './components/NavbarComponent'
import { NewCampaignComponent } from './components/NewCampaignComponent'
export const Campaigns = () => {

    return (
        <div>
            <NavBarComponent/>
            <NewCampaignComponent/>
        </div>
  )
}