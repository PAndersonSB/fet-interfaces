"use client";

import { createContext, useContext, useState } from "react";
import { Professor } from "@/src/model/Professor";

type ContextType = {
  professores: Professor[];
  add: (p: Professor) => void;
  remove: (id: string) => void;
};

const ProfessoresContext = createContext<ContextType | null>(null);

export function ProfessoresProvider({ children }: { children: React.ReactNode }) {
  const [professores, setProfessores] = useState<Professor[]>([]);

  function add(p: Professor) {
    setProfessores(prev => [...prev, p]);
  }

  function remove(id: string) {
    setProfessores(prev => prev.filter(p => p.id !== id));
  }

  return (
    <ProfessoresContext.Provider value={{ professores, add, remove }}>
      {children}
    </ProfessoresContext.Provider>
  );
}

export function useProfessores() {
  const ctx = useContext(ProfessoresContext);
  if (!ctx) throw new Error("useProfessores fora do provider");
  return ctx;
}