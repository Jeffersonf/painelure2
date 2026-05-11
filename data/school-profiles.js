(function () {
  const P = window.PainelURE = window.PainelURE || {};
  P.seedData = P.seedData || {};

  const profiles = [
    {
      school: "PEI EE Idalicio Mendes Lima",
      address: "Fazenda Pirituba, s/no - Itapeva/SP",
      phone: "(15) 3624-7326",
      email: "e905227a@educacao.sp.gov.br",
      viceDirector: "Aparecida de Fatima Dom. Oliveira Almeida; Flaviane Cristiane Bispo; Silmara Regina Soares Conceicao",
      goe: "Jose Rubens Ortolan Gomes",
      notes: "Horario: 12:00 as 23:00. E-mail pedagogico: e905227p@educacao.sp.gov.br. Supervisor: Magda Gisele Silva Oliveira."
    },
    {
      school: "EE Doutor Antonio Deffune",
      phone: "(15) 3526-7271",
      email: "e049323a@educacao.sp.gov.br",
      viceDirector: "Maria Cristina Mendes de Melo",
      notes: "Horario: 12:00 as 23:00. E-mail pedagogico: e049323p@educacao.sp.gov.br."
    },
    {
      school: "PEI EE Professora Celia Vasques Ferrari Duch",
      phone: "(15) 3534-1192",
      email: "e039731a@educacao.sp.gov.br",
      director: "Paulo Sergio Vieira",
      notes: "Horario: 12:40 as 23:00. E-mail pedagogico: e039731p@educacao.sp.gov.br."
    },
    {
      school: "PEI EE Professora Cinira Daniel da Silva",
      address: "Rua Martinho Daniel da Silva, 50 - Distrito do Guarizinho - Itapeva/SP",
      phone: "(15) 3523-1137",
      email: "e035348a@educacao.sp.gov.br",
      director: "Cassia Avila Bueno da Silva",
      viceDirector: "Elizangela Justina de Paula Oliveira Costa",
      goe: "Daiany Abreu Barros",
      notes: "Horario: 12:00 as 23:00. E-mail pedagogico: e035348p@educacao.sp.gov.br. Supervisor: Adilson Manoel Fogaca."
    },
    {
      school: "EE Bairro Ferreira dos Matos",
      phone: "(15) 3544-6226",
      email: "e915087a@educacao.sp.gov.br",
      notes: "Horario: 12:30 as 23:00. E-mail pedagogico: e915087p@educacao.sp.gov.br. Supervisor: Daiane Aparecida de Oliveira Ribeiro."
    },
    {
      school: "PEI EE Professora Francelina Franco",
      phone: "(15) 3546-1242",
      viceDirector: "Elder Fogaca de Lara",
      goe: "Nelia Aparecida de Oliveira Alves",
      notes: "Horario: 07:00 as 23:00. Supervisor: Edilene Silva Almeida Oliveira."
    },
    {
      school: "EE Professor Gerson de Barros Margarido",
      phone: "(15) 3624-7011",
      email: "e043412a@educacao.sp.gov.br",
      notes: "Horario: 12:00 as 23:00. E-mail pedagogico: e043412p@educacao.sp.gov.br."
    },
    {
      school: "EE Bairro Boa Vista Intervales",
      phone: "(15) 3444-6100",
      email: "e915075a@educacao.sp.gov.br",
      notes: "Horario: 07:00 as 17:40. E-mail pedagogico: e915075p@educacao.sp.gov.br. Supervisor: Maria Luiza Brisolla de Queiroz."
    },
    {
      school: "PEI EE Jeminiano David Muzel",
      phone: "(15) 3522-3829 / (15) 3522-2155",
      email: "e015477a@educacao.sp.gov.br",
      director: "Elaine Cristina Araujo Toledo",
      viceDirector: "Janaina Aparecida Pereira Ribeiro",
      goe: "Gizeli Duarte de Oliveira",
      notes: "E-mail pedagogico: e015477p@educacao.sp.gov.br. Supervisor: Adilson Manoel Fogaca."
    },
    {
      school: "PEI EE Professor Joao Baptista do Amaral Vasconcellos",
      phone: "(15) 3542-2370",
      email: "e910077a@educacao.sp.gov.br",
      director: "Alessandra Ap. Souto Martinho J. de Oliveira",
      goe: "Dalva Maria Garcia",
      notes: "Horario: 07:00 as 23:00. E-mail pedagogico: e910077p@educacao.sp.gov.br."
    },
    {
      school: "PEI EE Professor Jose Vasques Ferrari",
      address: "Rua Professor Humberto Fascetti, no 120 - Parque Cimentolandia - Itapeva/SP",
      phone: "(15) 3522-2866",
      email: "e015519a@educacao.sp.gov.br",
      viceDirector: "Vera Leticia Faria da Cruz",
      goe: "Ana Cristina Poglisch Santos",
      notes: "Horario: 07:30 as 17:00. E-mail pedagogico: e015519p@educacao.sp.gov.br. Supervisor: Maria Luiza Brisolla de Queiroz."
    },
    {
      school: "PEI EE Professora Nicota Soares",
      address: "Rua Roselandia, s/no - Jardim Belvedere - Itapeva/SP",
      phone: "(15) 3522-3077",
      email: "e015489a@educacao.sp.gov.br",
      director: "Myrna Weruska Pereira de Souza",
      goe: "Valquiria dos Santos Pereira Rosa",
      notes: "Horario: 07:00 as 17:00. E-mail pedagogico: e015489p@educacao.sp.gov.br. Supervisor: Daiane Aparecida de Oliveira Ribeiro."
    },
    {
      school: "PEI EE Oscar Kurtz Camargo",
      address: "Rua Joaquim Amantino Ferreira, no 317 - Centro - Ribeirao Grande/SP",
      phone: "(15) 3544-1194 / (15) 3544-1137",
      email: "e015076a@educacao.sp.gov.br",
      director: "Milena Ferreira de Almeida Chrischner Figueiredo",
      goe: "Amanda Caroline Ferreira Monticeli",
      notes: "Horario: 07:00 as 23:00. E-mail pedagogico: e015076p@educacao.sp.gov.br. Supervisor: Magda Gisele Silva Oliveira."
    },
    {
      school: "PEI EE Otavio Ferrari",
      phone: "(15) 3522-0303 / (15) 3522-1691",
      email: "e015404a@educacao.sp.gov.br",
      director: "Fabiano Jose Santos Ferraz",
      goe: "Marcelo Jose Fonseca de Lima",
      notes: "E-mail pedagogico: e015404p@educacao.sp.gov.br."
    },
    {
      school: "PEI EE Padre Arlindo Vieira",
      phone: "(15) 3542-1530",
      email: "e015118a@educacao.sp.gov.br",
      director: "Edicleia Pontes de Jesus",
      goe: "Luana Aparecida da Cruz Prestes Queiroz",
      notes: "Horario: 07:30 as 17:00. E-mail pedagogico: e015118p@educacao.sp.gov.br."
    },
    {
      school: "EE Doutor Raul Venturelli",
      address: "Rua Yoiti Ikeda, 170 - Centro - Capao Bonito/SP",
      phone: "(15) 3542-1131 / (15) 3542-1518",
      email: "e015222a@educacao.sp.gov.br",
      director: "Elisete de Fatima Siqueira",
      viceDirector: "Silvia Cristina de Oliveira Barros; Simone Paula dos Reis Rodrigues",
      goe: "Sergio de Proenca Ramos",
      notes: "Horario: 07:00 as 23:00. E-mail pedagogico: e015222p@educacao.sp.gov.br."
    },
    {
      school: "PEI EE Ricardo Campolim de Almeida Neto",
      phone: "(15) 3535-0309 / (15) 3535-7373",
      email: "e915117a@educacao.sp.gov.br",
      director: "Rodrigo Manoel Ferreira Marques",
      goe: "Wilson Rodrigues Cordeiro",
      notes: "Horario: 12:00 as 23:00. E-mail pedagogico: e915117p@educacao.sp.gov.br. Supervisor: Adilson Manoel Fogaca."
    },
    {
      school: "EE Professor Silverio Monteiro",
      phone: "(15) 5704-3611",
      email: "e035336a@educacao.sp.gov.br",
      notes: "Horario: 12:00 as 23:00. E-mail pedagogico: e035336p@educacao.sp.gov.br."
    },
    {
      school: "PEI EE Simpliciano Campolim de Almeida",
      phone: "(15) 3535-1126",
      email: "e015428a@educacao.sp.gov.br",
      director: "Antonio dos Santos Junior",
      goe: "Donizeth Lopes de Camargo Junior",
      notes: "Horario: 07:00 as 23:00. E-mail pedagogico: e015428p@educacao.sp.gov.br. Supervisor: Adilson Manoel Fogaca."
    },
    {
      school: "EE Bairro Turvo dos Almeidas",
      phone: "(15) 3379-7199",
      email: "e926036a@educacao.sp.gov.br",
      notes: "Horario: 12:30 as 23:00. E-mail pedagogico: e926036p@educacao.sp.gov.br. Supervisor: Maria Luiza Brisolla de Queiroz."
    },
    {
      school: "PEI EE Professora Zulmira de Oliveira",
      phone: "(15) 3522-1655",
      email: "e015544a@educacao.sp.gov.br",
      director: "Maria Aparecida Miranda Melo",
      goe: "Pedro Henrique Pinheiro Barros",
      notes: "Horario: 07:00 as 23:00. E-mail pedagogico: e015544p@educacao.sp.gov.br."
    }
  ];

  P.seedData.schoolProfiles = profiles.map(profile => ({
    director: "",
    viceDirector: "",
    proati: "",
    goe: "",
    phone: "",
    mobile: "",
    email: "",
    address: "",
    notes: "",
    ...profile,
    id: `profile-${profile.school.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`
  }));
})();
