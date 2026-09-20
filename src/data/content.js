/*
 * Todo o conteúdo do book, centralizado.
 * Fontes: organizer/book.pdf (o resumo que virou este site),
 * organizer/identidade-marca.md, organizer/proto-persona.md (v4.1, 13/09/2026)
 * e organizer/manual-operacional.md.
 *
 * TODO: a marca ainda não tem nome nem monograma definidos — `site.wordmark`
 * e o selo usam um provisório. Trocar quando o naming existir.
 */

export const site = {
  name: 'Book de Marca',
  wordmark: 'book.',
  claim: 'Personal Organizer · Blumenau · SC',
  assinatura: 'Você decide, eu organizo',
}

export const nav = [
  { id: 'abertura', label: 'Abertura' },
  { id: 'paleta', label: 'Paleta' },
  { id: 'logo', label: 'Logo' },
  { id: 'tipografia', label: 'Tipografia' },
  { id: 'vibe', label: 'Vibe da marca' },
  { id: 'persona', label: 'Persona' },
  { id: 'voz', label: 'Tom de voz' },
  { id: 'metodo', label: 'Método' },
]

export const preloader = {
  line: 'você decide, eu organizo',
}

export const capa = {
  scrollCue: 'role para folhear ↓',
}

export const hero = {
  kicker: 'book de padrões · versão 1 · setembro de 2026',
  titleLines: ['Você decide,', 'eu organizo.'],
  lead:
    'Este é o book de padrões da marca: a paleta, a tipografia, a vibe, a persona e o método reunidos em um só lugar. Consultoria de organização de alta precisão e sensibilidade, para residências e empresas de Blumenau, sem venda de produtos, sem descarte forçado, sem julgamento.',
  cta: { label: 'começar pela paleta', href: '#paleta' },
}

export const numeros = {
  kicker: 'o serviço em números honestos',
  title: 'O que está fechado.',
  items: [
    { value: 5, label: 'cores na escala principal, na proporção 60-20-10-5-5' },
    { value: 3, label: 'famílias tipográficas, com divisão funcional estrita' },
    { value: 5, label: 'etapas do método, da triagem à manutenção' },
    { value: 4, label: 'destinos possíveis para cada item, e nenhum é descarte automático' },
  ],
  aside:
    'Profissional em início de carreira, construindo portfólio. Isso não é fraqueza a esconder: é posicionamento a administrar, com preço mais acessível que a média de mercado, atenção individual alta e cada projeto documentado. A profissão é reconhecida no CBO 375130 e não exige formação específica: na prática, o portfólio é a credencial.',
}

export const marqueeEtapas = ['triagem', 'proposta', 'execução', 'entrega', 'manutenção']

