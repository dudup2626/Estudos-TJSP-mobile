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

  const subjectList = document.getElementById('subjectList');
  const subjectTemplate = document.getElementById('subjectTemplate');
  const topicTemplate = document.getElementById('topicTemplate');
  const searchInput = document.getElementById('searchInput');
  const topicCounter = document.getElementById('topicCounter');
  const overallPct = document.getElementById('overallPct');
  const progressRing = document.getElementById('progressRing');
  const countdown = document.getElementById('countdown');
  const statusMessage = document.getElementById('statusMessage');

  function emptyState() {
    return { completed: {}, notes: {}, openSubjects: {} };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyState();
      const parsed = JSON.parse(raw);
      return {
        completed: parsed.completed && typeof parsed.completed === 'object' ? parsed.completed : {},
        notes: parsed.notes && typeof parsed.notes === 'object' ? parsed.notes : {},
        openSubjects: parsed.openSubjects && typeof parsed.openSubjects === 'object' ? parsed.openSubjects : {}
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

  function exportProgress() {
    const payload = {
      app: 'TJSP Estudos',
      version: 1,
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
        saveState();
        render();
        showStatus('Progresso importado com sucesso.');
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

  updateCountdown();
  render();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
})();
