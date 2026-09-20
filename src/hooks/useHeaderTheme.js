import { useEffect, useState } from 'react'

/*
 * Observa qual seção passa sob o header e devolve o data-theme dela, para
 * que o header troque de cor junto (alternativa ao mix-blend-mode).
 * Todos os temas do book são claros, então o header é tinta em todos —
 * o valor só muda quando algo escuro cobre a página, como o menu.
 */
export default function useHeaderTheme() {
  const [tema, setTema] = useState('claro')

  useEffect(() => {
    const sections = document.querySelectorAll('[data-theme]')
    if (!sections.length) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTema(entry.target.dataset.theme)
        })
      },
      { rootMargin: '0px 0px -94% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return tema
}
