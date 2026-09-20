import { useState } from 'react'
import { voz } from '../../../data/content'
import useReveal from '../../../hooks/useReveal'
import { pad2 } from '../../../utils/format'
import RollingText from '../../ui/RollingText'
import styles from './Voz.module.css'

/* Os pilares de conteúdo em carrossel textual: um gancho por vez, com
   paginação "01 — 05". Ler cinco de uma vez vira lista; um a um vira aula. */
export default function Voz() {
  const ref = useReveal({ threshold: 0.12 })
  const [index, setIndex] = useState(0)
  const total = voz.pilares.length

  return (
    <section id="voz" className="section" data-theme="escuro" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {voz.kicker}
          </p>
          <h2 className="reveal" style={{ '--i': 1 }}>
            {voz.title}
          </h2>
          <p className={`prose ${styles.tom} reveal`} style={{ '--i': 2 }}>
            {voz.tom}
          </p>
        </div>

        <blockquote className={`${styles.script} reveal reveal-blur`} style={{ '--i': 3 }}>
          <p className={`micro ${styles.scriptRotulo}`}>{voz.script.rotulo}</p>
          <p className={`prose ${styles.scriptTexto}`}>{voz.script.texto}</p>
        </blockquote>

        <div className={`${styles.carousel} reveal`} style={{ '--i': 4 }}>
          <div className={styles.viewport}>
            <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
              {voz.pilares.map((item, i) => (
                <article key={item.q} className={styles.slide} aria-hidden={i !== index}>
                  <p className={`micro ${styles.pilar}`}>{item.q}</p>
                  <h3 className={styles.gancho}>{item.gancho}</h3>
                  <p className={`prose ${styles.a}`}>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.controls}>
            <button
              type="button"
              className={`micro ${styles.navBtn}`}
              onClick={() => setIndex((v) => Math.max(0, v - 1))}
              disabled={index === 0}
            >
              <RollingText>{voz.prev}</RollingText>
            </button>
            <p className={`micro ${styles.pagination}`} aria-live="polite">
              <span className={styles.current}>{pad2(index + 1)}</span> — {pad2(total)}
            </p>
            <button
              type="button"
              className={`micro ${styles.navBtn}`}
              onClick={() => setIndex((v) => Math.min(total - 1, v + 1))}
              disabled={index === total - 1}
            >
              <RollingText>{voz.next}</RollingText>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
