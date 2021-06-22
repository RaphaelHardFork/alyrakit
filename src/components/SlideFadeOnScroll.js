import { useInViewport } from "react-in-viewport"
import { SlideFade } from "@chakra-ui/react"
import { useRef } from "react"

const SlideFadeOnScroll = ({ children }) => {
  const myRef = useRef()
  const { enterCount } = useInViewport(myRef, { threshold: 0.1 }, {}, {})
  return (
    <>
      <SlideFade
        transition={{ enter: { duration: 0.6 } }}
        delay={{ enter: 0.25 }}
        ref={myRef}
        in={enterCount > 1}
        offsetY="20px"
      >
        {children}
      </SlideFade>
    </>
  )
}

export default SlideFadeOnScroll
