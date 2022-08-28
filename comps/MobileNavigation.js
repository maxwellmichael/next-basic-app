import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styles from '../styles/modules/MobileNavigation.module.scss'
import CloseButton from './buttons/CloseButton'
const MobileNavigation = ({ isVisible, toggleVisibility }) => {
  const variants = {
    hidden: { opacity: 0, x: -100, y: 0, borderRadius:'0% 100% 100% 0% / 0% 50% 50% 100% '},
    enter: { opacity: 1, x: 0, y: 0, borderRadius:0 },
    exit: { opacity: 0, x: -100, y: 0, borderRadius:'0% 100% 100% 0% / 0% 50% 50% 100% ' },
  }
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'spring', duration:1.6, delay:0.2 }} // Set the transition to linear
          className={styles.main}
        >
            <div className={styles.header}>
                <CloseButton close={()=>{toggleVisibility()}} />
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileNavigation
