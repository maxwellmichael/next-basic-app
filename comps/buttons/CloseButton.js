import styles from '../../styles/modules/CloseButton.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CloseButton = ({ close }) => {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
      }}
      onClick={() => close()}
      className={styles.main}
    >
      <Image src="/close_icon.svg" width={24} height={24} />
    </motion.div>
  )
}

export default CloseButton
