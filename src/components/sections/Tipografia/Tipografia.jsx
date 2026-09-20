import { tipografia } from '../../../data/content'
import useReveal from '../../../hooks/useReveal'
import { pad2 } from '../../../utils/format'
import styles from './Tipografia.module.css'

/*
 * Cada família se apresenta escrita em si mesma: o espécime "Aa" e o nome
 * saem na própria fonte que descrevem — é a única prova que um book de
 * padrões precisa dar. A explicação fica sempre na secundária.
 */
function Especime({ item, index }) {
  const ref = useReveal({ threshold: 0.25 })
  return (
    <li ref={ref} className={styles.item} data-familia={item.familia}>
      <div className={`${styles.amostra} reveal reveal-left`}>
        <span className={styles.glifo}>{item.amostra}</span>
      </div>
      <div className={`${styles.corpo} reveal`} style={{ '--i': 1 }}>
        <p className={`micro ${styles.papel}`}>
          {pad2(index + 1)} · {item.papel}
        </p>
        <h3 className={styles.nome}>{item.nome}</h3>
        <p className={`micro ${styles.categoria}`}>{item.categoria}</p>
        <p className={styles.porque}>{item.porque}</p>
        <ul className={styles.aplicacoes}>
          {item.aplicacoes.map((ap) => (
            <li key={ap} className="micro">
              {ap}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Tipografia() {
  const ref = useReveal({ threshold: 0.08 })

  return (
    <section id="tipografia" className="section" data-theme="claro" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {tipografia.kicker}
          </p>
          <h2 className="reveal" style={{ '--i': 1 }}>
            {tipografia.title}
          </h2>
        </div>
        <ol className={styles.lista}>
          {tipografia.items.map((item, i) => (
            <Especime key={item.nome} item={item} index={i} />
          ))}
        </ol>
        <p className={`prose ${styles.regra} reveal`} style={{ '--i': 2 }}>
          {tipografia.regra}
        </p>
      </div>
    </section>
  )
}
