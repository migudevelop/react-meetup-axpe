import { useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'

export default function useHiddenHeader() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false)
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true)
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update())
  }, [scrollY])

  return { hidden }
}
