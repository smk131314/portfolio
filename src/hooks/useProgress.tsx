import { useRef, useContext, useEffect } from 'react'
import { NavContext } from '@src/context/NavContext'
import { useOnScreen } from './useOnScreen'

export const useProgress = (activeCareerCardId: string) => {
  const ref = useRef(null)

  const { setActiveCareerCardId } = useContext(NavContext)

  const isOnScreen = useOnScreen(ref)

  useEffect(() => {
    if (isOnScreen) {
      setActiveCareerCardId(activeCareerCardId)
    }
  }, [isOnScreen, setActiveCareerCardId, activeCareerCardId])

  return ref
}
