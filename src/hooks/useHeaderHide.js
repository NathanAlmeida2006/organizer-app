import { useEffect, useState } from 'react'
import listenScrollRaf from '../utils/rafScroll'

/* Header auto-hide: some no scroll para baixo, reaparece no scroll para cima */
export default function useHeaderHide({ delta = 8, minY = 120 } = {}) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    return listenScrollRaf(
      () => {
        const y = window.scrollY
        if (Math.abs(y - lastY) > delta) {
          setHidden(y > lastY && y > minY)
          lastY = y
        }
      },
      { resize: false, immediate: false },
    )
  }, [delta, minY])

  return { hidden }
}
