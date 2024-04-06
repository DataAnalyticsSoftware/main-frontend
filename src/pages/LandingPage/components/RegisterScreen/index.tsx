import React, { useContext } from 'react'
import { PrincipalIconDas } from '../../../../components/SvgDas'
import styles from './styles.module.scss'
import { motion } from 'framer-motion';
import { GenericContext } from '../../../../context/GenericContext';
import { CountryToggle } from '../Navbar/CountryToggle';

export const RegisterScreen=()=> {
    const { t, i18n } = useContext(GenericContext);

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay: 0,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
    <div className={styles.container}>  
    <CountryToggle />
        <div>
            <h1>{t('register-screen.title')}</h1>
            <p>{t('register-screen.subtitle1')}</p>
        </div>
        <div className={styles.iconContainer} >
            <div style={{width: '150px', height: '150px'}}> 
                <PrincipalIconDas/>
            </div>
        </div>
        <div>
            <p>{t('register-screen.subtitle2')}</p>
        </div>
    
        
    </div>
    </motion.div>
  )
}