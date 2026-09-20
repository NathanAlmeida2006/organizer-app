import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* Só o subset latin: todo o texto do book (pt-BR) vive nele — os glifos
   decorativos (↳ ✶ ↓) nunca estiveram nos outros subsets e seguem no fallback */
import '@fontsource/cormorant-garamond/latin-300.css'
import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-500.css'
import '@fontsource/cormorant-garamond/latin-600.css'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/alex-brush/latin-400.css'
import 'lenis/dist/lenis.css'
import './styles/tokens.css'
import './styles/base.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
