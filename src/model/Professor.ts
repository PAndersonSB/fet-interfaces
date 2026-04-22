export type Professor = {
  nome: string;                   // Name
  cargaHorariaAlvo?: number;      // Target_Number_of_Hours

  disciplinasHabilitadas?: string[]; // Qualified_Subject

  comentarios?: string;
};

export type ListaProfessores = {
  professores: Professor[];
};