export const paleta = {
  kicker: 'escala principal · regra 60-20-10-5-5',
  title: 'Paleta.',
  items: [
    {
      pct: '60%',
      papel: 'Dominante',
      nome: 'Off-white creme / pergaminho',
      hex: '#F0E9D6',
      aplicacao: 'Fundo de apresentações, feed, papelaria e propostas em PDF.',
      psicologia:
        'Substitui o branco puro, frio e hospitalar, por um tom quente de porcelana e linho cru. Amplitude e serenidade, sem virar ambiente clínico.',
    },
    {
      pct: '20%',
      papel: 'Identidade e bem-estar',
      nome: 'Verde sálvia orgânico',
      hex: '#7D8A79',
      aplicacao: 'Blocos de destaque, cabeçalhos de proposta, capas de manual e etiquetagem.',
      psicologia:
        'Cor de restauração, equilíbrio e reconexão biofílica. Atua como tônico visual: comunica que a organização traz paz, não apenas ordem.',
    },
    {
      pct: '10%',
      papel: 'Acento e status',
      nome: 'Ouro envelhecido / ochre',
      hex: '#E2CA8C',
      aplicacao: 'Monograma, selos de sigilo, botões de ação e acabamento impresso.',
      psicologia:
        'Responde à motivação nº 1 da persona: status e prestígio. O metálico aquecido eleva a percepção de valor e ancora a marca no luxo silencioso.',
    },
    {
      pct: '5%',
      papel: 'Complementar fria',
      nome: 'Azul névoa',
      hex: '#98AEBC',
      aplicacao: 'Detalhes de apoio: ícones, gráficos, blocos pequenos e peças de ambientação. Sustenta a tinta por cima (5,17:1).',
      psicologia:
        'Um frio calmo que respira ao lado do sálvia. Remete a ar e espaço livre, reforçando a promessa de uma casa que volta a ter respiro, sem esfriar o luxo silencioso do conjunto.',
    },
    {
      pct: '5%',
      papel: 'Complementar quente',
      nome: 'Argila',
      hex: '#9E866C',
      aplicacao: 'Acabamentos que pedem calor: etiquetas, papel e tons de material. Só bloco e display: não sustenta texto miúdo (3,45:1 com a tinta).',
      psicologia:
        'Um tom de terra que aquece o off-white e conversa com os materiais da marca: fibra natural, madeira e linho. Dá sensação de lar sem escurecer o conjunto.',
    },
  ],
  derivados: {
    title: 'Dois neutros derivados',
    lead:
      'O sálvia é tom médio: não sustenta texto corrido contra nenhum dos extremos (3,00:1 sobre o off-white, 3,28:1 sobre a tinta). Para o meio digital a escala ganha dois derivados do próprio sálvia, que não são cores novas, são o mesmo verde em outra claridade. Toda leitura acontece neles; o sálvia puro fica onde é bloco, régua ou display grande.',
    items: [
      { nome: 'Sálvia escurecido (tinta)', hex: '#2E3A30', nota: 'Fundo escuro e tinta sobre claro · 9,82:1 com o off-white' },
      { nome: 'Sálvia médio', hex: '#5C6B5E', nota: 'Rótulo e microcópia sobre off-white · 4,66:1' },
    ],
  },
  aplicacao: {
    title: 'Aplicação prática',
    items: [
      'Digital (Instagram e propostas em PDF): tela em off-white, títulos e blocos explicativos em sálvia, autoridade e marca em ouro envelhecido.',
      'Acabamento físico na casa do cliente: etiqueta em fundo off-white fosco, tipografia Inter em sálvia. Discrição acima de tudo: a etiqueta não deve competir com o armário.',
      'Materiais preferidos: acrílico translúcido, cestaria de fibra natural, caixa em linho. Evitar o excesso de organizador plástico aparente.',
    ],
  },
}

export const logo = {
  kicker: 'símbolo · assinatura · aplicações',
  title: 'Logo.',
  lead:
    'O telhado aberto: uma linha só desenha a casa, com a chaminé e dois arcos por baixo, e da chaminé nasce um ramo. É o ambiente que a marca organiza, visto de fora e em silêncio. O traço é fino e desenhado a régua; o ramo é a única peça em ouro, o acento de 10%.',
  lockups: [
    {
      id: 'principal',
      nome: 'Assinatura principal',
      uso: 'Capa de proposta, papelaria, rodapé de site. Tamanho mínimo: 120px de largura do símbolo.',
      tema: 'claro',
    },
    {
      id: 'reduzida',
      nome: 'Versão reduzida',
      uso: 'Cabeçalho de documento, etiqueta de ambiente, rodapé de post. O mesmo bloco em negativo, sobre sálvia: tudo em off-white, só o ramo segue em ouro.',
      tema: 'salvia',
    },
  ],
  regras: {
    title: 'O que não fazer',
    items: [
      'Não trocar a cor do ramo: o ouro é o que identifica a marca à distância. O traço do telhado muda conforme o fundo; o ramo, nunca.',
      'Não aplicar o símbolo sálvia sobre o próprio sálvia nem sobre a tinta — o contraste some. Sobre fundo escuro, o traço vira off-white.',
      'Não esticar, inclinar nem adicionar sombra. A profundidade da marca vem do material impresso, não do arquivo.',
      'Respiro mínimo em volta do bloco: a altura da chaminé do símbolo, em todos os lados.',
    ],
  },
}

