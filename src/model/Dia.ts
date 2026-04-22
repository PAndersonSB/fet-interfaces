export type Dia = {
  id: string;
  nome: string; // "Monday", "Tuesday"
  ordem: number;
};

export type ListaDias = {
  dias: Dia[];
};