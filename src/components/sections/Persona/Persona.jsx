import { persona } from '../../../data/content'
import useReveal from '../../../hooks/useReveal'
import styles from './Persona.module.css'

/*
 * O dossiê da persona: ficha técnica à esquerda, retrato em um parágrafo à
 * direita, e abaixo os quatro recortes que o método consome — motivação,
 * ambientes críticos, medos e níveis de consciência.
 */
export default function Persona() {
  const ref = useReveal({ threshold: 0.06 })

  return (
    <section id="persona" className="section" data-theme="claro" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {persona.kicker}
          </p>
          <h2 className="reveal" style={{ '--i': 1 }}>
            {persona.title}
          </h2>
          <p className={`prose ${styles.oQueE} reveal`} style={{ '--i': 2 }}>
            {persona.oQueE}
          </p>
        </div>

        <div className={styles.dossie}>
          <dl className={`${styles.ficha} reveal reveal-left`} style={{ '--i': 3 }}>
            {persona.ficha.map((f) => (
              <div key={f.rotulo} className={styles.fichaLinha}>
                <dt className={`micro ${styles.fichaRotulo}`}>{f.rotulo}</dt>
                <dd className={styles.fichaValor}>{f.valor}</dd>
              </div>
            ))}
          </dl>
          <div className={`${styles.retratoBloco} reveal reveal-right`} style={{ '--i': 4 }}>
            <p className={`prose ${styles.retrato}`}>{persona.retrato}</p>
          </div>
        </div>

        <div className={styles.recortes}>
          <div className={`${styles.recorte} reveal`} style={{ '--i': 5 }}>
            <h3 className={styles.recorteTitle}>{persona.motivacoes.title}</h3>
            <ol className={styles.motivacoes}>
              {persona.motivacoes.items.map((m) => (
                <li key={m.pos} className={styles.motivacao}>
                  <span className={styles.pos}>{m.pos}</span>
                  <span>
                    <span className={styles.motivacaoNome}>{m.nome}</span>
                    <span className={styles.motivacaoTexto}>{m.texto}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className={`${styles.recorte} reveal`} style={{ '--i': 6 }}>
            <h3 className={styles.recorteTitle}>{persona.ambientes.title}</h3>
            <ul className={styles.lista}>
              {persona.ambientes.items.map((a) => (
                <li key={a.nome} className={styles.linha}>
                  <span className={styles.linhaNome}>{a.nome}</span>
                  <span className={styles.linhaNota}>{a.nota}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.recorte} reveal`} style={{ '--i': 7 }}>
            <h3 className={styles.recorteTitle}>{persona.medos.title}</h3>
            <ul className={styles.lista}>
              {persona.medos.items.map((m) => (
                <li key={m} className={styles.linha}>
                  <span className={styles.linhaNota}>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.recorte} reveal`} style={{ '--i': 8 }}>
            <h3 className={styles.recorteTitle}>{persona.consciencia.title}</h3>
            <ul className={styles.lista}>
              {persona.consciencia.items.map((c) => (
                <li key={c.nivel} className={styles.linha}>
                  <span className={styles.linhaNome}>
                    {c.nivel} <span className={`micro ${styles.grau}`}>{c.grau}</span>
                  </span>
                  <span className={styles.linhaNota}>{c.nota}</span>
                </li>
              ))}
            </ul>
            <p className={`${styles.conclusao} reveal`} style={{ '--i': 9 }}>
              {persona.consciencia.conclusao}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
