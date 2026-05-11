# PainelURE 2.0

Roadmap, diretrizes e changelog da nova versão do PainelURE.

Esta versão nasce separada do PainelURE 1.0. A versão 1.0 continua como publicação oficial atual; o PainelURE 2.0 é uma reconstrução limpa, com foco em usabilidade, performance e consistência visual inspirada no Finanza.

## Objetivo

Criar um painel operacional da URE que seja rápido, bonito, previsível e fácil de apresentar.

O PainelURE 2.0 deve substituir a sensação de sistema remendado por uma experiência coesa:

- Navegação clara.
- Visual escuro, sóbrio e polido.
- Cards úteis, sem excesso visual.
- Dados oficiais vindos das planilhas certas.
- Código modular, sem empilhar CSS ou copiar blocos antigos sem revisão.
- Performance boa em notebook comum, celular e apresentação em projetor.

## Diretrizes De Produto

1. O painel deve abrir direto em uma tela útil.
2. Toda página precisa responder a uma pergunta real de trabalho.
3. Cada card precisa ter função clara: consultar, decidir, abrir detalhe ou alertar.
4. Textos devem ser curtos, objetivos e operacionais.
5. O usuário não deve precisar entender a estrutura interna do sistema para usar.
6. O layout deve funcionar bem em apresentação, desktop e mobile.
7. Dados oficiais sempre têm prioridade sobre dados manuais ou mockados.
8. A versão 2.0 não deve herdar os vícios visuais do PainelURE 1.0.

## Diretrizes Visuais

Base visual inspirada no Finanza:

- Fundo escuro profundo com radiais sutis.
- Sidebar fixa no desktop.
- Tipografia com `Syne` para títulos e `DM Sans` para interface.
- Acento principal lime `#c8f55a`.
- Acento secundário teal `#5af5c8`.
- Roxo, amarelo e vermelho apenas para estados e categorias.
- Cards com borda fina, fundo escuro e pouca ornamentação.
- Destaques concentrados nos blocos principais, não em todos os elementos.
- Hover discreto, sem movimento pesado.
- Pílulas pequenas, alinhadas e úteis.
- Nenhum card dentro de card sem necessidade.

## Norte Oficial: Finanza

O Finanza passa a ser a referência principal de usabilidade, ritmo visual e sensação de produto do PainelURE 2.0.

Toda decisão de interface deve responder:

- Isso parece parte do mesmo sistema visual do Finanza?
- A tela abriu rápido e parece leve?
- O usuário entende a ação principal em poucos segundos?
- A hierarquia está clara sem explicar demais?
- O componente reaproveita o design system em vez de criar uma exceção?
- A informação exibida ajuda uma decisão real?

Regras práticas:

1. Marca fica na sidebar; o conteúdo deve abrir com título funcional da página.
2. Cards devem ser discretos, densos e úteis.
3. Brilho, blur e gradiente são acentos, não decoração principal.
4. Dashboard deve priorizar atalhos, decisões do dia e indicadores essenciais.
5. Telas internas devem parecer ferramentas de consulta, não páginas de apresentação.
6. Listas grandes precisam carregar sob demanda ou com renderização leve.
7. Qualquer importação da 1.0 precisa ser redesenhada no padrão Finanza antes de entrar.
8. Se o visual parecer pesado, genérico ou remendado, a tarefa volta para refino antes de crescer.

## Prioridade Atual

Antes de importar novas funcionalidades da 1.0, a prioridade da 2.0 é estabilizar a base:

1. Performance percebida.
2. Design system limpo.
3. Dashboard no padrão Finanza.
4. Páginas internas com componentes unificados.
5. Importação controlada de funcionalidades reais.

## Regras De Código

1. Não empilhar CSS.
2. Não corrigir visual criando uma nova classe por cima de outra antiga.
3. Antes de adicionar componente novo, verificar se um componente base já resolve.
4. CSS deve ser organizado por camada:
   - tokens;
   - reset/base;
   - shell;
   - navegação;
   - componentes;
   - páginas;
   - responsivo.
5. JavaScript deve separar:
   - dados;
   - renderização;
   - navegação;
   - filtros/busca;
   - integrações futuras.
6. Funcionalidade importada do 1.0 deve ser reescrita no padrão 2.0.
7. Código legado só entra se for compreendido, limpo e adaptado.
8. Nenhuma funcionalidade nova deve degradar performance perceptível.
9. Evitar animações desnecessárias.
10. Evitar `backdrop-filter` em listas grandes ou cards repetidos.

## Estrutura Atual

Arquivos atuais:

- `index.html`: estrutura do shell e páginas.
- `styles.css`: design system visual.
- `app.js`: dados temporários, renderização e navegação.
- `ROADMAP.md`: documentação da versão 2.0.

Estrutura futura recomendada:

```text
painelure2/
  index.html
  styles.css
  app.js
  ROADMAP.md
  data/
    schools.js
    contacts.js
    inventory.js
    supervision.js
    network.js
  modules/
    navigation.js
    search.js
    render.js
    sheets.js
  docs/
    decisions.md
    changelog.md
```

