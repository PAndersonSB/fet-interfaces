export type Subgrupo = {
  nome: string;
  numeroAlunos?: number;
  comentarios?: string;
};

export type Grupo = {
  nome: string;
  numeroAlunos?: number;
  comentarios?: string;
  subgrupos?: Subgrupo[];
};

export type Ano = {
  nome: string;
  numeroAlunos?: number;
  comentarios?: string;
  grupos?: Grupo[];
};

export type ListaEstudantes = {
  anos: Ano[];
};