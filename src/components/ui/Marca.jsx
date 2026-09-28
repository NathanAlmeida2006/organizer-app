/*
 * O símbolo "Cabide no arco": um cabide sustentado por um arco, o gesto de
 * organizar um closet. A largura vem do CSS de quem usa (o viewBox já dá a
 * proporção).
 */
export default function Marca({ traco = 'var(--salvia)' }) {
  return (
    <svg viewBox="483 264 569 478" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke={traco} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M493 730 L545 730 C565 730 578 717 578 697 L578 462 A188 188 0 0 1 954 462 L954 697 C954 717 967 730 987 730 L1042 730" />
        <path d="M729 441 C730 421 747 408 768 408 C789 408 805 424 804 444 C803 462 790 470 780 477 C770 483 766 490 765 502" />
        <path d="M765 502 C763 525 745 542 718 558 L655 594 C625 612 606 636 607 664 C608 692 628 716 662 716 L808 716 C822 716 834 715 845 713" />
        <path d="M765 502 C768 525 786 542 812 558 L884 600 C910 616 924 638 922 662 C920 690 900 708 845 713" />
        <path d="M614 690 C614 660 640 639 676 639 C712 639 744 660 786 683 C826 705 868 731 928 732" />
      </g>
    </svg>
  )
}
