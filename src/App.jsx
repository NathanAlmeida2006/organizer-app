import { useState } from 'react'
import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'
import Capa from './components/sections/Capa/Capa'
import Logo from './components/sections/Logo/Logo'
import Metodo from './components/sections/Metodo/Metodo'
import Numeros from './components/sections/Numeros/Numeros'
import Paleta from './components/sections/Paleta/Paleta'
import Persona from './components/sections/Persona/Persona'
import Preloader from './components/sections/Preloader/Preloader'
import Hero from './components/sections/Hero/Hero'
import Tipografia from './components/sections/Tipografia/Tipografia'
import Vibe from './components/sections/Vibe/Vibe'
import Voz from './components/sections/Voz/Voz'
import Cursor from './components/ui/Cursor'
import { RevealGate } from './hooks/RevealGate'
import useLenis from './hooks/useLenis'
import useSectionDepart from './hooks/useSectionDepart'
import useStickyStack from './hooks/useStickyStack'

/*
 * Página única: o book é lido de cima a baixo, capítulo cobrindo capítulo
 * (sticky stack). Sem rotas — não há subpágina a navegar.
 */
export default function App() {
  const [ready, setReady] = useState(false)
  useLenis()
  useStickyStack()
  useSectionDepart()

  return (
    <RevealGate.Provider value={ready}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <Cursor />
      <Header />
      <main id="conteudo">
        <Capa />
        <Hero />
        <Numeros />
        <Paleta />
        <Logo />
        <Tipografia />
        <Vibe />
        <Persona />
        <Voz />
        <Metodo />
      </main>
      <Footer />
    </RevealGate.Provider>
  )
}
