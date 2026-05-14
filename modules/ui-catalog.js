(function () {
  const P = window.PainelURE;

  const PAGE_META = {
    dashboard: { icon: "PA", label: "Painel", note: "Visao inicial e atalhos", type: "Pagina" },
    schools: { icon: "ES", label: "Escolas", note: "Unidades e detalhes", type: "Pagina" },
    network: { icon: "RE", label: "Redes e cameras", note: "Infraestrutura por escola", type: "Pagina" },
    inventory: { icon: "IN", label: "Inventario", note: "Equipamentos e status", type: "Pagina" },
    ctc: { icon: "CT", label: "Tecnicos CTC", note: "Agenda tecnica", type: "Pagina" },
    calls: { icon: "CH", label: "Chamados", note: "Fila operacional", type: "Pagina" },
    supervision: { icon: "SV", label: "Supervisao", note: "Metas e vinculos", type: "Pagina" },
    contacts: { icon: "CO", label: "Contatos", note: "Setores e ramais", type: "Pagina" },
    calendar: { icon: "AG", label: "Calendario URE", note: "Agenda institucional", type: "Pagina" },
    reports: { icon: "RL", label: "Relatorios", note: "Resumo operacional", type: "Pagina" },
    profiles: { icon: "PF", label: "Perfis", note: "Matriz de acesso", type: "Pagina" },
    quality: { icon: "QL", label: "Qualidade", note: "Checklist do painel", type: "Pagina" },
    admin: { icon: "AD", label: "Admin", note: "Fontes, backups e publicacao", type: "Pagina" },
    user: { icon: "US", label: "Conta", note: "Perfil e preferencias", type: "Pagina" }
  };

  function pageMeta(page) {
    return PAGE_META[page] || { icon: "PG", label: page, note: "Disponivel para este perfil", type: "Pagina" };
  }

  function pageEntries(pages) {
    return pages.map(page => ({ page, ...pageMeta(page) }));
  }

  P.PAGE_META = PAGE_META;
  P.pageMeta = pageMeta;
  P.pageEntries = pageEntries;
})();
