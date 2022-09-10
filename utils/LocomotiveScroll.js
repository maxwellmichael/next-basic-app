import { useState, useRef } from 'react'
import { motion, } from 'framer-motion'
import locomotiveScroll from 'locomotive-scroll'

const LocomotiveScroll = (props) => {
  const [isLocoScroll, setIsLocoScroll] = useState(false)
  const scrollContainer = useRef()

  useEffect(() => {
    let locoScroll
    if (isLocoScroll) {
      locoScroll = new locomotiveScroll({
        el: scrollContainer.current,
        smooth: true, // if set to false, everything works fine
        multiplier: 1,
        class: 'is-reveal',
      })
    }

    return () => {
      // Before the component get unmounted, we destroy the locoscroll instance
      isLocoScroll && locoScroll.destroy()
    }
  }, [isLocoScroll])

  return (
    <motion.div
      ref={scrollContainer}
      data-scroll-container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={() => {
        setIsLocoScroll(true)
      }}
    >
      {props.children}
    </motion.div>
  )
}

export default LocomotiveScroll
