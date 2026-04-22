export type Hora = {
  id: string;
  nome: string; // "1", "2", "3"
  ordem: number;
};

export type ListaHoras = {
  numeroDeHoras: number,
  horas: Hora[];
};