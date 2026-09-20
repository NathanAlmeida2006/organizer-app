/*
 * Checagem única do book: a paleta é tom médio e derivados. Todo par
 * fundo/texto declarado nos temas de base.css precisa passar em WCAG AA
 * (4.5:1 para texto normal). Rode com `node scripts/contraste.mjs`.
 */
const cor = {
  offWhite: '#f0efe9',
  salvia: '#768478',
  ouro: '#d8a14d',
  tinta: '#2e3a30',
  salviaMedio: '#5c6b5e',
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

/* [tema, fundo, texto/acento, descrição] — espelha os blocos [data-theme] */
const pares = [
  ['escuro', cor.tinta, cor.offWhite, 'texto corrido'],
  ['escuro', cor.tinta, cor.ouro, 'acento'],
  ['claro', cor.offWhite, cor.tinta, 'texto corrido'],
  ['claro', cor.offWhite, cor.salviaMedio, 'acento'],
  ['ouro', cor.ouro, cor.tinta, 'texto corrido e acento'],
]

let falhou = false
for (const [tema, bg, fg, papel] of pares) {
  const r = razao(bg, fg)
  const ok = r >= 4.5
  if (!ok) falhou = true
  console.log(`${ok ? '✓' : '✗'} ${tema.padEnd(7)} ${bg} / ${fg}  ${r.toFixed(2)}:1  ${papel}`)
}

/* O sálvia puro NÃO passa em nenhum dos extremos — é justamente por isso que
   existem os derivados. Se um dia passar, a razão dos derivados caiu. */
const contra = [razao(cor.salvia, cor.offWhite), razao(cor.salvia, cor.tinta)]
console.log(`· sálvia puro vs extremos: ${contra.map((r) => r.toFixed(2)).join(' / ')} — por isso só bloco e display`)
if (contra.some((r) => r >= 4.5)) throw new Error('sálvia puro passou em AA: revise a nota dos derivados')
if (falhou) throw new Error('par de tema abaixo de 4.5:1 — corrija tokens.css/base.css')
console.log('\nok: todos os pares de tema passam em WCAG AA')
