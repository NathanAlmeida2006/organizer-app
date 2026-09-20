import { onAnchorClick } from '../../hooks/useLenis'
import useMagnetic from '../../hooks/useMagnetic'
import styles from './TextCta.module.css'

/*
 * CTA em cápsula de traço fino (.btn), magnético. Só âncora interna e link
 * externo: o book é página única, não há rota para navegar.
 */
export default function TextCta({ href, children, glyph = '↳', className = '', onClick, ...rest }) {
  const magRef = useMagnetic(0.2)

  const handleClick = (e) => {
    onClick?.(e)
    onAnchorClick(e)
  }

  return (
    <a {...rest} ref={magRef} href={href} onClick={handleClick} className={`${styles.cta} ${className}`}>
      <span className="btn">
        <span className={styles.glyph} aria-hidden="true">
          {glyph}
        </span>
        <span>{children}</span>
      </span>
    </a>
  )
}
