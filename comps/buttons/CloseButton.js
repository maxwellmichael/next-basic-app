import styles from '../../styles/modules/CloseButton.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CloseButton = ({ close }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: -200,
      rotate: 360,
    },
    enter: { opacity: 1, x: 0, rotate: 0 },
    exit: {
      opacity: 0,
      x: -200,
      rotate: 360,
    },
  }
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ delay:0.6, type:'spring', duration:1.6 }}
      onClick={() => close()}
      className={styles.main}
    >
      <Image src="/close_icon.svg" width={24} height={24} />
    </motion.div>
  )
}

export default CloseButton
