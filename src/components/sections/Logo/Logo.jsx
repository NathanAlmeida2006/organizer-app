import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { logo } from '../../../data/content'
import { getLenis } from '../../../hooks/useLenis'
import useReveal from '../../../hooks/useReveal'
import AssinaturaPrincipal from '../../ui/AssinaturaPrincipal'
import styles from './Logo.module.css'

/*
 * Cada lockup é mostrado sobre o fundo em que ele de fato vive — é a única
 * forma honesta de provar a regra de contraste que a seção enuncia logo abaixo.
 */
const palcos = {
  principal: <AssinaturaPrincipal />,
  reduzida: (
    <div className={styles.reduzida}>
      <AssinaturaPrincipal negativo />
    </div>
  ),
}

export default function Logo() {
  const ref = useReveal({ threshold: 0.08 })
  const [aberto, setAberto] = useState(null) // lockup em tela cheia

  useEffect(() => {
    if (!aberto) return undefined
    const anterior = document.activeElement
    const lenis = getLenis()
    lenis?.stop()
    document.documentElement.classList.add('lightbox-open')
    const onKey = (e) => e.key === 'Escape' && setAberto(null)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('lightbox-open')
      lenis?.start()
      anterior?.focus()
    }
  }, [aberto])

  return (
    <section id="logo" className={`section ${styles.logo}`} data-theme="claro" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {logo.kicker}
          </p>
          <h2 className="reveal" style={{ '--i': 1 }}>
            {logo.title}
          </h2>
          <p className={`${styles.lead} muted reveal`} style={{ '--i': 2 }}>
            {logo.lead}
          </p>
        </div>

        <ol className={styles.grid}>
          {logo.lockups.map((l, i) => (
            <li key={l.id} className={`${styles.card} reveal ${i % 2 ? 'reveal-right' : 'reveal-left'}`} style={{ '--i': i + 3 }}>
              <button
                type="button"
                className={styles.palco}
                data-fundo={l.tema}
                data-cursor="ampliar"
                aria-label={`Ampliar: ${l.nome}`}
                onClick={() => setAberto(l)}
              >
                {palcos[l.id]}
              </button>
              <h3 className={styles.nome}>{l.nome}</h3>
              <p className={`${styles.uso} muted`}>{l.uso}</p>
            </li>
          ))}
        </ol>

        <div className={`${styles.rodape} reveal`} style={{ '--i': 6 }}>
          <h3 className={styles.blocoTitle}>{logo.regras.title}</h3>
          <ul className={styles.lista}>
            {logo.regras.items.map((texto) => (
              <li key={texto} className={styles.item}>
                {texto}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* portal: as seções se movem (sticky stack) e prenderiam o position: fixed */}
      {aberto &&
        createPortal(
          <div
            className={styles.ampliado}
            data-fundo={aberto.tema}
            role="dialog"
            aria-modal="true"
            aria-label={aberto.nome}
            onClick={() => setAberto(null)}
          >
            <button type="button" className={`micro ${styles.fechar}`} autoFocus>
              fechar ✕
            </button>
            <div className={styles.conteudo} data-zoom={aberto.id !== 'principal'}>
              {aberto.id === 'principal' ? <AssinaturaPrincipal grande /> : palcos[aberto.id]}
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}
