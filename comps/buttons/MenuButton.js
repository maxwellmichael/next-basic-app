import styles from '../../styles/modules/MenuButton.module.scss'
import { motion } from 'framer-motion'
const MenuButton = ({ handleClick }) => {
  const menu1ButtonVariants = {
    hidden: {
      backgroundColor: null,
      scale: 1,
    },
    enter: { backgroundColor: '#99ffd4', scale: 0.8 },
    exit: { backgroundColor: null, scale: 1 },
  }
  const menu2ButtonVariants = {
    hidden: {
      backgroundColor: null,
      scale: 0.9,
    },
    enter: { backgroundColor: '#99ffd4', scale: 0.7 },
    exit: { backgroundColor: null, scale: 0.9 },
  }
  const menu3ButtonVariants = {
    hidden: {
      backgroundColor: null,
      scale: 0.8,
    },
    enter: { backgroundColor: '#99ffd4', scale: 0.6 },
    exit: { backgroundColor: null, scale: 0.8 },
  }
  return (
    <motion.div
      whileTap={{ scale: 0.6 }}
      onClick={handleClick}
      className={styles.main}
    >
      <motion.div
        className={styles.block1}
        variants={menu1ButtonVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ ease: 'linear', duration: 0.6, repeat: Infinity, repeatType: "reverse",delay:0.1}}
      ></motion.div>
      <motion.div
        className={styles.block2}
        variants={menu2ButtonVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ ease: 'linear', duration: 0.6, repeat: Infinity, repeatType: "reverse", delay:0.2}}
      ></motion.div>
      <motion.div
        className={styles.block3}
        variants={menu3ButtonVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ ease: 'linear', duration: 0.6, repeat: Infinity, repeatType: "reverse", delay:0.3}}
      ></motion.div>
    </motion.div>
  )
}

export default MenuButton
