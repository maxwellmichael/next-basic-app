import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/modules/Home.module.scss'
import PrimaryButton from '../comps/buttons/PrimaryButton'
export default function Home() {
  return (
    <>
      <Head>
        <title>My Next App | Home</title>
      </Head>
      <div className={styles.section1}>
        <div className={styles.content_section}>
          <h1 className="headline1">We Bring Life & Color to Your Dreams.</h1>

          <div className={styles.main_button}>
            <PrimaryButton>START A PROJECT</PrimaryButton>
          </div>
        </div>
        <div className={styles.image_section}>
          <Image src="/mockup-banner.png" width={519} height={453} />
        </div>
      </div>
    </>
  )
}
