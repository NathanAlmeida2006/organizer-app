import { capa } from '../../../data/content'
import useReveal from '../../../hooks/useReveal'
import AssinaturaPrincipal from '../../ui/AssinaturaPrincipal'
import styles from './Capa.module.css'

/* A capa do book: só a assinatura principal, em escala grande. */
export default function Capa() {
  const ref = useReveal({ threshold: 0.2 })

  return (
    <section id="abertura" className={`section ${styles.capa}`} data-theme="claro" ref={ref}>
      <div className={`container reveal reveal-blur ${styles.marca}`} style={{ '--i': 0 }}>
        <AssinaturaPrincipal grande />
      </div>
      <p className={`micro reveal float-bob ${styles.cue}`} style={{ '--i': 3 }}>
        {capa.scrollCue}
      </p>
    </section>
  )
}
