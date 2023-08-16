import { useEffect } from 'react'

export function useClickOutside(ref: any, handler: any): void {
  useEffect(() => {
    const listener = (event: any): void => {
      // Do nothing if clicking ref's element or descendent elements
      if (ref.current || !ref.current.contains(event.target)) {
        handler(event)
      }
    }

    document.addEventListener('mouseup', listener)
    document.addEventListener('touchstart', listener)

    return (): void => {
      document.removeEventListener('mouseup', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