## Componentes Base

Componentes que devem guiar todas as telas:

- `sidebar`
- `nav-item`
- `sidebar-search`
- `page-header`
- `notice-card`
- `manager-strip`
- `workbench`
- `shortcut-card`
- `metric-card`
- `box`
- `data-row`
- `status-pill`
- `school-card`
- `detail-widget`
- `table-card`
- `contact-card`
- `empty-state`

Antes de criar um componente novo, decidir se ele é variação de um desses.

## Roadmap

### Trilha Imediata - Antes De Crescer Funcionalidades

Status: ativa.

Objetivo: deixar a v2 rápida, bonita e coesa antes de continuar trazendo recursos da 1.0.

Entregas:

- Medir carregamento inicial, troca de páginas e scroll.
- Remover qualquer bloqueio de planilha externa na primeira pintura.
- Reduzir custo de blur, sombra e listas grandes.
- Consolidar componentes base em um design system enxuto.
- Refazer o dashboard para ficar mais próximo da experiência do Finanza.
- Revisar sidebar, atalhos, cards métricos, listas e estados.
- Definir checklist visual obrigatório para toda tela nova.

Critérios de aceite:

- Abrir a v2 deve parecer instantâneo com dados locais.
- Trocar de página não pode travar.
- Dashboard deve parecer produto final, não rascunho técnico.
- Nenhuma página nova pode criar estilo paralelo ao Finanza.

### Trilha Seguinte - Importação Limpa Da 1.0

Status: aguardando estabilização da base.

Ordem sugerida:

1. Escolas.
2. Redes e Câmeras.
3. Inventário.
4. Supervisão.
5. Contatos.
6. Calendário URE.
7. Técnicos CTC e Chamados.
8. Relatórios.
9. Admin e perfis.

Regra: cada módulo só entra depois de passar por normalização de dados, componente padrão e QA visual.

### Fase 0 - Base Visual

Status: concluída no MVP.

Objetivo: consolidar o visual Finanza e impedir que o 2.0 nasça pesado.

Entregas:

- Shell com sidebar.
- Dashboard inicial.
- Cards e widgets base.
- Páginas iniciais de escolas, redes/câmeras, inventário, supervisão, contatos e calendário.
- Busca leve por página.
- Remoção de efeitos pesados.
- Documentação inicial.

Critérios de aceite:

- Navegação instantânea.
- Interface coesa.
- Sem sobreposição visual.
- Sem CSS remendado.
- Sem dependência do PainelURE 1.0.

### Fase 1 - Organização Modular

Status: concluída no MVP.

Objetivo: preparar o código para receber funcionalidades reais.

Entregas:

- Separar dados mockados em `data/`. Concluído.
- Separar navegação e busca em módulos. Concluído.
- Criar utilitários de renderização. Concluído.
- Criar camada de dados antes das planilhas. Concluído.
- Registrar decisões técnicas. Concluído.
- Padronizar nomes de páginas e componentes. Em andamento.
- Criar convenção de estados: `ok`, `warn`, `danger`, `info`. Concluído.

Critérios de aceite:

- `app.js` menor e mais legível.
- Cada módulo com responsabilidade clara.
- Nenhuma regressão visual.

### Fase 2 - Importação De Dados Oficiais

Status: concluída no MVP.

Objetivo: conectar as fontes oficiais do PainelURE.

Entregas:

- Importar escolas da base oficial.
- Importar supervisores e metas das planilhas corretas. Iniciado com fonte oficial de abril.
- Importar inventário.
- Importar contatos.
- Importar redes e câmeras quando a base estiver definida.
- Criar camada única de leitura de CSV/planilha. Iniciado.

Regras:

- Uma fonte oficial por domínio.
- Nada de dado duplicado escondido em JS.
- Mock só pode existir como fallback explícito.
- Toda planilha precisa ter função de normalização.
- Cabeçalhos repetidos precisam ser preservados com sufixo numérico pelo parser.

Critérios de aceite:

- Dados carregam de forma previsível.
- Erros de planilha mostram estado amigável.
- Dashboard usa os dados reais.

### Fase 3 - Escolas

Status: concluída no MVP.

Objetivo: transformar a página de escolas em uma área de consulta forte.

Entregas:

- Lista de escolas com busca e filtros. Busca concluída; filtros pendentes.
- Card de escola no padrão Finanza. Iniciado.
- Página/detalhe da escola. Iniciado.
- Inventário por escola. Iniciado.
- Redes e câmeras por escola. Iniciado.
- Supervisores vinculados. Iniciado.
- Indicadores úteis, sem excesso.

Critérios de aceite:

- Usuário encontra uma escola em poucos segundos.
- Detalhe da escola concentra informações úteis.
- Não há lista visualmente poluída.

### Fase 4 - Supervisão

Status: concluída no MVP.

Objetivo: reconstruir a supervisão sem os problemas visuais do 1.0.

Entregas:

