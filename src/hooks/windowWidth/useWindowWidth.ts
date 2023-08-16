import { useEffect, useState } from 'react'

export function useWindowWidth(): number {
  const [stateWidth, setStateWidth] = useState(0)

  useEffect(() => {
    const handleResize = (): void => {
      setStateWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return (): void => {
      window.removeEventListener('resize', handleResize)
    }
  }, [stateWidth])

  return stateWidth
}
