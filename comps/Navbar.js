import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import React,{ useState } from 'react'
import {motion} from 'framer-motion'
import styles from '../styles/modules/Navbar.module.scss'
import MenuButton from './buttons/MenuButton'
import MobileNavigation from './MobileNavigation'
import LinkSelector from './LinkSelector'

const Navbar = () => {
  const [isMobileNavVisible, toggleMobileNavVisibility] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  
  const handleClick = () => {
    console.log(isMobileNavVisible)
    toggleMobileNavVisibility(!isMobileNavVisible)
  }

  const routes = [
    {path:'/',name:'Home'},
    {path:'/project',name:'Projects'},
    {path:'/about',name:'About'},
    {path:'/contact',name:'Contact'},
  ]
  
  return (
    <motion.div>
      <nav className={styles.navbar_main}>
        <div className={styles.logo}>
          <Image width={128} height={77} src="/logo.svg" />
        </div>

        {!isMobile ? (
          <LinkSelector routes={routes} />
        ) : (
          <div className={styles.menu_button_area}>
            <MenuButton
              handleClick={() => {
                handleClick()
              }}
            />
          </div>
        )}
      </nav>
      <MobileNavigation routes={routes} isVisible={isMobileNavVisible} toggleVisibility={toggleMobileNavVisibility} />
    </motion.div>
  )
}

export default Navbar
