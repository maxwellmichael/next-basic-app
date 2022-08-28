import Link from 'next/link'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import React,{ useState } from 'react'
import {motion} from 'framer-motion'
import styles from '../styles/modules/Navbar.module.scss'
import MenuButton from './buttons/MenuButton'
import MobileNavigation from './MobileNavigation'


const Navbar = () => {
  const [isMobileNavVisible, toggleMobileNavVisibility] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const router = useRouter()
  const handleClick = () => {
    console.log(isMobileNavVisible)
    toggleMobileNavVisibility(!isMobileNavVisible)
  }
  const checkRouteIsActive = (route) => {
    if (router.pathname == route) {
      return true
    }
    return false
  }
  return (
    <motion.div>
      <nav className={styles.navbar_main}>
        <div className={styles.logo}>
          <Image width={128} height={77} src="/logo.svg" />
        </div>

        {!isMobile ? (
          <div className={styles.routes_container}>
            <Link href="/">
              <a className={checkRouteIsActive('/') ? styles.is_active : null}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  checkRouteIsActive('/about') ? styles.is_active : null
                }
              >
                About
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  checkRouteIsActive('/contact') ? styles.is_active : null
                }
              >
                Contact
              </a>
            </Link>
          </div>
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
      <MobileNavigation isVisible={isMobileNavVisible} toggleVisibility={toggleMobileNavVisibility} />
    </motion.div>
  )
}

export default Navbar
