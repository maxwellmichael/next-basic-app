import styles from '../styles/modules/LinkSelector.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const LinkSelector = ({ routes }) => {
  const router = useRouter()
  const checkRouteIsActive = (route) => {
    if (router.pathname == route) {
      return true
    }
    return false
  }
  return (
    <div className={styles.main}>
      {routes.map((link, i) => {
        return (
          <Link key={link.name} href={link.path}>
            <motion.div
              whileHover={{ opacity: 0.5 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                type: 'spring',
                stiffness: 100,
              }}
            >
              <a
                className={
                  checkRouteIsActive(link.path) ? styles.is_active : null
                }
              >
                {link.name}
              </a>
            </motion.div>
          </Link>
        )
      })}
    </div>
  )
}

export default LinkSelector
