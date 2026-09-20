import { marqueeEtapas, numeros } from '../../../data/content'
import useCountUp from '../../../hooks/useCountUp'
import useReveal from '../../../hooks/useReveal'
import Marquee from '../../ui/Marquee'
import styles from './Numeros.module.css'

function Valor({ value }) {
  const [ref, current] = useCountUp(value)
  return (
    <span ref={ref} className={styles.value}>
      {current.toLocaleString('pt-BR')}
    </span>
  )
}

export default function Numeros() {
  const ref = useReveal({ threshold: 0.1 })

  return (
    <section id="numeros" className={`section ${styles.numeros}`} data-theme="claro" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {numeros.kicker}
          </p>
          <h2 className="reveal" style={{ '--i': 1 }}>
            {numeros.title}
          </h2>
        </div>
        <ul className={styles.grid}>
          {numeros.items.map((item, i) => (
            <li key={item.label} className={`${styles.cell} reveal reveal-rise`} style={{ '--i': i + 2 }}>
              <Valor value={item.value} />
              <p className={`micro ${styles.label}`}>{item.label}</p>
            </li>
          ))}
        </ul>
        <p className={`prose ${styles.aside} reveal`} style={{ '--i': 6 }}>
          {numeros.aside}
        </p>
      </div>
      <Marquee items={marqueeEtapas} className={styles.marquee} />
    </section>
  )
}
