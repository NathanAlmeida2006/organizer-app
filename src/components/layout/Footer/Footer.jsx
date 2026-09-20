import { footer, site } from '../../../data/content'
import { getLenis } from '../../../hooks/useLenis'
import useReveal from '../../../hooks/useReveal'
import styles from './Footer.module.css'

/*
 * Fecho do book: sem formulário, sem contato, sem CTA de orçamento. Só a
 * assinatura em script (o único lugar onde a terciária aparece em tamanho),
 * a procedência do documento e o selo de sigilo.
 */
export default function Footer() {
  const ref = useReveal({ threshold: 0.1 })

  return (
    <footer className={`section ${styles.footer}`} data-theme="claro" ref={ref}>
      <div className="container">
        <p className={`assina reveal ${styles.assinatura}`} style={{ '--i': 0 }}>
          {footer.titleLines[0]}
        </p>
        <div className={styles.grid}>
          {footer.colunas.map((col, i) => (
            <div key={col.kicker} className={`${styles.col} reveal`} style={{ '--i': i + 2 }}>
              <h2 className={`micro ${styles.colTitle}`}>{col.kicker}</h2>
              {col.texto && <p className={styles.lead}>{col.texto}</p>}
              {col.linhas && (
                <p className={styles.address}>
                  {col.linhas.map((linha) => (
                    <span key={linha}>
                      {linha}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <p className="micro">{footer.bottom.copyright}</p>
          <p className={`micro ${styles.bottomClaim}`}>{footer.bottom.claim}</p>
          <button
            type="button"
            className="micro link-underline"
            onClick={() => {
              const lenis = getLenis()
              if (lenis) lenis.scrollTo(0)
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {footer.bottom.backToTop}
          </button>
        </div>
      </div>
      <p className={`micro ${styles.marca}`}>{site.wordmark}</p>
    </footer>
  )
}
