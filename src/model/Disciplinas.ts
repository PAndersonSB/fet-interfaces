export type Disciplina = {
  nome: string;           // Name
  comentarios?: string;   // Comments
};

export type ListaDisciplinas = {
  disciplinas: Disciplina[];
};