- Tabela de supervisores em ordem alfabética. Concluído.
- Detalhe de supervisor. Iniciado.
- Meta semanal. Iniciado.
- Meta mensal. Iniciado.
- Escolas vinculadas. Iniciado com seed data e cards clicáveis.
- Histórico de visitas.
- Alertas de visita errada/faltando.

Regras:

- Metas puxadas da fonte oficial. Iniciado com planilha de abril.
- Pílulas padronizadas.
- Nada de texto explicativo inútil.
- Fonte igual ao restante do sistema.

Critérios de aceite:

- Meta semanal e mensal claras.
- Categoria verde/amarelo/vermelho visível sem exagero.
- Página útil para apresentação e trabalho.

### Fase 5 - Inventário

Status: concluída no MVP.

Objetivo: trazer a funcionalidade real do inventário sem replicar a bagunça do 1.0.

Entregas:

- Importação por planilha.
- Agrupamento por escola. Iniciado com métricas operacionais.
- Agrupamento por tipo.
- Status por item.
- Alertas de manutenção/defeito. Iniciado.
- Detalhe de inventário por escola.

Regras:

- Importação só aparece onde faz sentido.
- Cadastro manual não deve poluir o fluxo principal.
- Estados de item devem ser normalizados.

Critérios de aceite:

- Inventário consultável rapidamente.
- Alertas úteis, não alarmistas.
- Layout não vira lista gigante sem hierarquia.

### Fase 6 - Redes E Câmeras

Status: concluída no MVP.

Objetivo: criar uma área técnica de consulta rápida.

Entregas:

- Seletor de escola. Concluído.
- Informações sobre rede. Iniciado com seed data.
- Informações sobre IPs. Iniciado com seed data.
- Informações sobre câmeras. Iniciado com seed data.
- Cards estilo Finanza. Iniciado.
- Visão resumida e detalhe técnico.
- Campo de credenciais restritas sem expor segredo no frontend. Concluído.

Disponibilidade:

- CTC.
- SETEC.
- SEINTEC.
- Administradores.

Critérios de aceite:

- Informações técnicas fáceis de achar.
- Nada exposto além do que foi autorizado.
- Página visualmente limpa.

### Fase 7 - Contatos

Status: concluída no MVP.

Objetivo: transformar contatos em uma central útil e organizada.

Entregas:

- Categorias: Tecnologia, Gabinete, Obras, Compras, Pagamento, RH, Supervisão, Pedagógico. Iniciado.
- Cargo acima do nome. Concluído.
- Nome completo. Concluído.
- Email, telefone/ramal e ação útil. Em andamento.
- Busca e filtro por categoria. Concluído.

Critérios de aceite:

- Visual igual ao restante do sistema.
- Cards compactos e legíveis.
- Categorias fáceis de ajustar.

### Fase 8 - Calendário URE

Status: concluída como base; fonte oficial plugável.

Objetivo: criar calendário geral da URE.

Entregas:

- Eventos gerais.
- Carros oficiais.
- Prazos importantes.
- Filtros por tipo.
- Cards de próximos eventos.

Critérios de aceite:

- Visão rápida do dia/semana.
- Útil para todos os perfis de usuário.

### Fase 9 - Perfis De Usuário

Status: concluída como matriz; autenticação real pendente.

Objetivo: cada categoria de usuário ter painel adequado ao seu acesso.

Perfis previstos:

- Administrador.
- Supervisão.
- Técnicos CTC.
- SETEC.
- SEINTEC.
- Gabinete.
- Pedagógico.
- Consulta.

Entregas:

- Matriz de permissões.
- Dashboard por perfil.
- Navegação baseada em acesso.
- Ocultação real de áreas não autorizadas.

Critérios de aceite:

- Usuário vê só o que faz sentido.
- Administrador mantém visão completa.
- Não há navegação morta.

### Fase 10 - Publicação E Qualidade

Status: concluída como checklist; publicação inicial realizada em repositório próprio.

Objetivo: preparar versão estável para publicação.

Entregas:

- Revisão visual desktop/mobile.
- Revisão de performance.
- Teste com dados reais.
- Checklist de apresentação.
- Publicação controlada.

Critérios de aceite:

- Sem flicker de tela inicial.
- Sem lentidão perceptível.
- Sem dados mockados aparecendo como oficiais.
- Sem erros no console.

## Checklist Antes De Importar Qualquer Funcionalidade Do 1.0

- A funcionalidade ainda é necessária?
- Qual problema ela resolve?
- Qual é a fonte oficial dos dados?
- Qual página do 2.0 recebe isso?
- Existe componente base para renderizar?
- Dá para implementar sem copiar CSS antigo?
- Dá para implementar sem misturar regra de negócio com HTML?
- Como será testado?
- O visual continua parecendo Finanza?

## Anti-Regras

Não fazer:

- Criar CSS no final do arquivo só para sobrescrever algo.
- Copiar tela inteira do 1.0.
- Adicionar gradiente forte em todo card.
- Criar pílula diferente para cada página.
- Colocar texto explicativo demais dentro da interface.
- Deixar botão sem função aparente.
- Usar dados mockados sem sinalizar.
- Misturar importação, normalização e renderização na mesma função grande.

