import { vibe } from '../../../data/content'
import useEntryProgress from '../../../hooks/useEntryProgress'
import useReveal from '../../../hooks/useReveal'
import { useCallback } from 'react'
import { pad2 } from '../../../utils/format'
import RevealText from '../../ui/RevealText'
import styles from './Vibe.module.css'

/* Cada sentimento revela ao entrar no viewport; a régua acima dele se
   desenha junto (scaleX da esquerda para a direita) */
function Sentimento({ index, nome, texto }) {
  const ref = useReveal({ threshold: 0.3 })
  return (
    <li ref={ref} className={styles.item}>
      {index > 0 && <span className={styles.regua} aria-hidden="true" />}
      <div className={`${styles.itemInner} reveal reveal-left`} style={{ '--i': index % 3 }}>
        <span className={`micro ${styles.num}`}>{pad2(index + 1)}</span>
        <h3 className={styles.nome}>{nome}</h3>
        <p className={styles.texto}>{texto}</p>
      </div>
    </li>
  )
}

/*
 * A vibe entra por cima da tipografia com o topo em arco que se aplaina
 * (--entry via useEntryProgress): a curva orgânica suave que a identidade
 * pede, usada como transição de capítulo.
 */
export default function Vibe() {
  const revealRef = useReveal()
  const entryRef = useEntryProgress()
  /* um só <section> alimenta os dois hooks; estável entre renders */
  const sectionRef = useCallback(
    (el) => {
      revealRef.current = el
      entryRef.current = el
    },
    [revealRef, entryRef],
  )

  return (
    <section id="vibe" className={`section ${styles.vibe}`} data-theme="ouro" ref={sectionRef}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {vibe.kicker}
          </p>
          <RevealText as="h2" lines={[vibe.title]} startIndex={1} />
        </div>
        <ol className={styles.lista}>
          {vibe.sentimentos.map((s, i) => (
            <Sentimento key={s.nome} index={i} nome={s.nome} texto={s.texto} />
          ))}
        </ol>
        <div className={styles.design}>
          <h3 className={`${styles.designTitle} reveal`} style={{ '--i': 0 }}>
            {vibe.design.title}
          </h3>
          <dl className={styles.designGrid}>
            {vibe.design.items.map((d, i) => (
              <div key={d.rotulo} className={`${styles.designItem} reveal`} style={{ '--i': i + 1 }}>
                <dt className={`micro ${styles.designRotulo}`}>{d.rotulo}</dt>
                <dd className={styles.designTexto}>{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
