import { useEffect, useRef, useState } from 'react'
import { preloader } from '../../../data/content'
import { getLenis } from '../../../hooks/useLenis'
import { prefersReducedMotion } from '../../../utils/media'
import styles from './Preloader.module.css'

/*
 * Preloader tipográfico: o lema atravessa a escala (sálvia, ouro e as duas
 * complementares) e assenta no off-white, com um crescimento suave a cada
 * troca: PUMPS passos. CICLO é a duração de um passo — a mesma constante
 * governa o CSS (via --ciclo) e o tempo de saída, para que o painel só suba
 * depois do último passo fechar.
 */
const CICLO = 300
const PUMPS = 5 // o CSS tem um keyframe de cor por pump: mude os dois juntos
export default function Preloader({ onDone }) {
  const [leaving, setLeaving] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    document.documentElement.classList.add('is-loading')
    getLenis()?.stop()

    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      document.documentElement.classList.remove('is-loading')
      getLenis()?.start()
      onDone()
    }

    const reduced = prefersReducedMotion()
    const tLeave = setTimeout(() => setLeaving(true), reduced ? 0 : CICLO * PUMPS)
    const tDone = setTimeout(finish, reduced ? 250 : CICLO * PUMPS + 750)
    return () => {
      clearTimeout(tLeave)
      clearTimeout(tDone)
      document.documentElement.classList.remove('is-loading')
    }
  }, [onDone])

  return (
    <div
      className={styles.preloader}
      data-leaving={leaving}
      style={{ '--ciclo': `${CICLO}ms`, '--pumps': PUMPS }}
      aria-hidden="true"
    >
      <span className={styles.marca}>{preloader.line}</span>
    </div>
  )
}
