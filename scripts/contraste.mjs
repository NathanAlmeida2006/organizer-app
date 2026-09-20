/*
 * Checagem única do book: a paleta é tom médio e derivados. Todo par
 * fundo/texto declarado nos temas de base.css precisa passar em WCAG AA
 * (4.5:1 para texto normal). Rode com `node scripts/contraste.mjs`.
 */
const cor = {
  offWhite: '#f0e9d6',
  salvia: '#7d8a79',
  ouro: '#e2ca8c',
  tinta: '#2e3a30',
  salviaClaro: '#dbd8c5',
  salviaEscuro: '#4f5c4a',
  azulNevoa: '#98aebc',
  argila: '#9e866c',
}

const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => lin(parseInt(hex.slice(i, i + 2), 16) / 255))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const razao = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m)
  return (x + 0.05) / (y + 0.05)
}

/* [tema, fundo, texto/acento, descrição] — espelha os blocos [data-theme],
   o painel do menu e as superfícies internas em sálvia claro */
const pares = [
  ['claro', cor.offWhite, cor.tinta, 'texto corrido'],
  ['claro', cor.offWhite, cor.salviaEscuro, 'acento'],
  ['ouro', cor.ouro, cor.tinta, 'texto corrido e acento'],
  ['menu', cor.offWhite, cor.tinta, 'links do menu em tela cheia'],
  ['menu', cor.offWhite, cor.salviaEscuro, 'link sob o cursor'],
  ['bloco', cor.salviaClaro, cor.tinta, 'texto sobre superfície interna'],
  ['bloco', cor.salviaClaro, cor.salviaEscuro, 'acento sobre superfície interna'],
  ['azul', cor.azulNevoa, cor.tinta, 'texto sobre bloco azul névoa'],
]

let falhou = false
for (const [tema, bg, fg, papel] of pares) {
  const r = razao(bg, fg)
  const ok = r >= 4.5
  if (!ok) falhou = true
  console.log(`${ok ? '✓' : '✗'} ${tema.padEnd(7)} ${bg} / ${fg}  ${r.toFixed(2)}:1  ${papel}`)
}

/* O sálvia puro e a argila NÃO passam em nenhum dos extremos — é justamente
   por isso que existem os derivados. Se um dia passarem, a razão caiu. */
for (const [nome, hex] of [['sálvia', cor.salvia], ['argila', cor.argila]]) {
  const contra = [razao(hex, cor.offWhite), razao(hex, cor.tinta)]
  console.log(`· ${nome} puro vs extremos: ${contra.map((r) => r.toFixed(2)).join(' / ')} — por isso só bloco e display`)
  if (contra.some((r) => r >= 4.5)) throw new Error(`${nome} passou em AA: revise a nota dos derivados`)
}
if (falhou) throw new Error('par de tema abaixo de 4.5:1 — corrija tokens.css/base.css')
console.log('\nok: todos os pares de tema passam em WCAG AA')
