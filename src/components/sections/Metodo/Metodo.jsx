import { useState } from 'react'
import { metodo } from '../../../data/content'
import useMediaQuery from '../../../hooks/useMediaQuery'
import useReveal from '../../../hooks/useReveal'
import { pad2 } from '../../../utils/format'
import styles from './Metodo.module.css'

/*
 * As cinco etapas como acordeão: uma aberta por vez, porque o método é
 * sequencial — ler uma etapa de cada vez é como o serviço acontece. No
 * desktop a aberta ganha uma coluna larga ao lado do índice das cinco.
 */
export default function Metodo() {
  const ref = useReveal({ threshold: 0.08 })
  const isMobile = useMediaQuery('(max-width: 899px)')
  const [aberta, setAberta] = useState(0)

  return (
    <section id="metodo" className="section" data-theme="claro" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {metodo.kicker}
          </p>
          <h2 className="reveal" style={{ '--i': 1 }}>
            {metodo.title}
          </h2>
        </div>

        <div className={styles.etapas}>
          {metodo.etapas.map((etapa, i) => {
            const expandida = aberta === i
            return (
              <div key={etapa.title} className={`${styles.etapa} reveal`} style={{ '--i': i + 2 }} data-aberta={expandida}>
                <button
                  type="button"
                  className={styles.head}
                  aria-expanded={expandida}
                  aria-controls={`etapa-${i}`}
                  onClick={() => setAberta(expandida && isMobile ? -1 : i)}
                >
                  <span className={`micro ${styles.num}`}>{pad2(i + 1)}</span>
                  <h3 className={styles.etapaTitle}>{etapa.title}</h3>
                  <span className={styles.toggle} aria-hidden="true">
                    {expandida ? '−' : '+'}
                  </span>
                </button>
                <div id={`etapa-${i}`} className={styles.panel} data-expanded={expandida}>
                  <div className={styles.panelInner}>
                    <p className={styles.resumo}>{etapa.resumo}</p>
                    <ul className={styles.sublist}>
                      {etapa.items.map((item) => (
                        <li key={item} className={styles.entry}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.destinos}>
          <div className={`${styles.destinosHead} reveal`} style={{ '--i': 0 }}>
            <p className="micro">{metodo.destinos.kicker}</p>
            <h3 className={styles.destinosTitle}>{metodo.destinos.title}</h3>
            <p className={`prose ${styles.destinosLead}`}>{metodo.destinos.lead}</p>
          </div>
          <ol className={styles.destinosGrid}>
            {metodo.destinos.items.map((d, i) => (
              <li key={d.nome} className={`${styles.destino} reveal reveal-rise`} style={{ '--i': i + 1 }}>
                <span className={`micro ${styles.destinoNum}`}>{pad2(i + 1)}</span>
                <h4 className={styles.destinoNome}>{d.nome}</h4>
                <p className={styles.destinoTexto}>{d.texto}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className={`${styles.fora} reveal`} style={{ '--i': 1 }}>
          <h3 className={styles.foraTitle}>{metodo.fora.title}</h3>
          <ul className={styles.foraLista}>
            {metodo.fora.items.map((item) => (
              <li key={item} className={styles.foraItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
