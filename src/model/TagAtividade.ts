export type TagAtividade = {
  nome: string;           // Name
  imprimivel: boolean;    // Printable
  comentarios?: string;
};

export type ListaTagsAtividade = {
  tags: TagAtividade[];
};