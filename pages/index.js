import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/Home.module.scss'
import PrimaryButton from '../comps/buttons/PrimaryButton'
import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eye Candy | Home</title>
      </Head>

      <div className={styles.section1} data-scroll-section>
        <div className={styles.content_section}>
          <h1 className="headline1">We Bring Life & Color to Your Dreams.</h1>
          <div className={styles.main_button} >
            <PrimaryButton>START A PROJECT</PrimaryButton>
          </div>
        </div>
        <div className={styles.image_section} data-scroll data-scroll-direction="vertical" data-scroll-speed="4">
          <Image src="/mockup-2.png" width={600} height={500} />
        </div>
      </div>

      <div
        className={styles.section2}
        style={{ backgroundImage: "url('/dotted_bg.webp')" }}
      >
        <div className={styles.overlay}></div>
      </div>
    </div>
  )
}