export const tipografia = {
  kicker: 'hierarquia visual · três famílias, três funções',
  title: 'Tipografia.',
  items: [
    {
      nome: 'Cormorant Garamond',
      amostra: 'Aa',
      papel: 'Primária',
      categoria: 'Serifada elegante de alto contraste',
      familia: 'display',
      aplicacoes: ['Monograma e logotipo', 'Títulos de impacto', 'Capas de proposta', 'Destaques do feed'],
      porque:
        'Resgata a tradição tipográfica clássica do alto padrão. Hastes refinadas e serifas delicadas transmitem autoridade e luxo silencioso, o repertório das revistas de decoração que a persona consome.',
    },
    {
      nome: 'Inter',
      amostra: 'Aa',
      papel: 'Secundária',
      categoria: 'Sans-serif neo-grotesca geométrica',
      familia: 'sans',
      aplicacoes: ['Corpo de texto e propostas', 'Legendas e manuais de ambiente', 'Documentos operacionais', 'Etiquetas de closet, cozinha e escritório'],
      porque:
        'Legibilidade técnica e sobriedade. Comunica clareza, ordem e método sem interferir na estética do móvel. É ideal para a etiquetagem que a diarista e o marido precisam ler de relance.',
    },
    {
      nome: 'Alex Brush',
      amostra: 'Aa',
      papel: 'Terciária',
      categoria: 'Script cursiva caligráfica fluida',
      familia: 'script',
      aplicacoes: ['Assinatura da profissional', 'Cartões de mimo', 'Marcas d’água sutis', '“Feito com afeto”, “Manual do Lar”'],
      porque:
        'O toque humano e artesanal do serviço, em diálogo com a aquarela e a cerâmica que a persona pratica. Aplicar com moderação: em excesso, destrói a elegância que as outras duas constroem.',
    },
  ],
  regra:
    'A hierarquia se resolve dentro de cada família, por peso, escala e caixa, nunca introduzindo uma quarta fonte. Títulos não vão em caixa-alta: no luxo silencioso quem grita perde.',
}

export const vibe = {
  kicker: 'atmosfera senso-emocional e linha de design',
  title: 'A vibe.',
  sentimentos: [
    {
      nome: 'Alívio imediato',
      texto: 'A sensação de transferir o peso mental e operacional da bagunça para uma especialista.',
    },
    {
      nome: 'Controle sem rigidez',
      texto: 'A ordem chega sem rotina punitiva e sem descarte doloroso.',
    },
    {
      nome: 'Acolhimento e segurança',
      texto: 'Abrir a porta da intimidade doméstica para alguém discreto, ético e sigiloso.',
    },
    {
      nome: 'Sofisticação silenciosa',
      texto: 'O prazer estético de contemplar gavetas e despensas padronizadas, com elegância sóbria.',
    },
  ],
  design: {
    title: 'Linha de design',
    items: [
      {
        rotulo: 'Estilo',
        texto:
          'Clean, atemporal, funcional. Acrílico translúcido, fibra natural, caixa de linho, etiqueta minimalista. Nada de excesso de plástico aparente.',
      },
      {
        rotulo: 'Formas',
        texto:
          'Linhas geométricas retas e arquitetônicas para o zoneamento e a simetria de guarda; curvas orgânicas suaves, cantos arredondados e arcos sutis para tirar a rigidez técnica.',
      },
      {
        rotulo: 'Texturas',
        texto:
          'Ilustração botânica delicada (lavanda, camomila, folhagem) em aquarela ou gravura vintage. Xadrez gingham em sálvia ou bege e textura de linho rústico, sempre sutis.',
      },
    ],
  },
}