## Changelog

### 2.0.0-dev.51

- Usuarios padrao da v1 foram importados para a v2 como seed de identidade.
- Cada usuario importado recebeu `contactId` quando ha contato correspondente na base de Contatos.
- Criado `modules/identity.js` para resolver usuario ativo, contato vinculado, foto, email, setor e cargo.
- Conta ganhou seletor de usuario ativo para testar usuarios herdados da v1.
- Foto enviada pelo usuario agora atualiza tambem o contato vinculado na pagina Contatos.
- Cards de Contatos passam a exibir foto sincronizada quando existir.
- Backend e schema Supabase ganharam campo `contact_id` em usuarios para manter o vinculo online depois.

### 2.0.0-dev.50

- Rota Supabase-first documentada como proxima etapa de DB online, sem depender de Render Free.
- Criado `db/init.sql` com schema inicial versionado para Supabase/PostgreSQL.
- Criado `docs/supabase.md` para manter a decisao preparada e pausada.
- Backend alinhado ao schema com `audit_events` e indices iniciais.
- Criado `modules/ui-catalog.js` para centralizar nomes, icones e notas das paginas.
- Busca global e pagina Conta passaram a consumir o catalogo central, reduzindo duplicacao de UI.

### 2.0.0-dev.49

- Backend ganhou tabela/camada de usuarios com fallback em `server/storage/users.json`.
- Login por usuario e senha foi adicionado em `/api/auth/login`, mantendo a chave admin como recuperacao.
- Criados endpoints `/api/auth/me`, `/api/users`, `/api/users/me` para preparar perfis reais.
- Primeiro administrador pode ser criado automaticamente por `PAINELURE_ADMIN_USER` e `PAINELURE_ADMIN_PASSWORD`.
- Client JS ganhou funcoes para login, leitura do usuario atual e atualizacao do perfil.
- Proxima frente: ligar a tela Conta/Admin a esses endpoints sem quebrar o modo local.

### 2.0.0-dev.48

- Backend ganhou suporte opcional a PostgreSQL online via `DATABASE_URL`.
- Modo local por JSON foi preservado como fallback de desenvolvimento.
- Backend cria automaticamente `app_state` e `app_snapshots` no banco online.
- `GET /api/health` agora informa modo de armazenamento, prontidao e origem dos dados.
- Importacoes CSV e gravacao de dados passam pela mesma camada de persistencia.
- Frontend ganhou `PAINELURE_API_URL` opcional para chamar API hospedada fora do GitHub Pages.
- Backend ganhou `CORS_ORIGIN` para permitir frontend e API em dominios diferentes.
- Documentacao do backend atualizada com variaveis, tabelas e caminho de publicacao.
- Proxima frente: usuarios reais, sessoes persistentes, permissoes no backend e sincronizacao de avatar.

### 2.0.0-dev.47

- Conta ganhou upload de foto de perfil com armazenamento local no navegador.
- Avatar da sidebar e da página Conta passam a usar a foto escolhida automaticamente.
- Adicionada ação para remover foto e voltar às iniciais.
- Próxima frente do roadmap: concluir paridade limpa de perfil/admin com Finanza e v1 antes de expandir módulos.

### 2.0.0-dev.46

- Fontes `DM Sans` e `Syne` passaram a ser servidas localmente pelo projeto.
- Removida dependencia de Google Fonts no carregamento inicial.
- Pesos principais foram preloaded para evitar refresh com tela sem texto.
- Mantido o visual no padrao Finanza sem adicionar nova camada de CSS corretiva.
- Sidebar, busca, titulo de pagina e filtros de contatos foram realinhados ao ritmo visual do Finanza.
- Dashboard ficou mais enxuto com a remocao do bloco de metricas grandes.
- Criadas paginas dedicadas para escola, supervisor e conta de usuario, com botao voltar no padrao do app.
- Conta ganhou seletor de perfil sempre acessivel para recuperar o acesso de Administrador apos testes de permissao.
- Perfil clicavel ganhou menu compacto inspirado no Finanza com Conta, Admin e troca de perfil.
- Admin foi reorganizado em secoes estilo configuracoes do Finanza, mantendo funcoes relevantes da v1: permissoes, importacoes, backup, fontes e modo apresentacao.

### 2.0.0-dev.45

- Carregamento visual corrigido para evitar tela sem texto durante a busca da fonte oficial.
- Primeiro render voltou a acontecer imediatamente, sem aguardar backend ou fontes oficiais.
- Backend continua disponivel, mas carrega em segundo plano e nao interfere na sensacao visual.
- Controles visiveis de envio ao backend foram removidos do Admin para manter o painel limpo.
- Tokens de fonte, blur, logo, espacamento do conteudo e numeros foram realinhados ao padrao Finanza sem criar uma camada extra de CSS.

### 2.0.0-dev.44

