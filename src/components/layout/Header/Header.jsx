import { useRef, useState } from 'react'
import { site } from '../../../data/content'
import useHeaderHide from '../../../hooks/useHeaderHide'
import useHeaderTheme from '../../../hooks/useHeaderTheme'
import { onAnchorClick } from '../../../hooks/useLenis'
import useMagnetic from '../../../hooks/useMagnetic'
import RollingText from '../../ui/RollingText'
import MenuOverlay from '../MenuOverlay/MenuOverlay'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { hidden, atTop } = useHeaderHide()
  const theme = useHeaderTheme()
  const menuBtnRef = useRef(null)
  const magRef = useMagnetic(0.3)

  const close = () => {
    setMenuOpen(false)
    menuBtnRef.current?.focus()
  }

  return (
    <>
      <header
        className={styles.header}
        data-hidden={hidden && !menuOpen}
        data-top={atTop}
        data-on={menuOpen ? 'escuro' : theme}
      >
        <div className={styles.inner}>
          <a href="#abertura" className={styles.wordmark} onClick={onAnchorClick}>
            {site.wordmark}
          </a>
          <nav className={styles.actions} aria-label="Ações rápidas">
            <a href="#persona" className={`micro ${styles.talk}`} onClick={onAnchorClick}>
              <RollingText>quem atendemos</RollingText>
            </a>
            <span ref={magRef} className={styles.magnet}>
              <button
                ref={menuBtnRef}
                type="button"
                className={`micro ${styles.menuBtn}`}
                aria-expanded={menuOpen}
                aria-controls="menu-overlay"
                onClick={() => (menuOpen ? close() : setMenuOpen(true))}
              >
                <RollingText>{menuOpen ? 'fechar' : 'índice'}</RollingText>
              </button>
            </span>
          </nav>
        </div>
      </header>
      <MenuOverlay open={menuOpen} onClose={close} />
    </>
  )
}
