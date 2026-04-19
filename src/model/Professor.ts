export interface Professor {
    id: string;
    nome: string;
    nomeLongo: string;
    codigo: string;
    cargaHoraria: number; // Target number of hours
    disciplinas: string[]; // ids das disciplinas
  }