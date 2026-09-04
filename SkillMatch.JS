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