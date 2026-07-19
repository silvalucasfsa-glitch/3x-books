/*
  MENTOR3X — Base de dados de conteúdo
  Estrutura pensada para escalar até 1000+ títulos.
  Cada resumo é escrito com palavras próprias (paráfrase original),
  nunca trechos literais das obras originais.

  >>> PONTO DE INTEGRAÇÃO SUPABASE <<<
  Quando plugar o backend, esta constante (BOOKS) deve virar uma tabela
  "books" + "chapters" + "quiz_questions" no Postgres, consultada via
  supabase.from('books').select(...). O restante do app já foi escrito
  para consumir esse formato de objeto, então a migração é só trocar
  a fonte de dados (ver app.js, função loadBooks()).
*/

window.CATEGORIES = [
  "3X Fit",
  "3X Originals",
  "3X Personalities",
  "Biografias & Memórias",
  "Carreira & Negócios",
  "Cultura Corporativa & Comunicação",
  "Economia",
  "Inteligência Emocional",
  "Startups & Empreendedorismo",
  "Ficção",
  "Recomeço de Ano",
  "Hackeando o ENEM",
  "Saúde & Dieta",
  "História & Filosofia",
  "IA (Inteligência Artificial)",
  "Investimentos & Finanças",
  "Estilo de Vida",
  "Livros Infantis",
  "Gestão & Liderança",
  "Marketing & Vendas",
  "Modo Copa",
  "Do Fundo do Baú",
  "Parentalidade",
  "Desenvolvimento Pessoal",
  "Produtividade & Gestão do Tempo",
  "Psicologia",
  "Radar 3X",
  "Ciência",
  "Autoajuda & Motivação",
  "Sexo & Relacionamentos",
  "Sociedade & Política",
  "Espiritualidade & Mindfulness",
  "Esportes",
  "Tecnologia e Inovação",
];

window.CATEGORY_ICONS = {
  "3X Fit": "heart",
  "3X Originals": "star",
  "3X Personalities": "profile",
  "Biografias & Memórias": "bookOpen",
  "Carreira & Negócios": "briefcase",
  "Cultura Corporativa & Comunicação": "handshake",
  "Economia": "coins",
  "Inteligência Emocional": "brain",
  "Startups & Empreendedorismo": "bolt",
  "Ficção": "bookOpen",
  "Recomeço de Ano": "sparkle",
  "Hackeando o ENEM": "graduationCap",
  "Saúde & Dieta": "heart",
  "História & Filosofia": "compass",
  "IA (Inteligência Artificial)": "cpu",
  "Investimentos & Finanças": "coins",
  "Estilo de Vida": "sparkle",
  "Livros Infantis": "users",
  "Gestão & Liderança": "compass",
  "Marketing & Vendas": "handshake",
  "Modo Copa": "trophy",
  "Do Fundo do Baú": "clock",
  "Parentalidade": "users",
  "Desenvolvimento Pessoal": "brain",
  "Produtividade & Gestão do Tempo": "bolt",
  "Psicologia": "brain",
  "Radar 3X": "target",
  "Ciência": "flask",
  "Autoajuda & Motivação": "sparkle",
  "Sexo & Relacionamentos": "users",
  "Sociedade & Política": "landmark",
  "Espiritualidade & Mindfulness": "moon",
  "Esportes": "trophy",
  "Tecnologia e Inovação": "cpu",
};

window.BOOKS = [
  {
    id: "pai-rico-pai-pobre",
    title: "Pai Rico, Pai Pobre",
    author: "Baseado na obra de Robert Kiyosaki",
    category: "Investimentos & Finanças",
    tags: ["educação financeira", "ativos", "mentalidade rica"],
    readTimeMin: 15,
    premium: false,
    coverIcon: "coins",
    synopsis:
      "As lições de duas figuras paternas opostas sobre dinheiro, e por que a forma como você pensa sobre ativos e passivos define seu futuro financeiro.",
    chapters: [
      {
        title: "Duas visões, dois destinos",
        content:
          "O autor cresceu ouvindo dois conselhos financeiros diferentes: um do pai biológico, um funcionário público bem formado mas sempre apertado financeiramente, e outro do pai de um amigo, um empresário sem diplomas mas que construiu riqueza real. A diferença não estava na inteligência acadêmica, e sim na forma como cada um enxergava dinheiro, risco e trabalho. Um dizia 'estude para conseguir um emprego seguro'; o outro dizia 'aprenda a fazer o dinheiro trabalhar para você'. Essa divergência de mentalidade é o fio condutor de toda a obra: riqueza começa na cabeça, antes de chegar na conta bancária.",
      },
      {
        title: "Ativo é o que põe dinheiro no seu bolso",
        content:
          "A ideia mais citada do livro é também a mais mal compreendida: um ativo é qualquer coisa que gera renda mesmo quando você não está trabalhando; um passivo é qualquer coisa que tira dinheiro do seu bolso todo mês. Pela definição popular, uma casa própria é vista como ativo — mas se ela não gera renda e ainda exige financiamento, manutenção e impostos, na prática funciona como passivo. Quem entende essa distinção para de comprar coisas que parecem status e passa a comprar coisas que geram fluxo de caixa: imóveis alugados, participações em negócios, royalties, investimentos que pagam dividendos.",
      },
      {
        title: "Trabalhar para aprender, não só para ganhar",
        content:
          "Um dos conselhos mais contraintuitivos é escolher, principalmente no início da carreira, trabalhos que ensinam habilidades valiosas — vendas, negociação, gestão, comunicação — mesmo que paguem menos do que uma opção mais confortável. Quem só persegue o salário mais alto tende a ficar preso numa função sem nunca desenvolver a versatilidade necessária para empreender ou investir com confiança. A pergunta certa não é 'quanto esse trabalho paga', mas 'o que esse trabalho me ensina que vou carregar para o resto da vida'.",
      },
      {
        title: "A armadilha do rato: por que o esforço não basta",
        content:
          "O livro descreve a 'corrida do rato': ganha-se mais, gasta-se mais, e o padrão de vida sobe na mesma velocidade do salário, mantendo a pessoa presa indefinidamente. Escapar disso não depende de ganhar mais — depende de redirecionar parte de cada ganho extra para a compra de ativos antes de aumentar o padrão de consumo. É uma escolha repetida centenas de vezes ao longo da vida: cada aumento, bônus ou comissão pode virar mais uma parcela de conforto imediato ou mais um tijolo de liberdade futura.",
      },
      {
        title: "Impostos, corporações e o jogo que poucos entendem",
        content:
          "Kiyosaki argumenta que o sistema financeiro tem regras diferentes para quem trabalha por salário e para quem possui negócios e investimentos. Empresas bem estruturadas podem pagar despesas antes de calcular impostos; um assalariado paga impostos antes de poder gastar. Entender minimamente como funcionam entidades jurídicas, investimentos e planejamento tributário legal não é sonegação — é jogar o jogo com as mesmas regras que os ricos já usam há gerações, em vez de ignorá-las por desconhecimento.",
      },
      {
        title: "Comece pequeno, comece agora",
        content:
          "A mensagem final é prática: não é preciso um grande capital para começar, é preciso o hábito de estudar investimentos, tolerar pequenos riscos calculados e reinvestir os primeiros resultados. Ler sobre finanças, participar de negócios pequenos, comprar o primeiro ativo gerador de renda — por menor que seja — já muda a trajetória. A diferença entre quem enriquece e quem não enriquece raramente é o ponto de partida; é a quantidade de ciclos de aprendizado e reinvestimento percorridos ao longo dos anos.",
      },
    ],
    quiz: [
      { q: "Segundo o livro, o que define um ativo?", options: ["Algo caro e valorizado", "Algo que põe dinheiro no seu bolso", "Um bem que você usa todos os dias", "Um imóvel de qualquer tipo"], correct: 1, explanation: "Ativo é o que gera renda, independente do valor de mercado do bem." },
      { q: "Por que uma casa própria financiada pode ser considerada um passivo?", options: ["Porque não pode ser vendida", "Porque exige manutenção anual apenas", "Porque tira dinheiro do bolso todo mês sem gerar renda", "Porque perde valor com o tempo"], correct: 2, explanation: "Se ela não gera fluxo de caixa e ainda gera despesas, funciona como passivo na prática." },
      { q: "Qual conselho o livro dá sobre escolher o primeiro emprego?", options: ["Escolher sempre o salário mais alto", "Priorizar aprendizado de habilidades valiosas", "Evitar empregos que exigem vendas", "Buscar apenas estabilidade pública"], correct: 1, explanation: "Habilidades como vendas e gestão valem mais no longo prazo que um salário inicial maior." },
      { q: "O que é a 'corrida do rato' descrita no livro?", options: ["Um jogo de tabuleiro sobre investimentos", "O ciclo de ganhar mais e gastar mais na mesma proporção", "Uma metáfora para o mercado de ações", "A rotina de estudar finanças diariamente"], correct: 1, explanation: "É o padrão de vida subindo junto com a renda, impedindo o acúmulo de ativos." },
      { q: "Como escapar da corrida do rato, segundo o autor?", options: ["Pedindo aumento de salário constantemente", "Reduzindo todos os gastos a zero", "Redirecionando parte dos ganhos extras para comprar ativos", "Trocando de emprego a cada ano"], correct: 2, explanation: "O ponto-chave é comprar ativos antes de elevar o padrão de consumo." },
      { q: "Qual a visão do livro sobre impostos e estrutura jurídica?", options: ["Impostos devem ser sempre sonegados", "Empresas bem estruturadas podem pagar despesas antes de calcular impostos", "Assalariados pagam menos impostos que empresários", "O sistema tributário é igual para todos"], correct: 1, explanation: "O livro explica diferenças legais entre a tributação de pessoa física e jurídica." },
      { q: "Qual é a mensagem final do livro sobre começar a investir?", options: ["É preciso um grande capital inicial", "Só vale a pena após os 40 anos", "Pequenos começos e reinvestimento constante mudam a trajetória", "Investir é sempre um risco desnecessário"], correct: 2, explanation: "O hábito de estudar, arriscar pouco e reinvestir é mais importante que o valor inicial." },
      { q: "O que diferenciava as duas figuras paternas do livro?", options: ["O nível de escolaridade formal apenas", "A mentalidade sobre dinheiro, risco e trabalho", "A quantidade de filhos que tinham", "A cidade onde moravam"], correct: 1, explanation: "A diferença central estava na forma de pensar sobre dinheiro, não na formação acadêmica." },
      { q: "Segundo o livro, onde a riqueza realmente começa?", options: ["Na sorte", "Na herança familiar", "Na mentalidade, antes de chegar à conta bancária", "No mercado de ações"], correct: 2, explanation: "A mudança de mentalidade precede e sustenta a mudança financeira." },
      { q: "Qual exemplo o livro usa de ativos geradores de renda?", options: ["Carros de luxo", "Imóveis alugados e participações em negócios", "Roupas de grife", "Eletrônicos novos"], correct: 1, explanation: "Imóveis alugados, negócios e dividendos são exemplos citados de ativos reais." },
    ],
  },
  {
    id: "habitos-atomicos",
    title: "Hábitos Atômicos",
    author: "Baseado na obra de James Clear",
    category: "Produtividade & Gestão do Tempo",
    tags: ["hábitos", "disciplina", "mudança de comportamento"],
    readTimeMin: 14,
    premium: false,
    coverIcon: "bolt",
    synopsis:
      "Como pequenas mudanças de 1% ao dia se acumulam em resultados extraordinários — e o sistema por trás da construção de hábitos duradouros.",
    chapters: [
      {
        title: "O poder dos pequenos ganhos",
        content:
          "Melhorar 1% por dia parece insignificante no curto prazo, mas composto ao longo de um ano, esse pequeno progresso constante gera um salto de resultado muito maior do que tentativas de mudança radical e insustentável. O oposto também é verdadeiro: piorar 1% por dia, quase imperceptível, leva à deterioração completa com o tempo. A obra defende que resultados são um atraso — um efeito posterior — dos hábitos que você pratica hoje, não um reflexo imediato do esforço de um único dia.",
      },
      {
        title: "Sistemas vencem metas",
        content:
          "Metas definem a direção desejada, mas são os sistemas — os processos e rotinas diários — que realmente determinam o progresso. Duas pessoas podem ter a mesma meta e obter resultados completamente diferentes dependendo do sistema que seguem. Por isso a recomendação central é parar de fixar tanto em objetivos distantes e focar em construir um sistema de hábitos que, se seguido de forma consistente, naturalmente leva à meta como consequência, não como obsessão diária.",
      },
      {
        title: "Identidade antes de comportamento",
        content:
          "A forma mais duradoura de mudar um hábito é mudar a crença que você tem sobre si mesmo. Em vez de dizer 'quero correr uma maratona', a pergunta poderosa é 'que tipo de pessoa eu quero me tornar' — 'uma pessoa que corre', por exemplo. Cada pequena ação vira um 'voto' para o tipo de identidade que você está construindo. Hábitos baseados apenas em resultado ('quero emagrecer 5kg') costumam durar pouco; hábitos baseados em identidade ('sou alguém que cuida do próprio corpo') se sustentam mesmo quando a motivação inicial esfria.",
      },
      {
        title: "As quatro leis da mudança de comportamento",
        content:
          "O livro propõe um framework prático em quatro passos para criar bons hábitos: torná-lo óbvio (deixar pistas visíveis no ambiente), torná-lo atraente (associá-lo a algo que você já gosta de fazer), torná-lo fácil (reduzir o atrito para começar, mesmo que seja uma versão minúscula do hábito) e torná-lo satisfatório (criar uma recompensa imediata que reforce a repetição). Para eliminar maus hábitos, basta inverter cada lei: torná-los invisíveis, pouco atraentes, difíceis e insatisfatórios.",
      },
      {
        title: "O ambiente molda o comportamento mais que a força de vontade",
        content:
          "Confiar apenas em disciplina e motivação é uma estratégia frágil, porque ambas variam de um dia para o outro. Uma abordagem muito mais confiável é redesenhar o ambiente físico para que o comportamento desejado seja o caminho de menor resistência: deixar o livro aberto na mesa em vez do controle remoto à mão, preparar a roupa de treino na noite anterior, remover aplicativos de distração da tela inicial do celular. Pessoas com aparente 'força de vontade' geralmente são apenas pessoas que passam menos tempo em situações tentadoras.",
      },
      {
        title: "A regra dos dois minutos e o efeito acumulado",
        content:
          "Para vencer a procrastinação na formação de um hábito novo, a recomendação é reduzi-lo a uma versão de dois minutos ou menos — 'ler antes de dormir' vira 'ler uma página', 'fazer exercício' vira 'calçar o tênis'. O objetivo inicial não é o resultado, é dominar o ato de simplesmente aparecer e começar. Com a repetição, o hábito criado com pouca fricção naturalmente se expande. Nunca falhar duas vezes seguidas é mais importante do que buscar sequências perfeitas — recuperar-se rápido de uma falha evita que um deslize vire um padrão novo.",
      },
    ],
    quiz: [
      { q: "Qual é a ideia central sobre melhorar 1% ao dia?", options: ["É insignificante e não vale o esforço", "Composto ao longo do tempo, gera resultados extraordinários", "Só funciona em contextos esportivos", "Deve ser feito apenas uma vez por semana"], correct: 1, explanation: "Pequenas melhorias constantes se acumulam de forma exponencial, não linear." },
      { q: "Segundo o livro, o que realmente determina o progresso?", options: ["As metas estabelecidas", "A sorte e o timing", "Os sistemas e rotinas diárias", "A quantidade de motivação inicial"], correct: 2, explanation: "Sistemas consistentes produzem resultado; metas apenas apontam a direção." },
      { q: "Qual é a forma mais duradoura de mudar um hábito, segundo o livro?", options: ["Focar só no resultado final desejado", "Mudar a identidade e crença sobre si mesmo", "Aumentar a força de vontade diariamente", "Estabelecer punições para falhas"], correct: 1, explanation: "Hábitos baseados em identidade ('sou uma pessoa que...') se sustentam mais no tempo." },
      { q: "Quais são as quatro leis da mudança de comportamento?", options: ["Óbvio, atraente, fácil e satisfatório", "Rápido, barato, simples e visível", "Difícil, caro, lento e discreto", "Motivador, longo, exigente e recompensador"], correct: 0, explanation: "Essas quatro leis formam o framework central do livro para criar bons hábitos." },
      { q: "Como eliminar um mau hábito segundo o framework do livro?", options: ["Aumentando a força de vontade", "Invertendo as quatro leis: invisível, pouco atraente, difícil e insatisfatório", "Ignorando o hábito até ele desaparecer", "Substituindo por outro mau hábito"], correct: 1, explanation: "Inverter cada uma das quatro leis reduz a chance de repetição do hábito indesejado." },
      { q: "Por que confiar apenas em força de vontade é uma estratégia frágil?", options: ["Porque força de vontade não existe", "Porque ela varia de um dia para o outro", "Porque é ilegal em alguns contextos", "Porque só funciona à noite"], correct: 1, explanation: "Motivação e disciplina oscilam; redesenhar o ambiente é mais confiável." },
      { q: "O que o livro sugere para reduzir o atrito de um novo hábito?", options: ["Torná-lo mais longo e desafiador", "Reduzi-lo a uma versão de dois minutos", "Fazer apenas nos fins de semana", "Anunciar publicamente a meta"], correct: 1, explanation: "A regra dos dois minutos ajuda a vencer a procrastinação inicial." },
      { q: "O que é mais importante do que buscar uma sequência perfeita de hábitos?", options: ["Nunca falhar duas vezes seguidas", "Fazer o hábito apenas quando motivado", "Comparar o progresso com outras pessoas", "Registrar tudo em uma planilha complexa"], correct: 0, explanation: "Recuperar-se rápido de uma falha evita que ela vire um novo padrão." },
      { q: "Como o ambiente físico influencia os hábitos?", options: ["Tem pouco impacto comparado à motivação", "Pode ser redesenhado para tornar o bom hábito o caminho de menor resistência", "Só importa em ambientes de trabalho", "Não pode ser alterado pela pessoa"], correct: 1, explanation: "Redesenhar o ambiente reduz a dependência de disciplina pura." },
      { q: "O que os hábitos representam para a identidade, segundo o livro?", options: ["Apenas tarefas a serem cumpridas", "Votos para o tipo de pessoa que você está se tornando", "Obrigações impostas por terceiros", "Rituais sem significado real"], correct: 1, explanation: "Cada repetição de um hábito reforça a identidade associada a ele." },
    ],
  },
  {
    id: "como-fazer-amigos",
    title: "Como Fazer Amigos e Influenciar Pessoas",
    author: "Baseado na obra de Dale Carnegie",
    category: "Marketing & Vendas",
    tags: ["relacionamento", "persuasão", "comunicação"],
    readTimeMin: 16,
    premium: true,
    coverIcon: "handshake",
    synopsis:
      "Princípios atemporais de relacionamento humano que ajudam a construir confiança genuína, vender ideias e liderar sem imposição.",
    chapters: [
      {
        title: "Não critique, não condene, não se queixe",
        content:
          "Críticas raramente mudam comportamento — na maioria das vezes, apenas geram defesa e ressentimento, porque atacam diretamente o ego da outra pessoa. O autor argumenta que quase ninguém se considera errado, mesmo cometendo erros óbvios; por isso apontar falhas de forma direta tende a fechar portas em vez de abri-las. A alternativa proposta é buscar entender o porquê do comportamento antes de julgar, e reservar críticas apenas para quando forem construtivas, específicas e feitas em particular.",
      },
      {
        title: "O interesse genuíno abre mais portas que o carisma",
        content:
          "Demonstrar interesse sincero pela vida, pelos problemas e pelas conquistas do outro cria conexão muito mais rápido do que tentar parecer interessante. Perguntas verdadeiras, ouvir com atenção total e lembrar detalhes que a pessoa compartilhou comunicam respeito de forma mais eficaz do que qualquer técnica de conversa. A recomendação prática é simples: em qualquer interação, gaste mais tempo perguntando sobre o outro do que falando sobre si mesmo.",
      },
      {
        title: "O nome próprio é o som mais doce que existe",
        content:
          "Lembrar e usar o nome de uma pessoa corretamente é um dos gestos mais simples e mais subestimados de consideração. Isso vale tanto em negociações quanto em relações cotidianas: chamar alguém pelo nome comunica que você a viu como indivíduo, não como mais uma pessoa qualquer na multidão. O livro recomenda praticar deliberadamente memorizar nomes logo após uma apresentação, repetindo-os durante a própria conversa para fixá-los.",
      },
      {
        title: "Deixe o outro sentir que a ideia foi dele",
        content:
          "Pessoas defendem com mais convicção ideias que acreditam ter tido sozinhas. Em vez de impor uma solução pronta, uma abordagem mais eficaz é fazer perguntas que conduzem o outro a chegar à mesma conclusão por conta própria. Essa técnica é especialmente poderosa em negociações e em liderança: ordens diretas geram obediência relutante, enquanto ideias 'adotadas' geram comprometimento genuíno, porque a pessoa passa a defender algo que sente como seu.",
      },
      {
        title: "Comece sempre pelo que há de acordo",
        content:
          "Em qualquer conversa difícil ou negociação, começar destacando pontos de concordância cria um clima cooperativo antes de introduzir divergências. Abrir uma conversa já em tom de confronto coloca a outra pessoa em posição defensiva antes mesmo de ouvir o argumento completo. O método sugerido é encontrar honestamente algo em comum logo no início, e só depois apresentar a diferença de opinião, de forma respeitosa e sem tom de superioridade.",
      },
      {
        title: "Elogio honesto e apreciação sincera",
        content:
          "Existe uma diferença clara entre bajulação vazia e apreciação honesta: a primeira é percebida como manipulação e destrói confiança; a segunda, quando genuína e específica, fortalece qualquer relação. O livro recomenda reconhecer publicamente conquistas reais das pessoas ao redor, com detalhes específicos em vez de elogios genéricos. Esse hábito, praticado com consistência, transforma a forma como as pessoas reagem à sua presença — em casa, no trabalho e em negociações.",
      },
    ],
    quiz: [
      { q: "Qual é o efeito mais comum de uma crítica direta, segundo o livro?", options: ["Mudança imediata de comportamento", "Defesa e ressentimento na outra pessoa", "Aumento da confiança mútua", "Agradecimento genuíno"], correct: 1, explanation: "Críticas diretas tendem a atacar o ego e gerar reação defensiva." },
      { q: "O que cria conexão mais rápido que tentar parecer interessante?", options: ["Falar sobre suas próprias conquistas", "Demonstrar interesse genuíno pelo outro", "Usar linguagem técnica e formal", "Evitar fazer perguntas pessoais"], correct: 1, explanation: "Interesse sincero pelo outro gera conexão mais forte que autopromoção." },
      { q: "Por que lembrar o nome de uma pessoa é importante, segundo o livro?", options: ["É uma exigência de etiqueta apenas", "Comunica que você a viu como indivíduo", "Ajuda a vender produtos mais caros", "É uma técnica exclusiva de vendas"], correct: 1, explanation: "Usar o nome corretamente comunica consideração e reconhecimento individual." },
      { q: "Qual técnica é recomendada para gerar comprometimento genuíno em vez de obediência relutante?", options: ["Dar ordens diretas e claras", "Fazer perguntas que levem o outro a 'ter a ideia'", "Impor prazos rígidos", "Oferecer recompensas financeiras"], correct: 1, explanation: "Ideias que a pessoa sente como próprias geram mais comprometimento." },
      { q: "Como o livro recomenda iniciar uma conversa difícil?", options: ["Apresentando logo o ponto de maior discordância", "Destacando pontos de concordância primeiro", "Evitando o assunto principal", "Usando tom de urgência e pressão"], correct: 1, explanation: "Começar pelo acordo cria um clima cooperativo antes da divergência." },
      { q: "Qual a diferença entre bajulação e apreciação sincera?", options: ["Não há diferença prática", "Bajulação é vazia; apreciação é honesta e específica", "Bajulação é mais eficaz em negócios", "Apreciação só funciona em público"], correct: 1, explanation: "Apreciação genuína e específica fortalece relações; bajulação é percebida como manipulação." },
      { q: "Segundo o autor, a maioria das pessoas se considera...", options: ["Errada na maior parte do tempo", "Certa, mesmo cometendo erros óbvios", "Indiferente às próprias ações", "Incapaz de julgar a si mesma"], correct: 1, explanation: "Quase ninguém se vê como o culpado, o que torna a crítica direta pouco eficaz." },
      { q: "O que o livro recomenda fazer mais em qualquer conversa?", options: ["Falar mais sobre si mesmo", "Perguntar mais sobre o outro do que falar de si", "Corrigir erros de fala do interlocutor", "Mudar de assunto com frequência"], correct: 1, explanation: "Dar espaço ao outro para falar de si cria conexão mais genuína." },
      { q: "Qual é o principal risco de dar ordens diretas em uma negociação?", options: ["Gerar obediência relutante em vez de comprometimento", "Ser considerado educado demais", "Tornar a conversa mais rápida", "Reduzir a clareza da comunicação"], correct: 0, explanation: "Ordens diretas costumam gerar cumprimento sem convicção real." },
      { q: "Qual é o tom recomendado ao apresentar uma opinião divergente?", options: ["Tom de superioridade para reforçar autoridade", "Tom respeitoso, após destacar pontos em comum", "Tom neutro, sem qualquer contextualização", "Tom de urgência para forçar decisão rápida"], correct: 1, explanation: "Respeito e contexto de concordância prévia tornam a divergência mais aceitável." },
    ],
  },
  {
    id: "estrategia-oceano-azul",
    title: "A Estratégia do Oceano Azul",
    author: "Baseado na obra de W. Chan Kim e Renée Mauborgne",
    category: "Carreira & Negócios",
    tags: ["inovação", "posicionamento", "competitividade"],
    readTimeMin: 15,
    premium: true,
    coverIcon: "briefcase",
    synopsis:
      "Como criar mercados inexplorados em vez de competir em setores saturados — a diferença entre nadar em oceanos vermelhos ou azuis.",
    chapters: [
      {
        title: "Oceanos vermelhos vs. oceanos azuis",
        content:
          "Oceanos vermelhos são mercados existentes, com regras conhecidas e concorrência acirrada, onde empresas lutam pela mesma fatia de clientes até a água ficar 'vermelha' de tanta disputa por margem. Oceanos azuis são espaços de mercado ainda não explorados, criados a partir de uma nova proposta de valor, onde a concorrência se torna momentaneamente irrelevante porque a categoria simplesmente não existia antes daquela empresa criá-la. A tese central do livro é que o crescimento lucrativo de longo prazo vem mais de criar oceanos azuis do que de vencer batalhas em oceanos vermelhos.",
      },
      {
        title: "A curva de valor e o quadro estratégico",
        content:
          "Uma ferramenta central da metodologia é mapear visualmente os atributos que o setor inteiro compete entre si — preço, variedade, atendimento, velocidade — e plotar como cada concorrente se posiciona nesses atributos. Quando todas as curvas de valor das empresas do setor se parecem, isso é sinal de oceano vermelho: todos competindo pelas mesmas variáveis. O objetivo é desenhar uma curva de valor claramente diferente, que rompa esse padrão comum e ofereça algo que ninguém mais está oferecendo.",
      },
      {
        title: "O modelo eliminar-reduzir-elevar-criar",
        content:
          "Para desenhar essa nova curva de valor, o livro propõe quatro perguntas simultâneas: o que pode ser eliminado por completo, do que o setor assume como necessário; o que pode ser reduzido bem abaixo do padrão do setor; o que pode ser elevado bem acima do padrão; e o que pode ser criado, algo que o setor nunca ofereceu. Esse exercício força a empresa a sair da lógica de 'melhorar um pouco tudo' para a lógica de 'reconfigurar o que realmente importa', geralmente reduzindo custo e aumentando valor percebido ao mesmo tempo.",
      },
      {
        title: "Valor e custo não precisam ser um trade-off",
        content:
          "A crença tradicional é que oferecer mais valor exige mais custo. O livro desafia essa premissa: ao eliminar e reduzir atributos que o cliente não valoriza tanto quanto o setor imagina, e elevar ou criar os que realmente importam, é possível entregar mais valor percebido com estrutura de custo mais enxuta. Essa combinação — diferenciação e baixo custo simultâneos — é chamada de inovação de valor, e é o coração de qualquer estratégia de oceano azul bem-sucedida.",
      },
      {
        title: "Buscar não-clientes, não apenas clientes atuais",
        content:
          "Setores costumam focar exclusivamente em entender melhor os clientes existentes, refinando cada vez mais para o mesmo público. O livro propõe olhar também para os 'não-clientes': pessoas que rejeitam o setor por completo, que usam soluções alternativas, ou que estão na fronteira e poderiam entrar se as barreiras certas fossem removidas. Entender por que esses grupos dizem não revela oportunidades de mercado que a pesquisa tradicional com clientes atuais nunca captaria.",
      },
      {
        title: "Executar sem gerar reação interna destrutiva",
        content:
          "Criar uma estratégia de oceano azul não basta se a organização não conseguir executá-la. O livro dedica atenção especial à chamada 'execução justa': envolver as pessoas no processo de decisão, explicar o raciocínio por trás das escolhas e deixar claro o que se espera de cada um, mesmo quando a decisão final não agrada a todos. Processos percebidos como justos geram muito mais engajamento na execução do que decisões tecnicamente corretas, porém impostas de cima para baixo sem explicação.",
      },
    ],
    quiz: [
      { q: "O que caracteriza um 'oceano vermelho'?", options: ["Um mercado totalmente novo e inexplorado", "Um mercado existente com concorrência acirrada", "Uma estratégia sem concorrentes", "Um produto sem clientes"], correct: 1, explanation: "Oceanos vermelhos são mercados saturados, com disputa intensa pela mesma fatia de clientes." },
      { q: "O que é um 'oceano azul'?", options: ["Um mercado com preços mais baixos", "Um espaço de mercado novo, criado por uma proposta de valor inédita", "Um setor regulado pelo governo", "Um mercado apenas digital"], correct: 1, explanation: "Oceano azul é um espaço novo onde a concorrência direta ainda não existe." },
      { q: "Para que serve a 'curva de valor' no quadro estratégico?", options: ["Calcular o lucro líquido da empresa", "Visualizar como as empresas do setor se posicionam nos mesmos atributos", "Definir o preço final do produto", "Substituir o plano de marketing"], correct: 1, explanation: "A curva de valor mostra visualmente o padrão de competição do setor." },
      { q: "Quais são as quatro ações do modelo eliminar-reduzir-elevar-criar?", options: ["Comprar, vender, alugar, doar", "Eliminar, reduzir, elevar e criar atributos de valor", "Planejar, executar, medir, ajustar", "Testar, validar, lançar, escalar"], correct: 1, explanation: "Esse modelo ajuda a reconfigurar quais atributos realmente importam para o cliente." },
      { q: "O que o livro chama de 'inovação de valor'?", options: ["Lançar produtos com tecnologia de ponta apenas", "Entregar mais valor percebido com estrutura de custo mais enxuta", "Aumentar preços para parecer premium", "Copiar a estratégia do líder de mercado"], correct: 1, explanation: "Inovação de valor combina diferenciação e baixo custo simultaneamente." },
      { q: "Quem são os 'não-clientes' mencionados no livro?", options: ["Clientes que já compraram uma vez apenas", "Pessoas que rejeitam o setor ou usam alternativas", "Funcionários da concorrência", "Investidores do setor"], correct: 1, explanation: "Entender por que não-clientes recusam o setor revela oportunidades ocultas." },
      { q: "Por que olhar para não-clientes é valioso segundo o livro?", options: ["Porque eles sempre compram no final", "Porque revelam oportunidades que a pesquisa com clientes atuais não capta", "Porque são mais fáceis de convencer", "Porque pagam preços mais altos"], correct: 1, explanation: "Não-clientes mostram barreiras e demandas não atendidas pelo setor." },
      { q: "O que é 'execução justa' no contexto do livro?", options: ["Dividir o lucro igualmente entre sócios", "Envolver pessoas no processo e explicar o raciocínio das decisões", "Aplicar as mesmas regras para todos os setores", "Reduzir salários de forma proporcional"], correct: 1, explanation: "Processos percebidos como justos aumentam o engajamento na execução da estratégia." },
      { q: "Segundo o livro, valor e custo baixo são...", options: ["Sempre um trade-off inevitável", "Possíveis de alcançar simultaneamente com inovação de valor", "Irrelevantes para a estratégia", "Aplicáveis apenas a startups"], correct: 1, explanation: "O livro desafia a ideia tradicional de que mais valor exige sempre mais custo." },
      { q: "Qual é a tese central do livro sobre crescimento de longo prazo?", options: ["Vem de vencer batalhas competitivas diretas", "Vem mais de criar oceanos azuis do que de competir em oceanos vermelhos", "Depende exclusivamente de baixar preços", "Depende apenas de investimento em publicidade"], correct: 1, explanation: "Criar novos espaços de mercado gera crescimento mais sustentável que a disputa direta." },
    ],
  },
  {
    id: "mindset",
    title: "Mindset: A Nova Psicologia do Sucesso",
    author: "Baseado na obra de Carol S. Dweck",
    category: "Psicologia",
    tags: ["crescimento", "resiliência", "aprendizado"],
    readTimeMin: 13,
    premium: true,
    coverIcon: "brain",
    synopsis:
      "A pesquisa que revelou como a crença sobre a própria capacidade — fixa ou de crescimento — molda o desempenho, os relacionamentos e o sucesso ao longo da vida.",
    chapters: [
      {
        title: "Duas mentalidades, dois caminhos",
        content:
          "A pesquisa da autora identificou dois padrões básicos de crença sobre capacidade humana: a mentalidade fixa, que acredita que talento e inteligência são traços estáveis e imutáveis, e a mentalidade de crescimento, que acredita que habilidades podem ser desenvolvidas com esforço, estratégia e orientação. Essa crença, muitas vezes inconsciente, influencia como a pessoa reage a desafios, críticas e fracassos ao longo de toda a vida — não apenas em contextos acadêmicos, mas em carreira, esportes e relacionamentos.",
      },
      {
        title: "Como cada mentalidade reage ao fracasso",
        content:
          "Quem tem mentalidade fixa tende a interpretar o fracasso como prova de incapacidade pessoal, o que gera evitação de desafios e desistência precoce diante de dificuldade. Quem tem mentalidade de crescimento interpreta o mesmo fracasso como informação útil sobre o que ajustar, o que sustenta persistência mesmo diante de resultados ruins. A diferença não está na frequência dos fracassos — todo mundo falha —, mas no significado atribuído a eles.",
      },
      {
        title: "O perigo de elogiar apenas o talento",
        content:
          "Um dos achados mais citados da pesquisa é que elogiar crianças (ou adultos) exclusivamente pela inteligência ou talento natural, sem mencionar o esforço ou a estratégia usada, tende a reforçar mentalidade fixa e reduzir a disposição a se arriscar depois. Já elogiar o processo — o esforço, a estratégia, a persistência, as escolhas feitas — reforça mentalidade de crescimento e aumenta a disposição a encarar tarefas mais difíceis no futuro, mesmo com risco de errar.",
      },
      {
        title: "Mentalidade em relacionamentos e liderança",
        content:
          "A mentalidade fixa também aparece fora do desempenho individual: em relacionamentos, gera a crença de que compatibilidade deveria ser automática, sem esforço de ajuste contínuo; em times, gera líderes que evitam admitir erros para não parecer fracos. A mentalidade de crescimento, aplicada a esses contextos, sustenta a ideia de que relações e equipes também se desenvolvem com trabalho deliberado, comunicação honesta e disposição para revisar comportamentos.",
      },
      {
        title: "Mentalidade não é apenas otimismo",
        content:
          "A autora faz questão de diferenciar mentalidade de crescimento de simples pensamento positivo. Não se trata de acreditar que qualquer coisa é possível sem esforço, nem de ignorar limitações reais. Trata-se de acreditar que a capacidade atual é apenas um ponto de partida, não um teto definitivo, e que o caminho até um resultado melhor passa por esforço direcionado, não apenas por desejo ou afirmações positivas repetidas sem ação correspondente.",
      },
      {
        title: "Como treinar a mudança de mentalidade",
        content:
          "A pesquisa mostra que a mentalidade não é um traço fixo da pessoa, mas pode ser cultivada. Práticas recomendadas incluem: notar o diálogo interno de mentalidade fixa ('eu não sou bom nisso') e reformulá-lo conscientemente ('eu ainda não sou bom nisso'); buscar deliberadamente tarefas um pouco além da zona de conforto; e valorizar explicitamente o processo de aprendizagem em vez de apenas o resultado final, tanto para si mesmo quanto ao dar feedback para outras pessoas.",
      },
    ],
    quiz: [
      { q: "O que caracteriza a mentalidade fixa?", options: ["Acreditar que habilidades podem ser desenvolvidas", "Acreditar que talento e inteligência são traços imutáveis", "Buscar sempre novos desafios", "Valorizar o esforço acima do resultado"], correct: 1, explanation: "A mentalidade fixa vê capacidade como algo estável e não treinável." },
      { q: "O que caracteriza a mentalidade de crescimento?", options: ["Acreditar que habilidades podem ser desenvolvidas com esforço e estratégia", "Acreditar que talento nasce pronto", "Evitar desafios difíceis", "Depender apenas de sorte"], correct: 0, explanation: "A mentalidade de crescimento vê habilidades como desenvolvíveis ao longo do tempo." },
      { q: "Como quem tem mentalidade fixa costuma reagir ao fracasso?", options: ["Como informação útil para ajustar a estratégia", "Como prova de incapacidade pessoal", "Com indiferença total", "Buscando ajuda imediatamente"], correct: 1, explanation: "A mentalidade fixa tende a interpretar o fracasso como um veredito sobre a própria capacidade." },
      { q: "Qual é o risco de elogiar apenas o talento natural?", options: ["Aumenta a disposição a se arriscar", "Reforça mentalidade fixa e reduz disposição a se arriscar", "Melhora o desempenho a longo prazo", "Não tem efeito mensurável"], correct: 1, explanation: "Elogios focados só no talento reforçam a crença de que capacidade é fixa." },
      { q: "O que deve ser elogiado, segundo a pesquisa, para reforçar mentalidade de crescimento?", options: ["Apenas o resultado final", "O esforço, a estratégia e o processo", "A aparência da pessoa", "A comparação com outras pessoas"], correct: 1, explanation: "Elogiar o processo sustenta a crença de que esforço leva a melhoria." },
      { q: "Como a mentalidade fixa pode aparecer em relacionamentos?", options: ["Na crença de que compatibilidade deveria ser automática", "Na busca constante por melhorar a comunicação", "No esforço contínuo de ajuste mútuo", "Na disposição de admitir erros"], correct: 0, explanation: "A mentalidade fixa aplicada a relações supõe que compatibilidade não precisa de trabalho." },
      { q: "Mentalidade de crescimento é o mesmo que pensamento positivo?", options: ["Sim, são conceitos idênticos", "Não, envolve esforço direcionado, não apenas otimismo", "Sim, ambos ignoram limitações reais", "Não, são conceitos opostos e incompatíveis"], correct: 1, explanation: "A autora diferencia mentalidade de crescimento de otimismo sem ação correspondente." },
      { q: "A mentalidade de uma pessoa é considerada...", options: ["Um traço genético fixo e imutável", "Algo que pode ser cultivado e treinado", "Irrelevante para o desempenho", "Definida apenas na infância"], correct: 1, explanation: "A pesquisa mostra que a mentalidade pode mudar com prática consciente." },
      { q: "Qual prática é recomendada para treinar a mentalidade de crescimento?", options: ["Evitar tarefas fora da zona de conforto", "Reformular o diálogo interno de 'não sou bom' para 'ainda não sou bom'", "Focar apenas nos resultados finais", "Comparar-se constantemente com os outros"], correct: 1, explanation: "Reformular o diálogo interno ajuda a sustentar a crença de que há espaço para evoluir." },
      { q: "Como líderes com mentalidade fixa costumam agir em equipes?", options: ["Admitem erros com facilidade", "Evitam admitir erros para não parecer fracos", "Incentivam feedback constante", "Valorizam o processo de aprendizagem do time"], correct: 1, explanation: "A mentalidade fixa em liderança gera medo de parecer incompetente ao errar." },
    ],
  },
  {
    id: "homem-mais-rico-babilonia",
    title: "O Homem Mais Rico da Babilônia",
    author: "Baseado na obra de George S. Clason",
    category: "Investimentos & Finanças",
    tags: ["poupança", "princípios financeiros", "riqueza"],
    readTimeMin: 14,
    premium: true,
    coverIcon: "coins",
    synopsis:
      "Princípios financeiros atemporais, contados através de parábolas ambientadas na antiga Babilônia, sobre como acumular e proteger riqueza.",
    chapters: [
      {
        title: "Pague-se primeiro",
        content:
          "O primeiro e mais repetido princípio da obra é simples de entender, mas difícil de praticar: reserve uma parte de tudo que você ganha antes de pagar qualquer outra despesa, mesmo que seja um percentual pequeno. A recomendação clássica da parábola é guardar pelo menos um décimo de toda renda recebida. A lógica é que, se você espera sobrar dinheiro no fim do mês para poupar, quase nunca sobra; poupar precisa ser tratado como a primeira conta a pagar, não a última.",
      },
      {
        title: "Controle seus gastos, não sua renda",
        content:
          "Uma das parábolas mostra que o problema financeiro raramente é 'ganhar pouco' — é gastar de acordo com desejos que crescem na mesma velocidade que a renda. A recomendação é fazer um orçamento honesto, separando o que é necessidade real do que é desejo que pode esperar, e ajustar os gastos para caber dentro do que sobra depois de já ter separado a parcela de poupança. Riqueza não depende só de quanto entra, depende de qual parte do que entra permanece.",
      },
      {
        title: "Faça seu ouro trabalhar",
        content:
          "Dinheiro parado não cresce; dinheiro investido com critério gera mais dinheiro através de juros, lucros de negócios ou aluguéis. A obra ilustra o poder dos juros compostos com uma parábola sobre como pequenas quantias, reinvestidas ao longo de gerações, se transformam em fortunas. A lição prática é buscar deliberadamente formas de colocar a parcela poupada para render, em vez de deixá-la simplesmente acumulada sem gerar retorno adicional.",
      },
      {
        title: "Proteja-se de perdas com cautela",
        content:
          "Antes de buscar retornos altos, é preciso proteger o capital já acumulado. Uma das histórias mostra um personagem que perde suas economias ao seguir um conselho de investimento de alguém sem conhecimento real sobre o assunto — um joalheiro que apostou em pedras preciosas por conselho de um pastor de ovelhas. A lição é buscar orientação de quem realmente tem experiência prática comprovada na área do investimento, e nunca investir em algo que não se compreende completamente.",
      },
      {
        title: "Sua casa deve ser um investimento, não só um gasto",
        content:
          "A obra sugere que, quando possível, é melhor direcionar parte dos recursos para ter uma moradia própria em vez de pagar aluguel indefinidamente, desde que isso não comprometa a capacidade de poupar e investir o restante. A ideia central não é contra alugar, mas contra o hábito de nunca planejar a transição para reduzir uma despesa fixa recorrente que poderia, no lugar, financiar um bem que gera segurança de longo prazo.",
      },
      {
        title: "Garanta renda futura e cresça sua capacidade de ganhar",
        content:
          "Além de poupar e investir, a obra recomenda se preparar para os anos em que a capacidade de trabalho diminuir — o equivalente moderno a um plano de aposentadoria ou fonte de renda passiva de longo prazo. Paralelamente, recomenda-se investir continuamente na própria capacidade de gerar renda: estudar o próprio ofício, melhorar habilidades e se manter relevante, porque a maior fonte de riqueza ao longo da vida costuma ser a combinação entre capacidade de ganhar e disciplina para poupar parte do que se ganha.",
      },
    ],
    quiz: [
      { q: "Qual é o primeiro princípio da obra sobre poupança?", options: ["Poupar apenas o que sobra no fim do mês", "Pagar-se primeiro, guardando uma parte da renda antes de outras despesas", "Poupar somente após quitar todas as dívidas", "Investir tudo imediatamente sem reservar nada"], correct: 1, explanation: "Poupar deve ser tratado como a primeira conta a pagar, não a última." },
      { q: "Qual percentual de poupança a parábola clássica recomenda como mínimo?", options: ["Um quarto da renda", "Metade da renda", "Um décimo da renda", "Não há recomendação específica"], correct: 2, explanation: "A recomendação tradicional da obra é guardar ao menos 10% de toda renda recebida." },
      { q: "Segundo o livro, qual é o verdadeiro problema financeiro da maioria das pessoas?", options: ["Ganhar pouco", "Gastar de acordo com desejos que crescem junto com a renda", "Pagar impostos altos", "Não ter acesso a investimentos"], correct: 1, explanation: "O problema geralmente não é a renda baixa, mas o padrão de consumo crescente." },
      { q: "O que significa 'fazer seu ouro trabalhar'?", options: ["Guardar dinheiro em casa com segurança", "Investir o dinheiro poupado para gerar mais retorno", "Gastar rapidamente antes da inflação", "Emprestar dinheiro sem juros para amigos"], correct: 1, explanation: "Dinheiro investido com critério gera retorno adicional através de juros e lucros." },
      { q: "Qual é a lição da história do joalheiro que perdeu dinheiro com pedras preciosas?", options: ["Nunca investir em pedras preciosas", "Buscar orientação de quem tem experiência real na área do investimento", "Investir apenas em imóveis", "Confiar sempre em conselhos de amigos"], correct: 1, explanation: "A história alerta sobre seguir conselhos de quem não tem conhecimento comprovado no assunto." },
      { q: "O que a obra recomenda antes de buscar retornos altos?", options: ["Assumir o máximo de risco possível", "Proteger o capital já acumulado com cautela", "Investir tudo em um único ativo", "Ignorar o histórico do investimento"], correct: 1, explanation: "Proteção do capital vem antes da busca por retornos elevados." },
      { q: "Qual é a visão do livro sobre moradia própria?", options: ["Contra qualquer forma de aluguel", "A favor de direcionar parte dos recursos para reduzir despesa fixa recorrente, quando possível", "Recomenda nunca comprar imóveis", "É irrelevante para a riqueza"], correct: 1, explanation: "A obra sugere migrar de aluguel para casa própria sem comprometer poupança e investimentos." },
      { q: "O que a obra recomenda para os anos em que a capacidade de trabalho diminuir?", options: ["Ignorar o planejamento e confiar na sorte", "Preparar uma fonte de renda futura ou passiva", "Depender exclusivamente de familiares", "Trabalhar até não ser mais fisicamente possível"], correct: 1, explanation: "Um plano de renda futura é equivalente moderno a uma aposentadoria bem planejada." },
      { q: "Além de poupar, o que mais a obra recomenda investir continuamente?", options: ["Apenas em ações e imóveis", "Na própria capacidade de gerar renda e habilidades", "Em bens de consumo de luxo", "Em criptoativos exclusivamente"], correct: 1, explanation: "Desenvolver a própria capacidade de ganhar é citado como fonte central de riqueza." },
      { q: "Qual é o formato usado pela obra para transmitir os princípios financeiros?", options: ["Fórmulas matemáticas complexas", "Parábolas ambientadas na antiga Babilônia", "Estudos de caso de empresas modernas", "Entrevistas com investidores"], correct: 1, explanation: "O livro usa histórias e parábolas para ilustrar cada princípio financeiro." },
    ],
  },

  {
    id: "sete-habitos",
    title: "Os 7 Hábitos das Pessoas Altamente Eficazes",
    author: "Baseado na obra de Stephen R. Covey",
    category: "Desenvolvimento Pessoal",
    tags: ["caráter", "eficácia pessoal", "princípios"],
    readTimeMin: 17,
    premium: true,
    coverIcon: "brain",
    synopsis:
      "Um framework de sete princípios, do mais pessoal ao mais interpessoal, para construir eficácia duradoura baseada em caráter, não em técnicas superficiais.",
    chapters: [
      {
        title: "De dentro para fora",
        content:
          "A maior parte dos conselhos de autoajuda foca em técnicas de imagem e atitude — uma 'ética da personalidade'. O autor propõe o oposto: mudança duradoura vem de uma 'ética do caráter', trabalhando primeiro os próprios princípios e valores internos antes de tentar mudar comportamentos externos ou a percepção alheia. Tentar parecer eficaz sem ser eficaz por dentro é insustentável; mais cedo ou mais tarde, o caráter real aparece nas rachaduras da imagem construída.",
      },
      {
        title: "Seja proativo",
        content:
          "O primeiro hábito é reconhecer que, entre um estímulo e a resposta a ele, existe um espaço de escolha. Pessoas reativas atribuem seus sentimentos e resultados a circunstâncias externas; pessoas proativas assumem responsabilidade por suas respostas, focando energia no que podem controlar — seu 'círculo de influência' — em vez de gastar energia reclamando do que está fora dele. Linguagem proativa ('vou escolher') substitui linguagem reativa ('não tenho escolha'), e essa mudança de vocabulário reforça a mudança de postura.",
      },
      {
        title: "Comece com o objetivo em mente",
        content:
          "Antes de agir, é preciso ter clareza de onde se quer chegar — em projetos, carreira e na vida como um todo. O exercício sugerido é imaginar o próprio funeral e o que gostaria que fosse dito sobre você, para extrair dali os valores que realmente importam. Sem esse norte claro, é fácil confundir estar ocupado com estar sendo eficaz: subir rápido numa escada que, no fim, está encostada na parede errada.",
      },
      {
        title: "Primeiro o mais importante",
        content:
          "Tarefas podem ser classificadas por urgência e importância. A armadilha mais comum é viver apagando incêndios urgentes, enquanto atividades importantes mas não urgentes — planejamento, relacionamentos, prevenção, desenvolvimento pessoal — ficam sempre para depois. O hábito de gestão pessoal eficaz é proteger deliberadamente tempo para essas atividades do quadrante importante-mas-não-urgente antes que elas também se tornem crises urgentes.",
      },
      {
        title: "Pense ganha-ganha e busque primeiro compreender",
        content:
          "Em relações e negociações, buscar vencer à custa do outro (ganha-perde) ou ceder sempre (perde-ganha) corrói a confiança no longo prazo. A alternativa madura é buscar soluções ganha-ganha, ou, quando isso genuinamente não existe, preferir 'não fechar negócio' a fechar um acordo ruim para uma das partes. Isso só é possível quando se busca primeiro compreender o ponto de vista do outro genuinamente, antes de tentar ser compreendido — a maioria das pessoas ouve para responder, não para entender.",
      },
      {
        title: "Sinergia e renovação",
        content:
          "Sinergia é o princípio de que o todo pode ser maior que a soma das partes: duas pessoas com perspectivas diferentes, combinadas com respeito mútuo, costumam chegar a soluções melhores do que qualquer uma teria sozinha — desde que valorizem a diferença em vez de tentar eliminá-la. Por fim, nenhum desses hábitos se sustenta sem renovação constante nas quatro dimensões da vida: física, mental, social/emocional e espiritual. Negligenciar qualquer uma delas, mais cedo ou mais tarde, compromete as demais.",
      },
    ],
    quiz: [
      { q: "O que é a 'ética do caráter', segundo o autor?", options: ["Técnicas de imagem pessoal", "Trabalhar princípios e valores internos antes do comportamento externo", "Regras de etiqueta social", "Estratégias de persuasão"], correct: 1, explanation: "O livro defende que eficácia duradoura vem de dentro para fora, não de técnicas superficiais." },
      { q: "O que significa 'ser proativo', segundo o primeiro hábito?", options: ["Agir sem pensar nas consequências", "Assumir responsabilidade pela resposta aos estímulos, não só pelos estímulos em si", "Reagir rapidamente a qualquer situação", "Delegar decisões para outras pessoas"], correct: 1, explanation: "Proatividade é reconhecer o espaço de escolha entre estímulo e resposta." },
      { q: "O que é o 'círculo de influência'?", options: ["Tudo que preocupa a pessoa", "Aquilo que a pessoa pode efetivamente controlar ou influenciar", "O círculo de amizades", "Uma técnica de meditação"], correct: 1, explanation: "Focar energia no círculo de influência, não no que está fora do controle, é mais produtivo." },
      { q: "Qual é o exercício sugerido para o hábito 'comece com o objetivo em mente'?", options: ["Fazer uma lista de compras", "Imaginar o próprio funeral e o que gostaria que fosse dito", "Planejar apenas a próxima semana", "Copiar os objetivos de outra pessoa"], correct: 1, explanation: "Esse exercício ajuda a identificar os valores que realmente importam no longo prazo." },
      { q: "Qual é a armadilha mais comum na gestão do tempo, segundo o livro?", options: ["Fazer pouco no dia a dia", "Viver apagando urgências e negligenciar o que é importante mas não urgente", "Planejar demais", "Delegar tarefas importantes"], correct: 1, explanation: "Tarefas importantes mas não urgentes tendem a ser adiadas até virarem crises." },
      { q: "O que caracteriza uma solução 'ganha-ganha'?", options: ["Uma parte cede tudo para a outra vencer", "Ambas as partes saem satisfeitas com o resultado", "A negociação é sempre cancelada", "Apenas uma proposta é considerada"], correct: 1, explanation: "Ganha-ganha busca resultado satisfatório para ambos os lados envolvidos." },
      { q: "O que o livro recomenda quando uma solução ganha-ganha genuinamente não existe?", options: ["Forçar um acordo de qualquer forma", "Preferir não fechar negócio a fechar um acordo ruim para uma das partes", "Sempre ceder para evitar conflito", "Ignorar o problema"], correct: 1, explanation: "É preferível não fechar negócio a criar um acordo perde-ganha disfarçado." },
      { q: "O que significa 'buscar primeiro compreender'?", options: ["Ouvir apenas para formular uma resposta", "Ouvir genuinamente o ponto de vista do outro antes de tentar ser compreendido", "Concordar com tudo que o outro diz", "Evitar conversas difíceis"], correct: 1, explanation: "A maioria das pessoas ouve para responder, não para entender de fato." },
      { q: "O que é sinergia, segundo o livro?", options: ["Fazer tudo sozinho para ser mais rápido", "O todo sendo maior que a soma das partes, valorizando diferenças", "Eliminar diferenças de opinião", "Um tipo de meditação em grupo"], correct: 1, explanation: "Sinergia surge quando perspectivas diferentes são combinadas com respeito mútuo." },
      { q: "Quais são as quatro dimensões que precisam de renovação constante?", options: ["Física, mental, social/emocional e espiritual", "Financeira, social, digital e física", "Apenas física e mental", "Profissional, familiar, social e financeira"], correct: 0, explanation: "Negligenciar qualquer uma dessas dimensões compromete as demais no longo prazo." },
    ],
  },

  {
    id: "poder-do-agora",
    title: "O Poder do Agora",
    author: "Baseado na obra de Eckhart Tolle",
    category: "Espiritualidade & Mindfulness",
    tags: ["presença", "mente", "consciência"],
    readTimeMin: 15,
    premium: true,
    coverIcon: "moon",
    synopsis:
      "Um guia para se libertar do sofrimento gerado pela mente que vive no passado ou no futuro, através da prática de presença total no momento atual.",
    chapters: [
      {
        title: "Você não é sua mente",
        content:
          "A obra parte de uma distinção central: existe uma diferença entre a mente — o fluxo constante de pensamentos, narrativas e julgamentos — e a consciência que observa esses pensamentos. A maior parte do sofrimento psicológico vem da identificação total com a mente, como se os pensamentos fossem a própria identidade. Reconhecer que é possível observar o pensamento sem ser o pensamento é o primeiro passo para reduzir o sofrimento que a mente gera quando funciona sem supervisão.",
      },
      {
        title: "O corpo de dor",
        content:
          "O autor descreve o 'corpo de dor' como um acúmulo de dor emocional não processada do passado, que existe como uma espécie de entidade semi-autônoma dentro da pessoa, periodicamente 'acordando' e buscando mais sofrimento para se alimentar — reagindo de forma desproporcional a pequenos gatilhos. Reconhecer esse padrão quando ele surge, sem se identificar com ele nem tentar suprimi-lo à força, é a forma descrita de esvaziar gradualmente esse acúmulo de dor antiga.",
      },
      {
        title: "Viver no agora",
        content:
          "Ansiedade, culpa e ressentimento são descritos como produtos da mente presa em um passado que já não existe ou em um futuro que ainda não chegou. O momento presente, por outro lado, é o único lugar onde a vida realmente acontece — e onde a maioria dos problemas que parecem urgentes, quando examinados de perto, na verdade não exigem sofrimento imediato, apenas ação prática quando necessária. A prática de trazer a atenção repetidamente de volta ao agora é apresentada como o caminho central da obra.",
      },
      {
        title: "Aceitação e rendição",
        content:
          "Rendição, no sentido usado pela obra, não significa passividade ou desistência — significa parar de resistir mentalmente ao que já é fato presente, mesmo que ainda seja preciso agir para mudá-lo. Resistir psicologicamente a uma situação que já aconteceu apenas soma sofrimento mental ao problema prático original. Aceitar o momento como ele é, e então agir com clareza a partir daí, é descrito como muito mais eficaz do que agir a partir de resistência e raiva.",
      },
      {
        title: "O ego e a identificação com o pensamento",
        content:
          "Muito do sofrimento humano, segundo a obra, vem da construção de uma identidade mental (o ego) baseada em papéis, posses, opiniões e comparações constantes com os outros. Esse ego precisa de conflito e drama para se manter 'alimentado', e frequentemente cria problemas onde não precisaria haver nenhum, só para reforçar sua própria sensação de existência através de reclamação, razão ou vitimismo. Perceber esse mecanismo em ação, sem julgá-lo, começa a enfraquecer seu domínio automático sobre o comportamento.",
      },
      {
        title: "Presença na vida cotidiana",
        content:
          "A prática de presença não exige retiro ou isolamento — pode ser exercitada em tarefas comuns: lavar louça, caminhar, esperar em uma fila, prestando atenção plena às sensações físicas e ao ambiente, em vez de deixar a mente vagar automaticamente entre preocupações. Pequenos momentos de presença acumulados ao longo do dia, mais do que uma única grande revelação espiritual, são apresentados como o caminho prático e sustentável para viver com mais paz.",
      },
    ],
    quiz: [
      { q: "Qual é a distinção central proposta na obra?", options: ["Entre corpo e alma", "Entre a mente (pensamentos) e a consciência que observa os pensamentos", "Entre passado e futuro apenas", "Entre razão e emoção"], correct: 1, explanation: "Reconhecer que é possível observar o pensamento sem se identificar totalmente com ele é o ponto de partida." },
      { q: "O que é o 'corpo de dor' descrito na obra?", options: ["Uma dor física crônica", "Um acúmulo de dor emocional não processada do passado", "Uma técnica de respiração", "Um tipo de exercício físico"], correct: 1, explanation: "O corpo de dor reage de forma desproporcional a pequenos gatilhos, buscando mais sofrimento." },
      { q: "Segundo a obra, de onde vêm ansiedade, culpa e ressentimento?", options: ["De problemas puramente físicos", "Da mente presa no passado ou no futuro", "Da falta de dinheiro", "De fatores genéticos apenas"], correct: 1, explanation: "Essas emoções são descritas como produtos de uma mente que não está no momento presente." },
      { q: "O que significa 'rendição' no contexto da obra?", options: ["Desistir e ser passivo diante dos problemas", "Parar de resistir mentalmente ao que já é fato, mesmo agindo para mudá-lo", "Aceitar qualquer situação sem nunca agir", "Evitar todo tipo de conflito"], correct: 1, explanation: "Rendição não é passividade, é parar de somar sofrimento mental ao problema prático." },
      { q: "O que é o 'ego', segundo a obra?", options: ["A parte racional da mente", "Uma identidade mental baseada em papéis, posses e comparações", "Um órgão do corpo", "Sinônimo de autoestima saudável"], correct: 1, explanation: "O ego precisa de conflito e drama para se manter 'alimentado', segundo o autor." },
      { q: "Como a prática de presença pode ser exercitada no dia a dia?", options: ["Somente em retiros espirituais isolados", "Em tarefas comuns, como lavar louça ou caminhar, com atenção plena", "Apenas durante a meditação formal", "Somente durante momentos de crise"], correct: 1, explanation: "Pequenos momentos de presença no cotidiano são o caminho prático sugerido pela obra." },
      { q: "Por que resistir mentalmente a uma situação já ocorrida é considerado prejudicial?", options: ["Porque não muda o passado e apenas soma sofrimento mental extra", "Porque é ilegal", "Porque gasta energia física", "Porque impede o sono"], correct: 0, explanation: "A resistência psicológica soma sofrimento ao problema prático original, sem resolvê-lo." },
      { q: "O que a obra sugere fazer com os pensamentos, em vez de reprimi-los?", options: ["Ignorá-los completamente", "Observá-los sem se identificar totalmente com eles", "Anotá-los todos em um diário", "Discuti-los com um terapeuta apenas"], correct: 1, explanation: "Observar o pensamento sem ser dominado por ele reduz seu poder automático." },
      { q: "Qual é o único lugar onde, segundo a obra, a vida realmente acontece?", options: ["No planejamento do futuro", "No momento presente", "Na reflexão sobre o passado", "Nos sonhos noturnos"], correct: 1, explanation: "O momento presente é apresentado como o único espaço real de existência." },
      { q: "O que costuma alimentar o ego, segundo a obra?", options: ["Silêncio e quietude", "Conflito, drama, reclamação e comparação constante", "Práticas de gratidão", "Exercício físico regular"], correct: 1, explanation: "O ego cria ou amplifica problemas para reforçar sua própria sensação de existência." },
    ],
  },

  {
    id: "rapido-e-devagar",
    title: "Rápido e Devagar: Duas Formas de Pensar",
    author: "Baseado na obra de Daniel Kahneman",
    category: "Psicologia",
    tags: ["vieses cognitivos", "tomada de decisão", "economia comportamental"],
    readTimeMin: 18,
    premium: true,
    coverIcon: "brain",
    synopsis:
      "A pesquisa vencedora do Nobel sobre os dois sistemas que governam o pensamento humano — um rápido e intuitivo, outro lento e deliberado — e como isso molda decisões.",
    chapters: [
      {
        title: "Sistema 1 e Sistema 2",
        content:
          "O cérebro opera com dois modos de pensar. O Sistema 1 é rápido, automático, intuitivo e opera sem esforço consciente — é ele que reconhece um rosto familiar ou completa a frase 'pão com...'. O Sistema 2 é lento, deliberado, exige esforço mental e é usado para cálculos complexos ou decisões que exigem análise cuidadosa. O Sistema 1 domina a maior parte do dia a dia porque é eficiente; o problema é que ele também é a origem da maioria dos vieses e erros sistemáticos de julgamento, porque toma atalhos que geralmente funcionam, mas nem sempre.",
      },
      {
        title: "Heurísticas e vieses",
        content:
          "Para lidar com a complexidade do mundo rapidamente, o Sistema 1 usa atalhos mentais chamados heurísticas. A heurística da disponibilidade faz julgar a frequência de um evento pela facilidade de lembrar exemplos dele — por isso eventos dramáticos e recentes na mídia parecem mais comuns do que realmente são. A heurística da representatividade faz julgar a probabilidade de algo pela semelhança com um estereótipo mental, ignorando taxas-base estatísticas reais. Esses atalhos são úteis na maioria das situações cotidianas, mas produzem erros previsíveis em contextos específicos.",
      },
      {
        title: "Excesso de confiança e a ilusão de validade",
        content:
          "Pessoas — inclusive especialistas — tendem a superestimar a precisão de seus próprios julgamentos, especialmente quando os dados formam uma narrativa coerente e fácil de acreditar. A obra mostra evidências de que especialistas em áreas com alta incerteza, como previsão de mercado financeiro ou política, frequentemente performam pior que modelos estatísticos simples, mas continuam confiantes em suas próprias previsões — porque a sensação subjetiva de confiança não é um bom indicador de precisão real.",
      },
      {
        title: "Aversão à perda",
        content:
          "Um dos achados centrais da pesquisa é que perdas doem psicologicamente mais do que ganhos equivalentes trazem prazer — perder R$100 dói mais do que ganhar R$100 satisfaz. Essa assimetria explica comportamentos aparentemente irracionais: manter investimentos ruins na esperança de 'recuperar o prejuízo' em vez de vender, ou recusar negociações vantajosas porque envolvem abrir mão de algo já possuído. Entender a aversão à perda ajuda a reconhecer quando ela está distorcendo uma decisão que deveria ser puramente racional.",
      },
      {
        title: "O eu que experimenta versus o eu que lembra",
        content:
          "A pesquisa distingue dois 'eus': o eu que experimenta um momento em tempo real, e o eu que lembra e avalia essa experiência depois. Curiosamente, decisões futuras costumam ser guiadas pelas memórias do eu que lembra, não pela soma real do que foi vivido — e essas memórias são fortemente influenciadas pelo pico emocional da experiência e por como ela termina, quase ignorando a duração total. Isso explica por que a lembrança de um evento pode ser desproporcionalmente boa ou ruim em relação à experiência real momento a momento.",
      },
      {
        title: "Como tomar decisões melhores",
        content:
          "Reconhecer os próprios vieses não os elimina automaticamente — o Sistema 1 continua operando de forma automática mesmo depois de estudado. Mas algumas práticas ajudam: usar checklists e critérios pré-definidos em decisões importantes, buscar ativamente informações que contradigam a primeira impressão, considerar taxas-base estatísticas antes de confiar em narrativas individuais convincentes, e desconfiar especialmente de decisões tomadas sob pressão de tempo ou cansaço, quando o Sistema 2 tende a ceder espaço para os atalhos do Sistema 1.",
      },
    ],
    quiz: [
      { q: "O que caracteriza o Sistema 1 de pensamento?", options: ["Lento e deliberado", "Rápido, automático e intuitivo", "Usado apenas em cálculos matemáticos", "Exige grande esforço consciente"], correct: 1, explanation: "O Sistema 1 opera automaticamente e sem esforço consciente." },
      { q: "O que caracteriza o Sistema 2 de pensamento?", options: ["Rápido e automático", "Lento, deliberado e exige esforço mental", "Não é usado em decisões complexas", "É o único sistema de pensamento"], correct: 1, explanation: "O Sistema 2 é usado para análises cuidadosas e cálculos complexos." },
      { q: "O que é a 'heurística da disponibilidade'?", options: ["Julgar frequência pela facilidade de lembrar exemplos", "Um método de cálculo matemático preciso", "Uma técnica de meditação", "Um tipo de investimento financeiro"], correct: 0, explanation: "Eventos fáceis de lembrar parecem mais frequentes do que realmente são." },
      { q: "Por que especialistas frequentemente confiam demais em suas previsões, segundo o livro?", options: ["Porque sempre têm razão", "Porque a sensação subjetiva de confiança não é um bom indicador de precisão", "Porque usam apenas modelos estatísticos", "Porque nunca cometem erros"], correct: 1, explanation: "Confiança subjetiva não se correlaciona necessariamente com precisão real do julgamento." },
      { q: "O que é 'aversão à perda'?", options: ["Preferir sempre investimentos de baixo risco", "Perdas doerem psicologicamente mais do que ganhos equivalentes satisfazem", "Medo de tomar qualquer decisão financeira", "Um tipo de fobia clínica"], correct: 1, explanation: "Essa assimetria emocional explica muitos comportamentos financeiros aparentemente irracionais." },
      { q: "Qual comportamento a aversão à perda ajuda a explicar?", options: ["Vender investimentos lucrativos rapidamente", "Manter investimentos ruins esperando 'recuperar o prejuízo'", "Investir sempre de forma diversificada", "Nunca investir em nada"], correct: 1, explanation: "A dor da perda leva a manter posições ruins na esperança de reverter o prejuízo." },
      { q: "Qual é a diferença entre o 'eu que experimenta' e o 'eu que lembra'?", options: ["Não há diferença real entre eles", "Um vive o momento em tempo real, o outro avalia a experiência depois", "Ambos são a mesma coisa que o Sistema 1", "Apenas o eu que lembra tem emoções"], correct: 1, explanation: "Decisões futuras costumam ser guiadas pela memória, não pela experiência real completa." },
      { q: "O que mais influencia a memória de uma experiência, segundo a pesquisa?", options: ["A duração total da experiência", "O pico emocional e como a experiência termina", "Apenas o início da experiência", "A temperatura do ambiente"], correct: 1, explanation: "A memória é distorcida pelo pico e pelo final, quase ignorando a duração total." },
      { q: "Qual prática o livro recomenda para decisões importantes?", options: ["Confiar sempre na primeira impressão", "Usar checklists e critérios pré-definidos", "Decidir sempre sob pressão de tempo", "Ignorar dados estatísticos"], correct: 1, explanation: "Checklists e critérios objetivos ajudam a reduzir a influência de vieses automáticos." },
      { q: "Quando o Sistema 2 tende a ceder espaço para os atalhos do Sistema 1?", options: ["Quando há muito tempo disponível", "Sob pressão de tempo ou cansaço", "Apenas em decisões financeiras", "Nunca cede espaço"], correct: 1, explanation: "Cansaço e pressão de tempo reduzem a capacidade de pensamento deliberado." },
    ],
  },

  {
    id: "sapiens",
    title: "Sapiens: Uma Breve História da Humanidade",
    author: "Baseado na obra de Yuval Noah Harari",
    category: "História & Filosofia",
    tags: ["evolução", "história", "civilização"],
    readTimeMin: 19,
    premium: true,
    coverIcon: "compass",
    synopsis:
      "Uma releitura da história humana através de três revoluções — cognitiva, agrícola e científica — e do papel único das ficções coletivas na cooperação em massa.",
    chapters: [
      {
        title: "A revolução cognitiva",
        content:
          "Há cerca de 70 mil anos, mudanças na cognição do Homo sapiens permitiram algo que nenhuma outra espécie conseguia: comunicar e acreditar coletivamente em coisas que não existem fisicamente — deuses, nações, dinheiro, empresas. Essa capacidade de criar e compartilhar 'ficções' não é um defeito, é a base que permitiu a cooperação flexível entre milhares ou milhões de estranhos, algo impossível para qualquer outro primata, que só coopera bem em grupos pequenos baseados em relação direta.",
      },
      {
        title: "Mitos que unem estranhos",
        content:
          "Nações, religiões, sistemas legais e corporações são exemplos de 'ordens imaginadas' — construções que só existem porque um número suficiente de pessoas acredita nelas simultaneamente. O dinheiro é talvez o mito mais bem-sucedido da história: um pedaço de papel não tem valor intrínseco algum, mas funciona porque virtualmente todo mundo confia que os outros também vão aceitá-lo em troca de bens reais. Essas histórias compartilhadas são o que permite que milhões de estranhos cooperem em projetos comuns sem nunca terem se conhecido.",
      },
      {
        title: "A revolução agrícola: uma armadilha?",
        content:
          "A adoção da agricultura, há cerca de 12 mil anos, é tradicionalmente vista como um grande avanço. O autor propõe uma leitura provocativa: para o indivíduo médio, a agricultura trouxe mais horas de trabalho, dietas menos variadas, mais doenças por aglomeração e maior desigualdade social do que a vida de caçador-coletor. A espécie prosperou em número, mas o bem-estar individual médio pode ter piorado — um lembrete de que 'progresso' para a espécie e bem-estar para o indivíduo nem sempre andam juntos.",
      },
      {
        title: "A unificação da humanidade",
        content:
          "Ao longo da história, três forças globais foram unificando gradualmente comunidades antes isoladas: o dinheiro, que criou um sistema de troca universal; os impérios, que absorveram culturas diversas sob administrações comuns; e as religiões universalistas, que ofereceram verdades pretensamente válidas para toda a humanidade, não apenas para uma tribo. Essas forças, por mais que tenham gerado violência e opressão ao longo do caminho, tendem a aproximar culturas antes completamente separadas em uma rede global cada vez mais interconectada.",
      },
      {
        title: "A revolução científica",
        content:
          "Diferente de tradições anteriores que presumiam já possuir todo o conhecimento importante, a revolução científica, a partir de cerca de 500 anos atrás, começou de uma admissão radical: 'não sabemos'. Essa disposição para reconhecer ignorância, combinada com método empírico e disposição para revisar crenças diante de evidência, acelerou o conhecimento humano de forma exponencial — e se conectou de maneira estreita com o capitalismo e o imperialismo, que financiaram boa parte da exploração científica em troca de aplicações práticas e lucrativas.",
      },
      {
        title: "Rumo a algo além do Homo sapiens",
        content:
          "A obra termina olhando para o futuro: avanços em biotecnologia, inteligência artificial e engenharia genética colocam a humanidade na posição inédita de poder redesenhar não só o ambiente, mas a própria biologia da espécie. O autor levanta a questão de que, pela primeira vez, o Homo sapiens pode estar próximo de deixar de ser o produto da seleção natural cega e passar a ser o produto de um design deliberado — com todas as implicações éticas que isso levanta sobre quem decide esse design e para quê.",
      },
    ],
    quiz: [
      { q: "O que caracterizou a revolução cognitiva, segundo o livro?", options: ["O uso do fogo", "A capacidade de acreditar coletivamente em ficções compartilhadas", "A invenção da roda", "O surgimento da agricultura"], correct: 1, explanation: "Essa capacidade permitiu cooperação em massa entre estranhos, algo único do Homo sapiens." },
      { q: "O que é uma 'ordem imaginada', segundo a obra?", options: ["Um erro de percepção", "Uma construção social que só existe porque muitas pessoas acreditam nela", "Um tipo de sonho recorrente", "Uma lei da física"], correct: 1, explanation: "Nações, dinheiro e religiões são exemplos de ordens imaginadas compartilhadas coletivamente." },
      { q: "Por que o dinheiro é considerado um 'mito bem-sucedido'?", options: ["Porque tem valor físico intrínseco", "Porque funciona pela confiança coletiva de que será aceito em troca", "Porque é impresso pelo governo", "Porque nunca perde valor"], correct: 1, explanation: "O valor do dinheiro depende inteiramente da confiança compartilhada, não de valor físico." },
      { q: "Qual é a visão provocativa do autor sobre a revolução agrícola?", options: ["Foi um avanço sem nenhuma desvantagem", "Pode ter piorado o bem-estar médio do indivíduo, apesar de aumentar a população", "Não teve nenhum impacto na sociedade", "Ocorreu ao mesmo tempo em todos os continentes"], correct: 1, explanation: "Mais trabalho, doenças e desigualdade são citados como custos da vida agrícola comparada à de caçador-coletor." },
      { q: "Quais três forças o autor cita como unificadoras da humanidade?", options: ["Guerra, fome e doença", "Dinheiro, impérios e religiões universalistas", "Arte, música e literatura", "Tecnologia, mídia e internet"], correct: 1, explanation: "Essas três forças aproximaram culturas antes isoladas em uma rede global." },
      { q: "O que marcou o início da revolução científica, segundo o livro?", options: ["A certeza de já possuir todo conhecimento necessário", "A admissão de ignorância e a disposição para revisar crenças com evidências", "A invenção da imprensa", "O fim das religiões"], correct: 1, explanation: "Reconhecer 'não sabemos' abriu espaço para o método científico moderno." },
      { q: "Com que sistemas a revolução científica se conectou de forma estreita?", options: ["Apenas com a religião", "Com o capitalismo e o imperialismo", "Apenas com a arte", "Com o sistema feudal"], correct: 1, explanation: "Capitalismo e imperialismo financiaram boa parte da exploração científica histórica." },
      { q: "O que o autor sugere sobre o futuro da espécie humana?", options: ["Que ela permanecerá inalterada para sempre", "Que biotecnologia e IA podem levar a um design deliberado da própria biologia humana", "Que a extinção é inevitável em breve", "Que a agricultura será abandonada"], correct: 1, explanation: "O livro questiona as implicações éticas de redesenhar deliberadamente a biologia humana." },
      { q: "Por que outros primatas não conseguem cooperar em grande escala como os humanos?", options: ["Porque são menos inteligentes em geral", "Porque cooperam bem apenas em grupos pequenos baseados em relação direta", "Porque não têm emoções", "Porque vivem sozinhos"], correct: 1, explanation: "Sem a capacidade de acreditar em ficções compartilhadas, a cooperação fica limitada a grupos pequenos." },
      { q: "Qual é o papel das religiões universalistas na unificação da humanidade, segundo a obra?", options: ["Nenhum, elas sempre dividiram as pessoas", "Oferecer verdades pretensamente válidas para toda a humanidade, não só uma tribo", "Apenas organizar rituais locais", "Substituir completamente o dinheiro"], correct: 1, explanation: "Ao propor verdades universais, essas religiões ajudaram a conectar povos distantes entre si." },
    ],
  },

  {
    id: "cinco-linguagens-do-amor",
    title: "As 5 Linguagens do Amor",
    author: "Baseado na obra de Gary Chapman",
    category: "Sexo & Relacionamentos",
    tags: ["relacionamento", "comunicação afetiva", "casamento"],
    readTimeMin: 14,
    premium: true,
    coverIcon: "users",
    synopsis:
      "Um modelo prático para entender como diferentes pessoas expressam e recebem amor de formas distintas — e por que isso frequentemente gera mal-entendidos em relações.",
    chapters: [
      {
        title: "O tanque de amor emocional",
        content:
          "O autor propõe a metáfora de um 'tanque de amor emocional' que cada pessoa carrega: quando está cheio, a pessoa se sente segura e valorizada na relação; quando está vazio, surgem inseguranças, distanciamento e conflitos, mesmo que o parceiro esteja genuinamente tentando demonstrar afeto. O problema mais comum em casais é que cada um tenta encher o tanque do outro usando a linguagem de amor que faz sentido para si mesmo, não necessariamente a que o parceiro realmente precisa para se sentir amado.",
      },
      {
        title: "Palavras de afirmação",
        content:
          "Para pessoas com essa linguagem principal, elogios verbais, palavras de encorajamento e expressões explícitas de apreço comunicam amor de forma poderosa — enquanto o silêncio, mesmo bem-intencionado, pode ser interpretado como indiferença. Críticas, por outro lado, ferem essas pessoas de forma desproporcionalmente profunda, precisamente porque a palavra é o canal mais sensível pelo qual recebem (e portanto também podem ser feridas por) mensagens emocionais.",
      },
      {
        title: "Tempo de qualidade",
        content:
          "Aqui o que importa é atenção plena e indivisa — conversar sem celular por perto, fazer uma atividade junto com foco total um no outro, não apenas 'estar no mesmo cômodo' enquanto cada um mexe no telefone. Para quem tem essa linguagem como principal, presença física sem atenção genuína não conta como tempo de qualidade, e cancelamentos frequentes de planos juntos doem mais do que pareceriam à primeira vista para quem tem outra linguagem de amor.",
      },
      {
        title: "Presentes, atos de serviço e toque físico",
        content:
          "Presentes, nessa linguagem, não são sobre valor material, mas sobre o pensamento e esforço por trás da escolha — um presente simples mas atencioso pode comunicar mais amor que um caro mas genérico. Atos de serviço envolvem fazer algo prático que alivia a carga do outro (preparar uma refeição, resolver uma tarefa chata) — para quem valoriza essa linguagem, ajuda prática fala mais alto que palavras. Toque físico — um abraço, segurar a mão, um gesto carinhoso — é a linguagem mais direta e biologicamente imediata de conexão para quem a tem como principal.",
      },
      {
        title: "Descobrindo a própria linguagem e a do parceiro",
        content:
          "O livro sugere observar dois sinais: o que a pessoa mais reclama que falta na relação (geralmente aponta diretamente para sua linguagem principal) e o que ela espontaneamente faz para demonstrar amor ao outro (que costuma ser, por padrão, a própria linguagem, projetada erroneamente como universal). Perguntar diretamente ao parceiro o que o faria se sentir mais amado, e observar suas respostas ao longo do tempo, também revela pistas importantes sobre qual linguagem predomina.",
      },
      {
        title: "Amor como escolha, não apenas sentimento",
        content:
          "Uma das teses centrais é que, depois da fase inicial de paixão (que a obra chama de 'experiência de apaixonar-se', biologicamente temporária), o amor sustentável em uma relação de longo prazo se torna, em grande parte, uma escolha ativa e diária — aprender e praticar deliberadamente a linguagem de amor do outro, mesmo quando não é a linguagem natural de quem ama. Essa prática consciente, mais do que esperar que o sentimento espontâneo resolva tudo sozinho, é apresentada como o que sustenta relações duradouras.",
      },
    ],
    quiz: [
      { q: "O que é o 'tanque de amor emocional'?", options: ["Uma técnica de terapia de casal", "Uma metáfora para a necessidade de se sentir amado e valorizado", "Um tipo de diário de relacionamento", "Um teste de compatibilidade"], correct: 1, explanation: "Quando o tanque está vazio, surgem inseguranças mesmo com boas intenções do parceiro." },
      { q: "Qual é o erro mais comum apontado pelo livro em casais?", options: ["Não se comunicarem o suficiente", "Tentar demonstrar amor usando a própria linguagem, não a do parceiro", "Passar tempo demais juntos", "Nunca discutirem problemas"], correct: 1, explanation: "Cada um tende a usar a linguagem que faz sentido para si, não necessariamente a do outro." },
      { q: "O que caracteriza a linguagem 'palavras de afirmação'?", options: ["Presentes caros", "Elogios verbais e expressões explícitas de apreço", "Ajudar em tarefas domésticas", "Contato físico frequente"], correct: 1, explanation: "Para essa linguagem, palavras de encorajamento comunicam amor de forma poderosa." },
      { q: "O que é essencial na linguagem 'tempo de qualidade'?", options: ["Estar no mesmo ambiente, mesmo sem interação", "Atenção plena e indivisa ao outro", "Trocar presentes regularmente", "Fazer elogios constantes"], correct: 1, explanation: "Presença física sem atenção genuína não conta como tempo de qualidade nessa linguagem." },
      { q: "O que importa mais na linguagem 'presentes', segundo o livro?", options: ["O valor monetário do presente", "O pensamento e esforço por trás da escolha", "A frequência com que são dados", "O tamanho do presente"], correct: 1, explanation: "Um presente simples mas atencioso pode comunicar mais amor que um caro mas genérico." },
      { q: "O que caracteriza 'atos de serviço' como linguagem do amor?", options: ["Dar presentes caros", "Fazer algo prático que alivia a carga do outro", "Elogiar verbalmente", "Passar tempo em silêncio junto"], correct: 1, explanation: "Ajuda prática fala mais alto que palavras para quem valoriza essa linguagem." },
      { q: "Como o livro sugere descobrir a linguagem de amor principal de alguém?", options: ["Adivinhando aleatoriamente", "Observando do que a pessoa mais reclama que falta e o que ela espontaneamente demonstra", "Copiando o comportamento de outros casais", "Ignorando o assunto completamente"], correct: 1, explanation: "Reclamações recorrentes costumam apontar diretamente para a linguagem principal da pessoa." },
      { q: "O que o livro diz sobre a fase inicial de paixão em uma relação?", options: ["Ela dura para sempre sem esforço", "É biologicamente temporária", "Não tem relação com as linguagens do amor", "É a única fase importante do relacionamento"], correct: 1, explanation: "Após essa fase, o amor sustentável se torna uma escolha ativa e diária." },
      { q: "Segundo o livro, o que sustenta relações de longo prazo?", options: ["Esperar que o sentimento espontâneo resolva tudo", "Aprender e praticar deliberadamente a linguagem de amor do outro", "Ter a mesma linguagem de amor que o parceiro", "Evitar qualquer tipo de conflito"], correct: 1, explanation: "Praticar conscientemente a linguagem do outro sustenta o amor no longo prazo." },
      { q: "Qual é o canal mais direto de conexão para quem tem 'toque físico' como linguagem principal?", options: ["Palavras escritas", "Um abraço, segurar a mão, um gesto carinhoso", "Presentes materiais", "Tarefas domésticas"], correct: 1, explanation: "O toque físico é descrito como a linguagem mais imediata e biológica de conexão." },
    ],
  },

  {
    id: "essencialismo",
    title: "Essencialismo",
    author: "Baseado na obra de Greg McKeown",
    category: "Produtividade & Gestão do Tempo",
    tags: ["foco", "priorização", "menos porém melhor"],
    readTimeMin: 15,
    premium: true,
    coverIcon: "bolt",
    synopsis:
      "A disciplina de buscar 'menos, porém melhor' — eliminando o que é trivial para investir tempo e energia apenas no que realmente importa.",
    chapters: [
      {
        title: "A busca disciplinada por menos",
        content:
          "O essencialista não faz mais coisas em menos tempo — faz apenas as coisas certas. A obra contrasta o essencialista com o 'não essencialista', que diz sim a quase tudo por medo de perder oportunidades ou desagradar pessoas, e termina sobrecarregado, fazendo muitas coisas de forma mediana em vez de poucas coisas de forma excelente. A pergunta central proposta não é 'como posso encaixar isso também', mas 'isso é a coisa mais importante que eu poderia estar fazendo agora com meu tempo e recursos'.",
      },
      {
        title: "Quase tudo é trivial",
        content:
          "A obra defende que, ao contrário da crença popular de que 'tudo é importante', na realidade poucas coisas produzem a maior parte do resultado — e a maioria das atividades do dia a dia é trivial demais para justificar o tempo investido nela. Distinguir entre o vital e o trivial exige investir tempo explorando e questionando opções antes de comprometer-se, em vez de aceitar automaticamente a primeira oportunidade razoável que aparece só porque parece 'boa o suficiente'.",
      },
      {
        title: "O poder do 'não' gracioso",
        content:
          "Dizer não a pedidos, convites e oportunidades que não se alinham com as prioridades reais é uma habilidade central do essencialismo — e a obra ensina formas de recusar sem necessariamente destruir relações: separar a decisão da relação com a pessoa, usar um 'não claro, mas gentil' em vez de um sim relutante que gera ressentimento futuro, e lembrar que cada sim a algo trivial é automaticamente um não a algo potencialmente mais importante que poderia ocupar aquele mesmo espaço de tempo e energia.",
      },
      {
        title: "Eliminar sem culpa",
        content:
          "Depois de identificado o que não é essencial, a obra recomenda eliminá-lo ativamente, não apenas evitar adicionar mais coisas novas. Isso inclui cortar compromissos já assumidos que deixaram de fazer sentido, mesmo que isso gere desconforto de curto prazo — o chamado 'custo irrecuperável' já foi gasto de qualquer forma, e continuar investindo tempo em algo só porque já se investiu antes é uma armadilha lógica comum que a obra recomenda reconhecer e evitar.",
      },
      {
        title: "Criar um sistema à prova de erros",
        content:
          "Depender de força de vontade constante para manter o foco no essencial é frágil. A obra recomenda construir rotinas e sistemas que tornem o comportamento essencialista automático: bloquear tempo no calendário antes que outros compromissos o ocupem, criar 'buffers' de tempo entre tarefas para absorver imprevistos sem descarrilar o dia inteiro, e revisar regularmente compromissos assumidos para identificar quais já deixaram de ser essenciais e podem ser eliminados.",
      },
      {
        title: "Viver como essencialista",
        content:
          "O essencialismo não é aplicado uma vez e esquecido — é uma prática contínua de reavaliação, porque prioridades mudam com o tempo e o que era essencial em uma fase da vida pode deixar de ser em outra. A recompensa descrita não é apenas mais produtividade, mas uma sensação mais profunda de propósito: em vez de se sentir dispersa e sobrecarregada por reagir a tudo, a pessoa passa a sentir controle real sobre onde investe sua energia mais limitada e valiosa — o próprio tempo de vida.",
      },
    ],
    quiz: [
      { q: "O que o essencialista busca, segundo o livro?", options: ["Fazer mais coisas em menos tempo", "Fazer apenas as coisas certas, com excelência", "Nunca recusar nenhum pedido", "Trabalhar o máximo de horas possível"], correct: 1, explanation: "O foco é qualidade e relevância das escolhas, não quantidade de tarefas realizadas." },
      { q: "Qual é a pergunta central proposta pela obra ao avaliar uma nova oportunidade?", options: ["Como posso encaixar isso também?", "Isso é a coisa mais importante que eu poderia estar fazendo agora?", "Isso vai impressionar meus colegas?", "Quanto tempo isso vai levar?"], correct: 1, explanation: "Essa pergunta ajuda a filtrar o que realmente merece tempo e energia." },
      { q: "O que a obra afirma sobre a maioria das atividades do dia a dia?", options: ["Todas são igualmente importantes", "A maioria é trivial e não produz a maior parte do resultado", "Devem ser todas eliminadas imediatamente", "São todas obrigatórias"], correct: 1, explanation: "Poucas atividades realmente produzem a maior parte do resultado desejado." },
      { q: "Como o livro recomenda dizer não a pedidos que não se alinham com prioridades?", options: ["Ignorando a pessoa completamente", "Separando a decisão da relação com a pessoa, com um não claro mas gentil", "Sempre aceitando para evitar conflito", "Prometendo pensar e nunca respondendo"], correct: 1, explanation: "Um não claro e gentil evita tanto o compromisso indesejado quanto o ressentimento futuro." },
      { q: "O que cada 'sim' a algo trivial representa, segundo a obra?", options: ["Uma oportunidade sem custo", "Um 'não' automático a algo potencialmente mais importante", "Sempre uma boa decisão", "Um investimento sem risco"], correct: 1, explanation: "Tempo e energia são limitados, então todo sim tem um custo de oportunidade." },
      { q: "O que é o 'custo irrecuperável' mencionado no livro?", options: ["Um tipo de investimento financeiro", "Tempo ou recursos já gastos que não devem influenciar decisões futuras", "Um erro de cálculo comum", "O valor de um produto"], correct: 1, explanation: "Continuar investindo em algo só por já ter investido antes é uma armadilha lógica." },
      { q: "Por que depender apenas de força de vontade para manter foco é frágil, segundo a obra?", options: ["Porque força de vontade não existe", "Porque é uma fonte de energia limitada e inconsistente ao longo do tempo", "Porque é ilegal em ambientes profissionais", "Porque não tem relação com produtividade"], correct: 1, explanation: "Por isso a obra recomenda criar sistemas e rotinas em vez de depender só de disciplina momentânea." },
      { q: "O que a obra recomenda fazer com compromissos já assumidos que perderam relevância?", options: ["Mantê-los para não desperdiçar o esforço já investido", "Eliminá-los ativamente, mesmo com desconforto de curto prazo", "Ignorá-los sem cancelar formalmente", "Delegar sempre para outra pessoa"], correct: 1, explanation: "Eliminar ativamente é diferente de simplesmente evitar adicionar coisas novas." },
      { q: "Por que o essencialismo é descrito como uma prática contínua?", options: ["Porque é aplicado uma única vez na vida", "Porque prioridades mudam com o tempo, exigindo reavaliação constante", "Porque é obrigatório por lei", "Porque não tem relação com produtividade pessoal"], correct: 1, explanation: "O que era essencial em uma fase da vida pode deixar de ser em outra." },
      { q: "Qual é a recompensa descrita pela prática do essencialismo, além de produtividade?", options: ["Riqueza material imediata", "Uma sensação mais profunda de controle e propósito sobre o próprio tempo", "Fama e reconhecimento público", "Redução total do estresse para sempre"], correct: 1, explanation: "A pessoa passa a sentir controle real sobre onde investe sua energia mais valiosa." },
    ],
  },

  {
    id: "comece-pelo-porque",
    title: "Comece pelo Porquê",
    author: "Baseado na obra de Simon Sinek",
    category: "Carreira & Negócios",
    tags: ["propósito", "liderança", "inspiração"],
    readTimeMin: 14,
    premium: true,
    coverIcon: "briefcase",
    synopsis:
      "Por que algumas organizações e líderes inspiram lealdade e inovação enquanto outros, com recursos e talento semelhantes, não conseguem — a resposta está na ordem em que comunicam propósito, processo e produto.",
    chapters: [
      {
        title: "O Círculo Dourado",
        content:
          "A maioria das organizações sabe comunicar o que faz (produtos e serviços) e, com algum esforço, como faz (diferenciais e processos). Poucas conseguem articular claramente por que fazem o que fazem — não o lucro como consequência, mas o propósito, causa ou crença que motiva a existência da organização. O modelo do Círculo Dourado propõe que organizações e líderes verdadeiramente inspiradores comunicam de dentro para fora: primeiro o porquê, depois o como, e só então o quê — na ordem inversa da maioria das comunicações convencionais de marketing.",
      },
      {
        title: "A biologia da tomada de decisão",
        content:
          "Essa ordem de comunicação não é apenas estética — corresponde à estrutura do cérebro humano. Decisões relacionadas a propósito, lealdade e comportamento são processadas em regiões cerebrais associadas a sentimento, não a linguagem racional explícita — por isso comunicações que apelam primeiro ao 'porquê' geram uma resposta visceral de identificação ('isso é o que eu também acredito') antes mesmo que a pessoa consiga articular racionalmente por que se sente atraída pela marca ou pelo líder.",
      },
      {
        title: "Clareza, disciplina e consistência",
        content:
          "Ter um porquê claro não basta — é preciso disciplina para garantir que o como (os valores e processos) seja consistente com esse porquê em toda decisão organizacional, e consistência para que o quê (os produtos concretos) sirva como prova tangível do porquê ao longo do tempo. Organizações que comunicam um propósito inspirador mas agem de forma inconsistente com ele rapidamente perdem credibilidade — o público percebe a diferença entre um porquê genuíno e um usado apenas como estratégia de marketing.",
      },
      {
        title: "Confiança e a lei da difusão de inovações",
        content:
          "Pessoas não compram apenas o que você faz, compram por que você faz — e isso cria um tipo diferente de relação com clientes e colaboradores: baseada em confiança e identificação com valores compartilhados, não apenas em características do produto. A obra conecta essa ideia com o modelo de difusão de inovações: inovadores e early adopters (cerca de 15-18% do mercado) compram baseados no porquê e na crença compartilhada, e são eles que, se conquistados primeiro, arrastam consigo a maioria pragmática do mercado depois.",
      },
      {
        title: "Quando o porquê se perde",
        content:
          "Organizações fundadas com um porquê claro frequentemente o perdem conforme crescem: o fundador que incorporava o propósito sai ou se afasta, e a empresa passa a ser guiada por metas de curto prazo (o quê) sem a bússola original. O livro descreve esse fenômeno como uma das principais causas de estagnação em empresas que já foram inovadoras — quando decisões passam a ser tomadas puramente por dados de mercado e resultados trimestrais, sem referência ao porquê original que gerava diferenciação genuína.",
      },
      {
        title: "Encontrando e vivendo o próprio porquê",
        content:
          "O porquê pessoal ou organizacional não é inventado, é descoberto — geralmente está enraizado em experiências reais de origem, nos valores que já guiam decisões mesmo sem terem sido articulados formalmente. O processo sugerido envolve revisitar histórias e momentos de maior orgulho e realização para identificar o fio condutor comum entre eles. Uma vez articulado, o porquê deve ser usado como filtro de decisão constante: cada nova iniciativa, contratação ou parceria deveria ser avaliada primeiro por sua coerência com esse propósito central, não apenas por seu potencial de lucro imediato.",
      },
    ],
    quiz: [
      { q: "O que é o 'Círculo Dourado' proposto pelo autor?", options: ["Um modelo financeiro de investimentos", "Um modelo de comunicação que parte do porquê, depois como, depois o quê", "Uma estratégia de precificação", "Um tipo de organograma empresarial"], correct: 1, explanation: "A maioria das organizações comunica na ordem inversa: o quê, o como, e raramente o porquê." },
      { q: "Por que a ordem de comunicação do Círculo Dourado é eficaz, segundo a obra?", options: ["Porque é mais rápida de explicar", "Porque corresponde à forma como o cérebro processa decisões ligadas a sentimento e lealdade", "Porque reduz custos de marketing", "Porque é exigida por lei em alguns países"], correct: 1, explanation: "Decisões de lealdade são processadas em regiões cerebrais ligadas a sentimento, não linguagem racional." },
      { q: "O que acontece quando uma organização comunica um propósito inspirador mas age de forma inconsistente com ele?", options: ["Nada, o público não percebe", "Perde credibilidade, pois a diferença entre porquê genuíno e marketing fica evidente", "Aumenta automaticamente as vendas", "Isso nunca acontece na prática"], correct: 1, explanation: "Consistência entre porquê, como e quê é essencial para manter a credibilidade." },
      { q: "Segundo o livro, o que as pessoas realmente compram?", options: ["Apenas o produto em si", "O porquê por trás do que a empresa faz", "Sempre o preço mais baixo disponível", "Apenas a marca mais conhecida"], correct: 1, explanation: "A relação com clientes se baseia em confiança e identificação com valores compartilhados." },
      { q: "Quem, segundo o modelo de difusão de inovações citado, compra baseado no porquê primeiro?", options: ["A maioria pragmática do mercado", "Inovadores e early adopters", "Apenas clientes que buscam o menor preço", "Consumidores que nunca experimentam produtos novos"], correct: 1, explanation: "Esse grupo, cerca de 15-18% do mercado, costuma arrastar a maioria pragmática depois." },
      { q: "Por que organizações frequentemente perdem seu porquê ao crescer?", options: ["Porque o porquê nunca foi real desde o início", "Porque o fundador que incorporava o propósito se afasta e decisões passam a ser guiadas só por metas de curto prazo", "Porque crescer é sempre negativo", "Porque o mercado exige isso por lei"], correct: 1, explanation: "Sem a bússola original, decisões passam a ser guiadas puramente por resultados trimestrais." },
      { q: "Como o porquê pessoal ou organizacional geralmente é encontrado, segundo o autor?", options: ["É inventado do zero para fins de marketing", "É descoberto, revisitando histórias e valores que já guiam decisões", "É copiado de outras empresas de sucesso", "É definido por consultores externos apenas"], correct: 1, explanation: "O porquê geralmente já está enraizado em experiências reais de origem." },
      { q: "Como o porquê deve ser usado nas decisões organizacionais, segundo o livro?", options: ["Apenas em campanhas de marketing", "Como filtro constante para avaliar novas iniciativas e parcerias", "Somente na fundação da empresa", "Não tem aplicação prática no dia a dia"], correct: 1, explanation: "Cada decisão deveria ser avaliada por sua coerência com o propósito central, não só pelo lucro." },
      { q: "O que caracteriza o 'como', no Círculo Dourado?", options: ["Os produtos e serviços concretos oferecidos", "Os valores e processos diferenciais da organização", "Apenas o preço dos produtos", "A localização física da empresa"], correct: 1, explanation: "O como representa os valores e processos que tornam a organização diferente das demais." },
      { q: "O que caracteriza o 'quê', no Círculo Dourado?", options: ["O propósito ou crença central", "Os produtos e serviços tangíveis oferecidos", "A cultura organizacional", "A missão declarada da empresa"], correct: 1, explanation: "O quê são os produtos concretos, que servem como prova tangível do porquê." },
    ],
  },

  {
    id: "influencia-psicologia-persuasao",
    title: "Influência: A Psicologia da Persuasão",
    author: "Baseado na obra de Robert Cialdini",
    category: "Marketing & Vendas",
    tags: ["persuasão", "psicologia social", "vendas"],
    readTimeMin: 17,
    premium: true,
    coverIcon: "handshake",
    synopsis:
      "Seis princípios psicológicos universais que tornam as pessoas mais propensas a dizer sim — e como reconhecê-los tanto para influenciar de forma ética quanto para se proteger de manipulação.",
    chapters: [
      {
        title: "Reciprocidade",
        content:
          "Quando alguém nos dá algo — um favor, uma amostra grátis, uma informação útil — sentimos uma obrigação psicológica quase automática de retribuir, mesmo que o presente inicial não tenha sido solicitado. Esse princípio é usado (e abusado) em vendas através de amostras grátis, degustações e pequenos favores que criam um senso de dívida social. A defesa contra o uso manipulador da reciprocidade não é recusar todo favor genuíno, mas reconhecer quando um 'presente' foi oferecido estrategicamente para gerar uma obrigação desproporcional.",
      },
      {
        title: "Compromisso e coerência",
        content:
          "Uma vez que assumimos publicamente uma posição ou um pequeno compromisso, sentimos forte pressão psicológica interna para manter coerência com essa escolha em decisões futuras, mesmo que as circunstâncias tenham mudado. Vendedores exploram isso com a técnica do 'pé na porta': conseguir um pequeno sim inicial (assinar uma petição, aceitar uma amostra) torna muito mais provável conseguir um sim maior depois, porque recusar geraria uma sensação incômoda de inconsistência com o compromisso já assumido.",
      },
      {
        title: "Prova social",
        content:
          "Em situações de incerteza sobre a ação correta, as pessoas olham para o comportamento de outros como guia — especialmente de pessoas que consideram semelhantes a si mesmas. Avaliações online, filas visíveis, contadores de 'pessoas que compraram este produto' e depoimentos de clientes exploram esse princípio. A prova social é especialmente poderosa em situações ambíguas, onde a pessoa não tem certeza própria sobre a melhor decisão e busca pistas externas para reduzir essa incerteza.",
      },
      {
        title: "Afeição, autoridade e escassez",
        content:
          "Tendemos a dizer sim mais facilmente a pessoas de quem gostamos — por semelhança, elogios genuínos ou familiaridade repetida. Também obedecemos mais prontamente a símbolos de autoridade genuína ou aparente — títulos, uniformes, jargão técnico — mesmo sem verificar a legitimidade real por trás deles. E valorizamos mais aquilo que parece escasso ou com prazo limitado, porque a perda potencial de uma oportunidade pesa psicologicamente mais do que o ganho equivalente — daí o poder de frases como 'últimas unidades' ou 'oferta por tempo limitado'.",
      },
      {
        title: "Como esses princípios se combinam",
        content:
          "Na prática, campanhas de persuasão eficazes raramente usam apenas um princípio isoladamente — combinam vários simultaneamente para amplificar o efeito: uma oferta escassa (escassez), recomendada por um especialista (autoridade), com muitas avaliações positivas de outros clientes (prova social), e um pequeno compromisso inicial gratuito (reciprocidade e coerência). Reconhecer cada princípio individualmente ajuda a identificar quando várias dessas alavancas estão sendo puxadas ao mesmo tempo, o que costuma indicar uma tentativa deliberada de acelerar uma decisão.",
      },
      {
        title: "Usando influência de forma ética",
        content:
          "O autor distingue claramente entre usar esses princípios para comunicar vantagens reais de forma persuasiva (legítimo) e usá-los para induzir decisões que a pessoa não tomaria com informação completa e tempo para refletir (manipulação). A recomendação prática para quem aplica esses princípios profissionalmente é usá-los apenas quando a oferta subjacente é genuinamente boa para quem a recebe — porque a persuasão de curto prazo baseada em pressão, sem substância real por trás, tende a gerar arrependimento do cliente e destruir a confiança de longo prazo.",
      },
    ],
    quiz: [
      { q: "O que é o princípio da reciprocidade?", options: ["Comprar sempre o produto mais barato", "A obrigação psicológica de retribuir quando alguém nos dá algo", "Evitar qualquer tipo de favor", "Um tipo de desconto comercial"], correct: 1, explanation: "Amostras grátis e pequenos favores criam um senso de dívida social a ser retribuída." },
      { q: "O que é a técnica do 'pé na porta'?", options: ["Uma técnica de vendas porta a porta apenas", "Conseguir um pequeno compromisso inicial para facilitar um compromisso maior depois", "Uma estratégia de precificação", "Um tipo de propaganda visual"], correct: 1, explanation: "O princípio de compromisso e coerência torna mais provável aceitar pedidos maiores após um pequeno sim inicial." },
      { q: "Quando a prova social é mais poderosa, segundo o livro?", options: ["Quando a pessoa já tem total certeza da decisão", "Em situações de incerteza, quando a pessoa busca pistas externas", "Apenas em compras de baixo valor", "Nunca influencia decisões importantes"], correct: 1, explanation: "Em ambiguidade, as pessoas olham para o comportamento de outros como guia." },
      { q: "Por que símbolos de autoridade influenciam decisões, mesmo sem verificação?", options: ["Porque são sempre legítimos de fato", "Porque tendemos a obedecer a títulos, uniformes e jargão técnico automaticamente", "Porque é exigido por lei", "Porque reduzem o preço dos produtos"], correct: 1, explanation: "A obediência a símbolos de autoridade muitas vezes ocorre sem checar sua legitimidade real." },
      { q: "Por que a escassez aumenta o desejo por algo, segundo o livro?", options: ["Porque produtos escassos são sempre de melhor qualidade", "Porque a perda potencial de uma oportunidade pesa mais psicologicamente que o ganho equivalente", "Porque escassez sempre significa preço mais baixo", "Não há relação entre escassez e desejo"], correct: 1, explanation: "Frases como 'últimas unidades' exploram a aversão à perda de oportunidade." },
      { q: "Por que campanhas de persuasão eficazes combinam vários princípios ao mesmo tempo?", options: ["Para confundir o consumidor de propósito", "Para amplificar o efeito persuasivo combinando várias alavancas psicológicas", "Porque um princípio isolado nunca funciona", "Isso nunca acontece na prática real"], correct: 1, explanation: "Escassez, autoridade, prova social e reciprocidade combinados aceleram a tomada de decisão." },
      { q: "Qual é a diferença entre persuasão ética e manipulação, segundo o autor?", options: ["Não existe diferença real entre elas", "Persuasão ética comunica vantagens reais; manipulação induz decisões sem informação completa", "Manipulação é sempre mais eficaz no longo prazo", "A diferença está apenas no preço do produto"], correct: 1, explanation: "O uso ético desses princípios depende da oferta subjacente ser genuinamente boa para quem recebe." },
      { q: "O que costuma acontecer quando persuasão de curto prazo é usada sem substância real por trás?", options: ["Aumenta a confiança do cliente no longo prazo", "Gera arrependimento do cliente e destrói a confiança de longo prazo", "Não tem nenhum efeito negativo", "Sempre resulta em mais vendas futuras"], correct: 1, explanation: "Pressão sem valor real por trás tende a prejudicar a relação de confiança no longo prazo." },
      { q: "Por que tendemos a dizer sim mais facilmente a pessoas de quem gostamos?", options: ["Isso não influencia decisões reais", "O princípio da afeição faz com que semelhança e familiaridade aumentem a persuasão", "Apenas por obrigação contratual", "Somente em relações familiares"], correct: 1, explanation: "Semelhança, elogios genuínos e familiaridade repetida aumentam a afeição e a persuasão." },
      { q: "Qual é a recomendação prática do autor para quem aplica esses princípios profissionalmente?", options: ["Usá-los sempre, independente da qualidade da oferta", "Usá-los apenas quando a oferta é genuinamente boa para quem a recebe", "Evitar completamente qualquer técnica de persuasão", "Usá-los apenas com clientes novos"], correct: 1, explanation: "Isso evita o arrependimento do cliente e protege a confiança de longo prazo." },
    ],
  },

  {
    id: "steve-jobs-biografia",
    title: "Steve Jobs",
    author: "Baseado na obra de Walter Isaacson",
    category: "Biografias & Memórias",
    tags: ["biografia", "tecnologia", "inovação"],
    readTimeMin: 19,
    premium: true,
    coverIcon: "bookOpen",
    synopsis:
      "A biografia definitiva e autorizada do cofundador da Apple, construída a partir de mais de quarenta entrevistas com o próprio Jobs e centenas com pessoas de sua vida.",
    chapters: [
      {
        title: "Abandono e busca de controle",
        content:
          "Jobs foi dado para adoção ao nascer e, ao longo da vida, carregou uma sensibilidade profunda em relação a abandono e controle — traços que o biógrafo conecta a padrões posteriores de comportamento: necessidade de controlar cada detalhe de seus produtos, dificuldade em manter relações consistentes, e uma intensidade emocional que oscilava entre extremos. Entender essa origem não desculpa os excessos do personagem, mas ajuda a explicar a obsessão por perfeição que definiria sua carreira.",
      },
      {
        title: "O 'campo de distorção da realidade'",
        content:
          "Colegas cunharam essa expressão para descrever a capacidade de Jobs de convencer a si mesmo e aos outros de que o aparentemente impossível era alcançável — pressionando equipes a entregar prazos e especificações que pareciam absurdos, e conseguindo, com frequência incômoda, que a equipe realmente entregasse. Essa mesma força também gerava atrito severo: humilhações públicas, mudanças de opinião abruptas e padrões inatingíveis eram parte do preço pago por quem trabalhava perto dele.",
      },
      {
        title: "Simplicidade como filosofia de design",
        content:
          "Influenciado por estética minimalista e por sua experiência com meditação zen, Jobs tratava simplicidade não como estilo superficial, mas como resultado de um processo obsessivo de eliminação — remover botões, remover opções, remover qualquer coisa que exigisse do usuário entender a complexidade interna do produto. 'Simples pode ser mais difícil que complexo', segundo essa filosofia: exige muito mais trabalho tornar algo intuitivo do que simplesmente adicionar mais funcionalidades.",
      },
      {
        title: "A volta à Apple e o foco radical",
        content:
          "Ao retornar à Apple em 1997, quase falida, Jobs cortou a linha de produtos de dezenas para apenas quatro — dois desktops e dois portáteis, um para consumidores e outro para profissionais. Essa disposição para dizer não a quase tudo, mesmo produtos lucrativos, e concentrar recursos em poucas apostas de altíssima qualidade, é apresentada como decisão central que salvou a empresa, ilustrando sua crença de que foco não é sobre dizer sim às boas ideias, mas dizer não a centenas delas.",
      },
      {
        title: "Integração vertical como vantagem",
        content:
          "Enquanto concorrentes apostavam em licenciar software para múltiplos fabricantes de hardware, Jobs insistia em controlar toda a experiência — hardware, software e, depois, a loja de aplicativos — de ponta a ponta. Essa integração vertical, vista por muitos analistas como antiquada num mercado que caminhava para abertura, permitiu um nível de polimento e coerência de experiência que a obra credita como diferencial central do sucesso do iPhone e do iPad.",
      },
      {
        title: "Legado e contradições",
        content:
          "A biografia não esconde os aspectos mais duros do personagem: o tratamento áspero com funcionários, negação inicial da paternidade de sua primeira filha, decisões questionáveis sobre seu próprio tratamento médico. O retrato final é deliberadamente ambíguo — nem herói sem falhas, nem vilão simples — apresentando Jobs como alguém cujas qualidades mais admiráveis (padrões implacáveis, visão de produto, intuição estética) e seus piores defeitos vinham, segundo o próprio biógrafo, exatamente da mesma fonte de personalidade.",
      },
    ],
    quiz: [
      { q: "Qual é a experiência de origem que o biógrafo conecta a padrões posteriores no comportamento de Jobs?", options: ["Uma infância em extrema pobreza", "Ter sido dado para adoção ao nascer", "Um acidente na juventude", "Ter crescido sem irmãos"], correct: 1, explanation: "A questão do abandono é ligada à necessidade de controle observada mais tarde em sua vida." },
      { q: "O que é o 'campo de distorção da realidade'?", options: ["Uma técnica de marketing da Apple", "A capacidade de Jobs de convencer pessoas de que o impossível era alcançável", "Um recurso de software da empresa", "Um termo da física quântica"], correct: 1, explanation: "Colegas usavam essa expressão para descrever sua pressão intensa por resultados aparentemente impossíveis." },
      { q: "Como Jobs tratava a simplicidade em seus produtos?", options: ["Como um estilo superficial e fácil de aplicar", "Como resultado de um processo obsessivo de eliminação", "Como algo irrelevante para o sucesso comercial", "Como sinônimo de baixo custo de produção"], correct: 1, explanation: "Simplicidade exigia um esforço grande de remover complexidade desnecessária." },
      { q: "O que Jobs fez ao retornar à Apple em 1997?", options: ["Expandiu a linha de produtos para dezenas de opções", "Cortou a linha de produtos para apenas quatro modelos", "Vendeu a empresa imediatamente", "Terceirizou toda a produção"], correct: 1, explanation: "Essa concentração de foco é apresentada como decisão central que ajudou a salvar a empresa." },
      { q: "O que caracteriza a 'integração vertical' que Jobs defendia?", options: ["Licenciar software para múltiplos fabricantes", "Controlar hardware, software e loja de aplicativos de ponta a ponta", "Terceirizar todo o design de produto", "Focar apenas no desenvolvimento de software"], correct: 1, explanation: "Essa abordagem permitiu um nível de coerência de experiência considerado diferencial pela obra." },
      { q: "Como a biografia retrata Jobs no seu balanço final?", options: ["Como um herói sem falhas", "Como um vilão sem qualidades", "De forma ambígua, com qualidades e defeitos vindos da mesma fonte", "Como uma figura irrelevante para a tecnologia"], correct: 2, explanation: "O biógrafo sugere que seus maiores méritos e piores defeitos tinham raízes de personalidade comuns." },
      { q: "Qual foi um dos aspectos mais duros do personagem retratados na obra?", options: ["Excesso de gentileza com funcionários", "Tratamento áspero com colaboradores e decisões questionáveis sobre sua saúde", "Falta total de ambição profissional", "Desinteresse completo por design"], correct: 1, explanation: "A obra não esconde os lados mais difíceis do comportamento de Jobs." },
      { q: "O que a filosofia 'dizer não' representava para Jobs, segundo a obra?", options: ["Recusar qualquer proposta de negócio", "Concentrar recursos em poucas apostas de altíssima qualidade", "Evitar reuniões de equipe", "Uma estratégia apenas de relações públicas"], correct: 1, explanation: "Foco significava dizer não a centenas de boas ideias para priorizar poucas excelentes." },
      { q: "De onde vem boa parte da influência estética de Jobs, segundo a obra?", options: ["Arquitetura barroca", "Minimalismo e experiência com meditação zen", "Design industrial soviético", "Tendências de moda da década de 1980"], correct: 1, explanation: "Essas influências reforçaram sua busca por simplicidade nos produtos." },
      { q: "Por que a base de mais de quarenta entrevistas com o próprio Jobs é relevante para a obra?", options: ["Porque tornou a biografia não autorizada", "Porque deu acesso direto à perspectiva do próprio biografado, além de outras fontes", "Porque substituiu qualquer outra fonte de pesquisa", "Porque foi a única fonte usada no livro"], correct: 1, explanation: "A biografia combina a perspectiva de Jobs com centenas de outras entrevistas para um retrato mais completo." },
    ],
  },

  {
    id: "lideres-comem-por-ultimo",
    title: "Líderes Comem Por Último",
    author: "Baseado na obra de Simon Sinek",
    category: "Gestão & Liderança",
    tags: ["liderança", "confiança", "cultura organizacional"],
    readTimeMin: 16,
    premium: true,
    coverIcon: "compass",
    synopsis:
      "Por que alguns times trabalham juntos com confiança e cooperação natural, enquanto outros vivem em competição interna constante — e o papel da liderança em criar segurança psicológica.",
    chapters: [
      {
        title: "O 'Círculo de Segurança'",
        content:
          "A obra descreve o papel do líder como criar um 'Círculo de Segurança' ao redor de sua equipe — um ambiente onde as ameaças externas (concorrência, mercado, incerteza) são enfrentadas coletivamente, e as pessoas dentro do círculo não precisam se proteger umas das outras. Quando esse círculo existe, energia que seria gasta em política interna e autoproteção é redirecionada para colaboração e inovação genuína.",
      },
      {
        title: "Biologia da confiança e da traição",
        content:
          "O autor conecta comportamento organizacional a química cerebral: endorfina e dopamina recompensam conquistas individuais de curto prazo, enquanto serotonina e ocitocina estão ligadas a status social e vínculos de confiança de longo prazo. Culturas que recompensam apenas resultados individuais imediatos, sem atenção a relações, favorecem os primeiros hormônios às custas dos segundos — gerando ambientes tecnicamente produtivos no curto prazo, mas frágeis e desconfiados no longo prazo.",
      },
      {
        title: "'Comer por último' como símbolo",
        content:
          "O título faz referência a um costume observado em corpos militares: os líderes de maior patente comem depois de todos os demais, um gesto simbólico que comunica que a posição de liderança existe para servir a equipe, não o contrário. A obra argumenta que sacrifícios visíveis e consistentes por parte de líderes — mesmo pequenos e simbólicos — comunicam segurança de forma muito mais poderosa do que discursos sobre 'cuidar das pessoas'.",
      },
      {
        title: "A distância abstrata",
        content:
          "Conforme organizações crescem, líderes ficam mais distantes das consequências humanas concretas de suas decisões — cortes de custo tornam-se números em uma planilha, não rostos de pessoas reais afetadas. Essa 'distância abstrata' é apontada como um dos maiores riscos do crescimento organizacional: decisões que pareceriam obviamente erradas se tomadas olhando no olho de um funcionário afetado tornam-se mais fáceis de justificar quando mediadas por camadas de abstração numérica.",
      },
      {
        title: "Empatia como habilidade treinável",
        content:
          "A obra rejeita a ideia de que empatia é um traço fixo de personalidade — é apresentada como uma habilidade que se desenvolve através da prática deliberada de buscar entender a experiência alheia antes de julgar ou decidir. Líderes que praticam consistentemente perguntar 'como essa decisão afeta as pessoas envolvidas' antes de agir, mesmo em decisões puramente operacionais, constroem gradualmente essa capacidade, que se torna mais automática com repetição.",
      },
      {
        title: "Construindo culturas que se sustentam",
        content:
          "Culturas de confiança e segurança não surgem de políticas escritas ou discursos motivacionais isolados — surgem de padrões repetidos de comportamento visível da liderança ao longo do tempo, especialmente em momentos de crise ou dificuldade, quando é mais tentador priorizar resultados de curto prazo às custas das pessoas. A obra conclui que a verdadeira medida de uma cultura organizacional não é o que ela declara valorizar, mas o que ela realmente recompensa e pune na prática cotidiana.",
      },
    ],
    quiz: [
      { q: "O que é o 'Círculo de Segurança' descrito na obra?", options: ["Um protocolo de segurança física do escritório", "Um ambiente criado pelo líder onde a equipe não precisa se proteger uma da outra", "Um tipo de seguro corporativo", "Uma política de recursos humanos formal"], correct: 1, explanation: "Dentro desse círculo, energia é redirecionada de autoproteção para colaboração." },
      { q: "Quais hormônios a obra associa a recompensas individuais de curto prazo?", options: ["Serotonina e ocitocina", "Endorfina e dopamina", "Melatonina e cortisol", "Adrenalina apenas"], correct: 1, explanation: "Esses hormônios recompensam conquistas individuais imediatas." },
      { q: "Quais hormônios estão ligados a vínculos de confiança de longo prazo, segundo a obra?", options: ["Endorfina e dopamina", "Serotonina e ocitocina", "Apenas adrenalina", "Nenhum hormônio está envolvido"], correct: 1, explanation: "Esses hormônios se relacionam a status social e conexões duradouras." },
      { q: "O que simboliza o costume de 'líderes comerem por último'?", options: ["Uma regra de etiqueta sem significado real", "Que a posição de liderança existe para servir a equipe, não o contrário", "Uma tradição exclusivamente militar sem aplicação corporativa", "Uma forma de economizar recursos da empresa"], correct: 1, explanation: "Sacrifícios visíveis do líder comunicam segurança de forma poderosa." },
      { q: "O que é a 'distância abstrata' mencionada na obra?", options: ["A distância física entre escritórios", "O distanciamento de líderes das consequências humanas concretas de suas decisões", "Um conceito de física aplicado a negócios", "A diferença de fuso horário em empresas globais"], correct: 1, explanation: "Decisões tornam-se números em planilha, mediadas por camadas de abstração." },
      { q: "Como a obra descreve a empatia?", options: ["Um traço de personalidade fixo e não treinável", "Uma habilidade que se desenvolve com prática deliberada", "Uma fraqueza para líderes eficazes", "Algo relevante apenas fora do ambiente de trabalho"], correct: 1, explanation: "Empatia pode ser desenvolvida praticando entender a experiência alheia antes de agir." },
      { q: "O que, segundo a obra, realmente define a cultura de uma organização?", options: ["As políticas escritas no manual do funcionário", "O que a empresa realmente recompensa e pune na prática cotidiana", "O discurso motivacional anual da liderança", "O tamanho do escritório"], correct: 1, explanation: "Cultura é revelada por padrões reais de comportamento, não por declarações formais." },
      { q: "O que acontece quando uma cultura recompensa apenas resultados individuais imediatos?", options: ["A confiança de longo prazo aumenta automaticamente", "Gera ambientes produtivos no curto prazo, mas frágeis e desconfiados no longo prazo", "Não há nenhum efeito colateral", "A colaboração aumenta naturalmente"], correct: 1, explanation: "Priorizar só resultado imediato enfraquece os vínculos de confiança duradouros." },
      { q: "Segundo a obra, quando os riscos da 'distância abstrata' se tornam maiores?", options: ["Em organizações pequenas apenas", "Conforme organizações crescem e líderes ficam mais distantes dos efeitos humanos das decisões", "Apenas em empresas familiares", "Nunca representa um risco real"], correct: 1, explanation: "O crescimento organizacional tende a aumentar essa distância." },
      { q: "O que a obra recomenda para líderes antes de tomar decisões operacionais?", options: ["Ignorar o impacto humano e focar só em números", "Perguntar como a decisão afeta as pessoas envolvidas", "Delegar toda decisão para outro departamento", "Esperar aprovação de todos os funcionários"], correct: 1, explanation: "Essa prática consistente ajuda a desenvolver empatia genuína ao longo do tempo." },
    ],
  },

  {
    id: "startup-enxuta",
    title: "A Startup Enxuta",
    author: "Baseado na obra de Eric Ries",
    category: "Startups & Empreendedorismo",
    tags: ["inovação", "validação", "metodologia lean"],
    readTimeMin: 17,
    premium: true,
    coverIcon: "bolt",
    synopsis:
      "Uma metodologia para reduzir o desperdício em novos empreendimentos através de ciclos rápidos de construir-medir-aprender, testando hipóteses de negócio antes de investir pesado.",
    chapters: [
      {
        title: "Startups são experimentos, não apenas produtos",
        content:
          "Uma startup, segundo a definição da obra, é uma instituição humana desenhada para criar algo novo sob condições de extrema incerteza — o que a diferencia fundamentalmente de uma empresa estabelecida não é o tamanho, é o nível de incerteza sobre quem é o cliente e o que ele realmente valoriza. Tratar uma startup como um experimento científico, com hipóteses claras a serem testadas, é o ponto de partida da metodologia, em vez de tratá-la como a execução de um plano de negócios fixo e supostamente já validado.",
      },
      {
        title: "Produto Mínimo Viável (MVP)",
        content:
          "Em vez de construir a versão completa e polida de um produto antes de mostrá-lo ao mercado, o MVP é a versão mais simples possível que permite testar a hipótese central de valor com o menor esforço e tempo. Um MVP pode ser deliberadamente incompleto, tosco ou até manual nos bastidores — o objetivo não é impressionar, é aprender rapidamente se a hipótese de negócio está correta antes de investir recursos significativos em construir algo que ninguém quer.",
      },
      {
        title: "O ciclo Construir-Medir-Aprender",
        content:
          "O núcleo da metodologia é um ciclo iterativo: construir rapidamente algo testável, medir como usuários reais reagem com métricas concretas, e aprender com esses dados se deve perseverar na direção atual ou pivotar para uma abordagem diferente. Quanto mais rápido esse ciclo se repete, mais rápido o empreendimento aprende — e a obra argumenta que velocidade de aprendizado válido, não velocidade de execução por si só, é a verdadeira métrica de progresso em ambientes de alta incerteza.",
      },
      {
        title: "Métricas de vaidade versus métricas acionáveis",
        content:
          "Números totais de usuários cadastrados ou downloads acumulados frequentemente sobem independentemente de o produto estar de fato criando valor — são 'métricas de vaidade' que fazem parecer que há progresso sem revelar causa e efeito. Métricas acionáveis, por outro lado, estão ligadas a mudanças específicas testáveis: taxa de conversão por versão do produto, retenção por coorte de usuários — números que realmente ajudam a decidir se uma mudança específica funcionou ou não.",
      },
      {
        title: "Pivotar sem perder o rumo",
        content:
          "Pivotar significa mudar de forma estruturada uma hipótese central do negócio — o público-alvo, o problema resolvido, o modelo de receita — mantendo o aprendizado acumulado até ali, em vez de simplesmente desistir ou começar do zero. A obra descreve vários tipos de pivô (de zoom in, de segmento de cliente, de plataforma, entre outros) e insiste que pivotar não é fracasso: é exatamente o mecanismo pelo qual startups descobrem, através de evidência real, um caminho mais promissor do que a ideia original.",
      },
      {
        title: "Crescimento sustentável",
        content:
          "A obra distingue entre crescimento artificialmente inflado por publicidade paga não recorrente, e crescimento sustentável, alimentado por um dos três motores: viral (usuários trazem outros usuários organicamente), pegajoso (usuários existentes não saem, aumentando a base líquida), ou pago (cada cliente gera receita suficiente para financiar a aquisição do próximo). Entender qual motor impulsiona um negócio específico ajuda a decidir em quais métricas e experimentos concentrar esforço para escalar de forma sustentável.",
      },
    ],
    quiz: [
      { q: "Como a obra define uma startup?", options: ["Qualquer empresa pequena", "Uma instituição desenhada para criar algo novo sob extrema incerteza", "Uma empresa com menos de 10 funcionários", "Um negócio exclusivamente de tecnologia"], correct: 1, explanation: "O que define uma startup é o nível de incerteza, não o tamanho ou setor." },
      { q: "O que é um MVP (Produto Mínimo Viável)?", options: ["A versão final e completa do produto", "A versão mais simples que permite testar a hipótese central de valor", "Um produto sem nenhuma funcionalidade", "Um protótipo apenas para investidores"], correct: 1, explanation: "O objetivo do MVP é aprender rapidamente, não impressionar com polimento." },
      { q: "Qual é o ciclo central da metodologia lean startup?", options: ["Planejar-Executar-Revisar", "Construir-Medir-Aprender", "Vender-Entregar-Cobrar", "Contratar-Treinar-Demitir"], correct: 1, explanation: "Esse ciclo iterativo é repetido continuamente para acelerar o aprendizado válido." },
      { q: "O que são 'métricas de vaidade'?", options: ["Métricas ligadas diretamente a decisões de produto", "Números que sobem independentemente de o produto criar valor real", "Métricas financeiras exclusivamente", "Métricas usadas só por investidores"], correct: 1, explanation: "Downloads totais ou cadastros acumulados podem subir sem revelar causa e efeito real." },
      { q: "O que caracteriza uma 'métrica acionável'?", options: ["Um número que não muda com o tempo", "Está ligada a mudanças específicas testáveis, como taxa de conversão por versão", "É sempre relacionada a lucro líquido", "É calculada apenas uma vez ao ano"], correct: 1, explanation: "Métricas acionáveis ajudam a decidir se uma mudança específica funcionou." },
      { q: "O que significa 'pivotar', segundo a obra?", options: ["Desistir completamente do negócio", "Mudar estruturadamente uma hipótese central, mantendo o aprendizado acumulado", "Mudar de escritório físico", "Trocar toda a equipe de funcionários"], correct: 1, explanation: "Pivotar é um mecanismo estruturado de mudança baseado em evidência, não desistência." },
      { q: "Pivotar é considerado um fracasso, segundo a obra?", options: ["Sim, sempre representa fracasso total", "Não, é o mecanismo pelo qual startups descobrem caminhos mais promissores", "Apenas quando ocorre mais de uma vez", "Sim, mas apenas em startups de tecnologia"], correct: 1, explanation: "A obra trata o pivô como parte normal e valiosa do processo de aprendizado." },
      { q: "Qual é o motor de crescimento 'viral', segundo a obra?", options: ["Crescimento baseado exclusivamente em publicidade paga", "Usuários existentes trazendo novos usuários organicamente", "Crescimento gerado apenas por parcerias comerciais", "Um tipo de crescimento sempre insustentável"], correct: 1, explanation: "Esse motor depende da propagação orgânica entre usuários." },
      { q: "O que caracteriza o motor de crescimento 'pago', segundo a obra?", options: ["Cada cliente gera receita suficiente para financiar a aquisição do próximo", "Crescimento sem nenhum custo de aquisição", "Um tipo de crescimento proibido para startups", "Depende exclusivamente de investidores externos"], correct: 0, explanation: "Esse motor de crescimento se sustenta pela economia unitária de cada cliente adquirido." },
      { q: "Por que a velocidade do ciclo de aprendizado é tão valorizada na metodologia?", options: ["Porque velocidade de execução por si só é o que importa", "Porque aprendizado válido mais rápido reduz o desperdício de recursos em direções erradas", "Porque investidores exigem isso contratualmente", "Porque não tem relação com o sucesso do negócio"], correct: 1, explanation: "Quanto mais rápido o ciclo se repete, mais rápido o empreendimento aprende o que funciona." },
    ],
  },

  {
    id: "inteligencia-emocional-goleman",
    title: "Inteligência Emocional",
    author: "Baseado na obra de Daniel Goleman",
    category: "Inteligência Emocional",
    tags: ["emoções", "autoconhecimento", "relações"],
    readTimeMin: 17,
    premium: true,
    coverIcon: "brain",
    synopsis:
      "Por que a capacidade de reconhecer e gerenciar emoções — próprias e alheias — pode importar tanto ou mais que o QI tradicional para o sucesso na vida pessoal e profissional.",
    chapters: [
      {
        title: "Além do QI",
        content:
          "A obra reúne evidências de neurociência e psicologia mostrando que o quociente de inteligência tradicional, embora relevante, é um preditor limitado de sucesso na vida real — pessoas com QI elevado às vezes fracassam em relações e carreira por falta de habilidades emocionais, enquanto pessoas com QI mediano frequentemente prosperam por saberem gerenciar bem suas próprias emoções e as dos outros ao redor. Isso não desvaloriza a inteligência cognitiva, mas argumenta que ela sozinha é insuficiente.",
      },
      {
        title: "As duas mentes",
        content:
          "O cérebro processa informação através de dois sistemas entrelaçados: um racional, deliberado e lento, e um emocional, rápido e automático, sediado em estruturas como a amígdala. Em situações de ameaça percebida, a amígdala pode 'sequestrar' a resposta antes que o córtex racional processe completamente a situação — o chamado 'sequestro emocional', que explica reações desproporcionais (explodir de raiva, entrar em pânico) que a pessoa racionalmente reconhece como exageradas depois do fato.",
      },
      {
        title: "Autoconsciência emocional",
        content:
          "O primeiro pilar da inteligência emocional é reconhecer a própria emoção no momento em que ela surge, em vez de só perceber seus efeitos depois (agir por impulso e só depois entender por quê). Praticar nomear emoções especificamente — não apenas 'estou mal', mas 'estou frustrado porque essa reunião não teve o resultado esperado' — já reduz a intensidade da reação automática, porque nomear ativa regiões cerebrais racionais que competem com a resposta puramente emocional.",
      },
      {
        title: "Autorregulação",
        content:
          "Reconhecer uma emoção não significa suprimi-la nem agir automaticamente sobre ela — autorregulação é a capacidade de criar um espaço entre sentir e reagir, escolhendo uma resposta apropriada em vez de uma reação automática. Técnicas práticas incluem pausar antes de responder em momentos de tensão, reformular mentalmente uma situação frustrante sob uma perspectiva diferente, e desenvolver rotinas de autocuidado que reduzem o nível basal de estresse, tornando reações desproporcionais menos prováveis no dia a dia.",
      },
      {
        title: "Empatia",
        content:
          "Empatia vai além de simpatia genérica — é a capacidade de perceber com precisão o que outra pessoa está sentindo, mesmo quando não expressa isso diretamente em palavras, e ajustar a própria resposta de acordo. Essa habilidade se desenvolve com atenção deliberada a sinais não verbais (tom de voz, expressão facial, postura) e com a prática consciente de suspender julgamento imediato para genuinamente tentar entender a perspectiva do outro antes de reagir ou aconselhar.",
      },
      {
        title: "Habilidades sociais e relações",
        content:
          "A combinação de autoconsciência, autorregulação e empatia culmina em habilidades sociais mais amplas: capacidade de influenciar positivamente, gerenciar conflitos de forma construtiva, trabalhar em equipe e liderar com credibilidade emocional. A obra argumenta que, diferente do QI que se estabiliza relativamente cedo na vida, a inteligência emocional pode continuar sendo desenvolvida ao longo de toda a vida adulta através de prática deliberada e feedback consciente sobre o próprio comportamento em situações reais.",
      },
    ],
    quiz: [
      { q: "O que a obra argumenta sobre o QI tradicional?", options: ["É o único fator relevante para o sucesso", "É um preditor limitado de sucesso na vida real, sozinho", "Não tem relevância nenhuma", "É sempre superior à inteligência emocional"], correct: 1, explanation: "QI elevado não garante sucesso sem habilidades emocionais complementares." },
      { q: "O que é o 'sequestro emocional' descrito na obra?", options: ["Um tipo de terapia psicológica", "Quando a amígdala domina a resposta antes do processamento racional completo", "Uma técnica de meditação avançada", "Um distúrbio raro de personalidade"], correct: 1, explanation: "Isso explica reações desproporcionais reconhecidas como exageradas depois do fato." },
      { q: "O que é autoconsciência emocional, segundo a obra?", options: ["Ignorar completamente as próprias emoções", "Reconhecer a própria emoção no momento em que ela surge", "Reprimir emoções negativas sempre", "Depender de terapia para identificar sentimentos"], correct: 1, explanation: "É o primeiro pilar da inteligência emocional descrito na obra." },
      { q: "Por que nomear emoções especificamente ajuda a reduzir sua intensidade?", options: ["Porque distrai a pessoa do problema real", "Porque ativa regiões cerebrais racionais que competem com a resposta emocional", "Não há evidência disso", "Porque elimina a emoção completamente"], correct: 1, explanation: "Nomear a emoção com precisão envolve processamento racional que modula a resposta automática." },
      { q: "O que é autorregulação emocional?", options: ["Suprimir todas as emoções sentidas", "Criar um espaço entre sentir e reagir, escolhendo uma resposta apropriada", "Agir sempre por impulso imediato", "Evitar qualquer situação emocionalmente desafiadora"], correct: 1, explanation: "Não é sobre eliminar a emoção, mas sobre escolher a resposta em vez de reagir automaticamente." },
      { q: "O que caracteriza empatia, segundo a obra?", options: ["Concordar sempre com o que o outro sente", "Perceber com precisão o que o outro sente e ajustar a resposta de acordo", "Ignorar sinais não verbais", "Um traço presente apenas em algumas pessoas, não treinável"], correct: 1, explanation: "Empatia envolve atenção a sinais não verbais e suspensão de julgamento imediato." },
      { q: "Quais habilidades resultam da combinação de autoconsciência, autorregulação e empatia?", options: ["Apenas habilidades técnicas de trabalho", "Habilidades sociais mais amplas, como gestão de conflitos e liderança", "Habilidades exclusivamente artísticas", "Nenhuma habilidade prática relevante"], correct: 1, explanation: "Essas habilidades sociais se constroem sobre os pilares anteriores da inteligência emocional." },
      { q: "Diferente do QI, o que a obra afirma sobre a inteligência emocional ao longo da vida?", options: ["Ela se estabiliza na infância e não muda mais", "Pode continuar sendo desenvolvida ao longo de toda a vida adulta", "Diminui inevitavelmente com a idade", "Não tem relação com prática ou experiência"], correct: 1, explanation: "Prática deliberada e feedback consciente permitem seu desenvolvimento contínuo." },
      { q: "Onde no cérebro está sediada boa parte do processamento emocional rápido, segundo a obra?", options: ["No cerebelo", "Na amígdala", "Apenas no córtex pré-frontal", "No sistema nervoso periférico"], correct: 1, explanation: "A amígdala é central no processamento emocional rápido e automático." },
      { q: "Qual técnica prática a obra sugere para melhorar a autorregulação?", options: ["Reagir imediatamente a qualquer situação de tensão", "Pausar antes de responder e reformular a situação sob outra perspectiva", "Evitar qualquer forma de autocuidado", "Ignorar completamente o próprio estresse"], correct: 1, explanation: "Pausar e reformular ajudam a criar espaço entre sentir e reagir." },
    ],
  },

  {
    id: "breve-historia-do-tempo",
    title: "Uma Breve História do Tempo",
    author: "Baseado na obra de Stephen Hawking",
    category: "Ciência",
    tags: ["física", "cosmologia", "universo"],
    readTimeMin: 18,
    premium: true,
    coverIcon: "flask",
    synopsis:
      "Uma explicação acessível dos maiores mistérios do universo — do Big Bang aos buracos negros — escrita para leitores sem formação técnica em física.",
    chapters: [
      {
        title: "Do universo estático ao universo em expansão",
        content:
          "Por séculos, a suposição dominante era de um universo estático e eterno. A descoberta de que galáxias distantes se afastam umas das outras — e que essa velocidade de afastamento é maior quanto mais distante a galáxia está — revelou um universo em expansão constante. Rebobinar essa expansão no tempo leva logicamente a um ponto inicial extremamente denso e quente: o Big Bang, o momento em que o próprio espaço e tempo, tal como conhecemos, começaram a existir.",
      },
      {
        title: "O tempo como quarta dimensão",
        content:
          "A teoria da relatividade de Einstein uniu espaço e tempo em um único tecido contínuo, o espaço-tempo, no qual massa e energia curvam a geometria ao redor delas — o que sentimos como gravidade é, nessa visão, o efeito dessa curvatura sobre a trajetória de objetos e da própria luz. Consequências contraintuitivas incluem o fato de que o tempo passa mais devagar perto de objetos muito massivos, e que não existe um 'agora' universal e absoluto compartilhado por todos os observadores do universo.",
      },
      {
        title: "Buracos negros",
        content:
          "Quando uma estrela suficientemente massiva esgota seu combustível nuclear, a gravidade pode vencer todas as outras forças e colapsar a matéria em uma densidade tão extrema que nem a luz consegue escapar além de um certo limite, chamado horizonte de eventos. Buracos negros desafiam a intuição comum: o tempo, visto de fora, pareceria parar completamente para algo caindo em direção ao horizonte de eventos, enquanto, da perspectiva de quem cai, nada de especial pareceria acontecer ao cruzá-lo.",
      },
      {
        title: "O princípio da incerteza",
        content:
          "No nível subatômico, a física quântica revela que não é possível conhecer simultaneamente, com precisão absoluta, certas propriedades emparelhadas de uma partícula — como posição e momento. Isso não é uma limitação de instrumentos de medição, é uma característica fundamental da realidade nessa escala. Essa incerteza fundamental tem consequências profundas para tentar unir a física quântica (que rege o muito pequeno) com a relatividade geral (que rege o muito grande e massivo) em uma teoria única e consistente.",
      },
      {
        title: "A seta do tempo",
        content:
          "Por que o tempo parece fluir em apenas uma direção — do passado para o futuro, nunca o contrário — mesmo que a maioria das leis fundamentais da física seja simétrica no tempo? A obra explora três 'setas do tempo' possíveis: a termodinâmica (a desordem do universo, ou entropia, tende sempre a aumentar), a psicológica (lembramos o passado, não o futuro) e a cosmológica (o universo está se expandindo, não contraindo) — e argumenta que essas três setas provavelmente estão profundamente conectadas.",
      },
      {
        title: "Em busca de uma teoria unificada",
        content:
          "O objetivo final buscado por físicos teóricos, incluindo o próprio autor, é uma 'teoria de tudo' — um conjunto único e consistente de equações que unifique todas as forças fundamentais da natureza e explique tanto o comportamento das partículas subatômicas quanto a estrutura do universo em grande escala. A obra termina com humildade científica: mesmo que tal teoria seja encontrada, isso não esgotaria as perguntas filosóficas mais profundas sobre por que existe algo em vez de nada.",
      },
    ],
    quiz: [
      { q: "O que revelou que o universo está em expansão?", options: ["A medição da temperatura da Lua", "A observação de que galáxias distantes se afastam, mais rápido quanto mais longe", "Um experimento de laboratório na Terra", "A observação de eclipses solares"], correct: 1, explanation: "Essa descoberta levou logicamente à ideia do Big Bang como ponto inicial." },
      { q: "O que é o Big Bang, segundo a obra?", options: ["Uma explosão dentro de um universo já existente", "O momento em que o próprio espaço e tempo começaram a existir", "Um evento que ainda vai acontecer no futuro", "Uma teoria já descartada pela ciência"], correct: 1, explanation: "Rebobinar a expansão do universo leva a esse ponto inicial extremamente denso e quente." },
      { q: "O que a teoria da relatividade uniu em um único conceito?", options: ["Matéria e energia apenas", "Espaço e tempo em um único tecido contínuo", "Luz e som", "Passado e futuro de forma idêntica"], correct: 1, explanation: "Esse espaço-tempo é curvado por massa e energia, o que sentimos como gravidade." },
      { q: "O que é o 'horizonte de eventos' de um buraco negro?", options: ["O centro exato do buraco negro", "O limite além do qual nem a luz consegue escapar", "Uma estrela próxima ao buraco negro", "Um tipo de telescópio espacial"], correct: 1, explanation: "Além desse limite, a gravidade é forte demais para a luz escapar." },
      { q: "O que o princípio da incerteza afirma, na física quântica?", options: ["Que os instrumentos de medição são sempre imprecisos", "Que não é possível conhecer simultaneamente, com precisão absoluta, certas propriedades emparelhadas de uma partícula", "Que partículas subatômicas não existem", "Que a física quântica está errada"], correct: 1, explanation: "Essa incerteza é uma característica fundamental da realidade, não uma limitação técnica." },
      { q: "Quais são as três 'setas do tempo' exploradas na obra?", options: ["Física, química e biológica", "Termodinâmica, psicológica e cosmológica", "Passada, presente e futura", "Newtoniana, einsteiniana e quântica"], correct: 1, explanation: "A obra sugere que essas três setas estão provavelmente conectadas entre si." },
      { q: "O que a seta termodinâmica do tempo descreve?", options: ["Que lembramos o passado, não o futuro", "Que a desordem (entropia) do universo tende sempre a aumentar", "Que o universo está se contraindo", "Que o tempo é uma ilusão"], correct: 1, explanation: "O aumento constante da entropia é uma das explicações para a direção única do tempo." },
      { q: "O que é uma 'teoria de tudo', buscada por físicos teóricos?", options: ["Uma teoria que explica apenas partículas subatômicas", "Um conjunto único de equações que unifique todas as forças fundamentais da natureza", "Uma teoria filosófica sem base matemática", "Uma teoria já comprovada e aceita universalmente"], correct: 1, explanation: "Essa teoria buscaria unir a física quântica e a relatividade geral em um único modelo." },
      { q: "O que acontece com o tempo perto de objetos muito massivos, segundo a relatividade?", options: ["Ele passa mais rápido", "Ele passa mais devagar", "Não sofre nenhuma alteração", "Ele para completamente sempre"], correct: 1, explanation: "Objetos massivos curvam o espaço-tempo, afetando a passagem do tempo ao seu redor." },
      { q: "Segundo a obra, encontrar uma teoria unificada resolveria todas as perguntas filosóficas sobre a existência?", options: ["Sim, completamente", "Não, mesmo assim restariam perguntas profundas como por que existe algo em vez de nada", "Essa questão não é discutida na obra", "Sim, mas apenas para físicos"], correct: 1, explanation: "A obra termina com humildade científica sobre os limites do que a física pode responder." },
    ],
  },

  {
    id: "grit-determinacao",
    title: "Grit: O Poder da Paixão e da Perseverança",
    author: "Baseado na obra de Angela Duckworth",
    category: "Autoajuda & Motivação",
    tags: ["perseverança", "desempenho", "motivação"],
    readTimeMin: 15,
    premium: true,
    coverIcon: "sparkle",
    synopsis:
      "A pesquisa que identificou 'grit' — a combinação de paixão sustentada e perseverança em direção a objetivos de longo prazo — como preditor de sucesso mais forte que talento isolado.",
    chapters: [
      {
        title: "Talento não é destino",
        content:
          "A pesquisa da autora, incluindo estudos com cadetes militares, vendedores e estudantes, encontrou repetidamente que talento natural, medido isoladamente, previa mal quem realmente completaria desafios de longo prazo e alcançaria excelência sustentada. Pessoas talentosas frequentemente desistem diante da primeira grande dificuldade, precisamente porque estão acostumadas a que as coisas sejam fáceis; pessoas com grit persistem mesmo quando o progresso é lento ou invisível no curto prazo.",
      },
      {
        title: "A equação do grit",
        content:
          "A autora propõe uma fórmula simplificada: habilidade multiplicada por esforço gera competência, e competência multiplicada por esforço novamente gera realização. O esforço aparece duas vezes na equação porque ele conta duas vezes: primeiro transforma talento em habilidade através de prática, depois transforma essa habilidade em resultado concreto através de aplicação sustentada. Isso implica que esforço consistente ao longo do tempo pesa mais na equação final do que o talento inicial isolado.",
      },
      {
        title: "Paixão como constância, não intensidade",
        content:
          "Diferente do uso popular da palavra 'paixão' como um pico de entusiasmo intenso e passageiro, a pesquisa define paixão, no contexto do grit, como constância de interesse ao longo de anos — manter o mesmo objetivo de nível mais alto (não necessariamente as mesmas tarefas do dia a dia) por períodos prolongados, em vez de trocar de direção a cada novo interesse que surge. Pessoas com grit alto tendem a ter uma hierarquia clara de objetivos, com um propósito de nível superior que organiza e dá sentido às metas menores do cotidiano.",
      },
      {
        title: "Prática deliberada",
        content:
          "Grit sozinho não gera excelência sem o tipo certo de prática. A obra descreve 'prática deliberada' como sessões focadas em um aspecto específico e desafiador da habilidade (não apenas repetição confortável do que já se domina), com objetivos claros de melhoria, feedback imediato sobre o desempenho, e repetição com refinamento contínuo. Esse tipo de prática é mentalmente exigente e geralmente não é agradável no momento — mas é isso que efetivamente amplia a competência ao longo do tempo.",
      },
      {
        title: "Esperança e a mentalidade de crescimento",
        content:
          "A pesquisa conecta grit com a crença de que o esforço pode melhorar a capacidade futura (mentalidade de crescimento, conceito relacionado ao trabalho de Carol Dweck). Pessoas com grit alto tendem a interpretar contratempos como temporários e específicos, não como evidência de incapacidade permanente e generalizada. Essa forma de interpretar dificuldades — como parte esperada do processo, não como veredito final sobre a própria capacidade — sustenta a persistência diante de fracassos repetidos.",
      },
      {
        title: "Cultivando grit em si mesmo e nos outros",
        content:
          "A pesquisa sugere que grit pode crescer tanto de dentro para fora (desenvolvendo interesse genuíno, praticando deliberadamente, conectando o trabalho a um propósito maior, cultivando esperança diante de contratempos) quanto de fora para dentro (fazendo parte de uma cultura ou comunidade que valoriza e modela perseverança). Pais e treinadores que combinam altas expectativas com apoio genuíno — nem permissivos demais nem excessivamente rígidos — tendem a criar ambientes que favorecem o desenvolvimento de grit em crianças e jovens ao longo do tempo.",
      },
    ],
    quiz: [
      { q: "O que a pesquisa descobriu sobre talento natural isolado?", options: ["É o único fator que prevê sucesso", "Previa mal quem completaria desafios de longo prazo, comparado ao grit", "É irrelevante para qualquer desempenho", "Sempre supera perseverança em qualquer contexto"], correct: 1, explanation: "Pessoas talentosas frequentemente desistem diante das primeiras dificuldades reais." },
      { q: "Qual é a 'equação do grit' proposta pela autora?", options: ["Talento sozinho gera realização", "Habilidade x esforço = competência; competência x esforço = realização", "Sorte x oportunidade = sucesso", "Inteligência dividida por esforço = resultado"], correct: 1, explanation: "O esforço aparece duas vezes porque conta tanto para desenvolver habilidade quanto para gerar resultado." },
      { q: "Como a pesquisa define 'paixão' no contexto do grit?", options: ["Um pico de entusiasmo intenso e passageiro", "Constância de interesse por um objetivo de nível mais alto ao longo de anos", "Mudar de direção a cada novo interesse", "Uma emoção incontrolável e imprevisível"], correct: 1, explanation: "Isso difere do uso popular da palavra como intensidade momentânea." },
      { q: "O que caracteriza a 'prática deliberada'?", options: ["Repetição confortável do que já se domina", "Sessões focadas em aspectos desafiadores, com feedback imediato e refinamento contínuo", "Prática sem nenhum objetivo específico", "Evitar qualquer desconforto durante o treino"], correct: 1, explanation: "Esse tipo de prática é mentalmente exigente, mas amplia a competência de forma eficaz." },
      { q: "Como pessoas com grit alto costumam interpretar contratempos?", options: ["Como evidência de incapacidade permanente", "Como temporários e específicos, parte esperada do processo", "Como motivo para desistir imediatamente", "Como algo que nunca deveria acontecer"], correct: 1, explanation: "Essa interpretação sustenta a persistência diante de fracassos repetidos." },
      { q: "Com qual outro conceito psicológico o grit se conecta, segundo a obra?", options: ["Mentalidade fixa", "Mentalidade de crescimento", "Efeito placebo", "Viés de confirmação"], correct: 1, explanation: "A crença de que esforço melhora capacidade futura está ligada ao conceito de mentalidade de crescimento." },
      { q: "Segundo a pesquisa, como o grit pode se desenvolver 'de fora para dentro'?", options: ["Não é possível desenvolver grit externamente", "Fazendo parte de uma cultura ou comunidade que valoriza e modela perseverança", "Apenas através de terapia individual", "Somente através de recompensas financeiras"], correct: 1, explanation: "O ambiente social também influencia o desenvolvimento do grit ao longo do tempo." },
      { q: "Que tipo de ambiente parental favorece o desenvolvimento de grit, segundo a pesquisa?", options: ["Extremamente permissivo, sem expectativas", "Excessivamente rígido, sem apoio emocional", "Alta expectativa combinada com apoio genuíno", "Total ausência de supervisão"], correct: 2, explanation: "O equilíbrio entre exigência e suporte tende a favorecer o desenvolvimento de perseverança." },
      { q: "Por que pessoas talentosas às vezes desistem mais facilmente, segundo a obra?", options: ["Porque têm menos inteligência emocional", "Porque estão acostumadas a que as coisas sejam fáceis", "Porque não têm interesse em nenhum assunto", "Porque são sempre mal orientadas por mentores"], correct: 1, explanation: "A facilidade inicial pode reduzir a tolerância a dificuldades reais mais tarde." },
      { q: "O que uma hierarquia clara de objetivos proporciona, segundo a pesquisa sobre grit?", options: ["Confusão sobre prioridades", "Um propósito de nível superior que organiza e dá sentido às metas menores", "Nenhum benefício mensurável", "Menos foco no cotidiano"], correct: 1, explanation: "Isso ajuda a manter constância de interesse ao longo de anos." },
    ],
  },

  {
    id: "freakonomics",
    title: "Freakonomics",
    author: "Baseado na obra de Steven D. Levitt e Stephen J. Dubner",
    category: "Economia",
    tags: ["incentivos", "dados", "pensamento não convencional"],
    readTimeMin: 16,
    premium: true,
    coverIcon: "coins",
    synopsis:
      "Uma aplicação não convencional do raciocínio econômico a perguntas do cotidiano — do que professores de escola e lutadores de sumô têm em comum, ao verdadeiro impacto de incentivos escondidos no comportamento humano.",
    chapters: [
      {
        title: "Incentivos governam o comportamento",
        content:
          "A tese central é que praticamente todo comportamento humano responde a incentivos — econômicos, sociais ou morais — mesmo quando as pessoas não percebem conscientemente essa influência. Entender qual tipo de incentivo está realmente em jogo numa situação explica comportamentos que, à primeira vista, parecem contraditórios ou irracionais. Um exemplo citado: creches que passaram a multar pais atrasados viram os atrasos aumentarem, não diminuírem — porque a multa transformou uma obrigação moral (chegar na hora por respeito) em uma transação econômica aceitável (pagar para chegar atrasado).",
      },
      {
        title: "Trapaça e como detectá-la com dados",
        content:
          "A obra examina como analisar grandes conjuntos de dados pode revelar trapaça sistemática invisível a olho nu — desde professores que alteravam respostas de provas padronizadas de alunos para melhorar estatísticas da escola, até lutadores de sumô que perdiam lutas estrategicamente em circunstâncias específicas de classificação. Em ambos os casos, padrões estatísticos anômalos (mudanças abruptas de desempenho em momentos-chave) revelaram comportamento que jamais seria admitido voluntariamente pelos envolvidos.",
      },
      {
        title: "Correlação não é causa",
        content:
          "Um dos alertas metodológicos centrais da obra é a diferença entre correlação (duas coisas acontecerem juntas) e causalidade (uma coisa realmente provocar a outra). O exemplo clássico discutido é a relação entre número de policiais numa cidade e taxa de criminalidade: mais policiais podem reduzir crime, mas também podem ser uma RESPOSTA a um aumento anterior de crime — a direção da causa é ambígua sem análise mais cuidadosa, e conclusões apressadas sobre causalidade a partir de correlações simples levam a políticas públicas mal desenhadas.",
      },
      {
        title: "O poder (e os limites) da informação",
        content:
          "Especialistas em diversas áreas — corretores de imóveis, agentes funerários, vendedores de carros — muitas vezes têm acesso a informação que o consumidor comum não tem, e usam essa assimetria de informação a seu próprio favor, mesmo quando dizem estar agindo em nome do cliente. A obra mostra evidências, por exemplo, de que corretores de imóveis vendem suas próprias casas por preços mais altos e com mais tempo no mercado do que quando vendem casas de clientes — porque o incentivo de vender rápido supera o incentivo de conseguir o melhor preço possível para o cliente.",
      },
      {
        title: "Nomes, causalidade e o que realmente importa",
        content:
          "A obra investiga se o nome de uma criança afeta seu destino — e conclui que a correlação entre certos nomes e resultados de vida existe, mas provavelmente reflete o ambiente socioeconômico dos pais que escolheram aquele nome, não um efeito causal direto do nome em si. Esse exemplo reforça o padrão metodológico central da obra: buscar sistematicamente a causa real por trás de correlações populares, mesmo quando a explicação intuitiva e mais simples parece óbvia à primeira vista.",
      },
      {
        title: "Pensar como um 'freak' econômico",
        content:
          "O convite final da obra não é para memorizar conclusões específicas, mas para adotar uma disposição de questionar sabedoria convencional, buscar dados reais em vez de intuição não testada, e sempre perguntar 'quais incentivos realmente estão em jogo aqui' antes de aceitar explicações populares para fenômenos sociais complexos. Essa disposição de investigação, mais do que qualquer conclusão isolada do livro, é apresentada como a contribuição duradoura da obra para quem a lê.",
      },
    ],
    quiz: [
      { q: "Qual é a tese central da obra sobre comportamento humano?", options: ["Comportamento é aleatório e imprevisível", "Praticamente todo comportamento responde a incentivos, mesmo sem percepção consciente", "Apenas incentivos financeiros importam", "Incentivos não afetam decisões morais"], correct: 1, explanation: "Incentivos econômicos, sociais e morais moldam comportamentos de formas nem sempre óbvias." },
      { q: "O que aconteceu quando creches passaram a multar pais atrasados?", options: ["Os atrasos diminuíram imediatamente", "Os atrasos aumentaram, pois a multa virou uma transação aceitável", "Não houve nenhuma mudança de comportamento", "Os pais pararam de usar a creche"], correct: 1, explanation: "A multa transformou uma obrigação moral em uma transação econômica aceitável." },
      { q: "Como a obra descreve a detecção de trapaça usando dados?", options: ["Através de confissões voluntárias apenas", "Através de padrões estatísticos anômalos em grandes conjuntos de dados", "Através de sorteios aleatórios", "Não é abordado na obra"], correct: 1, explanation: "Mudanças abruptas de desempenho em momentos-chave revelam comportamentos suspeitos." },
      { q: "Qual é a diferença entre correlação e causalidade destacada na obra?", options: ["São sempre a mesma coisa", "Correlação é duas coisas acontecerem juntas; causalidade é uma provocar a outra", "Causalidade é mais fraca que correlação", "Não há diferença relevante em economia"], correct: 1, explanation: "Confundir os dois conceitos leva a conclusões e políticas públicas equivocadas." },
      { q: "O que a obra revela sobre corretores de imóveis vendendo suas próprias casas?", options: ["Vendem pelo mesmo preço e tempo que casas de clientes", "Vendem por preços mais altos e com mais tempo no mercado que casas de clientes", "Sempre vendem mais rápido que os clientes", "Não há diferença de comportamento"], correct: 1, explanation: "O incentivo de vender rápido supera o de conseguir o melhor preço para o cliente." },
      { q: "O que é 'assimetria de informação', segundo a obra?", options: ["Quando ambas as partes têm acesso igual à informação", "Quando uma parte (como um especialista) tem mais informação que a outra (o consumidor)", "Um conceito exclusivo de física", "Uma forma de fraude sempre ilegal"], correct: 1, explanation: "Especialistas podem usar essa vantagem de informação a seu próprio favor." },
      { q: "Qual é a conclusão da obra sobre nomes de crianças e seu destino?", options: ["O nome causa diretamente o sucesso ou fracasso da pessoa", "A correlação provavelmente reflete o ambiente socioeconômico dos pais, não o nome em si", "Nomes não têm nenhuma correlação com resultados de vida", "Só nomes raros afetam o destino"], correct: 1, explanation: "Esse exemplo reforça a busca pela causa real por trás de correlações populares." },
      { q: "Qual é o convite final da obra para o leitor?", options: ["Memorizar todas as conclusões específicas do livro", "Questionar sabedoria convencional e buscar incentivos reais por trás dos fenômenos", "Aceitar explicações populares sem questionar", "Evitar completamente o uso de dados em decisões"], correct: 1, explanation: "A disposição de investigação é apresentada como a contribuição duradoura da obra." },
      { q: "Por que mais policiais numa cidade não prova diretamente que eles reduzem o crime?", options: ["Porque policiais nunca afetam taxas de crime", "Porque o aumento de policiais pode ser uma resposta a um crime já elevado, não a causa da redução", "Porque dados sobre crime não são confiáveis", "Porque a pergunta não faz sentido economicamente"], correct: 1, explanation: "A direção da causalidade é ambígua sem análise mais cuidadosa dos dados." },
      { q: "Qual é o alerta metodológico central sobre correlações populares aceitas sem questionamento?", options: ["Elas sempre indicam causalidade direta", "Podem levar a conclusões erradas se a causa real não for investigada", "Não têm nenhuma utilidade em pesquisa", "São sempre mais confiáveis que experimentos controlados"], correct: 1, explanation: "A obra defende investigar sistematicamente a causa real por trás de correlações." },
    ],
  },

  {
    id: "por-que-dormimos",
    title: "Por Que Dormimos",
    author: "Baseado na obra de Matthew Walker",
    category: "Saúde & Dieta",
    tags: ["sono", "saúde", "neurociência"],
    readTimeMin: 16,
    premium: true,
    coverIcon: "heart",
    synopsis:
      "A ciência por trás do sono revela por que ele é tão essencial quanto comida e água — e os riscos reais, pouco discutidos, de privação crônica de sono na sociedade moderna.",
    chapters: [
      {
        title: "O sono não é opcional",
        content:
          "Diferente da crença popular de que sono é 'tempo perdido' recuperável nos fins de semana, a pesquisa mostra que dívida de sono acumulada tem efeitos cumulativos e, em muitos casos, não totalmente reversíveis — comprometendo sistema imunológico, capacidade de memória, regulação hormonal e saúde cardiovascular. Sociedades modernas normalizaram a privação crônica de sono como sinal de produtividade, quando na verdade ela reduz mensuravelmente o desempenho cognitivo, mesmo quando a pessoa não percebe conscientemente estar prejudicada.",
      },
      {
        title: "As fases do sono e seus papéis distintos",
        content:
          "O sono não é um estado único e uniforme — alterna entre ciclos de sono NREM (não-REM, com estágios mais profundos de recuperação física) e sono REM (com sonhos vívidos, importante para processamento emocional e certos tipos de aprendizado). Cada fase cumpre funções diferentes e complementares: sono profundo NREM consolida memórias factuais e remove resíduos metabólicos do cérebro, enquanto o REM ajuda a integrar experiências emocionais e conexões criativas entre ideias aparentemente não relacionadas.",
      },
      {
        title: "Sono e memória",
        content:
          "Durante o sono, o cérebro replica e consolida ativamente experiências e informações adquiridas no dia, transferindo memórias de curto prazo para armazenamento de longo prazo de forma mais estável. Isso explica por que uma noite de sono adequada antes de uma prova ou apresentação importante é mais eficaz do que uma sessão extra de estudo tardia às custas do sono — o cérebro precisa do próprio sono para de fato 'gravar' o que foi aprendido durante o dia.",
      },
      {
        title: "Os riscos reais da privação crônica",
        content:
          "Estudos populacionais associam privação crônica de sono a risco elevado de doenças cardiovasculares, diabetes tipo 2, obesidade, comprometimento do sistema imunológico e maior propensão a certos tipos de câncer. No campo cognitivo, mesmo restrição moderada e repetida de sono (seis horas por noite ao longo de duas semanas, por exemplo) produz déficits de desempenho comparáveis aos de uma noite inteira sem dormir — déficits que a própria pessoa frequentemente não percebe conscientemente, tendo se 'acostumado' à sensação de cansaço crônico.",
      },
      {
        title: "Cafeína, álcool e a qualidade do sono",
        content:
          "Cafeína tem meia-vida longa no organismo — mesmo consumida no início da tarde, uma quantidade significativa ainda está ativa à noite, fragmentando a qualidade do sono profundo mesmo quando a pessoa consegue adormecer sem dificuldade aparente. Álcool, apesar de popularmente associado a 'ajudar a dormir', na verdade suprime especificamente o sono REM e fragmenta os ciclos naturais de sono ao longo da noite, resultando em sono de pior qualidade mesmo quando a duração total parece adequada.",
      },
      {
        title: "Higiene do sono na prática",
        content:
          "Recomendações práticas incluem manter horários consistentes de dormir e acordar, mesmo nos fins de semana; manter o quarto escuro e fresco; evitar telas com luz azul próximo ao horário de dormir, já que essa luz suprime a produção natural de melatonina; e evitar cafeína e álcool nas horas que antecedem o sono. A obra enfatiza que essas mudanças de hábito, embora simples individualmente, têm efeito cumulativo significativo na qualidade e consistência do sono ao longo de semanas de prática.",
      },
    ],
    quiz: [
      { q: "O que a pesquisa diz sobre 'recuperar' sono perdido nos fins de semana?", options: ["É totalmente eficaz e sem consequências", "A dívida de sono tem efeitos cumulativos, muitas vezes não totalmente reversíveis", "Não existe dívida de sono real", "É recomendado como estratégia principal"], correct: 1, explanation: "Privação crônica de sono compromete sistemas do corpo de forma cumulativa." },
      { q: "Quais são as duas categorias principais de sono descritas na obra?", options: ["Sono leve e sono pesado", "Sono NREM e sono REM", "Sono diurno e sono noturno", "Sono ativo e sono passivo"], correct: 1, explanation: "Cada fase cumpre funções complementares e distintas no organismo." },
      { q: "O que o sono profundo NREM ajuda a fazer, segundo a obra?", options: ["Apenas descansar os músculos", "Consolidar memórias factuais e remover resíduos metabólicos do cérebro", "Processar exclusivamente emoções", "Não tem função relevante"], correct: 1, explanation: "Essa fase é central para consolidação de memória e limpeza metabólica cerebral." },
      { q: "Por que dormir bem antes de uma prova é mais eficaz que estudar a noite toda?", options: ["Porque o cérebro precisa do sono para consolidar o que foi aprendido", "Porque estudar à noite não tem nenhum valor", "Porque o sono não afeta a memória", "Porque provas não exigem memória"], correct: 0, explanation: "O sono transfere memórias de curto prazo para armazenamento de longo prazo mais estável." },
      { q: "A privação crônica de sono está associada a quais riscos de saúde, segundo a obra?", options: ["Nenhum risco significativo", "Doenças cardiovasculares, diabetes tipo 2 e comprometimento imunológico", "Apenas cansaço passageiro", "Melhora do sistema imunológico"], correct: 1, explanation: "Estudos populacionais ligam privação crônica a diversos riscos sérios de saúde." },
      { q: "O que acontece com pessoas cronicamente privadas de sono, segundo a obra?", options: ["Elas sempre percebem claramente o próprio déficit cognitivo", "Frequentemente não percebem conscientemente o próprio déficit, por estarem 'acostumadas'", "Não sofrem nenhum impacto no desempenho", "Dormem automaticamente mais em algum momento"], correct: 1, explanation: "O cansaço crônico se torna a nova 'normalidade' percebida pela pessoa." },
      { q: "Como a cafeína afeta o sono, mesmo consumida à tarde?", options: ["Não tem nenhum efeito residual à noite", "Sua meia-vida longa pode fragmentar o sono profundo à noite", "Melhora a qualidade do sono profundo", "Só afeta pessoas sensíveis a cafeína"], correct: 1, explanation: "Uma quantidade significativa de cafeína ainda está ativa no organismo horas depois." },
      { q: "Qual é o efeito real do álcool sobre o sono, segundo a obra?", options: ["Melhora a qualidade geral do sono", "Suprime o sono REM e fragmenta os ciclos naturais de sono", "Não tem nenhum efeito mensurável", "Aumenta a duração do sono profundo"], correct: 1, explanation: "Apesar de ajudar a adormecer, o álcool piora a qualidade do sono ao longo da noite." },
      { q: "Por que evitar luz azul de telas antes de dormir é recomendado?", options: ["Porque não tem nenhum efeito biológico real", "Porque essa luz suprime a produção natural de melatonina", "Porque telas sempre causam dor de cabeça", "Porque aumenta a energia física antes de dormir"], correct: 1, explanation: "A supressão de melatonina dificulta o processo natural de adormecer." },
      { q: "O que a obra recomenda sobre horários de dormir e acordar?", options: ["Variar bastante para 'testar' diferentes rotinas", "Manter horários consistentes, mesmo nos fins de semana", "Dormir apenas quando sentir muito cansaço", "Não há recomendação sobre horários"], correct: 1, explanation: "Consistência de horário ajuda a regular o ritmo biológico do sono." },
    ],
  },

  {
    id: "como-falar-filhos-ouvirem",
    title: "Como Falar Para os Filhos Ouvirem",
    author: "Baseado na obra de Adele Faber e Elaine Mazlish",
    category: "Parentalidade",
    tags: ["educação infantil", "comunicação", "família"],
    readTimeMin: 15,
    premium: true,
    coverIcon: "users",
    synopsis:
      "Técnicas práticas de comunicação para reduzir conflitos entre pais e filhos, substituindo ordens, ameaças e sermões por diálogo que respeita os sentimentos da criança.",
    chapters: [
      {
        title: "Reconhecer sentimentos em vez de negá-los",
        content:
          "Um padrão comum na comunicação com crianças é negar ou minimizar seus sentimentos ('não é motivo para chorar', 'isso não dói tanto assim') na tentativa de fazê-las se sentir melhor rapidamente. Paradoxalmente, isso costuma intensificar a angústia, porque a criança sente que sua experiência interna não está sendo validada. A alternativa proposta é nomear e reconhecer o sentimento primeiro ('percebo que você está muito frustrado com isso'), o que sozinho já reduz a intensidade emocional antes mesmo de qualquer solução prática ser discutida.",
      },
      {
        title: "Convidar cooperação sem ordens diretas",
        content:
          "Ordens diretas repetidas ('arrume seu quarto', 'pare com isso') geram resistência automática, especialmente em crianças mais velhas que já buscam autonomia. Técnicas alternativas incluem descrever o problema observado sem acusar ('vejo roupas no chão do quarto'), dar informação em vez de ordem ('roupas no chão ficam amassadas'), usar uma única palavra como lembrete ('quarto') em vez de um sermão completo, e expressar o próprio sentimento sobre a situação de forma direta e sem ataque pessoal.",
      },
      {
        title: "Alternativas a punição",
        content:
          "Punições frequentemente resolvem o comportamento imediato às custas do relacionamento de longo prazo, e não ensinam necessariamente a habilidade que faltou. A obra propõe alternativas: expressar desaprovação de forma clara sem atacar o caráter da criança, declarar expectativas explícitas para a próxima vez, mostrar como reparar o erro cometido, oferecer uma escolha entre opções aceitáveis, e permitir que a criança experimente consequências naturais razoáveis de suas próprias escolhas, quando seguro fazê-lo.",
      },
      {
        title: "Elogio descritivo em vez de avaliativo",
        content:
          "Elogios genéricos e avaliativos ('você é ótimo', 'que inteligente') podem gerar pressão de manter uma imagem e ansiedade sobre decepcionar essa expectativa no futuro. A alternativa sugerida é o elogio descritivo: descrever especificamente o que a criança fez ('você organizou todos os brinquedos por cor, isso exigiu bastante atenção aos detalhes') e deixar que a criança tire suas próprias conclusões positivas sobre si mesma a partir dessa descrição concreta, em vez de receber apenas um rótulo pronto de fora.",
      },
      {
        title: "Libertando crianças de papéis fixos",
        content:
          "Rótulos repetidos, mesmo bem-intencionados ('ela é a bagunceira', 'ele é o tímido da família'), tendem a se tornar profecias autorrealizáveis, pois a criança internaliza e passa a agir de acordo com essa identidade atribuída por adultos importantes em sua vida. A obra recomenda ativamente criar oportunidades para que a criança se veja de forma diferente: mencionar exemplos específicos que contradizem o rótulo antigo, e evitar comentar comportamentos negativos na frente de outras pessoas, o que reforça publicamente a identidade indesejada.",
      },
      {
        title: "Resolução conjunta de problemas",
        content:
          "Para conflitos recorrentes, a obra propõe um processo estruturado: primeiro, ouvir e reconhecer os sentimentos e necessidades da criança sobre a situação; segundo, expressar os próprios sentimentos e necessidades como pai ou mãe; terceiro, gerar juntos uma lista de possíveis soluções sem julgar nenhuma ideia de imediato; e por fim, escolher juntos as soluções que parecem funcionar para ambos os lados. Esse processo colaborativo, mais trabalhoso no curto prazo que uma ordem direta, tende a gerar soluções mais duradouras porque a criança participou genuinamente da decisão.",
      },
    ],
    quiz: [
      { q: "O que acontece, segundo a obra, quando os sentimentos de uma criança são negados?", options: ["A angústia diminui imediatamente", "A angústia costuma se intensificar, pois a experiência não é validada", "Não há nenhum efeito perceptível", "A criança aprende a controlar melhor as emoções"], correct: 1, explanation: "Negar sentimentos tende a aumentar, não reduzir, a intensidade emocional da criança." },
      { q: "Qual é a alternativa proposta a negar sentimentos?", options: ["Ignorar completamente a situação", "Nomear e reconhecer o sentimento antes de buscar soluções", "Punir a reação emocional", "Distrair a criança imediatamente"], correct: 1, explanation: "Reconhecer o sentimento primeiro já reduz a intensidade emocional." },
      { q: "Por que ordens diretas repetidas costumam gerar resistência?", options: ["Porque crianças nunca obedecem ordens", "Porque geram resistência automática, especialmente com a busca por autonomia", "Porque são sempre mal formuladas", "Porque não têm nenhum efeito nas crianças"], correct: 1, explanation: "Isso é especialmente verdadeiro em crianças mais velhas buscando independência." },
      { q: "Qual é uma alternativa a dar uma ordem direta, segundo a obra?", options: ["Gritar mais alto para reforçar a ordem", "Descrever o problema observado sem acusar", "Ignorar completamente a situação", "Repetir a mesma ordem várias vezes seguidas"], correct: 1, explanation: "Descrever o problema reduz a resistência automática à ordem direta." },
      { q: "Qual é uma limitação apontada da punição tradicional?", options: ["Ela sempre ensina a habilidade que faltou", "Resolve o comportamento imediato às custas do relacionamento de longo prazo", "Não tem nenhum efeito negativo", "É a única forma eficaz de disciplina"], correct: 1, explanation: "Punição não necessariamente ensina a habilidade que a criança precisava desenvolver." },
      { q: "O que é 'elogio descritivo'?", options: ["Um elogio genérico como 'você é ótimo'", "Descrever especificamente o que a criança fez, sem rótulo avaliativo pronto", "Elogiar apenas resultados finais", "Evitar qualquer tipo de elogio"], correct: 1, explanation: "Isso permite que a criança tire suas próprias conclusões positivas sobre si mesma." },
      { q: "Por que rótulos repetidos como 'ela é a bagunceira' são problemáticos, segundo a obra?", options: ["Não têm nenhum efeito real", "Tendem a se tornar profecias autorrealizáveis", "Sempre motivam a criança a mudar", "São sempre precisos e úteis"], correct: 1, explanation: "A criança tende a internalizar e agir de acordo com a identidade atribuída." },
      { q: "O que a obra recomenda para libertar crianças de rótulos fixos?", options: ["Reforçar o rótulo com mais frequência", "Mencionar exemplos específicos que contradizem o rótulo antigo", "Comentar o comportamento negativo na frente de outras pessoas", "Ignorar completamente qualquer mudança de comportamento"], correct: 1, explanation: "Isso ajuda a criança a se ver de forma diferente ao longo do tempo." },
      { q: "Qual é o primeiro passo no processo de resolução conjunta de problemas?", options: ["Impor a solução do adulto imediatamente", "Ouvir e reconhecer os sentimentos e necessidades da criança", "Punir o comportamento antes de conversar", "Ignorar a perspectiva da criança"], correct: 1, explanation: "Esse reconhecimento inicial é a base para o processo colaborativo funcionar." },
      { q: "Por que soluções geradas em conjunto tendem a ser mais duradouras, segundo a obra?", options: ["Porque são sempre mais rápidas de aplicar", "Porque a criança participou genuinamente da decisão", "Porque eliminam a necessidade de qualquer regra", "Porque os pais não precisam se envolver"], correct: 1, explanation: "A participação genuína da criança aumenta o comprometimento com a solução escolhida." },
    ],
  },

  {
    id: "dilema-da-inovacao",
    title: "O Dilema da Inovação",
    author: "Baseado na obra de Clayton Christensen",
    category: "Tecnologia e Inovação",
    tags: ["disrupção", "inovação", "estratégia"],
    readTimeMin: 17,
    premium: true,
    coverIcon: "cpu",
    synopsis:
      "Por que empresas líderes de mercado, gerenciadas de forma tecnicamente competente, frequentemente perdem para tecnologias disruptivas que inicialmente pareciam inferiores e sem importância.",
    chapters: [
      {
        title: "Inovação sustentadora versus disruptiva",
        content:
          "Inovações sustentadoras melhoram produtos existentes ao longo de dimensões que os clientes atuais já valorizam — e empresas estabelecidas geralmente lideram nesse tipo de inovação, porque estão bem alinhadas com as demandas dos clientes mais lucrativos. Inovações disruptivas, por outro lado, inicialmente oferecem desempenho inferior nas métricas tradicionais valorizadas pelos clientes principais, mas trazem outras vantagens (preço mais baixo, simplicidade, conveniência) que atraem um segmento diferente, geralmente menor e menos lucrativo no início.",
      },
      {
        title: "Por que empresas bem geridas falham",
        content:
          "O paradoxo central da obra é que empresas não falham diante da disrupção por incompetência gerencial — falham precisamente por seguirem boas práticas de gestão: escutar seus clientes mais lucrativos, investir em produtos com margem maior, e alocar recursos para as oportunidades de mercado maiores e mais visíveis no curto prazo. Essas mesmas práticas racionais tornam quase impossível justificar investimento sério em uma tecnologia disruptiva que, no início, atende um mercado pequeno, com margens baixas, e que os clientes atuais explicitamente dizem não querer.",
      },
      {
        title: "Os processos e valores da organização",
        content:
          "Organizações desenvolvem processos e critérios de decisão otimizados para seu modelo de negócio atual — sistemas de aprovação de projeto que exigem certo tamanho mínimo de mercado, métricas de sucesso calibradas para as margens do negócio principal. Esses mesmos processos e valores, que tornam a empresa eficiente em seu negócio atual, atuam como filtros que sistematicamente rejeitam ou desfinanciam projetos disruptivos, porque eles nunca parecem suficientemente atraentes quando avaliados pelos critérios do negócio estabelecido.",
      },
      {
        title: "A trajetória de melhoria da tecnologia disruptiva",
        content:
          "Tecnologias disruptivas tipicamente melhoram seu desempenho ao longo do tempo numa velocidade maior do que a demanda real dos clientes por aquele desempenho específico cresce. Isso significa que, mesmo começando claramente inferior, a tecnologia disruptiva eventualmente 'alcança' e depois ultrapassa o nível de desempenho que o mercado principal considera suficiente — e nesse ponto, suas vantagens adicionais (custo, simplicidade) tornam-se decisivas, e os líderes estabelecidos frequentemente percebem a ameaça tarde demais para reagir de forma eficaz.",
      },
      {
        title: "Criando unidades separadas para disrupção",
        content:
          "Uma das recomendações centrais da obra é que, quando uma empresa identifica uma oportunidade genuinamente disruptiva, ela deve ser desenvolvida em uma unidade organizacional separada, com sua própria estrutura de custos, processos de decisão e métricas de sucesso — pequena o suficiente para que oportunidades emergentes pareçam significativas para ela. Tentar desenvolver a inovação disruptiva dentro da estrutura principal quase sempre falha, porque será constantemente comparada e desfavorecida frente às oportunidades maiores e mais imediatas do negócio já estabelecido.",
      },
      {
        title: "Aplicando a teoria de forma proativa",
        content:
          "A obra recomenda que executivos monitorem ativamente sinais de tecnologias emergentes que, mesmo parecendo brinquedos ou nichos irrelevantes hoje, atendem necessidades reais de um segmento de mercado através de uma proposta de valor fundamentalmente diferente. A pergunta estratégica chave não é 'nossos clientes atuais querem isso', mas 'existe um mercado, mesmo pequeno hoje, disposto a aceitar desempenho inferior em troca de outras vantagens — e essa tecnologia está numa trajetória de melhoria que pode eventualmente competir com nosso negócio principal'.",
      },
    ],
    quiz: [
      { q: "O que caracteriza uma inovação sustentadora?", options: ["Desempenho inicialmente inferior com outras vantagens", "Melhora produtos existentes em dimensões já valorizadas pelos clientes atuais", "Sempre cria um mercado totalmente novo", "É sempre mais barata que o produto original"], correct: 1, explanation: "Empresas estabelecidas geralmente lideram nesse tipo de inovação." },
      { q: "O que caracteriza uma inovação disruptiva no início?", options: ["Desempenho superior em todas as métricas tradicionais", "Desempenho inferior nas métricas valorizadas pelos clientes principais, mas com outras vantagens", "Preço sempre mais alto que a alternativa existente", "Adoção imediata pelos clientes mais lucrativos"], correct: 1, explanation: "Vantagens como preço, simplicidade ou conveniência atraem inicialmente um segmento diferente." },
      { q: "Por que, segundo a obra, empresas bem geridas falham diante da disrupção?", options: ["Por incompetência gerencial evidente", "Por seguirem boas práticas de gestão focadas nos clientes mais lucrativos atuais", "Por falta de recursos financeiros", "Por não terem departamento de inovação"], correct: 1, explanation: "As mesmas práticas racionais tornam difícil investir em tecnologias disruptivas iniciais." },
      { q: "Como processos e valores organizacionais afetam projetos disruptivos?", options: ["Sempre favorecem automaticamente qualquer inovação", "Atuam como filtros que rejeitam projetos que não atendem aos critérios do negócio estabelecido", "Não têm nenhuma influência na avaliação de projetos", "Aceleram sempre a adoção de novas tecnologias"], correct: 1, explanation: "Esses processos otimizados para o modelo atual filtram projetos que parecem pouco atraentes inicialmente." },
      { q: "O que geralmente acontece com a trajetória de melhoria de tecnologias disruptivas?", options: ["Elas nunca melhoram seu desempenho", "Melhoram numa velocidade maior que a demanda real dos clientes por aquele desempenho", "Estagnam permanentemente em nível inferior", "Pioram com o tempo"], correct: 1, explanation: "Eventualmente a tecnologia alcança e ultrapassa o nível de desempenho considerado suficiente." },
      { q: "O que a obra recomenda para desenvolver oportunidades genuinamente disruptivas?", options: ["Desenvolvê-las dentro da estrutura principal da empresa", "Criar uma unidade organizacional separada, com sua própria estrutura de custos e métricas", "Ignorá-las completamente até se tornarem grandes", "Terceirizar totalmente para outra empresa"], correct: 1, explanation: "Unidades separadas evitam que a inovação seja desfavorecida frente a oportunidades maiores." },
      { q: "Por que tentar desenvolver inovação disruptiva dentro da estrutura principal geralmente falha?", options: ["Porque falta talento técnico na empresa", "Porque será constantemente comparada e desfavorecida frente a oportunidades maiores e mais imediatas", "Porque é proibido por lei", "Porque consome muito tempo dos executivos"], correct: 1, explanation: "A comparação direta com o negócio principal tende a desfavorecer projetos ainda pequenos." },
      { q: "Qual é a pergunta estratégica chave sugerida pela obra?", options: ["Nossos clientes atuais querem isso?", "Existe um mercado disposto a aceitar desempenho inferior em troca de outras vantagens, numa trajetória de melhoria?", "Qual é o lucro imediato dessa tecnologia?", "Nossos concorrentes já adotaram essa tecnologia?"], correct: 1, explanation: "Essa pergunta ajuda a identificar potenciais disrupções antes que se tornem óbvias." },
      { q: "Por que líderes de mercado frequentemente percebem a ameaça disruptiva tarde demais?", options: ["Porque não têm acesso a dados de mercado", "Porque a tecnologia só se torna competitiva depois de ultrapassar o nível de desempenho considerado suficiente", "Porque ignoram completamente a concorrência", "Porque não investem em nenhuma pesquisa"], correct: 1, explanation: "As vantagens adicionais só se tornam decisivas depois que o desempenho alcança um patamar suficiente." },
      { q: "O paradoxo central da obra é que empresas falham diante da disrupção...", options: ["Por serem geridas de forma incompetente", "Precisamente por seguirem boas práticas de gestão focadas no negócio atual", "Por não terem recursos financeiros suficientes", "Por ignorarem completamente seus clientes"], correct: 1, explanation: "Esse é o paradoxo central que dá nome ao 'dilema' da inovação." },
    ],
  },

  {
    id: "como-democracias-morrem",
    title: "Como as Democracias Morrem",
    author: "Baseado na obra de Steven Levitsky e Daniel Ziblatt",
    category: "Sociedade & Política",
    tags: ["democracia", "instituições", "política comparada"],
    readTimeMin: 17,
    premium: true,
    coverIcon: "landmark",
    synopsis:
      "Uma análise de como democracias modernas frequentemente não morrem por golpes militares repentinos, mas por erosão gradual das normas e instituições, muitas vezes de dentro do próprio sistema eleitoral.",
    chapters: [
      {
        title: "Golpes silenciosos, não tanques nas ruas",
        content:
          "Historicamente, democracias costumavam morrer de forma abrupta e visível — golpes militares, tomadas de poder por força. Os autores documentam um padrão mais comum nas últimas décadas: líderes eleitos democraticamente que, uma vez no poder, corroem gradualmente as instituições que poderiam limitá-los — tribunais, imprensa, órgãos eleitorais — usando meios aparentemente legais, um passo de cada vez, de forma que cada erosão individual pareça pequena demais para gerar resistência coletiva imediata.",
      },
      {
        title: "Sinais de alerta de comportamento autoritário",
        content:
          "A obra propõe quatro sinais de alerta para identificar tendências autoritárias em um político: rejeição (ou compromisso fraco) com as regras democráticas do jogo; negação da legitimidade de oponentes políticos, tratados como inimigos e não como adversários legítimos; tolerância ou incentivo à violência; e disposição para restringir liberdades civis de opositores, incluindo mídia. Nenhum sinal isolado é definitivo, mas a presença de múltiplos sinais simultâneos é apresentada como motivo real de preocupação.",
      },
      {
        title: "Guardiões invisíveis: normas não escritas",
        content:
          "Além das leis formais, democracias saudáveis dependem de normas não escritas, especialmente duas: tolerância mútua (aceitar oponentes políticos como legítimos, mesmo discordando profundamente deles) e reserva institucional (evitar usar todo o poder legal disponível até o limite máximo, mesmo quando tecnicamente permitido, para preservar o espírito e não só a letra das regras). Quando essas normas erodem, as mesmas instituições formais continuam existindo no papel, mas perdem a capacidade real de restringir abusos de poder.",
      },
      {
        title: "Polarização extrema como terreno fértil",
        content:
          "Os autores argumentam que polarização política extrema — especialmente quando se sobrepõe a divisões identitárias profundas (raciais, religiosas, regionais) — cria condições em que a tolerância mútua se torna mais difícil de sustentar, porque cada lado passa a ver a vitória do outro não apenas como derrota política, mas como ameaça existencial ao próprio modo de vida. Nesse contexto, eleitores e partidos tornam-se mais dispostos a tolerar violações às normas democráticas por parte de líderes do 'próprio lado', desde que a alternativa pareça pior.",
      },
      {
        title: "O papel dos partidos como filtros",
        content:
          "Uma função historicamente importante, mas pouco reconhecida, dos partidos políticos tradicionais era filtrar candidatos com tendências autoritárias antes que chegassem a concorrer nas eleições gerais, através de processos internos de seleção controlados por lideranças partidárias experientes. A obra observa que a democratização excessiva desses processos de seleção interna, embora bem-intencionada, removeu esse filtro institucional, tornando mais fácil para outsiders com pouco compromisso com normas democráticas conquistarem candidaturas.",
      },
      {
        title: "Como as democracias se defendem",
        content:
          "A obra conclui que a defesa da democracia depende menos de mudanças constitucionais e mais da reconstrução ativa de normas de tolerância mútua e reserva institucional entre os próprios atores políticos — algo que exige lideranças dispostas a colocar a preservação das regras do jogo acima da vitória partidária de curto prazo. Também enfatiza o papel de cidadãos comuns: engajamento cívico sustentado, e não apenas indignação pontual em momentos de crise aguda, é apresentado como parte essencial da defesa institucional de longo prazo.",
      },
    ],
    quiz: [
      { q: "Qual é o padrão mais comum de morte de democracias modernas, segundo a obra?", options: ["Golpes militares abruptos e visíveis", "Erosão gradual das instituições por líderes eleitos, usando meios aparentemente legais", "Invasões estrangeiras", "Crises econômicas repentinas apenas"], correct: 1, explanation: "Cada erosão individual parece pequena demais para gerar resistência coletiva imediata." },
      { q: "Quais são os quatro sinais de alerta de comportamento autoritário propostos pela obra?", options: ["Popularidade, carisma, riqueza e experiência", "Rejeição das regras democráticas, negação da legitimidade de oponentes, tolerância à violência e restrição de liberdades civis", "Idade, gênero, partido e região", "Nenhum sinal é identificável antecipadamente"], correct: 1, explanation: "A presença simultânea de múltiplos sinais é motivo real de preocupação." },
      { q: "O que é 'tolerância mútua', como norma democrática não escrita?", options: ["Concordar sempre com o oponente político", "Aceitar oponentes políticos como legítimos, mesmo discordando profundamente", "Ignorar completamente a oposição", "Um conceito exclusivamente legal"], correct: 1, explanation: "Essa norma sustenta a aceitação da legitimidade do adversário político." },
      { q: "O que é 'reserva institucional'?", options: ["Guardar recursos financeiros do Estado", "Evitar usar todo o poder legal disponível até o limite máximo, mesmo quando permitido", "Um tipo de reserva militar", "Acumular poder o máximo possível legalmente"], correct: 1, explanation: "Essa norma preserva o espírito das regras, não apenas a letra formal delas." },
      { q: "Como a polarização extrema afeta a tolerância mútua, segundo a obra?", options: ["Não tem nenhuma relação com tolerância política", "Torna a tolerância mais difícil, pois a vitória do outro lado parece uma ameaça existencial", "Sempre fortalece a tolerância mútua", "Só afeta países pequenos"], correct: 1, explanation: "Quando sobreposta a divisões identitárias profundas, a polarização intensifica esse efeito." },
      { q: "Qual era uma função histórica importante dos partidos políticos tradicionais, segundo a obra?", options: ["Financiar exclusivamente campanhas eleitorais", "Filtrar candidatos com tendências autoritárias antes das eleições gerais", "Escolher sempre o candidato mais popular", "Impedir qualquer renovação de lideranças"], correct: 1, explanation: "Esse filtro interno, controlado por lideranças experientes, ajudava a barrar candidatos problemáticos." },
      { q: "O que a democratização excessiva dos processos internos dos partidos pode ter causado, segundo a obra?", options: ["Fortaleceu ainda mais o filtro contra candidatos autoritários", "Removeu esse filtro institucional, facilitando candidaturas de outsiders problemáticos", "Não teve nenhum efeito relevante", "Aumentou o controle das lideranças partidárias"], correct: 1, explanation: "Embora bem-intencionada, essa mudança teve consequências não previstas." },
      { q: "Segundo os autores, do que depende principalmente a defesa da democracia?", options: ["Apenas de mudanças constitucionais formais", "Da reconstrução ativa de normas de tolerância mútua e reserva institucional entre atores políticos", "Exclusivamente de intervenção militar", "De nenhuma ação prática específica"], correct: 1, explanation: "Isso exige lideranças dispostas a priorizar as regras do jogo acima da vitória de curto prazo." },
      { q: "Qual é o papel dos cidadãos comuns na defesa institucional, segundo a obra?", options: ["Nenhum papel relevante", "Engajamento cívico sustentado, não apenas indignação pontual em crises", "Apenas votar a cada eleição", "Delegar toda responsabilidade às instituições formais"], correct: 1, explanation: "O engajamento contínuo é apresentado como parte essencial da defesa de longo prazo." },
      { q: "Por que instituições formais podem continuar existindo no papel mesmo quando a democracia está enfraquecida?", options: ["Porque instituições nunca perdem função real", "Porque a erosão das normas não escritas reduz a capacidade real das instituições de restringir abusos", "Porque isso nunca acontece na prática", "Porque instituições formais são imunes a erosão"], correct: 1, explanation: "As leis continuam existindo, mas perdem eficácia real sem as normas que as sustentam na prática." },
    ],
  },

  {
    id: "radical-candor",
    title: "Radical Candor",
    author: "Baseado na obra de Kim Scott",
    category: "Cultura Corporativa & Comunicação",
    tags: ["feedback", "gestão de pessoas", "comunicação direta"],
    readTimeMin: 15,
    premium: true,
    coverIcon: "handshake",
    synopsis:
      "Um framework para dar feedback que é ao mesmo tempo genuinamente cuidadoso com a pessoa e diretamente honesto sobre o problema — evitando tanto a grosseria desnecessária quanto a complacência que não ajuda ninguém.",
    chapters: [
      {
        title: "Os dois eixos do feedback",
        content:
          "A obra organiza feedback em dois eixos: 'se importar pessoalmente' (demonstrar cuidado genuíno pelo bem-estar e desenvolvimento da pessoa) e 'desafiar diretamente' (ser honesto e específico sobre o que precisa melhorar). Candura radical é a combinação dos dois: cuidar o suficiente para dizer a verdade difícil, e ser direto o suficiente para que a mensagem seja realmente útil, não vaga a ponto de não gerar mudança real.",
      },
      {
        title: "Empatia ruinosa",
        content:
          "Quando existe cuidado genuíno mas falta coragem de desafiar diretamente, o resultado é 'empatia ruinosa' — feedback suavizado a ponto de perder utilidade, elogios vazios, ou silêncio completo sobre problemas reais por medo de magoar a pessoa. Paradoxalmente, essa forma aparentemente 'gentil' de evitar conversas difíceis costuma prejudicar mais a pessoa no longo prazo, porque ela não recebe a informação necessária para corrigir o curso a tempo, e o problema real permanece sem solução.",
      },
      {
        title: "Insinceridade manipuladora",
        content:
          "Quando falta tanto cuidado genuíno quanto disposição para ser direto, surge a 'insinceridade manipuladora' — elogios falsos, política de bastidores, feedback distorcido para agradar ou manipular impressões, sem compromisso real com a verdade ou com o bem-estar da pessoa. A obra identifica esse quadrante como o mais destrutivo para a confiança organizacional no longo prazo, mesmo quando aparenta ser socialmente mais agradável no curto prazo do que um confronto direto.",
      },
      {
        title: "Agressão desagradável",
        content:
          "Quando há disposição para ser direto, mas falta cuidado genuíno pela pessoa, o resultado é 'agressão desagradável' — feedback tecnicamente correto e honesto, mas entregue de forma que humilha, constrange ou desconsidera o impacto emocional na pessoa. Embora às vezes gere mudança rápida por medo, esse estilo corrói a confiança e a segurança psicológica necessárias para que a pessoa continue aberta a feedback no futuro, além de prejudicar a disposição da equipe de assumir riscos e admitir erros.",
      },
      {
        title: "Praticando candura radical",
        content:
          "Praticar candura radical exige habilidades específicas: pedir feedback sobre si mesmo primeiro, genuína e frequentemente, antes de dar feedback aos outros — isso constrói confiança e modela vulnerabilidade; elogiar de forma específica e pública quando apropriado; e criticar de forma específica e privada, focando no comportamento observável, não em julgamentos de caráter. A pergunta prática sugerida antes de dar qualquer feedback difícil é: 'isso está vindo de um lugar de cuidado genuíno pela pessoa, e estou sendo claro o suficiente para realmente ajudar?'",
      },
      {
        title: "Construindo uma cultura de candura",
        content:
          "Candura radical não é apenas uma técnica individual de conversa — é uma cultura que precisa ser modelada consistentemente por líderes ao longo do tempo, especialmente aceitando publicamente feedback crítico dos próprios subordinados sem retaliação. Quando líderes demonstram repetidamente que podem receber críticas diretas sem punir quem as oferece, isso sinaliza à equipe inteira que honestidade genuína é mais valorizada do que conformidade superficial — criando um ambiente onde problemas reais são identificados e corrigidos mais cedo, antes de se tornarem crises maiores.",
      },
    ],
    quiz: [
      { q: "Quais são os dois eixos do framework de feedback proposto pela obra?", options: ["Velocidade e formalidade", "Se importar pessoalmente e desafiar diretamente", "Escrito e verbal", "Público e privado"], correct: 1, explanation: "Candura radical é a combinação de cuidado genuíno com honestidade direta." },
      { q: "O que é 'empatia ruinosa'?", options: ["Feedback direto e cuidadoso ao mesmo tempo", "Cuidado genuíno sem coragem de desafiar diretamente, resultando em feedback vago", "Feedback agressivo sem cuidado", "Ausência total de qualquer emoção no feedback"], correct: 1, explanation: "Evitar dizer a verdade por medo de magoar acaba prejudicando a pessoa no longo prazo." },
      { q: "O que caracteriza a 'insinceridade manipuladora'?", options: ["Falta de cuidado e falta de disposição para ser direto, com elogios falsos", "Cuidado genuíno com honestidade total", "Feedback sempre entregue publicamente", "Um estilo raro e pouco destrutivo"], correct: 0, explanation: "Esse quadrante é identificado como o mais destrutivo para a confiança organizacional." },
      { q: "O que é 'agressão desagradável'?", options: ["Feedback vago e sem clareza", "Disposição para ser direto, mas sem cuidado genuíno pela pessoa", "Um estilo sempre eficaz e recomendado", "A ausência completa de feedback"], correct: 1, explanation: "Esse estilo corrói a confiança, mesmo quando o conteúdo do feedback está correto." },
      { q: "O que a obra recomenda fazer antes de dar feedback aos outros?", options: ["Evitar qualquer forma de autocrítica", "Pedir feedback sobre si mesmo primeiro, genuína e frequentemente", "Sempre criticar publicamente para dar o exemplo", "Aguardar que o problema se resolva sozinho"], correct: 1, explanation: "Isso constrói confiança e modela vulnerabilidade perante a equipe." },
      { q: "Onde a obra recomenda que críticas específicas sejam feitas?", options: ["Sempre publicamente, para reforçar o exemplo", "Em privado, focando no comportamento observável, não em julgamentos de caráter", "Apenas por escrito, nunca verbalmente", "Nunca devem ser feitas diretamente"], correct: 1, explanation: "Isso preserva a dignidade da pessoa enquanto comunica o problema com clareza." },
      { q: "Onde a obra recomenda que elogios específicos sejam feitos?", options: ["Sempre em privado apenas", "Publicamente, quando apropriado", "Nunca devem ser expressos", "Apenas por escrito formal"], correct: 1, explanation: "Elogio público específico reforça positivamente o comportamento observado." },
      { q: "Qual pergunta prática a obra sugere antes de dar feedback difícil?", options: ["Isso vai me fazer parecer bem?", "Isso está vindo de cuidado genuíno e estou sendo claro o suficiente para ajudar?", "Quanto tempo isso vai levar?", "Alguém mais concorda comigo?"], correct: 1, explanation: "Essa pergunta ajuda a calibrar tanto o cuidado quanto a clareza da mensagem." },
      { q: "Como líderes constroem uma cultura de candura, segundo a obra?", options: ["Punindo qualquer crítica recebida de subordinados", "Aceitando publicamente feedback crítico dos próprios subordinados sem retaliação", "Evitando completamente dar ou receber feedback", "Delegando toda comunicação difícil para RH"], correct: 1, explanation: "Isso sinaliza que honestidade genuína é mais valorizada que conformidade superficial." },
      { q: "Qual é o benefício de uma cultura de candura bem estabelecida, segundo a obra?", options: ["Problemas reais são identificados e corrigidos mais cedo", "Conflitos aumentam sem nenhum benefício", "A equipe para de se comunicar", "Aumenta a rotatividade de funcionários sem propósito"], correct: 0, explanation: "Identificar problemas cedo evita que se tornem crises maiores no futuro." },
    ],
  },

  {
    id: "pequeno-principe",
    title: "O Pequeno Príncipe",
    author: "Baseado na obra de Antoine de Saint-Exupéry",
    category: "Livros Infantis",
    tags: ["clássico", "filosofia infantil", "amizade"],
    readTimeMin: 12,
    premium: false,
    coverIcon: "star",
    synopsis:
      "A história de um piloto perdido no deserto que encontra um pequeno príncipe vindo de outro planeta — uma fábula sobre amizade, perda e o que realmente importa na vida, além do que os olhos conseguem ver.",
    chapters: [
      {
        title: "O desenho que os adultos não entendem",
        content:
          "A narrativa se abre com o narrador adulto lembrando de sua infância, quando desenhou uma jiboia que engoliu um elefante — mas todo adulto via apenas um chapéu. Essa cena estabelece o tema central da obra: adultos perderam a capacidade de ver além do óbvio e do prático, enquanto crianças (e o pequeno príncipe) ainda enxergam o que está escondido por trás das aparências. O narrador, anos depois, piloto de avião perdido no deserto do Saara, encontra o pequeno príncipe — o único que reconhece imediatamente sua jiboia com o elefante dentro.",
      },
      {
        title: "A rosa e o vínculo que exige cuidado",
        content:
          "O pequeno príncipe vem de um asteroide minúsculo, onde cultivava uma rosa única e especial — vaidosa, exigente, mas também, ele descobre depois de partir, genuinamente amada por ele. A relação com a rosa ilustra uma das ideias centrais da obra: aquilo que se torna verdadeiramente importante não é intrinsecamente especial por natureza, mas se torna especial através do tempo e cuidado investidos nele — 'foi o tempo que perdeste com tua rosa que a fez tão importante'.",
      },
      {
        title: "Os adultos estranhos de outros planetas",
        content:
          "Antes de chegar à Terra, o príncipe visita planetas habitados cada um por um único adulto obcecado com uma forma limitada de ver o mundo: um rei sem súditos reais que insiste em comandar mesmo o inevitável, um vaidoso que só quer ser admirado, um bêbado que bebe para esquecer a vergonha de beber, um homem de negócios que 'possui' as estrelas apenas contando-as em uma lista, e um acendedor de lampiões preso a uma rotina absurda. Cada encontro satiriza uma forma específica de os adultos perderem de vista o que realmente importa, presos em obsessões vazias.",
      },
      {
        title: "A raposa e o ritual de cativar",
        content:
          "Na Terra, o príncipe encontra uma raposa que lhe ensina o significado de 'cativar' — criar laços através de tempo dedicado e ritual repetido, até que aquele ser específico se torne único entre todos os outros semelhantes. A raposa explica que, uma vez cativada, ela reconhecerá o som dos passos do príncipe entre todos os outros, e que o trigo dourado dos campos passará a lembrá-la dele, pela cor de seu cabelo. É a raposa quem revela a frase mais citada da obra: 'só se vê bem com o coração; o essencial é invisível aos olhos'.",
      },
      {
        title: "O jardim de rosas e a descoberta da unicidade",
        content:
          "Ao encontrar um jardim inteiro cheio de rosas idênticas à sua, o príncipe inicialmente se entristece, achando que sua rosa não era tão especial ou única quanto pensava. Mas, guiado pelo ensinamento da raposa, ele entende que sua rosa continua única não por ser fisicamente diferente das outras, mas porque é a única que ele regou, protegeu do vento com uma redoma, e ouviu se queixar ou se gabar — o vínculo construído pelo cuidado é o que torna algo insubstituível, não a raridade objetiva.",
      },
      {
        title: "A despedida e o que fica invisível",
        content:
          "Perto do final, o príncipe se prepara para retornar ao seu planeta e à sua rosa, através de um ato que parece, à primeira vista, sua própria morte — permitindo que uma serpente o morda para que seu corpo, pesado demais para a jornada, seja deixado para trás. A obra termina com o narrador, de volta à civilização, olhando para as estrelas à noite e sabendo que, em alguma delas, o príncipe está rindo — transformando cada estrela, para ele, em algo capaz de fazer rir, um vínculo invisível que nenhum outro observador do céu consegue enxergar.",
      },
    ],
    quiz: [
      { q: "O que os adultos viam quando olhavam para o desenho da jiboia com o elefante dentro?", options: ["Uma jiboia claramente reconhecível", "Apenas um chapéu", "Um elefante isolado", "Nada, o desenho era abstrato demais"], correct: 1, explanation: "Essa cena estabelece o tema de adultos perderem a capacidade de ver além do óbvio." },
      { q: "O que a relação do príncipe com sua rosa ilustra na obra?", options: ["Que coisas são especiais por natureza, independente de cuidado", "Que algo se torna importante através do tempo e cuidado investidos nele", "Que rosas são sempre mais valiosas que outras plantas", "Que relações não exigem esforço contínuo"], correct: 1, explanation: "O tempo perdido com a rosa é o que a torna verdadeiramente importante para o príncipe." },
      { q: "O que os adultos que o príncipe visita em outros planetas têm em comum?", options: ["Todos são extremamente sábios", "Cada um está obcecado com uma forma limitada de ver o mundo", "Todos vivem em harmonia entre si", "Nenhum deles interage com o príncipe"], correct: 1, explanation: "Cada encontro satiriza uma forma específica de obsessão vazia dos adultos." },
      { q: "O que significa 'cativar', segundo a raposa?", options: ["Capturar um animal fisicamente", "Criar laços através de tempo dedicado e ritual repetido", "Uma técnica de caça", "Um tipo de feitiço mágico"], correct: 1, explanation: "Cativar torna um ser específico único entre todos os outros semelhantes." },
      { q: "Qual é a frase mais citada da obra, dita pela raposa?", options: ["O tempo cura todas as feridas", "Só se vê bem com o coração; o essencial é invisível aos olhos", "A vida é uma jornada, não um destino", "Tudo que é sólido desmancha no ar"], correct: 1, explanation: "Essa frase resume a mensagem central sobre enxergar além das aparências." },
      { q: "Por que o príncipe inicialmente se entristece ao ver o jardim de rosas idênticas à sua?", options: ["Porque as rosas eram feias", "Porque achou que sua rosa não era tão especial ou única quanto pensava", "Porque não gostava de jardins", "Porque queria mais rosas para si"], correct: 1, explanation: "Ele temporariamente duvida da unicidade de sua própria rosa." },
      { q: "O que finalmente torna a rosa do príncipe única, segundo o ensinamento da raposa?", options: ["Ser fisicamente diferente das outras rosas", "O vínculo construído pelo cuidado — regar, proteger, ouvir suas queixas", "Ser a rosa mais cara do jardim", "Ter uma cor exclusiva"], correct: 1, explanation: "O cuidado investido, não a raridade física, é o que torna algo insubstituível." },
      { q: "Como o príncipe planeja retornar ao seu planeta?", options: ["Pedindo ajuda ao piloto para construir uma nave", "Permitindo que uma serpente o morda, deixando seu corpo pesado para trás", "Caminhando pelo deserto até encontrar uma saída", "A obra não revela como ele retorna"], correct: 1, explanation: "Esse ato simboliza deixar para trás o peso físico para retornar à sua rosa." },
      { q: "O que o narrador sente ao olhar para as estrelas no final da obra?", options: ["Tristeza sem nenhum outro sentimento", "Que, em alguma estrela, o príncipe está rindo, tornando as estrelas especiais para ele", "Indiferença total", "Medo do desconhecido"], correct: 1, explanation: "Esse vínculo invisível transforma a forma como o narrador enxerga o céu." },
      { q: "Qual é o papel do narrador adulto na estrutura da história?", options: ["Ele é apenas um observador desconectado da mensagem central", "Ele representa a possibilidade de um adulto recuperar a capacidade de ver o essencial", "Ele nunca aprende nada com o príncipe", "Ele é hostil ao príncipe durante toda a narrativa"], correct: 1, explanation: "O encontro com o príncipe reconecta o narrador com uma forma de ver perdida na vida adulta." },
    ],
  },

  {
    id: "1984-orwell",
    title: "1984",
    author: "Baseado na obra de George Orwell",
    category: "Ficção",
    tags: ["distopia", "totalitarismo", "vigilância"],
    readTimeMin: 18,
    premium: true,
    coverIcon: "bookOpen",
    synopsis:
      "Um retrato distópico de um regime totalitário que controla não apenas ações, mas pensamentos e a própria realidade através de vigilância total, manipulação da linguagem e reescrita constante da história.",
    chapters: [
      {
        title: "O Grande Irmão e a vigilância total",
        content:
          "Na Oceania, o protagonista Winston Smith vive sob vigilância constante de telas que também transmitem — as 'teletelas' — que monitoram cada gesto e palavra dentro das casas dos cidadãos do Partido. A figura do 'Grande Irmão', líder nunca visto pessoalmente, personifica um poder onipresente e onisciente. Essa vigilância total não serve apenas para punir dissidência já manifestada, mas para tornar a própria ideia de privacidade de pensamento praticamente impensável — o medo de ser observado molda o comportamento antes mesmo que qualquer ato de rebeldia real ocorra.",
      },
      {
        title: "Novilíngua: controlar o pensamento através da linguagem",
        content:
          "O regime desenvolve a 'Novilíngua', uma versão reduzida e simplificada do idioma, projetada deliberadamente para eliminar palavras que expressam conceitos de liberdade, rebelião ou pensamento crítico — a lógica é que, se a palavra para um conceito não existe, torna-se progressivamente mais difícil até mesmo pensar aquele conceito claramente. Essa é uma das ideias centrais mais influentes da obra: controlar a linguagem disponível é uma forma poderosa e sutil de controlar os limites do próprio pensamento possível.",
      },
      {
        title: "Reescrevendo o passado",
        content:
          "Winston trabalha no Ministério da Verdade, cuja função real é alterar registros históricos, jornais antigos e documentos oficiais para que sempre estejam alinhados com a versão atual da narrativa do Partido — se o Partido muda de aliado em uma guerra, todos os registros históricos são silenciosamente reescritos para mostrar que aquele sempre foi o aliado, nunca o contrário. O slogan do Partido resume essa lógica: 'quem controla o passado controla o futuro; quem controla o presente controla o passado' — sem registro histórico confiável e independente, a própria realidade objetiva se torna maleável ao poder.",
      },
      {
        title: "Duplipensar",
        content:
          "O regime exige de seus cidadãos a capacidade de 'duplipensar': sustentar simultaneamente duas crenças contraditórias na mente e aceitar ambas como verdadeiras, sem sentir o conflito lógico entre elas — saber que um registro histórico foi alterado e, ao mesmo tempo, genuinamente acreditar na nova versão como se sempre tivesse sido verdadeira. Essa capacidade não é apresentada como hipocrisia consciente, mas como uma forma mais profunda e perturbadora de controle mental, onde a própria distinção entre verdade e mentira deixa de ter significado estável.",
      },
      {
        title: "Rebelião pessoal e seus limites",
        content:
          "Winston inicia um relacionamento secreto com Julia e um diário pessoal, atos que representam pequenas mas significativas afirmações de individualidade e memória privada num sistema desenhado para eliminar ambas. A obra explora como mesmo esses gestos pequenos de resistência pessoal — amar alguém escolhido livremente, lembrar o passado de forma independente da versão oficial — são tratados pelo regime como ameaças graves, precisamente porque preservam um núcleo de identidade e realidade fora do controle total do Partido.",
      },
      {
        title: "O Quarto 101 e a derrota final",
        content:
          "Capturado, Winston é levado ao Quarto 101, onde é confrontado com seu medo mais profundo e pessoal, especificamente escolhido para quebrar não apenas sua ação de resistência, mas sua última lealdade interna — o amor por Julia. A obra termina não com uma revolução heroica, mas com a derrota completa e genuína da resistência interna de Winston, que passa a amar verdadeiramente o Grande Irmão. Esse final deliberadamente sombrio é um dos aspectos mais discutidos da obra: um alerta sobre até onde um sistema de controle total pode, em tese, chegar quando não encontra resistência suficiente antes de se consolidar.",
      },
    ],
    quiz: [
      { q: "O que são as 'teletelas' na Oceania?", options: ["Dispositivos de entretenimento apenas", "Telas que monitoram e transmitem simultaneamente, vigiando os cidadãos", "Um sistema de correio", "Telefones públicos"], correct: 1, explanation: "Elas tornam a vigilância constante e onipresente na vida cotidiana." },
      { q: "Qual é o propósito da 'Novilíngua'?", options: ["Facilitar a comunicação internacional", "Eliminar palavras que expressam conceitos de liberdade e pensamento crítico", "Aumentar o vocabulário disponível", "Preservar a língua original sem alterações"], correct: 1, explanation: "A ideia é que sem a palavra, o próprio conceito se torna mais difícil de pensar." },
      { q: "Qual é a função real do Ministério da Verdade?", options: ["Preservar registros históricos fielmente", "Alterar registros históricos para alinhá-los com a narrativa atual do Partido", "Educar crianças sobre história", "Publicar jornais independentes"], correct: 1, explanation: "Documentos são reescritos silenciosamente sempre que a narrativa oficial muda." },
      { q: "O que significa 'duplipensar'?", options: ["Pensar duas vezes antes de agir", "Sustentar duas crenças contraditórias simultaneamente, aceitando ambas como verdadeiras", "Um tipo de terapia psicológica", "Traduzir pensamentos para Novilíngua"], correct: 1, explanation: "É apresentado como uma forma profunda de controle mental, não hipocrisia consciente." },
      { q: "O que o slogan 'quem controla o passado controla o futuro' expressa?", options: ["A importância de estudar história tradicionalmente", "Que sem registro histórico confiável, a realidade objetiva se torna maleável ao poder", "Uma crítica a historiadores acadêmicos", "Que o futuro é sempre previsível"], correct: 1, explanation: "Controlar a narrativa histórica é central para o poder do Partido." },
      { q: "Por que o relacionamento entre Winston e Julia é tratado como ameaça pelo regime?", options: ["Porque é proibido por questões religiosas", "Porque preserva um núcleo de identidade e escolha pessoal fora do controle do Partido", "Porque consome recursos do Estado", "Porque Julia é uma agente estrangeira"], correct: 1, explanation: "Amor escolhido livremente representa uma forma de resistência à eliminação da individualidade." },
      { q: "O que acontece no Quarto 101?", options: ["Uma celebração do Partido", "Winston é confrontado com seu medo mais profundo, para quebrar sua última lealdade interna", "Um julgamento público justo", "Winston consegue escapar do regime"], correct: 1, explanation: "É o momento decisivo de quebra da resistência interna do protagonista." },
      { q: "Como a obra termina em relação à resistência de Winston?", options: ["Com uma revolução heroica bem-sucedida", "Com a derrota completa de sua resistência interna, passando a amar o Grande Irmão", "Com Winston escapando para outro país", "Com a queda do regime totalitário"], correct: 1, explanation: "Esse final sombrio é um dos aspectos mais discutidos e impactantes da obra." },
      { q: "O que a vigilância constante busca alcançar, além de punir rebeldia já manifestada?", options: ["Apenas entreter os cidadãos", "Tornar a própria ideia de privacidade de pensamento praticamente impensável", "Melhorar a infraestrutura urbana", "Aumentar a produtividade econômica apenas"], correct: 1, explanation: "O medo de ser observado molda o comportamento antes mesmo de qualquer ato real de rebeldia." },
      { q: "Qual é uma das ideias centrais mais influentes da obra sobre linguagem?", options: ["A linguagem não tem relação com o pensamento", "Controlar a linguagem disponível é uma forma poderosa de controlar os limites do pensamento possível", "Todas as línguas deveriam ser simplificadas por eficiência", "A linguagem é irrelevante para sistemas políticos"], correct: 1, explanation: "Essa ideia, exemplificada pela Novilíngua, é uma das contribuições mais discutidas da obra." },
    ],
  },

  {
    id: "legacy-all-blacks",
    title: "Legacy: O Que os All Blacks Podem Ensinar sobre Liderança",
    author: "Baseado na obra de James Kerr",
    category: "Esportes",
    tags: ["liderança", "cultura de equipe", "excelência sustentada"],
    readTimeMin: 14,
    premium: true,
    coverIcon: "trophy",
    synopsis:
      "Os princípios de cultura e liderança por trás da equipe de rugby mais vitoriosa da história do esporte — e como eles se aplicam a qualquer organização que busca excelência sustentada, não apenas resultados pontuais.",
    chapters: [
      {
        title: "Varra a arquibancada",
        content:
          "Um dos princípios mais citados da cultura do time é que, mesmo sendo os melhores jogadores de rugby do mundo, os próprios atletas seniores são responsáveis por varrer e limpar os vestiários depois dos jogos e treinos — ninguém é grande demais para as tarefas humildes. Esse costume simboliza um princípio maior: humildade genuína e responsabilidade pessoal por deixar o lugar (e a cultura) melhor do que se encontrou, independente do status ou das conquistas já alcançadas.",
      },
      {
        title: "Melhor pessoa, melhor All Black",
        content:
          "A filosofia de seleção e desenvolvimento do time parte da premissa de que caráter pessoal robusto precede e sustenta desempenho esportivo de elite — não o contrário. Investir no desenvolvimento de qualidades pessoais como humildade, responsabilidade e integridade é tratado como fundação necessária para desempenho de alta performance sustentado, não como algo secundário ou opcional em relação às habilidades técnicas específicas do esporte.",
      },
      {
        title: "Propósito além de si mesmo",
        content:
          "Jogadores são ensinados a entender que vestem a camisa não apenas para si mesmos, mas em nome de todos que vestiram aquela camisa antes deles e de todos que a vestirão depois — uma responsabilidade que transcende a carreira individual de qualquer jogador específico. Esse senso de propósito e legado compartilhado, maior do que qualquer ego individual, é apresentado como fonte de motivação mais duradoura do que recompensas puramente pessoais como fama ou dinheiro.",
      },
      {
        title: "Práticas deliberadas sob pressão",
        content:
          "A obra descreve como a equipe pratica deliberadamente sob condições de pressão simulada e caos controlado, para que a tomada de decisão sob estresse real durante uma partida se torne mais natural e menos propensa a erros de pânico. Rituais e preparação mental consistentes (incluindo o icônico haka antes das partidas) servem tanto para consolidar identidade coletiva quanto para criar um estado mental de foco elevado imediatamente antes de momentos de alta pressão.",
      },
      {
        title: "Adaptabilidade e aprendizado contínuo",
        content:
          "Apesar do sucesso histórico, a cultura do time evita a complacência através de revisão constante e brutalmente honesta de desempenho — inclusive depois de vitórias, não apenas derrotas — buscando ativamente onde a execução poderia ter sido melhor. Essa disposição de questionar até o próprio sucesso, em vez de simplesmente repetir fórmulas que funcionaram no passado, é apresentada como central para manter excelência ao longo de gerações de jogadores diferentes, evitando a estagnação que afeta times que já venceram muito.",
      },
      {
        title: "Deixando um legado, não apenas um resultado",
        content:
          "O título da obra reflete sua tese central: a verdadeira medida de uma liderança ou cultura organizacional de excelência não é apenas vencer no presente, mas deixar a organização genuinamente mais forte para a próxima geração de líderes e membros. Isso exige um tipo específico de humildade de longo prazo — investir tempo e energia em desenvolver sucessores capazes, mesmo sabendo que os créditos por resultados futuros não pertencerão a quem investiu nesse desenvolvimento anos antes.",
      },
    ],
    quiz: [
      { q: "O que o princípio 'varra a arquibancada' simboliza?", options: ["Uma regra de higiene obrigatória apenas", "Humildade genuína e responsabilidade pessoal, independente do status", "Uma punição para jogadores que perdem partidas", "Uma tradição sem significado real"], correct: 1, explanation: "Mesmo os melhores atletas do mundo realizam tarefas humildes como parte da cultura do time." },
      { q: "Qual é a premissa central da filosofia 'melhor pessoa, melhor All Black'?", options: ["Habilidade técnica é o único fator que importa", "Caráter pessoal robusto precede e sustenta desempenho esportivo de elite", "Desempenho esportivo não tem relação com caráter", "Apenas talento natural determina o sucesso"], correct: 1, explanation: "Qualidades pessoais são tratadas como fundação necessária para performance sustentada." },
      { q: "O que significa 'propósito além de si mesmo' para os jogadores?", options: ["Jogar apenas para benefício pessoal", "Vestir a camisa em nome de todos que a vestiram antes e depois deles", "Ignorar completamente o histórico do time", "Focar exclusivamente em recordes individuais"], correct: 1, explanation: "Esse senso de legado compartilhado é uma fonte de motivação mais duradoura." },
      { q: "Por que a equipe pratica deliberadamente sob pressão simulada?", options: ["Para aumentar o tempo total de treino sem propósito", "Para que a tomada de decisão sob estresse real se torne mais natural", "Porque é uma exigência da federação esportiva", "Para reduzir o número de jogadores na equipe"], correct: 1, explanation: "Isso reduz erros de pânico durante momentos de pressão real em partidas." },
      { q: "Como a cultura do time evita a complacência apesar do sucesso histórico?", options: ["Ignorando qualquer análise após vitórias", "Através de revisão constante e honesta do desempenho, mesmo após vitórias", "Reduzindo a intensidade dos treinos com o tempo", "Mudando de esporte periodicamente"], correct: 1, explanation: "Questionar o próprio sucesso ajuda a manter excelência ao longo de gerações." },
      { q: "Qual é a tese central refletida no título 'Legacy'?", options: ["Vencer no presente é a única medida de sucesso", "A verdadeira liderança deixa a organização mais forte para a próxima geração", "Legado não tem relação com liderança esportiva", "Resultados individuais importam mais que o time"], correct: 1, explanation: "O foco está em fortalecer a organização além do próprio tempo de atuação do líder." },
      { q: "O que a obra sugere sobre investir no desenvolvimento de sucessores?", options: ["É uma perda de tempo para líderes atuais", "Exige humildade de longo prazo, mesmo sem receber crédito por resultados futuros", "Deve ser evitado para proteger a posição do líder atual", "Não tem relação com cultura organizacional"], correct: 1, explanation: "Essa é uma forma específica de humildade de longo prazo destacada na obra." },
      { q: "O que caracteriza os rituais e preparação mental do time, como o haka?", options: ["São apenas tradições sem função prática", "Consolidam identidade coletiva e criam foco elevado antes de momentos de pressão", "Servem apenas para intimidar adversários", "Não têm relação com desempenho esportivo"], correct: 1, explanation: "Esses rituais cumprem uma função psicológica além do aspecto simbólico." },
      { q: "Segundo a obra, como caráter pessoal se relaciona com desempenho de elite?", options: ["Não tem relação alguma", "É tratado como fundação necessária, não como algo secundário", "É menos importante que talento físico", "Só importa para jogadores iniciantes"], correct: 1, explanation: "A cultura do time prioriza desenvolvimento de caráter como base para performance sustentada." },
      { q: "Por que times de sucesso frequentemente estagnam, segundo a lógica da obra?", options: ["Porque jogadores ficam velhos demais", "Porque param de questionar e simplesmente repetem fórmulas do passado", "Porque perdem acesso a recursos financeiros", "Porque mudam de técnico com frequência"], correct: 1, explanation: "A disposição de questionar até o sucesso evita essa estagnação comum." },
    ],
  },
];

// Reflexões diárias — o índice é calculado a partir do dia do ano (rotaciona automaticamente por data)
window.REFLECTIONS = [
  "Riqueza não é sobre quanto você ganha, é sobre quanto você guarda e faz trabalhar por você.",
  "Toda habilidade que parece complexa hoje já foi, um dia, difícil demais para alguém mediano — a diferença é a repetição.",
  "Quem espera motivação para agir todos os dias constrói pouco. Quem constrói sistemas, age mesmo nos dias ruins.",
  "O maior risco financeiro não é investir errado uma vez — é nunca começar a investir.",
  "Sua rede de contatos é um ativo que aparece no balanço quando você menos espera.",
  "Disciplina é escolher entre o que você quer agora e o que você quer mais.",
  "Ninguém fica rico apenas trabalhando duro — fica rico quem trabalha duro E faz o dinheiro trabalhar junto.",
  "O fracasso de ontem só vira sabedoria se você extrair dele uma decisão diferente para hoje.",
  "Cada 'não' que você ouve te aproxima de entender exatamente quem precisa ouvir o seu 'sim'.",
  "Empresas não quebram por falta de ideias — quebram por falta de caixa e de disciplina de execução.",
  "A leitura de 15 minutos por dia parece pouco, mas em um ano são mais de 90 horas de conhecimento acumulado.",
  "Negociação não é vencer o outro lado — é encontrar o ponto onde os dois saem satisfeitos o suficiente para fechar negócio.",
  "Você não precisa de motivação, precisa de um próximo passo pequeno o bastante para não ter desculpa.",
  "O tempo que você não investe em aprender hoje, você paga em juros de ignorância amanhã.",
  "Grandes marcas não nasceram grandes — nasceram consistentes por tempo suficiente para parecerem inevitáveis.",
];

window.BUSINESS_IDEAS = [
  {
    title: "Consultoria de organização financeira para pequenos negócios",
    concept:
      "Muitos pequenos empresários misturam finanças pessoais e da empresa e não sabem o próprio ponto de equilíbrio. Um serviço simples de organização de planilhas e fluxo de caixa resolve uma dor real e recorrente.",
    investment: "A partir de R$ 300 (planilhas, ferramenta de agendamento e material de apresentação)",
    firstStep: "Ofereça um diagnóstico financeiro gratuito para 3 negócios da sua rede em troca de depoimento e indicação.",
    example: "Autônomos de contabilidade estruturam pacotes mensais de 'saúde financeira' vendidos como assinatura para pequenos comércios locais.",
  },
  {
    title: "Microcursos gravados sobre uma habilidade que você já domina",
    concept:
      "Conhecimento que parece óbvio para você pode ser exatamente o que outra pessoa está procurando pagar para aprender rápido, sem enrolação.",
    investment: "A partir de R$ 0 (celular e plataforma gratuita de hospedagem de vídeo)",
    firstStep: "Grave um vídeo de 10 minutos ensinando o primeiro passo de uma habilidade sua e publique com um link de contato.",
    example: "Profissionais de planilhas avançadas vendem minicursos gravados de 2 horas por preços entre R$ 47 e R$ 197.",
  },
  {
    title: "Revenda com curadoria em nicho específico",
    concept:
      "Em vez de vender de tudo, escolher um nicho estreito e ficar conhecido como referência nele reduz concorrência direta e aumenta a percepção de valor.",
    investment: "A partir de R$ 500 (primeiro lote pequeno de produtos)",
    firstStep: "Escolha um nicho onde você já tem interesse genuíno e valide a demanda vendendo para 5 pessoas antes de comprar estoque maior.",
    example: "Pequenos brechós especializados em uma única categoria (ex: roupas de treino) crescem mais rápido que brechós genéricos.",
  },
  {
    title: "Serviço de gestão de redes sociais para comércios locais",
    concept:
      "Muitos donos de pequenos negócios sabem que precisam estar online, mas não têm tempo nem repertório para produzir conteúdo com constância.",
    investment: "A partir de R$ 0 (celular e edição em aplicativos gratuitos)",
    firstStep: "Ofereça um mês de gestão gratuita para um negócio local em troca de um estudo de caso com resultados reais.",
    example: "Freelancers cobram entre R$ 400 e R$ 1.500 por mês gerenciando Instagram de padarias, salões e clínicas pequenas.",
  },
  {
    title: "Assinatura de manutenção preventiva",
    concept:
      "Transformar um serviço que normalmente é vendido pontualmente (limpeza, manutenção, revisão) em uma assinatura recorrente aumenta previsibilidade de receita.",
    investment: "Depende do serviço, geralmente a partir de R$ 200 em ferramentas básicas",
    firstStep: "Ofereça o primeiro atendimento com desconto condicionado à adesão a um plano trimestral.",
    example: "Técnicos de ar-condicionado oferecem planos anuais de manutenção preventiva em vez de cobrar só quando o equipamento quebra.",
  },
  {
    title: "Produto digital a partir de uma dúvida repetida",
    concept:
      "Se três pessoas diferentes já te perguntaram a mesma coisa, existe mercado — provavelmente centenas de outras pessoas têm a mesma dúvida e pagariam por uma resposta estruturada.",
    investment: "A partir de R$ 0 (documento ou PDF bem estruturado)",
    firstStep: "Liste as 5 perguntas mais repetidas que você recebe na sua área e transforme a mais comum em um guia pago.",
    example: "Nutricionistas vendem guias de cardápio semanal como PDF por R$ 29,90 respondendo à dúvida mais recorrente dos pacientes.",
  },
  {
    title: "Marketplace de nicho entre produtores locais e consumidores",
    concept:
      "Conectar pequenos produtores (alimentos, artesanato) diretamente a consumidores finais, cobrando uma pequena comissão por transação ou uma taxa de listagem.",
    investment: "A partir de R$ 1.000 (site simples ou grupo estruturado + divulgação inicial)",
    firstStep: "Valide com 5 produtores e 20 consumidores em uma comunidade fechada antes de construir qualquer plataforma própria.",
    example: "Feiras orgânicas locais migraram parte das vendas para grupos de WhatsApp com pedidos e retirada agendada.",
  },
  {
    title: "Programa de indicação estruturado para negócio existente",
    concept:
      "A maioria dos negócios recebe indicações de forma passiva. Estruturar um programa formal com recompensa clara multiplica esse canal sem custo de aquisição alto.",
    investment: "A partir de R$ 100 (recompensas iniciais para os primeiros indicadores)",
    firstStep: "Defina uma recompensa simples e comunique para os 10 clientes mais satisfeitos que você já tem hoje.",
    example: "Clínicas odontológicas que oferecem desconto na próxima consulta para cada indicação convertida aumentam a base sem investir em anúncios.",
  },
];

window.ACHIEVEMENTS = [
  { id: "primeira-pagina", title: "Primeira Página", description: "Concluiu o primeiro resumo completo.", icon: "book-open", check: (s) => s.completedBooks.length >= 1 },
  { id: "mente-afiada", title: "Mente Afiada", description: "Acertou 80%+ em 5 quizzes.", icon: "target", check: (s) => s.quizzesAbove80 >= 5 },
  { id: "chama-acesa", title: "Chama Acesa", description: "Manteve uma sequência de 7 dias.", icon: "flame", check: (s) => s.streak >= 7 },
  { id: "ouvinte-dedicado", title: "Ouvinte Dedicado", description: "Ouviu 10 resumos em áudio.", icon: "headphones", check: (s) => s.audiobooksListened >= 10 },
  { id: "maratonista", title: "Maratonista 3X", description: "Concluiu 3 resumos em um único dia.", icon: "zap", check: (s) => s.maxBooksInOneDay >= 3 },
  { id: "sabio-3x", title: "Sábio 3X", description: "Concluiu todos os resumos disponíveis na biblioteca.", icon: "crown", check: (s, totalBooks) => s.completedBooks.length >= totalBooks },
];

window.LEVELS = [
  { name: "Bronze", min: 0, max: 199, color: "#B08D57" },
  { name: "Prata", min: 200, max: 499, color: "#C0C4C8" },
  { name: "Ouro", min: 500, max: 999, color: "#D4A843" },
  { name: "Platina", min: 1000, max: 1999, color: "#E8DFC8" },
  { name: "Legado 3X", min: 2000, max: Infinity, color: "#F0D080" },
];

/*
  CATÁLOGO — títulos reais aguardando resumo completo ("Em breve" no app).
  Cada entrada é só [Título, Autor, Categoria] — sem sinopse/capítulos/quiz
  fabricados. Isso evita inventar conteúdo sobre livros que ainda não foram
  de fato resumidos; a lista abaixo só declara que o título existe e a que
  categoria pertence. window.BOOKS = 6 resumos completos + este catálogo.
*/
window.CATALOG_STUBS = [
  // Carreira & Negócios
  ["Empresas Feitas para Vencer", "Jim Collins", "Carreira & Negócios"],
  ["Empresas Feitas para Durar", "Jim Collins e Jerry Porras", "Carreira & Negócios"],
  ["Zero to One", "Peter Thiel", "Carreira & Negócios"],
  ["O Gerente-Minuto", "Kenneth Blanchard e Spencer Johnson", "Carreira & Negócios"],
  ["Execução: A Disciplina para Atingir Resultados", "Larry Bossidy e Ram Charan", "Carreira & Negócios"],
  ["A Arte da Guerra", "Sun Tzu", "Carreira & Negócios"],
  ["A Empresa Exponencial", "Salim Ismail", "Carreira & Negócios"],
  ["Playing to Win", "A.G. Lafley e Roger Martin", "Carreira & Negócios"],
  ["O Executivo Eficaz", "Peter Drucker", "Carreira & Negócios"],
  ["A Meta", "Eliyahu Goldratt", "Carreira & Negócios"],
  ["Feitas para Servir", "James C. Hunter", "Carreira & Negócios"],
  ["Trabalho Focado", "Cal Newport", "Carreira & Negócios"],
  ["A Cauda Longa", "Chris Anderson", "Carreira & Negócios"],
  ["Como as Gigantes Caem", "Jim Collins", "Carreira & Negócios"],
  ["O Ponto de Desequilíbrio", "Malcolm Gladwell", "Carreira & Negócios"],
  ["Outliers: Fora de Série", "Malcolm Gladwell", "Carreira & Negócios"],
  ["David e Golias", "Malcolm Gladwell", "Carreira & Negócios"],
  ["A Arte de Fazer Acontecer", "David Allen", "Carreira & Negócios"],
  ["Rework: O Trabalho Não Precisa Ser Insano", "Jason Fried e David Heinemeier Hansson", "Carreira & Negócios"],
  ["Isso Não É Normal", "Reed Hastings e Erin Meyer", "Carreira & Negócios"],
  ["Sonho Grande", "Cristiane Correa", "Carreira & Negócios"],
  ["Shoe Dog: A Autobiografia do Criador da Nike", "Phil Knight", "Carreira & Negócios"],
  ["Empreenda: Como Organizações Extraordinárias Produzem Resultados", "Jim Collins", "Carreira & Negócios"],
  ["Um Método para o Sucesso", "Michael E. Gerber", "Carreira & Negócios"],
  ["O Mito do Empreendedor", "Michael E. Gerber", "Carreira & Negócios"],
  ["Liderança em Ação", "Ken Blanchard", "Carreira & Negócios"],
  ["De Zero a Um Milhão", "Ryan Daniel Moran", "Carreira & Negócios"],

  // Investimentos & Finanças
  ["O Investidor Inteligente", "Benjamin Graham", "Investimentos & Finanças"],
  ["Ações Comuns, Lucros Extraordinários", "Philip Fisher", "Investimentos & Finanças"],
  ["Os Segredos da Mente Milionária", "T. Harv Eker", "Investimentos & Finanças"],
  ["Pai Rico Investidor", "Robert Kiyosaki", "Investimentos & Finanças"],
  ["Independência Financeira", "Grant Sabatier", "Investimentos & Finanças"],
  ["O Homem Mais Rico do Mundo", "William Green", "Investimentos & Finanças"],
  ["Um Passeio Aleatório por Wall Street", "Burton Malkiel", "Investimentos & Finanças"],
  ["Como um Economista Vê o Mundo", "Steven Levitt e Stephen Dubner", "Investimentos & Finanças"],
  ["O Cisne Negro", "Nassim Nicholas Taleb", "Investimentos & Finanças"],
  ["Antifrágil", "Nassim Nicholas Taleb", "Investimentos & Finanças"],
  ["Enganado Pelo Acaso", "Nassim Nicholas Taleb", "Investimentos & Finanças"],
  ["Money: Domine o Jogo", "Tony Robbins", "Investimentos & Finanças"],
  ["Pense e Enriqueça", "Napoleon Hill", "Investimentos & Finanças"],
  ["A Psicologia Financeira", "Morgan Housel", "Investimentos & Finanças"],
  ["O Jeito Warren Buffett de Investir", "Robert Hagstrom", "Investimentos & Finanças"],
  ["Segurança Financeira e Liberdade", "Vicki Robin e Joe Dominguez", "Investimentos & Finanças"],
  ["Do Mil ao Milhão", "Thiago Nigro", "Investimentos & Finanças"],
  ["O Investidor de Valor", "Luiz Barsi Filho", "Investimentos & Finanças"],
  ["Manual do Pequeno Investidor", "William Eid Junior", "Investimentos & Finanças"],
  ["Análise de Investimentos", "Alexandre Assaf Neto", "Investimentos & Finanças"],
  ["Como Investir em Ações", "Décio Bazin", "Investimentos & Finanças"],
  ["A Bolsa de Valores para Iniciantes", "William O'Neil", "Investimentos & Finanças"],
  ["O Método Bazin", "Décio Bazin", "Investimentos & Finanças"],

  // Economia
  ["Superfreakonomics", "Steven Levitt e Stephen Dubner", "Economia"],
  ["Economia em Uma Única Lição", "Henry Hazlitt", "Economia"],
  ["Por Que as Nações Fracassam", "Daron Acemoglu e James Robinson", "Economia"],
  ["O Capital no Século XXI", "Thomas Piketty", "Economia"],
  ["A Riqueza das Nações", "Adam Smith", "Economia"],
  ["A Lógica do Cisne Negro", "Nassim Nicholas Taleb", "Economia"],
  ["Economia Comportamental", "Richard Thaler", "Economia"],
  ["Nudge: O Empurrão para a Escolha Certa", "Richard Thaler e Cass Sunstein", "Economia"],
  ["A Miséria da Economia", "Ha-Joon Chang", "Economia"],
  ["23 Coisas que Não Nos Contaram sobre o Capitalismo", "Ha-Joon Chang", "Economia"],
  ["Capitalismo, Socialismo e Democracia", "Joseph Schumpeter", "Economia"],
  ["A Grande Divergência", "Kenneth Pomeranz", "Economia"],
  ["O Mundo é Plano", "Thomas Friedman", "Economia"],
  ["A Economia das Desigualdades", "Thomas Piketty", "Economia"],
  ["Armas, Germes e Aço", "Jared Diamond", "Economia"],
  ["Colapso", "Jared Diamond", "Economia"],
  ["Globalização: A Grande Desilusão", "Joseph Stiglitz", "Economia"],
  ["O Preço da Desigualdade", "Joseph Stiglitz", "Economia"],
  ["Economia de Graça", "Chris Anderson", "Economia"],

  // Startups & Empreendedorismo
  ["O Manual do Empreendedor", "Steve Blank", "Startups & Empreendedorismo"],
  ["A Bíblia da Geração de Modelos de Negócios", "Alexander Osterwalder e Yves Pigneur", "Startups & Empreendedorismo"],
  ["Testando Ideias de Negócio", "Alexander Osterwalder", "Startups & Empreendedorismo"],
  ["Hooked: Como Construir Produtos Formadores de Hábito", "Nir Eyal", "Startups & Empreendedorismo"],
  ["Sprint: O Método Usado no Google", "Jake Knapp", "Startups & Empreendedorismo"],
  ["Crossing the Chasm", "Geoffrey Moore", "Startups & Empreendedorismo"],
  ["Blitzscaling", "Reid Hoffman e Chris Yeh", "Startups & Empreendedorismo"],
  ["A Bíblia de Vendas para Startups", "Aaron Ross", "Startups & Empreendedorismo"],
  ["Receita Previsível", "Aaron Ross e Marylou Tyler", "Startups & Empreendedorismo"],
  ["Traction: Como Qualquer Startup Pode Conquistar Tração", "Gabriel Weinberg e Justin Mares", "Startups & Empreendedorismo"],
  ["O Jeito Startup de Ser", "Eric Ries", "Startups & Empreendedorismo"],
  ["Founders at Work", "Jessica Livingston", "Startups & Empreendedorismo"],
  ["A Menor Startup do Mundo", "Sahil Lavingia", "Startups & Empreendedorismo"],
  ["Venture Deals", "Brad Feld e Jason Mendelson", "Startups & Empreendedorismo"],
  ["O Empreendedor Enxuto", "Ash Maurya", "Startups & Empreendedorismo"],
  ["Do Zero ao Um Bilhão", "Elad Gil", "Startups & Empreendedorismo"],
  ["Startups Brasileiras", "Amure Pinho", "Startups & Empreendedorismo"],
  ["A Startup Enxuta na Prática", "Ash Maurya", "Startups & Empreendedorismo"],

  // Cultura Corporativa & Comunicação
  ["A Cultura Fala Mais Alto", "Ben Horowitz", "Cultura Corporativa & Comunicação"],
  ["O Lado Difícil das Situações Difíceis", "Ben Horowitz", "Cultura Corporativa & Comunicação"],
  ["Feedback Radical", "Kim Scott", "Cultura Corporativa & Comunicação"],
  ["Comunicação Não-Violenta", "Marshall Rosenberg", "Cultura Corporativa & Comunicação"],
  ["Conversas Difíceis", "Douglas Stone, Bruce Patton e Sheila Heen", "Cultura Corporativa & Comunicação"],
  ["Crucial Conversations", "Kerry Patterson", "Cultura Corporativa & Comunicação"],
  ["A Arte de Se Comunicar", "Thich Nhat Hanh", "Cultura Corporativa & Comunicação"],
  ["Culture Code: O Segredo das Melhores Equipes", "Daniel Coyle", "Cultura Corporativa & Comunicação"],
  ["Equipes Extraordinárias", "Patrick Lencioni", "Cultura Corporativa & Comunicação"],
  ["Os 5 Desafios das Equipes", "Patrick Lencioni", "Cultura Corporativa & Comunicação"],
  ["A Empresa Sem Medo", "Amy Edmondson", "Cultura Corporativa & Comunicação"],
  ["Talk Like TED", "Carmine Gallo", "Cultura Corporativa & Comunicação"],
  ["Storytelling Corporativo", "Cláudio Torres", "Cultura Corporativa & Comunicação"],
  ["A Arte de Apresentar", "Carmine Gallo", "Cultura Corporativa & Comunicação"],

  // Gestão & Liderança
  ["O Monge e o Executivo", "James C. Hunter", "Gestão & Liderança"],
  ["Liderança: Teoria e Prática", "Peter Northouse", "Gestão & Liderança"],
  ["Os 21 Princípios Irrefutáveis da Liderança", "John C. Maxwell", "Gestão & Liderança"],
  ["Desenvolvendo os Líderes ao Redor de Você", "John C. Maxwell", "Gestão & Liderança"],
  ["A Quinta Disciplina", "Peter Senge", "Gestão & Liderança"],
  ["Liderança de Nível 5", "Jim Collins", "Gestão & Liderança"],
  ["O Poder do Propósito", "Richard Leider", "Gestão & Liderança"],
  ["Gestão de Pessoas Não é Bicho de Sete Cabeças", "Idalberto Chiavenato", "Gestão & Liderança"],
  ["Como Liderar Pessoas", "John C. Maxwell", "Gestão & Liderança"],
  ["A Coragem de Liderar", "Brené Brown", "Gestão & Liderança"],
  ["Multiplicadores", "Liz Wiseman", "Gestão & Liderança"],
  ["High Output Management", "Andrew Grove", "Gestão & Liderança"],
  ["Trabalho em Equipe Funciona", "Patrick Lencioni", "Gestão & Liderança"],
  ["Liderança a Serviço", "Robert Greenleaf", "Gestão & Liderança"],
  ["O Líder do Futuro", "Frances Hesselbein", "Gestão & Liderança"],
  ["Gestão Estratégica de Pessoas", "Idalberto Chiavenato", "Gestão & Liderança"],
  ["Liderar Sem Medo", "Amy Edmondson", "Gestão & Liderança"],

  // Marketing & Vendas
  ["Marketing 4.0", "Philip Kotler", "Marketing & Vendas"],
  ["Marketing 5.0", "Philip Kotler", "Marketing & Vendas"],
  ["Administração de Marketing", "Philip Kotler e Kevin Keller", "Marketing & Vendas"],
  ["A Bíblia de Vendas", "Jeffrey Gitomer", "Marketing & Vendas"],
  ["Receita Previsível", "Aaron Ross e Marylou Tyler", "Marketing & Vendas"],
  ["Spin Selling", "Neil Rackham", "Marketing & Vendas"],
  ["A Venda Desafiadora", "Matthew Dixon e Brent Adamson", "Marketing & Vendas"],
  ["Pré-Suasão", "Robert Cialdini", "Marketing & Vendas"],
  ["Contágio: Por Que as Coisas Pegam", "Jonah Berger", "Marketing & Vendas"],
  ["Marketing de Permissão", "Seth Godin", "Marketing & Vendas"],
  ["A Vaca Roxa", "Seth Godin", "Marketing & Vendas"],
  ["Isso é Marketing", "Seth Godin", "Marketing & Vendas"],
  ["Posicionamento: A Batalha por Sua Mente", "Al Ries e Jack Trout", "Marketing & Vendas"],
  ["As 22 Consagradas Leis do Marketing", "Al Ries e Jack Trout", "Marketing & Vendas"],
  ["Growth Hacker Marketing", "Ryan Holiday", "Marketing & Vendas"],
  ["A Máquina de Vendas Definitiva", "Chet Holmes", "Marketing & Vendas"],
  ["Fanático por Vendas", "Jeb Blount", "Marketing & Vendas"],
  ["Os Segredos do Ninja das Vendas", "Larry Levine", "Marketing & Vendas"],
  ["Vendas 3.0", "Raúl Candeloro", "Marketing & Vendas"],

  // Produtividade & Gestão do Tempo
  ["A Arte de Fazer Acontecer", "David Allen", "Produtividade & Gestão do Tempo"],
  ["Trabalho Focado", "Cal Newport", "Produtividade & Gestão do Tempo"],
  ["Trabalho Superficial", "Cal Newport", "Produtividade & Gestão do Tempo"],
  ["A Semana de 4 Horas", "Timothy Ferriss", "Produtividade & Gestão do Tempo"],
  ["Coma o Sapo!", "Brian Tracy", "Produtividade & Gestão do Tempo"],
  ["Foco: A Atenção e Seu Papel Fundamental para o Sucesso", "Daniel Goleman", "Produtividade & Gestão do Tempo"],
  ["Deep Work: Foco Total", "Cal Newport", "Produtividade & Gestão do Tempo"],
  ["16 Elementos para Uma Vida Equilibrada", "Christian Barbosa", "Produtividade & Gestão do Tempo"],
  ["A Tríade do Tempo", "Christian Barbosa", "Produtividade & Gestão do Tempo"],
  ["Faça Menos", "Kate Northrup", "Produtividade & Gestão do Tempo"],
  ["Manhãs Milagrosas", "Hal Elrod", "Produtividade & Gestão do Tempo"],
  ["Getting Things Done na Prática", "David Allen", "Produtividade & Gestão do Tempo"],
  ["O Poder do Foco", "Jack Canfield", "Produtividade & Gestão do Tempo"],
  ["A Arte de Priorizar", "Gary Keller", "Produtividade & Gestão do Tempo"],
  ["A Única Coisa", "Gary Keller e Jay Papasan", "Produtividade & Gestão do Tempo"],

  // Inteligência Emocional
  ["Trabalhando com a Inteligência Emocional", "Daniel Goleman", "Inteligência Emocional"],
  ["Liderança: O Poder da Inteligência Emocional", "Daniel Goleman", "Inteligência Emocional"],
  ["Inteligência Emocional 2.0", "Travis Bradberry e Jean Greaves", "Inteligência Emocional"],
  ["Autocontrole Emocional", "Daniel Goleman", "Inteligência Emocional"],
  ["A Coragem de Ser Imperfeito", "Brené Brown", "Inteligência Emocional"],
  ["A Dádiva da Imperfeição", "Brené Brown", "Inteligência Emocional"],
  ["Ousar Mais", "Brené Brown", "Inteligência Emocional"],
  ["Atlas do Coração", "Brené Brown", "Inteligência Emocional"],
  ["O Poder da Vulnerabilidade", "Brené Brown", "Inteligência Emocional"],
  ["Emoções que Fazem Bem", "Barbara Fredrickson", "Inteligência Emocional"],
  ["Como Lidar com as Emoções", "Marc Brackett", "Inteligência Emocional"],
  ["Permissão para Sentir", "Marc Brackett", "Inteligência Emocional"],
  ["A Inteligência Emocional das Crianças", "John Gottman", "Inteligência Emocional"],

  // Psicologia
  ["O Homem em Busca de Sentido", "Viktor Frankl", "Psicologia"],
  ["A Sociedade do Cansaço", "Byung-Chul Han", "Psicologia"],
  ["O Corpo Guarda as Marcas", "Bessel van der Kolk", "Psicologia"],
  ["12 Regras para a Vida", "Jordan Peterson", "Psicologia"],
  ["Mapas de Significado", "Jordan Peterson", "Psicologia"],
  ["Previsivelmente Irracional", "Dan Ariely", "Psicologia"],
  ["A Verdade sobre a Mentira", "Dan Ariely", "Psicologia"],
  ["O Efeito Cascata", "Dan Ariely", "Psicologia"],
  ["Autoestima: Como Desenvolver", "Nathaniel Branden", "Psicologia"],
  ["Os Seis Pilares da Autoestima", "Nathaniel Branden", "Psicologia"],
  ["Flow: A Psicologia do Alto Desempenho", "Mihaly Csikszentmihalyi", "Psicologia"],
  ["O Cérebro que Se Transforma", "Norman Doidge", "Psicologia"],
  ["Pensar Rápido e Devagar na Prática", "Daniel Kahneman", "Psicologia"],
  ["Homem, Um Lobo Para o Homem", "Boris Cyrulnik", "Psicologia"],
  ["Resiliência: Como Superar Crises", "Boris Cyrulnik", "Psicologia"],
  ["O Cérebro e a Mente", "Miguel Nicolelis", "Psicologia"],
  ["A Tríade Sombria da Personalidade", "Kevin Dutton", "Psicologia"],
  ["A Sabedoria das Emoções", "Yuval Noah Harari", "Psicologia"],
  ["Autoconhecimento: O Caminho para a Liberdade", "Jiddu Krishnamurti", "Psicologia"],

  // Desenvolvimento Pessoal
  ["Um Novo Mundo, Uma Nova Terra", "Eckhart Tolle", "Desenvolvimento Pessoal"],
  ["Os Quatro Compromissos", "Miguel Ruiz", "Desenvolvimento Pessoal"],
  ["O Quinto Compromisso", "Miguel Ruiz", "Desenvolvimento Pessoal"],
  ["Como Fazer Amigos e Influenciar Pessoas na Era Digital", "Dale Carnegie Training", "Desenvolvimento Pessoal"],
  ["Seja Foda", "Jen Sincero", "Desenvolvimento Pessoal"],
  ["Você é Foda", "Jen Sincero", "Desenvolvimento Pessoal"],
  ["A Coragem de Não Agradar", "Ichiro Kishimi e Fumitake Koga", "Desenvolvimento Pessoal"],
  ["O Poder do Hábito", "Charles Duhigg", "Desenvolvimento Pessoal"],
  ["Mais Esperto que o Diabo", "Napoleon Hill", "Desenvolvimento Pessoal"],
  ["A Lei do Triunfo", "Napoleon Hill", "Desenvolvimento Pessoal"],
  ["O Homem Mais Rico de Todos os Tempos", "Napoleon Hill", "Desenvolvimento Pessoal"],
  ["Você Pode Curar Sua Vida", "Louise Hay", "Desenvolvimento Pessoal"],
  ["O Segredo", "Rhonda Byrne", "Desenvolvimento Pessoal"],
  ["A Magia", "Rhonda Byrne", "Desenvolvimento Pessoal"],
  ["Desperte o Gigante Interior", "Tony Robbins", "Desenvolvimento Pessoal"],
  ["Poder Sem Limites", "Tony Robbins", "Desenvolvimento Pessoal"],
  ["A Arte da Guerra para Executivos", "Donald Krause", "Desenvolvimento Pessoal"],
  ["Reprograme sua Mente Para o Sucesso", "Shad Helmstetter", "Desenvolvimento Pessoal"],

  // Autoajuda & Motivação
  ["Quem Pensa Enriquece", "Napoleon Hill", "Autoajuda & Motivação"],
  ["A Vida Que Você Sempre Quis", "John Ortberg", "Autoajuda & Motivação"],
  ["Faça Acontecer", "Mel Robbins", "Autoajuda & Motivação"],
  ["A Regra dos 5 Segundos", "Mel Robbins", "Autoajuda & Motivação"],
  ["O Alquimista", "Paulo Coelho", "Autoajuda & Motivação"],
  ["Ninguém é de Ninguém", "Augusto Cury", "Autoajuda & Motivação"],
  ["Ansiedade: Como Enfrentar o Mal do Século", "Augusto Cury", "Autoajuda & Motivação"],
  ["O Vendedor de Sonhos", "Augusto Cury", "Autoajuda & Motivação"],
  ["Pais Brilhantes, Professores Fascinantes", "Augusto Cury", "Autoajuda & Motivação"],
  ["Você é Insubstituível", "Augusto Cury", "Autoajuda & Motivação"],
  ["A Cabana", "William P. Young", "Autoajuda & Motivação"],
  ["O Poder da Autodisciplina", "Brian Tracy", "Autoajuda & Motivação"],
  ["Metas", "Brian Tracy", "Autoajuda & Motivação"],
  ["Foco", "Brian Tracy", "Autoajuda & Motivação"],
  ["A Última Grande Lição", "Mitch Albom", "Autoajuda & Motivação"],
  ["Terças-Feiras com Morrie", "Mitch Albom", "Autoajuda & Motivação"],
  ["Como Nossas Vidas Poderiam Ser", "Wayne Dyer", "Autoajuda & Motivação"],
  ["Suas Zonas Erradas", "Wayne Dyer", "Autoajuda & Motivação"],
  ["A Coragem de Ser Você Mesmo", "Wayne Dyer", "Autoajuda & Motivação"],

  // Espiritualidade & Mindfulness
  ["A Prática da Atenção Plena", "Thich Nhat Hanh", "Espiritualidade & Mindfulness"],
  ["O Milagre da Atenção Plena", "Thich Nhat Hanh", "Espiritualidade & Mindfulness"],
  ["Paz Em Cada Passo", "Thich Nhat Hanh", "Espiritualidade & Mindfulness"],
  ["Onde Quer que Você Vá, Você Está Lá", "Jon Kabat-Zinn", "Espiritualidade & Mindfulness"],
  ["Meditação e Psicoterapia", "Jack Kornfield", "Espiritualidade & Mindfulness"],
  ["Sabedoria Interior", "Jack Kornfield", "Espiritualidade & Mindfulness"],
  ["O Livro Tibetano do Viver e do Morrer", "Sogyal Rinpoche", "Espiritualidade & Mindfulness"],
  ["Autobiografia de um Iogue", "Paramahansa Yogananda", "Espiritualidade & Mindfulness"],
  ["Conversando com Deus", "Neale Donald Walsch", "Espiritualidade & Mindfulness"],
  ["O Monge Que Vendeu Sua Ferrari", "Robin Sharma", "Espiritualidade & Mindfulness"],
  ["As 5 Manhãs", "Robin Sharma", "Espiritualidade & Mindfulness"],
  ["A Sabedoria dos Sonhos", "Carl Jung", "Espiritualidade & Mindfulness"],
  ["O Homem e Seus Símbolos", "Carl Jung", "Espiritualidade & Mindfulness"],
  ["Meditações Diárias", "Marco Aurélio", "Espiritualidade & Mindfulness"],
  ["A Arte da Felicidade", "Dalai Lama", "Espiritualidade & Mindfulness"],
  ["O Livro da Alegria", "Dalai Lama e Desmond Tutu", "Espiritualidade & Mindfulness"],

  // Sexo & Relacionamentos
  ["Por Que os Homens Fazem Sexo e as Mulheres Fazem Amor", "Allan e Barbara Pease", "Sexo & Relacionamentos"],
  ["Por Que os Homens Não Escutam e as Mulheres Não Entendem Mapas", "Allan e Barbara Pease", "Sexo & Relacionamentos"],
  ["Homens São de Marte, Mulheres São de Vênus", "John Gray", "Sexo & Relacionamentos"],
  ["Casamento Blindado", "Renato e Cristiane Cardoso", "Sexo & Relacionamentos"],
  ["Sete Princípios para Fazer o Casamento Funcionar", "John Gottman", "Sexo & Relacionamentos"],
  ["O Apego Seguro", "Amir Levine e Rachel Heller", "Sexo & Relacionamentos"],
  ["Amor Que Constrói", "Gary Chapman", "Sexo & Relacionamentos"],
  ["A Arte de Amar", "Erich Fromm", "Sexo & Relacionamentos"],
  ["Vulnerabilidade e Conexão", "Brené Brown", "Sexo & Relacionamentos"],
  ["Comunicação Não-Violenta no Relacionamento", "Marshall Rosenberg", "Sexo & Relacionamentos"],
  ["Como Conquistar Amigos e Ser Feliz nos Relacionamentos", "Dale Carnegie", "Sexo & Relacionamentos"],

  // Parentalidade
  ["Disciplina Sem Drama", "Daniel Siegel e Tina Payne Bryson", "Parentalidade"],
  ["O Cérebro da Criança", "Daniel Siegel e Tina Payne Bryson", "Parentalidade"],
  ["Filhos Brilhantes, Alunos Fascinantes", "Augusto Cury", "Parentalidade"],
  ["Pais Brilhantes, Professores Fascinantes", "Augusto Cury", "Parentalidade"],
  ["Criança Segura", "Rosely Sayão", "Parentalidade"],
  ["Educar Sem Culpa", "Içami Tiba", "Parentalidade"],
  ["Quem Ama, Educa!", "Içami Tiba", "Parentalidade"],
  ["Adolescentes: Quem Ama, Educa!", "Içami Tiba", "Parentalidade"],
  ["Limites na Educação dos Filhos", "Içami Tiba", "Parentalidade"],
  ["Maternidade Consciente", "Rita Lopes", "Parentalidade"],
  ["Criando Filhos Emocionalmente Inteligentes", "John Gottman", "Parentalidade"],
  ["A Criança Carente", "John Bowlby", "Parentalidade"],
  ["Apego: A Base Segura para os Filhos", "John Bowlby", "Parentalidade"],

  // Livros Infantis
  ["Alice no País das Maravilhas", "Lewis Carroll", "Livros Infantis"],
  ["O Menino Maluquinho", "Ziraldo", "Livros Infantis"],
  ["A Bolsa Amarela", "Lygia Bojunga", "Livros Infantis"],
  ["Reinações de Narizinho", "Monteiro Lobato", "Livros Infantis"],
  ["O Sítio do Picapau Amarelo", "Monteiro Lobato", "Livros Infantis"],
  ["Marcelo, Marmelo, Martelo", "Ruth Rocha", "Livros Infantis"],
  ["O Reizinho Mandão", "Ruth Rocha", "Livros Infantis"],
  ["Onde Vivem os Monstros", "Maurice Sendak", "Livros Infantis"],
  ["A Árvore Generosa", "Shel Silverstein", "Livros Infantis"],
  ["O Diário de um Banana", "Jeff Kinney", "Livros Infantis"],
  ["Charlie e a Fábula da Chocolate", "Roald Dahl", "Livros Infantis"],
  ["Matilda", "Roald Dahl", "Livros Infantis"],
  ["James e o Pé de Pêssego Gigante", "Roald Dahl", "Livros Infantis"],
  ["O Mágico de Oz", "L. Frank Baum", "Livros Infantis"],

  // Ficção
  ["A Revolução dos Bichos", "George Orwell", "Ficção"],
  ["Admirável Mundo Novo", "Aldous Huxley", "Ficção"],
  ["Fahrenheit 451", "Ray Bradbury", "Ficção"],
  ["Duna", "Frank Herbert", "Ficção"],
  ["O Conto da Aia", "Margaret Atwood", "Ficção"],
  ["Cem Anos de Solidão", "Gabriel García Márquez", "Ficção"],
  ["O Apanhador no Campo de Centeio", "J.D. Salinger", "Ficção"],
  ["A Metamorfose", "Franz Kafka", "Ficção"],
  ["O Processo", "Franz Kafka", "Ficção"],
  ["Crime e Castigo", "Fiódor Dostoiévski", "Ficção"],
  ["Os Irmãos Karamázov", "Fiódor Dostoiévski", "Ficção"],
  ["Dom Casmurro", "Machado de Assis", "Ficção"],
  ["Memórias Póstumas de Brás Cubas", "Machado de Assis", "Ficção"],
  ["Grande Sertão: Veredas", "Guimarães Rosa", "Ficção"],
  ["A Hora da Estrela", "Clarice Lispector", "Ficção"],
  ["Vidas Secas", "Graciliano Ramos", "Ficção"],
  ["O Nome do Vento", "Patrick Rothfuss", "Ficção"],

  // Biografias & Memórias
  ["Elon Musk", "Walter Isaacson", "Biografias & Memórias"],
  ["Einstein: Sua Vida, Seu Universo", "Walter Isaacson", "Biografias & Memórias"],
  ["Leonardo da Vinci", "Walter Isaacson", "Biografias & Memórias"],
  ["Benjamin Franklin: Uma Vida Americana", "Walter Isaacson", "Biografias & Memórias"],
  ["A Autobiografia de Malcolm X", "Malcolm X e Alex Haley", "Biografias & Memórias"],
  ["Longa Caminhada até a Liberdade", "Nelson Mandela", "Biografias & Memórias"],
  ["Uma Educação", "Tara Westover", "Biografias & Memórias"],
  ["Becoming: Minha História", "Michelle Obama", "Biografias & Memórias"],
  ["O Diário de Anne Frank", "Anne Frank", "Biografias & Memórias"],
  ["Sonhos de Meu Pai", "Barack Obama", "Biografias & Memórias"],
  ["Shoe Dog", "Phil Knight", "Biografias & Memórias"],
  ["A Menina que Roubava Livros", "Markus Zusak", "Biografias & Memórias"],
  ["O Poder de Uma Escolha", "Malala Yousafzai", "Biografias & Memórias"],
  ["Eu Sou Malala", "Malala Yousafzai", "Biografias & Memórias"],
  ["Minha Vida", "Bill Clinton", "Biografias & Memórias"],
  ["Guerreiras de Klimt", "Anne-Marie O'Connor", "Biografias & Memórias"],

  // História & Filosofia
  ["Homo Deus", "Yuval Noah Harari", "História & Filosofia"],
  ["21 Lições para o Século 21", "Yuval Noah Harari", "História & Filosofia"],
  ["Armas, Germes e Aço", "Jared Diamond", "História & Filosofia"],
  ["A História do Tempo", "Stephen Hawking", "História & Filosofia"],
  ["O Mundo de Sofia", "Jostein Gaarder", "História & Filosofia"],
  ["Ética a Nicômaco", "Aristóteles", "História & Filosofia"],
  ["A República", "Platão", "História & Filosofia"],
  ["Assim Falou Zaratustra", "Friedrich Nietzsche", "História & Filosofia"],
  ["Além do Bem e do Mal", "Friedrich Nietzsche", "História & Filosofia"],
  ["O Príncipe", "Nicolau Maquiavel", "História & Filosofia"],
  ["Discurso do Método", "René Descartes", "História & Filosofia"],
  ["Meditações", "Marco Aurélio", "História & Filosofia"],
  ["Uma Breve História de Quase Tudo", "Bill Bryson", "História & Filosofia"],
  ["Guns, Germs and Steel", "Jared Diamond", "História & Filosofia"],
  ["A Guerra do Peloponeso", "Tucídides", "História & Filosofia"],
  ["O Declínio e Queda do Império Romano", "Edward Gibbon", "História & Filosofia"],
  ["Brasil: Uma Biografia", "Lilia Schwarcz e Heloisa Starling", "História & Filosofia"],
  ["Raízes do Brasil", "Sérgio Buarque de Holanda", "História & Filosofia"],
  ["Casa-Grande & Senzala", "Gilberto Freyre", "História & Filosofia"],

  // Ciência
  ["O Universo Numa Casca de Noz", "Stephen Hawking", "Ciência"],
  ["Breves Respostas para Grandes Perguntas", "Stephen Hawking", "Ciência"],
  ["Cosmos", "Carl Sagan", "Ciência"],
  ["Bilhões e Bilhões", "Carl Sagan", "Ciência"],
  ["O Mundo Assombrado pelos Demônios", "Carl Sagan", "Ciência"],
  ["A Origem das Espécies", "Charles Darwin", "Ciência"],
  ["O Gene Egoísta", "Richard Dawkins", "Ciência"],
  ["Deus, Um Delírio", "Richard Dawkins", "Ciência"],
  ["Silent Spring", "Rachel Carson", "Ciência"],
  ["A Elegante Teoria do Tudo", "Brian Greene", "Ciência"],
  ["O Universo Elegante", "Brian Greene", "Ciência"],
  ["Astrofísica para Apressados", "Neil deGrasse Tyson", "Ciência"],
  ["Além da Terra", "Neil deGrasse Tyson", "Ciência"],
  ["A Dobra do Tempo", "Michio Kaku", "Ciência"],
  ["Física do Impossível", "Michio Kaku", "Ciência"],
  ["O Que é a Vida?", "Erwin Schrödinger", "Ciência"],
  ["A Origem do Universo", "Marcelo Gleiser", "Ciência"],
  ["A Dança do Universo", "Marcelo Gleiser", "Ciência"],
  ["O Gene: Uma História Íntima", "Siddhartha Mukherjee", "Ciência"],

  // IA (Inteligência Artificial)
  ["Vida 3.0", "Max Tegmark", "IA (Inteligência Artificial)"],
  ["Superinteligência", "Nick Bostrom", "IA (Inteligência Artificial)"],
  ["Inteligência Artificial: Uma Abordagem Moderna", "Stuart Russell e Peter Norvig", "IA (Inteligência Artificial)"],
  ["A Quarta Revolução Industrial", "Klaus Schwab", "IA (Inteligência Artificial)"],
  ["Homo Deus", "Yuval Noah Harari", "IA (Inteligência Artificial)"],
  ["A Era das Máquinas Espirituais", "Ray Kurzweil", "IA (Inteligência Artificial)"],
  ["A Singularidade está Próxima", "Ray Kurzweil", "IA (Inteligência Artificial)"],
  ["Máquinas que Pensam", "John Markoff", "IA (Inteligência Artificial)"],
  ["A Era do Algoritmo", "Pedro Domingos", "IA (Inteligência Artificial)"],
  ["Armas de Destruição Matemática", "Cathy O'Neil", "IA (Inteligência Artificial)"],
  ["Prediction Machines", "Ajay Agrawal, Joshua Gans e Avi Goldfarb", "IA (Inteligência Artificial)"],
  ["Inteligência Artificial para o Bem", "Fei-Fei Li", "IA (Inteligência Artificial)"],
  ["Ferramentas e Armas", "Brad Smith", "IA (Inteligência Artificial)"],
  ["O Futuro do Trabalho", "Daniel Susskind", "IA (Inteligência Artificial)"],

  // Tecnologia e Inovação
  ["A Quarta Revolução Industrial", "Klaus Schwab", "Tecnologia e Inovação"],
  ["A Solução para a Inovação", "Clayton Christensen", "Tecnologia e Inovação"],
  ["Sociedade 5.0", "Klaus Schwab", "Tecnologia e Inovação"],
  ["Isso Vai Mudar Tudo", "John Brockman", "Tecnologia e Inovação"],
  ["A Loja de Tudo", "Brad Stone", "Tecnologia e Inovação"],
  ["Elon Musk e a Busca por um Futuro Fantástico", "Ashlee Vance", "Tecnologia e Inovação"],
  ["Uber: A História por Trás do Aplicativo", "Mike Isaac", "Tecnologia e Inovação"],
  ["A Empresa que Comeu o Mundo", "Brad Stone", "Tecnologia e Inovação"],
  ["Efeito Facebook", "David Kirkpatrick", "Tecnologia e Inovação"],
  ["Rede Social", "Ben Mezrich", "Tecnologia e Inovação"],
  ["O Código Da Vinci da Inovação", "Tony Davila", "Tecnologia e Inovação"],
  ["Inovação Disruptiva", "Clayton Christensen", "Tecnologia e Inovação"],
  ["Blockchain Revolution", "Don Tapscott e Alex Tapscott", "Tecnologia e Inovação"],
  ["Bitcoin: A Moeda na Era Digital", "Fernando Ulrich", "Tecnologia e Inovação"],

  // Saúde & Dieta
  ["Como Não Morrer", "Michael Greger", "Saúde & Dieta"],
  ["A Dieta da Mente", "Max Lugavere", "Saúde & Dieta"],
  ["Você é o Placebo", "Joe Dispenza", "Saúde & Dieta"],
  ["Quebrando o Hábito de Ser Você Mesmo", "Joe Dispenza", "Saúde & Dieta"],
  ["Corra ou Morra", "Christopher McDougall", "Saúde & Dieta"],
  ["O Poder do Metabolismo", "Frank Suárez", "Saúde & Dieta"],
  ["O Milagre do Jejum Intermitente", "Jason Fung", "Saúde & Dieta"],
  ["O Código da Obesidade", "Jason Fung", "Saúde & Dieta"],
  ["Manual de Nutrição Funcional", "Valéria Paschoal", "Saúde & Dieta"],
  ["Alimentação Desintoxicante", "Sandra Cabot", "Saúde & Dieta"],
  ["A Dieta de South Beach", "Arthur Agatston", "Saúde & Dieta"],
  ["Vida Plena e Saudável", "Deepak Chopra", "Saúde & Dieta"],
  ["Corpo Sem Dor", "Pedro Bertolucci", "Saúde & Dieta"],

  // 3X Fit
  ["Corra ou Morra", "Christopher McDougall", "3X Fit"],
  ["A Ciência do Treinamento de Força", "Brad Schoenfeld", "3X Fit"],
  ["Corpo Ativo, Vida Longa", "Peter Attia", "3X Fit"],
  ["Outlive: A Ciência e a Arte da Longevidade", "Peter Attia", "3X Fit"],
  ["Treinamento Funcional na Prática", "Michael Boyle", "3X Fit"],
  ["A Bíblia da Musculação", "Arnold Schwarzenegger", "3X Fit"],
  ["Corrida: Da Teoria à Prática", "Jack Daniels", "3X Fit"],
  ["Yoga para Todos", "B.K.S. Iyengar", "3X Fit"],
  ["Luz sobre o Yoga", "B.K.S. Iyengar", "3X Fit"],
  ["O Poder do Alongamento", "Bob Anderson", "3X Fit"],
  ["Menos Doença, Mais Saúde", "Drauzio Varella", "3X Fit"],
  ["Nutrição Esportiva Aplicada", "Dan Benardot", "3X Fit"],
  ["Mentalidade de Atleta", "Steve Magness", "3X Fit"],
  ["O Corredor Descalço", "Ken Bob Saxton", "3X Fit"],

  // Espor­tes
  ["Fora de Série: Michael Jordan", "David Halberstam", "Esportes"],
  ["A Mente do Campeão", "Timothy Gallwey", "Esportes"],
  ["O Jogo Interior de Tênis", "Timothy Gallwey", "Esportes"],
  ["Aberto: Uma Autobiografia", "Andre Agassi", "Esportes"],
  ["Relentless", "Tim Grover", "Esportes"],
  ["Mentalidade de Elite", "Steve Magness e Brad Stulberg", "Esportes"],
  ["O Poder do Hábito nos Esportes", "Charles Duhigg", "Esportes"],
  ["Pep Confidencial", "Marti Perarnau", "Esportes"],
  ["Fear Less: A Mentalidade Vencedora", "Pippa Grange", "Esportes"],
  ["Michael Jordan: A Vida", "Roland Lazenby", "Esportes"],
  ["Senna: A Biografia", "Tom Rubython", "Esportes"],
  ["Pelé: Autobiografia", "Pelé", "Esportes"],
  ["A Arte de Vencer", "Michael Johnson", "Esportes"],

  // Modo Copa
  ["Futebol Nação: Uma História do Brasil Através do Futebol", "David Goldblatt", "Modo Copa"],
  ["A Bola: Uma História de Prazer e Poder", "David Goldblatt", "Modo Copa"],
  ["Barça: A Trajetória do Futebol Catalão", "Jimmy Burns", "Modo Copa"],
  ["Soccernomics", "Simon Kuper e Stefan Szymanski", "Modo Copa"],
  ["A Alma do Jogo", "Tim Vickery", "Modo Copa"],
  ["1970: Como o Brasil Ganhou a Copa do Mundo", "Tim Vickery", "Modo Copa"],
  ["O Livro de Ouro do Futebol", "José Ribamar", "Modo Copa"],
  ["Zagallo: A Biografia", "Rodrigo Capelo", "Modo Copa"],
  ["Garrincha: A Alegria do Povo", "Ruy Castro", "Modo Copa"],
  ["Estrela Solitária: Um Brasileiro na Copa de 1950", "Ruy Castro", "Modo Copa"],
  ["Pep Guardiola: A Evolução Tática", "Marti Perarnau", "Modo Copa"],
  ["Futebol Total: A Bíblia Tática", "Jonathan Wilson", "Modo Copa"],
  ["A Pirâmide Invertida", "Jonathan Wilson", "Modo Copa"],

  // Sociedade & Política
  ["O Contrato Social", "Jean-Jacques Rousseau", "Sociedade & Política"],
  ["A Origem do Totalitarismo", "Hannah Arendt", "Sociedade & Política"],
  ["Eichmann em Jerusalém", "Hannah Arendt", "Sociedade & Política"],
  ["Vigiar e Punir", "Michel Foucault", "Sociedade & Política"],
  ["A Sociedade do Espetáculo", "Guy Debord", "Sociedade & Política"],
  ["O Choque das Civilizações", "Samuel Huntington", "Sociedade & Política"],
  ["Armas, Germes e Aço: Política e História", "Jared Diamond", "Sociedade & Política"],
  ["Racismo Estrutural", "Silvio Almeida", "Sociedade & Política"],
  ["Pequeno Manual Antirracista", "Djamila Ribeiro", "Sociedade & Política"],
  ["O Que é Lugar de Fala?", "Djamila Ribeiro", "Sociedade & Política"],
  ["Feminismo para os 99%", "Cinzia Arruzza, Tithi Bhattacharya e Nancy Fraser", "Sociedade & Política"],
  ["Mulheres, Raça e Classe", "Angela Davis", "Sociedade & Política"],
  ["A Democracia em Risco", "Steven Levitsky e Daniel Ziblatt", "Sociedade & Política"],
  ["Coisas que Todo Cidadão Deveria Saber sobre Política", "Norberto Bobbio", "Sociedade & Política"],

  // Estilo de Vida
  ["A Vida Organizada", "Marie Kondo", "Estilo de Vida"],
  ["A Mágica da Arrumação", "Marie Kondo", "Estilo de Vida"],
  ["Alegria depois da Arrumação", "Marie Kondo", "Estilo de Vida"],
  ["Minimalismo: Viva uma Vida com Mais Significado", "Joshua Fields Millburn e Ryan Nicodemus", "Estilo de Vida"],
  ["A Arte de Viver com Menos", "Fumio Sasaki", "Estilo de Vida"],
  ["Hygge: O Método Dinamarquês para uma Vida Feliz", "Meik Wiking", "Estilo de Vida"],
  ["Lagom: O Segredo Sueco para uma Vida com Equilíbrio", "Linnea Dunne", "Estilo de Vida"],
  ["Ikigai: Os Segredos dos Japoneses para uma Vida Longa e Feliz", "Héctor García e Francesc Miralles", "Estilo de Vida"],
  ["A Arte Sueca de Organizar a Bagunça", "Margareta Magnusson", "Estilo de Vida"],
  ["Slow: Viva Mais Devagar", "Carl Honoré", "Estilo de Vida"],
  ["Simplifique", "Leo Babauta", "Estilo de Vida"],
  ["O Poder do Menos", "Leo Babauta", "Estilo de Vida"],
  ["Adeus, Coisas: A Nova Arte Japonesa de Viver com Menos", "Fumio Sasaki", "Estilo de Vida"],

  // Recomeço de Ano
  ["Recomeçar: Como Superar Crises e Reconstruir a Vida", "Bruce Feiler", "Recomeço de Ano"],
  ["A Vida Que Você Sempre Quis", "John Ortberg", "Recomeço de Ano"],
  ["Um Novo Começo", "James Clear", "Recomeço de Ano"],
  ["Hábitos Atômicos: Guia Prático", "James Clear", "Recomeço de Ano"],
  ["O Ano da Simplicidade", "Colin Beavan", "Recomeço de Ano"],
  ["Metas Poderosas", "Brian Tracy", "Recomeço de Ano"],
  ["Recomeçar com Propósito", "John C. Maxwell", "Recomeço de Ano"],
  ["Design de Vida: Como Recriar sua Vida", "Bill Burnett e Dave Evans", "Recomeço de Ano"],
  ["A Vida Reprogramada", "Shad Helmstetter", "Recomeço de Ano"],
  ["Recomeçar Depois dos 40", "Barbara Bradley Hagerty", "Recomeço de Ano"],

  // Hackeando o ENEM
  ["Redação Nota 1000", "Adriana Aguiar", "Hackeando o ENEM"],
  ["Como Escrever Redações Nota 1000", "Vestibular1 (equipe)", "Hackeando o ENEM"],
  ["Gramática para Concursos e Vestibulares", "Pasquale Cipro Neto", "Hackeando o ENEM"],
  ["Guia do ENEM", "Editora Moderna (equipe)", "Hackeando o ENEM"],
  ["Como Estudar para Provas e Concursos", "Guilherme Cavalcanti", "Hackeando o ENEM"],
  ["A Arte de Estudar", "Gabriel Aleixo", "Hackeando o ENEM"],
  ["Estude Menos, Aprenda Mais", "Marcos Zortea", "Hackeando o ENEM"],
  ["Aprender a Aprender", "Barbara Oakley", "Hackeando o ENEM"],
  ["Mentes Vencedoras", "Barbara Oakley", "Hackeando o ENEM"],
  ["Faça Sua Cabeça Funcionar Melhor", "Barbara Oakley", "Hackeando o ENEM"],
  ["Poder sem Limites nos Estudos", "Tony Robbins", "Hackeando o ENEM"],
  ["A Ciência da Memória", "Nelson Cowan", "Hackeando o ENEM"],

  // Do Fundo do Baú
  ["Como Fazer Amigos e Influenciar Pessoas", "Dale Carnegie", "Do Fundo do Baú"],
  ["Como Evitar Preocupações e Começar a Viver", "Dale Carnegie", "Do Fundo do Baú"],
  ["A Riqueza das Nações", "Adam Smith", "Do Fundo do Baú"],
  ["Pense e Enriqueça", "Napoleon Hill", "Do Fundo do Baú"],
  ["A Arte da Guerra", "Sun Tzu", "Do Fundo do Baú"],
  ["O Príncipe", "Nicolau Maquiavel", "Do Fundo do Baú"],
  ["Meditações", "Marco Aurélio", "Do Fundo do Baú"],
  ["A República", "Platão", "Do Fundo do Baú"],
  ["O Contrato Social", "Jean-Jacques Rousseau", "Do Fundo do Baú"],
  ["Walden, ou A Vida nos Bosques", "Henry David Thoreau", "Do Fundo do Baú"],
  ["A Desobediência Civil", "Henry David Thoreau", "Do Fundo do Baú"],
  ["Cartas a um Jovem Poeta", "Rainer Maria Rilke", "Do Fundo do Baú"],
  ["O Profeta", "Khalil Gibran", "Do Fundo do Baú"],

  // Radar 3X
  ["Outlive: A Ciência e a Arte da Longevidade", "Peter Attia", "Radar 3X"],
  ["A Psicologia Financeira", "Morgan Housel", "Radar 3X"],
  ["Atlas do Coração", "Brené Brown", "Radar 3X"],
  ["Vida 3.0", "Max Tegmark", "Radar 3X"],
  ["Foco: A Atenção e Seu Papel Fundamental para o Sucesso", "Daniel Goleman", "Radar 3X"],
  ["O Corpo Guarda as Marcas", "Bessel van der Kolk", "Radar 3X"],
  ["Ikigai: Os Segredos dos Japoneses para uma Vida Longa e Feliz", "Héctor García e Francesc Miralles", "Radar 3X"],
  ["12 Regras para a Vida", "Jordan Peterson", "Radar 3X"],
  ["Faça Acontecer", "Mel Robbins", "Radar 3X"],

  // 3X Originals
  ["A Estratégia do Oceano Azul", "W. Chan Kim e Renée Mauborgne", "3X Originals"],
  ["Hábitos Atômicos", "James Clear", "3X Originals"],
  ["Mindset: A Nova Psicologia do Sucesso", "Carol S. Dweck", "3X Originals"],
  ["Pai Rico, Pai Pobre", "Robert Kiyosaki", "3X Originals"],
  ["O Homem Mais Rico da Babilônia", "George S. Clason", "3X Originals"],
  ["Como Fazer Amigos e Influenciar Pessoas", "Dale Carnegie", "3X Originals"],

  // 3X Personalities
  ["Elon Musk", "Walter Isaacson", "3X Personalities"],
  ["Shoe Dog", "Phil Knight", "3X Personalities"],
  ["Becoming: Minha História", "Michelle Obama", "3X Personalities"],
  ["Sonhos de Meu Pai", "Barack Obama", "3X Personalities"],
  ["Longa Caminhada até a Liberdade", "Nelson Mandela", "3X Personalities"],
  ["Eu Sou Malala", "Malala Yousafzai", "3X Personalities"],
  ["Aberto: Uma Autobiografia", "Andre Agassi", "3X Personalities"],
  ["Pelé: Autobiografia", "Pelé", "3X Personalities"],
  ["Einstein: Sua Vida, Seu Universo", "Walter Isaacson", "3X Personalities"],

  // ─── Segundo lote — mais títulos reais por categoria ───

  // Carreira & Negócios (2)
  ["A Vaca Roxa Volta a Berrar", "Seth Godin", "Carreira & Negócios"],
  ["O Investidor Inteligente nas Empresas", "Philip Fisher", "Carreira & Negócios"],
  ["Administração: Teoria, Processo e Prática", "Idalberto Chiavenato", "Carreira & Negócios"],
  ["Introdução à Teoria Geral da Administração", "Idalberto Chiavenato", "Carreira & Negócios"],
  ["O Poder da Ação", "Paulo Vieira", "Carreira & Negócios"],
  ["A Máquina do Milhão", "Erico Rocha", "Carreira & Negócios"],
  ["Empreendedorismo de Alta Performance", "Flávio Augusto", "Carreira & Negócios"],
  ["O Milionário Mora ao Lado", "Thomas Stanley e William Danko", "Carreira & Negócios"],
  ["A Mente Milionária", "Thomas Stanley", "Carreira & Negócios"],
  ["Negociação: Como Chegar ao Sim", "Roger Fisher e William Ury", "Carreira & Negócios"],
  ["Getting Past No", "William Ury", "Carreira & Negócios"],
  ["Nunca Divida a Diferença", "Chris Voss", "Carreira & Negócios"],
  ["A Arte de Negociar", "Herb Cohen", "Carreira & Negócios"],
  ["Compre, Não Alugue Seu Tempo", "Flávio Augusto", "Carreira & Negócios"],
  ["O Bilionário: A História de um Sonho", "Flávio Augusto", "Carreira & Negócios"],

  // Investimentos & Finanças (2)
  ["Segurança Financeira em 7 Passos", "Robert Kiyosaki", "Investimentos & Finanças"],
  ["O Quadrante do Fluxo de Caixa", "Robert Kiyosaki", "Investimentos & Finanças"],
  ["Manual de Sobrevivência Financeira", "Reinaldo Domingos", "Investimentos & Finanças"],
  ["Terapia Financeira", "Reinaldo Domingos", "Investimentos & Finanças"],
  ["Você é o Dono do Seu Dinheiro", "Nathalia Arcuri", "Investimentos & Finanças"],
  ["Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", "Investimentos & Finanças"],
  ["Como Organizar sua Vida Financeira", "Gustavo Cerbasi", "Investimentos & Finanças"],
  ["Investimentos Inteligentes", "Gustavo Cerbasi", "Investimentos & Finanças"],
  ["Dinheiro: Os Segredos de Quem Tem", "Gustavo Cerbasi", "Investimentos & Finanças"],
  ["O Jeito Peter Lynch de Investir", "Peter Lynch", "Investimentos & Finanças"],
  ["Aprenda a Ganhar na Bolsa", "Peter Lynch", "Investimentos & Finanças"],
  ["Ações: O Guia Completo", "William O'Neil", "Investimentos & Finanças"],
  ["Renda Passiva: O Caminho para a Liberdade Financeira", "Rafael Seabra", "Investimentos & Finanças"],
  ["Investindo em Fundos Imobiliários", "Fábio Yabiku", "Investimentos & Finanças"],

  // Economia (2)
  ["A Riqueza e a Pobreza das Nações", "David Landes", "Economia"],
  ["O Fim da Pobreza", "Jeffrey Sachs", "Economia"],
  ["A Economia do Bem Comum", "Jean Tirole", "Economia"],
  ["Economia sem Segredos", "Ha-Joon Chang", "Economia"],
  ["Missão Economia", "Mariana Mazzucato", "Economia"],
  ["O Valor de Tudo", "Mariana Mazzucato", "Economia"],
  ["A Economia das Emoções", "Peter Ubel", "Economia"],
  ["Isso é Economia?", "Tim Harford", "Economia"],
  ["O Economista Disfarçado", "Tim Harford", "Economia"],
  ["Adeus, Homo Economicus", "André Orléan", "Economia"],

  // Startups & Empreendedorismo (2)
  ["A Startup Enxuta na Era da IA", "Eric Ries", "Startups & Empreendedorismo"],
  ["O Método Canvas na Prática", "Alexander Osterwalder", "Startups & Empreendedorismo"],
  ["Do Garage ao Ipo", "Guy Kawasaki", "Startups & Empreendedorismo"],
  ["A Arte do Começo", "Guy Kawasaki", "Startups & Empreendedorismo"],
  ["Enchantment: A Arte de Mudar Corações, Mentes e Ações", "Guy Kawasaki", "Startups & Empreendedorismo"],
  ["Startup: Manual do Empreendedor", "Steve Blank e Bob Dorf", "Startups & Empreendedorismo"],
  ["O Empreendedor Visionário", "Michael Gerber", "Startups & Empreendedorismo"],
  ["Como Startups Enxutas Vencem", "Ash Maurya", "Startups & Empreendedorismo"],
  ["Startupbrasil: Histórias Reais", "Amure Pinho", "Startups & Empreendedorismo"],
  ["A Origem das Marcas", "Al Ries e Laura Ries", "Startups & Empreendedorismo"],

  // Cultura Corporativa & Comunicação (2)
  ["Como Dizer Não Sem Culpa", "William Ury", "Cultura Corporativa & Comunicação"],
  ["Comunicação Assertiva no Trabalho", "Marshall Rosenberg", "Cultura Corporativa & Comunicação"],
  ["Reuniões que Funcionam", "Patrick Lencioni", "Cultura Corporativa & Comunicação"],
  ["A Empresa Consciente", "John Mackey e Raj Sisodia", "Cultura Corporativa & Comunicação"],
  ["Cultura de Alta Performance", "Amy Edmondson", "Cultura Corporativa & Comunicação"],
  ["A Comunicação Eficaz no Ambiente de Trabalho", "Carmine Gallo", "Cultura Corporativa & Comunicação"],
  ["Feedback: A Arte de Dar e Receber", "Kim Scott", "Cultura Corporativa & Comunicação"],
  ["Diversidade e Inclusão nas Empresas", "Vernā Myers", "Cultura Corporativa & Comunicação"],

  // Gestão & Liderança (2)
  ["O Líder Coach", "José Roberto Marques", "Gestão & Liderança"],
  ["Liderança Extrema", "Jocko Willink e Leif Babin", "Gestão & Liderança"],
  ["Disciplina é Liberdade", "Jocko Willink", "Gestão & Liderança"],
  ["Liderança e Autoengano", "The Arbinger Institute", "Gestão & Liderança"],
  ["Anatomia da Paz", "The Arbinger Institute", "Gestão & Liderança"],
  ["Os Segredos da Mente Extraordinária", "John C. Maxwell", "Gestão & Liderança"],
  ["Como as Pessoas Crescem", "John C. Maxwell", "Gestão & Liderança"],
  ["O Livro de Ouro da Liderança", "John C. Maxwell", "Gestão & Liderança"],
  ["Liderança Baseada em Princípios", "Stephen Covey", "Gestão & Liderança"],
  ["O 8º Hábito", "Stephen Covey", "Gestão & Liderança"],
  ["Confiança: O Elo que Faz Tudo Funcionar", "Stephen M. R. Covey", "Gestão & Liderança"],
  ["A Velocidade da Confiança", "Stephen M. R. Covey", "Gestão & Liderança"],

  // Marketing & Vendas (2)
  ["Storybrand: Clarifique Sua Mensagem", "Donald Miller", "Marketing & Vendas"],
  ["Marketing de Conteúdo", "Rejane Toigo", "Marketing & Vendas"],
  ["Growth Hacking", "Sean Ellis e Morgan Brown", "Marketing & Vendas"],
  ["Hackeando o Crescimento", "Sean Ellis e Morgan Brown", "Marketing & Vendas"],
  ["A Bíblia do Marketing Digital", "Conrado Adolpho", "Marketing & Vendas"],
  ["Os 8 Ps do Marketing Digital", "Conrado Adolpho", "Marketing & Vendas"],
  ["Tribos: Precisamos que Você nos Lidere", "Seth Godin", "Marketing & Vendas"],
  ["Todo Mundo é Fake", "Seth Godin", "Marketing & Vendas"],
  ["Vendas: Como Fechar Todo Negócio", "Brian Tracy", "Marketing & Vendas"],
  ["Psicologia de Vendas", "Brian Tracy", "Marketing & Vendas"],

  // Produtividade & Gestão do Tempo (2)
  ["Mais Devagar", "Carl Honoré", "Produtividade & Gestão do Tempo"],
  ["O Poder do Não", "James Altucher", "Produtividade & Gestão do Tempo"],
  ["Indistractable: Como Controlar sua Atenção", "Nir Eyal", "Produtividade & Gestão do Tempo"],
  ["Organize-se com Eficiência", "Julie Morgenstern", "Produtividade & Gestão do Tempo"],
  ["A Semana Ideal de 4 Dias", "Timothy Ferriss", "Produtividade & Gestão do Tempo"],
  ["Ferramentas dos Titãs", "Timothy Ferriss", "Produtividade & Gestão do Tempo"],
  ["Tribo de Mentores", "Timothy Ferriss", "Produtividade & Gestão do Tempo"],
  ["Produtividade em 25 Minutos", "Francesco Cirillo", "Produtividade & Gestão do Tempo"],

  // Inteligência Emocional (2)
  ["A Anatomia da Ansiedade", "Ellen Vora", "Inteligência Emocional"],
  ["Cérebro Ansioso", "Wendy Suzuki", "Inteligência Emocional"],
  ["Vencendo a Ansiedade", "Augusto Cury", "Inteligência Emocional"],
  ["O Poder da Empatia", "Roman Krznaric", "Inteligência Emocional"],
  ["Emoções Tóxicas", "Bernardo Stamateas", "Inteligência Emocional"],
  ["Gente Tóxica", "Bernardo Stamateas", "Inteligência Emocional"],
  ["Autoestima e Autocuidado", "Kristin Neff", "Inteligência Emocional"],
  ["Autocompaixão", "Kristin Neff", "Inteligência Emocional"],

  // Psicologia (2)
  ["O Efeito Lúcifer", "Philip Zimbardo", "Psicologia"],
  ["Obediência à Autoridade", "Stanley Milgram", "Psicologia"],
  ["Influência Social e Persuasão", "Robert Cialdini", "Psicologia"],
  ["A Psicologia do Convencimento", "Robert Cialdini", "Psicologia"],
  ["Teoria Geral da Psicanálise", "Sigmund Freud", "Psicologia"],
  ["A Interpretação dos Sonhos", "Sigmund Freud", "Psicologia"],
  ["O Ego e o Id", "Sigmund Freud", "Psicologia"],
  ["Tipos Psicológicos", "Carl Jung", "Psicologia"],
  ["Memórias, Sonhos, Reflexões", "Carl Jung", "Psicologia"],
  ["Psicologia das Massas", "Gustave Le Bon", "Psicologia"],
  ["Sobre a Solidão", "Anthony Storr", "Psicologia"],
  ["Terapia Cognitivo-Comportamental na Prática", "Judith Beck", "Psicologia"],
  ["Mentes Perigosas", "Ana Beatriz Barbosa Silva", "Psicologia"],
  ["Mentes Ansiosas", "Augusto Cury", "Psicologia"],

  // Desenvolvimento Pessoal (2)
  ["Comece com o Fim em Mente", "Stephen Covey", "Desenvolvimento Pessoal"],
  ["A Sétima Regra do Sucesso", "Napoleon Hill", "Desenvolvimento Pessoal"],
  ["Autossugestão Consciente", "Émile Coué", "Desenvolvimento Pessoal"],
  ["Como Nadar com os Tubarões sem Ser Devorado", "Harvey Mackay", "Desenvolvimento Pessoal"],
  ["Renove sua Mente", "Joyce Meyer", "Desenvolvimento Pessoal"],
  ["Campo de Batalha da Mente", "Joyce Meyer", "Desenvolvimento Pessoal"],
  ["O Poder da Intenção", "Wayne Dyer", "Desenvolvimento Pessoal"],
  ["Mude Seus Pensamentos e Mude Sua Vida", "Wayne Dyer", "Desenvolvimento Pessoal"],
  ["Você é Mais Esperto do que Pensa", "Thomas Armstrong", "Desenvolvimento Pessoal"],
  ["A Arte de Ser Feliz", "Arthur Schopenhauer", "Desenvolvimento Pessoal"],

  // Autoajuda & Motivação (2)
  ["A Cabana", "William P. Young", "Autoajuda & Motivação"],
  ["O Poder das Palavras", "Louise Hay", "Autoajuda & Motivação"],
  ["Você Nasceu Para Vencer", "Zig Ziglar", "Autoajuda & Motivação"],
  ["Fechando Toda Venda", "Zig Ziglar", "Autoajuda & Motivação"],
  ["A Arte de Motivar Pessoas", "Zig Ziglar", "Autoajuda & Motivação"],
  ["Determinação: O Poder de Persistir", "Angela Duckworth", "Autoajuda & Motivação"],
  ["A Mentalidade de Crescimento no Dia a Dia", "Carol Dweck", "Autoajuda & Motivação"],
  ["Autoestima: Um Novo Olhar", "Augusto Cury", "Autoajuda & Motivação"],

  // Espiritualidade & Mindfulness (2)
  ["Respire: A Ciência de um Novo Modo de Respirar", "James Nestor", "Espiritualidade & Mindfulness"],
  ["A Arte de Meditar", "Matthieu Ricard", "Espiritualidade & Mindfulness"],
  ["Felicidade: Um Guia para Desenvolver a Habilidade Mais Importante da Vida", "Matthieu Ricard", "Espiritualidade & Mindfulness"],
  ["Mindfulness na Vida Cotidiana", "Jon Kabat-Zinn", "Espiritualidade & Mindfulness"],
  ["O Espírito da Meditação", "Osho", "Espiritualidade & Mindfulness"],
  ["Coragem: Viva Perigosamente", "Osho", "Espiritualidade & Mindfulness"],
  ["Liberdade: O Coração da Meditação", "Osho", "Espiritualidade & Mindfulness"],
  ["Siddhartha", "Hermann Hesse", "Espiritualidade & Mindfulness"],
  ["O Livro da Vida", "Jiddu Krishnamurti", "Espiritualidade & Mindfulness"],
  ["A Prece dos Oceanos", "Deepak Chopra", "Espiritualidade & Mindfulness"],
  ["As Sete Leis Espirituais do Sucesso", "Deepak Chopra", "Espiritualidade & Mindfulness"],

  // Sexo & Relacionamentos (2)
  ["Vem Comigo: A Prática do Amor Consciente", "Esther Perel", "Sexo & Relacionamentos"],
  ["Inteligência Erótica", "Esther Perel", "Sexo & Relacionamentos"],
  ["O Estado da União", "Esther Perel", "Sexo & Relacionamentos"],
  ["Attached: Os Novos Estudos Científicos do Apego", "Amir Levine e Rachel Heller", "Sexo & Relacionamentos"],
  ["Por Que Amamos", "Helen Fisher", "Sexo & Relacionamentos"],
  ["Anatomia do Amor", "Helen Fisher", "Sexo & Relacionamentos"],
  ["Casais Inteligentes Enriquecem Juntos no Amor", "Gustavo Cerbasi", "Sexo & Relacionamentos"],

  // Parentalidade (2)
  ["O Cérebro da Criança Explicado aos Pais", "Daniel Siegel", "Parentalidade"],
  ["Pais Positivos, Filhos Felizes", "Rebecca Eanes", "Parentalidade"],
  ["Educação sem Gritos", "Renata Rivetti", "Parentalidade"],
  ["Guia da Gravidez e do Bebê", "Grupo Editorial", "Parentalidade"],
  ["Método Montessori em Casa", "Charlotte Poussin", "Parentalidade"],
  ["A Criança e a Sua Educação", "Maria Montessori", "Parentalidade"],
  ["Mente Absorvente", "Maria Montessori", "Parentalidade"],
  ["Disciplina Positiva", "Jane Nelsen", "Parentalidade"],

  // Livros Infantis (2)
  ["O Patinho Feio", "Hans Christian Andersen", "Livros Infantis"],
  ["A Pequena Sereia", "Hans Christian Andersen", "Livros Infantis"],
  ["Peter Pan", "J.M. Barrie", "Livros Infantis"],
  ["Pinóquio", "Carlo Collodi", "Livros Infantis"],
  ["As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", "C.S. Lewis", "Livros Infantis"],
  ["Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Livros Infantis"],
  ["O Hobbit", "J.R.R. Tolkien", "Livros Infantis"],
  ["A Fantástica Fábrica de Chocolate", "Roald Dahl", "Livros Infantis"],
  ["O Fantástico Sr. Raposo", "Roald Dahl", "Livros Infantis"],
  ["A Ovelhinha que Veio para o Jantar", "Steve Smallman", "Livros Infantis"],

  // Ficção (2)
  ["O Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", "Ficção"],
  ["O Conde de Monte Cristo", "Alexandre Dumas", "Ficção"],
  ["Os Três Mosqueteiros", "Alexandre Dumas", "Ficção"],
  ["Guerra e Paz", "Liev Tolstói", "Ficção"],
  ["Anna Kariênina", "Liev Tolstói", "Ficção"],
  ["Orgulho e Preconceito", "Jane Austen", "Ficção"],
  ["O Grande Gatsby", "F. Scott Fitzgerald", "Ficção"],
  ["O Velho e o Mar", "Ernest Hemingway", "Ficção"],
  ["Ensaio Sobre a Cegueira", "José Saramago", "Ficção"],
  ["A Revolução dos Bichos: Edição Comentada", "George Orwell", "Ficção"],
  ["Neuromancer", "William Gibson", "Ficção"],
  ["Fundação", "Isaac Asimov", "Ficção"],
  ["Eu, Robô", "Isaac Asimov", "Ficção"],
  ["O Guia do Mochileiro das Galáxias", "Douglas Adams", "Ficção"],
  ["It: A Coisa", "Stephen King", "Ficção"],
  ["A Torre Negra", "Stephen King", "Ficção"],
  ["O Iluminado", "Stephen King", "Ficção"],
  ["Sobre Escrever", "Stephen King", "Ficção"],

  // Biografias & Memórias (2)
  ["Coração de Estudante: A Vida de Renato Russo", "Marisa Fernandes", "Biografias & Memórias"],
  ["Chico Buarque: Andante com Movimento", "Regina Zappa", "Biografias & Memórias"],
  ["Elis Regina: Uma Biografia", "Marília Barbosa", "Biografias & Memórias"],
  ["Ayrton Senna: O Herói Revelado", "Christian Fittipaldi", "Biografias & Memórias"],
  ["A Vida de Leonardo da Vinci", "Giorgio Vasari", "Biografias & Memórias"],
  ["Mandela: O Autorizado", "Anthony Sampson", "Biografias & Memórias"],
  ["Gandhi: Uma Autobiografia", "Mahatma Gandhi", "Biografias & Memórias"],
  ["Minha Vida", "Golda Meir", "Biografias & Memórias"],
  ["Autobiografia", "Charlie Chaplin", "Biografias & Memórias"],
  ["Diário de um Mago", "Paulo Coelho", "Biografias & Memórias"],
  ["Confissões de um Jovem Romancista", "Umberto Eco", "Biografias & Memórias"],

  // História & Filosofia (2)
  ["A Arte da Felicidade em Tempos de Crise", "Dalai Lama", "História & Filosofia"],
  ["O Banquete", "Platão", "História & Filosofia"],
  ["Apologia de Sócrates", "Platão", "História & Filosofia"],
  ["Metafísica", "Aristóteles", "História & Filosofia"],
  ["Política", "Aristóteles", "História & Filosofia"],
  ["Crítica da Razão Pura", "Immanuel Kant", "História & Filosofia"],
  ["Fundamentação da Metafísica dos Costumes", "Immanuel Kant", "História & Filosofia"],
  ["O Mundo como Vontade e Representação", "Arthur Schopenhauer", "História & Filosofia"],
  ["O Ser e o Tempo", "Martin Heidegger", "História & Filosofia"],
  ["O Ser e o Nada", "Jean-Paul Sartre", "História & Filosofia"],
  ["O Existencialismo é um Humanismo", "Jean-Paul Sartre", "História & Filosofia"],
  ["O Segundo Sexo", "Simone de Beauvoir", "História & Filosofia"],
  ["Uma Breve História do Brasil", "Boris Fausto", "História & Filosofia"],
  ["1808: Como uma Rainha Louca, um Príncipe Medroso e uma Corte Corrupta Enganaram Napoleão", "Laurentino Gomes", "História & Filosofia"],
  ["1822", "Laurentino Gomes", "História & Filosofia"],
  ["1889", "Laurentino Gomes", "História & Filosofia"],
  ["Sapiens em Quadrinhos", "Yuval Noah Harari", "História & Filosofia"],
  ["A História da Filosofia Ocidental", "Bertrand Russell", "História & Filosofia"],

  // Ciência (2)
  ["A Origem do Homem", "Charles Darwin", "Ciência"],
  ["Uma Breve História de Quase Tudo (edição ilustrada)", "Bill Bryson", "Ciência"],
  ["O Corpo Humano: Um Guia para Ocupantes", "Bill Bryson", "Ciência"],
  ["Seis Números Fundamentais", "Martin Rees", "Ciência"],
  ["A Vida 3.0 e o Futuro da Ciência", "Max Tegmark", "Ciência"],
  ["Os Três Primeiros Minutos", "Steven Weinberg", "Ciência"],
  ["QED: A Estranha Teoria da Luz e da Matéria", "Richard Feynman", "Ciência"],
  ["Está Brincando, Sr. Feynman?", "Richard Feynman", "Ciência"],
  ["O Que Você Se Importa com o que Pensam os Outros?", "Richard Feynman", "Ciência"],
  ["A Dupla Hélice", "James Watson", "Ciência"],
  ["Uma Nova História do Tempo", "Stephen Hawking e Leonard Mlodinow", "Ciência"],
  ["O Grande Projeto", "Stephen Hawking e Leonard Mlodinow", "Ciência"],
  ["Sob um Céu Cheio de Estrelas", "Carl Sagan", "Ciência"],
  ["Contato", "Carl Sagan", "Ciência"],

  // IA (Inteligência Artificial) (2)
  ["Human Compatible", "Stuart Russell", "IA (Inteligência Artificial)"],
  ["A IA que Vem Aí", "Kai-Fu Lee", "IA (Inteligência Artificial)"],
  ["Superpotências da Inteligência Artificial", "Kai-Fu Lee", "IA (Inteligência Artificial)"],
  ["A Era dos Robôs Inteligentes", "Martin Ford", "IA (Inteligência Artificial)"],
  ["Ascensão dos Robôs", "Martin Ford", "IA (Inteligência Artificial)"],
  ["Vida Artificial", "Steven Levy", "IA (Inteligência Artificial)"],
  ["A Sociedade da Mente", "Marvin Minsky", "IA (Inteligência Artificial)"],
  ["Máquinas de Amar e Ódio", "Kate Darling", "IA (Inteligência Artificial)"],

  // Tecnologia e Inovação (2)
  ["A Loja de Tudo: Jeff Bezos e a Era da Amazon", "Brad Stone", "Tecnologia e Inovação"],
  ["O Efeito Amazon", "Brad Stone", "Tecnologia e Inovação"],
  ["Sobreviventes do Vale do Silício", "Michael A. Cusumano", "Tecnologia e Inovação"],
  ["A Nova Divisão do Trabalho", "Frank Levy e Richard Murnane", "Tecnologia e Inovação"],
  ["O Futuro do Trabalho: Robôs, IA e Automação", "Darrell M. West", "Tecnologia e Inovação"],
  ["Isso Vai Mudar Tudo de Novo", "John Brockman", "Tecnologia e Inovação"],
  ["Como o Google Funciona", "Eric Schmidt e Jonathan Rosenberg", "Tecnologia e Inovação"],
  ["A Bíblia do Vale do Silício", "Steven Levy", "Tecnologia e Inovação"],

  // Saúde & Dieta (2)
  ["Por Que Dormimos Bem", "Matthew Walker", "Saúde & Dieta"],
  ["O Poder do Jejum", "Jason Fung", "Saúde & Dieta"],
  ["A Dieta da Longevidade", "Valter Longo", "Saúde & Dieta"],
  ["O Paradoxo Vegetal", "Steven Gundry", "Saúde & Dieta"],
  ["Come Gordura e Emagreça", "Mark Sisson", "Saúde & Dieta"],
  ["O Poder do Metabolismo Rápido", "Haylie Pomroy", "Saúde & Dieta"],
  ["Sal, Gordura, Ácido, Calor", "Samin Nosrat", "Saúde & Dieta"],
  ["Intestino Saudável, Vida Saudável", "Giulia Enders", "Saúde & Dieta"],
  ["A Barriga: Um Órgão Subestimado", "Giulia Enders", "Saúde & Dieta"],

  // 3X Fit (2)
  ["Corpo em Movimento", "Katy Bowman", "3X Fit"],
  ["Movimento é Vida", "Katy Bowman", "3X Fit"],
  ["Corrida Descalça: A Ciência por Trás", "Daniel Lieberman", "3X Fit"],
  ["A História do Corpo Humano", "Daniel Lieberman", "3X Fit"],
  ["Treino de Força para Todos", "Mark Rippetoe", "3X Fit"],
  ["Starting Strength", "Mark Rippetoe", "3X Fit"],
  ["Anatomia da Musculação", "Frédéric Delavier", "3X Fit"],
  ["Anatomia do Alongamento", "Frédéric Delavier", "3X Fit"],

  // Esportes (2)
  ["Vencedores: A Mentalidade dos Campeões", "Alastair Campbell", "Esportes"],
  ["A Mentalidade Olímpica", "Rasmus Ankersen", "Esportes"],
  ["O Método Alex Ferguson", "Alex Ferguson", "Esportes"],
  ["Liderando", "Alex Ferguson e Michael Moritz", "Esportes"],
  ["Bem Vindo à NBA", "Bill Simmons", "Esportes"],
  ["O Livro do Basquete", "Bill Simmons", "Esportes"],
  ["Muhammad Ali: Sua Vida e Seu Tempo", "Thomas Hauser", "Esportes"],
  ["A Vida de Usain Bolt", "Usain Bolt", "Esportes"],
  ["Uma Vida Correndo: Minha Autobiografia", "Mo Farah", "Esportes"],

  // Modo Copa (2)
  ["A Copa de 1958: A Consagração de um Gênio Chamado Pelé", "José Trajano", "Modo Copa"],
  ["A Taça do Mundo é Nossa", "Nelson Rodrigues", "Modo Copa"],
  ["O Negro no Futebol Brasileiro", "Mário Filho", "Modo Copa"],
  ["Futebol: Uma Paixão Nacional", "Alex Bellos", "Modo Copa"],
  ["Futebol: The Brazilian Way of Life", "Alex Bellos", "Modo Copa"],
  ["Zico: Autobiografia", "Zico", "Modo Copa"],
  ["Romário: Baixinho Autobiografia", "Romário", "Modo Copa"],

  // Sociedade & Política (2)
  ["O Antigo Regime e a Revolução", "Alexis de Tocqueville", "Sociedade & Política"],
  ["A Democracia na América", "Alexis de Tocqueville", "Sociedade & Política"],
  ["Sobre a Liberdade", "John Stuart Mill", "Sociedade & Política"],
  ["Utilitarismo", "John Stuart Mill", "Sociedade & Política"],
  ["O Manifesto Comunista", "Karl Marx e Friedrich Engels", "Sociedade & Política"],
  ["O Capital", "Karl Marx", "Sociedade & Política"],
  ["Uma Teoria da Justiça", "John Rawls", "Sociedade & Política"],
  ["O Choque do Presente", "Zygmunt Bauman", "Sociedade & Política"],
  ["Modernidade Líquida", "Zygmunt Bauman", "Sociedade & Política"],
  ["Medo Líquido", "Zygmunt Bauman", "Sociedade & Política"],
  ["Amor Líquido", "Zygmunt Bauman", "Sociedade & Política"],

  // Estilo de Vida (2)
  ["Wabi-Sabi: A Sabedoria Japonesa de Encontrar Beleza na Imperfeição", "Beth Kempton", "Estilo de Vida"],
  ["Kaizen: A Arte de Melhorar Pouco a Pouco", "Sarah Harvey", "Estilo de Vida"],
  ["Friluftsliv: O Amor Nórdico pela Vida ao Ar Livre", "Linda Åkeson McGurk", "Estilo de Vida"],
  ["A Vida Simples", "Cecile Andrews", "Estilo de Vida"],
  ["Menos é Mais", "Cecile Andrews", "Estilo de Vida"],
  ["Digital Minimalism", "Cal Newport", "Estilo de Vida"],
  ["Desconectar para Reconectar", "Cal Newport", "Estilo de Vida"],

  // Recomeço de Ano (2)
  ["A Arte de Recomeçar", "Julia Cameron", "Recomeço de Ano"],
  ["O Caminho do Artista", "Julia Cameron", "Recomeço de Ano"],
  ["Recomece: Como Transformar Fracassos em Vitórias", "John C. Maxwell", "Recomeço de Ano"],
  ["De Onde Você Está para Onde Quer Ir", "John C. Maxwell", "Recomeço de Ano"],
  ["A Jornada de 90 Dias", "Michael Watkins", "Recomeço de Ano"],
  ["Os Primeiros 90 Dias", "Michael Watkins", "Recomeço de Ano"],

  // Hackeando o ENEM (2)
  ["Como Passar em Provas e Concursos", "Alessandro Zamperlini", "Hackeando o ENEM"],
  ["Aprender a Aprender na Prática", "Barbara Oakley e Terrence Sejnowski", "Hackeando o ENEM"],
  ["A Ciência de Aprender Rápido", "Scott Young", "Hackeando o ENEM"],
  ["Ultralearning", "Scott Young", "Hackeando o ENEM"],
  ["Make It Stick: A Ciência da Aprendizagem Bem-Sucedida", "Peter Brown, Henry Roediger e Mark McDaniel", "Hackeando o ENEM"],
  ["Estudar Sem Sofrer", "Marcos Zortea", "Hackeando o ENEM"],

  // Do Fundo do Baú (2)
  ["Ética a Nicômaco: Edição Comentada", "Aristóteles", "Do Fundo do Baú"],
  ["A Divina Comédia", "Dante Alighieri", "Do Fundo do Baú"],
  ["Dom Quixote", "Miguel de Cervantes", "Do Fundo do Baú"],
  ["Os Lusíadas", "Luís de Camões", "Do Fundo do Baú"],
  ["Fausto", "Johann Wolfgang von Goethe", "Do Fundo do Baú"],
  ["Utopia", "Thomas More", "Do Fundo do Baú"],
  ["O Banquete de Platão: Edição Comentada", "Platão", "Do Fundo do Baú"],

  // Radar 3X (2)
  ["Determinação: O Poder da Paixão e da Perseverança", "Angela Duckworth", "Radar 3X"],
  ["Nunca Divida a Diferença: Negociação de Alto Risco", "Chris Voss", "Radar 3X"],
  ["Storybrand: Como Toda Marca Deveria Contar Sua História", "Donald Miller", "Radar 3X"],
  ["Indistractable", "Nir Eyal", "Radar 3X"],
  ["Digital Minimalism: Foco em um Mundo Ruidoso", "Cal Newport", "Radar 3X"],
  ["Ultralearning: Domine Habilidades Difíceis", "Scott Young", "Radar 3X"],

  // ─── Terceiro lote — reforço nas categorias mais enxutas ───

  // Radar 3X (+10)
  ["Outlive: A Ciência da Longevidade", "Peter Attia", "Radar 3X"],
  ["A Psicologia do Dinheiro", "Morgan Housel", "Radar 3X"],
  ["Mesmo que Seja Difícil", "Morgan Housel", "Radar 3X"],
  ["O Jogo Interior do Trabalho", "Timothy Gallwey", "Radar 3X"],
  ["Grit: Determinação e Paixão", "Angela Duckworth", "Radar 3X"],
  ["A Arte de Amar em Tempos Modernos", "Esther Perel", "Radar 3X"],
  ["Como Ter Ideias que Colam", "Chip Heath e Dan Heath", "Radar 3X"],
  ["Mudar é Preciso", "Chip Heath e Dan Heath", "Radar 3X"],
  ["Decisões Inteligentes", "Chip Heath e Dan Heath", "Radar 3X"],
  ["Momentos Marcantes", "Chip Heath e Dan Heath", "Radar 3X"],

  // Recomeço de Ano (+10)
  ["O Poder do Recomeço", "John C. Maxwell", "Recomeço de Ano"],
  ["Como Vencer o Medo de Recomeçar", "Susan Jeffers", "Recomeço de Ano"],
  ["Sinta o Medo e Faça de Qualquer Jeito", "Susan Jeffers", "Recomeço de Ano"],
  ["Transições: Como Lidar com Mudanças na Vida", "William Bridges", "Recomeço de Ano"],
  ["Gerenciando Transições", "William Bridges", "Recomeço de Ano"],
  ["Recomeços: Histórias Reais de Superação", "Martha Medeiros", "Recomeço de Ano"],
  ["Ainda Fico Tão Feliz com Cada Página em Branco", "Martha Medeiros", "Recomeço de Ano"],
  ["Todo Dia é Segunda-Feira", "Sérgio Sant'Anna", "Recomeço de Ano"],
  ["Recomeçar Depois da Perda", "Elisabeth Kübler-Ross", "Recomeço de Ano"],
  ["Sobre a Morte e o Morrer", "Elisabeth Kübler-Ross", "Recomeço de Ano"],

  // Hackeando o ENEM (+10)
  ["Redação Coringa", "Marcelo Damasceno", "Hackeando o ENEM"],
  ["Gramática Descomplicada", "Evanildo Bechara", "Hackeando o ENEM"],
  ["Interpretação de Texto para Concursos", "Renato Aquino", "Hackeando o ENEM"],
  ["Como Ler Mais Rápido e Entender Melhor", "Tony Buzan", "Hackeando o ENEM"],
  ["Mapas Mentais", "Tony Buzan", "Hackeando o ENEM"],
  ["Use a Cabeça", "Tony Buzan", "Hackeando o ENEM"],
  ["Como Estudar Sozinho", "Nuno Cobra", "Hackeando o ENEM"],
  ["A Concentração Total", "Nuno Cobra", "Hackeando o ENEM"],
  ["Redação Nota Mil: Método Passo a Passo", "Adriana Aguiar", "Hackeando o ENEM"],

  // Sexo & Relacionamentos (+10)
  ["Mating in Captivity", "Esther Perel", "Sexo & Relacionamentos"],
  ["A Química do Amor", "Helen Fisher", "Sexo & Relacionamentos"],
  ["Por Que Ele Faz Isso?", "Lundy Bancroft", "Sexo & Relacionamentos"],
  ["Códigos de Amor", "Gary Chapman", "Sexo & Relacionamentos"],
  ["As Cinco Linguagens do Amor para Solteiros", "Gary Chapman", "Sexo & Relacionamentos"],
  ["Relacionamentos que Duram", "John Gottman", "Sexo & Relacionamentos"],
  ["A Ciência da Confiança", "John Gottman", "Sexo & Relacionamentos"],
  ["O Casamento Nos Primeiros Anos", "John Gottman e Nan Silver", "Sexo & Relacionamentos"],
  ["Amor 2.0", "Barbara Fredrickson", "Sexo & Relacionamentos"],
  ["Vínculos Afetivos", "John Bowlby", "Sexo & Relacionamentos"],

  // 3X Fit (+8)
  ["A Ciência de Ficar em Forma", "Christie Aschwanden", "3X Fit"],
  ["Boa Forma para a Vida Toda", "Kelly Starrett", "3X Fit"],
  ["Torne-se um Corredor Melhor", "Matt Fitzgerald", "3X Fit"],
  ["Como Correr Sua Primeira Maratona", "Hal Higdon", "3X Fit"],
  ["O Manual Completo de Musculação", "Frédéric Delavier", "3X Fit"],
  ["Yoga para Iniciantes", "Judith Lasater", "3X Fit"],
  ["Pilates: A Arte do Controle", "Joseph Pilates", "3X Fit"],
  ["Retorno à Vida pela Contrologia", "Joseph Pilates", "3X Fit"],

  // Modo Copa (+8)
  ["Copa 70: A História Contada por Quem Fez", "Juca Kfouri", "Modo Copa"],
  ["Anatomia de uma Derrota: O 7 a 1", "Juca Kfouri", "Modo Copa"],
  ["Craque: A Vida de Garrincha", "Ruy Castro", "Modo Copa"],
  ["Maracanã: Templo dos Deuses do Futebol", "Roberto Assaf", "Modo Copa"],
  ["A História das Copas do Mundo", "Roberto Assaf", "Modo Copa"],
  ["Neymar: A Trajetória de um Fenômeno", "Vinicius Capelossa", "Modo Copa"],
  ["Cristiano Ronaldo: A Biografia", "Guillem Balague", "Modo Copa"],
  ["Messi", "Guillem Balague", "Modo Copa"],

  // 3X Personalities (+6)
  ["A Autobiografia de Bill Gates", "Bill Gates", "3X Personalities"],
  ["Como Evitar um Desastre Climático", "Bill Gates", "3X Personalities"],
  ["A Vida de Warren Buffett", "Alice Schroeder", "3X Personalities"],
  ["A Bola de Neve: Warren Buffett e o Negócio da Vida", "Alice Schroeder", "3X Personalities"],
  ["Oprah: Uma Biografia", "Kitty Kelley", "3X Personalities"],
];

/*
  Expande os stubs em objetos no mesmo formato dos resumos completos
  (id, title, author, category, readTimeMin, premium, coverIcon, synopsis
  vazia, chapters/quiz vazios). O front-end (BookDetailScreen, BookCard)
  já sabe renderizar "Em breve" quando chapters.length === 0.
*/
function slugifyTitle(title, index) {
  const base = title
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `cat-${base}-${index}`;
}

window.CATALOG_BOOKS = window.CATALOG_STUBS.map(([title, author, category], index) => ({
  id: slugifyTitle(title, index),
  title,
  author: `Baseado na obra de ${author}`,
  category,
  readTimeMin: 11 + (index % 9),
  premium: true,
  coverIcon: window.CATEGORY_ICONS[category] || "bookOpen",
  synopsis: null,
  chapters: [],
  quiz: [],
}));

window.BOOKS = window.BOOKS.concat(window.CATALOG_BOOKS);
