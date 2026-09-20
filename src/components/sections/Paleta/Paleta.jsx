import { useState } from 'react'
import { paleta } from '../../../data/content'
import useReveal from '../../../hooks/useReveal'
import styles from './Paleta.module.css'

/* Clicar na amostra copia o hex: num book de padrões é o gesto que o leitor
   quer fazer. Sem clipboard (http, permissão negada) o rótulo não muda. */
function useCopiar() {
  const [copiado, setCopiado] = useState('')
  const copiar = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex)
      setCopiado(hex)
      setTimeout(() => setCopiado(''), 1600)
    } catch {
      /* sem clipboard: o hex segue visível na tela, que é o essencial */
    }
  }
  return [copiado, copiar]
}

/*
 * A etiqueta fica FORA do bloco de cor, não sobre ele: o sálvia é tom médio
 * e não sustenta texto miúdo contra nenhum dos extremos (3,03 com a tinta,
 * 3,41 com o off-white). Fora, a etiqueta herda o contraste da seção.
 */
function Amostra({ item, copiado, copiar }) {
  return (
    <button
      type="button"
      className={styles.amostra}
      onClick={() => copiar(item.hex)}
      data-cursor="copiar"
      aria-label={`Copiar ${item.hex}, ${item.nome}`}
    >
      <span className={styles.chip} style={{ background: item.hex }} aria-hidden="true" />
      <span className={styles.etiqueta}>
        <span className={`micro ${styles.pct}`}>{item.pct}</span>
        <span className={`micro ${styles.hex}`}>{copiado === item.hex ? 'copiado ✓' : item.hex}</span>
      </span>
    </button>
  )
}

export default function Paleta() {
  const ref = useReveal({ threshold: 0.08 })
  const [copiado, copiar] = useCopiar()

  return (
    <section id="paleta" className={`section ${styles.paleta}`} data-theme="escuro" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="micro reveal" style={{ '--i': 0 }}>
            {paleta.kicker}
          </p>
          <h2 className="reveal" style={{ '--i': 1 }}>
            {paleta.title}
          </h2>
        </div>

        {/* A régua da proporção: a própria regra 60-30-10 desenhada */}
        <div className={`${styles.regua} reveal`} style={{ '--i': 2 }} aria-hidden="true">
          {paleta.items.map((item) => (
            <span
              key={item.hex}
              className={styles.faixa}
              style={{ background: item.hex, flexGrow: parseInt(item.pct, 10) }}
            />
          ))}
        </div>

        <ol className={styles.grid}>
          {paleta.items.map((item, i) => (
            <li key={item.hex} className={`${styles.card} reveal ${i % 2 ? 'reveal-right' : 'reveal-left'}`} style={{ '--i': i + 3 }}>
              <Amostra item={item} copiado={copiado} copiar={copiar} />
              <p className={`micro ${styles.papel}`}>{item.papel}</p>
              <h3 className={styles.nome}>{item.nome}</h3>
              <p className={styles.aplicacao}>{item.aplicacao}</p>
              <p className={`${styles.psicologia} muted`}>{item.psicologia}</p>
            </li>
          ))}
        </ol>

        <div className={styles.rodape}>
          <div className={`${styles.bloco} reveal`} style={{ '--i': 6 }}>
            <h3 className={styles.blocoTitle}>{paleta.derivados.title}</h3>
            <p className={`${styles.blocoLead} muted`}>{paleta.derivados.lead}</p>
            <ul className={styles.derivados}>
              {paleta.derivados.items.map((d) => (
                <li key={d.hex} className={styles.derivado}>
                  <span className={styles.derivadoChip} style={{ background: d.hex }} aria-hidden="true" />
                  <span>
                    <span className={styles.derivadoNome}>{d.nome}</span>
                    <span className={`micro ${styles.derivadoNota}`}>
                      {d.hex} · {d.nota}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.bloco} reveal`} style={{ '--i': 7 }}>
            <h3 className={styles.blocoTitle}>{paleta.aplicacao.title}</h3>
            <ul className={styles.lista}>
              {paleta.aplicacao.items.map((texto) => (
                <li key={texto} className={styles.item}>
                  {texto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