export const persona = {
  kicker: 'nosso melhor cliente · proto-persona v4.1',
  title: 'Maria Júlia.',
  oQueE:
    'Uma persona é a representação semifictícia do cliente ideal, construída a partir de comportamentos e dados reais. Diferente de um público-alvo genérico, ela tem identidade, rotina, medos e objetivos específicos, e é isso que permite ajustar o tom de voz e desenhar soluções para dores exatas.',
  retrato:
    'Maria Júlia tem 27 anos, é representante de produtos cosméticos de farmácia e vive em um apartamento de alto padrão na Alameda Rio Branco, em Blumenau, para onde se mudou há pouco tempo com o marido e um Lulu da Pomerânia. Gerencia uma carteira de clientes multinacionais, dirige um SUV elétrico, treina CrossFit, viaja para a Itália com frequência e sustenta publicamente a imagem de mulher bem-sucedida que construiu sozinha. Essa imagem, porém, termina na porta de casa: a cozinha integrada à sala está permanentemente à vista e permanentemente bagunçada, o closet transborda entre roupas de grife, 25 pares de sapato e cosméticos que ela nem sempre sabe se são dela ou do trabalho, os dois quartos de hóspedes guardam caixas da mudança nunca abertas, e o escritório virou um depósito tão desorganizado que ela usa filtro nas videochamadas para escondê-lo. Faz terapia para a ansiedade, tem plena consciência do problema, mas nenhum tempo para resolvê-lo. Procura uma personal organizer pela primeira vez na vida e traz uma única condição inegociável: nada sai desta casa sem a autorização dela.',
  ficha: [
    { rotulo: 'Idade', valor: '27 anos' },
    { rotulo: 'Profissão', valor: 'Representante de cosméticos de farmácia, PJ para multinacionais' },
    { rotulo: 'Onde mora', valor: 'Apartamento de alto padrão, Alameda Rio Branco, Blumenau' },
    { rotulo: 'Lar', valor: 'Ela, o marido e um Lulu da Pomerânia. Adoção planejada em ~3 anos' },
    { rotulo: 'Renda familiar', valor: 'R$ 15.000, com autonomia para contratar sem consultar ninguém' },
    { rotulo: 'Apoio doméstico', valor: 'Diarista 4 dias por semana, para limpeza e preparo das refeições' },
    { rotulo: 'Formação', valor: 'Biomedicina. Valoriza método, processo e justificativa lógica' },
    { rotulo: 'Onde procura', valor: 'Instagram (#personalorganizerblumenau), indicação de amigas, Google' },
  ],
  motivacoes: {
    title: 'Hierarquia de motivação',
    items: [
      { pos: '1º', nome: 'Status e imagem social', texto: 'Um lar de revista, digno de receber visita sem medo de julgamento.' },
      { pos: '2º', nome: 'Praticidade e tempo', texto: 'Zero tempo para organizar sozinha. Precisa de sistema que a diarista e o marido mantenham.' },
      { pos: '3º', nome: 'Bem-estar', texto: 'Cessar o gatilho emocional do caos doméstico, que alimenta a ansiedade já tratada em terapia.' },
    ],
  },
  ambientes: {
    title: 'Pontos críticos do imóvel',
    items: [
      { nome: 'Cozinha integrada', nota: 'Urgência nº 1. Sem porta e sem divisão: a bagunça fica permanentemente exposta à área social.' },
      { nome: 'Escritório', nota: 'Depósito informal de trabalho, 12 a 18 caixas de arquivo. Daí o filtro nas videochamadas.' },
      { nome: 'Closet do casal', nota: 'Excesso de peças, 25 pares de sapato, malas de viagem e cosméticos misturados com o estoque profissional.' },
      { nome: 'Quartos de hóspedes', nota: 'Caixas da mudança nunca abertas, material de hobby, itens afetivos e religiosos.' },
    ],
  },
  medos: {
    title: 'Medos e objeções',
    items: [
      'Ser julgada pela visita, pelo marido ou pela própria profissional contratada.',
      'Ser forçada a descartar e se arrepender depois.',
      'Perder material de trabalho pelo qual tem responsabilidade contratual de devolução.',
      '“Vai ficar bonito hoje e bagunçado em duas semanas.”',
      '“Não quero uma estranha mexendo nas minhas coisas íntimas.”',
      'Que a adoção planejada chegue e a casa ainda esteja assim.',
    ],
  },
  consciencia: {
    title: 'Níveis de consciência',
    items: [
      { nivel: 'Do problema', grau: 'Alta', nota: 'Sabe nomear o problema e já definiu a prioridade: cozinha e closet.' },
      { nivel: 'Da solução', grau: 'Média-alta', nota: 'Sabe que personal organizers existem. Não conhece metodologia nem formato de cobrança.' },
      { nivel: 'Da profissional', grau: 'Baixa ou nula', nota: 'Nunca contratou. A decisão depende só do Instagram e da condução da triagem.' },
    ],
    conclusao:
      'Consequência direta para a comunicação: conteúdo de conscientização do problema é desperdício com este perfil. Ela já sabe que a casa está bagunçada. O conteúdo precisa responder três perguntas: como funciona, quanto custa e posso confiar nesta pessoa.',
  },
}

