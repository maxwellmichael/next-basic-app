import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styles from '../styles/modules/MobileNavigation.module.scss'
import CloseButton from './buttons/CloseButton'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MobileNavigation = ({ isVisible, toggleVisibility, routes }) => {
  const router = useRouter()
  const checkRouteIsActive = (route) => {
    if (router.pathname == route) {
      return true
    }
    return false
  }
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
      y: 0,
      borderRadius: '0% 100% 100% 0% / 0% 50% 50% 100% ',
    },
    enter: { opacity: 1, x: 0, y: 0, borderRadius: 0 },
    exit: {
      opacity: 0,
      x: -100,
      y: 0,
      borderRadius: '0% 100% 100% 0% / 0% 50% 50% 100% ',
    },
  }

  const linkVariant = {
    hidden: {opacity: 0, x:-100 },
    enter: {opacity: 1, x:0 },
    exit: {opacity: 0, x:-100 },
  }
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{
            type: 'spring',
            duration: 1.6,
            delay: 0.2,
          }} // Set the transition to linear
          className={styles.main}
        >
          <div className={styles.header}>
            <CloseButton
              close={() => {
                toggleVisibility()
              }}
            />
          </div>

          <motion.div
            className={styles.content_body}
            variants={linkVariant}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{
              type: 'spring',
              duration: 1.2,
              delay: 0.2,
              staggerChildren: 0.3,
              
            }}
          >
            {routes.map((route) => {
              return (
                <Link key={route.name} href={route.path}>
                  <motion.a
                    onClick={() => {
                      toggleVisibility()
                    }}
                    className={
                      checkRouteIsActive(route.path) ? styles.is_active : null
                    }
                    variants={linkVariant}
                    whileTap={{ scale: 0.6 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      duration: 1,
                    }}
                  >
                    {route.name}
                  </motion.a>
                </Link>
              )
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileNavigation
