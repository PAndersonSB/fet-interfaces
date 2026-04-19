"use client";

import { createContext, useContext, useState } from "react";
import { Disciplina } from "@/src/model/Disciplina";

type ContextType = {
  disciplinas: Disciplina[];
  add: (d: Disciplina) => void;
  remove: (id: string) => void;
  update: (id: string, nome: string) => void;
};

const DisciplinasContext = createContext<ContextType | null>(null);

export function DisciplinasProvider({ children }: { children: React.ReactNode }) {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  function add(d: Disciplina) {
    setDisciplinas(prev => [...prev, d]);
  }

  function remove(id: string) {
    setDisciplinas(prev => prev.filter(d => d.id !== id));
  }

  function update(id: string, nome: string) {
    setDisciplinas(prev =>
      prev.map(d => d.id === id ? { ...d, nome } : d)
    );
  }

  return (
    <DisciplinasContext.Provider value={{ disciplinas, add, remove, update }}>
      {children}
    </DisciplinasContext.Provider>
  );
}

export function useDisciplinas() {
  const context = useContext(DisciplinasContext);
  if (!context) throw new Error("useDisciplinas fora do provider");
  return context;
}