import Layout from '../comps/Layout'
import '../styles/globals.scss'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { useRef } from 'react'
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter()
  const containerRef = useRef(null)
  return (
    <Layout>
      <RLSProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        location={asPath}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <Component {...pageProps} />
        </div>
      </RLSProvider>
    </Layout>
  )
}

export default MyApp
