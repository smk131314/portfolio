import React, { useState, useEffect, RefObject } from 'react'

export const useOnScreen = (ref: any) => {
  const [isOnScreen, setIsOnScreen] = useState(false)

  let observer: any = null

  useEffect(() => {
    if (ref.current)
      observer = new IntersectionObserver(
        ([entry]) => setIsOnScreen(entry.isIntersecting),
        {
          threshold: [0.25, 0.5, 0.75],
        },
      )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  })

  return isOnScreen
}
