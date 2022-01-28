import { useRef, useContext, useEffect } from 'react'
import { NavContext } from '@src/context/NavContext'
import { useOnScreen } from './useOnScreen'

export const useNav = (navLinkId: string) => {
  const ref = useRef(null)

  const { setActiveNavLinkId } = useContext(NavContext)

  const isOnScreen = useOnScreen(ref)

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(navLinkId)
    }
  }, [isOnScreen, setActiveNavLinkId, navLinkId])

  return ref
}