- Backend inicial criado em Node sem dependências externas.
- Backend passa a servir o frontend e a API local em `http://localhost:4173`.
- Criados endpoints de healthcheck, leitura/gravação de dados e importação CSV.
- Frontend passou a tentar carregar `/api/data` quando executado pelo backend.
- Admin ganhou ação para enviar o estado atual ao backend.
- Armazenamento local do backend fica em `server/storage/app-data.json`, fora do Git.
- Criada documentação em `docs/backend.md`.

### 2.0.0-dev.43

- Implementado pacote dos 10 passos de paridade v1/Finanza no limite do frontend estático.
- Admin ganhou importação CSV por tipo: escolas, contatos, redes, calendário, supervisão e inventário detalhado.
- Tela de escola passou a reunir inventário, redes, supervisão, chamados e contatos úteis.
- Inventário ganhou busca textual e filtro de status por escola.
- Supervisão passou a classificar pendências em verde, amarelo e vermelho.
- Atalhos laterais agora podem ser personalizados nas preferências locais.
- Modo apresentação foi adicionado para ocultar áreas administrativas locais.
- Fonte CSV do calendário pode ser configurada pela Central de dados.
- Checklist de qualidade passou a registrar modo apresentação e QA visual.

### 2.0.0-dev.42

- Busca global estilo Finanza adicionada ao campo lateral.
- Resultados globais agora incluem páginas, escolas, redes, supervisores, contatos e chamados.
- Central de dados adicionada ao Admin com status das fontes e ações de atualização.
- Ações de preferência/local state foram centralizadas no Admin.
- Funções de foco entre escola, rede, inventário e supervisão foram expostas para navegação global.
- Preferências locais de widgets do dashboard foram adicionadas no Admin.

### 2.0.0-dev.41

- Fluxo entre Redes, Inventário, Escola e Supervisão ficou conectado por ações diretas.
- Navegação mobile foi alinhada ao menu principal enxuto.
- Contatos foram refinados com tabs roláveis e cards mais compactos.
- Cards de contato agora destacam o setor como pílula em vez de repetir uma linha de dado.
- Textos administrativos foram ajustados para a versão publicada.

### 2.0.0-dev.40

- Lista de supervisão deixou de usar a linha genérica de tabela.
- Supervisores ganharam layout próprio com avatar por iniciais, identidade e métricas agrupadas.
- Meta semanal e mensal agora aparecem como métricas compactas dentro da linha.
- Responsivo da supervisão foi ajustado para tablet e mobile.

### 2.0.0-dev.39

- Cards de escolas foram refinados com menos área vazia e mais informação útil.
- Removido filler estrutural dos cards de escola.
- Cards agora exibem ficha e total de itens como chips compactos.
- Cabeçalho do detalhe da escola ganhou avatar maior e alinhamento mais consistente.

### 2.0.0-dev.38

- Dashboard foi enxugado para reduzir redundância visual na primeira dobra.
- Atalhos principais ficaram focados em quatro áreas centrais: Escolas, Redes, Inventário e Supervisão.
- Agenda deixou de aparecer como KPI principal e segue acessível por atalho lateral e bloco operacional.
- Cards do painel inicial foram compactados para ficar mais próximos do ritmo visual do Finanza.

### 2.0.0-dev.37

- Barra lateral foi enxugada no padrão Finanza.
- Menu principal ficou restrito a Painel, Escolas, Supervisão e Contatos.
- Redes, Inventário, CTC, Chamados, Calendário e Relatórios foram movidos para atalhos fixos.
- Atalhos laterais agora respeitam a matriz de acesso do perfil ativo.
- Sidebar recebeu ajustes de espaçamento e detalhes visuais mais próximos do Finanza.

### 2.0.0-dev.36

- Estado local foi versionado para impedir que dados antigos escondam atualizações novas.
- Dashboard deixou de mostrar mensagens de obra/fonte pendente como alerta principal.
- Publicação e governança foram atualizadas para refletir o repositório próprio no GitHub Pages.
- Removido `content-visibility` dos cards e linhas interativas para reduzir sensação de travamento visual.
- Tema claro recebeu estados de hover/linha ativa com contraste mais próximo do Finanza.

### 2.0.0-dev.35

- Tema claro alinhado aos tokens do Finanza, incluindo acentos com contraste adequado.
- Adicionado carregamento antecipado do tema salvo para reduzir piscada visual.
- `localStorage` do tema ficou tolerante a ambientes restritos.
- Cards principais receberam sombra e borda especificas para o tema claro.

### 2.0.0-dev.34

- Removido o botao de privacidade/esconder dados da barra lateral.
- Tema claro passou a funcionar por tokens globais e persistencia em `localStorage`.
- Botao de tema agora alterna claro/escuro e atualiza `theme-color`.
- Tipografia da marca foi refinada para ficar mais contida no padrao Finanza.

### 2.0.0-dev.4

