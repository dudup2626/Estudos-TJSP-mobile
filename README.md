# TJSP Estudos - Escrevente 2027 — v3

PWA mobile-first para acompanhar os estudos do concurso do TJSP.

## Estrutura em 4 páginas

- `index.html` — Início e visão geral.
- `conteudo.html` — Conteúdo do edital, progresso e anotações.
- `flashcards.html` — Pastas e cartões de revisão.
- `backup.html` — Exportação, importação e resumo dos dados.

A navegação inferior abre uma página diferente. O progresso continua compartilhado entre todas porque elas usam o mesmo `localStorage` no mesmo domínio.

## Modo revisão

Na página de Flashcards, **Estudar pasta** abre uma camada de revisão em tela inteira, ofuscando o restante do site. Toque no cartão para revelar o verso. Também é possível usar Anterior, Próximo, Embaralhar e fechar pelo `×` ou pela tecla `Esc`.

## Atualização no GitHub Pages

Substitua os arquivos antigos da raiz do repositório pelos arquivos desta pasta e faça o commit. É importante enviar também os novos arquivos `conteudo.html`, `flashcards.html` e `backup.html`.

O cache do PWA foi alterado para `v3`, então a versão nova substitui o cache anterior após o navegador carregar o site atualizado.

## Progresso existente

A chave de armazenamento foi mantida (`tjsp-estudos-v1`), portanto atualizar os arquivos não apaga tópicos, anotações nem flashcards já salvos no mesmo navegador/origem.
