import styles from '../../styles/modules/PrimaryButton.module.scss'

const PrimaryButton = (props) => {
  return (
    <>
      <button className={styles.main}><span className={styles.content}>{props.children}</span></button>
    </>
  )
}

export default PrimaryButton
