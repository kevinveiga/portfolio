import { useCallback, useEffect, useState } from 'react'

export const useChangeHeaderScroll = (elementId = '', offset = 0): boolean => {
  const [stateChangeHeader, setStateChangeHeader] = useState(false)

  const handleScroll = useCallback(() => {
    const elementOffsetHeight = elementId ? document.getElementById(elementId)?.offsetHeight : 0
    const position = elementOffsetHeight || 0
    const scrollYPos = window.scrollY || document.documentElement.scrollTop

    setStateChangeHeader(scrollYPos > position + offset)
  }, [elementId, offset])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return stateChangeHeader
}
