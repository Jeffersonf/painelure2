(function () {
  const P = window.PainelURE = window.PainelURE || {};
  P.seedData = P.seedData || {};

  const photos = {
    dirigente: "https://midiasstoragesec.blob.core.windows.net/001/2025/09/dsc02935-5.jpg",
    setec: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-19-at-15-54-28.jpeg",
    seintec: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-05-at-13-55-58.jpeg",
    seom: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-05-at-13-55-57.jpeg",
    eec: "https://midiasstoragesec.blob.core.windows.net/001/2026/02/whatsapp-image-2026-02-24-at-11-55-32.jpeg",
    ese1: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-05-at-13-59-04-1.jpeg",
    ese2: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-19-at-15-41-59.jpeg",
    ese3: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-05-at-13-59-03.jpeg",
    ese4: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-28-at-13-43-36.jpeg",
    ese5: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-05-at-14-10-29.jpeg",
    ese6: "https://midiasstoragesec.blob.core.windows.net/001/2025/08/whatsapp-image-2025-08-05-at-13-55-56.jpeg"
  };

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function contactId(contact) {
    return `contact-${normalize([contact.name, contact.role, contact.email].filter(Boolean).join("-"))}`;
  }

  function findContact(name, roleHint = "", email = "") {
    const contacts = P.seedData.contacts || [];
    const nameKey = normalize(name);
    const roleKey = normalize(roleHint);
    const emailKey = normalize(email);
    return contacts.find(contact => emailKey && normalize(contact.email) === emailKey && (!roleKey || normalize(contact.role).includes(roleKey)))
      || contacts.find(contact => normalize(contact.name) === nameKey && roleKey && normalize(contact.role).includes(roleKey))
      || contacts.find(contact => normalize(contact.name) === nameKey)
      || null;
  }

  function mapUser(user) {
    const contact = findContact(user.contactName || user.name, user.contactRole || "", user.email || "");
    return {
      ...user,
      username: user.login,
      contactId: contact ? contact.id : "",
      contactSync: contact ? "linked" : "pending",
      credentials: "pending-online",
      legacySource: "PainelURE 1.0"
    };
  }

  const contactPhotos = {
    "Andre Dias de Oliveira|Dirigente Regional de Ensino": photos.dirigente,
    "Jefferson Felipe|Problemas no site": photos.setec,
    "Jefferson Felipe|Chefe de Seção": photos.setec,
    "Elcio Renato Bonifacio de Azevedo|Chefe de Serviço": photos.seintec,
    "Jeffeson do Espirito Santo Moreira|Técnico Prodesp": photos.setec,
    "Gustavo|CTC": photos.setec,
    "Nelio Celso Fernandes Junior|Chefe de Serviço": photos.seom,
    "Jaqueline de Oliveira Cunha Borelli|PEC - Arte": photos.eec,
    "Jose do Amaral Netto|PEC - Projetos Especiais": photos.eec,
    "Paula|Especialista em Currículo": photos.eec,
    "Marcio Nunes da Cruz|Supervisor Educacional": photos.ese1,
    "Maria Luiza Brizolla de Queiroz|Supervisor Educacional": photos.ese2,
    "Edilene da Silva Almeida Oliveira|Supervisor Educacional": photos.ese3,
    "Adilson Fogaça|Supervisor Educacional": photos.ese4,
    "Daiane Aparecida de Oliveira Ribeiro|Supervisor Educacional": photos.ese5,
    "Magda Gisele Silva de Oliveira|Supervisor Educacional": photos.ese6
  };

  P.seedData.contacts = (P.seedData.contacts || []).map(contact => ({
    ...contact,
    id: contact.id || contactId(contact),
    photo: contact.photo || contactPhotos[`${contact.name}|${contact.role}`] || ""
  }));

  function ensureContact(contact) {
    const exists = (P.seedData.contacts || []).find(item =>
      normalize(item.name) === normalize(contact.name) && normalize(item.role) === normalize(contact.role)
    );
    if (exists) return exists;
    const nextContact = {
      id: contactId(contact),
      phone: contact.phone || "",
      email: contact.email || "",
      photo: contact.photo || "",
      ...contact
    };
    P.seedData.contacts.push(nextContact);
    return nextContact;
  }

  [
    { name: "Bruno", role: "CTC", sector: "Tecnologia", email: "itv.setec@educacao.sp.gov.br", phone: "6235", photo: photos.setec },
    { name: "Danilo", role: "CTC", sector: "Tecnologia", email: "itv.setec@educacao.sp.gov.br", phone: "6235", photo: photos.setec },
    { name: "Eline Fernanda Teobaldo Batagin", role: "PEC - Quimica", sector: "Pedagógico", email: "deitvnpe@educacao.sp.gov.br", phone: "6212", photo: photos.eec },
    { name: "Elysane Rodrigues Cardoso Maciel", role: "PEC - Historia", sector: "Pedagógico", email: "deitvnpe@educacao.sp.gov.br", phone: "6218", photo: photos.eec },
    { name: "Tatiane Ryden de Mello Graciliano", role: "PEC - Educacao Inclusiva", sector: "Pedagógico", email: "deitvnpe@educacao.sp.gov.br", phone: "6218", photo: photos.eec }
  ].forEach(ensureContact);

  const supervisorUsers = (P.seedData.supervisors || []).map((supervisor, index) => mapUser({
    id: `user-supervisor-${index + 1}`,
    name: supervisor.name,
    login: supervisor.email ? supervisor.email.split("@")[0] : supervisor.name,
    role: "Supervisão",
    contactName: supervisor.name,
    contactRole: "Supervisor Educacional",
    email: supervisor.email,
    supervisorName: supervisor.name,
    active: true
  }));

  const pecUsers = [
    { id: "user-pec-eline-batagin", name: "Eline Fernanda Teobaldo Batagin", login: "eline.batagin", role: "Pedagógico", contactName: "Eline Fernanda Teobaldo Batagin", contactRole: "PEC - Quimica" },
    { id: "user-pec-elysane-maciel", name: "Elysane Rodrigues Cardoso Maciel", login: "elysane.maciel", role: "Pedagógico", contactName: "Elysane Rodrigues Cardoso Maciel", contactRole: "PEC - Historia" },
    { id: "user-pec-jaqueline-borelli", name: "Jaqueline de Oliveira Cunha Borelli", login: "jaqueline.borelli", role: "Pedagógico", contactName: "Jaqueline de Oliveira Cunha Borelli", contactRole: "PEC - Arte" },
    { id: "user-pec-tatiane-graciliano", name: "Tatiane Ryden de Mello Graciliano", login: "tatiane.graciliano", role: "Pedagógico", contactName: "Tatiane Ryden de Mello Graciliano", contactRole: "PEC - Educacao Inclusiva" },
    { id: "user-pec-jose-netto", name: "Jose do Amaral Netto", login: "jose.netto", role: "Pedagógico", contactName: "Jose do Amaral Netto", contactRole: "PEC - Projetos Especiais" },
    { id: "user-pec-paula", name: "Paula", login: "paula", role: "Pedagógico", contactName: "Paula", contactRole: "Especialista em Currículo" }
  ].map(mapUser);

  P.seedData.users = [
    mapUser({ id: "user-admin-jefferson", name: "Jefferson", login: "Jefferson", role: "Administrador", contactName: "Jefferson Felipe", contactRole: "Chefe de Seção", email: "jefferson.paula@educacao.sp.gov.br", active: true }),
    mapUser({ id: "user-dirigente", name: "Andre", login: "Andre", role: "Gabinete", contactName: "Andre Dias de Oliveira", contactRole: "Dirigente Regional de Ensino", email: "deitv@educacao.sp.gov.br", active: true }),
    mapUser({ id: "user-seintec", name: "Elcio", login: "Elcio", role: "SEINTEC", contactName: "Elcio Renato Bonifacio de Azevedo", contactRole: "Chefe de Serviço", email: "elcio.azevedo@educacao.sp.gov.br", active: true }),
    mapUser({ id: "user-seom-nelio", name: "Nelio", login: "Nelio", role: "Consulta", contactName: "Nelio Celso Fernandes Junior", contactRole: "Chefe de Serviço", email: "nelio.junior@educacao.sp.gov.br", active: true }),
    mapUser({ id: "user-ctc", name: "Gustavo", login: "Gustavo", role: "Técnicos CTC", contactName: "Gustavo", contactRole: "CTC", email: "itv.setec@educacao.sp.gov.br", active: true }),
    mapUser({ id: "user-ctc-bruno", name: "Bruno", login: "Bruno", role: "Técnicos CTC", contactName: "Bruno", contactRole: "CTC", active: true }),
    mapUser({ id: "user-ctc-danilo", name: "Danilo", login: "Danilo", role: "Técnicos CTC", contactName: "Danilo", contactRole: "CTC", active: true }),
    ...pecUsers,
    ...supervisorUsers
  ];
})();
