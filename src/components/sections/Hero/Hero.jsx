import { hero, site } from '../../../data/content'
import useReveal from '../../../hooks/useReveal'
import RevealText from '../../ui/RevealText'
import TextCta from '../../ui/TextCta'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useReveal({ threshold: 0.2 })

  return (
    <section id="abertura" className={`section ${styles.hero}`} data-theme="claro" ref={ref}>
      <div className={`container ${styles.inner}`}>
        <p className={`micro reveal ${styles.kicker}`} style={{ '--i': 0 }}>
          {hero.kicker}
        </p>
        <RevealText as="h1" lines={hero.titleLines} className={styles.title} split="chars" />
        <p className={`prose reveal ${styles.lead}`} style={{ '--i': 3 }}>
          {hero.lead}
        </p>
        <div className={`reveal ${styles.acoes}`} style={{ '--i': 4 }}>
          <TextCta href={hero.cta.href}>{hero.cta.label}</TextCta>
          <p className={`micro ${styles.claim}`}>{site.claim}</p>
        </div>
      </div>
      <p className={`micro reveal float-bob ${styles.cue}`} style={{ '--i': 5 }}>
        {hero.scrollCue}
      </p>
    </section>
  )
}