- Iniciada a Fase 1 de organização modular.
- Criada pasta `data/`.
- Criado `data/mock.js` para dados temporários.
- Criada pasta `modules/`.
- Criado `modules/dom.js`.
- Criado `modules/search.js`.
- Criado `modules/render.js`.
- Criado `modules/navigation.js`.
- `app.js` passou a ser apenas o inicializador da aplicação.
- Os arquivos foram separados sem `type="module"` para continuar funcionando ao abrir o HTML direto pelo arquivo.
- Criado `modules/data-store.js`.
- O app passou a consumir dados via `getAppData()`.
- Criado `docs/decisions.md` com decisões técnicas da versão 2.0.
- Nenhuma mudança visual intencional nesta etapa.

### 2.0.0-dev.5

- Iniciada a Fase 2 de importação de dados oficiais.
- Criado `data/sources.js` como registro central de fontes.
- Criado `modules/csv.js` com parser CSV leve.
- Criado `modules/normalizers.js` com normalizadores iniciais.
- Criado `modules/source-loader.js`.
- O app passou a tentar carregar fontes configuradas antes de renderizar.
- Como ainda não há URLs oficiais configuradas no 2.0, os mocks seguem como fallback.

### 2.0.0-dev.6

- Iniciada a importação real da área de Contatos.
- Criado `data/contacts.js`.
- Contatos oficiais do PainelURE 1.0 foram migrados para o formato do 2.0.
- Contatos foram separados nas categorias novas:
  - Tecnologia.
  - Gabinete.
  - Obras.
  - Compras.
  - Pagamento.
  - RH.
  - Supervisão.
  - Pedagógico.
- `data-store` passou a aceitar `seedData` acima dos mocks.
- A página de Contatos passou a usar dados reais herdados do 1.0, sem copiar o render legado.

### 2.0.0-dev.7

- Adicionada categoria `Supervisão` na página de Contatos.
- Supervisores educacionais foram movidos de `Pedagógico` para `Supervisão`.
- Roadmap atualizado para refletir a categoria correta.

### 2.0.0-dev.8

- Iniciada a importação real da área de Escolas.
- Criado `data/schools.js`.
- Lista oficial de 21 escolas do PainelURE 1.0 foi migrada como `seedData`.
- Página de Escolas passa a usar a base oficial herdada do 1.0 em vez dos mocks reduzidos.
- Dados de ficha e inventário permanecem zerados até conexão com as fontes oficiais específicas.

### 2.0.0-dev.9

- Criado `data/school-operational.js`.
- Escolas receberam métricas operacionais iniciais de inventário e alerta.
- Página `Redes e Câmeras` passou a usar dados herdados do 1.0 para rede, IPs e câmeras.
- Adicionado card de credenciais como informação restrita, sem gravar usuário ou senha no frontend público.
- Criado normalizador inicial para futura planilha de redes e câmeras.
- `source-loader` agora direciona a fonte `network` para `networkData`.

### 2.0.0-dev.10

- Criado `data/supervision.js`.
- Supervisão deixou de depender dos nomes mockados e passou a usar vínculos oficiais herdados do 1.0.
- A tabela de supervisores mantém ordem alfabética no render.
- Inventário deixou de usar itens mockados e passou a exibir resumo das métricas operacionais.
- `index.html` passou a carregar o seed de supervisão no fluxo do 2.0.
- `data/mock.js` foi reduzido a estrutura vazia para evitar dado fictício escondido.
- Dashboard deixou de exibir agenda/horário fictício e passou a sinalizar fonte pendente.

### 2.0.0-dev.11

- `data/sources.js` passou a configurar a planilha oficial de supervisão de abril de 2026.
- Parser CSV agora preserva cabeçalhos repetidos usando sufixo numérico.
- Normalizador de supervisão passou a ler `Nome do Supervisor`, `Data Da Visita`, `Escola Visitada` e colunas repetidas de `Escolas Visitadas`.
- Supervisores oficiais são enriquecidos com visitas, meta semanal, meta mensal e pendências calculadas pela planilha.
- Fonte oficial substitui o seed de supervisão pelo fluxo `source-loader`, sem alterar renderizadores.

### 2.0.0-dev.12

- Tela de Supervisão ganhou detalhe do supervisor selecionado.
- Linhas de supervisores agora são clicáveis e mantêm estado ativo.
- Detalhe exibe contato, meta semanal, meta mensal, escolas vinculadas e fonte dos dados.
- Reaproveitados `box`, `detail-widget`, `status-pill` e `network-layout`, sem criar um visual paralelo.

### 2.0.0-dev.13

- Escolas vinculadas no detalhe do supervisor viraram cards clicáveis.
- Clique em escola vinculada abre a página de Escolas e destaca o card correspondente.
- Cards de escola receberam chave estável para navegação interna.
- Adicionado foco visual temporário em escola aberta por atalho.

### 2.0.0-dev.14

- Página de Escolas ganhou detalhe da escola selecionada.
- Cards de escola agora são botões acessíveis e mantêm estado ativo.
- Detalhe da escola mostra inventário, alertas, redes/câmeras e supervisor vinculado.
- Métricas operacionais por escola foram expostas em `schoolInventoryMetrics` na camada de dados.

### 2.0.0-dev.15

