import React, { useContext, useEffect, useRef, useState } from 'react'
import { PrincipalPageContext } from '../../context/PrincipalPageContext'
import { AnimatePresence, motion, usePresence } from "framer-motion"
import { gsap } from "gsap";
import styles from './styles.module.scss'

function Box({onComplete}: any) {
    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();
  
    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      };

    useEffect(() => {
        setTimeout(() => { onComplete(true) }, 2000)
      if (!isPresent) {
        gsap.to(ref.current, {
          opacity: 0,
          onComplete: () => safeToRemove?.(),
        });
      }
    }, [isPresent, safeToRemove]);
  
    return <div className={styles.box} ref={ref} >

    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={styles.item}
        >
        <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
        />
        </motion.svg>

    </div>
}

export const LoadingPageComponent = (): JSX.Element => {
    const { loading, setLoadingIcon } = useContext(PrincipalPageContext)
    const [ iconComplete, setIconComplete ] = useState<boolean>(false)

    useEffect(() => {
        if(iconComplete)
            setTimeout(() => setLoadingIcon(false), 500)
            
    }, [iconComplete])
    return <AnimatePresence>
                {!iconComplete || loading ? <div style={{width: '100vw', height: '100vh', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={styles.example}>
                        <Box onComplete={setIconComplete} />
                    </div>
                </div> : null}
        </AnimatePresence>
}