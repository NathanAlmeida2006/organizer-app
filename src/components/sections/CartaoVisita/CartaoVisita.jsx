import { cartao } from '../../../data/content'
import useReveal from '../../../hooks/useReveal'
import AssinaturaPrincipal from '../../ui/AssinaturaPrincipal'
import styles from './CartaoVisita.module.css'

/*
 * Ícones de traço único, mesma linguagem do símbolo: sem preenchimento,
 * ponta e junção arredondadas.
 */
const icones = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  telefone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 3.5c1 0 2.6 2.6 2.6 3.6 0 1-2 2-2 2.8 0 2 3.2 5.2 5.2 5.2.8 0 1.8-2 2.8-2 1 0 3.6 1.6 3.6 2.6 0 1.6-1.8 3-3.2 3-4.4 0-10.8-6.4-10.8-10.8 0-1.4 1.4-3.2 3-3.2Z" />
    </svg>
  ),
  local: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.5c4-3.8 7-7.4 7-11.2A7 7 0 0 0 5 10.3c0 3.8 3 7.4 7 11.2Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  ),
}

export default function CartaoVisita() {
  const ref = useReveal({ threshold: 0.08 })

  return (
    <section id="cartao" className={`section ${styles.cartao}`} data-theme="claro" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {cartao.kicker}
          </p>
          <h2 className="reveal" style={{ '--i': 1 }}>
            {cartao.title}
          </h2>
          <p className={`${styles.lead} muted reveal`} style={{ '--i': 2 }}>
            {cartao.lead}
          </p>
        </div>

        <div className={styles.grid}>
          <div className="reveal reveal-left" style={{ '--i': 3 }}>
            <div className={`${styles.lado} ${styles.frente}`}>
              <div className={styles.assinatura}>
                <AssinaturaPrincipal />
              </div>
            </div>
            <h3 className={styles.nome}>{cartao.frente.nome}</h3>
          </div>

          <div className="reveal reveal-right" style={{ '--i': 4 }}>
            <div className={`${styles.lado} ${styles.verso}`}>
              <ul className={styles.contato}>
                {cartao.verso.itens.map((item) => (
                  <li key={item.icone} className={styles.linha}>
                    <span className={styles.icone} aria-hidden="true">
                      {icones[item.icone]}
                    </span>
                    <span className={`micro ${styles.texto}`}>{item.texto}</span>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className={styles.nome}>{cartao.verso.nome}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
