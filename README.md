# TJSP Estudos - Escrevente 2027

Aplicativo web progressivo (PWA) mobile-first para controlar os estudos do concurso de Escrevente Técnico Judiciário do TJSP.

## O que já vem pronto

- Conteúdo do Anexo VIII do edital organizado por disciplina e tópicos marcáveis.
- Redação incluída como área de estudo com os critérios de avaliação previstos no edital.
- Progresso geral e por disciplina.
- Busca e filtros por pendentes/estudados.
- Anotações por tópico.
- Aba de flashcards com pastas por matéria.
- Cartões com “Tema” na frente e “O que devo lembrar” no verso.
- Busca, edição, exclusão e modo de revisão por pasta.
- Contagem regressiva para a prova prevista em 14/03/2027.
- Backup e restauração do progresso em JSON.
- Tema claro/escuro.
- Funcionamento offline quando instalado como PWA.
- Dados salvos localmente no navegador; não há servidor nem conta de usuário.

## Como testar no computador

Na pasta do projeto, rode um servidor local. Com Python instalado:

```bash
python -m http.server 8000
```

Abra no navegador:

```text
http://localhost:8000
```

## Como usar no celular

A forma mais prática é publicar esta pasta em um serviço de hospedagem estática, como GitHub Pages. Depois, abra o endereço no navegador do celular e use a opção de instalar/adicionar à tela inicial.

## GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos desta pasta para a raiz do repositório.
3. No GitHub, abra Settings > Pages.
4. Em Build and deployment, selecione Deploy from a branch.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde o endereço público do Pages.
7. Abra esse endereço no celular e instale o aplicativo pelo menu do navegador.

## Importante sobre o progresso

O progresso, as anotações e os flashcards são salvos no `localStorage` do navegador. Use o botão **Exportar progresso** periodicamente para manter um backup. O arquivo JSON exportado pode ser restaurado pelo botão **Importar progresso**.

## Base do conteúdo

Edital TJSP2607 - Escrevente Técnico Judiciário, Anexo VIII (Conteúdo Programático), além dos critérios da prova discursiva (redação) e da data prevista de prova informados no próprio edital.
