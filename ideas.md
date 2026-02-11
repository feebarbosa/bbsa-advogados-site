# Brainstorming de Design - BBSA Advogados

## Contexto
Site institucional para escritório de advocacia especializado em Direito do Trabalho Empresarial. Deve transmitir credibilidade, organização e confiança, com visual profissional, moderno e limpo. Paleta baseada em verde institucional com tons claros e espaço em branco abundante.

---

<response>
<probability>0.08</probability>
<text>

## Abordagem 1: Corporativo Minimalista com Tipografia Forte

**Design Movement:** Modernismo Corporativo + Tipografia Geométrica

**Core Principles:**
- Hierarquia tipográfica agressiva: títulos em sans-serif bold geométrica, corpo em fonte humanista clara
- Espaço em branco como protagonista: margens generosas, linhas curtas de texto
- Estrutura assimétrica: seções alternadas entre conteúdo à esquerda e espaço à direita
- Minimalismo radical: apenas elementos essenciais, sem decoração

**Color Philosophy:**
- Verde institucional primário (OKLCH 0.5 0.15 142): transmite profissionalismo e estabilidade
- Off-white/Cream (OKLCH 0.98 0.002 70): fundo quente e acolhedor, reduz frieza do branco puro
- Cinza neutro (OKLCH 0.4 0.01 0): texto principal, contraste suficiente
- Verde muito suave (OKLCH 0.96 0.01 142): acentos discretos, linhas divisórias

**Layout Paradigm:**
- Seções em full-width com padding assimétrico
- Alternância: conteúdo + espaço em branco
- Cards com border-left em verde, sem shadow
- Grid de 2 colunas em desktop, colapsando para 1 em mobile

**Signature Elements:**
- Linha vertical fina em verde como divisor entre seções
- Números grandes (tipografia de destaque) para estatísticas ou contadores
- Ícones minimalistas em linha única (stroke), não preenchidos

**Interaction Philosophy:**
- Hover: mudança de cor de texto para verde, transição suave
- Cliques em botões: expansão sutil, sem shadow drop
- Scroll: fade-in de elementos com delay mínimo

**Animation:**
- Fade-in ao entrar na viewport (200ms, ease-out)
- Hover em links: underline que cresce da esquerda para direita (300ms)
- Transições de cor: 200ms cubic-bezier(0.4, 0, 0.2, 1)

**Typography System:**
- Display: Playfair Display Bold (títulos principais)
- Body: Inter Regular 16px (corpo de texto)
- Accent: Montserrat SemiBold (subtítulos, labels)
- Line-height: 1.6 para corpo, 1.2 para títulos

</text>
</response>

<response>
<probability>0.07</probability>
<text>

## Abordagem 2: Institucional Elegante com Texturas Abstratas

**Design Movement:** Neoclassicismo Digital + Soft Modernism

**Core Principles:**
- Elegância através de proporções e ritmo: seções com altura variada, criando movimento vertical
- Texturas abstratas sutis: padrões geométricos muito suaves como background
- Simetria controlada: layout centrado com respiro lateral
- Sofisticação através de detalhes: bordas finas, espaçamento preciso

**Color Philosophy:**
- Verde institucional (OKLCH 0.48 0.12 142): cor primária, transmite autoridade
- Branco puro (OKLCH 1 0 0): fundo limpo, máximo contraste
- Verde pastel (OKLCH 0.92 0.05 142): backgrounds de seções alternadas
- Cinza escuro (OKLCH 0.25 0.01 0): texto, máxima legibilidade

**Layout Paradigm:**
- Seções com altura mínima 60vh, criando respiração
- Conteúdo centralizado com max-width 900px
- Alternância de fundo: branco → verde pastel → branco
- Uso de linhas horizontais finas como separadores

**Signature Elements:**
- Padrão geométrico abstrato muito suave (opacity 3-5%) como background
- Ícones com estilo line art, alinhados à esquerda
- Blocos de citação com barra lateral em verde

**Interaction Philosophy:**
- Hover em seções: mudança sutil de background opacity
- Links: sublinhado em verde que aparece ao hover
- Botões: background verde com texto branco, hover com opacity

**Animation:**
- Entrance: slide-in suave da esquerda (400ms, ease-out-quart)
- Hover em cards: elevation sutil (shadow aumenta)
- Scroll: parallax suave em backgrounds (factor 0.3)

**Typography System:**
- Display: Cormorant Garamond Bold (títulos, elegância clássica)
- Body: Lato Regular 16px (legibilidade moderna)
- Accent: Raleway SemiBold (subtítulos)
- Line-height: 1.7 para corpo, 1.15 para títulos

</text>
</response>

<response>
<probability>0.09</probability>
<text>

## Abordagem 3: Institucional Contemporâneo com Hierarquia Visual Clara

**Design Movement:** Contemporâneo Corporativo + Design Sistêmico

**Core Principles:**
- Hierarquia visual através de tamanho e peso: diferenças claras entre elementos
- Estrutura grid-like mas com respiros: 3 colunas em desktop, mas com gaps generosos
- Funcionalidade visual: cada elemento tem propósito claro
- Modernidade discreta: sem trends passageiras, design atemporal

**Color Philosophy:**
- Verde institucional (OKLCH 0.52 0.14 142): primário, usado com moderação
- Off-white (OKLCH 0.97 0.003 70): fundo principal
- Verde muito claro (OKLCH 0.95 0.02 142): backgrounds de cards
- Cinza médio (OKLCH 0.5 0.01 0): texto secundário

**Layout Paradigm:**
- Header com navegação horizontal simples
- Seções em container com padding simétrico
- Cards com background verde claro, sem border
- Footer com informações organizadas em colunas

**Signature Elements:**
- Ícones em cor verde, tamanho 48px, estilo filled
- Cards com corner radius 8px, padding interno 24px
- Linha divisória horizontal em verde claro (1px)

**Interaction Philosophy:**
- Hover em botões: mudança de background para verde mais escuro
- Links: cor verde, hover com underline
- Cards: hover com mudança de shadow (não de posição)

**Animation:**
- Fade-in ao scroll (300ms)
- Hover em botões: background color transition (200ms)
- Página load: stagger animation em cards (50ms delay entre cada)

**Typography System:**
- Display: Poppins Bold (títulos, moderno)
- Body: Open Sans Regular 16px (legibilidade)
- Accent: Poppins SemiBold (labels, subtítulos)
- Line-height: 1.6 para corpo, 1.3 para títulos

</text>
</response>

---

## Decisão Final

Após análise das três abordagens, a **Abordagem 1: Corporativo Minimalista com Tipografia Forte** foi selecionada como a filosofia de design para o BBSA Advogados.

**Justificativa:**
- Melhor alinha-se com o objetivo de transmitir credibilidade e confiança sem exageros
- Tipografia forte cria hierarquia clara e moderna sem parecer agressiva
- Espaço em branco abundante reforça o minimalismo corporativo solicitado
- Estrutura assimétrica evita a frieza de layouts centrados tradicionais
- Paleta verde + off-white é profissional e acolhedora simultaneamente
- Animações sutis mantêm a elegância sem distrair

**Elementos-chave a implementar:**
- Tipografia: Playfair Display para títulos, Inter para corpo, Montserrat para acentos
- Cores: Verde institucional (OKLCH 0.5 0.15 142), Off-white (OKLCH 0.98 0.002 70), Cinza (OKLCH 0.4 0.01 0)
- Layout: Seções assimétrias com espaço em branco estratégico
- Detalhes: Linhas verticais finas em verde, ícones minimalistas em stroke
- Animações: Fade-in suave, hover com transições de cor, underline crescente

