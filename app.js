(() => {
  'use strict';

  const STORAGE_KEY = 'tjsp-estudos-v1';
  const THEME_KEY = 'tjsp-estudos-theme';

  const curriculum = [
    {
      id: 'portugues', icon: 'PT', name: 'Língua Portuguesa', questions: 16, block: 'Bloco I',
      topics: [
        'Análise, compreensão e interpretação de diversos tipos de textos verbais, não verbais, literários e não literários.',
        'Informações literais e inferências possíveis.',
        'Ponto de vista do autor.',
        'Estruturação do texto: relações entre ideias; recursos de coesão.',
        'Significação contextual de palavras e expressões.',
        'Sinônimos e antônimos.',
        'Sentido próprio e figurado das palavras.',
        'Classes de palavras: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição e conjunção; emprego e sentido nas relações que estabelecem.',
        'Concordância verbal e nominal.',
        'Regência verbal e nominal.',
        'Colocação pronominal.',
        'Crase.',
        'Pontuação.'
      ]
    },
    {
      id: 'direito-penal', icon: 'DP', name: 'Direito Penal', questions: null, block: 'Bloco II',
      topics: [
        'Código Penal: artigos 293 a 305.',
        'Código Penal: artigos 307 e 308.',
        'Código Penal: artigo 311-A.',
        'Código Penal: artigos 312 a 317.',
        'Código Penal: artigos 319 a 333.',
        'Código Penal: artigos 336 e 337.',
        'Código Penal: artigos 339 a 347.',
        'Código Penal: artigos 357 e 359.'
      ]
    },
    {
      id: 'processual-penal', icon: 'PP', name: 'Direito Processual Penal', questions: null, block: 'Bloco II',
      topics: [
        'Código de Processo Penal: artigos 251 a 258.',
        'Código de Processo Penal: artigos 261 a 267.',
        'Código de Processo Penal: artigo 274.',
        'Código de Processo Penal: artigos 351 a 372.',
        'Código de Processo Penal: artigos 394 a 497.',
        'Código de Processo Penal: artigos 531 a 538.',
        'Código de Processo Penal: artigos 541 a 548.',
        'Código de Processo Penal: artigos 574 a 667.',
        'Lei nº 9.099/1995: artigos 60 a 83, 88 e 89.'
      ]
    },
    {
      id: 'processual-civil', icon: 'PC', name: 'Direito Processual Civil', questions: null, block: 'Bloco II',
      topics: [
        'Código de Processo Civil: artigos 144 a 155.',
        'Código de Processo Civil: artigos 188 a 275.',
        'Código de Processo Civil: artigos 294 a 311.',
        'Código de Processo Civil: artigos 318 a 538.',
        'Código de Processo Civil: artigos 994 a 1026.',
        'Lei nº 9.099/1995: artigos 3º ao 19.',
        'Lei nº 12.153/2009.'
      ]
    },
    {
      id: 'constitucional', icon: 'CF', name: 'Direito Constitucional', questions: null, block: 'Bloco II',
      topics: [
        'Constituição Federal: Título II, Capítulo I.',
        'Constituição Federal: Título II, Capítulo II.',
        'Constituição Federal: Título II, Capítulo III.',
        'Constituição Federal: Título III, Capítulo VII, Seção I.',
        'Constituição Federal: Título III, Capítulo VII, Seção II.',
        'Constituição Federal: artigo 92.'
      ]
    },
    {
      id: 'administrativo', icon: 'DA', name: 'Direito Administrativo', questions: null, block: 'Bloco II',
      topics: [
        'Lei Estadual nº 10.261/1968 (Estatuto dos Funcionários Públicos Civis do Estado de São Paulo): artigos 1º a 86.',
        'Lei Estadual nº 10.261/1968: artigos 171 a 175.',
        'Lei Estadual nº 10.261/1968: artigos 239 a 323.',
        'Lei Federal nº 8.429/1992 (Lei de Improbidade Administrativa).'
      ]
    },
    {
      id: 'legislacao-interna', icon: 'TJ', name: 'Legislação Interna do TJSP', questions: null, block: 'Bloco II',
      topics: [
        'Resolução TJSP nº 850/2021: teletrabalho no âmbito do Tribunal de Justiça do Estado de São Paulo.',
        'Resolução TJSP nº 963/2025: governança e utilização do sistema eproc.',
        'Lei Complementar nº 1.111/2010: Plano de Cargos e Carreiras dos servidores do TJSP.',
        'Regimento Interno do Tribunal de Justiça do Estado de São Paulo.',
        'Normas da Corregedoria Geral da Justiça - Tomo I, Capítulo II, Seção I, subseções I e II.',
        'Normas da Corregedoria Geral da Justiça - Tomo I, Capítulo III, Seções I, II, V, VI e VII.',
        'Normas da Corregedoria Geral da Justiça - Tomo I, Capítulo III, Seção VIII, subseções I, II e III.',
        'Normas da Corregedoria Geral da Justiça - Tomo I, Capítulo III, Seções IX a XIX.',
        'Normas da Corregedoria Geral da Justiça - Tomo I, Capítulo XI, Seções I a VII.'
      ]
    },
    {
      id: 'atualidades', icon: 'AT', name: 'Atualidades', questions: 4, block: 'Bloco III',
      topics: [
        'Fatos políticos, econômicos, sociais e culturais, nacionais e internacionais, ocorridos a partir do 1º semestre de 2026 e divulgados na mídia local e/ou nacional.',
        'Lei nº 13.146/2015 - Estatuto da Pessoa com Deficiência: artigos 1º ao 13.',
        'Lei nº 13.146/2015 - Estatuto da Pessoa com Deficiência: artigos 34 ao 38.'
      ]
    },
    {
      id: 'matematica', icon: '∑', name: 'Matemática', questions: 4, block: 'Bloco III',
      topics: [
        'Operações com números reais.',
        'Mínimo múltiplo comum e máximo divisor comum.',
        'Razão e proporção.',
        'Porcentagem.',
        'Regra de três simples e composta.',
        'Média aritmética simples e ponderada.',
        'Juros simples.',
        'Equação do 1º e 2º graus.',
        'Sistema de equações do 1º grau.',
        'Relação entre grandezas: tabelas e gráficos.',
        'Sistemas de medidas usuais.',
        'Noções de geometria: forma, perímetro, área, volume, ângulo e teorema de Pitágoras.',
        'Resolução de situações-problema.'
      ]
    },
    {
      id: 'informatica', icon: 'TI', name: 'Informática', questions: 9, block: 'Bloco III',
      topics: [
        'MS-Windows 10 ou superior: pastas, diretórios, arquivos, atalhos, área de trabalho, área de transferência, manipulação de arquivos e pastas, menus, programas e aplicativos.',
        'MS-Word / Microsoft 365: estrutura de documentos, edição e formatação, cabeçalhos, parágrafos, fontes, colunas, marcadores, tabelas, impressão, quebras, numeração de páginas, legendas, índices, objetos, campos predefinidos e caixas de texto.',
        'MS-Excel / Microsoft 365: estrutura de planilhas, células, linhas, colunas, pastas e gráficos; tabelas e gráficos; fórmulas, funções e macros; impressão; objetos; campos predefinidos; quebras e numeração de páginas; dados externos e classificação de dados.',
        'Correio eletrônico: uso, preparo e envio de mensagens e anexação de arquivos.',
        'Internet: navegação, URL, links, sites, busca e impressão de páginas.',
        'MS Teams: chats, chamadas de áudio e vídeo, grupos, trabalho em equipe com Word, Excel, PowerPoint, SharePoint e OneNote, agendamento de reuniões e gravação.',
        'OneDrive: armazenamento e compartilhamento de arquivos.'
      ]
    },
    {
      id: 'raciocinio-logico', icon: 'RL', name: 'Raciocínio Lógico', questions: 7, block: 'Bloco III',
      topics: [
        'Estrutura lógica de relações arbitrárias entre pessoas, lugares, coisas e eventos fictícios.',
        'Dedução de novas informações a partir das relações fornecidas e avaliação das condições usadas para estabelecer essas relações.',
        'Regularidades de sequências numéricas ou figurais e identificação de elemento em determinada posição.',
        'Estruturas lógicas.',
        'Lógica de argumentação.',
        'Diagramas lógicos.',
        'Sequências.'
      ]
    },
    {
      id: 'redacao', icon: '✎', name: 'Redação', questions: null, block: 'Prova discursiva',
      topics: [
        'Tema: atender integralmente ao tema proposto.',
        'Estrutura e coerência: produzir texto dissertativo-argumentativo em prosa, com tese, introdução, desenvolvimento, conclusão, argumentos pertinentes e encadeamento lógico.',
        'Língua: norma-padrão, concordância, regência, ortografia, acentuação, pontuação, precisão vocabular e registro formal.',
        'Coesão: emprego adequado de recursos coesivos, conectivos, paragrafação e articulação entre palavras, orações, períodos e parágrafos.',
        'Treinar produção dentro do tempo total de prova: objetiva e redação serão aplicadas no mesmo período, com duração máxima conjunta de 5 horas.'
      ]
    }
  ];

  const state = loadState();
  let currentFilter = 'all';
  let currentSearch = '';
  let flashcardSearchTerm = '';
  let reviewState = { folderId: null, order: [], index: 0, flipped: false };

  const subjectList = document.getElementById('subjectList');
  const subjectTemplate = document.getElementById('subjectTemplate');
  const topicTemplate = document.getElementById('topicTemplate');
  const searchInput = document.getElementById('searchInput');
  const topicCounter = document.getElementById('topicCounter');
  const overallPct = document.getElementById('overallPct');
  const progressRing = document.getElementById('progressRing');
  const countdown = document.getElementById('countdown');
  const statusMessage = document.getElementById('statusMessage');
  const flashcardFolderList = document.getElementById('flashcardFolderList');
  const flashcardCounter = document.getElementById('flashcardCounter');
  const flashcardSearch = document.getElementById('flashcardSearch');
  const folderForm = document.getElementById('folderForm');
  const folderNameInput = document.getElementById('folderNameInput');
  const reviewPanel = document.getElementById('reviewPanel');

  function emptyState() {
    return { completed: {}, notes: {}, openSubjects: {}, flashcardFolders: [], openFlashcardFolders: {} };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyState();
      const parsed = JSON.parse(raw);
      return {
        completed: parsed.completed && typeof parsed.completed === 'object' ? parsed.completed : {},
        notes: parsed.notes && typeof parsed.notes === 'object' ? parsed.notes : {},
        openSubjects: parsed.openSubjects && typeof parsed.openSubjects === 'object' ? parsed.openSubjects : {},
        flashcardFolders: Array.isArray(parsed.flashcardFolders) ? parsed.flashcardFolders : [],
        openFlashcardFolders: parsed.openFlashcardFolders && typeof parsed.openFlashcardFolders === 'object' ? parsed.openFlashcardFolders : {}
      };
    } catch (_) {
      return emptyState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function topicKey(subjectId, index) { return `${subjectId}::${index}`; }
  function allTopics() { return curriculum.flatMap(s => s.topics.map((topic, i) => ({ subject: s, topic, index: i, key: topicKey(s.id, i) }))); }

  function subjectStats(subject) {
    const total = subject.topics.length;
    const done = subject.topics.reduce((sum, _, i) => sum + (state.completed[topicKey(subject.id, i)] ? 1 : 0), 0);
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function matches(topic, subject, index) {
    const done = !!state.completed[topicKey(subject.id, index)];
    const filterMatch = currentFilter === 'all' || (currentFilter === 'done' && done) || (currentFilter === 'pending' && !done);
    const needle = currentSearch.trim().toLocaleLowerCase('pt-BR');
    const searchMatch = !needle || `${subject.name} ${subject.block} ${topic}`.toLocaleLowerCase('pt-BR').includes(needle);
    return filterMatch && searchMatch;
  }

  function render() {
    subjectList.innerHTML = '';
    let visibleTopics = 0;
    let visibleSubjects = 0;

    for (const subject of curriculum) {
      const visible = subject.topics.map((topic, i) => ({ topic, index: i })).filter(x => matches(x.topic, subject, x.index));
      if (!visible.length) continue;
      visibleSubjects += 1;
      visibleTopics += visible.length;

      const card = subjectTemplate.content.firstElementChild.cloneNode(true);
      const header = card.querySelector('.subject-header');
      const body = card.querySelector('.subject-body');
      const list = card.querySelector('.topic-list');
      const icon = card.querySelector('.subject-icon');
      const stats = subjectStats(subject);
      const explicitQuestionText = subject.questions ? `${subject.questions} questões` : (subject.block === 'Bloco II' ? '30 questões no bloco de Direito' : subject.block);

      icon.textContent = subject.icon;
      card.querySelector('h3').textContent = subject.name;
      card.querySelector('.subject-meta').textContent = `${subject.block} • ${explicitQuestionText} • ${stats.done}/${stats.total} tópicos`;
      card.querySelector('.subject-pct').textContent = `${stats.pct}%`;
      card.querySelector('.progress-track span').style.width = `${stats.pct}%`;

      const shouldOpen = !!state.openSubjects[subject.id] || !!currentSearch || currentFilter !== 'all';
      header.setAttribute('aria-expanded', String(shouldOpen));
      body.hidden = !shouldOpen;

      header.addEventListener('click', () => {
        const expanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', String(!expanded));
        body.hidden = expanded;
        state.openSubjects[subject.id] = !expanded;
        saveState();
      });

      for (const { topic, index } of visible) {
        const key = topicKey(subject.id, index);
        const item = topicTemplate.content.firstElementChild.cloneNode(true);
        const checkbox = item.querySelector('input[type="checkbox"]');
        const topicText = item.querySelector('.topic-text');
        const noteToggle = item.querySelector('.note-toggle');
        const noteBox = item.querySelector('.note-box');
        const textarea = item.querySelector('textarea');

        checkbox.checked = !!state.completed[key];
        topicText.textContent = topic;
        item.classList.toggle('is-done', checkbox.checked);
        textarea.value = state.notes[key] || '';
        noteToggle.classList.toggle('has-note', !!textarea.value.trim());

        checkbox.addEventListener('change', () => {
          state.completed[key] = checkbox.checked;
          item.classList.toggle('is-done', checkbox.checked);
          saveState();
          updateProgressOnly();
          updateCardStats(card, subject);
          if (currentFilter !== 'all') render();
        });

        noteToggle.addEventListener('click', () => {
          noteBox.hidden = !noteBox.hidden;
          if (!noteBox.hidden) textarea.focus();
        });

        textarea.addEventListener('input', () => {
          state.notes[key] = textarea.value;
          noteToggle.classList.toggle('has-note', !!textarea.value.trim());
          saveState();
        });

        list.appendChild(item);
      }

      subjectList.appendChild(card);
    }

    if (!visibleSubjects) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = 'Nenhum tópico encontrado com este filtro.';
      subjectList.appendChild(empty);
    }

    topicCounter.textContent = `${visibleTopics}/${allTopics().length}`;
    updateProgressOnly();
  }

  function updateCardStats(card, subject) {
    const stats = subjectStats(subject);
    const explicitQuestionText = subject.questions ? `${subject.questions} questões` : (subject.block === 'Bloco II' ? '30 questões no bloco de Direito' : subject.block);
    card.querySelector('.subject-meta').textContent = `${subject.block} • ${explicitQuestionText} • ${stats.done}/${stats.total} tópicos`;
    card.querySelector('.subject-pct').textContent = `${stats.pct}%`;
    card.querySelector('.progress-track span').style.width = `${stats.pct}%`;
  }

  function updateProgressOnly() {
    const topics = allTopics();
    const done = topics.reduce((sum, t) => sum + (state.completed[t.key] ? 1 : 0), 0);
    const pct = topics.length ? Math.round((done / topics.length) * 100) : 0;
    overallPct.textContent = `${pct}%`;
    progressRing.style.setProperty('--progress', `${pct * 3.6}deg`);
  }

  function updateCountdown() {
    const now = new Date();
    const exam = new Date(2027, 2, 14, 12, 0, 0);
    const diff = exam - now;
    if (diff <= 0) {
      countdown.textContent = 'Data prevista da prova alcançada.';
      return;
    }
    const days = Math.ceil(diff / 86400000);
    countdown.textContent = `${days} ${days === 1 ? 'dia' : 'dias'} até a prova`;
  }

  function showStatus(message, isError = false) {
    statusMessage.textContent = message;
    statusMessage.style.color = isError ? 'var(--danger)' : 'var(--success)';
    window.setTimeout(() => { if (statusMessage.textContent === message) statusMessage.textContent = ''; }, 4500);
  }

  function makeId(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') return `${prefix}-${window.crypto.randomUUID()}`;
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function totalFlashcards() {
    return state.flashcardFolders.reduce((sum, folder) => sum + (Array.isArray(folder.cards) ? folder.cards.length : 0), 0);
  }

  function normalizeFlashcardFolders() {
    state.flashcardFolders = (Array.isArray(state.flashcardFolders) ? state.flashcardFolders : []).map(folder => ({
      id: typeof folder.id === 'string' && folder.id ? folder.id : makeId('folder'),
      name: typeof folder.name === 'string' && folder.name.trim() ? folder.name.trim() : 'Matéria sem nome',
      cards: (Array.isArray(folder.cards) ? folder.cards : []).map(card => ({
        id: typeof card.id === 'string' && card.id ? card.id : makeId('card'),
        theme: typeof card.theme === 'string' ? card.theme : '',
        remember: typeof card.remember === 'string' ? card.remember : ''
      })).filter(card => card.theme.trim() || card.remember.trim())
    }));
    if (!state.openFlashcardFolders || typeof state.openFlashcardFolders !== 'object') state.openFlashcardFolders = {};
  }

  function findFlashcardFolder(folderId) {
    return state.flashcardFolders.find(folder => folder.id === folderId) || null;
  }

  function flashcardMatches(card, folderName) {
    const needle = flashcardSearchTerm.trim().toLocaleLowerCase('pt-BR');
    if (!needle) return true;
    return `${folderName} ${card.theme} ${card.remember}`.toLocaleLowerCase('pt-BR').includes(needle);
  }

  function createButton(text, className, action) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = text;
    btn.className = className;
    btn.addEventListener('click', action);
    return btn;
  }

  function renderFlashcards() {
    normalizeFlashcardFolders();
    flashcardFolderList.innerHTML = '';

    const total = totalFlashcards();
    const folderCount = state.flashcardFolders.length;
    flashcardCounter.textContent = folderCount ? `${folderCount} ${folderCount === 1 ? 'pasta' : 'pastas'} • ${total} ${total === 1 ? 'cartão' : 'cartões'}` : '0 cartões';

    const needle = flashcardSearchTerm.trim().toLocaleLowerCase('pt-BR');
    const visibleFolders = state.flashcardFolders.filter(folder => {
      if (!needle) return true;
      if (folder.name.toLocaleLowerCase('pt-BR').includes(needle)) return true;
      return folder.cards.some(card => flashcardMatches(card, folder.name));
    });

    if (!visibleFolders.length) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = folderCount ? 'Nenhum flashcard encontrado com essa busca.' : 'Nenhuma pasta criada ainda. Crie uma pasta para a primeira matéria.';
      flashcardFolderList.appendChild(empty);
      renderReview();
      return;
    }

    for (const folder of visibleFolders) {
      const article = document.createElement('article');
      article.className = 'flash-folder';

      const header = document.createElement('button');
      header.type = 'button';
      header.className = 'flash-folder-header';
      const isOpen = !!state.openFlashcardFolders[folder.id] || !!needle;
      header.setAttribute('aria-expanded', String(isOpen));

      const titleWrap = document.createElement('div');
      titleWrap.className = 'flash-folder-title';
      const icon = document.createElement('div');
      icon.className = 'flash-folder-icon';
      icon.textContent = '▣';
      const titleText = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.textContent = folder.name;
      const meta = document.createElement('p');
      meta.textContent = `${folder.cards.length} ${folder.cards.length === 1 ? 'flashcard' : 'flashcards'}`;
      titleText.append(h3, meta);
      titleWrap.append(icon, titleText);
      const chevron = document.createElement('span');
      chevron.className = 'chevron';
      chevron.textContent = '⌄';
      header.append(titleWrap, chevron);

      const body = document.createElement('div');
      body.className = 'flash-folder-body';
      body.hidden = !isOpen;

      header.addEventListener('click', () => {
        const expanded = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', String(!expanded));
        body.hidden = expanded;
        state.openFlashcardFolders[folder.id] = !expanded;
        saveState();
      });

      const actions = document.createElement('div');
      actions.className = 'folder-actions';
      const studyBtn = createButton('▶ Estudar pasta', 'btn primary study-folder-btn', () => startFolderReview(folder.id));
      studyBtn.disabled = folder.cards.length === 0;
      if (studyBtn.disabled) studyBtn.title = 'Adicione pelo menos um flashcard.';
      actions.append(
        studyBtn,
        createButton('Renomear', 'btn secondary', () => renameFolder(folder.id)),
        createButton('Excluir pasta', 'btn secondary', () => deleteFolder(folder.id))
      );
      body.appendChild(actions);

      const grid = document.createElement('div');
      grid.className = 'flashcard-grid';
      const visibleCards = needle ? folder.cards.filter(card => flashcardMatches(card, folder.name)) : folder.cards;

      if (!visibleCards.length) {
        const empty = document.createElement('div');
        empty.className = 'folder-empty';
        empty.textContent = folder.cards.length ? 'Nenhum cartão desta pasta corresponde à busca.' : 'Esta pasta ainda não tem flashcards.';
        grid.appendChild(empty);
      }

      for (const card of visibleCards) {
        const entry = document.createElement('div');
        entry.className = 'flashcard-entry';
        const flip = document.createElement('button');
        flip.type = 'button';
        flip.className = 'flashcard-flip';
        flip.setAttribute('aria-label', 'Virar flashcard');

        const kicker = document.createElement('span');
        kicker.className = 'flashcard-kicker';
        kicker.textContent = 'TEMA';
        const content = document.createElement('strong');
        content.className = 'flashcard-content';
        content.textContent = card.theme || '(sem tema)';
        const hint = document.createElement('small');
        hint.textContent = 'Toque para ver o que devo lembrar';
        flip.append(kicker, content, hint);

        let flipped = false;
        flip.addEventListener('click', () => {
          flipped = !flipped;
          entry.classList.toggle('is-flipped', flipped);
          kicker.textContent = flipped ? 'O QUE DEVO LEMBRAR' : 'TEMA';
          content.textContent = flipped ? (card.remember || '(sem conteúdo)') : (card.theme || '(sem tema)');
          hint.textContent = flipped ? 'Toque para voltar ao tema' : 'Toque para ver o que devo lembrar';
        });

        const itemActions = document.createElement('div');
        itemActions.className = 'flashcard-item-actions';
        itemActions.append(
          createButton('Editar', '', () => editFlashcard(folder.id, card.id)),
          createButton('Excluir', '', () => deleteFlashcard(folder.id, card.id))
        );
        entry.append(flip, itemActions);
        grid.appendChild(entry);
      }

      body.appendChild(grid);

      const addBtn = createButton('+ Adicionar flashcard', 'add-card-btn', () => showCardForm(body, folder.id, addBtn));
      body.appendChild(addBtn);

      article.append(header, body);
      flashcardFolderList.appendChild(article);
    }

    renderReview();
  }

  function showCardForm(folderBody, folderId, triggerButton) {
    if (folderBody.querySelector('.card-form')) return;
    triggerButton.hidden = true;

    const form = document.createElement('form');
    form.className = 'inline-form card-form';

    const themeLabel = document.createElement('label');
    const themeSpan = document.createElement('span');
    themeSpan.textContent = 'Tema';
    const themeInput = document.createElement('input');
    themeInput.type = 'text';
    themeInput.maxLength = 180;
    themeInput.placeholder = 'Ex.: Peculato — art. 312 do Código Penal';
    themeInput.required = true;
    themeLabel.append(themeSpan, themeInput);

    const rememberLabel = document.createElement('label');
    rememberLabel.style.marginTop = '10px';
    const rememberSpan = document.createElement('span');
    rememberSpan.textContent = 'O que devo lembrar';
    const rememberInput = document.createElement('textarea');
    rememberInput.maxLength = 1200;
    rememberInput.placeholder = 'Escreva a definição, regra, exceção, artigo, macete ou ponto que precisa memorizar.';
    rememberInput.required = true;
    rememberLabel.append(rememberSpan, rememberInput);

    const formActions = document.createElement('div');
    formActions.className = 'inline-form-actions';
    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.className = 'btn primary';
    saveBtn.textContent = 'Salvar flashcard';
    const cancelBtn = createButton('Cancelar', 'btn secondary', () => {
      form.remove();
      triggerButton.hidden = false;
    });
    formActions.append(saveBtn, cancelBtn);
    form.append(themeLabel, rememberLabel, formActions);

    form.addEventListener('submit', event => {
      event.preventDefault();
      const theme = themeInput.value.trim();
      const remember = rememberInput.value.trim();
      if (!theme || !remember) return;
      const folder = findFlashcardFolder(folderId);
      if (!folder) return;
      folder.cards.push({ id: makeId('card'), theme, remember });
      state.openFlashcardFolders[folderId] = true;
      saveState();
      renderFlashcards();
    });

    folderBody.appendChild(form);
    themeInput.focus();
  }

  function createFolder(name) {
    const cleaned = name.trim();
    if (!cleaned) return;
    const folder = { id: makeId('folder'), name: cleaned, cards: [] };
    state.flashcardFolders.push(folder);
    state.openFlashcardFolders[folder.id] = true;
    saveState();
    renderFlashcards();
  }

  function renameFolder(folderId) {
    const folder = findFlashcardFolder(folderId);
    if (!folder) return;
    const name = window.prompt('Novo nome da matéria/pasta:', folder.name);
    if (name === null) return;
    const cleaned = name.trim();
    if (!cleaned) return;
    folder.name = cleaned.slice(0, 80);
    saveState();
    renderFlashcards();
  }

  function deleteFolder(folderId) {
    const folder = findFlashcardFolder(folderId);
    if (!folder) return;
    const count = folder.cards.length;
    const ok = window.confirm(`Excluir a pasta “${folder.name}”${count ? ` e seus ${count} flashcard${count === 1 ? '' : 's'}` : ''}?`);
    if (!ok) return;
    state.flashcardFolders = state.flashcardFolders.filter(item => item.id !== folderId);
    delete state.openFlashcardFolders[folderId];
    if (reviewState.folderId === folderId) closeReview();
    saveState();
    renderFlashcards();
  }

  function editFlashcard(folderId, cardId) {
    const folder = findFlashcardFolder(folderId);
    if (!folder) return;
    const card = folder.cards.find(item => item.id === cardId);
    if (!card) return;
    const theme = window.prompt('Tema do flashcard:', card.theme);
    if (theme === null) return;
    const cleanedTheme = theme.trim();
    if (!cleanedTheme) return;
    const remember = window.prompt('O que devo lembrar:', card.remember);
    if (remember === null) return;
    const cleanedRemember = remember.trim();
    if (!cleanedRemember) return;
    card.theme = cleanedTheme.slice(0, 180);
    card.remember = cleanedRemember.slice(0, 1200);
    saveState();
    renderFlashcards();
  }

  function deleteFlashcard(folderId, cardId) {
    const folder = findFlashcardFolder(folderId);
    if (!folder) return;
    const card = folder.cards.find(item => item.id === cardId);
    if (!card) return;
    if (!window.confirm(`Excluir o flashcard “${card.theme}”?`)) return;
    folder.cards = folder.cards.filter(item => item.id !== cardId);
    if (reviewState.folderId === folderId) {
      reviewState.order = reviewState.order.filter(id => id !== cardId);
      if (reviewState.index >= reviewState.order.length) reviewState.index = Math.max(0, reviewState.order.length - 1);
      if (!reviewState.order.length) closeReview();
    }
    saveState();
    renderFlashcards();
  }

  function startFolderReview(folderId) {
    const folder = findFlashcardFolder(folderId);
    if (!folder || !folder.cards.length) return;
    reviewState = { folderId, order: folder.cards.map(card => card.id), index: 0, flipped: false };
    renderReview();
    reviewPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function currentReviewCard() {
    const folder = findFlashcardFolder(reviewState.folderId);
    if (!folder || !reviewState.order.length) return { folder: null, card: null };
    const id = reviewState.order[reviewState.index];
    return { folder, card: folder.cards.find(item => item.id === id) || null };
  }

  function renderReview() {
    const { folder, card } = currentReviewCard();
    if (!folder || !card) {
      reviewPanel.hidden = true;
      return;
    }
    reviewPanel.hidden = false;
    document.getElementById('reviewFolderName').textContent = folder.name;
    document.getElementById('reviewPosition').textContent = `Cartão ${reviewState.index + 1} de ${reviewState.order.length}`;
    document.getElementById('reviewSideLabel').textContent = reviewState.flipped ? 'O QUE DEVO LEMBRAR' : 'TEMA';
    document.getElementById('reviewCardText').textContent = reviewState.flipped ? card.remember : card.theme;
    const reviewCard = document.getElementById('reviewCard');
    reviewCard.classList.toggle('is-flipped', reviewState.flipped);
    document.getElementById('prevReviewBtn').disabled = reviewState.order.length <= 1;
    document.getElementById('nextReviewBtn').disabled = reviewState.order.length <= 1;
  }

  function closeReview() {
    reviewState = { folderId: null, order: [], index: 0, flipped: false };
    reviewPanel.hidden = true;
  }

  function moveReview(step) {
    if (!reviewState.order.length) return;
    reviewState.index = (reviewState.index + step + reviewState.order.length) % reviewState.order.length;
    reviewState.flipped = false;
    renderReview();
  }

  function shuffleReview() {
    if (reviewState.order.length < 2) return;
    for (let i = reviewState.order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [reviewState.order[i], reviewState.order[j]] = [reviewState.order[j], reviewState.order[i]];
    }
    reviewState.index = 0;
    reviewState.flipped = false;
    renderReview();
  }

  function exportProgress() {
    const payload = {
      app: 'TJSP Estudos',
      version: 2,
      exportedAt: new Date().toISOString(),
      state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tjsp-estudos-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showStatus('Backup exportado com sucesso.');
  }

  function importProgress(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(String(reader.result));
        const imported = payload && payload.state ? payload.state : payload;
        if (!imported || typeof imported !== 'object') throw new Error('Formato inválido');
        state.completed = imported.completed && typeof imported.completed === 'object' ? imported.completed : {};
        state.notes = imported.notes && typeof imported.notes === 'object' ? imported.notes : {};
        state.openSubjects = imported.openSubjects && typeof imported.openSubjects === 'object' ? imported.openSubjects : {};
        state.flashcardFolders = Array.isArray(imported.flashcardFolders) ? imported.flashcardFolders : [];
        state.openFlashcardFolders = imported.openFlashcardFolders && typeof imported.openFlashcardFolders === 'object' ? imported.openFlashcardFolders : {};
        normalizeFlashcardFolders();
        saveState();
        render();
        renderFlashcards();
        showStatus('Progresso e flashcards importados com sucesso.');
      } catch (_) {
        showStatus('Não foi possível importar este arquivo de backup.', true);
      }
    };
    reader.onerror = () => showStatus('Erro ao ler o arquivo.', true);
    reader.readAsText(file);
  }

  function resetProgress() {
    const ok = window.confirm('Deseja realmente apagar todos os tópicos marcados e todas as anotações?');
    if (!ok) return;
    state.completed = {};
    state.notes = {};
    state.openSubjects = {};
    saveState();
    render();
    showStatus('Progresso zerado.');
  }

  searchInput.addEventListener('input', () => {
    currentSearch = searchInput.value;
    render();
  });

  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });



  document.getElementById('newFolderBtn').addEventListener('click', () => {
    folderForm.hidden = false;
    folderNameInput.focus();
  });

  document.getElementById('cancelFolderBtn').addEventListener('click', () => {
    folderForm.hidden = true;
    folderNameInput.value = '';
  });

  folderForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = folderNameInput.value.trim();
    if (!name) return;
    createFolder(name.slice(0, 80));
    folderNameInput.value = '';
    folderForm.hidden = true;
  });

  flashcardSearch.addEventListener('input', () => {
    flashcardSearchTerm = flashcardSearch.value;
    renderFlashcards();
  });

  document.getElementById('reviewCard').addEventListener('click', () => {
    reviewState.flipped = !reviewState.flipped;
    renderReview();
  });
  document.getElementById('prevReviewBtn').addEventListener('click', () => moveReview(-1));
  document.getElementById('nextReviewBtn').addEventListener('click', () => moveReview(1));
  document.getElementById('shuffleReviewBtn').addEventListener('click', shuffleReview);
  document.getElementById('closeReviewBtn').addEventListener('click', closeReview);

  document.getElementById('exportBtn').addEventListener('click', exportProgress);
  document.getElementById('importInput').addEventListener('change', e => {
    importProgress(e.target.files && e.target.files[0]);
    e.target.value = '';
  });
  document.getElementById('resetBtn').addEventListener('click', resetProgress);

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.scroll;
      if (target === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
      if (target === 'subjects') document.querySelector('.section-heading').scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (target === 'flashcards') document.getElementById('flashcardsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (target === 'backup') document.querySelector('.backup-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const themeBtn = document.getElementById('themeBtn');
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';
  themeBtn.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, dark ? 'light' : 'dark');
  });

  normalizeFlashcardFolders();
  updateCountdown();
  render();
  renderFlashcards();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
})();
