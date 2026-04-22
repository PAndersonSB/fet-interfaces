export type Dia = {
  id: string;
  nome: string; // "Monday", "Tuesday"
};

export type ListaDias = {
  numeroDeDias: number,
  dias: Dia[];
};