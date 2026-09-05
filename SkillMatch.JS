// ==========================================
// RF01 - Criar o perfil do candidato
// ==========================================
const candidato = {
  nome: "Juan",
  areaInteresse: "Desenvolvimento de Software e Apps Mobile",
  habilidades: [
    "Lógica de Programação", 
    "JavaScript", 
    "HTML", 
    "CSS", 
    "Redes", 
    "Manutenção de Hardware", 
    "Excel"
  ],
  tempoExperiencia: "2 anos"
};

// ==========================================
// RF09 e RF11 - Criar classe principal e usar 'this'
// ==========================================
class Vaga {
  constructor(empresa, cargo, requisitos) {
    this.empresa = empresa; 
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  exibirResumo() {
    return `Vaga para ${this.cargo} na empresa ${this.empresa}.`;
  }
}

// ==========================================
// RF10 - Usar herança
// ==========================================
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, frameworkPrincipal) {
    super(empresa, cargo, requisitos);
    this.frameworkPrincipal = frameworkPrincipal;
  }

  exibirDetalhesFrontEnd() {
    return `${this.exibirResumo()} Framework focado: ${this.frameworkPrincipal}.`;
  }
}
// ==========================================
// RF02 - Criar uma lista de vagas 
// ==========================================
const vagasFicticias = [
   new VagaFrontEnd("Inova Tech", "Desenvolvedor Front-End Júnior", ["HTML", "CSS", "JavaScript", "React"], "React"),
  new VagaFrontEnd("Mobile Solutions", "Desenvolvedor Mobile Júnior", ["Lógica de Programação", "JavaScript", "React Native", "APIs"], "React Native"),
  new VagaFrontEnd("WebCorp", "Estagiário Front-End", ["HTML", "CSS", "Lógica de Programação", "Redes"], "Nenhum")
];
// ==========================================
// RF03, RF04, RF05 e RF08 - Motor de Análise
// ==========================================
function analisarCompatibilidade(perfilCandidato, listaVagas) {
  return listaVagas.map(vaga => {
    const habilidadesPossuidas = vaga.requisitos.filter(req => perfilCandidato.habilidades.includes(req));
    const habilidadesFaltantes = vaga.requisitos.filter(req => !perfilCandidato.habilidades.includes(req));
    const percentual = Math.round((habilidadesPossuidas.length / vaga.requisitos.length) * 100);
    
  let classificacao = "" ;
  if (percentual >= 80) classificacao = "Alta Compatibilidade";
  else if (percentual >= 50) classificacao = "Média Compatibilidade";
  else classificacao = "Baixa Compatibilidade";

  return {
    vaga: vaga.cargo,
    empresa: vaga.empresa,
    Match: '${percentual}%',
    Classificacao: classificacao,
    Faltam: habilidadesFaltantes.join(", ") || "Nenhuma"
 };
  });
}
// ==========================================
// RF14 - Usar promise e async/await
// ==========================================
function buscarVagas() {
  return new Promise((resolve, reject) => {
    console.log("Buscando vagas disponíveis...");
    setTimeout(() => {
      const servidorOnline = true; // Simulação de verificação do servidor
      if (servidorOnline) resolve(vagasFicticias);
      else reject("Erro 500: Falha ao conectar com o servidor de vagas.");
    }, 2000);
  });
}

// ==========================================
// Função Principal
// ==========================================
async function iniciarSistema() {
  try {
    const vagasCarregadas = await buscarVagas();
    console.log("Vagas carregadas com sucesso!\n");
    const resultadoAnalise = analisarCompatibilidade(candidato, vagasCarregadas);
    console.log("=== RELATÓRIO DE COMPATIBILIDADE ===");
    console.table(resultadoAnalise);
  } catch (erro) {
    console.error("Ops, ocorreu um problema:", erro);
  }
}

// Iniciar o sistema
iniciarSistema();