export const voz = {
  kicker: 'tom de voz e pilares de conteúdo',
  title: 'Como a marca fala.',
  tom: 'Empática, discreta, acolhedora e segura. Nada de postura professoral ou inquisitiva: a profissional é parceira de confiança que preserva a privacidade do lar.',
  script: {
    rotulo: 'o argumento que desarma a objeção central',
    texto:
      'Sua história e seus pertences merecem respeito, não pressa. Meu método não é sobre descarte radical ou esvaziar armários à força. Nada sai da sua casa sem a sua autorização explícita e consciente. O que você não utiliza diariamente, mas não deseja desapegar agora, entra no Protocolo dos 4 Destinos e é preservado com cuidado em uma caixa de quarentena datada, para que você decida no seu ritmo, durante nossas visitas de manutenção.',
  },
  pilares: [
    {
      q: 'Acolhimento e sigilo',
      gancho: '“Sua casa, seus limites. Zero julgamento.”',
      a: 'Reforçar o compromisso com a confidencialidade e o sigilo absoluto da rotina doméstica. O cliente já sente vergonha: qualquer reação de espanto queima a confiança na hora.',
    },
    {
      q: 'Solução do fluxo duplo',
      gancho: '“Como organizar o home office quando o trabalho invade a casa.”',
      a: 'Explicar a separação física entre o acervo pessoal e o estoque de amostras e materiais do trabalho. É o ponto técnico de maior valor do projeto e abre a porta do segmento corporativo.',
    },
    {
      q: 'Integração com a diarista',
      gancho: '“Um sistema desenhado para quem vive e mantém o lar.”',
      a: 'Mostrar que a organização é desenhada para a rotina de quem está em casa quatro dias por semana, não só para o fim de semana de quem contratou. É o que garante durabilidade.',
    },
    {
      q: 'Elegância sem filtros',
      gancho: '“Sua cozinha e seu escritório prontos para receber e gravar.”',
      a: 'Demonstrar como a organização integrada elimina a vergonha visual em recepções e em reuniões virtuais. Fala diretamente do filtro que ela usa hoje para esconder o fundo.',
    },
    {
      q: 'Autoridade pelo contrário',
      gancho: '“Não compre organizadores antes de fazer isso.”',
      a: 'Contrariar o senso comum gera autoridade. A lista de compras só nasce depois da triagem e das medidas. Comprar antes é o erro mais caro do cliente.',
    },
  ],
  prev: '← anterior',
  next: 'próximo →',
}

