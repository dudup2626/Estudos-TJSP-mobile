(() => {
  'use strict';

  const STORAGE_KEY = 'tjsp-estudos-v1';
  const THEME_KEY = 'tjsp-estudos-theme';
  const page = document.body.dataset.page || 'home';

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

  let state = loadState();
  let currentFilter = 'all';
  let currentSearch = '';
  let flashcardSearchTerm = '';
  let reviewState = { folderId: null, order: [], index: 0, flipped: false };

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
    } catch (_) { return emptyState(); }
  }

  function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function topicKey(subjectId, index) { return `${subjectId}::${index}`; }
  function allTopics() { return curriculum.flatMap(s => s.topics.map((topic, i) => ({ subject: s, topic, index: i, key: topicKey(s.id, i) }))); }
  function topicStats() {
    const topics = allTopics();
    const done = topics.reduce((sum, t) => sum + (state.completed[t.key] ? 1 : 0), 0);
    return { total: topics.length, done, pct: topics.length ? Math.round((done / topics.length) * 100) : 0 };
  }
  function subjectStats(subject) {
    const total = subject.topics.length;
    const done = subject.topics.reduce((sum, _, i) => sum + (state.completed[topicKey(subject.id, i)] ? 1 : 0), 0);
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function makeId(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') return `${prefix}-${window.crypto.randomUUID()}`;
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
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
  function totalFlashcards() { return state.flashcardFolders.reduce((sum, folder) => sum + folder.cards.length, 0); }
  function findFlashcardFolder(folderId) { return state.flashcardFolders.find(folder => folder.id === folderId) || null; }

  function updateCountdown() {
    const countdown = document.getElementById('countdown');
    if (!countdown) return;
    const diff = new Date(2027, 2, 14, 12, 0, 0) - new Date();
    if (diff <= 0) { countdown.textContent = 'Data prevista da prova alcançada.'; return; }
    const days = Math.ceil(diff / 86400000);
    countdown.textContent = `${days} ${days === 1 ? 'dia' : 'dias'} até a prova`;
  }

  function updateHome() {
    const stats = topicStats();
    const overallPct = document.getElementById('overallPct');
    const progressRing = document.getElementById('progressRing');
    const topicProgress = document.getElementById('homeTopicProgress');
    const cardCount = document.getElementById('homeFlashcardCount');
    if (overallPct) overallPct.textContent = `${stats.pct}%`;
    if (progressRing) progressRing.style.setProperty('--progress', `${stats.pct * 3.6}deg`);
    if (topicProgress) topicProgress.textContent = `${stats.done} de ${stats.total} tópicos estudados`;
    if (cardCount) {
      const total = totalFlashcards();
      cardCount.textContent = `${total} ${total === 1 ? 'cartão criado' : 'cartões criados'}`;
    }
  }

  function matches(topic, subject, index) {
    const done = !!state.completed[topicKey(subject.id, index)];
    const filterMatch = currentFilter === 'all' || (currentFilter === 'done' && done) || (currentFilter === 'pending' && !done);
    const needle = currentSearch.trim().toLocaleLowerCase('pt-BR');
    const searchMatch = !needle || `${subject.name} ${subject.block} ${topic}`.toLocaleLowerCase('pt-BR').includes(needle);
    return filterMatch && searchMatch;
  }

  function renderContent() {
    const subjectList = document.getElementById('subjectList');
    const subjectTemplate = document.getElementById('subjectTemplate');
    const topicTemplate = document.getElementById('topicTemplate');
    const topicCounter = document.getElementById('topicCounter');
    if (!subjectList || !subjectTemplate || !topicTemplate) return;
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
      const stats = subjectStats(subject);
      const explicitQuestionText = subject.questions ? `${subject.questions} questões` : (subject.block === 'Bloco II' ? '30 questões no bloco de Direito' : subject.block);
      card.querySelector('.subject-icon').textContent = subject.icon;
      card.querySelector('h3').textContent = subject.name;
      updateCardStats(card, subject);
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
          updateCardStats(card, subject);
          if (currentFilter !== 'all') renderContent();
          else if (topicCounter) topicCounter.textContent = `${topicStats().done}/${topicStats().total} estudados`;
        });
        noteToggle.addEventListener('click', () => { noteBox.hidden = !noteBox.hidden; if (!noteBox.hidden) textarea.focus(); });
        textarea.addEventListener('input', () => { state.notes[key] = textarea.value; noteToggle.classList.toggle('has-note', !!textarea.value.trim()); saveState(); });
        list.appendChild(item);
      }
      subjectList.appendChild(card);
    }
    if (!visibleSubjects) {
      const empty = document.createElement('div'); empty.className = 'empty-state'; empty.textContent = 'Nenhum tópico encontrado com este filtro.'; subjectList.appendChild(empty);
    }
    if (topicCounter) {
      if (currentFilter === 'all' && !currentSearch) { const s = topicStats(); topicCounter.textContent = `${s.done}/${s.total} estudados`; }
      else topicCounter.textContent = `${visibleTopics} encontrados`;
    }
  }

  function updateCardStats(card, subject) {
    const stats = subjectStats(subject);
    const explicitQuestionText = subject.questions ? `${subject.questions} questões` : (subject.block === 'Bloco II' ? '30 questões no bloco de Direito' : subject.block);
    card.querySelector('.subject-meta').textContent = `${subject.block} • ${explicitQuestionText} • ${stats.done}/${stats.total} tópicos`;
    card.querySelector('.subject-pct').textContent = `${stats.pct}%`;
    card.querySelector('.progress-track span').style.width = `${stats.pct}%`;
  }

  function flashcardMatches(card, folderName) {
    const needle = flashcardSearchTerm.trim().toLocaleLowerCase('pt-BR');
    return !needle || `${folderName} ${card.theme} ${card.remember}`.toLocaleLowerCase('pt-BR').includes(needle);
  }

  function createButton(text, className, action) {
    const btn = document.createElement('button'); btn.type = 'button'; btn.textContent = text; btn.className = className; btn.addEventListener('click', action); return btn;
  }

  function renderFlashcards() {
    const list = document.getElementById('flashcardFolderList');
    const counter = document.getElementById('flashcardCounter');
    if (!list) return;
    normalizeFlashcardFolders();
    list.innerHTML = '';
    const total = totalFlashcards();
    const folderCount = state.flashcardFolders.length;
    if (counter) counter.textContent = folderCount ? `${folderCount} ${folderCount === 1 ? 'pasta' : 'pastas'} • ${total} ${total === 1 ? 'cartão' : 'cartões'}` : '0 cartões';
    const needle = flashcardSearchTerm.trim().toLocaleLowerCase('pt-BR');
    const visibleFolders = state.flashcardFolders.filter(folder => !needle || folder.name.toLocaleLowerCase('pt-BR').includes(needle) || folder.cards.some(card => flashcardMatches(card, folder.name)));
    if (!visibleFolders.length) {
      const empty = document.createElement('div'); empty.className = 'empty-state'; empty.textContent = folderCount ? 'Nenhum flashcard encontrado com essa busca.' : 'Nenhuma pasta criada ainda. Crie uma pasta para a primeira matéria.'; list.appendChild(empty); return;
    }

    for (const folder of visibleFolders) {
      const article = document.createElement('article'); article.className = 'flash-folder';
      const header = document.createElement('button'); header.type = 'button'; header.className = 'flash-folder-header';
      const isOpen = !!state.openFlashcardFolders[folder.id] || !!needle; header.setAttribute('aria-expanded', String(isOpen));
      const titleWrap = document.createElement('div'); titleWrap.className = 'flash-folder-title';
      const icon = document.createElement('div'); icon.className = 'flash-folder-icon'; icon.textContent = '▣';
      const text = document.createElement('div'); const h3 = document.createElement('h3'); h3.textContent = folder.name; const meta = document.createElement('p'); meta.textContent = `${folder.cards.length} ${folder.cards.length === 1 ? 'flashcard' : 'flashcards'}`; text.append(h3, meta); titleWrap.append(icon, text);
      const chev = document.createElement('span'); chev.className = 'chevron'; chev.textContent = '⌄'; header.append(titleWrap, chev);
      const body = document.createElement('div'); body.className = 'flash-folder-body'; body.hidden = !isOpen;
      header.addEventListener('click', () => { const expanded = header.getAttribute('aria-expanded') === 'true'; header.setAttribute('aria-expanded', String(!expanded)); body.hidden = expanded; state.openFlashcardFolders[folder.id] = !expanded; saveState(); });

      const actions = document.createElement('div'); actions.className = 'folder-actions';
      const study = createButton('▶ Estudar pasta', 'btn primary study-folder-btn', () => startFolderReview(folder.id)); study.disabled = !folder.cards.length;
      actions.append(study, createButton('Renomear', 'btn secondary', () => renameFolder(folder.id)), createButton('Excluir pasta', 'btn danger', () => deleteFolder(folder.id))); body.appendChild(actions);

      const grid = document.createElement('div'); grid.className = 'flashcard-grid';
      const visibleCards = needle ? folder.cards.filter(card => flashcardMatches(card, folder.name)) : folder.cards;
      if (!visibleCards.length) { const empty = document.createElement('p'); empty.className = 'folder-empty'; empty.textContent = folder.cards.length ? 'Nenhum cartão desta pasta corresponde à busca.' : 'Esta pasta ainda não tem flashcards.'; grid.appendChild(empty); }
      for (const card of visibleCards) {
        const entry = document.createElement('article'); entry.className = 'flashcard-entry';
        const flip = document.createElement('button'); flip.type = 'button'; flip.className = 'flashcard-flip'; flip.setAttribute('aria-label','Virar flashcard');
        const kicker = document.createElement('span'); kicker.className = 'flashcard-kicker'; kicker.textContent = 'TEMA';
        const content = document.createElement('strong'); content.className = 'flashcard-content'; content.textContent = card.theme;
        const tip = document.createElement('small'); tip.textContent = 'Toque para revelar o que lembrar'; flip.append(kicker, content, tip);
        let flipped = false;
        flip.addEventListener('click', () => { flipped = !flipped; entry.classList.toggle('is-flipped', flipped); kicker.textContent = flipped ? 'O QUE DEVO LEMBRAR' : 'TEMA'; content.textContent = flipped ? card.remember : card.theme; });
        const itemActions = document.createElement('div'); itemActions.className = 'flashcard-item-actions'; itemActions.append(createButton('Editar','',()=>editFlashcard(folder.id,card.id)), createButton('Excluir','',()=>deleteFlashcard(folder.id,card.id))); entry.append(flip,itemActions); grid.appendChild(entry);
      }
      body.appendChild(grid);
      const add = createButton('+ Adicionar flashcard','add-card-btn',()=>showCardForm(body,folder.id,add)); body.appendChild(add);
      article.append(header,body); list.appendChild(article);
    }
  }

  function showCardForm(folderBody, folderId, triggerButton) {
    if (folderBody.querySelector('.card-form')) return;
    triggerButton.hidden = true;
    const form = document.createElement('form'); form.className = 'inline-form card-form';
    const themeLabel = document.createElement('label'); themeLabel.innerHTML = '<span>Tema</span>'; const themeInput = document.createElement('input'); themeInput.type='text'; themeInput.maxLength=180; themeInput.placeholder='Ex.: Peculato — art. 312 do Código Penal'; themeInput.required=true; themeLabel.appendChild(themeInput);
    const rememberLabel = document.createElement('label'); rememberLabel.className='form-gap'; rememberLabel.innerHTML='<span>O que devo lembrar</span>'; const rememberInput=document.createElement('textarea'); rememberInput.maxLength=1200; rememberInput.placeholder='Escreva a definição, regra, exceção, artigo, macete ou ponto que precisa memorizar.'; rememberInput.required=true; rememberLabel.appendChild(rememberInput);
    const actions=document.createElement('div'); actions.className='inline-form-actions'; const save=document.createElement('button'); save.type='submit'; save.className='btn primary'; save.textContent='Salvar flashcard'; const cancel=createButton('Cancelar','btn secondary',()=>{form.remove();triggerButton.hidden=false;}); actions.append(save,cancel); form.append(themeLabel,rememberLabel,actions);
    form.addEventListener('submit',e=>{ e.preventDefault(); const theme=themeInput.value.trim(), remember=rememberInput.value.trim(); if(!theme||!remember)return; const folder=findFlashcardFolder(folderId); if(!folder)return; folder.cards.push({id:makeId('card'),theme,remember}); state.openFlashcardFolders[folderId]=true; saveState(); renderFlashcards(); });
    folderBody.appendChild(form); themeInput.focus();
  }

  function createFolder(name) { const cleaned=name.trim(); if(!cleaned)return; const folder={id:makeId('folder'),name:cleaned,cards:[]}; state.flashcardFolders.push(folder); state.openFlashcardFolders[folder.id]=true; saveState(); renderFlashcards(); }
  function renameFolder(folderId) { const folder=findFlashcardFolder(folderId); if(!folder)return; const name=window.prompt('Novo nome da matéria/pasta:',folder.name); if(name===null||!name.trim())return; folder.name=name.trim().slice(0,80); saveState(); renderFlashcards(); }
  function deleteFolder(folderId) { const folder=findFlashcardFolder(folderId); if(!folder)return; const count=folder.cards.length; if(!window.confirm(`Excluir a pasta “${folder.name}”${count ? ` e seus ${count} flashcard${count===1?'':'s'}` : ''}?`))return; state.flashcardFolders=state.flashcardFolders.filter(x=>x.id!==folderId); delete state.openFlashcardFolders[folderId]; if(reviewState.folderId===folderId)closeReview(); saveState(); renderFlashcards(); }
  function editFlashcard(folderId,cardId) { const folder=findFlashcardFolder(folderId); if(!folder)return; const card=folder.cards.find(x=>x.id===cardId); if(!card)return; const theme=window.prompt('Tema do flashcard:',card.theme); if(theme===null||!theme.trim())return; const remember=window.prompt('O que devo lembrar:',card.remember); if(remember===null||!remember.trim())return; card.theme=theme.trim().slice(0,180); card.remember=remember.trim().slice(0,1200); saveState(); renderFlashcards(); }
  function deleteFlashcard(folderId,cardId) { const folder=findFlashcardFolder(folderId); if(!folder)return; const card=folder.cards.find(x=>x.id===cardId); if(!card||!window.confirm(`Excluir o flashcard “${card.theme}”?`))return; folder.cards=folder.cards.filter(x=>x.id!==cardId); saveState(); renderFlashcards(); }

  function startFolderReview(folderId) {
    const folder=findFlashcardFolder(folderId); if(!folder||!folder.cards.length)return;
    reviewState={folderId,order:folder.cards.map(c=>c.id),index:0,flipped:false};
    renderReview();
    const overlay=document.getElementById('reviewOverlay'); if(overlay) { overlay.hidden=false; document.body.classList.add('review-open'); }
    document.getElementById('reviewCard')?.focus();
  }
  function currentReviewCard() { const folder=findFlashcardFolder(reviewState.folderId); if(!folder||!reviewState.order.length)return{folder:null,card:null}; const id=reviewState.order[reviewState.index]; return{folder,card:folder.cards.find(x=>x.id===id)||null}; }
  function renderReview() {
    const overlay=document.getElementById('reviewOverlay'); if(!overlay)return;
    const {folder,card}=currentReviewCard(); if(!folder||!card){overlay.hidden=true;document.body.classList.remove('review-open');return;}
    document.getElementById('reviewFolderName').textContent=folder.name;
    document.getElementById('reviewPosition').textContent=`Cartão ${reviewState.index+1} de ${reviewState.order.length}`;
    document.getElementById('reviewSideLabel').textContent=reviewState.flipped?'O QUE DEVO LEMBRAR':'TEMA';
    document.getElementById('reviewCardText').textContent=reviewState.flipped?card.remember:card.theme;
    document.getElementById('reviewCard').classList.toggle('is-flipped',reviewState.flipped);
    document.getElementById('prevReviewBtn').disabled=reviewState.order.length<=1;
    document.getElementById('nextReviewBtn').disabled=reviewState.order.length<=1;
  }
  function closeReview() { reviewState={folderId:null,order:[],index:0,flipped:false}; const overlay=document.getElementById('reviewOverlay'); if(overlay)overlay.hidden=true; document.body.classList.remove('review-open'); }
  function moveReview(step) { if(!reviewState.order.length)return; reviewState.index=(reviewState.index+step+reviewState.order.length)%reviewState.order.length; reviewState.flipped=false; renderReview(); }
  function shuffleReview() { if(reviewState.order.length<2)return; for(let i=reviewState.order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[reviewState.order[i],reviewState.order[j]]=[reviewState.order[j],reviewState.order[i]];} reviewState.index=0;reviewState.flipped=false;renderReview(); }

  function showStatus(message,isError=false) { const el=document.getElementById('statusMessage'); if(!el)return; el.textContent=message; el.style.color=isError?'var(--danger)':'var(--success)'; setTimeout(()=>{if(el.textContent===message)el.textContent='';},4500); }
  function exportProgress() {
    const payload={app:'TJSP Estudos',version:3,exportedAt:new Date().toISOString(),state};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`tjsp-estudos-backup-${new Date().toISOString().slice(0,10)}.json`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); showStatus('Backup exportado com sucesso.');
  }
  function importProgress(file) {
    if(!file)return; const reader=new FileReader(); reader.onload=()=>{try{const payload=JSON.parse(String(reader.result));const imported=payload&&payload.state?payload.state:payload;if(!imported||typeof imported!=='object')throw new Error('inválido'); state.completed=imported.completed&&typeof imported.completed==='object'?imported.completed:{};state.notes=imported.notes&&typeof imported.notes==='object'?imported.notes:{};state.openSubjects=imported.openSubjects&&typeof imported.openSubjects==='object'?imported.openSubjects:{};state.flashcardFolders=Array.isArray(imported.flashcardFolders)?imported.flashcardFolders:[];state.openFlashcardFolders=imported.openFlashcardFolders&&typeof imported.openFlashcardFolders==='object'?imported.openFlashcardFolders:{};normalizeFlashcardFolders();saveState();updateBackupSummary();showStatus('Progresso e flashcards importados com sucesso.');}catch(_){showStatus('Não foi possível importar este arquivo de backup.',true);}}; reader.onerror=()=>showStatus('Erro ao ler o arquivo.',true); reader.readAsText(file);
  }
  function resetProgress() { if(!window.confirm('Deseja realmente apagar todos os tópicos marcados e todas as anotações? Seus flashcards serão mantidos.'))return; state.completed={};state.notes={};state.openSubjects={};saveState();updateBackupSummary();showStatus('Tópicos e anotações zerados.'); }
  function updateBackupSummary() { const s=topicStats(); const a=document.getElementById('backupTopicCount'),b=document.getElementById('backupFlashcardCount'); if(a)a.textContent=`${s.done}/${s.total}`; if(b)b.textContent=String(totalFlashcards()); }

  function initTheme() {
    const saved=localStorage.getItem(THEME_KEY); if(saved==='dark')document.documentElement.dataset.theme='dark';
    document.getElementById('themeBtn')?.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme==='dark'; document.documentElement.dataset.theme=dark?'light':'dark'; localStorage.setItem(THEME_KEY,dark?'light':'dark');});
  }

  function initContentPage() {
    const search=document.getElementById('searchInput'); search?.addEventListener('input',()=>{currentSearch=search.value;renderContent();});
    document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentFilter=btn.dataset.filter;renderContent();}));
    renderContent();
  }

  function initFlashcardsPage() {
    const folderForm=document.getElementById('folderForm'); const folderInput=document.getElementById('folderNameInput');
    document.getElementById('newFolderBtn')?.addEventListener('click',()=>{folderForm.hidden=false;folderInput.focus();});
    document.getElementById('cancelFolderBtn')?.addEventListener('click',()=>{folderForm.hidden=true;folderInput.value='';});
    folderForm?.addEventListener('submit',e=>{e.preventDefault();const name=folderInput.value.trim();if(!name)return;createFolder(name.slice(0,80));folderInput.value='';folderForm.hidden=true;});
    const search=document.getElementById('flashcardSearch'); search?.addEventListener('input',()=>{flashcardSearchTerm=search.value;renderFlashcards();});
    document.getElementById('reviewCard')?.addEventListener('click',()=>{reviewState.flipped=!reviewState.flipped;renderReview();});
    document.getElementById('prevReviewBtn')?.addEventListener('click',()=>moveReview(-1));
    document.getElementById('nextReviewBtn')?.addEventListener('click',()=>moveReview(1));
    document.getElementById('shuffleReviewBtn')?.addEventListener('click',shuffleReview);
    document.getElementById('closeReviewBtn')?.addEventListener('click',closeReview);
    document.getElementById('reviewOverlay')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeReview();});
    document.addEventListener('keydown',e=>{ if(!document.body.classList.contains('review-open'))return; if(e.key==='Escape')closeReview(); if(e.key==='ArrowLeft')moveReview(-1); if(e.key==='ArrowRight')moveReview(1); });
    renderFlashcards();
  }

  function initBackupPage() {
    document.getElementById('exportBtn')?.addEventListener('click',exportProgress);
    document.getElementById('importInput')?.addEventListener('change',e=>{importProgress(e.target.files&&e.target.files[0]);e.target.value='';});
    document.getElementById('resetBtn')?.addEventListener('click',resetProgress);
    updateBackupSummary();
  }

  normalizeFlashcardFolders();
  initTheme();
  if(page==='home'){updateCountdown();updateHome();}
  if(page==='content')initContentPage();
  if(page==='flashcards')initFlashcardsPage();
  if(page==='backup')initBackupPage();

  if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
})();
