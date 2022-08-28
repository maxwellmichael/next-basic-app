import styles from '../../styles/modules/MenuButton.module.scss'

const MenuButton = ({handleClick}) => {
  return (
    <div onClick={handleClick} className={styles.main}>
        <div className={styles.block1}></div>
        <div className={styles.block2}></div>
        <div className={styles.block3}></div>
    </div>
  )
}

export default MenuButton