- Detalhe da escola ganhou ações para abrir redes/câmeras e supervisor responsável.
- Navegação interna agora conecta Escola -> Redes e Escola -> Supervisão.
- `focusSchool`, `focusNetworkSchool` e `focusSupervisor` foram expostos como atalhos internos controlados.
- Card de escola aberto por atalho passa a ficar ativo e destacado.

### 2.0.0-dev.16

- Página de Redes e Câmeras ganhou faixa de contexto da escola selecionada.
- Faixa mostra escola, município, CIE e ações rápidas.
- Navegação interna agora conecta Redes -> Escola e Redes -> Supervisão.
- Reaproveitada a mesma estrutura de ações do detalhe da escola.

### 2.0.0-dev.17

- Criado `data/inventory.js` com 107 linhas sanitizadas de inventário por escola.
- `data-store` passou a carregar `schoolAssets`, `profiles` e `quality`.
- Página de Inventário ganhou seletor de escola, resumo por categoria e lista de itens.
- Detalhe da escola ganhou ação para abrir inventário.
- Criado `data/governance.js` com calendário operacional inicial, matriz de perfis e checklist de qualidade.
- Criadas páginas `Perfis` e `Qualidade`.
- As 10 fases foram fechadas como MVP, com pendências explícitas para fonte oficial de calendário, autenticação e publicação.

### 2.0.0-dev.18

- Comparado o funcionamento da 1.0 contra a cobertura da 2.0.
- Criado `docs/1x2-comparison.md`.
- Criado `data/operations.js` com agenda CTC, chamados, relatórios e diagnósticos administrativos.
- Criadas páginas `Técnicos CTC`, `Chamados`, `Relatórios` e `Admin`.
- Criados renderizadores `renderCtc`, `renderCalls`, `renderReports` e `renderAdmin`.
- Funcionalidades foram adaptadas ao padrão visual Finanza, sem copiar CSS/telas legadas.

### 2.0.0-dev.19

- Pendências do MVP fechadas no limite correto do frontend estático.
- Implementada persistência local em `painelure2_state_v1`.
- Implementados exportação e importação de backup JSON.
- Implementado perfil ativo local em `painelure2_role`.
- Navegação passa a ser filtrada por perfil ativo.
- Criado normalizador CSV para calendário.
- Automação DOCX/PDF documentada como ferramenta externa, fora do frontend.

### 2.0.0-dev.20

- Bloqueado acesso direto por hash a páginas fora do perfil ativo.
- `canAccess` passou a ser exposto pela camada de perfis.
- Admin ganhou diagnósticos derivados da base carregada.
- Criado `docs/qa-checklist.md` para QA manual do MVP.

### 2.0.0-dev.33

- Preparada publicacao da v2 em repositorio proprio.
- Criado `README.md` com status, norte visual e execucao local.
- Criado `.nojekyll` para GitHub Pages.
- Criado `.gitignore` basico para evitar lixo local.

### 2.0.0-dev.32

- Textos de cabeçalho das páginas foram encurtados e deixaram de soar como documentação técnica.
- Removidas menções desnecessárias a MVP/2.0/modelo visual na interface principal.
- Subtítulos passaram a seguir o tom do Finanza: curtos, operacionais e sem explicar o sistema.

### 2.0.0-dev.31

- Rótulos, pílulas e labels internos ficaram mais próximos do padrão Finanza.
- Peso do seletor de mês reduzido para 600 e sombra suavizada.
- Labels uppercase passaram a usar peso/letter-spacing mais discretos.
- Textos visíveis do dashboard corrigidos com acentuação: Página, Calendário, Relatórios, Próximas decisões e responsáveis.

### 2.0.0-dev.30

- Corrigida escala tipográfica da marca e dos títulos de página para o padrão Finanza.
- H1 deixou de usar `clamp` grande e passou para 28px, alinhado ao `.pt` do Finanza.
- Logo da sidebar ficou mais contido; `URE` usa peso 700 como o segundo trecho do logo do Finanza.
- Ajustado alinhamento vertical da marca para evitar aparência exagerada.

### 2.0.0-dev.29

- Corrigido bug visual da tabela de supervisão: linhas `button.table-row` recebiam fundo padrão claro do navegador.
- `table-row` agora define `background: transparent` no estado base.
- Hover e estado ativo da tabela foram levemente ajustados para manter contraste no padrão Finanza.

### 2.0.0-dev.28

- Tipografia normalizada ao padrão Finanza.
- Pesos `900` removidos da interface principal.
- Navegação, cards, pílulas, tabelas, contatos, labels e estados passaram a usar pesos `500/600/700/800`.
- Títulos e valores principais ficaram menos pesados visualmente.
- Adicionada regra global para `strong`/`b` com peso `700`, alinhada ao Finanza.

### 2.0.0-dev.27

- Atalhos do dashboard deixaram de ter descrições fixas.
- Cada atalho agora recebe uma nota curta calculada pelos dados carregados.
- Estados de escolas, redes, inventário, supervisão, contatos, calendário, CTC e relatórios aparecem de forma discreta.
- Mantido o padrão Finanza: contexto útil em uma linha, sem badges ou ornamentação extra.