export const metodo = {
  kicker: 'do diagnóstico à recorrência',
  title: 'O método.',
  etapas: [
    {
      title: 'Triagem',
      resumo: 'Pré-atendimento: análise crítica e levantamento de requisitos. 1h a 1h30 presencial.',
      items: [
        'Bloco A, contexto de vida: quem mora, rotina, quem participa, apoio doméstico, animais',
        'Bloco B, diagnóstico físico: fotografar, medir armários, mapear espaço morto e focos de acúmulo',
        'Bloco C, regras e restrições: itens afetivos, religiosos, profissionais e as regras do condomínio',
        'Bloco D, expectativa e prioridade: o que incomoda mais e o que precisa estar resolvido primeiro',
        'Não propor solução aqui. A triagem é para ouvir e medir',
      ],
    },
    {
      title: 'Proposta',
      resumo: 'Formalização de escopo, prazo e preço. Enviada em até 48h, enquanto o cliente ainda está mobilizado.',
      items: [
        'Ambientes contemplados, em lista explícita: o que não está na lista não está no preço',
        'Modelo de cobrança: projeto fechado onde o escopo é claro, por hora onde o volume é desconhecido',
        'Estimativa de horas com margem declarada, nunca número exato',
        'O que não está incluído: compra de organizadores, limpeza, montagem, descarte volumoso',
        'Autorização de imagem como item separado, que não altera preço nem escopo',
      ],
    },
    {
      title: 'Execução',
      resumo: 'O trabalho em si, ambiente por ambiente, nunca um ambiente pela metade no fim do dia.',
      items: [
        'Esvaziamento total: é o passo que revela o volume real, para os dois lados',
        'Categorização por tipo e frequência de uso, não por aparência',
        'Triagem do acervo com o cliente presente, o momento de decisão',
        'Zonas por alcance ergonômico; guarda, padronização e etiquetagem discreta',
        'Registro fotográfico do depois, no mesmo ângulo do antes',
      ],
    },
    {
      title: 'Entrega',
      resumo: 'Conclusão formal e captação do portfólio. 30 a 60 min ao fim do projeto.',
      items: [
        'Tour guiado pelo sistema: sem isso, o sistema morre',
        'Orientação presencial a quem usa o ambiente, cônjuge e diarista, não só quem pagou',
        'Manual do ambiente em uma página, ou um áudio curto',
        'Lista de itens em quarentena: o que foi guardado, onde e desde quando',
        'Oferta da manutenção e pedido de indicação, no pico de satisfação',
      ],
    },
    {
      title: 'Manutenção',
      resumo: 'Serviço recorrente sobre ambientes já organizados. Quinzenal nos primeiros três meses, depois trimestral.',
      items: [
        'Reposicionamento do que saiu do lugar e absorção do que entrou',
        'Revisão formal das caixas de quarentena, com o cliente decidindo o destino final',
        'Ajuste do sistema onde ele não funcionou na prática',
        'Registro fotográfico de acompanhamento',
        'É a única linha de receita previsível do negócio',
      ],
    },
  ],
  destinos: {
    kicker: 'protocolo dos 4 destinos',
    title: 'Nenhum destino é descarte.',
    lead:
      'A lógica binária guardar ou descartar é substituída por quatro destinos. É o que transforma a maior objeção da persona em argumento de venda, e nenhum deles implica descarte automático: doação, venda ou descarte só acontecem por decisão explícita do cliente.',
    items: [
      { nome: 'Uso frequente', texto: 'Fica na zona de alcance nobre, considerando a altura de quem usa.' },
      { nome: 'Uso sazonal', texto: 'Fica na casa, em zona alta ou secundária: malas, roupa de inverno.' },
      { nome: 'Quarentena', texto: 'Sai do ambiente e permanece na casa, em caixa datada. Revisto na manutenção.' },
      { nome: 'Decisão adiada', texto: 'O cliente não consegue decidir agora. Segue na casa, marcado, sem pressão.' },
    ],
  },
  fora: {
    title: 'Fora do escopo',
    items: [
      'Venda de produtos organizadores, potes, caixas ou qualquer mercadoria',
      'Limpeza pesada, faxina ou higienização',
      'Obra, montagem de móveis, pintura ou decoração',
      'Decisão unilateral de descarte',
      'Diagnóstico ou aconselhamento clínico sobre acúmulo e consumo',
    ],
  },
}

export const footer = {
  titleLines: ['Feito com afeto.'],
  colunas: [
    {
      kicker: 'o que este documento é',
      texto:
        'Book de padrões da marca: paleta, tipografia, vibe, persona e método em um só lugar. Serve de referência para qualquer peça: post, proposta, etiqueta ou manual de ambiente.',
    },
    {
      kicker: 'onde',
      linhas: ['Blumenau, SC', 'Residencial e corporativo', 'CBO 375130'],
    },
  ],
  bottom: {
    copyright: '© 2026 · Book de padrões, versão 1',
    claim: 'Nada sai da casa sem autorização do cliente.',
    backToTop: 'voltar ao topo ↑',
  },
}
