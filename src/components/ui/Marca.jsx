/*
 * O símbolo "Telhado aberto": o telhado numa linha só, com a chaminé, dois
 * arcos por baixo e um ramo que nasce da chaminé. É o ambiente que a marca
 * organiza, visto de fora e em silêncio.
 *
 * Só o traço do telhado varia por aplicação — o ramo é sempre ouro, o acento
 * de 10%. A largura vem do CSS de quem usa (o viewBox já dá a proporção).
 */
export default function Marca({ traco = 'var(--salvia)', ramo = 'var(--ouro)' }) {
  return (
    <svg viewBox="20 40 400 232" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke={traco} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M74.8 254.2 L253.3 118.2 L280.5 139.1 L280.5 109.7 L309.4 109.7 L309.4 161.1 L380.8 215.1" />
        <path d="M216 244 V216 A20 20 0 0 1 256 216 V244 Z" />
        <path d="M268 244 V208 A24 24 0 0 1 316 208 V244 Z" />
      </g>
      <g fill="none" stroke={ramo} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M295 109.7 C295 97.8 295.8 91 298.4 82.5" />
        <path d="M296.7 94.4 C306 92.7 312.8 85.9 313.7 78.3 C306 78.3 298.4 84.2 296.7 94.4 Z" />
        <path d="M295 103.8 C287.3 102.1 282.2 97 281.3 90.2 C288.1 90.2 294.1 95.3 295 103.8 Z" />
      </g>
    </svg>
  )
}
