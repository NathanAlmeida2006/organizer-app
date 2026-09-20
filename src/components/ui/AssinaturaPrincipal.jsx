import Marca from './Marca'
import styles from './AssinaturaPrincipal.module.css'

/*
 * Lockup: símbolo, nome em Cormorant Garamond (JUH em peso 600, VECHANI em 300)
 * e a função, empilhados e centrados.
 * `grande`: modo capa — escala por faixa de largura.
 * `negativo`: para fundo sálvia — tudo em off-white, só o ramo segue ouro.
 */
export default function AssinaturaPrincipal({ grande = false, negativo = false }) {
  return (
    <div className={`${styles.principal} ${grande ? styles.grande : ''} ${negativo ? styles.negativo : ''}`}>
      <Marca traco={negativo ? 'var(--off-white)' : undefined} />
      <span className={styles.nome}>
        <span className={styles.juh}>JUH</span>
        <span className={styles.vechani}>VECHANI</span>
      </span>
      <span className={styles.funcao}>Personal Organizer</span>
    </div>
  )
}