### 2.0.0-dev.26

- Navegação passou a usar delegação de eventos, permitindo botões renderizados dinamicamente.
- Blocos `Próximas decisões` e `Agenda geral` deixaram de ser estáticos.
- Dashboard agora calcula decisões a partir de redes faltantes, alertas de inventário e pendências de supervisão.
- Agenda do painel agora reflete calendário, visitas CTC e chamados abertos.
- Linhas geradas no dashboard mantêm navegação real via `data-jump`.

### 2.0.0-dev.25

- Dashboard deixou de depender de números fixos no HTML.
- Criado `renderDashboard` para atualizar métricas, resumo e aviso principal a partir da camada de dados.
- Cards métricos agora refletem escolas, redes, inventário, supervisão e calendário carregados.
- Quando fontes oficiais terminam em segundo plano, o dashboard é atualizado sem recriar a página inteira.
- Mantido o padrão Finanza: HTML como estrutura visual, JS apenas atualizando estado e conteúdo.

### 2.0.0-dev.24

- Dashboard ficou mais operacional e menos "rascunho": removidos botões sem função no topo, sidebar e cards.
- Aviso principal passou a apontar para Relatórios e comunicar base carregada sem tom de obra em andamento.
- Atalhos de Técnicos CTC e Relatórios passaram a navegar de verdade.
- Linhas de próximas decisões e agenda geral ganharam destinos reais.
- Sidebar ficou mais limpa, mantendo atalhos fixos sem ações falsas.
- CSS morto de botões removidos foi eliminado para não acumular remendos.

### 2.0.0-dev.23

- Fontes oficiais passaram a carregar em `requestIdleCallback` ou atraso curto, depois da primeira pintura.
- Selects de Redes e Inventário deixaram de acumular listeners em rerenders.
- Removido `backdrop-filter` do workbench para reduzir custo de pintura em área grande.
- Sombras dos cards principais foram suavizadas para manter o visual Finanza com menor peso de renderização.

### 2.0.0-dev.22

- Finanza definido como norte oficial de usabilidade, design e performance do PainelURE 2.0.
- Criada seção `Norte Oficial: Finanza` com critérios práticos para novas decisões de interface.
- Criada seção `Prioridade Atual` para estabilizar performance, design system e dashboard antes de crescer funcionalidades.
- Criadas trilhas imediata e seguinte no roadmap para separar refino da base e importação limpa da 1.0.
- Reforçada regra de que toda funcionalidade herdada da 1.0 precisa ser redesenhada no padrão 2.0/Finanza.

### 2.0.0-dev.21

- Corrigido gargalo principal de carregamento: a aplicacao deixou de renderizar todas as paginas ao iniciar.
- Criada renderizacao sob demanda por pagina via `renderPage`.
- Navegacao passou a garantir que a tela solicitada seja montada apenas quando aberta.
- Reduzido peso visual do topo para aproximar a escala do Finanza.
- Ajustados blur, brilho e proporcao dos cards para reduzir custo visual e sensacao de interface pesada.
- Adicionado `content-visibility` em listas e cards repetidos.
- Fontes oficiais deixaram de bloquear a primeira pintura da interface.
- Busca CSV passou a usar timeout para evitar espera longa por planilhas externas.

### 2.0.0-dev.3

- Refinamento de performance.
- Removidos overlays e animações desnecessárias.
- Reduzido uso de `backdrop-filter`.
- Busca da sidebar passa a filtrar a página atual.
- Adicionado `contain: layout paint` em cards repetidos.
- Grids ajustados para melhor estabilidade.
- Visual aproximado novamente do Finanza.

### 2.0.0-dev.2

- Criadas páginas internas iniciais:
  - Escolas.
  - Redes e Câmeras.
  - Inventário.
  - Supervisão.
  - Contatos.
  - Calendário URE.
- Criados cards de escola com iniciais.
- Criado seletor inicial de escola para redes e câmeras.
- Criados filtros iniciais de contatos.
- Corrigida duplicação no render de contatos.

### 2.0.0-dev.1

- Criada pasta separada `painelure2`.
- Criado shell visual inspirado no Finanza.
- Criada sidebar fixa.
- Criado dashboard inicial.
- Criados cards de atalhos.
- Criados cards métricos.
- Criada navegação básica entre páginas.
- Criados tokens visuais iniciais.

## Próxima Decisão

A próxima etapa recomendada é fechar a paridade limpa de Conta/Admin antes de crescer novos módulos:

- definir quais usuários reais existirão no backend;
- decidir se foto de perfil será local ou sincronizada;
- separar permissões reais por perfil, como na v1;
- manter Admin como central única de fontes, importações, backup e publicação;
- validar fontes oficiais por domínio: supervisão, inventário, redes e câmeras, calendário URE.

Depois disso, cada fonte entra pelo registro `data/sources.js`, passa por normalizador e só então alimenta os componentes.
