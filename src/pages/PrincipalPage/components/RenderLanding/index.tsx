import React, { useContext } from 'react'
import { TopBarComponent } from '../TopBarComponent'
import { ContentTextComponent } from '../ContentTextComponent'
import { PrincipalPageContext } from '../../context/PrincipalPageContext'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion';

export const RenderLanding = () => {
    const { loading, loadingIcon } = useContext(PrincipalPageContext)
    return (<> {!loadingIcon && !loading && 
    <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
            <TopBarComponent /> 
            <ContentTextComponent />
        </motion.div>} </>)
}