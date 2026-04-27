export type Atividade = {
  id: number;

  professor: string;
  disciplina: string;
  estudantes: string[]; 

  duracao: number;
  duracaoTotal: number;

  grupoAtividadeId?: number;

  ativo?: boolean;
  comentarios?: string;
};

export type ListaAtividades = {
  atividades: Atividade[];
};